---
parent: Meetings
title: "2016-01-07"
---
Open Mainframe Project


John Mertic, Linux Foundation

Phil Tully, ADP \*

Berthold Gunreben, SUSE \*

Dale Hoffman, IBM \*

Scott Fagen, CA \*

Marcel Mitran, IBM

Larry Strickland, DataKinetics

Mark Wilson, RSM Partners

Harry Williams, Marist College

Glenn Everitt, Compuware

Len Santalucia, Vicom

Herbert Daly, University of Bedfordshire

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 1:05pm. Mr. Mertic presented the
following agenda for the meeting:

\- Update on OpenSUSE/LinuxOne usage for Open Mainframe Project

\- Internship Review (
https://wiki.linuxfoundation.org/openmainframeproject/internprogram )

\- TSC Projects review (
https://wiki.linuxfoundation.org/openmainframeproject/tsc/projectplanning
)

Mr. Hoffman make it clear that we should try to vote on project to
include today. Mr. Mertic indicated that this would be part of the 'TSC
Projects review' agenda item.

**Update on OpenSUSE/LinuxOne usage for Open Mainframe Project**

Mr. Tully asked for an update from Mr. Gunreben on the ability for the
Open Mainframe Project to leverage OpenSUSE and Mr. Williams if we could
use the LinuxOne infrastructure. Mr. Gunreben had no updates with the
holiday breaks, said he would define hardware requirements before the
next TSC meeting and share it over the TSC email list.

Mr. Santalucia said Mr. Williams offered to provide hardware, and would
work directly with Mr. Gunreben to get this going. Both Mr. Gunreben and
Mr. Williams agreed to have an update before the next TSC meeting. Mr.
Gunreben asked if other members could come forward with hardware and
resources for the project to leverage.

**Internship Review**

Mr. Mertic presented the program from last time, and asked if there were
any questions. Mr. Mertic also indicated that we need an internship
program administrator, along with commitments from member companies to
provide mentors.

Mr. Tully asked for someone from the academic community to step up to
lead this effort. Mr. Daly stepped to lead the effort as the project
administrator.

Upon a motion by Mr. Tully, and second by Mr. Gunreben, the TSC voting
members unanimously approved the Internship program as presented by the
draft at
https://wiki.linuxfoundation.org/openmainframeproject/internprogram?rev=1452175826,
and Herbert Daly to serve as the project administrator and as such a
member of the TSC as long as the project remains managed by the TSC.

**TSC Projects review**

Mr. Mertic asked the group to re-review the project list
(<https://wiki.linuxfoundation.org/openmainframeproject/tsc/projectplanning?rev=1452175842>
) and determine which ones the TSC should charter to focus on in 2016.
Mr. Tully said he would like to drive the group towards items that are
fully open source, such as the OpenJDK and DockerHub content, which
would require OpenSUSE environment to handle. Mr. Tully said that
focusing on items without political challenges make the most sense.

*Mr. Wilson left the call at 1:34pm ET.*

Mr. Mitran said he was unbiased, and happy to see any of the projects
included along with the group deciding which projects to include.

Mr. Santalucia agreed with focusing on those items that have minimal
political challenges, and said focusing on microservice architectures
also could be good in this context. Mr. Tully thanks Mr. Santalucia for
this and said he would like to get more input from others on the call.
Mr. Mitran said that microservices is a natural extension to the Docker
item on the list. Mr. Hoffman and Mr. Santalucia said the monitoring
tools are important ones as well, as not having the same ones what is on
x86 ends up being a blocker for System Z adoption.

Mr. Hoffman said that he might have someone available through
BountySource to handle the OpenJDK item, and said he would combine the
Docker items into one and tackle. Would like to add Blockchain as well.

Mr. Mertic mentioned that the Linux Foundation just launched a
Collaborative Project centered around Blockchain, and also manages
projects around containers, both of which could provide opportunities to
engage a larger community.

The group collective decided to focus on these large scale themes, and
the individuals mentioned in parathesis volunteers to scope out the
needs and effort more and come back to the TSC at the next meeting with
a set of tasks for each area.

1.  Develop a JIT for OpenJDK - multiplicative effect of enabling a lot
    of other projects that depend on OpenJDK ( Dale Hoffman )

2.  Docker -- ( Marcel Mitran / Dale Hoffman )

    a.  Build up the docker-hub content for Linux on z (ClefOS,
        OpenSUSE, Ubuntu... )

    b.  Enhance Docker to exploit LoZ capabilities/scale

    c.  Develop a reference micro-service architecture on LoZ

3.  Assess and certify(?) popular Linux management tools for z Systems
    (e.g.
    http://www.infoworld.com/article/2683857/network-monitoring/article.html,
    <https://blog.serverdensity.com/80-linux-monitoring-tools-know/)> (
    Scott Fagen )

4.  Blockchain performance (<https://www.ethereum.org/)> - ( Phil Tully
    / Len Santalucia )

The next meeting of the TSC was scheduled for January 21^st^, 2016 at
1:00pm Eastern Time.

Mr. Mertic closed the meeting at 2:08pm Eastern Time.
---
parent: Meetings
title: "2016-01-21"
---
Open Mainframe Project


John Mertic, Linux Foundation

Phil Tully, ADP \*

Alan Warhurst, BMC

Alex Kim, Vicom Infinity

Ros Schulman, Hitachi Data Systems

Cameron Seay, NC A&T State

Glenn Everitt, Compuware

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 1:07pm. Mr. Mertic presented the
following agenda for the meeting:

\- Update on the Internship program

\- Next steps on TSC Projects

Mr. Mertic indicated that there was not a quorum of the voting members
of the TSC.

**Update on the Internship program**

Mr. Mertic indicated that the Governing Board approved the Internship
program at their regular meeting on January 13^th^, 2016. After the
meeting, in discussion with the marketing committee and the academic
members at large, the following recommendations were made to the
proposal at (
<https://wiki.linuxfoundation.org/openmainframeproject/internprogram?rev=1453302349>
)

-   The addition of this paragraph at the end of the first section under
    'Internship Program'

"The Open Mainframe Project will also give the ability for each intern
successfully completing the program to present their project at an
industry conference. US Students will participate at the SHARE
conference in Atlanta, and EU students will participate at a GSE event.
The Open Mainframe Project will provide a stipend for travel for each
student."

-   Changing the dates of the program as follows.

  --------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  March 25th, 2016                        Application Submission Deadline
  April 22nd, 2016                        Intern Acceptance Notifications Sent
  **US Schedule**                         
  May 2nd -- May 20th 2016                Intern/Mentor Bonding Period - Interns and Mentors get to know one another, interns read documentation, join in irc and mailing lists, and get comfortable with the other developers on the project.
  May 23rd, 2016                          Internship Start Date - Students provided a \$500 stipend
  June 24th, 2016                         Midterm Evaluations - Students receiving a satisfactory evaluation are provided a \$2,500 stipend
  July 25th - July 29th, 2016             Final week: Students tidy code, write tests, improve documentation and submit their code sample.
  August 1st - August 5th, 2016           Students participate at SHARE Conference in Atlanta. Mentors complete their student evaluations. Students receiving a satisfactory evaluation are provided a \$3,000 stipend.
  **EU Schedule**                         
  June 20th -- July 1^st^, 2016           Intern/Mentor Bonding Period - Interns and Mentors get to know one another, interns read documentation, join in irc and mailing lists, and get comfortable with the other developers on the project.
  July 4th, 2016                          Internship Start Date - Students provided a \$500 stipend
  August 5th, 2016                        Midterm Evaluations - Students receiving a satisfactory evaluation are provided a \$2,500 stipend
  September 5th - September 9th, 2016     Final week: Students tidy code, write tests, improve documentation and submit their code sample.
  September 12th - September 16th, 2016   Mentors complete their student evaluations. Students receiving a satisfactory evaluation are provided a \$3,000 stipend.
  TBD                                     Students participate at GSE Conference
  --------------------------------------- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Mr. Warhurst asked about the gap on the EU side between the close of the
internship program, and the conference the interns would participate in,
and if perhaps that gap could be made smaller. Mr. Mertic said this
recommendation came from Herbert Daly who is administering the program,
and he would ask him for his input prior to the vote.

Mr. Mertic indicated that since there isn't a quorum of the TSC voting
members on the call, that this vote would be held via email.

**TSC Projects review**

Mr. Mertic asked the group for updates on breaking down TSC proposals
(<https://wiki.linuxfoundation.org/openmainframeproject/tsc/projectplanning/>
)

Mr. Tully was the only one in attendance representing a project, and
said he is continuing to investigate. Mr. Tully further stressed the
need for the group to get more detail on the TSC Projects list, as the
interns will begin applying soon and will need a good list of projects
for the students to review. Mr. Seay also indicated that this level of
detail is needed for recruitment of students. Mr. Tully indicated that
we would send a note out to the group to get them working on detailing
the list.

**Other Discussion Items**

Mr. Tully said he would do a session at VMWORKSHOP about the Open
Mainframe Project. Said it would be good to have a general deck. Mr.
Mertic said he would share where is he is at with a deck via email.

Mr. Tully asked what our participation at SHARE this year is looking
like. Mr. Seay said he is still working with the SHARE committee to get
the right contact. Mr. Seay said he would work with Mr. Mertic to setup
a call with the SHARE committee contact to determine how to best engage.

The next meeting of the TSC was scheduled for February 4^th^, 2016 at
1:00pm Eastern Time.

Mr. Mertic closed the meeting at 1:31pm Eastern Time.
---
parent: Meetings
title: "2016-02-04"
---
Open Mainframe Project


John Mertic, Linux Foundation

Berthold Gunreben, SUSE \*

Dale Hoffman, IBM \*

Harry Williams, Marist College

Neale Ferguson, Sine Nomine

David Rossi, IBM

Ros Schulman, HDS

Glenn Everitt, Compuware

Alex Kim, Vicom Infinity

Cameron Seay, NC State A&T

Len Santalucia, Vicom Infinity

Marcel Mitran, IBM

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 1:06pm. Mr. Mertic presented the
following agenda for the meeting:

\- TSC Projects ( please be prepared to provide updates on the discovery
work done on the projects you agreed to review and provide more detail
on )

\- Identifying members who can mentor interns

Mr. Mertic acknowledged that there was not a quorum of TSC voting
members for this call.

**TSC Projects review**

Mr. Mertic asked the group to re-review the project list
(<https://wiki.linuxfoundation.org/openmainframeproject/tsc/projectplanning?rev=1452175842>
)

1.  Develop a JIT for OpenJDK ( Dale Hoffman )

Mr. Hoffman was looking at leveraging bounty source for driving this
effort, he's still working to determine if this can be funded. Mr.
Mertic asked if this should continue to be a TSC project if it's not
funded; Mr. Hoffman said it should.

*Mr. Mitran joined the call at 1:14pm ET*

2.  Docker -- ( Marcel Mitran / Dale Hoffman )

    a.  Build up the docker-hub content for Linux on z (ClefOS,
        OpenSUSE, Ubuntu... )

    b.  Enhance Docker to exploit LoZ capabilities/scale

    c.  Develop a reference micro-service architecture on LoZ

Mr. Hoffman had no updates here. Mr. Mertic to work with Mr. Hoffman and
Mr. Mitran on building this into an actionable project list.

3.  Assess and certify(?) popular Linux management tools for z Systems
    (e.g.
    http://www.infoworld.com/article/2683857/network-monitoring/article.html,
    <https://blog.serverdensity.com/80-linux-monitoring-tools-know/)> (
    Scott Fagen )

Mr. Mertic to follow up with Mr. Fagen on this

4.  Blockchain performance (<https://www.ethereum.org/)> - ( Phil Tully
    / Len Santalucia )

Mr. Santalucia said Mr. Tully was approaching his business arm to see if
there was work going on with Blockchain, no updates from them.

Mr. Gunreben said he would like to give an overview of how the OpenSUSE
build system works, and asked for 15-20 minutes of the next meeting to
cover it. Mr. Mertic said he would add it to the next meeting agenda.

**Identifying members who can mentor interns**

Mr. Mertic asked if there were members that were interested in providing
mentors to work with students on the internship projects. The following
organizations indicated that they could provide mentors:

-   Vicom Infinity

-   IBM

-   SUSE

Mr. Seay asked if he could reach out to NC A&T state business partners
that aren't OMP members to provide mentors. Mr. Mertic, Mr. Santalucia,
and Mr. Gunreben all agreed this is a great idea.

Ms. Schulman asked if she could have time to review the projects on the
wiki and get back to the group on if they have appropriate mentors.

The next meeting of the TSC was scheduled for February 18^th^, 2016 at
1:00pm Eastern Time.

Mr. Mertic closed the meeting at 1:38pm Eastern Time.
---
parent: Meetings
title: "2016-02-18"
---
Open Mainframe Project


John Mertic, Linux Foundation

Phil Tully, ADP \*

Berthold Gunreben, SUSE \*

Len Santalucia, Vicom Infinity

David Austin, RSM Partners

Glenn Everitt, Compuware

Harry Williams, Marist College

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 2:05pm. Mr. Mertic presented the
following agenda for the meeting:

\- Update on Anomaly detection engine for Linux logs

\- Finalize TSC project details.

\- OpenSUSE build service overview (Mr. Gunreben)

Mr. Mertic acknowledged that there was not a quorum of TSC voting
members for this call.

**Update on Anomaly detection engine for Linux logs**

Mr. Mertic reminded the group that a vote to accept this contribution as
a Open Mainframe Project TSC project is active on the mailing list. Mr.
Mertic further indicated that there will be a formal announcement via a
press release on Tuesday, February 23, 2016, and that the code will be
in a new GitHub repo by that time. Mr. Mertic also indicated that this
vote would welcome James Caffery, the project maintainer, as a voting
member of the TSC.

**Finalize TSC project details**

Mr. Mertic asked the group to re-review the project list and provide
updates
(<https://wiki.linuxfoundation.org/openmainframeproject/tsc/projectplanning)>.
Mr. Tully stressed the need to have this done as interns will begin
applying to the program next week.

1.  Develop a JIT for OpenJDK ( Dale Hoffman )

Mr. Hoffman is still looking at bounty source for this.

2.  Docker -- ( Marcel Mitran / Dale Hoffman )

Mr. Mertic said that Mr. Mitran and Mr. Hoffman have provided

3.  Assess and certify(?) popular Linux management tools for z Systems
    (e.g.
    http://www.infoworld.com/article/2683857/network-monitoring/article.html,
    <https://blog.serverdensity.com/80-linux-monitoring-tools-know/)> (
    Scott Fagen )

Mr. Tully to follow up with Mr. Fagen on this.

4.  Blockchain performance (<https://www.ethereum.org/)> - ( Phil Tully
    / Len Santalucia )

Mr. Tully he will work with Mr. Santalucia in the next week or two to
break this down.

**OpenSUSE build service overview**

Mr. Mertic introduced Mr. Gunreben to provide a presentation on the
OpenSUSE build service.

Mr. Santalucia asked if a video recording of this presentation could be
put online somewhere. Mr. Gunreben said he would look into that.

The next meeting of the TSC was scheduled for March 3^rd^, 2016 at
1:00pm Eastern Time.

Mr. Mertic closed the meeting at 2:00pm Eastern Time.
---
parent: Meetings
title: "2016-03-17"
---
Open Mainframe Project


John Mertic, Linux Foundation

Neale Fergusson, Sine Nomine Associates

Berthold Gunreben, SUSE \*

David Rossi, IBM

James Caffrey, IBM \*

Herbert Daly, U of Bedfordshire \*

Harry Williams, Marist College

Voting members not in attendance:

Phil Tully, ADP \*

Scott Fagen, CA \*

Dale Hoffman, IBM \*

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 1:06pm ET. Mr. Mertic presented the
following agenda for the meeting:

\- Internship update (Herb)

\- Open Source on Mainframe update (Neale/Daniel)

\- ADE project update (James)

\- TSC focus area update

**Internship update**

Mr. Daly indicated that there were 13 applicants for the program, and we
have enough data to start picking candidates. Mr. Daly is working to do
phone interviews next week and discuss with potential mentors.

Mr. Daly suggested that we might want to consider not forcing us to fill
all 8 slots if the candidate quality level isn't high enough to ensure
success. Mr. Gunreben said there was a challenge engaging the German
academic institutions which should be addressed for next time. Mr. Daly
said he hopes having a good group this time will help advertisement for
next time.

Mr. Daly said the projects around porting Linux monitoring tools was the
most popular area, with Docker and Docker Hub content coming in second.

Mr. Daly said he would organize a call with the project mentors
tomorrow.

**Open Source on Mainframe update**

Mr. Ferguson gave an overview of the project scope, indicating he's
built a script that builds an XML document that could be ported into a
database. Mr. Gunreben asked if they had looked at the Open Build
Service provided by SUSE; Mr. Ferguson said he hadn't but would. There
was a discussion on the scope of the project and if this service would
apply to this.

**ADE project update**

Mr. Caffrey provided update on the project, saying that a 1.0.1 version
is coming in the next week or so with contributed fixes included.

**TSC focus area update**

Mr. Mertic reviewed the project list and indicated there were no
updates.

**Other business**

Mr. Gunreben said he would be happy to give anyone updates on OpenSUSE,
and apologized for missing the last call.

**Meeting Cadence**

The next meeting of the TSC was scheduled for April 28^th^, 2016 at
1:00pm Eastern Time.

**Adjournment**

Mr. Mertic closed the meeting at 1:46pm Eastern Time.
---
parent: Meetings
title: "2016-04-14"
---
Open Mainframe Project


John Mertic, Linux Foundation

Neale Fergusson, Sine Nomine Associates

Berthold Gunreben, SUSE \*

David Rossi, IBM

James Caffrey, IBM \*

Herbert Daly, U of Bedfordshire \*

Harry Williams, Marist College

Voting members not in attendance:

Phil Tully, ADP \*

Scott Fagen, CA \*

Dale Hoffman, IBM \*

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 1:06pm ET. Mr. Mertic presented the
following agenda for the meeting:

\- Internship update (Herb)

\- Open Source on Mainframe update (Neale/Daniel)

\- ADE project update (James)

\- TSC focus area update

**Internship update**

Mr. Daly indicated that there were 13 applicants for the program, and we
have enough data to start picking candidates. Mr. Daly is working to do
phone interviews next week and discuss with potential mentors.

Mr. Daly suggested that we might want to consider not forcing us to fill
all 8 slots if the candidate quality level isn't high enough to ensure
success. Mr. Gunreben said there was a challenge engaging the German
academic institutions which should be addressed for next time. Mr. Daly
said he hopes having a good group this time will help advertisement for
next time.

Mr. Daly said the projects around porting Linux monitoring tools was the
most popular area, with Docker and Docker Hub content coming in second.

Mr. Daly said he would organize a call with the project mentors
tomorrow.

**Open Source on Mainframe update**

Mr. Ferguson gave an overview of the project scope, indicating he's
built a script that builds an XML document that could be ported into a
database. Mr. Gunreben asked if they had looked at the Open Build
Service provided by SUSE; Mr. Ferguson said he hadn't but would. There
was a discussion on the scope of the project and if this service would
apply to this.

**ADE project update**

Mr. Caffrey provided update on the project, saying that a 1.0.1 version
is coming in the next week or so with contributed fixes included.

**TSC focus area update**

Mr. Mertic reviewed the project list and indicated there were no
updates.

**Other business**

Mr. Gunreben said he would be happy to give anyone updates on OpenSUSE,
and apologized for missing the last call.

**Meeting Cadence**

The next meeting of the TSC was scheduled for April 28^th^, 2016 at
1:00pm Eastern Time.

**Adjournment**

Mr. Mertic closed the meeting at 1:46pm Eastern Time.
---
parent: Meetings
title: "2016-05-12"
---
Open Mainframe Project


John Mertic, Linux Foundation

Phil Tully, ADP \*

Berthold Gunreben, SUSE \*

James Caffrey, IBM \*

Dale Hoffman, IBM \*

Scott Fagen, CA \*

Herbert Daly, U of Bedfordshire \*

John Crossno, Compuware

Cameron Seay, NC State A&T

Harry Williams, Marist College

Neale Fergusson, Sine Nomine Associates

Marcel Mitran, IBM

Voting members not in attendance:

(none)

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 1:03pm ET. Mr. Mertic presented the
following agenda for the meeting:

\- Internship update (Herb)

\- Open Source on Mainframe update (Neale/Daniel)

\- ADE project update (James)

\- OpenSUSE update (Berthold)

**Internship update**

Mr. Daly said we have 7 interns; program starts formally shortly. Mr.
Mertic thanked everyone for their support. Mr. Daly has helped get the
interns prepared for working with the mentors. Mr. Daly is quite pleased
with the candidates and excited to get things going.

**Open Source on Mainframe update**

Mr. Ferguson said IBM brought forward a tool that could potentially
solve the use-cases, waiting for update from IBM on next steps.

*Mr. Fagen joined the call at 1:10pm ET.*

**ADE project update**

Mr. Caffrey provided update on the project, 1.0.1 was released. Next
release will be 1.0.2, with the focus on reducing SQL costs and improved
visualizations. Mr. Caffrey said they are getting 5-10 clones a week.
Plans to present ADE to Marist College during conference in June.

**OpenSUSE update**

Mr. Gunreben said that there are now public s390x packages being built
for OpenSUSE. Mr. Gunreben detailed some of the work done and future
plans for support. All in attendance were pleased to hear this and
thanked him for all the work done.

**Meeting Cadence**

The next meeting of the TSC was scheduled for June 9^th^, 2016 at 1:00pm
Eastern Time.

**Adjournment**

Mr. Mertic closed the meeting at 1:26pm Eastern Time.
---
parent: Meetings
title: "2016-06-16"
---
Open Mainframe Project


John Mertic, Linux Foundation

Serena Malkani, Linux Foundation

David Edelsohn, IBM

Neale Ferguson, Sine Nomine Associates

Mike Friesenegger, SUSE

Cindy Lee, IBM

Greg Wallace, Linux Foundation

Alex Kim, Vicom Infinity

Alan Warhurst, BMC

Enyu Wang, IBM

Cameron Seay, NC State A&T

Phil Tully, ADP \*

Voting members not in attendance:

Berthold Gunreben, SUSE \*

James Caffrey, IBM \*

Dale Hoffman, IBM \*

Scott Fagen, CA \*

Herbert Daly, U of Bedfordshire \*

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 1:06pm ET. Mr. Mertic presented the
following agenda for the meeting:

\- Status of the interns

\- Project status for listed focus projects

\- Inclusion of Bounty Source projects into TSC sanctioned work.

\- Marketing focus areas

\- Update on open source project list ( Cindy from IBM to do a demo )

**Status of the interns**

Mr. Seay presented this on behalf of Herbert Daly. He's indicated that
the US students are making great progress. Mr. Seay said Mr. Daly will
provide a written update to the TSC.

Mr. Seay indicated that he has a student that Mr. Daly would like to
have included in the intern program sponsorship, for him to work with
Mr. Daly to coordinate and support a blockchain related hackathon. Mr.
Mertic shared Mr. Seay's request over email for approval.

**Project status for listed focus projects**

Updates on projects were:

-   Mr. Kim indicated that Blockchain

-   Mr. Edelsohn said that Musselc is being funded through BountySource

-   Mr. Edelsohn said that SAP has agreed to contribute their OpenJDK
    port for s390x to the project. There still is work in needing
    merging back into core.

-   Other projects are being tackled via the internship program.

**Inclusion of Bounty Source projects into TSC sanctioned work**

Mr. Mertic introduced Mr. Edelsohn, who managed BountySource efforts for
IBM. Mr. Edelsohn brought forth the idea of using some of the developer
funds for hackfests to fund targeted investment in open source for
mainframe.

Ms. Lee presented the various proposed areas.

Mr. Seay asked about if the funding is pledged. Mr. Edelsohn indicated
these projects aren't on Bounty Source now, and these investment amounts
are the recommendations for budget for each.

Mr. Mertic confirmed with Mr. Tully that having the TSC review and
approve line-by-line over email is the next step to resolution.

**Marketing focus areas**

Ms. Malkani and Mr. Wallace presented a list of open source areas and
asked for the group's feedback on prioritization.

The group generally recommended starting the focus on Maria DB.

**Update on open source project list**

Ms. Lee provided an overview of the solution for having a searchable,
open source project list. All members in attendance were pleased with
this a solution. Mr. Friesenegger indicated he would ensure SUSE could
support this with data from their community and enterprise offering.

Mr. Mertic indicated next actions for this was to investigate open
sourcing the codebase.

**Meeting Cadence**

The next meeting of the TSC was scheduled for July 14^th^, 2016 at
1:00pm Eastern Time.

**Adjournment**

Mr. Mertic closed the meeting at 2:13pm Eastern Time.
---
parent: Meetings
title: "2016-07-14"
---
Open Mainframe Project


John Mertic, Linux Foundation

Scott Fagen, CA \*

Herbert Daly, U of Bedfordshire \*

James Caffrey, IBM \*

David Edelsohn, IBM

David Rossi, IBM

John Crossno, Compuware

Alan Warhurst, BMC

Marcel Mitran, IBM

Don Spoerke, GT Software

Harry Williams, Marist

Voting members not in attendance:

Berthold Gunreben, SUSE \*

Dale Hoffman, IBM \*

Phil Tully, ADP \*

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 1:06pm ET. Mr. Mertic presented the
following agenda for the meeting:

\- Bounty Source update ( David )

\- Internship program update ( Herb )

\- Open source project list update ( Cindy )

**Bounty Source update**

Mr. Mertic indicated that this was approved by the TSC via email. Mr.
Edelsohn will provide details to Mr. Mertic on how to get the Open
Mainframe Project setup with Bounty Source.

**Internship program update**

Mr. Daly indicated that all projects are in progress and in process, and
that planning for SHARE involvement is being put together now. Mr. Daly
has indicated that he's not heard of any issues with the project, but
did request assistance on tools for doing videos that could be share via
social and the blog. Many on the call provided recommendations for tools
to use for recording.

Mr. Mertic indicated that we should bring the students together before
SHARE to cover the presentation session, Mr. Daly said he would organize
this.

Mr. Daly said the Blockchain hackathon has been postponed till after
SHARE, tentatively October 15^th^.

**Update on open source project list**

Cindy Lee provided Mr. Mertic the following update via email as she was
unable to attend the meeting:

"The package distro searching tool (IBM internal use only) has info from
3 distros now and I would like to get legal clearance on whether I\'m
allowed to re-distribute package list info for at least 1 before I
proceed with externalizing the tool or open sourcing it. I got in touch
with all 3 distros and my latest updates are:

-   RHEL: Got a NO from them

-   SLES: Has been talking to Mike Friesenegger from your group and have
    good conversation but Mike is away now. Will book a meeting with him
    once he become available.

-   Ubuntu: Have email exchange and sounds positive but still waiting
    for an official answer from them."

**Meeting Cadence**

The next meeting of the TSC was scheduled for August 11^th^, 2016 at
1:00pm Eastern Time.

**Adjournment**

Mr. Mertic closed the meeting at 1:27pm Eastern Time.
---
parent: Meetings
title: "2016-10-13"
---
Open Mainframe Project


John Mertic, Linux Foundation

Phil Tully, ADP \*

Scott Fagen, CA \*

Dale Hoffman, IBM \*

Marcel Mitran, IBM

Harry Williams, Marist College

Don Spoerke, GT Software

David Edelsohn, IBM

Cameron Seay, NC State A&T

Neale Fergusson, Sine Nomine Associates

Voting members not in attendance:

Herbert Daly, U of Bedfordshire \*

James Caffrey, IBM \*

Berthold Gunreben, SUSE \*

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 2:06pm ET. Mr. Mertic presented the
following agenda for the meeting:

\- Report from OpenStack Cloud Consortium meeting and TSC proposed next
steps

\- Discussion on projects/task for Bounty Source funding

**Report from OpenStack Cloud Consortium meeting and TSC proposed next
steps**

Mr. Mertic indicated that the OpenStack Cloud Consortium had it first
meeting, with the initial action to better understand previous
challenges with engaging with the OpenStack community. Mr. Mertic had a
conversation with Alan Clark at OpenStack on this, and his
recommendation was to have a face-to-face meeting with both parties to
discuss the concerns. Mr. Tully also indicated that the IBM team members
would look to get the v/VM team more engaged, and that the non-IBM
vendors felt that IBM should lead the effort as they own the product.

The TSC generally agreed on the following recommendation for next steps
of this consortium in order for it to become a project under the Open
Mainframe Project.

1)  Find 4 additional customers to provide use-cases and participate in
    the community around this development

2)  Obtain support from senior leadership within the z/VM team

