---
parent: Meetings
title: "Meeting Template"
nav_exclude: true
---

<pre>
---
parent: Meetings
title: "{{ "now" | date: "%Y-%m-%d" }}"
---

# Open Mainframe Project TAC Meeting - {{ "now" | date: "%B %e, %Y" }}

## Voting member attendance

{% for member in site.data.tacmembers %}
{%- if member["Appointed By"] == "Membership Entitlement" -%}
- [ ] {{ member["Full Name"] }} - {{ member["Account Name: Account Name"] }}
{%- elsif member["Appointed By"] == "Vote of TSC Committee" -%}
{%- for project in site.data.projects -%}
{%- if project["TAC Representative"] == member["Full Name"] -%}
- [ ] {{ member["Full Name"] }} - {{ project["Name"] }} Representative
{%- elsif project["Leads"] == member["Full Name"] -%}
- [ ] {{ member["Full Name"] }} - {{ project["Name"] }} Representative
{%- endif -%}
{%- endfor -%}
{% endif %}
{% endfor %}

## Other attendees

# Agenda

{{ site.data.meeting-agenda-items }}
{% for agendaitem in site.data.meeting-agenda-items %}
- {{ agendaitem.title }}
{% endfor %}

# Notes

</pre>

