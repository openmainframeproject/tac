---
title: Mailing Lists and Slack channels
parent: Getting Involved
---

# Mailing Lists and Slack channels for hosted projects

Each project hosted at the Open Mainframe Project collaborates on open channels that are welcome for anyone in the community to participate in. See the below list of channels for each project.

All Slack channels referenced below are part of the [Open Mainframe Project Slack organization](https://slack.openmainframeproject.org)

<table class="sortable">
<thead>
    <tr>
        <th>Project</th>
        <th>Website</th>
        <th>Mailing Lists</th>
        <th>Slack Channel(s)</th>
    </tr>
</thead>
<tbody>
{%- for member in site.data.projects -%}
    <tr>
        <td>{{ project["Name"] }}</td>
        <td><a href="{{ project["Website"] }}">{{ project["Website"] }}</a></td>
        <td><a href="{{ project["Mailing List"] }}">{{ project["Mailing List"] }}</a></td>
        <td><a href="https://slack.openmainframeproject.org">{{ project["Slack"] }}</a></td>
    </tr>    
{%- endfor -%}
</tbody>
</table>
<link rel="stylesheet" href="css/sorTable.css">
<script src="js/sorTable.min.js"></script>
