# Proposed Projects for TSC Focus

The Open Mainframe Project TSC looks for community feedback on technology areas as they look to improve the support of Linux on Z. Each area has a number of projects and tasks needed to help the efforts.

## How to Contribute Project Ideas

If you see where you can identify a project or task to be completed under a focus area, use the following template to define it and submit via a PR under the [proposed_projects directory](/proposed_projects) 

**Template/Sample**
  * ** Title: **Provide a short but descriptive title of what the intern project is
  * ** Description: **Provide at least two or three paragraphs describing the task. Include the problem/opportunity in need of effort, as well as a description of the task to fix the problem or realize the opportunity. If there is a probable implementation path... "this will need steps X, Y, and Z to be completed" please describe it. If part of the task is evaluating one or more potential implementation paths and selecting/executing on one of them, please describe the options and the potential paths to be explored.
  * ** Additional Information: **Provide links to bugzilla entries, release-plan notes, and/or other web-references that would be helpful information to potential interns.
  * ** Desirable Skills: **List both the skills needed and the tools to be used. ie. Java programing with working knowledge of mainframe.
  * ** Expected Outcome: **List the deliverable(s) (features/application(s)/report(s) etc.) expected
  * ** Difficultly: **Easy/Medium/Hard
  * ** Mentors: **John Doe <john.doe@notarealemailaddress.com>, Jane Smith <JSmith@alsonotarealaddress.com>
  * ** Additional Contacts: **Identify the IRC channel(s) and mailing list(s) where potential interns can ask questions and further interact with members of Open Mainframe Project project they would be working with.

## Want to tackle a project?

You can reach out to the mentor(s) mentioned, or the overall project owner, if you are interested in working on a particular project/task.

# Current TSC Proposed Projects

## Docker

  * **Goals:** Build up the Docker Hub content for Linux on Z, enhance Docker to exploit Linux on Z capabilities/scale, and Develop a reference micro-service architecture on Linux on Z.
  * **Contact:** Dale Hoffman, Marcel Mitran

### Add First Failure Data Capture (FFDC) to Docker

  * ** Description: **Tasks needing completed
    * intro into FFDC concepts, FFDC API [30hours]
    * create packages (in Go and if required C version) for FFDC API [30 hours]
    * identification of areas of interest, typical areas of failure, difficulties -- during startup and management of container, communication with registry, and runtime of container [200+ h]
    * implementation of FFDC information, in Docker and other Linux environment components [200+ h]
  * ** Additional Information: **Dependency is FFDC API as laid out by IBM Linux on z development. Requires NDA or some legal work to be able to share externally (not a big deal). Need to interlock with IBM Linux team to make sure FFDC concept and goals are in sync. 
  * ** Desirable Skills: **how docker works (graphdrivers), understanding Linux environment internal (and how Docker uses it, like systemd, cgroups, networking setup of docker)
  * ** Expected Outcome: **3 month internship to get base + further internships to build on based. We will need good synchronization and some cycles of the FFDC folks in IBM Boeblingen to make this useful.
  * ** Difficultly: **Medium
  * ** Mentors: **Marcel Mitran <mmitran@ca.ibm.com>

