---
parent: Processes
nav_order: 10
---
# Contribution Guidelines for hosted projects

* TOC
{:toc}

This document is intended to outline the recommended licensing and contribution standards for any project intended for being hosted by the {{ site.foundation_name }}.

Within open source, there are multiple approaches to contribution and licensing, and {{ site.foundation_name }} recognizes that there is no single strategy that fits all project communities and consumers. This document is not intended to endorse any particular license or contribution strategy but instead to provide guidance on best practices based on experiences with other projects (both {{ site.foundation_name }}-hosted and others within the industry). Please consult your legal counsel for specific guidance for your situation.

## Two-factor Authentication (2FA)

To enable more robust security for hosted projects, {{ site.foundation_name }} TAC requires all hosted projects to require Two-factor authentication (2FA) for accessing code repositories. Instructions for GitHub are below...

- [Configuring 2FA for your GitHub account](https://docs.github.com/en/github/authenticating-to-github/configuring-two-factor-authentication)
- [Accessing GitHub using 2FA](https://docs.github.com/en/github/authenticating-to-github/accessing-github-using-two-factor-authentication)
- [Recovering your account if you lose your 2FA credentials](https://docs.github.com/en/github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials)

## License Specification

Generally open source projects at The Linux Foundation that have not previously selected a license leverage the [Apache License, Version 2.0][] for their codebase, a [Community Data License Agreement (CDLA) license][] for any data sets, and the [Creative Commons Attribution 4.0 International License][] for all documentation and non-code assets. These licenses are widely used and understood by developers and organizations alike, providing flexibility for downstream usage and patent protection for those contributing code. Each hosted project maintains their own Intellectual Property policy as part of thier Technical Charter which outlines the specific guidelines.


### Code License Identification

Each repository must contain a license file. Include the plain-text version of the license as a LICENSE file in the top-level directory of the repository.

All source files need to include a header to clearly show the license. {{ site.foundation_name }} recommends using [SPDX short-form license identifiers](https://spdx.org/ids) in source code files, which vastly reduces errors in copy and pasting license text and enables the headers to be machine-readable. An example of the use of SPDX short-form license identifiers can be found [here](https://spdx.org/ids).

### Copyright Notice Format

We have recommended that contributors to a new project establish a common format for copyright notices in their own code. This can help minimize compliance burdens that might otherwise require downstream distributors to reproduce many variations in years, entity names, and formats for notices. We recommend a common copyright notice in a form similar to the following, which does not refer to years or specific contributing entities:

`Copyright Contributors to the __________ Project.`

For clarity, we would not recommend removing a third party’s license or copyright notice in any circumstance. If a third-party dependency is added to a repository, its license and copyright notices should be preserved and should not be modified or removed.

### Example of the SPDX short-form license identifiers and copyright notice in a source file

Assumes [Apache License, Version 2.0][] and Foo project name.

```
# SPDX-License-Identifier: Apache-2.0
# Copyright Contributors to the Foo Project.
```

## Contribution sign off

Ensuring a clean code pedigree and lineage is critical to the industry's downstream adoption of open-source code.

{{ site.foundation_name }} requires the use of the [Developer’s Certificate of Origin 1.1 (DCO)][DCO], which is the same mechanism that the [Linux® Kernel](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/process/submitting-patches.rst#n416) and many other communities use to manage code contributions. The DCO is considered one of the simplest tools for sign-offs from contributors as the representations are meant to be easy to read and indicate signoff is done as a part of the commit message. The DCO is a representation by someone stating they have the right to contribute the code they have proposed for acceptance into a project.  That representation is important for legal purposes and was the community-developed outcome after a $1 billion [lawsuit](https://en.wikipedia.org/wiki/SCO%E2%80%93Linux_disputes) by SCO against IBM. The representation is designed to prevent issues but also keep the burden on contributors low. It has proven very adaptable to other projects, is built into git itself (and now also GitHub), and is in use by thousands of projects to avoid more burdensome requirements to contribute (such as a CLA).

Here is an example Signed-off-by line, which indicates that the submitter accepts the DCO:

`Signed-off-by: John Doe <john.doe@example.com>`

You can include this automatically when you commit a change to your local git repository using <code>git commit -s</code>.

### DCO and Real Names

The DCO requires the use of a real name that can be used to identify someone in case there is an issue about a contribution they made. 

A real name does not require a legal name, nor a birth name, nor any name that appears on an official ID (e.g. a passport). Your real name is the name you convey to people in the community for them to use to identify you as you. The key concern is that your identification is sufficient enough to contact you if an issue were to arise in the future about your contribution.

Your real name should not be an anonymous id or false name that misrepresents who you are.

Additional context can be found [here](https://github.com/cncf/foundation/issues/383).

### Make doing DCO signoffs easier

By default, all GitHub repositories have both the [GitHub DCO App][] installed and [commit signoffs enabled][GitHub commit signoff policy]. This ensures anyone contributing via the GitHub web interface will automatically signoff commits.

For developers working from thier local machines, there are a few options available to automatically signoff commits.

- [DCO command line tool](https://github.com/coderanger/dco), which lets you do a single signoff for an entire repo.
- Shell scripting to automatically apply signing. Here is an example for bash, to be put into a .bashrc file:

```bash
git() {
    if [[ $1 == "commit" ]]; then
        shift
        echo "Executing git commit -s $@"
        command git commit -s "$@"
    else
        command git "$@"
    fi
}
```

### Signoff for commits where the DCO signoff was missed

When bringing in a code repository for the first time or commits done before the DCO checks are enabled, there would be a series of commits that don't include the sign-off statement. You can retroactively signoff commits you've made by making a commit with your DCO signoff that contains a new text file (the suggested name is `past_commits.txt` ) with the following contents:

````
The following commits were made pursuant to the Developer Certificate of Origin, even though a Signed-off-by: was not included in the commit message.

<COMMIT HASH> <COMMIT MSG>
...
````

Each user who has made the past commits should have their own <code>Signed-off-by:</code> line in the commit message.

This process can be automated using the [DCO Org Check script](https://github.com/jmertic/dco-org-check).

### Handling DCO errors using GitHub website commits.

The [Probot: DCO](https://github.com/probot/dco) app requires that the email address and name specified in the DCO Signoff match that of the current information from the user making the commit. Generally, this is handled automatically when using a local git client, but when making contributions from the GitHub website directly, this needs to be aligned manually.

[Apache License, Version 2.0]: http://www.apache.org/licenses/LICENSE-2.0
[Community Data License Agreement (CDLA) license]: https://cdla.io/
[Creative Commons Attribution 4.0 International License]: http://creativecommons.org/licenses/by/4.0/
[DCO]: https://developercertificate.org/
[GitHub commit signoff policy]: https://docs.github.com/en/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization
[GitHub DCO App]: https://github.com/apps/dco
