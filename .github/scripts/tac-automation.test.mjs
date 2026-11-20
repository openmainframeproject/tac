// Run with: node --test .github/scripts/
// Uses an in-memory fake of GitHub, so no network or token is needed.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  addYears, daysBetween, targetColumn, todayIn, formSection, lengthFor, projectNameFromTitle, render, message,
  runIntake, runSync, runNightlyMove, runRollover, marker,
} from './tac-automation.mjs';

const config = JSON.parse(fs.readFileSync(new URL('../tac-automation.json', import.meta.url), 'utf8'));
const REPO = 'openmainframeproject/tac';
const NOW = new Date('2026-11-20T12:00:00Z');
const RECENT = '2026-11-20T10:00:00Z';
const OLD = '2026-10-01T10:00:00Z';
const COLS = config.columns;

/* ---------------------------------------------------------------- fake GitHub */

function makeFake({ items = [], perms = {}, issues = {} } = {}) {
  const f = {
    items: items.map((i) => ({ comments: [], labels: [], author: 'alice', state: 'OPEN', repo: REPO, updatedAt: RECENT, status: null, date: null, ...i })),
    labels: new Map(), // issue number -> Set of labels added/removed through the API
    mutations: [],
    perms,
    issues,
    log: [],
  };
  const options = Object.values(COLS).concat('Done').map((name, i) => ({ id: `opt${i}`, name }));
  const nodeFor = (i) => ({
    id: `PVTI_${i.number}`,
    updatedAt: i.updatedAt,
    content: {
      __typename: 'Issue', id: `I_${i.number}`, number: i.number, title: i.title ?? `Item ${i.number}`, url: `https://x/${i.number}`,
      state: i.state, author: { login: i.author }, repository: { nameWithOwner: i.repo },
      labels: { nodes: i.labels.map((name) => ({ name })) },
      comments: { totalCount: i.comments.length, nodes: i.comments.map((body) => ({ body })) },
    },
    fieldValues: { nodes: [
      ...(i.status ? [{ __typename: 'ProjectV2ItemFieldSingleSelectValue', name: i.status, field: { name: 'Status' } }] : []),
      ...(i.date ? [{ __typename: 'ProjectV2ItemFieldDateValue', date: i.date, field: { name: 'Scheduled Date' } }] : []),
    ] },
  });
  const byNumber = (n) => f.items.find((i) => i.number === n);

  f.client = {
    async gql(query, vars) {
      const op = /(?:query|mutation)\s+(\w+)/.exec(query)[1];
      if (op === 'LoadProject') {
        return { organization: { projectV2: { id: 'PVT_1', title: 'TAC Agenda', fields: { nodes: [
          { __typename: 'ProjectV2SingleSelectField', id: 'F_status', name: 'Status', dataType: 'SINGLE_SELECT', options },
          { __typename: 'ProjectV2Field', id: 'F_date', name: 'Scheduled Date', dataType: 'DATE' },
        ] } } } };
      }
      if (op === 'ListItems') return { node: { items: { pageInfo: { hasNextPage: false, endCursor: null }, nodes: f.items.map(nodeFor) } } };
      if (op === 'AddItem') {
        f.mutations.push({ op, content: vars.content });
        return { addProjectV2ItemById: { item: { id: `PVTI_new_${vars.content}` } } };
      }
      if (op === 'SetField') {
        f.mutations.push({ op, item: vars.item, field: vars.field, value: vars.value });
        const num = Number(String(vars.item).replace('PVTI_', ''));
        const it = byNumber(num);
        if (it && vars.value.singleSelectOptionId) it.status = options.find((o) => o.id === vars.value.singleSelectOptionId).name;
        if (it && vars.value.date) it.date = vars.value.date;
        return { updateProjectV2ItemFieldValue: { projectV2Item: { id: vars.item } } };
      }
      throw new Error(`unexpected gql ${op}`);
    },
    async rest(method, path, body) {
      let m;
      if ((m = /^\/repos\/[^/]+\/[^/]+\/issues\/(\d+)\/comments/.exec(path))) {
        const num = Number(m[1]);
        const it = byNumber(num) ?? (f.extra ??= new Map()).get(num) ?? (f.extra.set(num, { number: num, comments: [] }), f.extra.get(num));
        if (method === 'GET') return it.comments.map((b) => ({ body: b }));
        if (method === 'POST') { it.comments.push(body.body); f.log.push({ num, body: body.body }); return {}; }
      }
      if ((m = /^\/repos\/[^/]+\/[^/]+\/issues\/(\d+)\/labels(?:\/(.+))?$/.exec(path))) {
        const num = Number(m[1]);
        const set = f.labels.get(num) ?? new Set();
        f.labels.set(num, set);
        if (method === 'POST') body.labels.forEach((l) => set.add(l));
        if (method === 'DELETE') set.delete(decodeURIComponent(m[2]));
        f.mutations.push({ op: `label-${method}`, num, label: body?.labels?.[0] ?? decodeURIComponent(m[2] ?? '') });
        return null;
      }
      if ((m = /^\/repos\/[^/]+\/[^/]+\/collaborators\/([^/]+)\/permission$/.exec(path))) {
        return { permission: f.perms[decodeURIComponent(m[1])] ?? 'none', role_name: f.perms[decodeURIComponent(m[1])] ?? 'none' };
      }
      if ((m = /^\/repos\/[^/]+\/[^/]+\/issues\/(\d+)$/.exec(path))) {
        const num = Number(m[1]);
        const it = byNumber(num);
        return f.issues[num] ?? { number: num, labels: (it?.labels ?? []).map((name) => ({ name })) };
      }
      throw new Error(`unexpected rest ${method} ${path}`);
    },
  };
  f.comments = (n) => (byNumber(n)?.comments ?? f.extra?.get(n)?.comments ?? []);
  f.ctx = (extra = {}) => ({
    config, repo: REPO, now: NOW, dryRun: false, backfill: false, lookbackHours: 24,
    client: f.client, log: (l) => f.log.push(l), ...extra,
  });
  return f;
}

