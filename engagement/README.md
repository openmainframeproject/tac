---
title: Getting Involved
has_children: false
nav_order: 2
---

# Getting Involved in Projects

All of the projects hosted at the Open Mainframe Project are open and transparent, and welcome participation from anyone interested in the technology areas. Each project publishes thier governance processes within thier project repo ( typically in the README.md file or in a GOVERNANCE.md file within the primary project repo or TSC repo ) on roles within the community and how decision making is made.

## TAC Meetings

Learn more about joining the public meetings of the Technical Advisory Council (TAC) on [the Meetings page](https://tac.openmainframeproject.org/meetings)

## Mailing Lists and Slack channels for hosted projects

Each project hosted at the Open Mainframe Project collaborates on open channels that are welcome for anyone in the community to participate in. See the below list of channels for each project.

All Slack channels referenced below are part of the [Open Mainframe Project Slack organization](https://slack.openmainframeproject.org)

<table>
<tbody>
{%- for project in site.data.projects -%}
    {%- if project["Level"] != 'emeritus' -%}
    <tr>
        <td><img src="{{ project["Logo URL"] }}" /></td>
        <td>
            {%- if project["Github Org"] -%}
            Repo: <a href="{{ project["Github Org"] }}">{{ project["Github Org"] }}</a><br />
            {%- elsif project["Primary Github Repo"] -%}
            Repo: <a href="{{ project["Primary Github Repo"] }}">{{ project["Primary Github Repo"] }}</a><br />
            {%- endif -%}
            {%- if project["Website"] and project["Website"] != 'none' -%}
            Website: <a href="{{ project["Website"] }}">{{ project["Website"] }}</a><br />
            {%- endif -%}
            {%- if project["Dev Mailing List"] and project["Dev Mailing List"] != 'none' -%}
            Dev Mailing List: <a href="{{ project["Dev Mailing List"] }}">{{ project["Dev Mailing List"] }}</a><br />
            {%- endif -%}
            {%- if project["User Mailing List"] and project["User Mailing List"] != 'none' -%}
            User Mailing List: <a href="{{ project["User Mailing List"] }}">{{ project["User Mailing List"] }}</a><br />
            {%- endif -%}
            {%- if project["Mailing List"] and project["Mailing List"] != 'none' -%}
            Mailing List: <a href="{{ project["Mailing List"] }}">{{ project["Mailing List"] }}</a><br />
            {%- endif -%}
            {%- if project["Slack"] and project["Slack"] != 'none' -%}
            Slack: <a href="https://slack.openmainframeproject.org">{{ project["Slack"] }}</a><br />
            {%- endif -%}
            {%- if project["Leads"] -%}
            Lead(s): {{ project["Leads"] }}<br />
            {%- endif -%}
            {%- if project["Calendar"] and project["Calendar"] != 'none' -%}
            Calendar: {{ project["Calendar"] }}<br />
            {%- endif -%}
            {%- if project["Best Practices Badge ID"] and project["Best Practices Badge ID"] != 'none' and project["Best Practices Badge ID"] != 'False' -%}
            <a href="https://bestpractices.coreinfrastructure.org/projects/{{ project["Best Practices Badge ID"] }}"><img src="https://bestpractices.coreinfrastructure.org/projects/{{ project["Best Practices Badge ID"] }}/badge"></a>
            {%- endif -%}
        </td>
    </tr>
    {%- endif -%}
{%- endfor -%}
</tbody>
</table>
