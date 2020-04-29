# Open Mainframe Project TAC Meeting - <%= date.toFormat("MMMM d, yyyy") %>

## Date/Time

Meeting held monthly on the second Thursday of the month unless otherwise stated. Agenda to be posted at https://github.com/openmainframeproject/tac/issues?q=is%3Aopen+is%3Aissue+label%3A%22meeting%22

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
* https://www.timeanddate.com/worldclock/?iso=<%= date.toFormat("yyyy-MM-dd'T'HH:mm:ss") %>

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

* [Video](<%= date.toFormat("yyyyMMdd") %>-video.mp4)
* [Audio](<%= date.toFormat("yyyyMMdd") %>-audio.m4a)
* [Transcript](<%= date.toFormat("yyyyMMdd") %>-transcript.vtt)
* [Chat Log](<%= date.toFormat("yyyyMMdd") %>-chatlog.txt)

## Attendance

### Voting member rollcall:

- [ ] Phil Tully, ADP
- [ ] Gregory MacKinnon, Broadcom
- [ ] Enyu Wang, IBM
- [ ] Peter Fandel, Rocket Software
- [ ] Mark Post, SUSE
- [ ] James Caffrey, IBM ( ADE )
- [ ] Bob Dahlberg, VCU ( Mentorship )
- [ ] _vacant_ ( Zowe )

Quorum Achieved.

### Other Attendees


## Agenda

Extracted from **<%= agendaLabel %>** labelled issues and pull requests from **<%= owner %>/<%= repo %>** prior to the meeting.

* Project updates ( list at https://github.com/openmainframeproject/tac#tac-projects )
<%= agendaIssues.map((i) => {
  return `* ${i.title} [#${i.number}](${i.html_url})`
}).join('\n') %>

## Action Items


## Notes

