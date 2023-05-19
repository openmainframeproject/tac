---
parent: infrastructure
title: Plan
---

# Mainframe Infrastructure Plan for Open Mainframe Project

* TOC
{:toc}

# Why we are doing this project

A common request from open-source projects wanting to support the mainframe is getting access to mainframe infrastructure. While in many architecture ecosystems, such infrastructure is readily available, for mainframe, it rarely is. Reasons include:

* Cost of infrastructure/software to acquire and host
* Infrastructure owned by vendors is limited to access for those vendor’s employees.
* Infrastructure owned by end users is in production usage and often disconnected from direct Internet access.

There have been efforts in the past, such as the [LinuxONE Community Cloud](https://linuxone.cloud.marist.edu/), but that effort was limited to just s390x Linux and not inclusive of z/OS.

As a vendor-neutral organization that provides a home for open source on the mainframe, having such hardware available for any open-source project is critical to the growth and sustainability of the open-source ecosystem on the mainframe. Furthermore, having an environment for testing and development helps identify security vulnerabilities that may be specific to the s390x architecture or z/OS operating system.


# Infrastructure being acquired

Broadcom has agreed to donate the following hardware at no cost to the Open Mainframe Project.  To use this hardware with the needed configuration to support all the current Open Mainframe Projects and allow for growth. There is a capability for hardware upgrades, as outlined below.


## IBM Z15-T02 model A02

Details at [Link to IBM documentation on the z15 8562-T02](https://www.ibm.com/common/ssi/ShowDoc.wss?docURL=/common/ssi/rep_sm/2/897/ENUS8562-_h02/index.html)


```
Product	Description	Qty	
8562-T02	IBM z15	1

137	Fanout Airflow PCIe	10
175	PCIe Fanout	2
421	PCIe Interconnect	2
426	OSA-Express6S 1000BASE-T 2 ports	4
427	FICON Express16S+ LX 2 ports	3
451	zHyperLink Express1.1 2 ports	1
505	Model T02	1
629	200-208V 30/60A, 3 Ph PDU	2
631	Ethernet Switch	2
649	Max4	1
666	CPC PSU	2
1500	64 GB Memory	1
1643	64 GB Mem DIMM (5/feat)	1
2271	CPC1 Reserve	1
3863	CPACF Enablement	1
4021	PCIe+ I/O Drawer	1
4039	A Frame Air	1
4800	CP-A	2
4853	2-Way Processor A02	1
5010	A02 Capacity Marker	1
6835	OPO Sales Flag	1
7899	Bottom Exit Cabling	1
7928	Top Exit Cabling w/o Tophat	1
7952	30A/250V 3Ph w/Hubbell	2
Serial: 0200472F8
```




<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")



## DS8K Storage System

**[Product detail DS8910](https://www.ibm.com/docs/SSHGBU_9.1.1/com.ibm.storage.ssic.help.doc/f2c_993overview.html)**


<table>
  <tr>
   <td colspan="2" >
<em>Product details</em>
   </td>
  </tr>
  <tr>
   <td>
<strong>Field description</strong>
   </td>
   <td>
<strong>Value</strong>
   </td>
  </tr>
  <tr>
   <td>
Description
   </td>
   <td>
MACHINE TYPE 5334 - Model NEW
   </td>
  </tr>
  <tr>
   <td>
Type-model
   </td>
   <td>
5334-993
   </td>
  </tr>
  <tr>
   <td>
Serial number
   </td>
   <td>
75LAV50
   </td>
  </tr>
  <tr>
   <td>
System type-number
   </td>
   <td>
5334-9A0D49K
   </td>
  </tr>
  <tr>
   <td>
Category
   </td>
   <td>
Hardware
   </td>
  </tr>
  <tr>
   <td>
Status
   </td>
   <td>
Installed
   </td>
  </tr>
  <tr>
   <td>
Lease/purchase
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
Install date
   </td>
   <td>
23 Jul 2020
   </td>
  </tr>
  <tr>
   <td>
Discontinuance date
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
Warranty expiration date
   </td>
   <td>
22 Jul 2024
   </td>
  </tr>
  <tr>
   <td>
Using customer number
   </td>
   <td>
0935393
   </td>
  </tr>
  <tr>
   <td>
Maintenance customer number
   </td>
   <td>
0935393
   </td>
  </tr>
  <tr>
   <td>
Owning customer number
   </td>
   <td>
6040257
   </td>
  </tr>
  <tr>
   <td>
Contract status
   </td>
   <td>
On warranty without MA
   </td>
  </tr>
  <tr>
   <td>
Billing option
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
Billing option end date
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>
Proof of entitlement
   </td>
   <td>
   </td>
  </tr>
</table>


 


<table>
  <tr>
   <td colspan="3" ><em>Installed features</em>
   </td>
  </tr>
  <tr>
   <td><strong>Qty</strong>
   </td>
   <td><strong>Feature</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>0798
   </td>
   <td>0798-25.1 TB to 50 TB capacity
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>0934
   </td>
   <td>IBM System z Indicator
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>0939
   </td>
   <td>Customer Rack Field Merge
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>0991
   </td>
   <td>0991-Remote code load
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1038
   </td>
   <td>SPP208v30ANEMAL6-30P
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1103
   </td>
   <td>Kick Step
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1303
   </td>
   <td>1303-I/O enclosure pair PCIe 3
   </td>
  </tr>
  <tr>
   <td>8
   </td>
   <td>1420
   </td>
   <td>1420-9 um Fibre cable LC
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>1450
   </td>
   <td>40m zHyperlink cable
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1604
   </td>
   <td>HPFE Gen 2 adapter card
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1605
   </td>
   <td>HPFE Gen 2 enclosure pair R9
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1622
   </td>
   <td>1.92 TB High cap flash
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>1699
   </td>
   <td>1699-Flash enclsr filler set
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1765
   </td>
   <td>1U Keyboard-Display
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>1890
   </td>
   <td>1890-DS8000 LMC R9.0
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>3453
   </td>
   <td>16 Gb 4 port LW FCP/FICON
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>3500
   </td>
   <td>zHyperlink adapter
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>4341
   </td>
   <td>8 core processor pair ind
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>4450
   </td>
   <td>192GB Sys Cache (8 core)
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>8151
   </td>
   <td>BF - Up to 100 TB capacity
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>8300
   </td>
   <td>zsS - Active
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>8351
   </td>
   <td>zsS - Up to 100 TB capacity
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>AGAJ
   </td>
   <td>Shipping and handling 993
   </td>
  </tr>
</table>




18TB usable storage and can go to 62TB without expansion frame.


## Virtual Tape System 

VTS 3957 VEB.Details at [https://www.ibm.com/common/ssi/ShowDoc.wss?docURL=/common/ssi/rep_sm/4/872/ENUS3957-_h04/index.html](https://www.ibm.com/common/ssi/ShowDoc.wss?docURL=/common/ssi/rep_sm/4/872/ENUS3957-_h04/index.html)



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")



# Activation Plan

To accommodate the current Open Mainframe Project budget constraints, as well as able to accept the hardware donation before Broadcom needs to get the hardware out of its current data center by the end of the calendar year, the plan is to split the plan into two parts:

1. Move current hardware from Broadcom to Marist College.
2. Announce hardware donation and intention to activate
3. Install and activate the hardware
4. Plan for opening infrastructure for community use.

## Phase 1: Move current hardware from Broadcom to Marist College - COMPLETE

Moving the hardware is done as a service through IBM. Vicom Infinity, on behalf of IBM. This was completed in 2022 Q2.

## Phase 2: Announce hardware donation and intention to activate - COMPLETE

This was done at Open Mainframe Summit 2023, with the intent of driving more interest in funding.

[The Open Mainframe Project Announces A New Mainframe Resource to Advance Mainframe Talent and Innovative Technologies - Open Mainframe Project](https://www.openmainframeproject.org/press/2022/09/21/open-mainframe-announces-new-mainframe) 

## Phase 3: Activate hardware.

Upon the Open Mainframe Project’s request, IBM will provide activation services, including unpacking and installing the hardware. Once complete, Vicom Infinity will then configure the infrastructure for use by the Open Mainframe Project community.

### Hardware Configuration

* z/VM LPAR
    * z/OS Guest(s) - for individual projects
    * VSEⁿ Guest(s) - for individual projects - FUTURE
    * Linux Guest(s) - for individual projects
    * z/VM Guest(s) - for individual projects
    * z/OS Guest - Sandbox ( maintenance and updates )
    * z/OS Guest - COBOL Programming Course
        * OMP COBOL system being used today
            * z/OS V2.4 running as a guest of z/VM on a z14
            * 1 CP assigned
            * 8 GB processing memory
            * 50 GB of participant usable disk storage
            * Enterprise COBOL V6.4
            * Db2 V12
            * CICS V5.5
            * z/OSMF for VSCode Zowe CLI connections
            * Public IP connection
        * Project to maintain
            * Needs registration system
            * Needs predefined user IDs to be assigned by registration system
            * Needs on-going system administration
    * z/OS Guest - Mainframe Open Education - FUTURE
    * z/OS Guest - CBT Tape
        * Current Configuration ( mirror here )
            * Model T02 with 2 general purpose processors (no zIIPs)
            * High Real Storage 8GB
            * Approx 500GB of DASD (2 EAV, 2 3390-3, 28 3390-9)
                * This does not include any SMP/E volumes used by Vicom
            * Current access is via TN3270 TLS on port 992 or SSH on port 2022
        * Add Virtual Tape
    * z/OS Guest - Zowe (ON HOLD)
* KVM LPAR - FUTURE
    * Linux Guest(s) - for individual projects as requested

#### Capacity

* 30 combined z/OS or Linux Guests altogether
    * Based on A02 configuration with 2 IFLs and 4 processors
    * Proposed Z02 configuration 

#### Other considerations

* zIIPs (specialty engines) - FUTURE
    * Is there a project that requires or could exploit zIIPs?  I would wait for the demand
    * Consider if we get more than 4 CPUs enabled
    * Also might be helpful for Python and z/OSMF-related work
    * Can designate at a later time
* Root passwords stored in a secure vault
* Carving up storage array across LPARs/Guests
    * Aim for a consistent solution across everything

### Software Availability

* z/OS 
    * z/OS 2.5.0 ( to be replaced by 3.1 once released )
    * [z/OS Remote Development Program - V2R5 Standard Configuration](http://dtsc.dfw.ibm.com/MVSDS/'HTTPD2.MVS20.HTML(ZOS25)') 
    * FUTURE: Add software from Broadcom
* Linux
    * RHEL 8 and 9
    * SUSE Enterprise Linux 15
    * Ubuntu 22.04 LTS
    * openSUSE latest
    * Fedora latest
    * Debian 11 (latest version)
    * Alma Linux latest

When new versions of software come out, we will stop provisioning the previous version after six months, unless approved by the TAC on a case-by-case basis. Existing instances with previous versions will be required to update to the latest version after 18 months unless approved by the TAC on a case-by-case basis. 

## Phase 4: Plan for opening infrastructure for community use.

This hardware is intended to be used for the development and testing of open-source projects for the mainframe. At launch, the infrastructure will support z/OS and s390x Linux but could include other mainframe operating systems over time.

### Onboarding

Open Source project will be onboarding in 3 phases:

1. Current Open Mainframe Project hosted projects ( i.e., Zowe, Feilong, COBOL Programming Course ) that either have no current infrastructure or use other third-party infrastructure. 
2. Select broad open source projects ( suggested no more than 10 ) to ensure the hardware properly supports those needs.
3. Any open source project which expresses interest in leveraging such infrastructure.

The TAC can determine the specific timeline for each phase of onboarding.

### Requirements for projects to leverage the hardware

Because of the nature of the hardware and licensing requirements for the software being used, the TAC will establish a program for open-source projects to leverage the hardware. 

#### Standard Resources

Projects will be allotted a standard configuration as follows (exceptions CBT Tape, COBOL Programming Course, Zowe - those are highlighted above):

* Guest under z/VM or KVM LPAR ( z/OS, z/VM, Linux )
    * Linux distros: SUSE/openSUSE, Red Hat/Alma Linux, Ubuntu - latest versions
* 2 Virtual CPUs
    * Enable SMT for Linux
* 8GB RAM
* SSH/SCP/SFTP access for z/OS and Linux ( via VPN? )
    * Prefer SSH without VPN on a unique port
    * The CBTTape LPAR uses port 2022 without VPN
* TN3270 access for z/OS and z/VM ( via VPN? )¸
    * Prefer TN3270 without VPN on a unique port
    * The CBTTape LPAR uses port 992 with TLS without VPN
* Disk Space: 128GB
    * Can scale up as needed and approved by the TAC
    * It is recommended that DASD not be shared between systems for user data but the sharing of system volumes (i.e. sysres) may be desirable. 

Note: Requiring VPN will require the administration to distribute the VPN client, troubleshoot the VPN connection/client, and maintain the VPN credentials (userid/password). This will come with a cost.

Projects may be able to have additional resources upon request and approval by the TAC.

#### Application requirements for open source projects

To join the program, open-source projects must complete an application to be considered. Application will be submitted at https://github.com/openmainframeproject/tac/issues

* Name of project
* URL to code repository
* Project License
* Names of primary maintainers/project leads
* Architectures/operating systems currently supported
* Why are you interested in supporting the mainframe?
* Support z/OS, Linux on s390x, or both?
* Resources requested outside of the standard resources provided ( to be defined ).
* Will the infrastructure be needed for only a fixed period of time, or ongoing?
* Any other comments or questions

#### Ongoing requirements

Projects will have a few requirements ongoing to maintain the infrastructure.


#### Service provider needs

* Ticketing system for user issue management - will use https://github.com/openmainframeproject/tac/issues
* Path for resources being returned - TBD by service provider

# Support

Expectations of the service provider:

* Provision/de-provision guests
* Overall systems resource management
* Infrastructure maintenance
* Documentation of infrastructure ( will be hosted in this site )

Expectations of the individual project:

* Define who specifically will have access to the mainframe. Credentials are to be shared via a secure vault.
* Management of thier own guest instances. The only support than can be provided by the Open Mainframe Project is to re-provision, but there may be community members that can assist with guest instance issues on a case-by-case basis.
* Annual report of how the infrastructure is being used and any feedback.

## How to submit support requests

Projects using the infrastructure can submit support requests to https://github.com/openmainframeproject/tac/issues. Service Provider will respond to issues within 1 business day.

# APPENDIX: Future Expansion Possibilities ( not part of the current plan )

The current system as delivered supports four processors (Feature A02).  Depending on initial and anticipated workloads, the system will likely require additional processors to support multiple workloads by different projects. We would want to do some analysis of the system over time to come up with better recommendations.

An initial SWAG at potential considerations for additional processing resources are


## 2 additional GCPs

_Rationale - _This will allow 4 GCPs to support workload across various z/OS partitions.  The additional GCPs would enable the creation of z/OS instances and coupling facilities to enable true SYSPLEX environments such that services like API ML from Zowe can be configured and tested in high availability modes.  

It could be alleviated with faster processors; not an immediate issue but something to consider in the future. Hardware upgrade required to Max13


## Activate ZIIP processors

_Rationale - _These processors are used in z/OS LPARs for the execution of Java and other non-z/OS workloads, which in general, reduces the MSUs rated for the box.  These will be needed when configuring zCX partitions to run workloads inside z/OS and support Java-based workloads in z/OS.

Only critical for OpenShift workloads, microcode upgrade.


## 8 IFLs

Given the importance of zLinux as a workload and that the workloads run there are generally more cloud-like IFLs would allow for a variety of Linux instances that could run K8s clusters with OCP as general/traditional Linux instances.

Nice to have would be a microcode upgrade.


## Memory

Additional memory will be based on the required workloads and initial estimates.  We need to consider the additional memory cost at the initial startup versus asking for additional resources later on, which can incur higher installation costs by service personnel.


## Storage

The DS8K appears to have 18 TB of storage across 16 drives.  The available storage will depend on the base setup and RAID options.  

The CBT LPAR is currently using 365GB for reference and is in need of an estimated 20-30GB additional.

FCP to look at in the future.
