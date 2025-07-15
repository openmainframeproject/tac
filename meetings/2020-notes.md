---
title: "2020-01-09"
parent: Meetings
---
# Open Mainframe Project TAC Meeting - January 9, 2020

## Meeting Information

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac#meetings

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

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

* [Video](20200109-video.mp4)
* [Audio](20200109-audio.m4a)
* [Transcript](20200109-transcript.vtt)
* [Chat Log](20200109-chatlog.txt)

## Attendance

### Voting member rollcall:

- [X] Phil Tully, ADP
- [X] Gregory MacKinnon, Broadcom
- [X] Enyu Wang, IBM
- [X] Peter Fandel, Rocket Software
- [X] Mark Post, SUSE
- [ ] _vacant_ ( Zowe )
- [X] James Caffrey, IBM ( ADE )
- [ ] Bob Dahlberg, VCU ( Mentorship )

Quorum achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Mike MacIsaac
* Vincent Terrone
* Rick Troth
* JP Linardon
* Joe Devlin
* Sean Grady
* Jinjun Xiong
* Dan Horak
* Joe Bostian
* Ingo Adlung
* Len Santalucia

## Agenda

* Project Updates
  * Incubating
    * Ambitus
    * Atom plugins
      * Discuss renewal of incubation status
    * Feilong
      * Discuss renewal of incubation status
    * Polycephaly
    * TerseDecompress
      * Discuss renewal of incubation status
    * Zorow
  * Active
    * ADE
      * Discuss project activity
    * Mentorship
    * Zowe
* Licensing
* Travis CI support of Z

## Action Items

* Ingo A to follow up with John Arwe on Atom Plugins and Klaus around TerseDecompress
* John M to follow up with zigi project for future TAC meetings
* Enyu and John M to engage TravisCI to participate in OMP community

## Notes

Peter F said that Ambitus is reviewing Anaconda for deploying Ambitus ported projects to end users. Joe B said the project is also focusing on driving content on open source projects on z/OS. Peter F shared that Rocket is resolving the primary staffing needs for GCC.

Ingo said he would follow up with John Arwe on the state of the Atoms plugins.

The Feilong project was brought to a vote to approve renewing it's incubation status for 12 more months. Phil T made the motion to approve, Peter F seconded, and all TAC members in attendance unianimosuly approved.

Ingo said he would chat with Klaus around TerseDecompress.

James Caffery said ADE is getting some viewing traffic, not too much contributions. There is a mentee interested in working this summer to add support for nginx and spark logs. James is hoping to see more parsers and anayltics as time grows.

Mentorship program was launched for 2020. There was a question around what mentors should do with mentees contacting them directly; John M said they should work with mentees to understand the project and help them if they wish to submit. John M said he would give mentors view access to the list of applicants.

JP Linardon reported that Zowe 1.8 is coming soon, and the onboarding squad is reviewing the Zowe Conformance Program for 2020.

Rick Troth asked about licensing VMLINK. The group generally stayed away from providing licensing advice, indicating any OSI compliant license is sufficent. John M pointed Rick to the Open Mainframe Project contribution guidelines for ideas as well.

Enyu announced that TravisCI now supports s390x for Linux. There was further discussion on getting them more involved in the OMP community.

