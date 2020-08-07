# GitHub policies

Open Mainframe Project hosted projects generally use GitHub for code hosting and issue management. GitHub organizations for hosted projects are owned and admistered by the Linux Foundation staff, including the Linux Foundation release engineering team, to ensure the sustainability of the infrastructure. 

This document outlines the policies and procedures for projects using GitHub for code hosting. In addition, the Linux Foundation release engineering team maintains [documentation](https://docs.releng.linuxfoundation.org/en/latest/) on it's services, policies, and procedures.

## New project or repository

When a new project or repository is to be added, please [submit a request to the Open Mainframe Project staff](https://github.com/openmainframeproject/foundation/issues/new/choose) who can faciliate the process.

### Code license scan

If adding the new project or repository will include a code dump, it's highly recommended to request a code license scan before bringing the code in. This scan will be a validation for...

- All files include correct license headers and copyright statements ( refer to the [License Specification in the Contribution Guidelines](https://github.com/openmainframeproject/tac/blob/master/process/contribution_guidelines.md#license-specification) for more information ).
- There isn't any incompatible licensed code ( either with a non-OSI license or a license that is incompatible with the project's license ).
- Any other best practices guidance.

Typically code license scans are a fairly quick turnaround, but that might take longer for bigger code bases.

### Repository setup

Generally most projects coming into the Open Mainframe Project utilize the existing Open Mainframe Project GitHub organization, especially if they intend to have a single repository. This practice enables the easiest discoverablity of the project.

If a project anticipates having multiple repositories, the Open Mainframe Project staff can provision a GitHub organization specific to that project. With either option, the same policies apply for adminstration and access control.

### Code migration

There are two strategies for migrating the code to an Open Mainframe Project managed repository.

- Best practice is for the Open Mainframe Project staff to provision a new repository, where the new code can be contributed to as a pull request. 
- If preserving the commit history is important, then the repository can be transferred using the [GitHub transfer repository](https://docs.github.com/en/github/administering-a-repository/transferring-a-repository) process. If doing this, then before the transfer you must add a commit to the repository providing a DCO signoff for all previous commits. Easiest way is to check in a file called `past-dco-signoff.txt` with the contents below...

```
I, <AUTHOR NAME> hereby sign-off-by all of the past commits to this repo subject to the Developer Certificate of Origin (DCO), Version 1.1. 
```

## Settings

Generally the following settings apply to all Open Mainframe Project managed repositories.

### DCO

The [DCO Github app](https://probot.github.io/apps/dco/) is installed by default on all repositories and organizations, as the DCO is generally required for contributions into Open Mainframe Project hosted projects. This app will block a commit without a valid DCO signoff.

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

## FAQs

### Why don't project members have `admin` permission on repositories or organizations?

As project communities and members look for the Open Mainframe Project to provide a vendor-neutral space for collaboration, the staff are here to ensure that the fair and transparent governance that the project has put in place is adhered to. This can from time to time can add a bit of overhead, but the tradeoff of showcasing transparent and consistent processes generally is considered a benefit to projects, and this also lowers the burden for a project to manage this on thier own.

If there are concerns about this, feel free to reach out to the [Open Mainframe Project staff][mailto:staff@openmainframeproject.org].
