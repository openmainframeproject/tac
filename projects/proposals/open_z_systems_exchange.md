* Name of project (must be unique within OMP)

The Open Z Systems Exchange.  Alternatives - Area Z, Area 52, AgoraZ, SVC 999


* Project description (what it does, why it is valuable, origin and history)

Linux and Linux toolchains underpin a vast majority of analytics and cloud native
experiences.  To better align with those experiences on z/OS, this project aims to
incorporate popular tooling as a port to the default Unix environment on z/OS
(Unix System Services).  Part of this tooling includes Docker-based content to
support IBM z/OS Container Extensions (IBM zCX), which has been announced, and
will become generally available in z/OS 2.4.

This project will serve as a clearing house for source updates and tooling
necessary to port popular open source projects to z/OS, or create Docker images
for IBM zCX.  Contributors and maintainers will work with the original project
teams to upstream changes.  Where upstreaming is successful, changes kept in
the repositories associated with this project will be deprecated and replaced
with a link to the original project.

Although a central focus of this project will be enabling open source capabilities
on z/OS, much of the development performed here will also apply to Linux on Z.
The intention is to support both operating systems where possible.

This project differs from Zowe in that the goal is to enable Linux workloads and
toolchains to run as they do on other platforms.  By doing so, IBM Z can
can participate more fully in modern enterprise cloud and analytics architectures.
Ideally this project will become the center of an active open source ecosystem
on IBM Z.


* Statement on alignment with OMP charter mission

The goals of this project align completely with Exhibit A, Section 1 of the
OMP charter.


* Sponsor from TSC (sponsor helps mentor projects)

John Mertic, Matt Hogstrom


* Preferred maturity level (see [project stages](../../process/project_stages.md))

Incubation stage


* License and contribution guidelines (refer to the [OMP guidelines](contribution_guidelines.md))

All repositories established by the project are public - they can be read by
anyone, regardless of whether they are a member of the community or not.

Contributors may provide source code changes through pull requests to a
given project repository.  Pull requests are reviewed, approved, and integrated
into a repository by at least 1 maintainer.  Contributors may be invited to
become voting members of the project community.  The community may invite others
to be voting members as well.

Maintainers form a sub-community of the larger project community, and are the
only members with write access to the repositories of the project.  Maintainers
for a given repository are designated by the voting members of the project
community based on their familiarity and experience with the code base of the
repository.

All tools, recipes, pipelines, and other infrastructure created for the project
will use the Apache 2 license, consistent with the contribution guidelines of
the OMP.


* Source control (GitHub by default)

Github ([https://github.com/openzsx/openzsx](https://github.com/openzsx/openzsx))

* External dependencies (including licenses)

None


* Initial committers (how long working on project)

A team developers and testers from IBM and Rocket Software will form the initial
core of committers and maintainers.  Members of this extended team have been
working with open source on IBM Z for 1-3 years.


* Infrastructure requests (CI / OMP Cluster)

TBD


* Communication channels (slack, irc, mailing lists)

Planned: Slack, blog posts, OMP forums


* Issue tracker (GitHub by default)

Github ([https://github.com/openzsx/openzsx](https://github.com/openzsx/openzsx))


* Website

None yet


* Release methodology and mechanics

The large majority of project repositories will contain source code changes
necessary to allow the code from existing Linux-based projects to work
properly on IBM Z.  The contributors and maintainers of these projects are
expected to work with the original project teams to upstream changes where
possible.  Ideally a project repository can be retired when the broader open
source community supports IBM Z as a platform.

Other project repositories will provide toolchains and infrastructure for
aggregating code from multiple repositories into a particular workload or solution.
These repositories may exist within the project, or at other projects, if those
projects already function on IBM Z.  In these cases, the given repository should
be versioned and documented so that end users can understand what code level they
are using.


* Social media accounts

Planned: Twitter, Meetup.com discussions


* Community size and any existing sponsorship

This project is a logical progression of the work done by IBM and Rocket Software
to create the IBM Open Data Analytics for z/OS (IzODA) offering.  This offering
brought Python and Anaconda to z/OS along with a collection of nearly 250 open
source packages that includes both platform infrastructure and analytics
capabilities.  

Approximately 10 developers and testers from IBM and Rocket will be the original
members of the community.
