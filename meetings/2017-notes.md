---
title: "2017-01-12"
parent: Meetings
---
Open Mainframe Project
TSC Meeting
January 12, 2017

Attendees:

  * John Mertic, Linux Foundation
  * Serena Malkani, Linux Foundation
  * Phil Tully, ADP *
  * Berthold Gunreben, SUSE *
  * Dale Hoffman, IBM *
  * Marcel Mitran, IBM
  * Ariadinny Braz
  * Len Santalucia, Vicom Infinity
  * Barton Robinson, Velocity Software
  * Alex Kim, Vicom Infinity
  * David Rossi, IBM
  * David Edelsohn, IBM
  * Emily Hugenbrach, IBM

Voting members not in attendance:

  * James Caffrey, IBM *
  * Scott Fagen, CA *
  * Herbert Daly, U of Bedfordshire *

Mr. Tully opened the meeting at 1:06pm ET. Mr. Tully presented the following agenda for the meeting:

  * Docker announcement from IBM
  * OMP/HyperLedger update
  * OpenStack on z/VM update
  * Internship program update
  * SUSE Tumbleweed announcement

# Docker announcement from IBM

Mr. Hoffman announced that IBM and Docker have now entered into a partnership agreement for a joint engineering fashion.

IBM can resell docker engines and data center on both z and power platforms. Still working on who is going to do final L1 and L2 Support in the next month
Sending a team to dockers facilities to work on delivery of products
Hope to make a big public splash at IBM interconnect

Mr. Mertic asked what can we as a project to help contribute? Ideas mentioned included:

  * Interns testing out
  * Differentiating things : scaling features from ADP
  * Will be  Z unique
  * Testing a high density system with docker
  * Secure containers- isolation features
  * Opportunity for us to improve how docker does resource management

Mr. Mertic said he would pull together a call for picking out what to focus on.

# OMP/HyperLedger update

Discussion around hyperledger - Open Source around blockchain
How can Open Mainframe Project work with them
It appears we don’t have a lot to do there.. If a customer wants a z image, they can. IBM heavily involved and has experience. Advocacy is already being done for.
Possibly doing some work with interns down the line
Right now, there’s not much of us to do other than monitor

# OpenStack on z/VM update

Mr. Tully lead a discussion around focusing the OpenStack on z/VM project on a codebase. The following feedback came from those on the meeting

  * Cloud integration with ZVM, xcat issues
  * ADP comment: threw xcat out as a base, using open source product  (zoom)  for integration
  * 1 piece really missing is the UI
  * Suggestion: maybe OMP could promote getting interns to develop a UI
  * Full api functionality, user exits
  * Gotten much better since version 1
  * Openstack integration? Xcat has a similar approach and does not need openstack and can handle functions on its own …
  * Phil: xcat- many problems, this is fully open
  * Something to think about : play around with LXZ package, much less the a complete cloud environment. Allows you to interact with zvm, enable mk cloud, does all of what a cloud can do
  * Glue from openstack to ZVM, we need a starting point.. Let’s figure out where to start..
  * Goal: writing new drivers.. Different approaches to this right now, but we as a project need to confidently make this better? Discussion around different options cloud- but we need to be cohesive and not have competing efforts
  * IBM perspective - going to continue to do things with Xcat due to pre- existing investments -- follow up meeting to get on same page
  * Why a proxy to translate commands?

Mr. Mertic proposed a follow up meeting for group in the next week or 2 to help select a code base to start from.

# Internship program update

Mr. Mertic indicated that the internship program was open for applications, and asked members of the group to provide feedback on projects for students to work on. Mr. Robinson, Mr. Edelsohn, and Mr. Mitran all indicated they would provide ideas.

# SUSE Tumbleweed announcement

Mr. Gunreben indicated that the SUSE Tumbleweed release has happened for s390, providing additional details over the email list.

# Meeting Cadence

The next meeting of the TSC was scheduled for February 9th, 2017 at 1:00pm Eastern Time.

# Adjournment

Mr. Tully closed the meeting at 2:01pm Eastern Time.
---
title: "2017-02-09"
parent: Meetings
---
Open Mainframe Project - TSC Meeting
February 9, 2017

Attendees:

  * John Mertic, Linux Foundation
  * Phil Tully, ADP *
  * Mike Friesenegger, SUSE *
  * Elton Desouza, IBM
  * Don Spoerke, GT Software
  * Bob Dahlberg, VCU
  * Alan Warhurst, BMC

