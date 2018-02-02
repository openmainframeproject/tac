# Past TSC Proposed Projects ( needing reviewed and then moved into new structure )

Please note - these are projects not completed from the past, but aren't confirmed as present needs.

## Docker

  * **Goals:** Build up the Docker Hub content for Linux on Z, enhance Docker to exploit Linux on Z capabilities/scale, and Develop a reference micro-service architecture on Linux on Z.
  * **Contact:** Dale Hoffman, Marcel Mitran

### Add First Failure Data Capture (FFDC) to Docker

  * **Description:** Tasks needing completed
  * Intro into FFDC concepts, FFDC API [30hours]
  * Create packages (in Go and if required C version) for FFDC API [30 hours]
  * Identification of areas of interest, typical areas of failure, difficulties -- during startup and management of container, communication with registry, and runtime of container [200+ h]
  * Implementation of FFDC information, in Docker and other Linux environment components [200+ h]
  * **Additional Information:** Dependency is FFDC API as laid out by IBM Linux on z development. Requires NDA or some legal work to be able to share externally (not a big deal). Need to interlock with IBM Linux team to make sure FFDC concept and goals are in sync.
  * **Desirable Skills:** how docker works (graphdrivers), understanding Linux environment internal (and how Docker uses it, like systemd, cgroups, networking setup of docker)
  * **Expected Outcome:** 3 month internship to get base + further internships to build on based. We will need good synchronization and some cycles of the FFDC folks in IBM Boeblingen to make this useful.
  * **Difficultly:** Medium
  * **Mentors:**

### Build dockerHub development stacks

  * **Description:** Build various dockerHub development stacks, such as MEAN, LAMP, Tomcat, based on OpenSUSE
  * **Additional Information:** Open source projects known working on s390 listed at https://www.ibm.com/developerworks/community/forums/html/topic?id=5dee144a-7c64-4bfe-884f-751d6308dbdf
  * **Desirable Skills:** Basic Linux devops
  * **Expected Outcome:** DockerHub images for s390x
  * **Difficultly:** Medium
  * **Mentors:**

### Packaging applications for Alpine Linux

  * **Description:** Packaging applications to Alpine Linux
  * **Additional Information:** Last year the core of Alpine Linux was ported to Z, but there is much in the developer tool chain that needs packaged for the platform
  * **Desirable Skills:** Docker, Linux security concepts, Linux skills
  * **Expected Outcome:** upstream code contributions
  * **Difficultly:** Medium
  * **Mentors:**

## Ensure popular Linux management tools can work on Linux on z Systems

  * **Description:** A key inhibitor towards moving to Linux on z Systems is the objection from administrators, developers and users that the management tools are not what they are used to on the x86 platform.  This project would be to identify a set of popular/ubiquitous open source tools that can be first, certified for Linux on z Systems and second, enhanced to take advantage of, monitor, manage the distinctive qualities of the z Systems platform (e.g. virtual network between the guests running in the same hypervisor instance, hipersockets).  The updated versions of these tools would be contributed back to their projects.
  * **Additional Information:** A couple of lists of 'popular tools' are in these articles:
    * http://www.infoworld.com/article/2683857/network-monitoring/article.html
    * https://blog.serverdensity.com/80-linux-monitoring-tools-know/
    * https://www.linuxtechi.com/open-source-server-network-monitoring-tools-for-linux/
  * **Desirable Skills:** Skills would be aligned to the languages and disciplines of the selected tools, but would likely need C/C++/Java coding skills, build and packaging for Linux, some mainframe skill (but could be obtained through mentoring and study)
  * **Expected Outcome:** Open source tools updated, certified and contributed back to their projects
  * **Difficultly:** Easy/Medium - depending on the tools chosen
  * **Mentors:**
  * **Additional Contacts:** N/A

