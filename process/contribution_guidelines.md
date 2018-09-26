# Contribution Guidelines for Open Mainframe Project hosted projects

This document captures the general guidelines for contributing to open source projects hosted by Open Mainframe Project. These guidelines express the provisions in the Intellectual	Property Policy within [Open Mainframe Project charter](https://openmainframeproject.org/charter).

Note that each hosted project may adopt thier own guidelines, which would supercede these provisions in the case of conflict.

## License specification

All source code must clearly identify the open source license used. The Open Mainframe Project charter dictates [Apache 2](https://spdx.org/licenses/Apache-2.0.html) by default except for Linux kernel code which must be [GPLv2](https://spdx.org/licenses/GPL-2.0). All	documentation	and non-code will	be received and	madeavailable	by the Project under the Creative Commons Attribution	4.0	International	License (available at http://creativecommons.org/licenses/by/4.0/).

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

We have tried to make it as easy as possible to make contributions. This applies to how we handle the legal aspects of contribution. We use the same approach — [the Developer’s Certificate of Origin 1.1 (DCO)](https://github.com/hyperledger/fabric/blob/master/docs/source/DCO1.1.txt) — that the [Linux® Kernel community](http://elinux.org/Developer_Certificate_Of_Origin) uses to manage code contributions.

We simply ask that when submitting a patch for review, the developer must include a sign-off statement in the commit message.

Here is an example Signed-off-by line, which indicates that the submitter accepts the DCO:

<code>Signed-off-by: John Doe <john.doe@hisdomain.com></code>

You can include this automatically when you commit a change to your local git repository using <code>git commit -s</code>.