Voting members not in attendance:

  * Dale Hoffman, IBM *
  * James Caffrey, IBM *
  * Scott Fagen, CA *
  * Herbert Daly, U of Bedfordshire *
  * Marcel Mitran, IBM

Mr. Tully opened the meeting at 1:04pm ET. Mr. Tully presented the following agenda for the meeting:

  * Board meeting feedback
  * OMP / Linux on z Security proposal
  * Cloudstack z/VM update
  * Docker update

**Internship program update**

Mr. Mertic gave an update on the intern selection process. There have been 29 applicants, and on track currently for announcing the accepted list late next week.

**Presentation on Apache Spark - TSC to review for potential investment**

Mr. Desouza gave an update on Apache Spark. Currently IBM is positioning Apache Spark on z/OS because the data is local to z/OS, but would like to shift that to Linux to align with the Watson ML component.

Feedback from the TSC included:
  * Does TensorFlow require NVIDIA GPUs? Training piece is more efficient with those GPUs, but not a hard requirement

Next steps are for Mr. Desouza to share his slides with the group and discussion offline.

**Cloudstack z/VM update**

Mr. Tully led a discussion on next steps for this group. The general discussion indicated that it needed to focus on plugging z/VM into any modern cloud management solution.



**Docker update**

Mr. Mertic said he is waiting for updates from Dale Hoffman before understanding where the project can invest its resources.

**Meeting Cadence**

The next meeting of the TSC was scheduled for April 20th, 2017 at 1:00pm Eastern Time.

**Adjournment**

Mr. Tully closed the meeting at 2:01pm Eastern Time.
---
title: "2017-04-20"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - April 20, 2017

**Attendees:**

  * John Mertic, Linux Foundation
  * Serena Malkani, Linux Foundation
  * James Caffrey, IBM *
  * Mark Post, SUSE *
  * Barton Robinson, Velocity Software
  * Emily Hugenbruch, IBM
  * David Edelsohn, IBM
  * David Rossi, IBM
  * Mike Friesenegger, SUSE
  * Neale Ferguson, Sine Nomine
  * Harry Williams, Marist College
  * Len Santalucia, Vicom Infinity

Voting members not in attendance:

  * Phil Tully, ADP *
  * Dale Hoffman, IBM *
  * Scott Fagen, CA *
  * Herbert Daly, U of Bedfordshire *
  * Marcel Mitran, IBM

Mr. Mertic opened the meeting at 1:07pm ET. Mr. Tully presented the following agenda for the meeting:

  * Update on internship program
  * Docker techbrief and Discourse Community engagement ( Serena )
  * Future OpenStack and z/VM integration ( Mike/Emily )

## Update on internship program

Mr. Mertic indicated that the all the intern slots were filled, and announced back in March. Mr. Daly will be working to get final mentors in place.

Mr. Caffery asked the group if they could provide Linux logs from production systems to help validate the algorithm that the intern that is working on the ADE project. Mr. Caffery asked if anyone could provide this to email him offline.

## Docker techbrief and Discourse Community engagement ( Serena )

Ms. Malkani asked the group for SME(s) to help with the Docker techbrief campaign. Mr. Santalucia and Mr. Ferguson indicated he could help connect Ms. Malkani to the right person(s).

Ms. Malkani shared some ideas on how to help get more engagement on the Open Mainframe Project Community Forums. Ms. Malkani specifically asked for training for interns and mentors on how to use the community forums.

## Future OpenStack and z/VM integration ( Mike/Emily )

Ms. Hugenbrach asked for this section of the meeting to be recorded.


Ms. Hugenbrach gave an update indicating that IBM is more actively looking to improve the OpenStack and z/VM integration, with an opportunity to break from the concerns raised in the past. Mr. Friesenegger also shared some thoughts from a SUSE perspective.

A subcommittee for this topic will hold a call later in the day to discuss this more.

## Meeting Cadence

The next meeting of the TSC was scheduled for May 11th, 2017 at 1:00pm Eastern Time.

## Adjournment  

Mr. Mertic closed the meeting at 1:41pm Eastern Time.
---
title: "2017-05-11"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - May 11, 2017

**Attendees:**

  * John Mertic, Linux Foundation
  * Phil Tully, ADP *
  * Bob Dahlberg, VCU *
  * Mark Post, SUSE *
  * Barton Robinson, Velocity Software
  * Len Santalucia, Vicom Infinity
  * Ashley Freeth, IBM

