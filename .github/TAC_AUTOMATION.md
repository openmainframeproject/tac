# TAC request automation

Keeps submitters informed about where their TAC request is, and takes over the repetitive board work.
Settings and all message wording live in [`tac-automation.json`](tac-automation.json); the logic is in
[`scripts/tac-automation.mjs`](scripts/tac-automation.mjs) (no dependencies, Node 20+).

## What it does

| When | What happens | Workflow |
|---|---|---|
| New project or working group proposal is opened | Thank-you comment; issue added to the board in **LF Onboarding** | `tac-intake.yml` |
| New agenda item is opened or edited | Thank-you comment; `4-tac-meeting-short` / `3-tac-meeting-long` label from the "how much time" answer | `tac-intake.yml` |
| Item moves into **LF Onboarding** | Message on the issue | `tac-board-sync.yml` (every 10 min) |
| Item moves into **In Voting** | Message on the issue | `tac-board-sync.yml` |
| Item moves from LF Onboarding into an Agenda column | Message on the issue | `tac-board-sync.yml` |
| **Scheduled Date** is set (or changed) | Message with the date (a change names the old date) | `tac-board-sync.yml` |
| Nightly, 06:00 UTC | Items in an Agenda column move to Upcoming / Next / Future based on the TAC meeting dates | `tac-board-sync.yml` |
| `/rollover-review` comment on an annual review issue (or Actions > Run workflow) | Scheduled Date moves out one year, snapped to the nearest TAC meeting date; comment says what changed | `tac-annual-review-rollover.yml` |
| Mondays | Check approved projects for a missing PCC LFX TSC committee URL; open an issue if it fails | `weekly-committee-url-check.yml` |

**Why the column messages poll:** GitHub Actions has no trigger for a card moving between columns on an
organization project, so the board is checked every 10 minutes. Each comment ends with a hidden marker
(`<!-- tac-bot:... -->`) and is only posted if that marker is not already on the issue, so nothing is posted twice.
Only items changed in the last 24 hours (`sync.lookbackHours`) are considered, so turning this on does not
comment on every existing item.

**Agenda column rule (nightly):** based on TAC meeting dates. **Upcoming** = Scheduled Date is on or before the next
meeting, **Next** = on or before the meeting after that, **Future** = later. Meeting dates are generated from the
`meetings` block in `tac-automation.json` (currently Thursdays, 2nd and 4th of the month). **When a meeting is
cancelled, add its date to `meetings.cancelled`** (use `meetings.extra` for a one-off meeting); the columns shift
accordingly the next night. Only items already in one of the three Agenda columns are touched. The run summary lists
items that need a person: dates that have passed, dates that are not a meeting date (for example a cancelled
meeting), and Agenda items with no date.

**Annual review rollover:** one year out rarely lands on a meeting day, so the new date is snapped to the nearest TAC
meeting (cancelled meetings are skipped; a tie goes to the earlier one), and the comment says so. Set `rollover.snap`
to `after` for "first meeting on or after the anniversary", or `none` for the exact date.

## One-time setup

1. The GitHub App behind `APP_CLIENT_ID` / `APP_PRIVATE_KEY` needs **Issues: read & write** on this repo and
   **Organization projects: read & write**, so it can edit the board.
2. The board must have a `Status` field with the columns named in `columns`, and a `Scheduled Date` date field.
   If a name does not match, the sync job stops and lists what it found on the board.
3. If the board has a built-in "item added -> set Status" workflow, make sure it does not overwrite the LF Onboarding
   status that intake sets for new projects.
4. Try it: **Actions > TAC board sync > Run workflow**. Dry run is on by default and only prints what it would do.
   Run once with `backfill` on (dry run first) if you also want messages for items that have not changed recently.

## Reusing this in another TAC repo

Copy `tac-automation.json`, `scripts/`, and the three `tac-*.yml` workflows and `weekly-committee-url-check.yml`, then edit
the JSON: `projectUrl`, `columns`, `fields`, `labels`, `topicLength` (heading and answers from that repo's agenda
template), `newProjectTitlePrefixes`, `meetings`, `vars` (site links, foundation name) and the message wording. In
`weekly-committee-url-check.yml` swap the `landscape_url` and `lfx_tac_committee_url` for that TAC's.

## Tests

```sh
node --test .github/scripts/tac-automation.test.mjs
```

Uses an in-memory fake of GitHub; no token or network needed.
