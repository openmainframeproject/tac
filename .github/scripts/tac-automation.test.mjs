// Run with: node --test .github/scripts/
// Uses an in-memory fake of GitHub, so no network or token is needed.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {
  addYears, addDays, daysBetween, meetingDates, snapToMeeting, validateConfig, targetColumn, todayIn, formSection, lengthFor, projectNameFromTitle, render, message,
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

test('meeting dates: 2nd and 4th Thursdays, minus cancelled, from today on', () => {
  const dates = meetingDates('2026-11-20', config.meetings);
  assert.deepEqual(dates.slice(0, 4), ['2026-12-10', '2026-12-24', '2027-01-14', '2027-01-28']);
  assert.ok(!dates.includes('2026-11-26'), 'cancelled Thanksgiving meeting is not a meeting');
  // today is a meeting day -> it still counts as the upcoming meeting
  assert.equal(meetingDates('2026-12-10', config.meetings)[0], '2026-12-10');
  assert.equal(meetingDates('2026-12-11', config.meetings)[0], '2026-12-24');
  // cancel the next meeting and extra one-off meeting
  const rule = { ...config.meetings, cancelled: ['2026-11-26', '2026-12-10'], extra: ['2026-12-03'] };
  assert.deepEqual(meetingDates('2026-11-20', rule).slice(0, 3), ['2026-12-03', '2026-12-24', '2027-01-14']);
  // every Thursday when nth is left out
  assert.deepEqual(meetingDates('2026-11-20', { weekday: 'Thursday' }).slice(0, 3), ['2026-11-26', '2026-12-03', '2026-12-10']);
  assert.equal(addDays('2026-12-31', 1), '2027-01-01');
});

test('targetColumn: Upcoming = next meeting, Next = the one after, Future = later', () => {
  const dates = ['2026-12-10', '2026-12-24', '2027-01-14'];
  const t = (d) => targetColumn(d, '2026-11-20', dates, COLS);
  assert.equal(t('2026-11-19'), null);
  assert.equal(t('2026-11-20'), COLS.upcoming);
  assert.equal(t('2026-12-10'), COLS.upcoming);
  assert.equal(t('2026-12-11'), COLS.next);
  assert.equal(t('2026-12-24'), COLS.next);
  assert.equal(t('2026-12-25'), COLS.future);
  assert.equal(t('2027-01-14'), COLS.future);
  assert.equal(daysBetween('2026-11-20', '2026-12-04'), 14);
});

test('snapToMeeting: nearest (default), after, none; ties go earlier; cancelled meetings are skipped', () => {
  const rule = config.meetings; // 2nd and 4th Thursdays, 2026-11-26 cancelled
  // 2027-12-10 is a Friday; meetings that month are Dec 9 and Dec 23
  assert.equal(snapToMeeting('2027-12-10', rule), '2027-12-09');
  assert.equal(snapToMeeting('2027-12-10', rule, 'nearest'), '2027-12-09');
  assert.equal(snapToMeeting('2027-12-10', rule, 'after'), '2027-12-23');
  assert.equal(snapToMeeting('2027-12-10', rule, 'none'), '2027-12-10');
  // already a meeting date: unchanged in every mode
  assert.equal(snapToMeeting('2028-03-09', rule), '2028-03-09');
  assert.equal(snapToMeeting('2028-03-09', rule, 'after'), '2028-03-09');
  // crosses a month boundary: Feb 2029 meetings are the 8th and 22nd, Mar 8 is next
  assert.equal(snapToMeeting('2029-02-28', rule), '2029-02-22');
  // cancelled meeting is not a candidate
  assert.equal(snapToMeeting('2027-12-10', { ...rule, cancelled: ['2027-12-09'] }), '2027-12-23');
  // equal distance -> the earlier meeting
  const tie = { weekday: 'Thursday', nth: [], extra: ['2027-06-01', '2027-06-05'] };
  assert.equal(snapToMeeting('2027-06-03', tie), '2027-06-01');
  assert.throws(() => snapToMeeting('2027-12-10', rule, 'sideways'), /nearest, after or none/);
});