Voting members not in attendance:

  * James Caffrey, IBM *
  * Dale Hoffman, IBM *
  * Marcel Mitran, IBM

Mr. Mertic opened the meeting at 1:06pm ET. Mr. Tully presented the following agenda for the meeting:

  * TSC Project updates
    *  Internship
    * ADE
  * OpenStack on z/VM update
    * TSC approval as a top level project
  * Other business

## TSC Project updates

Mr. Mertic indicated that Bob Dahlberg has taken over the internship program adminstration. Mr. Dahlberg provided the following update

- First intern call was held this week, mentors have started working with interns on US programs.
- Spending most of his time getting up to speed and processes organized
- Mentor call next Thursday
- Bob focusing on aligning mentors, projects, and interns. John focused on finance and legal paperwork coordination.

Mr. Tully said he would reach out to James Caffery for an update on ADE.

## CloudStack on z/VM update

Mr. Tully, Mr. Robinson, and Mr. Mertic indicated a call was held earlier this week, indicating that the group is moving forward slowly. There was an agreement to establish a weekly call cadence. Mr. Dahlberg asked to ensure the interns are included in future TSC calls and this subgroup's calls once it is appropriate.

Mr. Tully proposed that CloudStack on z/VM be designated by the TSC as an top level project. Upon Mr. Tully motion and Mr. Dahlberg's second, all voting TSC members approved. The TSC then asked the CloudStack on z/VM project to select a maintainer to serve as a member of the TSC.

## Other Business

Mr. Mertic and Mr. Santalucia gave an update on the board discussion around technical engagement for OMP members, stressing the board seeing the importance of such. Mr. Santalucia encouraged the TSC to be supportive, inclusive, and open to member driven project, and work with members to encourage them to bring projects to the TSC.

Mr. Tully also shared the board conversation around engaging the larger technical ( both mainframe and non-mainframe ) community with the OMP. He asked TSC members to think of other places to get the word out around the project.

## Meeting Cadence

The next meeting of the TSC was scheduled for June 8th, 2017 at 1:00pm Eastern Time.

## Adjournment

Mr. Mertic closed the meeting at 1:39pm Eastern Time.
---
title: "2017-07-13"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - July 13, 2017

**Attendees:**

  * John Mertic, Linux Foundation
  * Phil Tully, ADP *
  * Bob Dahlberg, VCU *
  * Dale Hoffman, IBM *
  * Mark Post, SUSE *
  * Emily Hugenbruch, IBM *
  * James Caffrey, IBM *
  * David Edelsohn, IBM
  * Jeff Andrews, GT Software
  * Len Santalucia, Vicom Infinity
  * Barton Robinson, Velocity Software
  * Mike Friesenegger, SUSE
  * Peter Haines, GT Software
  * Tuan Hoang
  * Neale Ferguson, Sine Nomine Associates
  * Ariadinny Braz
  * Penelope Yao, Linux Foundation

Voting members not in attendance:

  * Marcel Mitran, IBM *

Mr. Mertic opened the meeting at 1:06pm ET. Mr. Mertic presented the following agenda for the meeting:

  * TSC Projects updates
    * ADE
    * Cloudstack on z/VM
    * Internship
  * Discussion of s390x tools collaboration.
  * Discussion of project idea around Linux FS drivers for legacy mainframe file systems ( Jeff Andrews - GT Software )

# TSC Project updates

## ADE

  * Been quiet over the past few months, but should be having some unit tests and continuous model tooling support that will be integrated in the coming weeks.
  * Intern is supporting this effort, writing a completely new scorer for collection of IoT data.
  * 1-2 people per week cloning, 20-30 people per 2 weeks looking at the code

## Cloudstack on z/VM

  * Focused mostly on group introductions and customers reviewing how they are doing cloud deployments.
  * Weekly calls, but some distruptions with the 4th holiday and VMWorkshop
  * 3 interns are working on this project, focusing on them being able to present work of the project at Openstack Summit Sydney, including new architecture and mapping to existing OpenStack commands.

## Internship

  * EU interns are launched and moving along.
  * US interns past midway point, preparing for SHARE, overall these projects are doing well.

# Discussion of s390x tools collaboration