3)  Hold a F2F session with the right people at the OpenStack project to
    ensure best practices are taken.

**Discussion on projects/task for Bounty Source funding**

Mr. Edelsohn and Mr. Mertic gave an overview of the Bounty Source
program and what projects are good fit for it.

Mr. Mertic then opened the floor for suggestions on project ideas. The
following ideas came forward:

-   Berthold Gunreben suggested via email some issues with Maven, but
    Mr. Edelsohn said that the bug he pointed to seemed to not be s390
    specific

-   Mr. Mitran said there were ideas around OpenShift and CloudFoundry,
    but those need some scoping work. Mr. Hoffman asked the group for
    more feedback on these if they are of value.

-   Mr. Fagan suggested SensorFlow, but Mr. Edelsohn said that this has
    already been completed. Mr. Mitran asked Mr. Fagen for feedback from
    his customers.

**Meeting Cadence**

The next meeting of the TSC was scheduled for November 10^th^, 2016 at
1:00pm Eastern Time.

**Adjournment**

Mr. Mertic closed the meeting at 2:49pm Eastern Time.
---
parent: Meetings
title: "2016-11-10"
---
Open Mainframe Project


John Mertic, Linux Foundation

Berthold Gunreben, SUSE \*

Scott Fagen, CA \*

Scott Boynton -- Canonical

