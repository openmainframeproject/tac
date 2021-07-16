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
        <td><img src="{{ project["Logo URL"] }}" /></td>
        <td>
            {%- if project["Website"] -%}
            Website: <a href="{{ project["Website"] }}">{{ project["Website"] }}</a><br />
            {%- endif -%}
            {%- if project["Dev Mailing List"] -%}
            Dev Mailing List: <a href="{{ project["Dev Mailing List"] }}">{{ project["Dev Mailing List"] }}</a><br />
            {%- endif -%}
            {%- if project["User Mailing List"] -%}
            User Mailing List: <a href="{{ project["User Mailing List"] }}">{{ project["User Mailing List"] }}</a><br />
            {%- endif -%}
            {%- if project["Mailing List"] -%}
            Mailing List: <a href="{{ project["Mailing List"] }}">{{ project["Mailing List"] }}</a><br />
            {%- endif -%}
            {%- if project["Slack"] -%}
            Slack: <a href="https://slack.openmainframeproject.org">{{ project["Slack"] }}</a><br />
            {%- endif -%}
            {%- if project["Leads"] -%}
            Leads: {{ project["Leads"] }}<br />
            {%- endif -%}
            {%- if project["Meeting Cadence"] -%}
            Meeting Cadence: {{ project["Meeting Cadence"] }}<br />
            {%- endif -%}
        </td>
    </tr>    
{%- endfor -%}
</tbody>
</table>
