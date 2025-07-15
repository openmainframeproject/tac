---
title: "2019-01-10"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - January 10, 2019

## Attendance

### Voting member Attendees:

* Bob Dahlberg, VCU ( Internship )
* Phil Tully, ADP
* Matt Hogstrom, IBM ( Zowe )

### Voting members not in attendance:

* Mark Post, SUSE
* Enyu Wang, IBM
* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies
* Joe Devlin, Rocket Software

Quorum NOT achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Mike Friensenegger
* Dan Horak
* David Edelsohn
* Rick Troth
* Len Santalucia
* Neale Ferguson
* Usman Haider

## Agenda

* Project Updates
  * Incubating
    * Atom plugins
    * z/VM Cloud Connector
    * TerseDecompress
  * Active
    * ADE
    * Internship
    * Zowe
* Review PR ( https://github.com/openmainframeproject/tsc/pull/22 )
* Supported Projects Program update
  * Discussion on how to determine open source projects that build on s390x but have endian issues or other runtime problems

## Action Items

* Rick Troth to present on CMSTAR, VMARC, and Curl next month.
* Mike F to share z/VM Cloud Connector getting started instructions
* John M to make list of ideas of projects to bring into OMP
* John M to move old proposed projects into 'historical' folder after consulting with mentors.

## Notes

No update on Atom plugins.

John M indicated that the z/VM Cloud Connector should be through IBM legal by end of week. Mike F apologized for not providing the getting started guide for the project and promised to provide those instructions on usage soon.

John M said TerseDecompress was approved and is in process of having the code being brought into the OMP repo. There was a discussion on additional projects to consider bringing in, with the following proposed by Rick T.

- ZNETBOOT
- CMSTAR
- VMARC
- Curl ( built using REXX )

John M said he would connect offline with Rick T on what it would mean to bring those projects into OMP. Rick T said he would present on the tools at the next TSC meeting.

No update on ADE.

Bob D said there has been 8 applicants for internship thus far, and he is expecting more as questions around applications have been coming in steadily. Bob D said the program is now open to high school students as well if they have the skills for the project they are proposing. Bob D indicated that the Project Ideas page needs cleaned up; John M indicated he could reach out to past year's projects and move them to a historical section if they are no longer valid. Dan H and Neale shared that they have been fielding intern interest. Neale said "I have two potential interns in contact with. One for boringssl (BTLS) and the other for docker image production. For the former I am going to enable BTLS for hardware acceleration and not adding explicit big endian support. By using the h/w acceleration libraries that comes with Linux on Z we will get big endian support even if the underlying box doesn't have the crypto facilities.

Zowe has addressed all external dependencies except ZSS, which Rocket Software has been working to open source the pieces needed by Zowe. High risk for January release, but there seems to be plans to mediate those. Matt H said that little ISV engagement at this point, but getting students are starting to participate. Matt H briefly discussed the ECVTCTBL slot assignment to OMP for projects being developed.

John M talked about the open PR for some updates on the process documents, would take discussion to the TSC list and a vote after a week.

"Discussion on how to determine open source projects that build on s390x but have endian issues or other runtime problems" was pushed to the March meeting for further discussion.

## Chat logs

12:59:34	 From John Mertic : Todays agenda is at https://github.com/openmainframeproject/tsc/blob/master/meetings/20190110.md
13:47:43	 From Mike Friesenegger : Shameless IBM Systems webinar plug:  Three Ways to Extend Z for Security, Cloud and DevOps - https://event.webcasts.com/starthere.jsp?ei=1222577&tp_key=b95cbc3654
---
title: "2019-02-14"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - February 14, 2019

## Attendance

### Voting member Attendees:

* Bob Dahlberg, VCU ( Internship )
* Phil Tully, ADP
* Matt Hogstrom, IBM ( Zowe )

### Voting members not in attendance:

* Mark Post, SUSE
* Enyu Wang, IBM
* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies
* Joe Devlin, Rocket Software

Quorum NOT achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Dave Jones
* Len Santalucia
* Hiren Shan
* Mike MacIssac
* Dan Horak
* Dave Jeffries
* David Edelsohn
* Neale Ferguson
* Rick Troth
* Mike Friesenegger
* Vincent Terrone

## Agenda

* Project Updates
  * Incubating
    * Atom plugins
    * z/VM Cloud Connector
    * TerseDecompress
  * Active
    * ADE
    * Internship
    * Zowe
* Rick Troth to present on CMSTAR, VMARC, and Curl
* Hiren Shah to present project proposal - OSMF Workflows ( https://github.com/openmainframeproject/tsc/blob/master/projects/proposals/z:OSMF%20Workflows.md )
* Supported Projects Program update
  * Discussion on how to determine open source projects that build on s390x but have endian issues or other runtime problems

## Action Items

## Notes

z/VM Cloud Connector to announce before SHARE Phoenix. Dave Jones said he was able to get going it going using the documentation from the existing team.

Internship is up to 58 applicants, deadline for applications is tomorrow. Neale indicated that he's got associated with the DockerHub project and wanted to ensure that he's keeping the spirit of the original submission as it appeared to be SUSE specific. John M indicated that the original submitter is no longer with the project and he could take it any direction he wishes. Mike F offered to help provide mentorship releases as well.

Zowe 1.0 released, all code EPL v2.0 now. Working on refining organization within the project. Intern for this summer.

Rick T presented CMSTAR, VMARC, and Curl. Matt H offered to connect Rick T to the cbttape team for cross pollination.

Hiren presented the OSMF Workflows project for review by the TSC. Matt H and Ingo said they would work with Hiren on governance and then bring back to the TSC when it's ready for a vote.

## Chat logs
---
title: "2019-03-14"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - March 14, 2019

## Attendance

### Voting member Attendees:

* Bob Dahlberg, VCU ( Internship )
* JP Linardon, Rocket Software ( Joe Devlin delegate )
* Mark Post, SUSE
* Matt Hogstrom, IBM ( Zowe )

### Voting members not in attendance:

* Joe Devlin, Rocket Software
* Phil Tully, ADP
* Enyu Wang, IBM
* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies

Quorum NOT achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Klaus Egeler, IBM
* Gerry Fallon, Linux Foundation
* David Edelsohn, IBM
* Rick Troth
* Ingo Adlung, IBM
* Usman Haider
* Vincent Terrone, Vicom Infinity
* Mike MacIssac, ADP

## Agenda

* Project Updates
  * Incubating
    * Atom plugins
    * z/VM Cloud Connector
    * TerseDecompress
  * Active
    * ADE
    * Internship
    * Zowe
* Follow up on project proposal - OSMF Workflows ( https://github.com/openmainframeproject/tsc/blob/master/projects/proposals/z:OSMF%20Workflows.md )
* ICP on Z
* Supported Projects Program update
  * Discussion on how to determine open source projects that build on s390x but have endian issues or other runtime problems

## Action Items

- OSMF Workflow updated proposal next week
- Keep submitting project ideas! https://github.com/openmainframeproject/tsc/blob/master/proposed.md
- John to follow up with ICP on Z group on next steps
- John to schedule Doodle poll for follow up meeting on OSS ecosystem management for s390x

## Notes

z/VM Cloud Connector

TerseDecompress needs to do one final thing and it will be ready to publically announce.

Internship program selections under way - 104 applications this year. Finalizing selections by March 25th. Some confusion on active projects vs inactive. Looking at Community Bridge for the backend for next year.

Zowe community doing well, discussion now on supporting and maintaining releases through the subprojects. Seeing more applications being built on Zowe.

No updates on the OSMF Workflows proposal yet - plan to have refined proposal for next week.

ICP on Z no updates, Ingo possibily sees a project for the group to work on.

Matt H asked if there was a good way to identify open source projects not working on s390x. Lots of discussion, shared several resources:

https://www.ibm.com/developerworks/community/forums/html/topic?id=5dee144a-7c64-4bfe-884f-751d6308dbdf
https://github.com/linux-on-ibm-z
https://www.rocketsoftware.com/zos-open-source

Plan to do meeting before next TSC meeting to come up with structure for this effort.

## Chat logs
---
title: "2019-03-26-ossecosystem-call"
nav_exclude: true
---
# OSS ecosystem on s390x

Focus is on broad open source, not Z specific open source.

## Definitions

z/VM is a hypervisor
CMS is an OS always provided with z/VM
z/OS is an OS
Linux on Z or z/Linux is Linux OS running on the s390x architecture

## Challenges/problems

Issues are common across z/Linux and z/OS

- Private patches/fixes to mainframe compatibility, may not be upstreamed ( either by choice or community not wanting to accept the patches ).
-- Situation a bit better on z/Linux, but still challenges in getting patches upstreamed into versions shipped by distro vendors.
- Hardware access. CI and/or build infrastructure not often available for Z ( better for z/Linux right now than z/OS ), and those Z instances might not have all the right hardware available.
- Cost to community to support a different architecture can be a challenge. Can be a challenge on having developer expertise in the project.
- Takes time to build trust. Communities want sustainable investment.
- Impedance mismatch - Z world might be solving a problem not relevant to the general project.
- Software design too tied to a specific architecture or the characteristics of a specific architecture ( scale out, cheap RAM/CPU, NUMA ).

## How to identify projects that work or don't work

### z/Linux

- Fedora: https://lists.openmainframeproject.org/g/omp-tsc/message/483
- ClefOS: https://lists.openmainframeproject.org/g/omp-tsc/message/484
- SUSE: https://lists.openmainframeproject.org/g/omp-tsc/message/485

### z/OS


### z/VM and CMS



## Chat Logs

### 2019-03-26

```
13:01:14	 From John Mertic : https://www.ibm.com/developerworks/community/forums/html/topic?id=5dee144a-7c64-4bfe-884f-751d6308dbdf
https://github.com/linux-on-ibm-z
https://www.rocketsoftware.com/zos-open-source
13:18:23	 From John Mertic : https://www.ibm.com/developerworks/community/forums/html/topic?id=5dee144a-7c64-4bfe-884f-751d6308dbdf
https://github.com/linux-on-ibm-z
https://www.rocketsoftware.com/zos-open-source
13:27:50	 From Mike MacIsaac : From my viewpoint, the biggest barrier to open source on z/VM and zLinux is lack of access to the hardware.
If you need a first level z/VM, with MAINT access, it is near impossible to get.
If people don't have access to the hardware/hipervisor env't, they cannont contribute.
13:30:27	 From Mike Friesenegger : I agree with Mike.  I was writing the following that states my opinion.  John mentioned that there is no foundation or group that has to think about open source software running on x86.  I believe this because access to x86 systems are easy and the lack of access to s390x hardware is a large barrier to adoption.
13:31:16	 From Rick Troth : Second that. (or ... third?)
13:31:51	 From Rick Troth : There are a limited number of places one can get guest access (to z/VM guests or similar).
13:31:58	 From Rick Troth : The elephant in the room is ...
13:32:02	 From Rick Troth :  ... dare I say it?
13:33:55	 From Rick Troth : Hercules
13:34:57	 From Ingo Adlung : I agree. And we might want to also distinguish between „general“ software, and „system affine“ software. The first one might „just“ want to recompile, or adjust where endianness and similar issues pop up. And there is „system affine“ software which either assumes the availability of specific hardware, or build on data that can be found in one of Linux’ pseudo file-systems, and might be x86 specific and/or s390x unique
13:37:33	 From Ingo Adlung : And when considering AI or more general speaking analytics software we may even face inline optimisations not available for s390x and/or explicit endianness issues.
13:49:50	 From Mike MacIsaac : IBM will not allow z/VM on Hercules
13:53:04	 From Ingo Adlung : scale-out versus scale-up assumptions … software might run, but might not run cost efficiently …
13:54:04	 From Ingo Adlung : e.g. kubernetes workload scheduler, or Mongo sharding and data replication approach
13:56:04	 From Len Santalucia : Cassandra and Scylla DB designed around the lower availability of x86 writing three copies each write. After working with them IBM Z was able to get these DBs to perform more cost effectively
13:56:35	 From Mike Friesenegger : z./vm Cloud Connector?
13:58:33	 From Ingo Adlung : what about the Cloud Connector, Mike?
13:59:33	 From Mike MacIsaac : Ingo, we can talk offline
13:59:59	 From Mike MacIsaac : My phone is 862-308-5089 if you want to talk
```
---
title: "2019-04-11"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - April 11, 2019

## Attendance

### Voting member Attendees:

* Bob Dahlberg, VCU ( Internship )
* Mark Post, SUSE

### Voting members not in attendance:

* Phil Tully, ADP
* Matt Hogstrom, IBM ( Zowe )
* Enyu Wang, IBM
* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies
* Joe Devlin, Rocket Software

Quorum NOT achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Klaus Egeler
* Mike Friesenegger
* Hiren Shah
* Meredith Stowell
* Dan Horak
* Neale Ferguson
* Len Santalucia
* Ingo Adlung
* Gerald Fallon
* Rick Troth

## Agenda

* Project Updates
  * Incubating
    * Atom plugins
    * z/VM Cloud Connector
    * TerseDecompress
  * Active
    * ADE
    * Internship
    * Zowe
* Follow up on project proposal - OSMF Workflows ( https://github.com/openmainframeproject/tsc/blob/master/projects/proposals/z:OSMF%20Workflows.md )
* Report from meeting on OSS ecosytem on s390x.
* Demo of zJenkins ( https://github.com/edge05/zJenkins ) by Jerry Edgington

## Action Items

- John M to schedule call to discuss engagement with rejected interns and past interns
- John M to conduct vote to approve OSMF Workflows via email.

## Notes

Klaus said TerseDecompress is almost finalized, will work with John M to finish up.

Mike F said for z/VM Cloud Connector that he has been making some contributions, and would be happy to mentors others looking to contribute.

Bob D said all offers for the internship went out and contracts being processed. Rejection emails has went to those not accepted, many replied asking why they weren't. There was some discussion on the move to CommunityBridge going forward, changing the terminonlogy from internship to mentorship, and leveraging VCU infrastructure to come for these projects going forward. There was discussion how to ensure students not accepted are still engaged with the Open Mainframe Project.

John M reviewed the Zowe update at https://lists.openmainframeproject.org/g/omp-tsc/message/503

Hiran shared an update on the z/OSMF workflows project proposal. John M said he would work with Hiram on helping the repo organization. All voting members present said they were comfortable taking to the TSC voting list for approval.

John M shared the notes from the OSS Ecosystem calls at https://github.com/openmainframeproject/tsc/blob/master/meetings/20190326-ossecosystem-call.md

## Chat logs
---
title: "2019-05-09"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - May 9, 2019

## Attendance

### Voting member Attendees:

* Bob Dahlberg, VCU ( Internship )
* Phil Tully, ADP
* Mark Post, SUSE
* Joe Devlin, Rocket Software
* Matt Hogstrom, IBM ( Zowe )
* Enyu Wang, IBM

### Voting members not in attendance:

* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies

Quorum achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Len Santalucia
* Jerry Edgington
* Joe Bostian
* Dan Horak
* Vincent Terrone
* David Edelsohn
* Ingo Adlung
* Rick Troth
* Mike MacIssac
* Hiren Shah
* Peter Fandel

## Agenda

* Project Updates
  * Incubating
    * Atom plugins
    * z/VM Cloud Connector
    * TerseDecompress
    * zOS Workflows
  * Active
    * ADE
    * Mentorship
    * Zowe
* Project proposal - Open Z Systems Exchange ( https://github.com/openmainframeproject/tsc/pull/37 ) by Joe Bostian and Peter Fandel
* Demo of zJenkins ( https://github.com/edge05/zJenkins ) by Jerry Edgington

## Action Items

## Notes

z/VM Cloud Connector update from Ingo indicated that the current maintainers are feeling constrained on moving the codebase over to the OMP if significant contributions come in. Discussions are contining on how to proceed for maintainership going forward. Len felt the Open Mainframe Project's incubation stage is a great way to resolve these concerns.

Bob D said US Mentorship starts in a few weeks.

Matt H said Zowe 1.2 released recently, community working on build system and finalizing release processes. Several events planned over the next few months ( IDUG, SHARE, OSS NA ). A new project added in the past few weeks as well. Starting to use community repo for getting better idea collaboration.

Hiren said zOS Workflows is starting to form, getting others from IBM and Rabobank on the initial committers lists.

Joe Bostian presented on Open Z System Exchange. There was significant discussion on the scope of the project and if/how code is upstreamed. Joe B and Peter F agreed to put a few slides together to illustrate the project processes better and share via the email list to discuss at the next meeting of the TSC.

Jerry E provided an overview of ZJenkins. There was significant interest in the project, and Jerry said he would share the slides afterwards.

## Chat logs
---
title: "2019-06-13"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - June 13, 2019

## Attendance

### Voting member Attendees:

* Bob Dahlberg, VCU ( Internship )
* Mark Post, SUSE
* Matt Hogstrom, IBM ( Zowe )

### Voting members not in attendance:

* Phil Tully, ADP
* Anjali Arora, Rocket Software
* Enyu Wang, IBM
* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies

Quorum NOT achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Jerry Edgington
* Len Santalucia
* Mike Friesenegger
* Dan Horak
* Joe Bostian
* Michael Weiner
* Neale Ferguson
* Tatiana Balaburkina
* Troy Flagg
* Satish Godavarthi
* Hiren Shah
* Mike MacIssac
* Rich Troth
* Peter Fandel

## Agenda

* Project Updates
  * Incubating
    * Atom plugins
    * z/VM Cloud Connector
    * TerseDecompress
    * zOS Workflows
  * Active
    * ADE
    * Mentorship
    * Zowe
* Project proposal - Open Z Systems Exchange ( https://github.com/openmainframeproject/tsc/pull/37 ) by Joe Bostian and Peter Fandel
    * Additional details at https://lists.openmainframeproject.org/g/omp-tsc/message/581
* Demo of zJenkins ( https://github.com/edge05/zJenkins ) by Jerry Edgington

## Action Items

## Notes

Mike F said that the SUSE open build service has packages for z/VM Cloud Connector now. Code moved over now to the OMP GitHub.

Hiren said the zOS Workflows project is starting to bring workflows into the project, and starting to bring in workflows from other IBM product teams and Rabobank.

Bob said the US intern is in progress, and the EU bonding period is underway. Bob is working with Community Bridge to get it setup correctly. Bob has also created repos at https://github.com/openmainframeproject-internship for each mentorship project. Neale F gave an update on his Docker image work. Hiren asked details of how to get mentorship projects proposed.

Matt H said Zowe 1.3.0 got approved today. He also said that the group is focusing on process and governance in preparation for it's annual elections. He also said that they are MFA enabling the Zowe repo to increase security. There was also discussion on digitial signatures and validation for open source binaries being distributed by the Zowe project, as well as the VCU infrastructure for Zowe.

Joe B gave an update on the Open Z System Exchange project proposal. There were several concerns on the scope of the project, and John M suggested taking this conversation offline for further discussion.

Jerry E gave a demo of zJenkins

## Chat logs
---
title: "2019-07-11"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - July 11, 2019

## Attendance

### Voting member Attendees:

* Phil Tully, ADP
* Mark Post, SUSE
* Bob Dahlberg, VCU ( Internship )

### Voting members not in attendance:

* Enyu Wang, IBM
* Matt Hogstrom, IBM ( Zowe )
* Anjali Arora, Rocket Software
* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies

Quorum NOT achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Tatiana Balaburkina
* Dan Horak
* Rick Troth
* Mike MacIsaac
* Neale Ferguson
* David Edelsohn
* Meredith Stowell
* Peter Fandel
* Sean Grady

## Agenda

* Project Updates
  * Incubating
    * Atom plugins
    * z/VM Cloud Connector
    * TerseDecompress
    * Zorow ( zOS Workflows )
  * Active
    * ADE
    * Mentorship
    * Zowe
* Project proposal UPDATE - Open Z Systems Exchange ( https://github.com/openmainframeproject/tsc/pull/37 ) by Joe Bostian and Peter Fandel

## Action Items

## Notes

Bob D shared that all mentorships are underway and progressing as scheduled, outside of two that haven't submitted thier project plans. The projects are on GitHub ( https://github.com/openmainframeproject-internship ) which is going well now that the login and permissions issues are resolved. Dan H and Neale F shared that the students they are working with are doing well. Bob D also shared that he's had several people interested in doing projects.

Sean G shared updates on the next Zowe release which will have an updated installer that aligns with the tpyical z/OS experience. He also shared that the Zowe Conformance program should be finalized by end of month, which should bring more vendor products aligned with Zowe.

Peter discussed the latest proposal outlined at https://lists.openmainframeproject.org/g/omp-tsc/message/605, indicating that there still was work to do on internal approvals. TSC voting members in attendance recommended not voting for approval into Incubation until that is resolved.

Rick T brought up a question on Cameron Seay and some of the criticism he was recieving on LinkedIn regarding mainframe. Many offered to connect to him and support him, as well as have him more connected to the Open Mainframe Project

## Chat logs
---
title: "2019-08-14"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - August 14, 2019

## Attendance

### Voting member Attendees:

* Bob Dahlberg, VCU ( Internship )
* Mark Post, SUSE
* Matt Hogstrom, IBM ( Zowe )
* Enyu Wang, IBM

### Voting members not in attendance:

* Phil Tully, ADP
* Anjali Arora, Rocket Software
* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies

Quorum NOT achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Neale Ferguson
* Dan Horak
* Tatiana Balaburkina
* Mike Friesenegger
* David Edelsohn
* Joe Bostian
* Dan Pavel
* Joe Devlin
* Rick Troth
* Len Santalucia

## Agenda

* Project Updates
  * Incubating
    * Atom plugins
    * Feilong ( was z/VM Cloud Connector )
    * TerseDecompress
    * Zorow
  * Active
    * ADE
    * Mentorship
    * Zowe
* Project proposal UPDATE - Open Z Systems Exchange ( https://lists.openmainframeproject.org/g/omp-tsc/message/622 ) by Joe Bostian and Peter Fandel

## Action Items

- John M and Bob D to plan for next year's Mentorship program and CommunityBridge
- Joe D, Bob D, Len S, Neale F, and Matt H to work on plans for VCU infrastructure
- Joe B to share proposal updates and then John M to start vote on Monday

## Notes

z/VM Cloud Connector has been renamed Feilong. Feilong, TerseDecompress, and Zorow will all be publically announced next week via a news release.

Hiren shared that Zorow was discussed at SHARE in sessions and there is good traction in the community. Joe Bostian will present on Zorow at OSSNA next week during the Open Source on Mainframe mini-summit. Hiren shared that Rabobank is contributing along with IBM and he is looking for more contributors.

Bob D shared that Community Bridge doesn't scale and we should look into what to do going forward. Would also be good to start advertising for 2020. Mentees will be presenting at OSSEU in October.

Matt H shared Zowe had it's 1.4 release and 1 year anniversary last week. Zowe held a meetup 8/4 at Broadcom offices in Pittsburgh with 30 attendees. Zowe Conformance program to go public 8/20 with many offerings to be part of the launch. Matt also shared the mentees working on the Zowe project are making good progress and impact on the project. There was discussion on the VCU infrastructure and next steps, along with a plan for sysprog services for the box and Zowe. Joe D, Bob D, and Matt H all voluntered to take part in that work.

Joe Bostian shared updates on the plans for the Open Z Systems Exchange project and answered several questions from the community about this project. Joe said he would share a few update to the proposal on the tsc email list and then a vote will occur next week.

## Chat logs
---
title: "2019-09-19"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - September 19, 2019

## Attendance

### Voting member Attendees:

* Phil Tully, ADP
* Enyu Wang, IBM

### Voting members not in attendance:

* Bob Dahlberg, VCU ( Internship )
* Mark Post, SUSE
* Matt Hogstrom, IBM ( Zowe )
* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies
* _vacant_, Rocket Software

Quorum NOT achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Dan Horak
* Hiren Shah
* David Edelsohn
* Mike MacIssac
* Mike Friesenegger
* Tatiana Balaburkina
* Joe Bostian
* Joe Devlin
* Jerry Edgington
* Dan Sinkovicz
* Neale Ferguson
* Peter Fandel
* Sean Grady

## Agenda

* Project Updates
  * Incubating
    * Ambitus ( was Open Z Systems Exchange )
    * Atom plugins
    * Feilong
    * TerseDecompress
    * Zorow
  * Active
    * ADE
    * Mentorship
    * Zowe
* Proposal to change name of TSC to TAC ( https://github.com/openmainframeproject/foundation/pull/1 )
* Project Proposal - zJenkins ( https://lists.openmainframeproject.org/g/omp-tsc/topic/new_project_proposal/33080852 )
* Project Proposal - K8s on LinuxOne ( https://github.com/openmainframeproject/tsc/blob/master/projects/proposals/K8s%20on%20LinuxOne.md )

## Action Items

- John M to open votes for zJenkins and TSC->TAC rename
- All to provide new projects for mentees at https://github.com/openmainframeproject/tsc/blob/master/proposed.md

## Recording

https://zoom.us/recording/share/1UJCDFDFguiQoq9GeZmmILILvhJ_YgIJhbAgjjCbbFCwIumekTziMw

## Notes

Mike F indicated that Feilong has started project meetings, with the second meeting earlier today. Johan from ICU IT suggested several enhancements they would like to see, and the community is starting to get interest on these contributions. Mike F and James Vincent are both co-chairs.

Joe Devlin indicated he wanted to get engaged with Open Z Systems Exchange. John M indicated the project name is moving to ''.

Hiren said he is starting to work with John M on regular meetings of the project to encourage more contributions. Big focus is getting more contributors involved.

There was lots of discussion for getting new mentorship project ideas, with a plan to go live with the program in the coming weeks.

Zowe is working on the release for 1.5.0 for next week. Sean also said they are working on LTS releases and getting greater community engagement.

Jerry E presented his proposal for ZJenkins, which attendees generally felt would be a good project for Open Mainframe Project to host. Phil asked John M to bring this to the TSC voting list for approval.

Mike F shared that the intern projects last year built guides for Kubernetes on various Linux distributions, and that there is a desire to take this work into a formal project that can act as a home for Kubernetes work on mainframe. Mike F indicated they would appreciate additional feedback and then would like to have the TSC vote on the proposal.

## Chat logs
---
title: "2019-10-10"
parent: Meetings
---
# Open Mainframe Project TSC Meeting - October 10, 2019

## Attendance

### Voting member Attendees:

* Bob Dahlberg, VCU ( Mentorship )
* Mark Post, SUSE
* JP Linardon, Rocket Software
* Enyu Wang, IBM

### Voting members not in attendance:

* Phil Tully, ADP
* Matt Hogstrom, IBM ( Zowe )
* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies

Quorum achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Dan Horak
* Joe Devlin
* Mike MacIssac
* David Edelsohn
* Mark Ackert
* Sean Grady
* Ingo Adlung
* Walter Auetochs
* Peter Fandel

## Agenda

* Project Updates
  * Incubating
    * Ambitus ( was Open Z Systems Exchange )
    * Atom plugins
    * Feilong
    * TerseDecompress
    * Zorow
  * Active
    * ADE
    * Mentorship
    * Zowe
* Project Proposal - K8s on LinuxOne ( https://github.com/openmainframeproject/tsc/blob/master/projects/proposals/K8s%20on%20LinuxOne.md )
* Zoom/Zeus update - Mike MacIssac

## Action Items

- Enyu to follow up on potential CI announcements via email

## Notes

Joe Devlin shared that the Ambitus has launched, and that much of the work is focused on GCC support. Joe shared that he would like to pursue leveraging the Mentorship program to drive more contributors, with Bob Dahlberg sharing the success VCU has had here.

John M shared that Ambitus and Feilong have had thier initial TSC meetings and the cadence for future meetings.

There was a discussion on the domancy of the ADE project. Attendees recommended the TSC reach out to the project lead and determine it's status.

Bob D shared that the Mentorship summer program has finished, with mentees presenting at OSS EU Lyon later this month.  Bob D further shared that he is reviewing the processes for the program and seeing how to automate things better. The plan is to open applications for the 2020 Mentorship program before US Thanksgiving.

Zowe shared it's CUPIDS effort, which focuses on the installation and configuration experience for Zowe. Sean G shared the idea of an Open Mainframe Project conda server and was seeing if there is interest in hosting that. Zowe is also working on a LTSR for Zowe, as well as a general release cadence.

Mike MacIssac shared updates on Zoom and Zeus in the chat and discussed them with the attendees.

## Chat logs

13:03:01	 From John Mertic : * Project Updates
  * Incubating
    * Ambitus ( was Open Z Systems Exchange )
    * Atom plugins
    * Feilong
    * TerseDecompress
    * Zorow
  * Active
    * ADE
    * Mentorship
    * Zowe
* Project Proposal - K8s on LinuxOne ( https://github.com/openmainframeproject/tsc/blob/master/projects/proposals/K8s%20on%20LinuxOne.md )
13:04:46	 From John Mertic : * Project Updates
  * Incubating
    * Ambitus ( was Open Z Systems Exchange )
    * Atom plugins
    * Feilong
    * TerseDecompress
    * Zorow
  * Active
    * ADE
    * Mentorship
    * Zowe
* Project Proposal - K8s on LinuxOne ( https://github.com/openmainframeproject/tsc/blob/master/projects/proposals/K8s%20on%20LinuxOne.md )
13:05:02	 From John Mertic : https://github.com/openmainframeproject/tsc/pull/66
13:09:58	 From John Mertic : https://github.com/openmainframeproject-internship/resources/blob/master/proposed.md
13:12:11	 From John Mertic : https://people.communitybridge.org/
13:21:06	 From John Mertic : Projects only can enter the Emeritus Stage by either:

* On request from the project itself, requiring a supermajority votes of all active project committers
* By a supermajority vote of the TSC if there has been insufficent activity in the project over the course of 6 months.
13:24:35	 From John Mertic : https://github.com/openmainframeproject-internship/resources
13:38:19	 From Mike MacIsaac : zoom and zuess are ADP's internal "Private cloud on z" solution

1) New github project
   -) URL: https://github.com/mike99mac/zoom-zuess
   -) 1 file: README.md
   -) Need to get access to Internet to recursively upload files (>250)

2) Progress continues internally - "real-world driven design"
   -) Monitor data to a MySQL database
    o) VIR2REAL historic data
	o) Can view metrics by day/week/month/3-mon/6-mon/year/max using Charts.js
	o) Other z/VM and Linux metrics
    	# Columns in the zVMdata table in the monitorData database
        VMcols1="timestamp, systemID, numCPUs, numThreads, AVGPROC, PAGING, nonCMSmem, CMSmem, totMem,"
        VMcols2="VDISKmem, instMem, V2Rratio, VV2Rratio, nonCMSratio, instRatio"
        # Columns in the zVMdata table in the monitorData database
        linuxCols1="timestamp, hostName, numCPUs, loadAvg1min, loadAvg5min, loadAvg15min, CPUus, CPUsy, CPUid, CPUwa, CPUst,"
        linuxCols2="MemTotal, MemUsed, MemFree, MemBuffer, MemCached, BufCacheUsed, BufCacheFree, SwapT
13:40:33	 From John Mertic : SVN to Github migration -> https://help.github.com/en/articles/source-code-migration-tools
---
title: "2019-11-07"
parent: Meetings
---
# Open Mainframe Project TAC Meeting - November 7, 2019

## Attendance

### Voting member Attendees:

* Bob Dahlberg, VCU ( Mentorship )
* Phil Tully, ADP
* JP Linardon, Rocket Software

### Voting members not in attendance:

* Mark Post, SUSE
* Enyu Wang, IBM
* Matt Hogstrom, IBM ( Zowe )
* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies

Quorum NOT achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Mark Ackert

## Agenda

* New name ( TSC -> TAC )
* Project Updates
  * Incubating
    * Ambitus
    * Atom plugins
    * Feilong
    * TerseDecompress
    * Zorow
  * Active
    * ADE
    * Mentorship
    * Zowe
* Renewal of Incubation projects and criteria for considering Emertus status
* Project Proposal - K8s on LinuxOne ( https://github.com/openmainframeproject/tsc/blob/master/projects/proposals/K8s%20on%20LinuxOne.md )

## Action Items

None

## Notes

Bob D shared that he is working on restructuing the mentorship program stipends to be oriented around milestone completions vs dates, which should allow mentees and mentors to more focus on project design. He also shared that he is working to get project ideas from members and hosted projects, with the idea of going live with the program before US Thanksgiving.

JP Linardon and Mark Ackert shared that Zowe is planning a 1.7 release in the next week, and that Matt Hogstrom is stepping down as a ZLC member and chairperson.

There were no other updates on projects.

## Chat logs
---
title: "2019-12-12"
parent: Meetings
---
# Open Mainframe Project TAC Meeting - December 12, 2019

## Meeting Information

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac#meetings

### Conference call details

Join from PC, Mac, Linux, iOS or Android: https://zoom.us/j/290221938

Or iPhone one-tap :

US: +16465588656,,290221938#  or +16699006833,,290221938#

Or Telephone:

Dial(for higher quality, dial a number based on your current location):

    US: +1 646 558 8656  or +1 669 900 6833  or +1 855 880 1246 (Toll Free) or +1 877 369 0926 (Toll Free)

Meeting ID: 290 221 938

International numbers available: https://zoom.us/zoomconference?m=4ywiZErrEEDIHL6VXNjfZ-PXcfjeWMjs

### Meeting recordings

* [Video](20191212-video.mp4)
* [Audio](20191212-audio.m4a)
* [Transcript](20191212-transcript.vtt)
* [Chat Log](20191212-chatlog.txt)

## Attendance

### Voting member Attendees:

* Bob Dahlberg, VCU ( Mentorship )
* JP Linardon, Rocket Software

### Voting members not in attendance:

* Phil Tully, ADP
* Mark Post, SUSE
* Enyu Wang, IBM
* Matt Hogstrom, IBM ( Zowe )
* James Caffrey, IBM ( ADE )
* Gregory MacKinnon, CA Technologies

Quorum NOT achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Peter Fandel
* Mike MacIsaac
* Dan Horak
* Joe Bostian
* Joe Devlin
* Ingo Adlung
* Hiren Shah

## Agenda

* Project Updates
  * Incubating
    * Ambitus
    * Atom plugins
    * Feilong
    * Polycephaly
    * TerseDecompress
    * Zorow
  * Active
    * ADE
    * Mentorship
    * Zowe
* Renewal of Incubation projects and criteria for considering Emertus status
* Project Proposal - K8s on LinuxOne ( https://github.com/openmainframeproject/tsc/blob/master/projects/proposals/K8s%20on%20LinuxOne.md )

## Action Items

- John M to reach out to TSC leads of incubation projects ready for renewal, and ADE TSC chairperson.

## Notes

Peter F shared there were some business discussions happening at Rocket and IBM, and after that there will be numerous contributions from Rocket coming. Joe B shared that some templates are being added as well. There was some additional discussion on the project process.

Hiren said Zorow had it's first TSC meeting and is looking for more people to join the community. Hiren said there are numerous workflows contributed by the GTS team.

Bob D said that he has 10 projects for mentees to work on for the upcoming mentorship program this summer. Bob indicated that he would work to move the projects to GitHub and then we can announce the program.

JP said that Zowe 1.8 is planned for end of year, with work on the installer and virtual desktop.

There was a discussion on having a review of incubation projects for renewal - all agreed to do this at the next TAC meeting. There was also an ask to review ADE as it there hasn't been much activity on that project for some time. John M said he would reach out to the relevant TSC leads and ensure they are engaged.

## Chat logs