Don Spoerke, GT Software

Ariadinny Braz

Voting members not in attendance:

Herbert Daly, U of Bedfordshire \*

James Caffrey, IBM \*

Phil Tully, ADP \*

Dale Hoffman, IBM \*

Marcel Mitran, IBM

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 1:05pm ET. Mr. Mertic presented the
following agenda for the meeting:

\- Internship program 2016

\- Bounty Source projects

\- OpenStack update

**Internship Program 2016**

Mr. Mertic shared that the internship program will be announced in the
coming week, and to look for a blog post and social on the announcement.

**Bounty Source projects**

Mr. Edelsohn and Mr. Mertic gave an overview of the Bounty Source
program and what projects are good fit for it.

Mr. Mertic then opened the floor for suggestions on project ideas. The
following ideas came forward:

-   Mr. Gunreben indicated his Maven suggestion, while not s390
    specific, would help enable more Java based software be available on
    the platform.

-   Mr. Boynton suggested look at Kubernetes. He also said he would look
    into other open issues he's seeing from a Canonical perspective

-   Mr. Gunreben said he would like to see an SDK for the FPGA
    compression hardware.

**OpenStack update**

Mr. Mertic gave a quick update on the OpenStack consortium -- no new
news. Mr. Gunreban

**Meeting Cadence**

