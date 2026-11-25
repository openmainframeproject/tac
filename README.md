# Open Mainframe Project Techincal Advisory Council (TAC)

This repository contains the source of the [Open Mainframe Project TAC website](https://tac.openmainframeproject.org): the processes, policies, programs, tool guides, and meeting materials of the TAC.

The TAC sets the technical vision for the Open Mainframe Project, approves new projects and working groups, oversees the project lifecycle, and enables collaboration between hosted projects. See the [TAC Overview](process/tac_overview.md) for details.

## Repository layout

| Path | Contents |
| :--- | :--- |
| `process/` | Project lifecycle, onboarding, voting, TAC roles, working groups, annual reviews, principles, CRA guidance |
| `programs/` | Mentorship, mainframe access, badging, and conformance programs |
| `tools/` | Tools and services available to hosted projects (GitHub, Slack, Zoom, mailing lists, LFX PCC, IT support) |
| `best_practices/` | Recommended practices for hosted projects, e.g. repository setup |
| `meetings/` | TAC meeting agendas and minutes |
| `engagement/` | Ways to connect with hosted projects |
| `_data/` | Data files that drive generated lists (projects, TAC members, agenda items) |
| `_includes/` | Reusable Jekyll templates used by the site |
| `resources.md`, `code_of_conduct.md` | Learning resources and the community Code of Conduct |

The root `README.md` is excluded from the published site (see `_config.yml`).

## Contributing

### Proposing a project, working group, or mentorship

Use the matching [issue template](https://github.com/openmainframeproject/tac/issues/new/choose):

| Request | Process documentation |
| :--- | :--- |
| New project | [Bringing a project here](process/start_project.md), [Project Lifecycle](process/lifecycle.md) |
| New working group | [Working Groups](process/working_groups.md) |
| Mentorship | [Mentorship Program](programs/mentorships/README.md) |
| Mainframe access | [Mainframe Access](programs/infrastructure.md) (TAC approval required) |
| TAC agenda item | Agenda template in the issue chooser |

### Changing documents

- **Policy and process changes** (anything under `process/` or other TAC policies) must be submitted as a pull request and are merged only after formal TAC approval.
- **Typos and small fixes:** use the "Edit this page on GitHub" link at the bottom of any page on the site.
- **Best practices** are living documents; PRs from project leads are welcome (see [`best_practices/README.md`](best_practices/README.md)).

### Authoring conventions

The site uses [Jekyll](https://jekyllrb.com/) with the [Just the Docs](https://just-the-docs.github.io/just-the-docs/) theme.

- Every page needs front matter, for example:
```yaml
  ---
  title: My Page
  parent: Processes
  nav_order: 10
  ---
```
  Pages nested two levels deep also need `grand_parent`.
- Link to other pages with `{% link path/to/page.md %}` so broken links fail the build.
- Use site variables such as `{{ site.foundation_name }}` and `{{ site.helpdesk_url }}` from `_config.yml` instead of hard-coding names and URLs.
- Use `{: .note }` for callouts and `* TOC` / `{:toc}` for a page table of contents.

### Sign-off (DCO)

All commits must include a `Signed-off-by` line per the [Developer Certificate of Origin](https://developercertificate.org/):

```bash
git commit -s -m "Describe your change"
```

If the DCO check fails on your PR, fix it with `git commit --amend -s` (single commit) or see the [contribution guidelines](process/contribution_guidelines.md#signoff-for-commits-where-the-dco-signoff-was-missed).

Please also follow the [Code of Conduct](code_of_conduct.md).

### Pull request flow

1. Fork the repository and create a branch.
2. Make your changes and verify them locally (see below).
3. Open a pull request against `main`.

## Updating site data

Generated lists are driven by data files in `_data/`, so edit the data rather than the Markdown pages:

- TAC members: `_data/tacmembers.csv`
- Projects and working groups: `_data/projects.csv`
- Meeting agenda items: `_data/meeting-agenda-items.csv`

Some data is refreshed automatically from LFX by a GitHub Actions workflow (`updatedatafromlfx.yml`); check the workflow before editing those files by hand.

## Local development

**Prerequisites**

- Ruby, at the version in `.ruby-version` (a version manager such as `rbenv` or `rvm` is recommended)
- [pre-commit](https://pre-commit.com/)

**Setup**

```bash
git clone https://github.com/openmainframeproject/tac.git
cd tac
pre-commit install
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. Do not commit the generated `_site/` directory; deployment is handled by GitHub Actions.

## Getting help

- Service desk: <https://servicedesk.openmainframeproject.org>
- TAC mailing list: <https://lists.openmainframeproject.org/g/omp-technical>
- Slack: <https://slack.openmainframeproject.org>
- Code of Conduct reports: conduct@openmainframeproject.org

## License

Content in this repository is licensed under [Creative Commons Attribution 4.0 International](LICENSE). Third-party components are listed in [THIRD_PARTY.md](THIRD_PARTY.md).
