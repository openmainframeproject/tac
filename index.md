---
title: Home
nav_order: 1
---
# Open Mainframe Project Techincal Advisory Council (TAC)

The role of the Techincal Advisory Council (TAC) is to direct and coordinate the activities of the technical community. It's voting members are comprised of the Platinum members of the Open Mainframe Project, along with the leaders of each project designated as an [Active Stage](process/project_stages.md#active-stage) top-level project by the TAC.

# Voting TAC Members

<table>
    <tr>
        <th>Representative</th>
	<th>Appointed By</th>
	<th>Role</th>
	<th>Special Role</th>
	<th>Organization</th>
    </tr>
{%- for member in site.data.tacmembers -%}
    <tr>
       {%- for item in member -%}<td>{{ item[1] }}</td>{%- endfor -%}
    </tr>    
{%- endfor -%}
</table>

# Projects and Working Groups

The Open Mainframe Project is a resource for open source projects supporting or looking to support mainframe, as well as a home for open source projects specifically targetting the mainframe. The TAC ensures that projects targeting the mainframe have the support they need to be successful, with flexability on governance and licensing to ensure the community can operate and grow successfully. More details on hosting a project at the Open Mainframe Project is in this [deck](https://github.com/openmainframeproject/foundation/raw/main/overview_deck/open_mainframe_project_host_project.pdf). The processes and policies for the TAC to manage incoming projects and project stages to be hosted by the Open Mainframe Project, as well as guidelines for projects, are in the [process section](process).

In addition, the Open Mainframe Project TAC has established a working groups program for the open source on mainframe community to collaborate on topical areas that are pertainent to the community. More details on the working group program and how to establish a working group can be found [here](process/working_groups.md)

Below are the project and working groups supported by the TAC, listed by [project stage](process/project_stages.md).

<!-- Embed list of all Open Mainframe Project members -->  
<iframe src="https://landscape.openmainframeproject.org/pages/hosted-projects" frameborder="0" id="landscape" scrolling="no" style="width: 1px; min-width: 100%; opacity: 1; visibility: visible; overflow: hidden; height: 1717px;"></iframe>
<script src="https://landscape.openmainframeproject.org/iframeResizer.js"></script>

There are many more mainframe-centric open source projects than what is hosted at Open Mainframe Project; check out the list and add any we are missing at the [Open Mainframe Project Landscape](https://landscape.openmainframeproject.org)

[![Open Mainframe Project Landscape](https://landscape.openmainframeproject.org/images/landscape.png)](https://landscape.openmainframeproject.org)