The next meeting of the TSC was scheduled for December 8^th^, 2016 at
1:00pm Eastern Time.

**Adjournment**

Mr. Mertic closed the meeting at 2:49pm Eastern Time.
---
parent: Meetings
title: "2016-12-13"
---
Open Mainframe Project


John Mertic, Linux Foundation

Berthold Gunreben, SUSE \*

James Caffrey, IBM \*

Scott Fagen, CA \*

David Edelsohn, IBM

Wolfram Gries, AMC and EMA

Barton Robinson, Velocity Software

Len Santalucia, Vicom Infinity

Don Spoerke, GT Software

Shu Hadijatanassov, L3C

Alex Kim, Vicom Infinity

David Rossi, IBM

Neale Ferguson, SineNomine

Klaus Rutush, IBM

Ariadinny Braz

Voting members not in attendance:

Herbert Daly, U of Bedfordshire \*

Phil Tully, ADP \*

Dale Hoffman, IBM \*

Marcel Mitran, IBM

(voting members denoted by asterisks)

Mr. Mertic opened the meeting at 1:06pm ET. Mr. Mertic presented the
following agenda for the meeting:

-   Introduce AMC and EMA

-   Update on the OpenJDK port to s390

-   Update on proposed focus projects

    -   OpenStack on Z

    -   Blockchain on Z