Mr. Friesenegger kicked off a discussion around seeing if a portion of the s390x tools can be split off and less kernel level dependent. Mr. Post expressed concerns of the legal aspects of this which might prevent this project. There was discussion of seeing how to get past this, and suggestions of having a customer drive the need and an Open Mainframe Project TSC project. In parallel, the group suggested driving a working group call for determining how the packaging could be split. Mr. Mertic said he would schedule a call in two week for this discussion, and Mr. Tully indicated he would drive for legal resolution with IBM.

# Discussion of project idea around Linux FS drivers for legacy mainframe file systems

Mr. Andrews led a discussion around an idea for a project around Linux FS drivers for many of the legacy mainframe file systems in use by customers. Mr. Ferguson outlined some challenges in many of these filesystems having undocumented code. There was some interest in a working group, so Mr. Mertic said he would look to schedule a call once Mr. Andrews delivers a proposal to share broadly with the group.

# Meeting Cadence

The next meeting of the TSC was scheduled for August 17th, 2017 at 1:00pm Eastern Time.

# Adjournment

Mr. Mertic closed the meeting at 1:55pm Eastern Time.
---
title: "2017-08-17"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - August 17, 2017

**Attendees:**

  * John Mertic, Linux Foundation
  * Phil Tully, ADP *
  * Mark Post, SUSE *
  * Bob Dahlberg, VCU *
  * Don Spoerke, DataKinetics
  * Len Santalucia, Vicom Infinity
  * Barton Robinson, Velocity Software
  * John Arwe, IBM
  * Neale Ferguson, Sine Nomine Associates
  * Vincent Terrone, William Patterson University

Voting members not in attendance:

  * Dale Hoffman, IBM *
  * Emily Hugenbruch, IBM *
  * James Caffrey, IBM *
  * Marcel Mitran, IBM *

Mr. Mertic opened the meeting at 1:06pm ET. Mr. Mertic presented the following agenda for the meeting:

  * New repo form Atom editor language highlighting ( John Arwe )
  * TSC Projects updates
    * ADE
    * Cloudstack on z/VM
    * Internship
  * Update on s390x tools collaboration.
  * Update on project idea around Linux FS drivers for legacy mainframe file systems ( Jeff Andrews - GT Software )

## New repo form Atom editor language highlighting

John Arwe showed the Atom plugins he developed that are on the Open Mainframe Project Github repo.

  * https://github.com/openmainframeproject/atompkg-language-zvm-rexx
  * https://github.com/openmainframeproject/atompkg-language-zvm-names
  * https://github.com/openmainframeproject/atompkg-language-zvm-asm
  * https://github.com/openmainframeproject/atompkg-language-zvm-gml

## TSC Project updates

### ADE

  * No updates

### Cloudstack on z/VM

Sorry I won't get to call in tomorrow. But I think with the Cloudstack group, we've worked through some requirements for deploy, networking and disk. We're having a comeback on the question of SMAPI vs. zPRO vs. LXC once the LXC proof of concept is done. We're hoping to finish the basic requirements discussion on Friday and then next week have a recap of our requirements so far and start to talk about how to get them implemented.

The interns are moving along well, we would love to hear more from them on the calls. Amit usually calls in and participates, but Rohit and Akanksha haven't been able to make the calls. No word yet on whether their abstract was accepted for the OpenStack Sydney summit.

### Internship

  * EU interns at midway point. Waiting for acceptance for OpenStack Summit Sydney.
    * All 3 interns working on sections on the same project under one mentor, going well.
  * US interns done, 4/5 successfully completed, sent final stipend.
  * Working on setting up 2018 program, reviewing feedback from this year's program. Things to consider for the future include:
    * Have mentors more involved in the selection process.
    * Have intern show-and-tell sessions to help build collaboration
    * Provide training materials to interns on mainframe platform, perhaps lengthen that period.

## Discussion of s390x tools collaboration

Mr. Tully said that he needs to review the concerns ADP was seeing internally. Review done by the working group seemed to indicate that there wasn't many backwards compatibility issues.

## Discussion of project idea around Linux FS drivers for legacy mainframe file systems

Mr. Mertic said Mr. Andrews said they are still working on the proposal, will provide an update soon.

## Meeting Cadence

The next meeting of the TSC was scheduled for September 14th, 2017 at 1:00pm Eastern Time.

## Adjournment 

Mr. Mertic closed the meeting at 1:39pm Eastern Time.
---
title: "2017-09-28"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - September 28, 2017

