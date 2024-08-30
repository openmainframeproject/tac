---
parent: Processes
nav_order: 1
title: Contribution Guidelines
---
# Contribution Guidelines for hosted projects

* TOC
{:toc}

This document captures the general guidelines for contributing to open-source projects hosted by {{ site.foundation_name }}. These guidelines express the provisions in the Intellectual Property Policy within [{{ site.foundation_name }} charter]({{ site.directed_fund_charter_url }}).

Note that each hosted project may adopt its guidelines, which would supersede these provisions in the case of conflict.

## Two-factor Authentication (2FA)

To enable more robust security for hosted projects, {{ site.foundation_name }} TAC requires all hosted projects to require Two-factor authentication (2FA) for accessing code repositories. Instructions for GitHub are below...

- [Configuring 2FA for your GitHub account](https://docs.github.com/en/github/authenticating-to-github/configuring-two-factor-authentication)
- [Accessing GitHub using 2FA](https://docs.github.com/en/github/authenticating-to-github/accessing-github-using-two-factor-authentication)
- [Recovering your account if you lose your 2FA credentials](https://docs.github.com/en/github/authenticating-to-github/recovering-your-account-if-you-lose-your-2fa-credentials)

## License specification

All source code must clearly identify the open-source license used. {{ site.foundation_name }} hosted projects generally use the [Apache License, Version 2.0](https://spdx.org/licenses/Apache-2.0.html) for all code contributions and the [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/) for documentation and other non-code assets. Each hosted project maintains their own Intellectual Property policy as part of thier Technical Charter which outlines the specific guidelines.

Requirements to ensure license compliance

- Each repository must contain a license file. Include the plain-text version of the license as a LICENSE file in the top-level directory of the repository.
- All source files need to include a header to clearly show the license. {{ site.foundation_name }} has standardized on including [SPDX short-form license identifiers](https://spdx.org/ids) and a general copyright statement as shown below ( this example is for Apache 2.0 licensed code ):

````
/**
  Copyright Contributors to the [NAME OF PROJECT] Project.

  SPDX-License-Identifier: Apache-2.0
**/
````

The license may be omitted for property or configuration files that do not support comments. If comments are supported, the license header should be included.

Contributors may include a copyright statement specifying themselves or their employer (as applicable) as the copyright holder of their contributions, but the {{ site.foundation_name }} does not require or recommend this.

Finally, please note that pre-existing third-party license notices and copyright notices *should not be modified or removed* by anyone other than the copyright holder. Any questions on including code under a different license than the project should be discussed with the project lead and {{ site.foundation_name }} Governing Board.

## Developer Certificate of Origin

{{ site.foundation_name }} requires the Developer’s Certificate of Origin 1.1 (DCO), the same mechanism the [Linux® Kernel](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/process/submitting-patches.rst#n416) and many other communities use to manage code contributions. The DCO is considered one of the simplest tools for sign-offs from contributors as the representations are meant to be easy to read and indicate signoff is done as a part of the commit message.

Here is an example Signed-off-by line, which indicates that the submitter accepts the DCO:

<code>Signed-off-by: John Doe <john.doe@hisdomain.com></code>

You can include this automatically when you commit a change to your local git repository using <code>git commit -s</code>.

### Make doing DCO signoffs easier

By default, all GitHub repositories have both the [GitHub DCO App][] installed and [commit signoffs enabled][GitHub commit signoff policy]. This ensures anyone contributing via the GitHub web interface will automatically signoff commits.

For developers working from thier local machines, there are a few options available to automatically signoff commits.

- DCO command line tool, which lets you do a single signoff for an entire repo ( https://github.com/coderanger/dco )
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

Each user who has made past commits should have their own <code>Signed-off-by:</code> line in the commit message.

This process can be automated using the [DCO Org Check script](https://github.com/jmertic/dco-org-check).

### Handling DCO errors using GitHub website commits.

The [Probot: DCO](https://github.com/probot/dco) app requires that the email address and name specified in the DCO Signoff match that of the current information from the user making the commit. Generally, this is handled automatically when using a local git client, but when making contributions from the GitHub website directly, this needs to be aligned manually.

[GitHub commit signoff policy]: https://docs.github.com/en/organizations/managing-organization-settings/managing-the-commit-signoff-policy-for-your-organization
[GitHub DCO App]: https://github.com/apps/dco