/* ---------------------------------------------------------------- utilities */

test('addYears keeps the date and clamps Feb 29', () => {
  assert.equal(addYears('2026-12-10', 1), '2027-12-10');
  assert.equal(addYears('2028-02-29', 1), '2029-02-28');
  assert.equal(addYears('2028-02-29', 4), '2032-02-29');
});

test('todayIn uses the configured time zone', () => {
  assert.equal(todayIn('America/New_York', new Date('2026-11-21T03:00:00Z')), '2026-11-20');
  assert.equal(todayIn('UTC', new Date('2026-11-21T03:00:00Z')), '2026-11-21');
});

test('targetColumn boundaries', () => {
  const w = config.agendaWindows;
  assert.equal(targetColumn(-1, w, COLS), null);
  assert.equal(targetColumn(0, w, COLS), COLS.upcoming);
  assert.equal(targetColumn(14, w, COLS), COLS.upcoming);
  assert.equal(targetColumn(15, w, COLS), COLS.next);
  assert.equal(targetColumn(42, w, COLS), COLS.next);
  assert.equal(targetColumn(43, w, COLS), COLS.future);
  assert.equal(daysBetween('2026-11-20', '2026-12-04'), 14);
});

test('issue form parsing and short/long mapping', () => {
  const body = '### Please share any additional details\n\nstuff\n\n### How much time do you need for this topic?\n\n20 minutes\n';
  assert.equal(formSection(body, config.topicLength.heading), '20 minutes');
  assert.equal(formSection(body, 'Nope'), null);
  assert.equal(formSection('### How much time do you need for this topic?\n\n_No response_', config.topicLength.heading), '');
  const t = config.topicLength;
  assert.equal(lengthFor('5 minutes or less', t), 'short');
  assert.equal(lengthFor('20 minutes', t), 'long');
  assert.equal(lengthFor('Short (10 min)', t), 'short');
  assert.equal(lengthFor('Long discussion', t), 'long');
  assert.equal(lengthFor('45 minutes or more', t), 'long');
  assert.equal(lengthFor('', t), null);
  assert.equal(lengthFor('no idea', t), null);
});

