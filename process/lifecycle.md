---
parent: Processes
title: Project Lifecycle
nav_order: 1
has_children: true
---
_Approved by Open Mainframe Project TAC on 2021-04-08_

# Open Mainframe Project - Project Lifecycle

* TOC
{:toc}

# Overview

This lifecycle document is maintained by the Open Mainframe Project, and its purpose is to:

*   Describe the requirements for contributing a project to Open Mainframe Project;
*   Provide a clear process for the contribution of a project to Open Mainframe Project; and
*   Set milestones and requirements for different stages of a project’s development once accepted into Open Mainframe Project.

Open Mainframe Project may adopt or amend this document by majority affirmative votes of its Technical Advisory Council (“TAC”) and Governing Board.

# Proposal Process

TAC Projects must be proposed via a new [GitHub Issue](https://github.com/openmainframeproject/tac/issues/new?assignees=openmainframeproject%2Ftac-voting-members%2Copenmainframeproject%2Fomp-staff&labels=meeting-agenda&template=new-project-proposal.yml&title=New+Project+Proposal+-+PROJECT+NAME). Project proposals submitted to the Open Mainframe Project TAC must provide the following information to the best of your ability:

*   Name of the project (must be unique within Open Mainframe Project)
*   Project description (what it does, why it is valuable, origin and history)
*   Statement on alignment with [Open Mainframe Project Mission and Vision statements](https://www.openmainframeproject.org/about)
*   Are there similar/related projects out there? If so, what is different about this project?
*   Sponsor from TAC (sponsor helps mentor projects - if the project doesn’t currently have a sponsor, the TAC will appoint one as part of the approval process)
*   Proposed Project Stage
*   License and contribution guidelines (refer to the Open Mainframe Project guidelines)
*   Source control (GitHub by default)
*   External dependencies (including licenses)
    *   Note that any proposed project should not bundle any closed-source software.
*   Initial committers
    *   How long has each worked on the project? 
    *   The extent of contributions (how many commits)?  
    *   Diversity of community (is the contributor base diverse in terms of being spread across different organizations/companies)?
*   Infrastructure requests (CI / build infrastructure)
*   Communication channels (such as Slack/IRC channels, mailing lists, forums, and/or other discussion tools)
*   Issue tracker (GitHub by default)
*   Website
*   Release methodology and mechanics
*   Social media accounts
*   Community size and any existing sponsorship

## TAC presentation

Projects will present at the next TAC meeting no sooner than two weeks after their submission date.

Proposed projects will receive a 30-45 minute presentation slot at an upcoming TAC meeting as the schedule allows. The project proposal must include a presentation that conforms to the presentation structure below to ensure uniform and complete submissions ( projects may leverage the [Open Mainframe Project presentation template](https://artwork.openmainframeproject.org/other/open-mainframe-project/#open-mainframe-project-presentation-template) if desired )

*   Overview of the project and its purpose
*   How does this submission support the Open Mainframe Project Mission and Vision Statements?
*   What use cases/scenarios does the proposed solution address? 
    *   Why are these important to the platform? 
    *   Why are these important to the mainframe community?
*   Does the solution have any users? 
    *   How do you plan to attract users if accepted?
*   How many committers are you planning to have upfront, and from which companies? 
    *   How do you plan to attract committers and contributors if accepted?
*   Architecture (functional / non-functional aspects), design, feature overview
*   Demo

The TAC may consider the project for approval at the proposed stage during the meeting, provided there is a quorum of TAC voting members present. If there is not a quorum of TAC voting members present or if the TAC is not ready to consider the project for approval during the meeting, the TAC may consider discussing and/or voting on the project proposal via email or postpone the vote to a future meeting. An affirmative vote majority vote of the TAC is required to accept a new TAC Project.

# Stages

Every TAC Project is at a maturity level that aligns with the Stages defined below. At the time of the project proposal, it’s expected for the project to state its proposed stage. The TAC will consider initially accepting the project at the proposed stage, but if the TAC does not deem the project to meet the qualification of that stage it may consider the project for inclusion at a different stage instead.

## Sandbox Stage

Projects being submitted to the Open Mainframe Project at the sandbox level are intended to be the entry point for early-stage projects. Characteristics for projects at the Sandbox Stage maybe one or more of:

*   Early-stage projects that the Open Mainframe Project TAC believes warrant experimentation.
*   New projects that are designed to extend one or more TAC projects with functionality or interoperability libraries. In the case of Zowe, the Sandbox is intended as a home for projects that might in the future be considered for inclusion as a future squad.
*   Independent projects that fit the Open Mainframe Project mission/vision and provide the potential for a novel approach to existing functional areas (or are an attempt to meet an unfulfilled need).
*   Projects commissioned or sanctioned by the Open Mainframe Project, including initial code for Open Mainframe Project Working Group collaborations, and "experimental" projects.
*   Any project that really intends to join Open Mainframe Project Incubation in the future and wishes to lay the foundations for that.

### Requirements

To be accepted as a Sandbox Stage project, the project must complete the Proposal Process. 

### Benefits

The Sandbox Stage benefits are outlined below.

*   Neutral hosting of the project’s community and any key assets (e.g. trademark, domain, etc.).
*   Access to the Open Mainframe Project collaboration infrastructure ( including GitHub, JIRA, Confluence, mailing lists, Slack, forums ).
*   A sponsor from the TAC to assist the project in reaching the Incubation Stage and to facilitate collaboration with other project communities.
*   Right to refer to the project as a Sandbox Project of Open Mainframe Project, and an opportunity to participate in events and other collaborative activities sponsored by Open Mainframe Project.
*   Subject to applicable trademark usage guidelines, to display Open Mainframe Project’s logo on the project’s code repository.

### Expectations

Sandbox Stage projects should provide a quarterly report to the TAC outlining its progress on completing the requirements for the Incubation Stage. 

It’s expected that projects in the Sandbox Stage move to the Incubation Stage within one year. In the case of a Sandbox Stage project that is not renewed with Open Mainframe Project, the trademark and any other assets will be returned to the project maintainers or an organization they designate.

## Incubation Stage

A project at the Incubation Stage has begun to form a community and develop its scope and mission. Incubation Stage projects likely will have some adoption in testing or production use.

### Requirements

To be accepted to the Incubation Stage, in addition to the proposal process, a project must achieve the following requirements:

*   Have completed and approved the Technical Charter and agree to transfer any relevant trademarks to The Linux Foundation or its affiliate, LF Projects, LLC, and to assist in filing for any relevant unregistered ones.
*   Have defined its technical governance, including:
    *   A LICENSE file in every code repository, with the license chosen an OSI-approved license.
    *   A README file welcoming new community members to the project and explaining why the project is useful and how to get started ( follow the guidelines at the [README checklist](https://github.com/ddbeck/readme-checklist) to create an excellent README file ).
    *   A CONTRIBUTING file explaining to other developers and your community of users how to contribute to the project. The file should explain the types of contributions needed and how the process works.
    *   A CODEOWNERS or COMMITTERS file to define individuals or teams that are responsible for code in a repository; document current project owners and current and emeritus committers. 
    *   A CODE_OF_CONDUCT file that sets the ground rules for participants’ behavior associated and helps to facilitate a friendly, welcoming environment. By default, projects should leverage the Linux Foundation Code of Conduct unless an alternate Code of Conduct is approved prior.
    *   A RELEASE file that provides documentation on the release methodology, cadence, criteria, etc.
    *   A GOVERNANCE file that documents the project’s technical governance.
    *   A SUPPORT file to let users and developers know about ways to get help with your project.
*   Have achieved and maintained an [OpenSSF Best Practices Badge](https://bestpractices.coreinfrastructure.org/) at the ['passing' level](https://bestpractices.coreinfrastructure.org/en/criteria/0). 
*   Have had a successful license scan with any critical issues remedied.
*   An overview of the project’s architecture and features defined.
*   A project roadmap is defined, which should address the following questions.
    *   What use cases are possible now?
    *   What does the next year look like regarding additional features and use cases covered?
*   Community and contributor growth assessment
    *   The current number of contributors and committers, and the number of different organizations contributing to the project. 
        *   Generally, the TAC will look for 2 to 3 committers, but one committer may be acceptable for a high-quality project.
    *   Demonstrate a sustained flow of commits / merged contributions
    *   A credible plan for developing a thriving user community, particularly expanding the number of committers and contributors?
    *   Outline of the plan for the project to complete the requirements for Active Stage

Sandbox Projects may propose to be reviewed to move to the Incubation Stage at any time by creating a GitHub Issue to add to a future TAC meeting agenda ( minimum two weeks' notice required ) or may be moved to the Incubation Stage during its annual review. Projects should prepare a presentation outlining how they completed the Incubation Stage requirements.

### Benefits

Incubation Stage projects will constitute “TAC Projects” under the [Open Mainframe Project Charter](https://github.com/openmainframeproject/foundation/blob/master/CHARTER.md). Incubation Stage projects will receive the benefits outlined in the [Project Benefits by Stage](https://github.com/openmainframeproject/tac/blob/master/process/project_benefits_by_stage.md) document.

### Expectations

Incubation Stage projects should provide a quarterly report to the TAC outlining its progress on completing the requirements for the Active Stage. 

Every 12 months, each Incubation Stage project will be reviewed by the TAC to assess its progress towards graduating to the Active Stage. If the project has not met the requirements for graduating to the Active Stage, the TAC may renew the project at the Incubation Stage for another 12 months with a majority vote of the TAC. 

It is expected that Incubation Stage projects graduate to the Active Stage within 2 years from moving to the Incubation Stage. In the case of an Incubation Stage project that is not renewed with Open Mainframe Project, the trademark and any assets will be returned to the project maintainers or an organization they designate.

## Active Stage

Active Stage projects are considered mature projects that generally are ready for production use. Projects at this stage are focused on growing an ecosystem of users and are often being leveraged in vendor products or being used by end-users.

### Requirements

To be accepted at the Active Stage, a project must have completed the Incubation Stage requirements plus the following requirements:

*   Have committers from at least two organizations.
*   Have achieved and maintained an [OpenSSF Best Practices Badge](https://bestpractices.coreinfrastructure.org/) at the ['Gold' level](https://bestpractices.coreinfrastructure.org/en/criteria/2).
*   Demonstrable roadmap progress.
*   The sustained flow of commits / merged contributions.
*   A healthy number of public adopters identified within the project ( using an ADOPTERS.md page or having showcased on the project’s website ).
*   Elect or appoint a project lead to represent the project on the TAC.

Incubation Projects may propose to be reviewed to graduate to the Active Stage at any time by creating a GitHub Issue to add to a future TAC meeting agenda ( minimum two weeks notice required ) or may graduate to the Active Stage during its annual review. Projects should prepare a presentation outlining how it has completed the Active Stage requirements.

Both a ⅔ supermajority vote of the TAC and an affirmative majority vote of the Governing Board are required for a project to graduate to or be approved at the Active Stage.

### Benefits

Active Stage projects will be considered a “TAC top-level project” as defined in the [Open Mainframe Project charter](https://github.com/openmainframeproject/foundation/blob/master/CHARTER.md). Active Stage projects will receive the benefits outlined in the [Project Benefits by Stage](https://github.com/openmainframeproject/tac/blob/master/process/project_benefits_by_stage.md) document.

### Expectations

Active Stage projects should provide a bi-annual report to the TAC on if the project is still fulfilling the requirements for the Active Stage.

Active Stage projects will be reviewed annually by the TAC to determine if the project still meets the requirements for Active Stage. If the TAC deems the project does not meet the requirements for Active Stage it may be considered for Emeritus Stage if it meets the criteria.

## Emeritus Stage

Projects like products have lifecycles, and often in open source, the relevance for a given project over time can diminish. Nonetheless, having a home for projects no longer receiving active development is crucial for long-term sustainability and asset management.

Projects only can enter the Emeritus Stage by either:

*   On request from the project itself, requiring a ⅔ supermajority vote of all active project committers.
*   By a ⅔ supermajority vote of the TAC if there has been insufficient activity in the project for 6 months or if the project fails to move to the next stage within the expected time indicated in this document.

When in the Emeritus Stage, the project’s code repository administration is transferred to a designated individual by the TAC. No new features or bug fixes will be addressed unless it is deemed a security issue. Open Mainframe Project will hold all assets in perpetuity.

A project can move back to Active Stage following the guidelines for a project being accepted at the Active Stage above.
