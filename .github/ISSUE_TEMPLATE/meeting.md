---
parent: Meetings
title: <%= date.toFormat("yyyy-MM-dd") %>
---

# Open Mainframe Project TAC Meeting - <%= date.toFormat("MMMM d, yyyy") %>

## Date/Time

Meeting held monthly on the second and fourth Thursdays of the month unless otherwise stated. Agenda to be posted at [https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22](https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22)

| Timezone | Date/Time |
|----------|-----------|
<%= [
  'America/Los_Angeles',
  'America/Denver',
  'America/Chicago',
  'America/New_York',
  'Europe/London',
  'Europe/Amsterdam',
  'Asia/Shanghai',
  'Asia/Tokyo',
].map((zone) => {
  return `| ${zone} | ${date.setZone(zone).toFormat('EEE dd-MMM-yyyy HH:mm (hh:mm a)')} |`
}).join('\n') %>

Or in your local time:
* [https://www.timeanddate.com/worldclock/?iso=<%= date.toFormat("yyyy-MM-dd'T'HH:mm:ss")%>](https://www.timeanddate.com/worldclock/?iso=<%= date.toFormat("yyyy-MM-dd'T'HH:mm:ss")%>) 

All meetings are listed on the Open Mainframe Project calendar at https://lists.openmainframeproject.org/calendar, subject to the mailing lists you are subscribed to.

### Conference call details

Join from PC, Mac, Linux, iOS or Android: [https://zoom.us/j/290221938](https://zoom.us/j/290221938)

Or iPhone one-tap :

US: +16465588656,,290221938#  or +16699006833,,290221938#

Or Telephone:

Dial(for higher quality, dial a number based on your current location):

    US: +1 646 558 8656  or +1 669 900 6833  or +1 855 880 1246 (Toll Free) or +1 877 369 0926 (Toll Free)

Meeting ID: 290 221 938

International numbers available: [https://zoom.us/zoomconference?m=4ywiZErrEEDIHL6VXNjfZ-PXcfjeWMjs](https://zoom.us/zoomconference?m=4ywiZErrEEDIHL6VXNjfZ-PXcfjeWMjs)

[Meeting recording](https://drive.google.com/drive/folders/13tFBM50RIUGw6ZB-kyb0vcDEA1NMvBTB?usp=sharing)

## Antitrust Policy Notice

Linux Foundation meetings involve participation by industry competitors, and it is the intention of the Linux Foundation to conduct all of its activities in accordance with applicable antitrust and competition laws. It is therefore extremely important that attendees adhere to meeting agendas, and be aware of, and not participate in, any activities that are prohibited under applicable US state, federal or foreign antitrust and competition laws.

Examples of types of actions that are prohibited at Linux Foundation meetings and in connection with Linux Foundation activities are described in the Linux Foundation Antitrust Policy available at [http://www.linuxfoundation.org/antitrust-policy](http://www.linuxfoundation.org/antitrust-policy). If you have questions about these matters, please contact your company counsel, or if you are a member of the Linux Foundation, feel free to contact Andrew Updegrove of the firm of Gesmer Updegrove LLP, which provides legal counsel to the Linux Foundation.

## Attendance

### Voting member rollcall:

- [ ] Phil Tully, ADP ( Platinum Member )
- [ ] Gregory MacKinnon, Broadcom ( Platinum Member )
- [ ] Joe Bostian, IBM ( Platinum Member )
- [ ] Giancarlo Frix, Rocket Software ( Platinum Member )
- [ ] Mark Post, SUSE ( Platinum Member )
- [ ] James Caffrey, IBM ( ADE )
- [ ] Sudharsana Srinivasan, IBM ( COBOL Programming Course )
- [ ] Kip Twitchell ( GenevaERS )
- [ ] Bob Dahlberg, VCU ( Mentorship )
- [ ] Sean Grady, Rocket Software ( Zowe )

Quorum Achieved.

### Other Attendees


## Agenda

Extracted from **<%= agendaLabel %>** labelled issues and pull requests from **<%= owner %>/<%= repo %>** prior to the meeting.

<%= agendaIssues.map((i) => {
  return `* ${i.title} [#${i.number}](${i.html_url})`
}).join('\n') %>
* Review upcoming annual reviews ( list at https://tac.openmainframeproject.org/process/review_cycle.html)
* Project updates ( list at https://tac.openmainframeproject.org/#projects-and-working-groups )

## Action Items


## Notes