test('project name is taken from the title without eating hyphens in the name', () => {
  const p = config.newProjectTitlePrefixes;
  assert.equal(projectNameFromTitle('New Project Proposal - Cobol-Check', p), 'Cobol-Check');
  assert.equal(projectNameFromTitle('New Project Proposal Cobol-Check', p), 'Cobol-Check');
  assert.equal(projectNameFromTitle('New Project Proposal - PROJECT NAME', p), 'PROJECT NAME');
  assert.equal(projectNameFromTitle('Something else', p), 'Something else');
});

test('every message in the config renders with no placeholders left over', () => {
  const vars = {
    title: 'T', submitter: '@a', column: 'C', date: 'D', previousDate: 'P', actor: 'x', oldDate: 'O', newDate: 'N',
    years: 'one year', lengthNote: 'L', annualReviewLabel: '2-annual-review',
  };
  for (const name of Object.keys(config.messages)) {
    const text = message(config, name, vars);
    assert.ok(text.length > 10, name);
    assert.ok(!/\{\{/.test(text), `${name} still has a placeholder: ${text}`);
  }
  assert.equal(render('a {{x}} b {{y}}', { x: 1 }), 'a 1 b {{y}}');
});

/* ---------------------------------------------------------------- intake */

const issueEvent = (over = {}) => ({
  action: 'opened',
  issue: {
    number: 7, node_id: 'I_7', state: 'open', title: 'New Project Proposal - Foo-Bar', body: '',
    user: { login: 'alice', type: 'User' },
    labels: [{ name: 'meeting-agenda' }, { name: '1-new-project-wg' }],
    ...over,
  },
});

test('new project: thanks comment first, then added to the board in LF Onboarding, once', async () => {
  const f = makeFake();
  await runIntake(f.ctx(), issueEvent());
  const comments = f.comments(7);
  assert.equal(comments.length, 1);
  assert.match(comments[0], /Thanks for submitting \*\*Foo-Bar\*\*/);
  assert.match(comments[0], /@alice/);
  assert.ok(comments[0].includes(marker('new-project')) && comments[0].includes(marker('onboarding-started')));

  const add = f.mutations.find((m) => m.op === 'AddItem');
  assert.equal(add.content, 'I_7');
  const set = f.mutations.find((m) => m.op === 'SetField');
  assert.equal(set.field, 'F_status');
  assert.equal(set.value.singleSelectOptionId, `opt${Object.values(COLS).indexOf(COLS.onboarding)}`);

  // delivered again (e.g. workflow re-run): no second comment
  await runIntake(f.ctx(), issueEvent());
  assert.equal(f.comments(7).length, 1);
});

test('new project intake ignores working group proposals, bots, closed issues and edits', async () => {
  const f = makeFake();
  await runIntake(f.ctx(), issueEvent({ title: 'New Working Group Proposal - X' }));
  await runIntake(f.ctx(), issueEvent({ user: { login: 'dependabot[bot]', type: 'Bot' } }));
  await runIntake(f.ctx(), issueEvent({ state: 'closed' }));
  await runIntake(f.ctx(), { ...issueEvent(), action: 'edited' });
  assert.equal(f.comments(7).length, 0);
  assert.equal(f.mutations.length, 0);
});

test('agenda item: label from the time answer, thanks once, label flips on edit', async () => {
  const f = makeFake();
  const body = (answer) => `### Please share any additional details\n\nx\n\n### How much time do you need for this topic?\n\n${answer}`;
  const ev = (action, answer, labels) => ({ action, issue: { ...issueEvent().issue, number: 9, title: 'AGENDA TOPIC', body: body(answer), labels: labels.map((name) => ({ name })) } });

  await runIntake(f.ctx(), ev('opened', '20 minutes', ['meeting-agenda']));
  assert.deepEqual([...f.labels.get(9)], ['3-tac-meeting-long']);
  assert.equal(f.comments(9).length, 1);
  assert.match(f.comments(9)[0], /\*\*long\*\* topic \(20 minutes\)/);

  await runIntake(f.ctx(), ev('edited', '5 minutes or less', ['meeting-agenda', '3-tac-meeting-long']));
  assert.deepEqual([...f.labels.get(9)], ['4-tac-meeting-short']);
  assert.equal(f.comments(9).length, 1, 'edit must not add a second thank-you');
  assert.ok(!f.mutations.some((m) => m.op === 'AddItem'), 'agenda items are not forced into LF Onboarding');
});

/* ---------------------------------------------------------------- sync */

test('sync posts column and date messages once and never twice', async () => {
  const f = makeFake({ items: [
    { number: 1, status: COLS.onboarding, title: 'Alpha' },
    { number: 2, status: COLS.voting, title: 'Beta' },
    { number: 3, status: COLS.next, date: '2026-12-10', comments: ['hi', `done ${marker('onboarding-started')}`] },
    { number: 4, status: COLS.future, date: '2027-01-14' },
    { number: 5, status: COLS.onboarding, updatedAt: OLD },
    { number: 6, status: COLS.voting, state: 'CLOSED' },
    { number: 8, status: COLS.voting, repo: 'someone/else' },
    { number: 10, status: COLS.future, date: '2027-01-14' }, // not onboarded: no "onboarding complete"
  ] });
  await runSync(f.ctx(), await listAll(f));

  assert.match(f.comments(1).at(-1), /moved to \*\*LF Onboarding\*\*/);
  assert.match(f.comments(2).at(-1), /now \*\*In Voting\*\*/);
  assert.match(f.comments(3).join('\n'), /LF Onboarding is complete/);
  assert.match(f.comments(3).join('\n'), /scheduled for the TAC meeting on \*\*Thursday, December 10, 2026\*\*/);
  assert.match(f.comments(4).join('\n'), /Thursday, January 14, 2027/);
  assert.ok(!/LF Onboarding is complete/.test(f.comments(10).join('\n')));
  assert.equal(f.comments(5).length, 0, 'stale item is skipped without backfill');
  assert.equal(f.comments(6).length, 0, 'closed issue skipped');
  assert.equal(f.comments(8).length, 0, 'other repo skipped');

  const total = () => f.items.reduce((n, i) => n + i.comments.length, 0);
  const after = total();
  await runSync(f.ctx(), await listAll(f));
  assert.equal(total(), after, 'second run posts nothing');
});

test('sync backfill reaches old items; dry run posts nothing', async () => {
  const f = makeFake({ items: [{ number: 5, status: COLS.onboarding, updatedAt: OLD }] });
  await runSync(f.ctx({ dryRun: true, backfill: true }), await listAll(f));
  assert.equal(f.comments(5).length, 0);
  await runSync(f.ctx({ backfill: true }), await listAll(f));
  assert.equal(f.comments(5).length, 1);
});

test('a changed Scheduled Date gets a reschedule message that names the old date', async () => {
  const f = makeFake({ items: [{ number: 11, status: COLS.next, date: '2026-12-17', comments: [`x ${marker('scheduled:2026-12-10')}`] }] });
  await runSync(f.ctx(), await listAll(f));
  const last = f.comments(11).at(-1);
  assert.match(last, /changed from Thursday, December 10, 2026 to \*\*Thursday, December 17, 2026\*\*/);
  assert.ok(last.includes(marker('scheduled:2026-12-17')));
});

/* ---------------------------------------------------------------- nightly move */

test('nightly move puts items in the right Agenda column and leaves everything else alone', async () => {
  const f = makeFake({ items: [
    { number: 21, status: COLS.future, date: '2026-12-04' },   // 14 days  -> Upcoming
    { number: 22, status: COLS.upcoming, date: '2026-12-10' }, // 20 days  -> Next
    { number: 23, status: COLS.next, date: '2027-01-14' },     // 55 days  -> Future
    { number: 24, status: COLS.next, date: '2026-12-10' },     // already right
    { number: 25, status: COLS.upcoming, date: '2026-11-12' }, // date passed: report only
    { number: 26, status: COLS.next },                         // no date: report only
    { number: 27, status: COLS.voting, date: '2026-11-25' },   // not an Agenda column
    { number: 28, status: COLS.onboarding, date: '2026-11-25' },
    { number: 29, status: COLS.future, date: '2026-12-10', state: 'CLOSED' },
  ] });
  const project = { id: 'PVT_1', fields: new Map([
    ['status', { id: 'F_status', name: 'Status', options: Object.values(COLS).concat('Done').map((name, i) => ({ id: `opt${i}`, name })) }],
  ]) };
  const res = await runNightlyMove(f.ctx(), project, await listAll(f));
  assert.deepEqual(res.moved.map((m) => [m.number, m.to]), [[21, COLS.upcoming], [22, COLS.next], [23, COLS.future]]);
  assert.deepEqual(res.overdue.map((i) => i.issue.number), [25]);
  assert.deepEqual(res.undated.map((i) => i.issue.number), [26]);
  assert.equal(f.mutations.filter((m) => m.op === 'SetField').length, 3);

  const before = f.mutations.length;
  await runNightlyMove(f.ctx(), project, await listAll(f));
  assert.equal(f.mutations.length, before, 'second run changes nothing');
});

test('nightly move dry run changes nothing', async () => {
  const f = makeFake({ items: [{ number: 21, status: COLS.future, date: '2026-12-04' }] });
  const project = { id: 'PVT_1', fields: new Map([['status', { id: 'F_status', name: 'Status', options: Object.values(COLS).map((name, i) => ({ id: `opt${i}`, name })) }]]) };
  const res = await runNightlyMove(f.ctx({ dryRun: true }), project, await listAll(f));
  assert.equal(res.moved.length, 1);
  assert.equal(f.mutations.length, 0);
});

/* ---------------------------------------------------------------- rollover */

test('rollover moves the date out a year, comments, and the sync job does not repeat the announcement', async () => {
  const f = makeFake({ perms: { bob: 'write' }, items: [{ number: 31, status: COLS.future, date: '2026-12-10', labels: ['2-annual-review'], author: 'carol' }] });
  await runRollover(f.ctx(), { issueNumber: 31, actor: 'bob', checkPermission: true });

  const dateSet = f.mutations.find((m) => m.op === 'SetField');
  assert.equal(dateSet.field, 'F_date');
  assert.equal(dateSet.value.date, '2027-12-10');
  const c = f.comments(31).at(-1);
  assert.match(c, /moved out one year by @bob: \*\*Thursday, December 10, 2026\*\* -> \*\*Friday, December 10, 2027\*\*/);
  assert.ok(c.includes(marker('scheduled:2027-12-10')));

  const n = f.comments(31).length;
  await runSync(f.ctx(), await listAll(f));
  assert.equal(f.comments(31).length, n, 'no duplicate "scheduled" message after a rollover');
});

test('rollover is ignored for people without write access, and explains itself on the wrong issue', async () => {
  const f = makeFake({ perms: { eve: 'read', bob: 'write' }, items: [
    { number: 31, status: COLS.future, date: '2026-12-10', labels: ['2-annual-review'] },
    { number: 32, status: COLS.future, date: '2026-12-10', labels: [] },
    { number: 33, status: COLS.future, labels: ['2-annual-review'] },
  ] });
  await runRollover(f.ctx(), { issueNumber: 31, actor: 'eve', checkPermission: true });
  assert.equal(f.comments(31).length, 0);
  assert.equal(f.mutations.length, 0);

  await runRollover(f.ctx(), { issueNumber: 32, actor: 'bob', checkPermission: true });
  assert.match(f.comments(32).at(-1), /only works on annual review issues/);

  await runRollover(f.ctx(), { issueNumber: 33, actor: 'bob', checkPermission: true });
  assert.match(f.comments(33).at(-1), /no \*\*Scheduled Date\*\*/);
  assert.equal(f.mutations.length, 0);
});

test('rollover from the Actions button skips the comment-permission lookup', async () => {
  const f = makeFake({ items: [{ number: 31, status: COLS.future, date: '2028-02-29', labels: ['2-annual-review'] }] });
  await runRollover(f.ctx(), { issueNumber: 31, actor: 'dispatcher', checkPermission: false });
  assert.equal(f.mutations.find((m) => m.op === 'SetField').value.date, '2029-02-28');
});

/* ---------------------------------------------------------------- helpers */

async function listAll(f) {
  const { listItems, loadProject } = await import('./tac-automation.mjs');
  const project = await loadProject(f.client, { org: 'openmainframeproject', number: 21 });
  return listItems(f.client, project, config);
}
