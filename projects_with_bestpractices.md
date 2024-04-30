---
nav_exclude: true
layout: minimal
---

<dl id="projects_with_bestpractices">
{%- for project in site.data.projects -%}
{%- if project['Level'] != 'workinggroup' and project['Level'] != 'emeritus' -%}
  <div>
  <dt>
    <img src="{{ project['Logo URL'] }}" >
    {%- if project["Best Practices Badge ID"] and project["Best Practices Badge ID"] != 'none' and project["Best Practices Badge ID"] != 'False' -%}
    <a href="https://bestpractices.coreinfrastructure.org/projects/{{ project["Best Practices Badge ID"] }}"><img src="https://bestpractices.coreinfrastructure.org/projects/{{ project["Best Practices Badge ID"] }}/badge?{{ "now" | date: "%s" }}"></a>
    {%- endif -%}
  </dt>
  </div>
{%- endif -%}
{%- endfor -%}
</dl>
