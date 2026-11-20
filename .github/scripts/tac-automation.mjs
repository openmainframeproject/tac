#!/usr/bin/env node
// TAC automation engine.
//
//   node tac-automation.mjs intake         issues opened/edited: thank-you comment, LF Onboarding, short/long label
//   node tac-automation.mjs sync           poll the board: post messages for column moves / Scheduled Date
//   node tac-automation.mjs nightly-move   put agenda items in the right Agenda column by Scheduled Date
//   node tac-automation.mjs rollover       annual review: move Scheduled Date out a year and comment
//
// Settings and message copy live in ../tac-automation.json. No dependencies (Node 20+).
//
// Why polling: GitHub Actions has no trigger for org Project (v2) cards moving between columns, so
// `sync` looks at the board on a short schedule. Every comment ends with a hidden marker
// (<!-- tac-bot:KEY -->) and is only posted when that marker is not already on the issue, so
// running often is safe and nothing is posted twice.

import fs from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';

/* ------------------------------------------------------------------ utilities */

export const marker = (key) => `<!-- tac-bot:${key} -->`;
const pad = (n) => String(n).padStart(2, '0');
const eq = (a, b) => String(a ?? '').trim().toLowerCase() === String(b ?? '').trim().toLowerCase();

export function render(template, vars) {
  return template.replace(/\{\{\s*(\w+)\s*\}\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
}

export function message(config, name, vars = {}) {
  const t = config.messages?.[name];
  if (!t) throw new Error(`No message "${name}" in tac-automation.json`);
  const text = Array.isArray(t) ? t.join('\n') : t;
  return render(text, { boardUrl: config.projectUrl, command: config.rollover?.command, ...config.vars, ...vars })
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

/** YYYY-MM-DD for "now" in the given IANA time zone. */
export function todayIn(timeZone, now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

export function daysBetween(fromIso, toIso) {
  return Math.round((Date.parse(`${toIso}T00:00:00Z`) - Date.parse(`${fromIso}T00:00:00Z`)) / 86400000);
}

/** Same month/day n years later; Feb 29 clamps to Feb 28 in non-leap years. */
export function addYears(iso, n) {
  const [y, m, d] = iso.split('-').map(Number);
  const ny = y + n;
  const lastDay = new Date(Date.UTC(ny, m, 0)).getUTCDate();
  return `${ny}-${pad(m)}-${pad(Math.min(d, lastDay))}`;
}

export function prettyDate(iso) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  });
}

const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const ISO = /^\d{4}-\d{2}-\d{2}$/;

export function addDays(iso, n) {
  return new Date(Date.parse(`${iso}T00:00:00Z`) + n * 86400000).toISOString().slice(0, 10);
}

/** Days ahead that meeting dates are generated for. */
export const MEETING_HORIZON_DAYS = 400;

/**
 * TAC meeting dates from `from` through `from + horizonDays`: every `weekday` whose position in the month
 * is in `nth` (all of them if nth is omitted), plus `extra`, minus `cancelled`. Sorted, YYYY-MM-DD.
 */
export function meetingDates(from, rule, horizonDays = MEETING_HORIZON_DAYS) {
  const wd = WEEKDAYS.indexOf(rule.weekday ?? 'Thursday');
  if (wd < 0) throw new Error(`meetings.weekday must be a day name, got "${rule.weekday}"`);
  const dates = new Set(rule.extra ?? []);
  for (let i = 0; i <= horizonDays; i++) {
    const iso = addDays(from, i);
    const day = new Date(`${iso}T00:00:00Z`);
    if (day.getUTCDay() !== wd) continue;
    const nth = Math.floor((day.getUTCDate() - 1) / 7) + 1;
    if (!rule.nth || rule.nth.includes(nth)) dates.add(iso);
  }
  for (const c of rule.cancelled ?? []) dates.delete(c);
  const end = addDays(from, horizonDays);
  return [...dates].filter((d) => d >= from && d <= end).sort();
}

/**
 * Move a date onto a TAC meeting date. mode: "nearest" (ties go to the earlier meeting), "after" (first
 * meeting on or after the date) or "none". A date that is already a meeting date is returned unchanged.
 */
export function snapToMeeting(iso, rule, mode = 'nearest') {
  if (mode === 'none') return iso;
  if (!['nearest', 'after'].includes(mode)) throw new Error(`rollover.snap must be nearest, after or none, got "${mode}"`);
  const candidates = meetingDates(addDays(iso, -31), rule, 62);
  if (candidates.includes(iso) || !candidates.length) return iso;
  if (mode === 'after') return candidates.find((d) => d >= iso) ?? iso;
  let best = candidates[0];
  for (const d of candidates) {
    if (Math.abs(daysBetween(iso, d)) < Math.abs(daysBetween(iso, best))) best = d;
  }
  return best;
}

/** Which Agenda column a Scheduled Date belongs in, or null if the date has passed. */
export function targetColumn(date, today, dates, cols) {
  if (date < today) return null;
  const [first, second] = dates;
  if (first === undefined || date <= first) return cols.upcoming;
  if (second === undefined || date <= second) return cols.next;
  return cols.future;
}

export function validateConfig(config) {
  if (!['nearest', 'after', 'none'].includes(config.rollover?.snap ?? 'nearest')) {
    throw new Error('rollover.snap must be nearest, after or none');
  }
  const m = config.meetings ?? {};
  if (!WEEKDAYS.includes(m.weekday)) throw new Error(`meetings.weekday must be one of ${WEEKDAYS.join(', ')}`);
  for (const d of [...(m.cancelled ?? []), ...(m.extra ?? [])]) {
    if (!ISO.test(d)) throw new Error(`meetings dates must be YYYY-MM-DD, got "${d}"`);
  }
}

/** Answer to one question of a GitHub issue form (rendered as "### Heading\n\nanswer"). */
export function formSection(body, heading) {
  if (!body) return null;
  for (const part of body.split(/^###\s+/m).slice(1)) {
    const nl = part.indexOf('\n');
    const title = (nl === -1 ? part : part.slice(0, nl)).trim();
    if (eq(title, heading)) {
      const answer = (nl === -1 ? '' : part.slice(nl + 1)).trim();
      return /^_no response_$/i.test(answer) ? '' : answer;
    }
  }
  return null;
}

/** 'short' | 'long' | null from the answer to the time-needed question. */
export function lengthFor(answer, cfg) {
  const a = String(answer ?? '').trim().toLowerCase();
  if (!a) return null;
  for (const [kind, options] of Object.entries(cfg.match ?? {})) {
    if (options.some((o) => eq(o, a))) return kind;
  }
  if (/\bshort\b/.test(a)) return 'short';
  if (/\blong\b/.test(a)) return 'long';
  const n = a.match(/\d+/);
  if (n) return Number(n[0]) <= cfg.shortMaxMinutes ? 'short' : 'long';
  return null;
}

/** "New Project Proposal - Foo" -> "Foo" (falls back to the full title). */
export function projectNameFromTitle(title, prefixes) {
  const t = String(title ?? '').trim();
  for (const p of prefixes) {
    if (t.toLowerCase().startsWith(p.toLowerCase())) {
      const rest = t.slice(p.length).replace(/^[\s\-\u2013\u2014:]+/, '').trim();
      if (rest) return rest;
    }
  }
  return t;
}

export function parseProjectUrl(url) {
  const m = /github\.com\/orgs\/([^/]+)\/projects\/(\d+)/.exec(url ?? '');
  if (!m) throw new Error(`projectUrl must look like https://github.com/orgs/<org>/projects/<n>, got: ${url}`);
  return { org: m[1], number: Number(m[2]) };
}

/* ------------------------------------------------------------------ GitHub client */

export function makeClient({ token, api = 'https://api.github.com', fetchImpl = globalThis.fetch }) {
  const base = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'tac-automation',
  };
  async function rest(method, path, body) {
    const res = await fetchImpl(`${api}${path}`, {
      method,
      headers: body ? { ...base, 'Content-Type': 'application/json' } : base,
      body: body ? JSON.stringify(body) : undefined,
    });
    if (res.status === 204) return null;
    const text = await res.text();
    if (!res.ok) {
      const err = new Error(`${method} ${path} -> ${res.status}: ${text.slice(0, 300)}`);
      err.status = res.status;
      throw err;
    }
    return text ? JSON.parse(text) : null;
  }
  async function gql(query, variables = {}) {
    const res = await fetchImpl(`${api}/graphql`, {
      method: 'POST',
      headers: { ...base, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });
    const json = await res.json();
    if (!res.ok || json.errors) throw new Error(`GraphQL failed: ${JSON.stringify(json.errors ?? json).slice(0, 500)}`);
    return json.data;
  }
  return { rest, gql };
}

/* ------------------------------------------------------------------ project board */

const LOAD_PROJECT = `query LoadProject($org: String!, $number: Int!) {
  organization(login: $org) { projectV2(number: $number) { id title
    fields(first: 50) { nodes {
      __typename
      ... on ProjectV2Field { id name dataType }
      ... on ProjectV2SingleSelectField { id name dataType options { id name } }
      ... on ProjectV2IterationField { id name dataType }
    } } } } }`;

const LIST_ITEMS = `query ListItems($id: ID!, $after: String) {
  node(id: $id) { ... on ProjectV2 { items(first: 50, after: $after) {
    pageInfo { hasNextPage endCursor }
    nodes { id updatedAt
      content { __typename ... on Issue { id number title url state
        author { login }
        repository { nameWithOwner }
        labels(first: 50) { nodes { name } }
        comments(last: 100) { totalCount nodes { body } } } }
      fieldValues(first: 30) { nodes {
        __typename
        ... on ProjectV2ItemFieldSingleSelectValue { name field { ... on ProjectV2FieldCommon { name } } }
        ... on ProjectV2ItemFieldDateValue { date field { ... on ProjectV2FieldCommon { name } } }
      } } } } } } }`;

const ADD_ITEM = `mutation AddItem($project: ID!, $content: ID!) {
  addProjectV2ItemById(input: { projectId: $project, contentId: $content }) { item { id } } }`;

const SET_FIELD = `mutation SetField($project: ID!, $item: ID!, $field: ID!, $value: ProjectV2FieldValue!) {
  updateProjectV2ItemFieldValue(input: { projectId: $project, itemId: $item, fieldId: $field, value: $value }) {
    projectV2Item { id } } }`;

export async function loadProject(client, { org, number }) {
  const data = await client.gql(LOAD_PROJECT, { org, number });
  const p = data.organization?.projectV2;
  if (!p) throw new Error(`Project ${org}/${number} was not found, or the token cannot see it.`);
  const fields = new Map();
  for (const f of p.fields.nodes) if (f?.name) fields.set(f.name.toLowerCase(), f);
  return { id: p.id, title: p.title, fields };
}

export function getField(project, name) {
  const f = project.fields.get(String(name).toLowerCase());
  if (!f) {
    const have = [...project.fields.values()].map((x) => x.name).join(', ');
    throw new Error(`Board field "${name}" not found. Fields on the board: ${have}`);
  }
  return f;
}

export function getOption(field, name) {
  const o = (field.options ?? []).find((x) => eq(x.name, name));
  if (!o) {
    const have = (field.options ?? []).map((x) => x.name).join(', ');
    throw new Error(`Column "${name}" not found in field "${field.name}". Columns: ${have}`);
  }
  return o;
}

export function normalizeItem(node, cfg) {
  const c = node.content;
  if (!c || c.__typename !== 'Issue') return null; // skip PRs and draft items
  let status = null;
  let date = null;
  for (const v of node.fieldValues.nodes) {
    const fname = v?.field?.name;
    if (!fname) continue;
    if (v.__typename === 'ProjectV2ItemFieldSingleSelectValue' && eq(fname, cfg.fields.status)) status = v.name;
    if (v.__typename === 'ProjectV2ItemFieldDateValue' && eq(fname, cfg.fields.scheduledDate)) date = v.date;
  }
  return {
    itemId: node.id,
    updatedAt: node.updatedAt,
    status,
    date,
    issue: {
      nodeId: c.id,
      number: c.number,
      title: c.title,
      url: c.url,
      open: c.state === 'OPEN',
      repo: c.repository.nameWithOwner,
      author: c.author?.login ?? 'ghost',
      labels: c.labels.nodes.map((l) => l.name),
      commentsTotal: c.comments.totalCount,
      comments: c.comments.nodes.map((n) => n.body ?? ''),
    },
  };
}

export async function listItems(client, project, cfg) {
  const items = [];
  let after = null;
  for (;;) {
    const data = await client.gql(LIST_ITEMS, { id: project.id, after });
    const page = data.node.items;
    for (const n of page.nodes) {
      const item = normalizeItem(n, cfg);
      if (item) items.push(item);
    }
    if (!page.pageInfo.hasNextPage) break;
    after = page.pageInfo.endCursor;
  }
  return items;
}

/* ------------------------------------------------------------------ actions with side effects */

/** Every comment body on the issue. Uses the copy fetched with the board unless the issue has more than 100. */
async function commentBodies(ctx, issue) {
  if (issue.comments && issue.commentsTotal <= issue.comments.length) return issue.comments;
  const out = [];
  for (let page = 1; ; page++) {
    const batch = await ctx.client.rest('GET', `/repos/${issue.repo}/issues/${issue.number}/comments?per_page=100&page=${page}`);
    out.push(...batch.map((c) => c.body ?? ''));
    if (batch.length < 100) break;
  }
  issue.comments = out;
  issue.commentsTotal = out.length;
  return out;
}

const hasMarker = (bodies, key) => bodies.some((b) => b.includes(marker(key)));

async function postComment(ctx, issue, body, keys) {
  const full = keys.length ? `${body}\n\n${keys.map(marker).join('\n')}` : body;
  ctx.log(`${ctx.dryRun ? '[dry-run] would comment' : 'comment'} on #${issue.number}${keys.length ? ` (${keys.join(', ')})` : ''}`);
  ctx.posted = (ctx.posted ?? 0) + 1;
  if (ctx.dryRun) return;
  await ctx.client.rest('POST', `/repos/${issue.repo}/issues/${issue.number}/comments`, { body: full });
  issue.comments.push(full);
  issue.commentsTotal += 1;
}

async function setSingleSelect(ctx, project, itemId, fieldName, optionName) {
  const field = getField(project, fieldName);
  const option = getOption(field, optionName);
  await ctx.client.gql(SET_FIELD, { project: project.id, item: itemId, field: field.id, value: { singleSelectOptionId: option.id } });
}

async function setDate(ctx, project, itemId, fieldName, iso) {
  const field = getField(project, fieldName);
  await ctx.client.gql(SET_FIELD, { project: project.id, item: itemId, field: field.id, value: { date: iso } });
}

async function addLabel(ctx, repo, number, label) {
  ctx.log(`${ctx.dryRun ? '[dry-run] would add' : 'add'} label ${label} to #${number}`);
  if (!ctx.dryRun) await ctx.client.rest('POST', `/repos/${repo}/issues/${number}/labels`, { labels: [label] });
}

async function removeLabel(ctx, repo, number, label) {
  ctx.log(`${ctx.dryRun ? '[dry-run] would remove' : 'remove'} label ${label} from #${number}`);
  if (ctx.dryRun) return;
  try {
    await ctx.client.rest('DELETE', `/repos/${repo}/issues/${number}/labels/${encodeURIComponent(label)}`);
  } catch (e) {
    if (e.status !== 404) throw e; // label was not on the issue
  }
}

/* ------------------------------------------------------------------ intake (issues opened / edited) */

export async function runIntake(ctx, event) {
  const { config: cfg, repo } = ctx;
  const issue = event.issue;
  if (!issue || issue.pull_request) return ctx.log('Not an issue, skipping.');
  if (issue.user?.type === 'Bot') return ctx.log('Opened by a bot, skipping.');
  if (issue.state !== 'open') return ctx.log('Issue is not open, skipping.');

  const labels = (issue.labels ?? []).map((l) => l.name);
  const submitter = `@${issue.user.login}`;
  const ref = { repo, number: issue.number, comments: null, commentsTotal: Infinity };
  const existing = async () => commentBodies(ctx, ref);

  const isNewProject =
    labels.includes(cfg.labels.newProject) &&
    cfg.newProjectTitlePrefixes.some((p) => (issue.title ?? '').toLowerCase().startsWith(p.toLowerCase()));

  if (isNewProject) {
    if (event.action !== 'opened') return ctx.log('New project issue edited; nothing to do.');
    const bodies = await existing();
    if (!hasMarker(bodies, 'new-project')) {
      // Comment first, then move on the board, so the sync job does not also post its own LF Onboarding message.
      const text = message(cfg, 'newProject', { title: projectNameFromTitle(issue.title, cfg.newProjectTitlePrefixes), submitter });
      await postComment(ctx, ref, text, ['new-project', 'onboarding-started']);
    } else {
      ctx.log(`#${issue.number} already has the new-project comment.`);
    }
    const project = await loadProject(ctx.client, parseProjectUrl(cfg.projectUrl));
    const statusField = getField(project, cfg.fields.status);
    const option = getOption(statusField, cfg.columns.onboarding);
    ctx.log(`${ctx.dryRun ? '[dry-run] would add' : 'add'} #${issue.number} to the board in "${option.name}"`);
    if (!ctx.dryRun) {
      const added = await ctx.client.gql(ADD_ITEM, { project: project.id, content: issue.node_id });
      await setSingleSelect(ctx, project, added.addProjectV2ItemById.item.id, cfg.fields.status, cfg.columns.onboarding);
    }
    return;
  }

  const answer = formSection(issue.body, cfg.topicLength.heading);
  if (labels.includes(cfg.labels.agenda) && answer !== null) {
    const kind = lengthFor(answer, cfg.topicLength);
    if (!kind) return ctx.log(`Could not tell short/long from "${answer}"; no label applied.`);
    const want = cfg.topicLength.labels[kind];
    const other = cfg.topicLength.labels[kind === 'short' ? 'long' : 'short'];
    if (!labels.includes(want)) await addLabel(ctx, repo, issue.number, want);
    if (labels.includes(other)) await removeLabel(ctx, repo, issue.number, other);
    if (event.action === 'opened') {
      const bodies = await existing();
      if (!hasMarker(bodies, 'agenda-thanks')) {
        const lengthNote = `We marked this as a **${kind}** topic (${answer}) so the TAC can plan the agenda. Edit the issue if that is not right.`;
        await postComment(ctx, ref, message(cfg, 'agendaThanks', { submitter, lengthNote }), ['agenda-thanks']);
      }
    }
    return;
  }
  ctx.log('Issue did not match a new project or an agenda item; nothing to do.');
}

/* ------------------------------------------------------------------ sync (board polling) */

export async function runSync(ctx, items) {
  const { config: cfg } = ctx;
  const cols = cfg.columns;
  const agenda = [cols.upcoming, cols.next, cols.future];
  const cutoff = ctx.now.getTime() - ctx.lookbackHours * 3600 * 1000;
  for (const it of items) {
    const issue = it.issue;
    if (!issue.open || issue.repo !== ctx.repo) continue;
    if (!ctx.backfill && Date.parse(it.updatedAt) < cutoff) continue;

    const bodies = await commentBodies(ctx, issue);
    const vars = { title: issue.title, submitter: `@${issue.author}`, column: it.status ?? '' };

    if (it.status && eq(it.status, cols.onboarding) && !hasMarker(bodies, 'onboarding-started')) {
      await postComment(ctx, issue, message(cfg, 'onboarding', vars), ['onboarding-started']);
    }
    if (it.status && eq(it.status, cols.voting) && !hasMarker(bodies, 'in-voting')) {
      await postComment(ctx, issue, message(cfg, 'inVoting', vars), ['in-voting']);
    }
    if (
      it.status && agenda.some((c) => eq(c, it.status)) &&
      hasMarker(bodies, 'onboarding-started') && !hasMarker(bodies, 'onboarding-complete')
    ) {
      await postComment(ctx, issue, message(cfg, 'onboardingComplete', vars), ['onboarding-complete']);
    }
    if (it.date && !hasMarker(bodies, `scheduled:${it.date}`)) {
      const previous = [...bodies.join('\n').matchAll(/tac-bot:scheduled:(\d{4}-\d{2}-\d{2})/g)].map((m) => m[1]).pop();
      const name = previous ? 'rescheduled' : 'scheduled';
      await postComment(ctx, issue, message(cfg, name, { ...vars, date: prettyDate(it.date), previousDate: previous ? prettyDate(previous) : '' }), [`scheduled:${it.date}`]);
    }
  }
  ctx.log(`sync finished: ${ctx.posted ?? 0} comment(s) ${ctx.dryRun ? 'would be posted (dry run)' : 'posted'}.`);
  return ctx.posted ?? 0;
}

/* ------------------------------------------------------------------ nightly move */

export async function runNightlyMove(ctx, project, items) {
  const { config: cfg } = ctx;
  const cols = cfg.columns;
  const agenda = [cols.upcoming, cols.next, cols.future];
  const today = todayIn(cfg.timezone, ctx.now);
  const dates = meetingDates(today, cfg.meetings);
  const horizon = addDays(today, MEETING_HORIZON_DAYS);
  const moved = [];
  const overdue = [];
  const undated = [];
  const offMeeting = [];
  ctx.log(`Next meetings: ${dates.slice(0, 3).join(', ')} (Upcoming = ${dates[0]}, Next = ${dates[1]}).`);

  for (const it of items) {
    if (!it.issue.open || it.issue.repo !== ctx.repo) continue;
    if (!it.status || !agenda.some((c) => eq(c, it.status))) continue; // only touch the three Agenda columns
    if (!it.date) { undated.push(it); continue; }
    const target = targetColumn(it.date, today, dates, cols);
    if (!target) { overdue.push(it); continue; }
    if (it.date <= horizon && !dates.includes(it.date)) offMeeting.push(it);
    if (eq(target, it.status)) continue;
    ctx.log(`${ctx.dryRun ? '[dry-run] would move' : 'move'} #${it.issue.number} "${it.issue.title}" (${it.date}): ${it.status} -> ${target}`);
    if (!ctx.dryRun) await setSingleSelect(ctx, project, it.itemId, cfg.fields.status, target);
    moved.push({ number: it.issue.number, from: it.status, to: target });
  }
  for (const it of overdue) ctx.log(`needs attention: #${it.issue.number} "${it.issue.title}" is in "${it.status}" but its date ${it.date} has passed`);
  for (const it of offMeeting) ctx.log(`needs attention: #${it.issue.number} "${it.issue.title}" is dated ${it.date}, which is not a TAC meeting date (cancelled, or not a meeting day) - reschedule it`);
  for (const it of undated) ctx.log(`no date: #${it.issue.number} "${it.issue.title}" is in "${it.status}" without a Scheduled Date`);
  ctx.log(`nightly move finished: ${moved.length} moved, ${overdue.length} past-dated, ${offMeeting.length} not on a meeting date, ${undated.length} undated (${today}).`);
  return { moved, overdue, undated, offMeeting };
}

/* ------------------------------------------------------------------ annual review rollover */

const WRITE_ROLES = new Set(['admin', 'maintain', 'write']);

export async function runRollover(ctx, { issueNumber, actor, checkPermission }) {
  const { config: cfg, repo } = ctx;
  if (checkPermission) {
    const perm = await ctx.client.rest('GET', `/repos/${repo}/collaborators/${encodeURIComponent(actor)}/permission`);
    if (!WRITE_ROLES.has(perm.role_name ?? perm.permission)) {
      return ctx.log(`${actor} does not have write access; ignoring ${cfg.rollover.command}.`);
    }
  }
  const raw = await ctx.client.rest('GET', `/repos/${repo}/issues/${issueNumber}`);
  const issue = { repo, number: issueNumber, comments: [], commentsTotal: 0 };
  const vars = { actor, command: cfg.rollover.command, annualReviewLabel: cfg.labels.annualReview };

  if (raw.pull_request || !(raw.labels ?? []).some((l) => l.name === cfg.labels.annualReview)) {
    return postComment(ctx, issue, message(cfg, 'rolloverWrongIssue', vars), []);
  }
  const project = await loadProject(ctx.client, parseProjectUrl(cfg.projectUrl));
  const item = (await listItems(ctx.client, project, cfg)).find((i) => i.issue.repo === repo && i.issue.number === issueNumber);
  if (!item || !item.date) return postComment(ctx, issue, message(cfg, 'rolloverNoDate', vars), []);

  const years = cfg.rollover.years;
  const rawDate = addYears(item.date, years);
  const newDate = snapToMeeting(rawDate, cfg.meetings, cfg.rollover.snap ?? 'nearest');
  const snapNote = newDate === rawDate ? '' : `${years === 1 ? 'One year out' : `${years} years out`} would be ${prettyDate(rawDate)}, which is not a TAC meeting date, so it was moved to ${cfg.rollover.snap === 'after' ? 'the next' : 'the nearest'} meeting.`;
  ctx.log(`${ctx.dryRun ? '[dry-run] would move' : 'move'} #${issueNumber} Scheduled Date ${item.date} -> ${newDate}${snapNote ? ` (snapped from ${rawDate})` : ''}`);
  if (!ctx.dryRun) await setDate(ctx, project, item.itemId, cfg.fields.scheduledDate, newDate);
  // The scheduled:<date> marker tells the sync job this date change is already announced.
  await postComment(
    ctx, issue,
    message(cfg, 'rollover', { ...vars, years: years === 1 ? 'one year' : `${years} years`, oldDate: prettyDate(item.date), newDate: prettyDate(newDate), snapNote }),
    [`scheduled:${newDate}`],
  );
}

/* ------------------------------------------------------------------ CLI */

function loadConfig() {
  return JSON.parse(fs.readFileSync(fileURLToPath(new URL('../tac-automation.json', import.meta.url)), 'utf8'));
}

async function main() {
  const mode = process.argv[2];
  const env = process.env;
  const config = loadConfig();
  validateConfig(config);
  const repo = env.GITHUB_REPOSITORY;
  if (!env.GITHUB_TOKEN || !repo) throw new Error('GITHUB_TOKEN and GITHUB_REPOSITORY are required.');

  const lines = [];
  const ctx = {
    config,
    repo,
    now: new Date(),
    dryRun: /^true$/i.test(env.DRY_RUN ?? ''),
    backfill: /^true$/i.test(env.BACKFILL ?? ''),
    lookbackHours: Number(env.LOOKBACK_HOURS || config.sync.lookbackHours),
    client: makeClient({ token: env.GITHUB_TOKEN, api: env.GITHUB_API_URL || 'https://api.github.com' }),
    log: (line) => { lines.push(line); console.log(line); },
  };

  try {
    if (mode === 'intake') {
      await runIntake(ctx, JSON.parse(fs.readFileSync(env.GITHUB_EVENT_PATH, 'utf8')));
    } else if (mode === 'sync' || mode === 'nightly-move') {
      const project = await loadProject(ctx.client, parseProjectUrl(config.projectUrl));
      const status = getField(project, config.fields.status);
      for (const c of Object.values(config.columns)) getOption(status, c); // fail loudly if a column was renamed
      getField(project, config.fields.scheduledDate);
      const items = await listItems(ctx.client, project, config);
      ctx.log(`Read ${items.length} issues from "${project.title}".`);
      if (mode === 'sync') await runSync(ctx, items);
      else await runNightlyMove(ctx, project, items);
    } else if (mode === 'rollover') {
      const event = env.GITHUB_EVENT_PATH ? JSON.parse(fs.readFileSync(env.GITHUB_EVENT_PATH, 'utf8')) : {};
      const fromComment = event.comment?.body !== undefined;
      if (fromComment && !new RegExp(`^\\s*${config.rollover.command}(\\s|$)`, 'i').test(event.comment.body)) {
        return ctx.log('Comment is not the rollover command.');
      }
      const issueNumber = Number(fromComment ? event.issue.number : env.ISSUE_NUMBER);
      if (!issueNumber) throw new Error('No issue number (set ISSUE_NUMBER or run from an issue comment).');
      await runRollover(ctx, {
        issueNumber,
        actor: fromComment ? event.comment.user.login : env.GITHUB_ACTOR,
        checkPermission: fromComment,
      });
    } else {
      throw new Error(`Unknown mode "${mode}". Use: intake | sync | nightly-move | rollover`);
    }
  } finally {
    if (env.GITHUB_STEP_SUMMARY && lines.length) {
      fs.appendFileSync(env.GITHUB_STEP_SUMMARY, `### TAC automation: ${mode}${ctx.dryRun ? ' (dry run)' : ''}\n\n${lines.map((l) => `- ${l}`).join('\n')}\n`);
    }
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((err) => {
    console.error(`::error::${err.message}`);
    process.exit(1);
  });
}
