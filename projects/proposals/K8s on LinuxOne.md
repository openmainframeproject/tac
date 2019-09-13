* Name of project (must be unique within OMP)

Kubernetes on LinuxOne


* Project description (what it does, why it is valuable, origin and history)
 
Kubernetes is the buzz. The uses and applications of Kubernetes are increasing enormously. Kubernetes is 
a multi host distribution system that supports different architectures. The support for s390x is fairly small. This
project aims to support Kubernetes on LinuxOne (s390x architecture) for all the official LinuxOne 
supported distributions Ubuntu, RHEL and SLES. The project aims to hosts clear documentation & screencasts for setting up 
Kubernetes clusters on the respective distributions. Besides the setting up, the project aims to includes usage of Helm (Kubernetes
Package Manager), CNI, CSI, e2e, Knative applications, network plugins and other add ons. The project also aims to support the latest
versions of K8s. Adding support for LinuxOne, enables more users to able to utilize the power of Kubernetes and LinuxOne.

* Statement on alignment with OMP charter mission

The goals of this project align completely with Exhibit A, Section 1 of the
OMP charter.


* Sponsor from TSC (sponsor helps mentor projects)



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

Github ([https://github.com/openmainframeproject/k8s_s390x_linux_docs](https://github.com/openmainframeproject/k8s_s390x_linux_docs))

* External dependencies (including licenses)

None


* Initial committers (how long working on project)

This project started as a Open Mainframe summer internship project in 2018. The initial committers are Mike Friesenegger,
Rajula Vineet Reddy & Asish Varanasi. The project went on for about 3 months and the project currently supports K8s v1.9.6
which includes documentation and screencasts.


* Infrastructure requests (CI / OMP Cluster)

TBD


* Communication channels (slack, irc, mailing lists)

Planned: Slack, blog posts, OMP forums


* Issue tracker (GitHub by default)

Github ([https://github.com/openmainframeproject/k8s_s390x_linux_docs](https://github.com/openmainframeproject/k8s_s390x_linux_docs))


* Website

https://openmainframeproject.github.io/k8s_s390x_linux_docs/sles_12sp3/
https://openmainframeproject.github.io/k8s_s390x_linux_docs/ubuntu_18.04/


* Release methodology and mechanics

The large majority of project repositories will contain source code changes
necessary to allow the code from existing Linux-based projects to work
properly on IBM Z.  The contributors and maintainers of these projects are
expected to work with the original project teams to upstream changes where
possible.  Ideally a project repository can be retired when the broader open
source community supports IBM Z as a platform.

Other project repositories will provide toolchains and infrastructure for
aggregating code from multiple repositories into a particular workload or solution.
These repositories may exist within the project, or at other projects, if those8888
projects already function on IBM Z.  In these cases, the given repository should
be versioned and documented so that end users can understand what code level they
are using.


* Social media accounts

Planned: Twitter, Meetup.com discussions


* Community size and any existing sponsorship

