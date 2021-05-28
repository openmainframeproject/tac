---
title: Mailing Lists and Slack channels
parent: Getting Involved
---

# Mailing Lists and Slack channels for hosted projects

Each project hosted at the Open Mainframe Project collaborates on open channels that are welcome for anyone in the community to participate in. See the below list of channels for each project.

All Slack channels referenced below are part of the [Open Mainframe Project Slack organization](https://slack.openmainframeproject.org)

<table>
<tbody>
{%- for project in site.data.projects -%}
    <tr>
        <td>{{ project["Name"] }}</td>
        <td>
            Website: <a href="{{ project["Website"] }}">{{ project["Website"] }}</a><br />
            Mailing List: <a href="{{ project["Mailing List"] }}">{{ project["Mailing List"] }}</a><br />
            Slack: <a href="https://slack.openmainframeproject.org">{{ project["Slack"] }}</a><br />
        </td>
    </tr>    
{%- endfor -%}
</tbody>
</table>
