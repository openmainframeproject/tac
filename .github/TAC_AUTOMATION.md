# TAC request automation

Keeps submitters informed about where their TAC request is, and takes over the repetitive board work.
Settings and all message wording live in [`tac-automation.json`](tac-automation.json); the logic is in
[`scripts/tac-automation.mjs`](scripts/tac-automation.mjs) (no dependencies, Node 20+).

## What it does

| When | What happens | Workflow |
|---|---|---|
| New project proposal is opened | Thank-you comment; issue added to the board in **LF Onboarding** | `tac-intake.yml` |
| New agenda item is opened or edited | Thank-you comment; `4-tac-meeting-short` / `3-tac-meeting-long` label from the "how much time" answer | `tac-intake.yml` |
| Item moves into **LF Onboarding** | Message on the issue | `tac-board-sync.yml` (every 10 min) |
| Item moves into **In Voting** | Message on the issue | `tac-board-sync.yml` |
| Item moves from LF Onboarding into an Agenda column | Message on the issue | `tac-board-sync.yml` |
| **Scheduled Date** is set (or changed) | Message with the date (a change names the old date) | `tac-board-sync.yml` |
| Nightly, 06:00 UTC | Items in an Agenda column move to Upcoming / Next / Future based on Scheduled Date | `tac-board-sync.yml` |
| `/rollover-review` comment on an annual review issue (or Actions > Run workflow) | Scheduled Date moves out one year; comment says what changed | `tac-annual-review-rollover.yml` |
| Mondays | Check approved projects for a missing PCC LFX TSC committee URL; open an issue if it fails | `weekly-committee-url-check.yml` |

**Why the column messages poll:** GitHub Actions has no trigger for a card moving between columns on an
organization project, so the board is checked every 10 minutes. Each comment ends with a hidden marker
(`<!-- tac-bot:... -->`) and is only posted if that marker is not already on the issue, so nothing is posted twice.
Only items changed in the last 24 hours (`sync.lookbackHours`) are considered, so turning this on does not
comment on every existing item.

**Agenda column rule (nightly):** Scheduled Date within 14 days -> Upcoming, within 42 days -> Next, later -> Future
(`agendaWindows`). Only items already in one of those three columns are touched. Items whose date has passed, or
that have no date, are left alone and listed in the run summary.

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

Copy `tac-automation.json`, `scripts/`, and the four `tac-*.yml` / `weekly-committee-url-check.yml` workflows, then edit
the JSON: `projectUrl`, `columns`, `fields`, `labels`, `topicLength` (heading and answers from that repo's agenda
template), `newProjectTitlePrefixes`, `vars` (site links, foundation name) and the message wording. In
`weekly-committee-url-check.yml` swap the `landscape_url` and `lfx_tac_committee_url` for that TAC's.

## Tests

```sh
node --test .github/scripts/tac-automation.test.mjs
```

Uses an in-memory fake of GitHub; no token or network needed.