-   BountySource ideas

    -   Callsign?

**Introduce AMC and EMA**

Mr. Mertic introduced Wolfrman Greis to introduce both EMA and AMC and
their thoughts on how they could engage at a technical level.

Mr. Gunreben said there is great value in this partnership, as both
groups can help the OMP better engage in Germany. Mr. Edelsohn asked if
these groups focused on all operating systems for Z, and Mr. Greis said
yes and that they planned to offer education in the coming year. Mr.
Edelson asked which machines are in the universities, and Mr. Greis said
between z9 and z13.

**Update on the OpenJDK port to s390**

Mr. Edelsohn indicated that all the patches to enable s390 made by SAP
have been completed and merged in the hotspot and snapshots for the
future OpenJDK 9 release. OpenJDK 9 is scheduled for release in Summer
2017.

Mr. Berthold asked if testing could start happening now, and Mr.
Edelsohn indicated yes. Mr. Berthold expressed his appreciation for
this. Mr. Santalucia asked that with OpenJDK s390 support, does that
mean that the IBM or Oracle JDK is no longer required. Mr. Edelsohn said
that this does mean that specifically, but does mean that any
application that can run on OpenJDK on different architectures should
now work on s390.

**Update on proposed focus projects**

Mr. Rossi gave an update on OpenStack, indicating that after the initial
proposal in September there is still questions on if OpenStack is the
right platform for cloud enablement and if solving the OpenStack issues
on s390 should be best resolved by the Open Mainframe Project. The
recommendation with this group indicated that it would be best to pursue
this as an open source project, and several end-users have come forward
with interest in participation. Mr. Santalucia indicated that next steps
collecting feedback and defining requirements.

