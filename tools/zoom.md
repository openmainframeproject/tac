---
parent: Tools
---
# Zoom

- [Code of conduct](#code-of-conduct)
- [Setting up your meeting and moderation](#setting-up-your-meeting-and-moderation)
    - [Moderation](#moderation)
      - [Related moderation documentation](#related-moderation-documentation)
    - [Escalating and/Reporting a Problem](#escalating-andreporting-a-problem)
- [Meeting recordings](#meeting-recordings)
- [Screen sharing guidelines and recommendations](#screen-sharing-guidelines-and-recommendations)
- [Audio/Video quality recommendations](#audiovideo-quality-recommendations)
    - [Recommended hardware to have](#recommended-hardware-to-have)
    - [Hardware we don't recommend](#hardware-we-dont-recommend)
    - [Pro-tips](#pro-tips)

Zoom is the main video communication platform for Open Mainframe Project. It is used for running the both techincal community and member meetings, along with many other Open Mainframe Project  online events. Since the Zoom meetings are open to the general public, a Zoom host or co-host
has to moderate a meeting in all senses of the word from starting and stopping
the meeting, to acting on [Open Mainframe Project Code of Conduct] issues.

These guidelines are meant as a tool to help Open Mainframe Project community members manage their Zoom resources.

## Code of conduct

The Open Mainframe Project adheres to the [Open Mainframe Project Code of Conduct] throughout all platforms and includes all communication mediums.

## Setting up your meeting and moderation

New Zoom meetings can be provisioned by contacting the [Open Mainframe Project Program Manager]. Note that Zoom meetings are provisioned in a shared account across all Open Mainframe Project activities ( with the exception of Zowe, who has a dedicated Zoom account ), so you will need to coordinate use across other projects. A good way to do this is by reviewing the [Open Mainframe Project calendar], which maintains a list of all community meetings.

Open Mainframe Project Zoom meetings are provisioned with the following settings set to maximize security yet make community access to meetings have a fairly low barrier to entry:

- 'Only authenticated users can join meetings' set on
- 'Require password for participants joining by phone' set on
- 'Identify guest participants in the meeting/webinar' set on
- Only the host can share their screen.
- If the meeting is for a closed group, a password will be required to join ( which will be encoded in the URL to join the meeting that can be shared over a private channel )

Do **not** share your Zoom link on social media. This will help curtail trolls and others who would intentionally attempt to disrupt your Zoom call.

To join the provisioned meeting and become host

- Have the [latest version] of the Zoom client installed.
- Open the meeting in the Zoom desktop client
- Use the [host key] to "claim host".
- Assign a co-host to help with moderation. It should never be your note taker
  unless it's a very small group.
- If you have others that need to share their screen, the host can enable that on the fly.
  (via the `^` menu next to **Share Screen**)
- If you know that there will only be a fixed number of attendees at a meeting, lock the meeting to prevent anyone new from joining ( Click 'Manage Participants', then at the bottom of the Particpants list click `More` and then `Lock Meeting` )

### Moderation

If you're dealing with a troll or bad actor:

- Put the troll or bad actor on **hold**. The participant will be put into a "waiting room" and will not be able to participate in the call until the host removes the hold.
- Remove the participant. Please be cautious when testing or using this feature, as it is **permanent**. They will never be able to come back into that meeting ID on that particular device. Do **not** joke around with this feature; it's better to put the attendee on "hold" first and then remove.
- After an action has been taken, use the **lock meeting** feature so that no one else can come into the meeting. If that fails, end the call immediately, and contact the [Open Mainframe Project Program Manager] to report the issue.

**NOTE:** You can find these actions when clicking on the **more** or **"..."** options after scrolling over the participants name/information.

Hosts **must** be comfortable with how to use these moderation tools and the Zoom settings in general. Make sure whoever is running your meeting is equipped with the right knowledge and skills. If you have any questions or concerns, reach out to the [Open Mainframe Project Program Manager] and they will be able to provide further guidance and training.

#### Related moderation documentation

- Zoom has [documentation on how to use their moderation tools].

### Escalating and/Reporting a Problem

Issues that cannot be handle via normal moderation, or with the assistance of the
[Open Mainframe Project Program Manager] should be escalated to the [Open Mainframe Project TAC].

## Meeting recordings

Project chairs are responsible for posting all meetings recordings to the project repository. If a violation has been addressed by a host and it has been recorded by Zoom, the video should be edited before being posted.

Contact [Open Mainframe Project Program Manager] if you need help to edit a video before posting it to the public.

## Screen sharing guidelines and recommendations

Zoom has a [documentation on how to use their screen sharing feature]:

Recommendations:

- Turn off notification to prevent any interference.
- Close all sensitive documents and unrelated programs before sharing the screen
  eg. Emails.
- Test your presentation before hand to make sure everything goes smoothly.
- Keep your desktop clean. Make sure there is no offensive or/and distracting
  background.

## Audio/Video quality recommendations

While video conferencing has been a real boon to productivity there are still [lots of things that can go wrong] during a conference video call.

There are some things that are just plain out of your control, but there are some things that you can control. Here are some tips if you're just getting into remote meetings. Keep in mind that sometimes things just break. These are not hard rules, more of a set of loose guidelines on how to tip the odds in your favor.

### Recommended hardware to have

- **A dedicated microphone** - This is the number one upgrade you can do. Sound is one of those things that can immediately change the quality of your call. If you plan on being here for the long haul, something like a [Blue Yeti] will work great due to the simplicity of using USB audio and having a hardware mute button. Consider a [pop filter] as well if necessary.
- **A Video Camera** - A bad image can be worked around if the audio is good. Certain models have noise cancelling dual-microphones, which are a great backup for a dedicated microphone or if you are travelling.
- **A decent set of headphones** - Personal preference, these cut down on the audio feedback when in larger meetings.

What about an integrated headset and microphone? This totally depends on the type. We recommend testing it with a friend or asking around for recommendations for which models work best.

### Hardware we don't recommend

- **Earbuds**. Generally speaking they are not ideal, and while they might sound fine to you when 50 people are on a call the ambient noise adds up. Some people join with earbuds and it sounds excellent, others join and it sounds terrible. Practicing with someone ahead of time can help you determine how well your earbuds work.

### Pro-tips

- If you join the meeting via the desktop or web client, [make sure your name is set correctly](https://support.zoom.us/hc/en-us/articles/200941109-Attendee-Controls-in-a-Meeting) so other attendees know who you are ( especially the person taking meeting notes! ).
- [Join on muted audio and video] in order to prevent noise to those already in a call.
- If you don't have anything to say at that moment, **MUTE**. This is a common problem. You can help out a teammate by mentioning it on Zoom chat or asking them to mute on the call itself. The meeting co-host can help with muting noisly attendees before it becomes too disruptive. Don't feel bad if this happens to you, it's a common occurrence.
- Try to find a quiet meeting place to join from; some coworking spaces and coffee shops have a ton of ambient noise that won't be obvious to you but will be to other people in the meeting. When presenting to large groups consider delegating to another person who is in a quieter environment.
- Using your computer's built in microphone and speakers might work in a pinch, but in general won't work as well as a dedicated headset/microphone.
- Consider using visual signals to agree to points so that you don't have to mute/unmute often during a call. This can be an especially useful technique when people are asking for lazy consensus. A simple thumbs up can go a long way!
- It is common for people to step on each other when there's an audio delay, and both parties are trying to communicate something. Don't worry, just remember to try and pause before speaking, or consider raising your hand (if your video is on) to help the host determine who should speak first.

Thanks for making Open Mainframe Project meetings work great!

[Open Mainframe Project Code of Conduct]: code_of_conduct.md
[Open Mainframe Project Program Manager]: mailto:pm@openmainframeproject.org
[Open Mainframe Project calendar]: https://lists.openmainframeproject.org/calendar
[Open Mainframe Project TAC]: mailto:omp-tac-private@lists.openmainframeproject.org
[host key]: https://support.zoom.us/hc/en-us/articles/205172555-Host-Key
[latest version]: https://zoom.us/download
[documentation on how to use their moderation tools]: https://support.zoom.us/hc/en-us/articles/201362603-Host-Controls-in-a-Meeting
[documentation on how to use their screen sharing feature]: https://support.zoom.us/hc/en-us/articles/201362153-How-Do-I-Share-My-Screen
[lots of things that can go wrong]: https://www.youtube.com/watch?v=JMOOG7rWTPg
[Blue Yeti]: https://www.bluedesigns.com/products/yeti/
[pop filter]: https://en.wikipedia.org/wiki/Pop_filter
[Join on muted audio and video]: https://support.zoom.us/hc/en-us/articles/203024649-Video-Or-Microphone-Off-By-Attendee
