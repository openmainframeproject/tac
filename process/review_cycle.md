---
parent: Processes
---

# Project Review Cycle

Per the [Annual Review process](project_stages#tac-review), all hosted projects will have an annual review at the TAC. Below is the schedule for those reviews and updates on when projects are due for their next review.

<table class="sortable">
<thead>
    <tr>
        <th>Project</th>
        <th>Current Level</th>
        <th>Initially Accepted</th>
        <th>Last Review Date</th>
        <th>Next Review Date</th>
    </tr>
</thead>
<tbody>
{%- for project in site.data.projects -%}
    <tr>
        <td>{{ project["Name"] }}</td>
        <td>{{ project["Level"] }}</td>
        <td>{{ project["Accepted Date"] | date: "%F" }}</td>
        <td>{{ project["Last Review Date"] | date: "%F" }}</td>
        <td>{{ project["Next Review Date"] | date: "%F" }}</td>
    </tr>
{%- endfor -%}
</tbody>
</table>
<link rel="stylesheet" href="../css/sorTable.css">
<script src="../js/sorTable.min.js"></script>