test('validateConfig accepts the shipped config and rejects bad meeting settings', () => {
  validateConfig(config);
  assert.throws(() => validateConfig({ meetings: { weekday: 'Thurs' } }), /weekday/);
  assert.throws(() => validateConfig({ rollover: { snap: 'sometimes' }, meetings: { weekday: 'Thursday' } }), /rollover.snap/);
  assert.throws(() => validateConfig({ meetings: { weekday: 'Thursday', cancelled: ['11/26/2026'] } }), /YYYY-MM-DD/);
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
    years: 'one year', lengthNote: 'L', annualReviewLabel: '2-annual-review', snapNote: 'S',
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

test('working group proposals get the same intake as new projects', async () => {
  const f = makeFake();
  await runIntake(f.ctx(), issueEvent({ title: 'New Working Group Proposal - Mainframe Cats' }));
  assert.match(f.comments(7)[0], /Thanks for submitting \*\*Mainframe Cats\*\*/);
  assert.ok(f.mutations.some((m) => m.op === 'AddItem'));
});

test('intake ignores other issues, bots, closed issues and edits of new projects', async () => {
  const f = makeFake();
  await runIntake(f.ctx(), issueEvent({ title: 'Mentorship proposal: something' }));
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

test('nightly move uses meeting dates, leaves other columns alone, and flags dates that are not meetings', async () => {
  // today (New York) is 2026-11-20; meetings: 12-10 (Upcoming), 12-24 (Next), then 2027-01-14...
  const f = makeFake({ items: [
    { number: 21, status: COLS.future, date: '2026-12-10' },   // -> Upcoming
    { number: 22, status: COLS.upcoming, date: '2026-12-24' }, // -> Next
    { number: 23, status: COLS.next, date: '2027-01-14' },     // -> Future
    { number: 24, status: COLS.next, date: '2026-12-24' },     // already right
    { number: 25, status: COLS.upcoming, date: '2026-11-12' }, // date passed: report only
    { number: 26, status: COLS.next },                         // no date: report only
    { number: 27, status: COLS.voting, date: '2026-11-25' },   // not an Agenda column
    { number: 28, status: COLS.onboarding, date: '2026-11-25' },
    { number: 29, status: COLS.future, date: '2026-12-10', state: 'CLOSED' },
    { number: 30, status: COLS.future, date: '2026-12-17' },   // a Thursday, but not a meeting -> Next, flagged
    { number: 31, status: COLS.upcoming, date: '2026-11-26' }, // cancelled meeting -> stays Upcoming, flagged
  ] });
  const project = { id: 'PVT_1', fields: new Map([
    ['status', { id: 'F_status', name: 'Status', options: Object.values(COLS).concat('Done').map((name, i) => ({ id: `opt${i}`, name })) }],
  ]) };
  const res = await runNightlyMove(f.ctx(), project, await listAll(f));
  assert.deepEqual(res.moved.map((m) => [m.number, m.to]), [[21, COLS.upcoming], [22, COLS.next], [23, COLS.future], [30, COLS.next]]);
  assert.deepEqual(res.overdue.map((i) => i.issue.number), [25]);
  assert.deepEqual(res.undated.map((i) => i.issue.number), [26]);
  assert.deepEqual(res.offMeeting.map((i) => i.issue.number), [30, 31]);
  assert.equal(f.mutations.filter((m) => m.op === 'SetField').length, 4);

  const before = f.mutations.length;
  await runNightlyMove(f.ctx(), project, await listAll(f));
  assert.equal(f.mutations.length, before, 'second run changes nothing');
});

test('cancelling the upcoming meeting shifts the columns', async () => {
  const cancelled = { ...config, meetings: { ...config.meetings, cancelled: ['2026-11-26', '2026-12-10'] } };
  const f = makeFake({ items: [
    { number: 41, status: COLS.upcoming, date: '2026-12-10' }, // meeting cancelled -> dates on/before 12-24 are Upcoming
    { number: 42, status: COLS.next, date: '2026-12-24' },     // now the upcoming meeting
    { number: 43, status: COLS.future, date: '2027-01-14' },   // now Next
  ] });
  const project = { id: 'PVT_1', fields: new Map([['status', { id: 'F_status', name: 'Status', options: Object.values(COLS).map((name, i) => ({ id: `opt${i}`, name })) }]]) };
  const res = await runNightlyMove(f.ctx({ config: cancelled }), project, await listAll(f));
  assert.deepEqual(res.moved.map((m) => [m.number, m.to]), [[42, COLS.upcoming], [43, COLS.next]]);
  assert.deepEqual(res.offMeeting.map((i) => i.issue.number), [41]);
});

test('nightly move dry run changes nothing', async () => {
  const f = makeFake({ items: [{ number: 21, status: COLS.future, date: '2026-12-10' }] });
  const project = { id: 'PVT_1', fields: new Map([['status', { id: 'F_status', name: 'Status', options: Object.values(COLS).map((name, i) => ({ id: `opt${i}`, name })) }]]) };
  const res = await runNightlyMove(f.ctx({ dryRun: true }), project, await listAll(f));
  assert.equal(res.moved.length, 1);
  assert.equal(f.mutations.length, 0);
});

/* ---------------------------------------------------------------- rollover */

test('rollover moves the date out a year onto a meeting date, comments, and sync does not repeat the announcement', async () => {
  const f = makeFake({ perms: { bob: 'write' }, items: [{ number: 31, status: COLS.future, date: '2026-12-10', labels: ['2-annual-review'], author: 'carol' }] });
  await runRollover(f.ctx(), { issueNumber: 31, actor: 'bob', checkPermission: true });

  const dateSet = f.mutations.find((m) => m.op === 'SetField');
  assert.equal(dateSet.field, 'F_date');
  assert.equal(dateSet.value.date, '2027-12-09', '2027-12-10 is a Friday; snapped to the nearest meeting');
  const c = f.comments(31).at(-1);
  assert.match(c, /moved out one year by @bob: \*\*Thursday, December 10, 2026\*\* -> \*\*Thursday, December 9, 2027\*\*/);
  assert.match(c, /One year out would be Friday, December 10, 2027, which is not a TAC meeting date, so it was moved to the nearest meeting\./);
  assert.ok(c.includes(marker('scheduled:2027-12-09')));

  const n = f.comments(31).length;
  await runSync(f.ctx(), await listAll(f));
  assert.equal(f.comments(31).length, n, 'no duplicate "scheduled" message after a rollover');
});

test('rollover: no snap note when a year out already is a meeting date; snap can be switched off or set to "after"', async () => {
  const run = async (snap, date = '2027-03-09') => {
    const f = makeFake({ perms: {}, items: [{ number: 31, status: COLS.future, date, labels: ['2-annual-review'] }] });
    await runRollover(f.ctx({ config: { ...config, rollover: { ...config.rollover, snap } } }), { issueNumber: 31, actor: 'x', checkPermission: false });
    return { date: f.mutations.find((m) => m.op === 'SetField').value.date, comment: f.comments(31).at(-1) };
  };
  const same = await run('nearest'); // 2028-03-09 is the 2nd Thursday of March 2028
  assert.equal(same.date, '2028-03-09');
  assert.ok(!/not a TAC meeting date/.test(same.comment));
  assert.ok(!/\n\n\n/.test(same.comment), 'no stray blank lines when there is no snap note');

  assert.equal((await run('none', '2026-12-10')).date, '2027-12-10');
  const after = await run('after', '2026-12-10');
  assert.equal(after.date, '2027-12-23');
  assert.match(after.comment, /moved to the next meeting\./);
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
  assert.equal(f.mutations.find((m) => m.op === 'SetField').value.date, '2029-02-22', '2029-02-28 is a Wednesday; nearest meeting is Feb 22');
});

/* ---------------------------------------------------------------- helpers */

async function listAll(f) {
  const { listItems, loadProject } = await import('./tac-automation.mjs');
  const project = await loadProject(f.client, { org: 'openmainframeproject', number: 21 });
  return listItems(f.client, project, config);
}