Peter F shared the zigi project ( https://zigi.rocks/ ), which many in the group liked. John M said he would follow up with the project leads to see if they want to present at a future meeting.
---
title: "2020-02-13"
parent: Meetings
---
# Open Mainframe Project TAC Meeting - February 13, 2020

## Meeting Information

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac#meetings

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

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

* [Video](20200213-video.mp4)
* [Audio](20200213-audio.m4a)
* [Transcript](20200213-transcript.vtt)
* [Chat Log](20200213-chatlog.txt)

## Attendance

### Voting member rollcall:

- [X] Phil Tully, ADP
- [X] Gregory MacKinnon, Broadcom
- [ ] Enyu Wang, IBM
- [X] Peter Fandel, Rocket Software
- [X] Mark Post, SUSE
- [ ] _vacant_ ( Zowe )
- [ ] James Caffrey, IBM ( ADE )
- [X] Bob Dahlberg, VCU ( Mentorship )

Quorum achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Mike MacIssac
* Dan Horak
* Len Santalucia
* Joe Devlin
* Mark Ackert
* Neale Ferguson
* Vincent Terrone
* Mike Friesenegger
* Rick Troth
* James Vincent

## Agenda

* Project Updates
  * Incubating
    * Ambitus
    * Atom plugins
      * Discuss renewal of incubation status
    * Feilong
    * Polycephaly
    * TerseDecompress
      * Discuss renewal of incubation status
    * Zorow
  * Active
    * ADE
    * Mentorship
    * Zowe
* Projects potentially to be proposed
  * Academic/learning materials
  * Hyperledger Fabric for s390x
  * Open Source project discovery for s390x

## Action Items

- Ingo to follow up on status of Atom plugins and TerseDecompress

## Notes

Joe Devlin shared that Ambitus is moving slowly, and there is discussion on potential port that might be included that are being maintained by other organizations. There was some discussion on the differences in supporting ports on s390x versus other architecture projects.

Phil Tully suggested postponing discussion on renewal of incubation status of Atom plugins and TerseDecompress until Ingo reports back.

James Vincent shared an update on the CI/CD infrastructure status, with the aim of converting the existing Zowe CI/CD to be a common OMP CI/CD. Phil shared that there is a call next week to discuss this. Mike Friesenegger shared that he is working to get more contributors to the project outside of IBM to drive more requirements.

Bob Dahlberg shared that we are slightly behind last year's applicants, but there were some form issues that likely were blocking things. Bob shared that he has a flyer for schools to use, with the aim of helping drive a larger diversity of mentees to apply. Bob shared that mentees shouldn't need to contact the mentors prior to applying, and that any mentees should be directed to apply and then the scope will be determined after the selection period. Bob said if there are questions or additional things to clarify the project, it should be added to the project description itself.

Peter Fandel said Zowe 1.8 was released last week, and 1.9 is targeted towards for end of February. John Mertic shared that the ZLC is in the process of being re-elected, and that the Zowe project is updating it's logo.

John M shared updates on potential projects that he's heard of being discussed as potential proposed projects, indicating that he would be happy to include anyone in the discussions if there is interest.
---
title: "2020-03-12"
parent: Meetings
---
# Open Mainframe Project TAC Meeting - March 12, 2020

## Meeting Information

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac#meetings

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

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

* [Video](20200312-video.mp4)
* [Audio](20200312-audio.m4a)
* [Transcript](20200312-transcript.vtt)
* [Chat Log](20200312-chatlog.txt)

## Attendance

### Voting member rollcall:

- [ ] Phil Tully, ADP
- [ ] Gregory MacKinnon, Broadcom
- [X] Enyu Wang, IBM
- [ ] Peter Fandel, Rocket Software
- [ ] Mark Post, SUSE
- [ ] _vacant_ ( Zowe )
- [ ] James Caffrey, IBM ( ADE )
- [ ] Bob Dahlberg, VCU ( Mentorship )

Quorum NOT achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Len Santalucia
* Dan Horak
* Joe Bostian
* Joe Devlin
* Ingo Adlung
* Rick Troth
* Mike Friesenegger
* David Edelsohn
* Hiren Shah
* Vincent Terrone

## Agenda

* Project Updates
  * Incubating
    * Ambitus
    * Atom plugins
      * Discuss renewal of incubation status
    * Feilong
    * Polycephaly
    * TerseDecompress
      * Discuss renewal of incubation status
    * Zorow
  * Active
    * ADE
    * Mentorship
    * Zowe
* Projects potentially to be proposed
  * Academic/learning materials
  * Hyperledger Fabric for s390x
  * Open Source project discovery for s390x

## Action Items

- Ingo to follow up with the project leads for Atom plugins and TerseDecompress for updates.
- John Mertic to connect Joe Devlin and David Edelsohn to the 'Open Source project discovery for s390x' project planning effort.

## Notes

Joe Devlin suggested that the Ambitus project has conflicts with other IBM initiatives. There was significant discussions on the concerns, and the suggestion was to escalate this to the Open Mainframe Project Governing Board representative for IBM to get clarity on two points.

- Does Ambitus's current scope conflict with internal IBM existing and emerging efforts?
- Lack of Z infrastructure holding back existing and potential OMP projects?

Ingo Adlung said he has be unable to contact the project leads for Atom plugins and TerseDecompress for updates, but will do so before the next TAC meeting.

Mike F shared updates on the progress of the CI/CD infrastructure, along with efforts on getting online Z infrastructure and testing. Mike F also shared that there is a code contribution review planned for the next Feilong TSC meeting, scheduled for Thursday, March 19th, 2020 at 8:30am US Eastern Time.

John M shared the following update from Jerry Edgington:

"We have been working Infinity, Inc, to get a z/OS build environment setup for the Polycephaly project.  But, I don’t have any updates about VCU, at all.  Next meeting, will be March 16, 2020, and the agenda has created on Github.

https://github.com/openmainframeproject/polycephaly/blob/master/meetings/20200316.md"

Hiren S shared that Zorow is also having every other week TSC meetings, but attendance has been poor. Hiren S asked for help in driving interest, and there was some discussion on tactics. Len Santalucia offered to host Zorow on an upcoming webinar.

John Mertic shared the updates on the Mentorship and Zowe projects.

David Edelsohn shared concerns on the 'Open Source project discovery for s390x', and discussion ensued on that topic. John Mertic offered to connect any interested parties to that project's planning efforts.
---
title: "2020-04-09"
parent: Meetings
---
# Open Mainframe Project TAC Meeting - April 9, 2020

## Meeting Information

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac#meetings

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

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

* [Video](20200409-video.mp4)
* [Audio](20200409-audio.m4a)
* [Transcript](20200409-transcript.vtt)
* [Chat Log](20200409-chatlog.txt)

## Attendance

### Voting member rollcall:

- [X] Phil Tully, ADP
- [X] Gregory MacKinnon, Broadcom
- [X] Enyu Wang, IBM
- [X] Peter Fandel, Rocket Software
- [X] Mark Post, SUSE
- [X] James Caffrey, IBM ( ADE )
- [X] Bob Dahlberg, VCU ( Mentorship )
- [ ] _vacant_ ( Zowe )

Quorum Achieved.

### Other Attendees

* John Mertic, Linux Foundation
* Mike Friesenegger
* Meredith Stowell
* Makenzie Manna
* Elizabeth Joseph
* Sean Grady
* Joe Bostian
* Joe Devlin
* Sudharsana Srinivasan
* Martin Keen
* Alex Kim
* Len Santalucia

## Agenda

* Project Updates ( 20 minutes - 2 minutes per project )
  * Incubating
    * Ambitus
    * Atom plugins
      * Discuss renewal of incubation status
    * Feilong
    * Polycephaly
    * TerseDecompress
      * Discuss renewal of incubation status
    * Zorow
  * Active
    * ADE
    * Mentorship
    * Zowe
* [Zoom meeting guidelines](https://github.com/openmainframeproject/tac/pull/92) ( 5 minutes )
* [COBOL Course Project Proposal](20200409-TAC%20Proposal%20-%20COBOL%20Course.pdf) ( 15 minutes )
* [IBM Z Open Source Software Search project proposal](https://github.com/openmainframeproject/tac/pull/94) ( 15 minutes )
* Projects potentially to be proposed ( 5 minutes )
  * Academic/learning materials
  * Hyperledger Fabric for s390x

## Action Items

- Follow up on Atom plugins and TerseDecompress project status via email
- Approve Zoom Meeting guidelines via email

## Notes

There was a motion to recommend to the Governing Board to remove the travel stipend for the 2020 Mentorship Program from Bob D, seconded by Phil T. It was unanimously approved by all voting members of the TAC.

There was a motion to accept COBOL Course Project as an incubation project into Open Mainframe Project from Phil T, seconded by Bob D. It was unanimously approved by all voting members of the TAC.

There was a motion to accept IBM Z Open Source Software Search Project as an incubation project into Open Mainframe Project from Phil T, seconded by Enyu W. It was unanimously approved by all voting members of the TAC.
---
title: "2020-05-14"
parent: Meetings
---
# Open Mainframe Project TAC Meeting - May 14, 2020

## Date/Time

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22

| Timezone | Date/Time |
|----------|-----------|
| America/Los_Angeles | Thu 14-May-2020 10:00 (10:00 AM) |
| America/Denver | Thu 14-May-2020 11:00 (11:00 AM) |
| America/Chicago | Thu 14-May-2020 12:00 (12:00 PM) |
| America/New_York | Thu 14-May-2020 13:00 (01:00 PM) |
| Europe/London | Thu 14-May-2020 18:00 (06:00 PM) |
| Europe/Amsterdam | Thu 14-May-2020 19:00 (07:00 PM) |
| Asia/Shanghai | Fri 15-May-2020 01:00 (01:00 AM) |
| Asia/Tokyo | Fri 15-May-2020 02:00 (02:00 AM) |

Or in your local time:
* https://www.timeanddate.com/worldclock/?iso=2020-05-14T17:00:00

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

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

* [Video](20200514-video.mp4)
* [Audio](20200514-audio.m4a)
* [Transcript](20200514-transcript.vtt)
* [Chat Log](20200514-chatlog.txt)

## Attendance

### Voting member rollcall:

- [ ] Phil Tully, ADP
- [X] Gregory MacKinnon, Broadcom
- [X] Enyu Wang, IBM
- [X] Peter Fandel, Rocket Software
- [X] Mark Post, SUSE
- [ ] James Caffrey, IBM ( ADE )
- [X] Bob Dahlberg, VCU ( Mentorship )
- [ ] _vacant_ ( Zowe )

Quorum Achieved.

### Other Attendees

- John Mertic
- Guilherme Cartier
- Yvette LaMar
- Deborah Carbo
- Dan Horak
- Mike Friesenegger
- Joe Bostian
- Cliff Sokol
- Vincent Terrone
- Joe Devlin
- Len Santalucia
- Sean Grady
- Sujay Solomon
- Hiren Shah
- Viviane Sanches
- Matt Hogstrom
- Rick Troth
- Elizabeth Joseph
- Ingo Adlung
- Meredith Stowell

## Agenda

Extracted from **meeting-agenda** labelled issues and pull requests from **openmainframeproject/tac** prior to the meeting.

* Project updates ( list at https://github.com/openmainframeproject/tac#tac-projects )
* New Project Proposal - Open Mainframe Education (name TBD) [#109](https://github.com/openmainframeproject/tac/issues/109)
* Discuss concept of establishing SIG/Working Group programs [#107](https://github.com/openmainframeproject/tac/issues/107)
* Atom plugins is up for graduation [#104](https://github.com/openmainframeproject/tac/issues/104)
* TerseDecompress incubation renewal [#103](https://github.com/openmainframeproject/tac/issues/103)
* Zorow incubation renewal [#102](https://github.com/openmainframeproject/tac/issues/102)
* Enabling GitHub Actions for OMP Hosted projects [#99](https://github.com/openmainframeproject/tac/issues/99)

## Action Items

- Interested parties engage in next Zorow TSC meeting 5/21 at 2pm ET
- John Arwe to seek new maintainer for Atom plugins project

## Notes

Project updates:

Ambitus - TSC has been meeting, and are looking at adding some additional code samples, looking at new projects in include going forward.

Atom - have maintainer ask the omp-techincal list to see if someone is interested in taking over, otherwise have him recommend for Emeritus.

Feilong - CI/CD Infrastructure in progress working with LF RE team and Vicom Infinity, next steps is to get the connections to GitHub Actions. Also 2nd level VMs are being provisioned for community development ( using Zowe )

Zorow - Working to establish more participation, getting traction has been a challenge. Sean G asked if there was any plans to make the workflows more indexable. Lots of discussion on possible adding new code and depth to the project, discussion moving to next Zorow TSC meeting.

Zowe - PI planning concept moving forward, continued work on alignment on the techincal front. New squad added 'Zowe Explorer' to focus on IDE integrations ( starting with VS Code )

Mentorship - 11 projects, 1 submitted project plan. Putting together operational pieces in GitHub and Community Bridge.

Discussion on possible COBOL working group; proposal being prepared by Cameron Seay that could bring together some of the efforts in the space.

Yvette M and Deborah G presented on the Open Mainframe Education proposal. Motion to include from Bob D, second from Enyu W, approved unanimously.
---
parent: Meetings
title: "2020-06-11"
---

# Open Mainframe Project TAC Meeting - June 11, 2020

## Date/Time

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22

| Timezone | Date/Time |
|----------|-----------|
| America/Los_Angeles | Thu 11-Jun-2020 10:00 (10:00 AM) |
| America/Denver | Thu 11-Jun-2020 11:00 (11:00 AM) |
| America/Chicago | Thu 11-Jun-2020 12:00 (12:00 PM) |
| America/New_York | Thu 11-Jun-2020 13:00 (01:00 PM) |
| Europe/London | Thu 11-Jun-2020 18:00 (06:00 PM) |
| Europe/Amsterdam | Thu 11-Jun-2020 19:00 (07:00 PM) |
| Asia/Shanghai | Fri 12-Jun-2020 01:00 (01:00 AM) |
| Asia/Tokyo | Fri 12-Jun-2020 02:00 (02:00 AM) |

Or in your local time:
* https://www.timeanddate.com/worldclock/?iso=2020-06-11T17:00:00

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

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

https://drive.google.com/drive/folders/1HBjiO_7JqXKzskH51Zwyf0W9eOZMxPze?usp=sharing

## Attendance

### Voting member rollcall:

- [ ] Phil Tully, ADP
- [x] Gregory MacKinnon, Broadcom
- [ ] Enyu Wang, IBM
- [x] Peter Fandel, Rocket Software
- [x] Mark Post, SUSE
- [ ] James Caffrey, IBM ( ADE )
- [x] Bob Dahlberg, VCU ( Mentorship )
- [ ] _vacant_ ( Zowe )

Quorum Achieved.

### Other Attendees

- John Mertic 
- Len Santalucia
- Mike Friesenegger 
- Vincent Terrone 
- Sujay Solomon
- Joe Bostian 
- Cameron Seay
- Elizabeth Joseph
- David Edelsohn 
- Yongkook Kim 
- Rick Troth 
- Dan Horák

## Agenda

Extracted from **meeting-agenda** labelled issues and pull requests from **openmainframeproject/tac** prior to the meeting.

* Project updates ( list at https://github.com/openmainframeproject/tac#tac-projects )
* Discuss concept of establishing SIG/Working Group programs [#107](https://github.com/openmainframeproject/tac/issues/107)
* Atom plugins is up for graduation [#104](https://github.com/openmainframeproject/tac/issues/104)
* TerseDecompress incubation renewal [#103](https://github.com/openmainframeproject/tac/issues/103)
* Zorow incubation renewal [#102](https://github.com/openmainframeproject/tac/issues/102)
* Enabling GitHub Actions for OMP Hosted projects [#99](https://github.com/openmainframeproject/tac/issues/99)

## Action Items


## Notes





---
parent: Meetings
title: "2020-07-09"
---

# Open Mainframe Project TAC Meeting - July 9, 2020

## Date/Time

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22

| Timezone | Date/Time |
|----------|-----------|
| America/Los_Angeles | Thu 09-Jul-2020 10:00 (10:00 AM) |
| America/Denver | Thu 09-Jul-2020 11:00 (11:00 AM) |
| America/Chicago | Thu 09-Jul-2020 12:00 (12:00 PM) |
| America/New_York | Thu 09-Jul-2020 13:00 (01:00 PM) |
| Europe/London | Thu 09-Jul-2020 18:00 (06:00 PM) |
| Europe/Amsterdam | Thu 09-Jul-2020 19:00 (07:00 PM) |
| Asia/Shanghai | Fri 10-Jul-2020 01:00 (01:00 AM) |
| Asia/Tokyo | Fri 10-Jul-2020 02:00 (02:00 AM) |

Or in your local time:
* https://www.timeanddate.com/worldclock/?iso=2020-07-09T17:00:00

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

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

https://drive.google.com/drive/folders/1g2OovAWOF7cDZFVXBMOzrgU5xriHNpkQ?usp=sharing

## Attendance

### Voting member rollcall:

- [x] Phil Tully, ADP
- [ ] Gregory MacKinnon, Broadcom
- [x] Enyu Wang, IBM
- [x] Peter Fandel, Rocket Software
- [x] Mark Post, SUSE
- [ ] James Caffrey, IBM ( ADE )
- [x] Bob Dahlberg, VCU ( Mentorship )
- [ ] _vacant_ ( Zowe )

Quorum Achieved.

### Other Attendees


## Agenda

Extracted from **meeting-agenda** labelled issues and pull requests from **openmainframeproject/tac** prior to the meeting.

* Project updates ( list at https://github.com/openmainframeproject/tac#tac-projects )
* New Project Proposal - GenevaERS [#118](https://github.com/openmainframeproject/tac/issues/118)
* Discuss concept of establishing SIG/Working Group programs [#107](https://github.com/openmainframeproject/tac/issues/107)

## Action Items


## Notes

GenevaERS approved as a new project
TAC approved working group proposal

---
title: "2020-08-13"
parent: Meetings
---
# Open Mainframe Project TAC Meeting - August 6, 2020

## Date/Time

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22

| Timezone | Date/Time |
|----------|-----------|
| America/Los_Angeles | Thu 06-Aug-2020 10:00 (10:00 AM) |
| America/Denver | Thu 06-Aug-2020 11:00 (11:00 AM) |
| America/Chicago | Thu 06-Aug-2020 12:00 (12:00 PM) |
| America/New_York | Thu 06-Aug-2020 13:00 (01:00 PM) |
| Europe/London | Thu 06-Aug-2020 18:00 (06:00 PM) |
| Europe/Amsterdam | Thu 06-Aug-2020 19:00 (07:00 PM) |
| Asia/Shanghai | Fri 07-Aug-2020 01:00 (01:00 AM) |
| Asia/Tokyo | Fri 07-Aug-2020 02:00 (02:00 AM) |

Or in your local time:
* https://www.timeanddate.com/worldclock/?iso=2020-08-06T17:00:00

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

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

* [Video](20200806-video.mp4)
* [Audio](20200806-audio.m4a)
* [Transcript](20200806-transcript.vtt)
* [Chat Log](20200806-chatlog.txt)

## Attendance

### Voting member rollcall:

- [x] Phil Tully, ADP
- [ ] Gregory MacKinnon, Broadcom
- [ ] Enyu Wang, IBM
- [x] Peter Fandel, Rocket Software
- [x] Mark Post, SUSE
- [ ] James Caffrey, IBM ( ADE )
- [x] Bob Dahlberg, VCU ( Mentorship )
- [ ] _vacant_ ( Zowe )

Quorum NOT Achieved.

### Other Attendees

- Randall Ness
- Len Santalucia
- Michael MacIsaac
- Vincent Terrone
- John Mertic
- Joe Bostian
- Yvette LaMar
- Jim Hladyshewsky
- Mike Friesenegger
- Walter Church
- Elizabeth Joseph
- Joe Devlin
- David Edelsohn
- Matt Hogstrom
- Alex Kim (Yongkook Kim)
- Kip Twitchell
- Guilherme Cartier
- Viviane Sanches
- Ingo Adlung

## Agenda

Extracted from **meeting-agenda** labelled issues and pull requests from **openmainframeproject/tac** prior to the meeting.

* Atom plugins is up for graduation [#104](https://github.com/openmainframeproject/tac/issues/104)
* TerseDecompress incubation renewal [#103](https://github.com/openmainframeproject/tac/issues/103)
* Enabling GitHub Actions for OMP Hosted projects [#99](https://github.com/openmainframeproject/tac/issues/99)
* Project updates ( list at https://github.com/openmainframeproject/tac#tac-projects )

## Action Items

- Vote for Atom Plugin Incubation renewal via email list
- Vote for TerseDecompress move to Emeritus via email list

## Notes ( thank you Mike MacIssac )

OMP Notes   8/13/20
 
Atom plugins is up for graduation #104
  Walter Church - will take over for the Atom editor
    Wrote the original project work that John Arwe used
    Betting back up to speed
  John M: Don't have enough of a quorum to vote
    Will a vote by e-mail be acceptable
  Bob Dahlburg seconds - unanimous
 
TerseDecompress incubation renewal #103
  Ingo A: could not get a response through email
  An issue was posted can it output the dataset type of the original
  Move it to 'Emeritus?'
  Phil T: it has to if there are no leaders
 
Enabling GitHub Actions for OMP Hosted projects #99
  Mike F: Don Mock has been doing some github security
          A call will be set up soon
  John M: Yes, we had a call - github can store secrets, but there are issues
  Vince T: github actions are not using the correct plumbing
  enyuwang added a comment: cross compile support has been ported to zLinux @NealeF
  Mike F: Polycephaly is using github actions and they seem to be having success
  Vince T: Could not yet confirm this - will be doing so
  Len S: We want to get people using the code in OMP projects
 
Project updates ( list at https://github.com/openmainframeproject/tac#tac-projects )
 
1) ADE
 
2) Mentorship
   Bob D: 1.5 months to go
     Final presentations coming up
     Hard to get remote students paid - delays due to COVID
     Western U in Canada is looking for a project - may run one or two semesters - have students ready
     Bob will see if he can be prepared for the Open Mainframe summit
     Ingo: will reach out to his team
 
Matt H: Project on getting RMF data and converting to XML - any progress on the code?
Alex K: Yes, it is being worked on, code is being reviewed
Matt:   An update would be great
Alex:   Will follow up with Alex
 
3) Zowe
   Peter F: Zowe keeps getting stronger and is moving along well
 
Incubation projects
1) Ambitus
   Joe B: continuing to build content, two new docker file recipes, others cleaned up, z/OS native progress
 
2) COBOL course
 
3) Education projects
   G Cartier: working on a go-to-market strategy with IBM and Broadcom.
     Monthly public meetings will be held - See: https://ibm.webex.com/meet/gcartier
 
4) Feilong
   Mike F: current goal CI/CD, Vicom Infinity hardware
           future goal: graduating to
           OMP summit - presentation will be ready in a week or two
   John M: Yes, get content ready for the OMP summit  $50 registration
           See: https://events.linuxfoundation.org/open-mainframe-summit/
           Will use a (better?) platform called ?ePlace?
   Governing board meets quarterly
   Len S: Progress is very good. Volunteers are doing an excellent job.
          Good feedback all around
          Could improve enrollment, but $50 for attendees and $15 for students is fair
          One or two more sponsors would help
   John
 
5) Geneva ERS
   K Twitchell - first release last week
    prototype soon
    have two contributors - non-IBM
    beefing up documentation
    Need a shared development environment outside of firewall
   John M: had 30 people on the most recent call
 
6) Software  Discovery tool
   E Joseph: slow start, but progress is being made, will schedule a meeting for next month
 
7) Zorow
 
Ended at 1:50 PM
---
title: "2020-09-10"
parent: Meetings
---
# Open Mainframe Project TAC Meeting - September 10, 2020

## Date/Time

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22

| Timezone | Date/Time |
|----------|-----------|
| America/Los_Angeles | Thu 10-Sep-2020 10:00 (10:00 AM) |
| America/Denver | Thu 10-Sep-2020 11:00 (11:00 AM) |
| America/Chicago | Thu 10-Sep-2020 12:00 (12:00 PM) |
| America/New_York | Thu 10-Sep-2020 13:00 (01:00 PM) |
| Europe/London | Thu 10-Sep-2020 18:00 (06:00 PM) |
| Europe/Amsterdam | Thu 10-Sep-2020 19:00 (07:00 PM) |
| Asia/Shanghai | Fri 11-Sep-2020 01:00 (01:00 AM) |
| Asia/Tokyo | Fri 11-Sep-2020 02:00 (02:00 AM) |

Or in your local time:
* https://www.timeanddate.com/worldclock/?iso=2020-09-10T17:00:00

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

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

https://drive.google.com/drive/folders/1hnHUdt2otVJwWO8YQVgq0v6bxh-ojE7_?usp=sharing

## Attendance

### Voting member rollcall:

- [ ] Phil Tully, ADP
- [ ] Gregory MacKinnon, Broadcom
- [x] Enyu Wang, IBM
- [x] Peter Fandel, Rocket Software
- [x] Mark Post, SUSE
- [x] James Caffrey, IBM ( ADE )
- [x] Bob Dahlberg, VCU ( Mentorship )
- [ ] _vacant_ ( Zowe )

Quorum Achieved.

### Other Attendees

- Michael MacIsaac
- Sam Golob
- Randall Ness
- Lionel B Dyck
- Len Santalucia
- David Edelsohn
- John Mertic
- Vincent Terrone
- Joe Bostian
- Mike Friesenegger
- Kip Twitchell 
- Jim Hladyshewsky
- Joe Devlin
- Lauren Valenti
- Yvette LaMar
- Dan Horák
- Ingo Adlung
- Guilherme Cartier

## Agenda

Extracted from **meeting-agenda** labelled issues and pull requests from **openmainframeproject/tac** prior to the meeting.

* New Project Proposal - CBT TAPE [#124](https://github.com/openmainframeproject/tac/issues/124)
* Enabling GitHub Actions for OMP Hosted projects [#99](https://github.com/openmainframeproject/tac/issues/99)
* TerseDecompress incubation renewal [#103](https://github.com/openmainframeproject/tac/issues/103)
* Project updates ( list at https://github.com/openmainframeproject/tac#tac-projects )

## Action Items


## Notes

Sam Golab presented on CBT Tape. All attendess were excited to see this project come to the Open Mainframe Project, many sharing stores of them using this code in thier careers.

Motion to accept by Bob Dahlberg, second by Peter Fandel. Approved unanimously.

No new updates on #99.

Ingo shared update on engaging Andrew Rowley on TerseDecompress, plan to connect him to IBM internal resources.

Joe asked to move the Ambitus incubation renewal to next month

Peter F shared updates on Zowe.
---
title: "2020-10-08"
parent: Meetings
---
# Open Mainframe Project TAC Meeting - October 8, 2020

## Date/Time

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22

| Timezone | Date/Time |
|----------|-----------|
| America/Los_Angeles | Thu 08-Oct-2020 10:00 (10:00 AM) |
| America/Denver | Thu 08-Oct-2020 11:00 (11:00 AM) |
| America/Chicago | Thu 08-Oct-2020 12:00 (12:00 PM) |
| America/New_York | Thu 08-Oct-2020 13:00 (01:00 PM) |
| Europe/London | Thu 08-Oct-2020 18:00 (06:00 PM) |
| Europe/Amsterdam | Thu 08-Oct-2020 19:00 (07:00 PM) |
| Asia/Shanghai | Fri 09-Oct-2020 01:00 (01:00 AM) |
| Asia/Tokyo | Fri 09-Oct-2020 02:00 (02:00 AM) |

Or in your local time:
* https://www.timeanddate.com/worldclock/?iso=2020-10-08T17:00:00

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

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

* [Video](20201008-video.mp4)
* [Audio](20201008-audio.m4a)
* [Transcript](20201008-transcript.vtt)
* [Chat Log](20201008-chatlog.txt)

## Attendance

### Voting member rollcall:

- [ ] Phil Tully, ADP
- [x] Gregory MacKinnon, Broadcom
- [ ] Enyu Wang, IBM
- [ ] Peter Fandel, Rocket Software
- [x] Mark Post, SUSE
- [ ] James Caffrey, IBM ( ADE )
- [x] Bob Dahlberg, VCU ( Mentorship )
- [ ] _vacant_ ( Zowe )

Quorum NOT Achieved.

### Other Attendees

- Alexey Machikhin
- Ingo Adlung
- Len Santalucia
- Yvette LaMar

## Agenda

Extracted from **meeting-agenda** labelled issues and pull requests from **openmainframeproject/tac** prior to the meeting.

* Project updates ( list at https://github.com/openmainframeproject/tac#tac-projects )
* Add TOC and best practice section [#133](https://github.com/openmainframeproject/tac/pull/133)
* New Project Proposal - Tessia [#132](https://github.com/openmainframeproject/tac/issues/132)
* Polycephaly incubation renewal. [#131](https://github.com/openmainframeproject/tac/issues/131)
* Ambitus incubation renewal [#130](https://github.com/openmainframeproject/tac/issues/130)
* Create Project Benefits by Stage matrix [#129](https://github.com/openmainframeproject/tac/pull/129)
* TerseDecompress incubation renewal [#103](https://github.com/openmainframeproject/tac/issues/103)
* Enabling GitHub Actions for OMP Hosted projects [#99](https://github.com/openmainframeproject/tac/issues/99)

## Action Items

- Vote for Tessia approval on the mailing list.
- Vote for Polycephaly incubation renewal
- Vote for Ambitus incubation renewal

## Notes

Alexey presented a project proposal for Tessia. Mark Post asked why was this project was created versus leveraging existing tools. Ingo shared that Red Hat doesn't have this functionality, though Mark said SUSE did. Holger shared that in 2015 there wasn't anything solving these needs at the time which lead to the project being created.

TAC recommended that Tessia collaborate with Feilong, and since there was no quorum the TAC chose to take the vote to the email list.

Jerry indicated that progress is being made on infrastructure with Polycephaly, which has held up pursuit of graduation.  TAC agreed to take to an email vote.

Joe B asked for an extension of Incubation status. Work is progressing, but has taken a bit longer than expected to get to graduation. TAC agreed to take to an email vote.

Ingo provided updates on TerseDecompress incubation renewal, sharing that he been working to get internal IBM developers engaged with the maintainer. There are calls scheduled next week to help enable the maintainer.

John M shared Project Benefits by Stage document and GitHub best practices.

Software Discovery Tool is working on porting the code from Python 2 to Python 3, and a kickoff TSC meeting is scheduled for next week.

Mainframe Open Education focusing on new hires, and looking at strategies for hosting reference materials.

Bob D shared 7 mentees have completed the mentorship, still waiting on 1 mentee and 1 mentee needs more time. 2 mentees dropped.
 
---
title: "2020-11-12"
parent: Meetings
---
# Open Mainframe Project TAC Meeting - November 12, 2020

## Date/Time

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22

| Timezone | Date/Time |
|----------|-----------|
| America/Los_Angeles | Thu 12-Nov-2020 09:00 (09:00 AM) |
| America/Denver | Thu 12-Nov-2020 10:00 (10:00 AM) |
| America/Chicago | Thu 12-Nov-2020 11:00 (11:00 AM) |
| America/New_York | Thu 12-Nov-2020 12:00 (12:00 PM) |
| Europe/London | Thu 12-Nov-2020 17:00 (05:00 PM) |
| Europe/Amsterdam | Thu 12-Nov-2020 18:00 (06:00 PM) |
| Asia/Shanghai | Fri 13-Nov-2020 01:00 (01:00 AM) |
| Asia/Tokyo | Fri 13-Nov-2020 02:00 (02:00 AM) |

Or in your local time:
* https://www.timeanddate.com/worldclock/?iso=2020-11-12T17:00:00

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

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

https://drive.google.com/drive/folders/13tFBM50RIUGw6ZB-kyb0vcDEA1NMvBTB?usp=sharing

## Attendance

### Voting member rollcall:

- [X] Phil Tully, ADP
- [X] Gregory MacKinnon, Broadcom
- [ ] Enyu Wang, IBM
- [X] Peter Fandel, Rocket Software
- [X] Mark Post, SUSE
- [ ] James Caffrey, IBM ( ADE )
- [X] Bob Dahlberg, VCU ( Mentorship )
- [ ] _vacant_ ( Zowe )

Quorum Achieved.

### Other Attendees

- Joe Bostian, IBM
- Mike Friesenegger, SUSE
- Len Santalucia, Vicom Infinity
- Giancarlo Frix, Rocket Software
- Dan Horák, Red Hat
- David Edelsohn, IBM

## Agenda

Extracted from **meeting-agenda** labeled issues and pull requests from **openmainframeproject/tac** prior to the meeting.

* Debian s390x support [#140](https://github.com/openmainframeproject/tac/issues/140)
* Ambassador program proposal #142 
* TerseDecompress incubation renewal [#103](https://github.com/openmainframeproject/tac/issues/103)
* Enabling GitHub Actions for OMP Hosted projects [#99](https://github.com/openmainframeproject/tac/issues/99)
* Project updates ( list at https://github.com/openmainframeproject/tac#tac-projects )

## Action Items


## Notes

Thank you @jbostian!

*   Debian is having problems supporting the S390x architecture, and are suggesting dropping support without someone committing to help by November 27
    *   Hardware/platform resources through Marist should be available
    *   Finding an owner is the challenge
    *   Concern about how a lack of Debian support ripples through the larger OS ecosystem
    *   Will impact containerized workloads
    *   John to set up a call with Phlipp Kern, and loop in Len Sanatalucia, David Edelsohn, Ingo Adlung, Joe Bostian
*   Review the Project ambassador Program
    *   Ambassadors should come from each project, and be an integral part of the group
    *   Decided to move ahead, review a set of candidates next month
*   TerseDecompress - reviewed comments from Andrew about remaining involved (he is interested)
*   Github actions for hosted projects is up and running
    *   Polycephaly project is beginning to use for CI/CD
    *   Others are beginning to use
*   Project reviews
    *   Brief reviews from Ambitus, Feilong, GenevaERS, Software Discovery Tool, Polycephaly, Zorow, Mentorship, Zowe
---
title: "2020-12-10"
parent: Meetings
---


# **Open Mainframe Project TAC Meeting - December 10, 2020**


## **Date/Time**

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at [https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22](https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22)


<table>
  <tr>
   <td><strong>Timezone</strong>
   </td>
   <td><strong>Date/Time</strong>
   </td>
  </tr>
  <tr>
   <td>America/Los_Angeles
   </td>
   <td>Thu 10-Dec-2020 09:00 (09:00 AM)
   </td>
  </tr>
  <tr>
   <td>America/Denver
   </td>
   <td>Thu 10-Dec-2020 10:00 (10:00 AM)
   </td>
  </tr>
  <tr>
   <td>America/Chicago
   </td>
   <td>Thu 10-Dec-2020 11:00 (11:00 AM)
   </td>
  </tr>
  <tr>
   <td>America/New_York
   </td>
   <td>Thu 10-Dec-2020 12:00 (12:00 PM)
   </td>
  </tr>
  <tr>
   <td>Europe/London
   </td>
   <td>Thu 10-Dec-2020 17:00 (05:00 PM)
   </td>
  </tr>
  <tr>
   <td>Europe/Amsterdam
   </td>
   <td>Thu 10-Dec-2020 18:00 (06:00 PM)
   </td>
  </tr>
  <tr>
   <td>Asia/Shanghai
   </td>
   <td>Fri 11-Dec-2020 01:00 (01:00 AM)
   </td>
  </tr>
  <tr>
   <td>Asia/Tokyo
   </td>
   <td>Fri 11-Dec-2020 02:00 (02:00 AM)
   </td>
  </tr>
</table>


Or in your local time:



*   [https://www.timeanddate.com/worldclock/?iso=2020-12-10T17:00:00](https://www.timeanddate.com/worldclock/?iso=2020-12-10T17:00:00)

All meetings are listed on the Open Mainframe Project calendar at [https://lists.openmainframeproject.org/calendar](https://lists.openmainframeproject.org/calendar), subject to the mailing lists you are subscribed to.


### **Conference call details**

Join from PC, Mac, Linux, iOS or Android: [https://zoom.us/j/290221938](https://zoom.us/j/290221938)

Or iPhone one-tap :

US: +16465588656,,290221938# or +16699006833,,290221938#

Or Telephone:

Dial(for higher quality, dial a number based on your current location):


```
US: +1 646 558 8656  or +1 669 900 6833  or +1 855 880 1246 (Toll Free) or +1 877 369 0926 (Toll Free)
```


Meeting ID: 290 221 938

International numbers available: [https://zoom.us/zoomconference?m=4ywiZErrEEDIHL6VXNjfZ-PXcfjeWMjs](https://zoom.us/zoomconference?m=4ywiZErrEEDIHL6VXNjfZ-PXcfjeWMjs)


### **Meeting recordings**



*   [Video](https://drive.google.com/file/d/1klZbc3LuqcApOlZHRIeG4kARy05fNsen/view?usp=sharing)
*   [Audio](https://drive.google.com/file/d/1i4jaZqkAhGWR2rrKx2LAjZIz_7f5JY5A/view?usp=sharing)
*   [Transcript](https://drive.google.com/file/d/1WhuRBZvnpqjTyWEbC7CReg3wq8A_PyI9/view?usp=sharing)
*   [Chat Log](https://drive.google.com/file/d/1nAhzDecc_VrrINfTCnc88V1FNfpJz7MN/view?usp=sharing)


## **Attendance**


### **Voting member rollcall:**



- [x] Phil Tully, ADP
- [x] Gregory MacKinnon, Broadcom
- [ ] Enyu Wang, IBM
- [x] Peter Fandel, Rocket Software
- [x] Mark Post, SUSE
- [ ] James Caffrey, IBM ( ADE )
- [x] Bob Dahlberg, VCU ( Mentorship )
- [ ] _vacant_ ( Zowe )

Quorum Achieved.


### **Other Attendees**



*   John Mertic
*   Mike Friesenegger
*   Matt Hogstrom - Broadcom
*   Alexander Efremkin - IBM
*   George DeCandio - Broadcom
*   Dan Horák - Red Hat
*   Kip Twitchell - IBM, GenevaERS
*   Mike MacIsaac - ADP 
*   Hiren Shah - IBM
*   David Edelsohn - IBM
*   Ingo Adlung - IBM


## **Agenda**

Extracted from meeting-agenda labelled issues and pull requests from openmainframeproject/tac prior to the meeting.



*   Consider OMP Ambassador applications [#150](https://github.com/openmainframeproject/tac/issues/150)
*   Proposed OMP project: Public Cloud z/OS enablement [#148](https://github.com/openmainframeproject/tac/issues/148)
*   Debian s390x support [#140](https://github.com/openmainframeproject/tac/issues/140)
*   TerseDecompress incubation renewal [#103](https://github.com/openmainframeproject/tac/issues/103)
*   Enabling GitHub Actions for OMP Hosted projects [#99](https://github.com/openmainframeproject/tac/issues/99)
*   Project updates ( list at [https://github.com/openmainframeproject/tac#tac-projects](https://github.com/openmainframeproject/tac#tac-projects) )


## **Action Items**


## **Notes**

**<span style="text-decoration:underline;">Ambassador Program Update</span>**

There are 9 open applications for the Ambassador Program.  The goal for year one was to cap the applicants to 10 openings and that the candidates have some tie to projects.  Diversity is also one of the goals for the program.   An outstanding issue is how to conduct voting.

**Greg:** Suggested to leave the application process remain open through the end of the year.

**John:** Next Tac meeting after the new year on the 14th.  Perhaps close the day before the next Tac.

**Hogstrom:** Asked if voting would be on the 14th.   

**John:** No reason why not.  Proposes to close at 2359 on January 13th and prepare the list for voting.

**<span style="text-decoration:underline;">Public Cloud z/OS Enabelement - Kip Twitchell</span>**

**Kip:** The new project he is leading has seen the same issue as other OMP projects where there is a lack of access to z/OS instances.  Some of the barriers are:



*   Hardware - 
*   Systems Programmers - 

Suggested to source these resources for these systems.  The need is to enable access to real systems so people can learn through experimentation.  

This is documented in Tac Issue (blah blah blah) 

Things we might need: 



*   How can people register for access to the system(s)
*   Need people that can donate system programming skills 
*   Knowledge of what can be done that inconsistent with 

**Hogstrom**: Need software licenses from other ISVs

**Kip: **Other software licenses was thought of under the hardware portion of the proposal.



 Asked about ZD&T


<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: Definition term(s) &uarr;&uarr; missing definition? </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>






**Kip**: That is an option.  He thinks that might be too complicated.  Other issues are the license server.

**Hogstrom:** Mentioned the use of Dockerized ZD&T running on River to support interns and other developers to give access.  As a PoC showed its possible.  More to do.

**Dalhberg**: Could we identify the list of existing processes and functionality to make sure that we had a way to make it a project.

**Kip**: Thinking out loud was considering a single (or multiple) shared systems that are multi-tenant versus other individual ones.

**Dahlberg**: Considering some of the education they are trying to do at VCU sees the same support.

**Stowell**: Identified there are systems today offered from vendors like IBM.  

**Kip**: That’s one option, it depends on what you’re trying.

**Next Steps**:  Begin a working group to flush this out in more detail.

**John**: Suggesting a community to build out some infrastructure.  Asking Tac to vote on formation.  John volunteered to help Kip form the next level of detail.

**Updates on Debian**

**John**:  Haven’t seen much movement of Debian s390x support.

**Ingo**: Still looking for feedback from Canonical.   

**John: **I’ll try to resurrect the thread.

**Terse Compress / Decompress**

**John**: Andrew Rolly has volunteered to be the maintainer.  He is based in Australia.   Works with Blackhills software.

**Greg** Suggested to defer renewal until after some time period 

**Hogstrom** Suggested that we pair someone with Andrew and John is looking for volunteers.  Hogstrom referred to an issue that occurred in Node about ensuring we know and trust commiters.    [https://www.trendmicro.com/vinfo/dk/security/news/cybercrime-and-digital-threats/hacker-infects-node-js-package-to-steal-from-bitcoin-wallets](https://www.trendmicro.com/vinfo/dk/security/news/cybercrime-and-digital-threats/hacker-infects-node-js-package-to-steal-from-bitcoin-wallets)

**John** Asked Ingo to be the “diving buddy” with Andrew.

**Enabling Github Actions for OMP Hosted Actions**

**John**:  There was a concern about exposing secrets.  

Project Updates:

**Ambitus**

**Bostian:** One TAC meeting in the last month.  Accepted a request to host the ZML tool to generate Python classes from assembler control blocks.  There is a new tool to scan mixed byte streams for byte order problems, and swap bytes where needed.  This is coming up for the next TSC meeting.

**Feilong**

**Friesenegger:**  New systems were brought online for the project and they are now ready to encourage developers to contribute.

**GenevaERS**

**Randall**:   Over the last month they have made progress on the workbench and moved to PostgreSQL.  

Attracted 5 new non-IBMers to the group.

**Software Discovery Tool**

Setting up a new call to get information from the project.

**Tessia**

**Efremkin: **Weren’t able to complete the press release.  

**John**: More of a general statement but the OMP is pulling together the newsletter for a final push to let people know what is happening across the OMP.

**Zorow**

**Shah**: Had some TAC meetings with limited attendance.  Looking for how to improve participation.

**Mentorship**

**Dahlberg:** Starting to prepare for summer internship.  Training for mentees and mentors.  Brainstorming session around January 15th to discuss different topics.  **Bob** is looking for 10 topics and a person to lead those discussions.  Bob will send out a link after the meeting to help collate these subjects.