### Build dockerHub development stacks

  * ** Description: **Build various dockerHub development stacks, such as MEAN, LAMP, Tomcat, based on OpenSUSE
  * ** Additional Information: ** Open source projects known working on s390 listed at [[https://www.ibm.com/developerworks/community/forums/html/topic?id=5dee144a-7c64-4bfe-884f-751d6308dbdf]]
  * ** Desirable Skills: **basic Linux devops
  * ** Expected Outcome: **dockerHub images for s390x
  * ** Difficultly: **Medium
  * ** Mentors: **Marcel Mitran <mmitran@ca.ibm.com>

### Improved security for isolated containers

  * ** Description: **Improved security for isolated containers
  * ** Additional Information: **Isolated containers are a concept to run containers inside virtual machines (currently using the runv project). The project targets to add various security functions to isolated containers, both outside of the virtual machine as well as inside the VM.
  * ** Desirable Skills: **Linux skills, compiling, some development
  * ** Expected Outcome: **upstream code contributions
  * ** Difficultly: **Medium
  * ** Mentors: **Utz Bacher <utz.bacher@de.ibm.com>

### Packaging applications for Alpine Linux 

  * ** Description:** Packaging applications to Alpine Linux
  * ** Additional Information:** Last year the core of Alpine Linux was ported to Z, but there is much in the developer tool chain that needs packaged for the platform
  * ** Desirable Skills:** Docker, Linux security concepts, Linux skills
  * ** Expected Outcome:** upstream code contributions
  * ** Difficultly:** Medium
  * ** Mentors: **Jim Porell <jim@jimporell.com>

### Leverage mainframe crypto capabilities for Docker security 

  * ** Description:** Leverage mainframe crypto capabilities for Docker security
  * ** Additional Information:** The mainframe provides a large variety of crypto capabilities. The project targets at exploiting these capabilities in the context of containers, e.g. Docker Content Trust or also for containerized workload.
  * ** Desirable Skills:** Docker, security and cryptographic concepts, Linux skills
  * ** Expected Outcome:** upstream code contributions
  * ** Difficultly:** Medium
  * ** Mentors: ** Reinhard Buendgen <BUENDGEN@de.ibm.com>, Utz Bacher <utz.bacher@de.ibm.com>

## Ensure popular Linux management tools can work on Linux on z Systems

  * ** Description: **A key inhibitor towards moving to Linux on z Systems is the objection from administrators, developers and users that the management tools are not what they are used to on the x86 platform.  This project would be to identify a set of popular/ubiquitous open source tools that can be first, certified for Linux on z Systems and second, enhanced to take advantage of, monitor, manage the distinctive qualities of the z Systems platform (e.g. virtual network between the guests running in the same hypervisor instance, hipersockets).  The updated versions of these tools would be contributed back to their projects.
  * ** Additional Information: **A couple of lists of 'popular tools' are in these articles:
    * [[http://www.infoworld.com/article/2683857/network-monitoring/article.html]]
    * [[https://blog.serverdensity.com/80-linux-monitoring-tools-know/]]
  * ** Desirable Skills: **Skills would be aligned to the languages and disciplines of the selected tools, but would likely need C/C++/Java coding skills, build and packaging for Linux, some mainframe skill (but could be obtained through mentoring and study) 
  * ** Expected Outcome: **Open source tools updated, certified and contributed back to their projects
  * ** Difficultly: **Easy/Medium - depending on the tools chosen
  * ** Mentors: **Scott Fagen <scott.fagen@ca.com> will be able to assign mentors.
  * ** Additional Contacts: **N/A

## Blockchain performance

  * **Goals:** Ensure blockchain performance on Linux on Z.
  * **Contact:** Phil Tully, Len Santalucia
  * **Resources:** [[https://www.hyperledger.org/]]

### Making Blockchain Enterprise Level on IBM z Systems

  * **Background:** IBM z Systems clients desire to innovate with Blockchain utilizing the unique value proposition of co-location and adjacency that leverages decades of investment in z Systems applications and transaction systems through APIs and micro-services and hardware performance advantages in z Systems scalable, secure, high-performance systems. 
  * **Description:** How can Blockchain be technically advanced and enhanced to leverage the key design points of the IBM z Systems Architecture such as: 
    * Performance: Highly scalable I/O system, very large memory space 10 TBs. fastest commercial microprocessor in industry, largest cache (z runs open source 2x-3x faster than Intel-based platforms) 
    * Hardware accelerators: built-in on-chip accelerators for Blockchain encryption (hashing) and Blockchain cryptography
    * Security: Tamper proof security cards used to store keys for encrypting identities and contents of Blockchains; z Hardware Security Module (HSM) FIPS 140-2 compliant, supports Elliptical Curve SuiteB; Enterprise PKCS#11 very secure, complete implementation using unique firmware load in HSM and not available on any other platforms
    * Platform: z appliance infrastructure provides hypervisor-secured containers; isolated platform (LPAR on z); built-in audit systems that smart contracts can use to control and log smart contract interactions Blockchain with z
    * Tighter integration with existing Systems of Record: with existing transactional sub-systems (CICS, DB2, IMS, TPF, Batch Cobol, ODM on z if smart contract invokes rules) via APIs to alleviate potential bottlenecks
       * Least amount of network hops and use of existing security, audit, management, and operational business practices the companies already have in place
       * Blockchain running on Linux on z allows for collocation of additional Blockchain capabilities with Smart Contract APIs implemented on top of IBM transactional runtimes
  * **Desirable Skills:**
    * Go and Java programing on Linux on z Systems and z/OS
    * Compiler optimization skills 
    * zSystems I/O subsystem, crypto, virtualization, network 
    * zSystems Subsystems CICS, IMS, DB2, VSAM knowledge and experience  
  * **Expected Outcome:**
    * Clients need business logic that can self-execute with assurance that the terms cannot be altered by any party without agreement from stakeholders (smart contracts + consensus) 
    * z Systems has built-in accelerators for hashing that can be used to encode Blockchain transactions so that once on the ledger, prior smart contracts cannot be tampered with
    * Parties must be able to keep the terms and pattern of transactions private (private transactions and containerized logic) 
    * z systems has hardware accelerators for encryption, digital signatures and hardware that allows z systems to create an unlimited number of random keys to encode secure each transaction uniquely 
    * Client networks of different ledgers must be able to call public logic and refer to transactions on other ledgers: e.g., do Know Your Customer only once (multi-ledger addressing)
    * On z systems, Blockchains would sit side by side to public logic that exists as current business processes on z.  Blockchains and current business processes would be optimally integrated and referenceable through microservices and APIs
  * **Difficultly:** Hard
  * **Mentors:**
    * IBM Fellow - Donna Dillenberger <engd@us.ibm.com>
    * IBM Distinguished Engineer - Marcel Mitran <mmitran@ca.ibm.com>
    * ADP Chief Architect - Phil Tully <Phil.Tully@adp.com>
    * Vicom Infinity CTO - Len Santalucia <LSantalucia@vicominfinity.com>
    * Vicom Infinity Sr Technical Specialist - Alex Kim <ykim@vicominfinity.com>
  * **Additional Contacts:**
    * https://www.hyperledger.org/
    * https://developer.ibm.com/open/ibm-open-blockchain/ 
    * http://www.linuxfoundation.org/news-media/announcements/2015/12/linux-foundation-unites-industry-leaders-advance-blockchain?cm_mc_uid=29203059292514307566556&cm_mc_sid_50200000=1450363405 
    * http://www.ibm.com/blockchain/ 

## TensorFlow functionality, Proof of Concept, and enable Continuous Integration testing

  * ** Description: ** Ensure that TensorFlow functions correctly on LinuxONE, generate a Proof of Concept, analyze performance, and add LinuxONE to TensorFlow Continuous Integration framework. TensorFlow utilizes the Eigen BLAS library that already has been ported to LinuxONE and optimized for z13 VX SIMD vector instruction set. This project will ensure that TensorFlow builds, installs, and operates cleanly on LinuxONE "out of the box", passing its self-test framework and functioning for simple TensorFlow examples. The project next will work with IBM to create an environment to run the TensorFlow continuous integration framework and connect to the TensorFlow CI infrastructure. As a bonus, create and deploy a real-world machine learning example on TensorFlow running on LinuxONE.
  * ** Additional Information:** https://www.tensorflow.org/ and http://ci.tensorflow.org/
  * ** Desirable Skills:** TensorFlow, Machine Learning, Python, C++, CMake, Jenkins, Open Source packaging
  * ** Expected Outcomes:** 
     - Demonstrate that TensorFlow builds "out of the box" on LinuxONE.
     - Demonstrate that TensorFlow passes self-tests.
     - Demonstrate that TensorFlow runs simple examples.
     - Setup and deploy Continuous Integration (CI) testing framework on IBM infrastructure.
     - Work with TF community to connect CI to TensorFlow community CI infrastructure.
     - Create a real-world machine learning example on TensorFlow as a Proof of Concept.
     - Experiment and analyze performance of Proof of Concept.
     - Write a report to describe the Proof of Concept and performance analysis.
  * ** Difficultly:** Easy-Medium
  * ** Mentors: ** David Edelsohn <edelsohn@us.ibm.com>, Cindy Lee <cinderel@ca.ibm.com>
