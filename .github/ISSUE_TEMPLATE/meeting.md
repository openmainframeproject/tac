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

All meetings are listed on the Open Mainframe Project calendar at (https://lists.openmainframeproject.org/calendar)[https://lists.openmainframeproject.org/calendar], subject to the mailing lists you are subscribed to.

### Conference call details

Meetings are hosted on the LFX Meeting Management platform. More details on how to register are at (https://tac.openmainframeproject.org/meetings/)[https://tac.openmainframeproject.org/meetings/]

## Meeting Recording

A recording of the meeting and the transcript are both available at the link below.

<ADD LINK HERE>

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
* Review upcoming annual reviews ( list at [https://tac.openmainframeproject.org/process/review_cycle.html](https://tac.openmainframeproject.org/process/review_cycle.html) )
* Project updates ( list at [https://tac.openmainframeproject.org/#projects-and-working-groups](https://tac.openmainframeproject.org/#projects-and-working-groups) )

## Action Items


## Notes