**Attendees:**

  * John Mertic, Linux Foundation
  * Emily Hugenbruch, IBM *
  * Mark Post, SUSE *
  * Phil Tully, ADP *
  * James Caffrey, IBM *
  * Neale Ferguson, Sine Nomine Associates
  * Vincent Terrone, William Patterson University
  * Allen Zander, DataKinetics
  * Barton Robinson, Velocity Software
  * Len Santalucia, Vicom Infinity

Designated members not in attendance:

  * Bob Dahlberg, VCU *
  * Dale Hoffman, IBM *
  * Marcel Mitran, IBM

Mr. Mertic opened the meeting at 1:06pm ET. Mr. Mertic presented the following agenda for the meeting:

  * TSC Projects updates
    * ADE
    * Internship
    * Cloudstack on z/VM
  * Presentation from DataKinetics on potential TSC project

# TSC Project updates

## ADE

Mr. Caffery indicated 1.0.4 is preparing for release in October, fixing several unit test issues. Mr. Caffery said that there is work ongoing on building better regression test processes for automating future releases. Mr. Caffery said there are 8-10 hits a week on the repo, which they are happy with. He is also hoping for more engagement with NC A&T over time, and will work with the TSC and internship program to identify skills and projects for the project.

## Cloudstack on z/VM