Mr. Rossi further asked feedback from the TSC on whether this is a
worthy project for the Open Mainframe Project to focus on. Mr. Fagen had
concerns of the Open Mainframe Project focusing narrowly on OpenStack on
Z, and that the OpenStack community should handle this instead. Mr.
Santalucia followed up saying that he felt we could supplement the work
being done in the OpenStack project and not replace it. Mr. Fagen agreed
that if the OMP focus was to drive more focus on Z in the OpenStack
project, that would be a good thing provided we aren't taking the place
of the OpenStack code development. Mr. Rossi further said the intention
is to bring more Z expertise to the OpenStack development community
rather than development separately. Mr. Berthold added that there is a
challenge of z/VM knowledge in OpenStack community, which the OMP could
help supplement.

Conversation ensued on the whether the project should focus on
OpenStack.

Mr. Mertic indicated work is moving ahead on scope for Blockchain on Z.
A call was held earlier in the day and next steps are to see how to best
engage in the community.

**BountySource ideas**

Mr. Mertic said there was a request for help in porting some of the
dependencies for Callsign to Z. Mr. Mertic said he would follow up to
see the exact requirements.

**Meeting Cadence**

The next meeting of the TSC was scheduled for January 12^th^, 2017 at
1:00pm Eastern Time.

**Adjournment**

Mr. Mertic closed the meeting at 2:01pm Eastern Time.
