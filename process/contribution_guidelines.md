# Contribution Guidelines for Open Mainframe Project hosted projects

This document captures the general guidelines for contributing to open source projects hosted by Open Mainframe Project. These guidelines express the provisions in the Intellectual	Property Policy within [Open Mainframe Project charter](https://openmainframeproject.org/charter).

Note that each hosted project may adopt thier own guidelines, which would supercede these provisions in the case of conflict.

## License specification

All source code must clearly identify the open source license used. The Open Mainframe Project charter dictates [Apache 2](https://spdx.org/licenses/Apache-2.0.html) by default except for Linux kernel code which must be [GPLv2](https://spdx.org/licenses/GPL-2.0). All	documentation	and non-code will	be received and	made available by the Project under the Creative Commons Attribution 4.0 International License (available at http://creativecommons.org/licenses/by/4.0/).

Requirements to ensure license compliance

- Each repository must contain a license file. Include the plain-text version of the license as a LICENSE file in the top-level directory of the repostiory.
- All source files need to include a header to clearly show the license. Open Mainframe Project has standardized on including [SPDX short-form license identifiers](https://spdx.org/ids) and a general copyright statement as shown below ( this example is for Apache 2.0 licensed code ):

````
/**
  Copyright Contributors to the [NAME OF PROJECT] Project.

  SPDX-License-Identifier: Apache-2.0
**/
````

For property or configuration files that do not support comments, the license may be omitted. If comments are supported the license header should be included.

Contributors may choose to include a copyright statement specifying themselves and/or their employer (as applicable) as the copyright holder of their contributions, but the Open Mainframe Project does not require or recommend this.

Finally, please note that pre-existing third-party license notices and copyright notices *should not be modified or removed* by anyone other than the copyright holder. Any questions on including code under a different license than the project should be discussed with the project lead and Open Mainframe Project Governing Board.

## Developer Certificate of Origin

Open Mainframe Project requires the use of the [Developer’s Certificate of Origin 1.1 (DCO)](https://developercertificate.org/), which is the same mechanism that the [Linux® Kernel](https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/process/submitting-patches.rst#n416) and many other communities use to manage code contributions. The DCO is considered one of the simplest tools for sign offs from contributors as the representations are meant to be easy to read and indicating signoff is done as a part of the commit message.

Here is an example Signed-off-by line, which indicates that the submitter accepts the DCO:

<code>Signed-off-by: John Doe <john.doe@hisdomain.com></code>

You can include this automatically when you commit a change to your local git repository using <code>git commit -s</code>.

### Useful tools to make doing DCO signoffs easier

There are a number of great tools out there to manage DCO signoffs for developers to make it much easier to do signoffs.

- DCO command line tool, which let's you do a single signoff for an entire repo ( https://github.com/coderanger/dco )
- GitHub UI integrations for adding the signoff automatically ( https://github.com/scottrigby/dco-gh-ui )
  - Chrome - https://chrome.google.com/webstore/detail/dco-github-ui/onhgmjhnaeipfgacbglaphlmllkpoijo
  - Firefox - https://addons.mozilla.org/en-US/firefox/addon/scott-rigby/?src=search

Additionally, it is possible to use shell scripting to automatically apply signing. Here is an example for bash, to be put into a .bashrc file:

```
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

When bringing in a code repository for the first time, or commits done before the DCO checks are enabled, there would be a series of commits that don't include the sign-off statement. You can retroactively signoff commits you've made by make a commit with your DCO signoff that contains a new text file ( suggested name is past_commits.txt ) with the following contents:

````
The following commits were made pursuant to the Developer Certificate of Origin, even though a Signed-off-by: was not included in the commit message.

<COMMIT HASH> <COMMIT MSG>
...
````

Each user who has made the past commits should have thier own <code>Signed-off-by:</code> line in the commit message.