Ms. Hugenbruch said the group is still considering the solution to move forward with code-wise, though there has been good discussion on requirements. Mr. Tully asked questions around the IBM future direction on a product to replace the current solution; Ms. Hugenbruch provided context on that direction. Mr. Tully indicated that there should an architectural review to help expedite coming to a solution. Mr. Robinson and Ms. Hugenbruch shared some links around the IBM work ongoing ( https://github.com/mfcloud/python-zvm-sdk/blob/master/doc/source/restapi.rst and http://cloudlib4zvm.readthedocs.io/en/latest/index.html ).

Ms. Hugenbruch said she is looking for someone to transition chairperson roles to for the group, and is looking for volunteers.

## Internship

  * No updates

# Presentation from DataKinetics on potential TSC project

Mr. Zander started a conversation around X Algorithms ( https://xalgorithms.org/ ), and seeing if there was interest from the TSC in aligning with the effort. Mr. Tully asked everyone to review and then it could be considered for official participation at the next TSC meeting.

# Meeting Cadence

The next meeting of the TSC was scheduled for November 9th, 2017 at 1:00pm Eastern Time.

# Adjournment 

Mr. Mertic closed the meeting at 1:39pm Eastern Time.
---
title: "2017-11-09"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - November 9, 2017

## Attendance

### Attendees:

  * John Mertic, Linux Foundation
  * Phil Tully, ADP *
  * Emily Hugenbruch, IBM *
  * Mark Post, SUSE *
  * Dale Hoffman, IBM *
  * Ingo Adlung, IBM
  * David Edelsohn, IBM
  * Neale Ferguson, Sine Nomine Associates
  * Len Santalucia, Vicom Infinity

### Voting members not in attendance:

  * James Caffrey, IBM *
  * Bob Dahlberg, VCU *
  * Gregory MacKinnon, CA Technologies *
  * Sam D'Angelo, AIG *

## Notes

Mr. Mertic opened the meeting at 1:06pm ET. Mr. Mertic presented the following agenda for the meeting:

  * TSC Projects updates
    * ADE
    * Internship
    * Cloudstack on z/VM
  * Review interest in DataKinetics proposal
  * Alignment with Linux on Z open source team ( https://github.com/linux-on-ibm-z )

### TSC Project updates

#### ADE

Shared via email by Mr. Caffery:

"I'm working on a new release of ADE 1.0.4 to integrate a number of fixes to test programs that have been provided by the community.  The code has been moved to develop branch and I am doing a install test on the final package before moving it to master.

It continues to get a reasonable number of people looking at the repro (10 to 30 people every two weeks)."

#### Cloudstack on z/VM

Ms. Hugenbruch indicated many discussions are still ongoing with at least 3 different projects to focus on. The meeting on 11/10/2017 will go over these proposals. The proposal from Mike MacIssac on developing out zoom sounds like current leading project. Still having challenges on getting the broader community engaged.

Mike MacIssac will be taking over the lead on the project in the coming weeks.

The primary focus of the group would be building out zoom to fill the layer between z/VM and cloudstack technologies, but would not build out OpenStack specific APIs. There would need to be a seperate project to build out the OpenStack APIs, which focusing on zoom should make easier.

#### Internship

Mr. Mertic indicated that the internship program will be announced by Thanksgiving. Mr. Mertic asked members to bring forward project and contribute them to https://github.com/openmainframeproject/tsc/tree/master/project_proposals.

### Review interest in DataKinetics proposal

Mr. Mertic asked if there is any interest in the DataKinetics proposal from last week. There was no interest raised.

### Alignment with Linux on Z open source team ( https://github.com/linux-on-ibm-z )

Mr. Mertic raised the idea of working more directly with the Linux on Z open source team at IBM for identifying open source projects needing s390x support. Mr. Mertic overviewed a program proposal for executing on this plan.

There was discussion on how to best identify the projects to focus on and the role of the TSC in identifying these projects. The following action items came from the call:

* Mr. Mertic to reach out to the Docker contact with Mr. Hoffman on copy, to make a plan for presenting how the project could sponsor building s390x content for DockerHub that could be certifed.
* Mr. Mertic to setup call with Mr. Tully and the IBM Linux on Z open source team to discuss the status of that work and how the OMP could help
* Mr. Tully and Mr. Santalucia to connect with various z/VM tool maintainers to see if they would be interested in the Open Mainframe Project hosting thier code.

### Meeting Cadence

The next meeting of the TSC was scheduled for December 14th, 2017 at 1:00pm Eastern Time.

### Adjournment

Mr. Mertic closed the meeting at 1:49pm Eastern Time.
---
title: "2017-12-14"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - December 14, 2017

## Attendance

### Attendees:

  * John Mertic, Linux Foundation
  * Phil Tully, ADP *
  * Mark Post, SUSE *
  * Mike MacIsaac, ADP *
  * David Edelsohn, IBM
  * Russ Herold
  * Barton Robinson, Velocity Software
  * Cameron Seay, NC A&T State
  * Emily Hugenbruch, IBM
  * Mike Friesenegger, SUSE
  * Len Santalucia, Vicom Infinity

### Voting members not in attendance:

  * James Caffrey, IBM *
  * Bob Dahlberg, VCU *
  * Gregory MacKinnon, CA Technologies *
  * Sam D'Angelo, AIG *
  * Dale Hoffman, IBM *
  * Ingo Adlung, IBM

## Notes

Mr. Mertic opened the meeting at 1:06pm ET. Mr. Mertic presented the following agenda for the meeting:

  * TSC Projects updates
    * ADE
    * Internship
    * Cloudstack on z/VM
  * Discussion/feedback on 'Enable s390x in open source program’ proposal

### TSC Project updates

#### Cloudstack on z/VM

Mr. MacIsaac gave the following update:

- Had trouble scheduling meetings last two weeks - one scheduled for 12/15 at 11:00am ET.
- Been working on putting together a scope of work, but resources are a challenge. Len has helped with getting hardware, but need developers.
-

#### ADE

No update.

#### Internship

Mr. Mertic said we've had 21 applications for the internship program. Mr. Mertic

### Discussion/feedback on 'Enable s390x in open source program’ proposal

Mr. Mertic presented a program plan for better supporting s390x in open source projects for the team to review. Mr. Mertic indicated it is in the best interest of the project and community to have the project be the focal point for any open source project needing s390x support.

Mr. Mertic provided updates on conversations held to date.

* Mr. Mertic reached out to the Docker contact with Mr. Hoffman on copy, to make a plan for presenting how the project could sponsor building s390x content for DockerHub that could be certifed. No response yet.
* Mr. Mertic setup a call with Mr. Tully and Cindy Lee to discuss the status of that work and how the OMP could help. There was interest in collaborating, and trying to leverage work being done in the POWER community for a similar goal of providing CI and hardware resources. Mr. Mertic indicated there is no timetable for that work.
* Mr. Tully and Mr. Santalucia indicated that they would connect with various z/VM tool maintainers to see if they would be interested in the Open Mainframe Project hosting thier code.
* Mr. Post showed linuxvm.org, indicated that he's supported this site for years but would like to see how get more content.

Mr. Mertic proposed launching the program publically after the first of the year, and based on response align resources.

### Meeting Cadence

The next meeting of the TSC was scheduled for January 11th, 2018 at 1:00pm Eastern Time.

### Adjournment

Mr. Mertic closed the meeting at 1:41pm Eastern Time.
