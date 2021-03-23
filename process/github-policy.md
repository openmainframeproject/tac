---
parent: Processes
---
# GitHub policies

- [New project or repository](#new-project-or-repository)
  - [Code license scan](#code-license-scan)
  - [Repository setup](#repository-setup)
  - [Code migration](#code-migration)
- [Settings](#settings)
  - [DCO](#dco)
  - [Permissions](#permissions)
  - [Branch protection](#branch-protection)
- [Issue management](#issue-management)
  - [Issue and pull request templates](#issue-and-pull-request-templates)
  - [CODEOWNERS](#codeowners)
  - [Project boards](#project-boards)
- [Using GitHub](#using-github)
  - [Working with Markdown files](#working-with-markdown-files)
- [Best practices for hosting code on GitHub](#best-practices-for-hosting-code-on-github)
- [FAQs](#faqs)
  - [Why don't project members have `admin` permission on repositories or organizations?](#why-dont-project-members-have-admin-permission-on-repositories-or-organizations)

Open Mainframe Project hosted projects generally use GitHub for code hosting and issue management. GitHub organizations for hosted projects are owned and admistered by the Linux Foundation staff, including the Linux Foundation release engineering team, to ensure the sustainability of the infrastructure. 

This document outlines the policies and procedures for projects using GitHub for code hosting. In addition, the Linux Foundation release engineering team maintains [documentation](https://docs.releng.linuxfoundation.org/en/latest/) on it's services, policies, and procedures.

## New project or repository

When a new project or repository is to be added, please [submit a request to the Open Mainframe Project staff](https://github.com/openmainframeproject/foundation/issues/new/choose) who can faciliate the process.

### Code license scan

If adding the new project or repository will include a code dump, it's highly recommended to request a code license scan before bringing the code in. This scan will look for, and will provide recommendations (or in some case required prior remediation), for:

- Presence of third party licenses (OSI-approved or otherwise) which might be considered incompatible with the project's license
- Presence of headers with the project's designated license(s) and preferred copyright notices in project files (refer to the [License Specification in the Contribution Guidelines](https://github.com/openmainframeproject/tac/blob/master/process/contribution_guidelines.md#license-specification) for more information)
- Any other best practices guidance 

Typically code license scans are a fairly quick turnaround, but that might take longer for bigger code bases.

### Repository setup

Generally most projects coming into the Open Mainframe Project utilize the existing Open Mainframe Project GitHub organization, especially if they intend to have a single repository. This practice enables the easiest discoverablity of the project.

If a project anticipates having multiple repositories, the Open Mainframe Project staff can provision a GitHub organization specific to that project. With either option, the same policies apply for adminstration and access control.

### Code migration

There are two strategies for migrating the code to an Open Mainframe Project managed repository.

- Best practice is for the Open Mainframe Project staff to provision a new repository, where the new code can be contributed to as a pull request. 
- If preserving the commit history is important, then the repository can be transferred using the [GitHub transfer repository](https://docs.github.com/en/github/administering-a-repository/transferring-a-repository) process. If doing this, then before the transfer you must add a commit to the repository providing a DCO signoff for all previous commits. Easiest way is to check in a file called `past-dco-signoff.txt` with the contents below...

```
I, <AUTHOR NAME> <<AUTHOR EMAIL>> hereby sign-off-by all of the commits prior to and including <COMMIT_HASH> to this repo subject to the Developer Certificate of Origin (DCO), Version 1.1. 
```

## Settings

Generally the following settings apply to all Open Mainframe Project managed repositories.

### DCO

The [DCO Github app](https://probot.github.io/apps/dco/) is installed by default on all repositories and organizations, as the DCO is generally required for contributions into Open Mainframe Project hosted projects. This app will block a commit without a valid DCO signoff. The DCO app should not be disabled or bypassed after it is enabled.

### Permissions

Projects should define a COMMITTERS.* file for indicating committers that have the ability to merge in code to a repository. The list of committers is generally approved by the TSC or the committers as a whole, aligning with the requirements described in the project's governance. Permissions itself are managed using GitHub teams, where the TSC or committers will have a team and that team will be given ['maintain' permission](https://docs.github.com/en/github/setting-up-and-managing-organizations-and-teams/repository-permission-levels-for-an-organization#permission-levels-for-repositories-owned-by-an-organization) on the repository.

The best process for adding a new committer is to have that committer issue a pull request to add thier name to the COMMITTERS.* file, where the required number of TSC members or committers can +1 the request and it can be merged in by the TSC chairperson. The TSC chairperson should then tag @jmertic in the pull request and he can add the individual to the team.

### Branch protection

The below branch protection settings on the `master` or `main` branch is enabled by default.

![](assets/branch_protection.png)

## Issue management

Generally projects leverage GitHub Issues for issue management. While each project is encouraged to develop it's own issue management strategy, below are some best practices for issue management.

### Issue and pull request templates

Using an issue or pull template request helps ensure the project maintainers have the right context and infomation needed to process these requests. More information on how to set this up is in the [GitHub issue and pull request documentation](https://docs.github.com/en/github/building-a-strong-community/about-issue-and-pull-request-templates).

### CODEOWNERS

Defining a CODEOWNERS makes assigning new pull requests to the right committers for review an automated process. Read more in the [GitHub CODEOWNERS documentation](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/about-code-owners#about-code-owners)

### Project boards

Issue triaging can be complicated and overwhelming, especially in the context of managing a project to a release point. For projects that utilize an organization, having a single view of open issues across repositories is also very helpful in release management.

GitHub has the functionality for doing either a [single repository project board](https://docs.github.com/en/github/managing-your-work-on-github/creating-a-project-board#creating-a-repository-project-board) or a [multiple repository project board](https://docs.github.com/en/github/managing-your-work-on-github/creating-a-project-board#creating-an-organization-wide-project-board). There are also [automation capabilties](https://docs.github.com/en/github/managing-your-work-on-github/about-automation-for-project-boards) that can be leveraged to aid in using project boards.

## Using GitHub

GitHub can be daunting for the new user, but once you get the right tools in place contributing becomes much easier. Here's a guide for getting started.

1. Create a GitHub account. Simply visit https://github.com, choose a user name that isn’t already taken, provide an email address and a password, and click the big green “Sign up for GitHub” button.
2. Go to the repository of choice you are looking to contribute to.
3. Contributing to GitHub may be easier by using GitHub Desktop. You can find information about GitHub Desktop including how to install it [here](https://desktop.github.com/).

### Working with Markdown files
Markdown files (.md) are commonly used on GitHub to explain things. They look similar to a document but have markings to allow for formatting. It can be easier to work with Markdown by using tools. You can find information on the types of elements used in GitHub Markdown here: https://guides.github.com/features/mastering-markdown/

There are also various tools you can use to help you see how your Markdown file will look when uploaded to GitHub. The list below is not exhaustive but is meant to provide some examples.
- Macdown: https://macdown.uranusjr.com/
- Typora: https://typora.io/
- StackEdit: https://stackedit.io/
- Dillinger: https://dillinger.io/
- Markdown Editor (for Visual Studio): https://marketplace.visualstudio.com/items?itemName=MadsKristensen.MarkdownEditor
- Draft: https://draftin.com/
- Ulysses: https://ulysses.app/
- iA Writer: https://ia.net/writer
- Dimer: https://dimerapp.com
- Quiver: http://happenapps.com/
- Mou: http://25.io/mou/
- VSCode: https://code.visualstudio.com/docs/languages/markdown

## Best practices for hosting code on GitHub

These practices will help you improve your GitHub presence in an effort to help you attract more users and developers to your project, secure your account, be precise about licensing, and maintain good housekeeping. Please issue a PR to add new recommendations or update existing ones.

* Use the [REPOLINTER](https://github.com/todogroup/repolinter) tool created by the TODO Group to identify common issues in GitHub repos. 
* Ensure that every repo includes a LICENSE file. 
* Add a README file to your repos welcoming new community members to the project and explaining why the project is useful and how to get started.
* Add a CONTRIBUTING file to your repos explaining to other developers and your community of users how to contribute to the project. At a high level, the file would explain what types of contributions are needed and how the process works.
* Add CODEOWNERS file to define individuals or teams that are responsible for code in a repository.
* Add a CODE_OF_CONDUCT file that sets the ground rules for participants’ behavior associated and helps to facilitate a friendly, welcoming environment. While not every project has a CODE_OF_CONDUCT file, its presence signals that this is a welcoming project to contribute to, and defines standards for how to engage with the project’s community. You are welcome to use the Linux Foundation’s Code of Conduct if project specific CoC does not exist.
* Provide documentation on the release methodology, cadence, criteria, etc.
* Document your project governance and make it available on the project’s repo.
* Add a SUPPORT file to let users and developers know about ways to get help with your project. You can either add in this file how and where security issues are handled, or put it at the top level readme for the project, or alternatively refer to security documentation.
* Archive inactive repos to flag to your users and other developers that you’re not maintaining them.
* Setup issue template and pull request templates that help you customize and standardize the information you'd like contributors to include when they open issues and pull requests in your repository.
* Identify who on the project will be handling security issues (could be a team) and set up a separate email account.  Consider having the project become a CNA (CVE Numbering Authority).
* Use English as the default universal language for anything you publish on GitHub. You can support a second language but English should be the primary language of communication towards a universal audience.

## FAQs

### Why don't project members have `admin` permission on repositories or organizations?

As project communities and members look for the Open Mainframe Project to provide a vendor-neutral space for collaboration, the staff are here to ensure that the fair and transparent governance that the project has put in place is adhered to. This can from time to time can add a bit of overhead, but the tradeoff of showcasing transparent and consistent processes generally is considered a benefit to projects, and this also lowers the burden for a project to manage this on thier own.

If there are concerns about this, feel free to reach out to the [Open Mainframe Project staff][mailto:staff@openmainframeproject.org].
