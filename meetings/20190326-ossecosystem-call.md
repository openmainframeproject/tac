# OSS ecosystem on s390x

Focus is on broad open source, not Z specific open source.

## Definitions

z/VM is a hypervisor
CMS is an OS always provided with z/VM
z/OS is an OS
Linux on Z or z/Linux is Linux OS running on the s390x architecture

## Challenges/problems

Issues are common across z/Linux and z/OS

- Private patches/fixes to mainframe compatibility, may not be upstreamed ( either by choice or community not wanting to accept the patches ).
-- Situation a bit better on z/Linux, but still challenges in getting patches upstreamed into versions shipped by distro vendors.
- Hardware access. CI and/or build infrastructure not often available for Z ( better for z/Linux right now than z/OS ), and those Z instances might not have all the right hardware available.
- Cost to community to support a different architecture can be a challenge. Can be a challenge on having developer expertise in the project.
- Takes time to build trust. Communities want sustainable investment.
- Impedance mismatch - Z world might be solving a problem not relevant to the general project.
- Software design too tied to a specific architecture or the characteristics of a specific architecture ( scale out, cheap RAM/CPU, NUMA ).

## How to identify projects that work or don't work

### z/Linux

- Fedora: https://lists.openmainframeproject.org/g/omp-tsc/message/483
- ClefOS: https://lists.openmainframeproject.org/g/omp-tsc/message/484
- SUSE: https://lists.openmainframeproject.org/g/omp-tsc/message/485

### z/OS


### z/VM and CMS



## Chat Logs

### 2019-03-26

13:01:14	 From John Mertic : https://www.ibm.com/developerworks/community/forums/html/topic?id=5dee144a-7c64-4bfe-884f-751d6308dbdf
https://github.com/linux-on-ibm-z
https://www.rocketsoftware.com/zos-open-source
13:18:23	 From John Mertic : https://www.ibm.com/developerworks/community/forums/html/topic?id=5dee144a-7c64-4bfe-884f-751d6308dbdf
https://github.com/linux-on-ibm-z
https://www.rocketsoftware.com/zos-open-source
13:27:50	 From Mike MacIsaac : From my viewpoint, the biggest barrier to open source on z/VM and zLinux is lack of access to the hardware.
If you need a first level z/VM, with MAINT access, it is near impossible to get.
If people don't have access to the hardware/hipervisor env't, they cannont contribute.
13:30:27	 From Mike Friesenegger : I agree with Mike.  I was writing the following that states my opinion.  John mentioned that there is no foundation or group that has to think about open source software running on x86.  I believe this because access to x86 systems are easy and the lack of access to s390x hardware is a large barrier to adoption.
13:31:16	 From Rick Troth : Second that. (or ... third?)
13:31:51	 From Rick Troth : There are a limited number of places one can get guest access (to z/VM guests or similar).
13:31:58	 From Rick Troth : The elephant in the room is ...
13:32:02	 From Rick Troth :  ... dare I say it?
13:33:55	 From Rick Troth : Hercules
13:34:57	 From Ingo Adlung : I agree. And we might want to also distinguish between „general“ software, and „system affine“ software. The first one might „just“ want to recompile, or adjust where endianness and similar issues pop up. And there is „system affine“ software which either assumes the availability of specific hardware, or build on data that can be found in one of Linux’ pseudo file-systems, and might be x86 specific and/or s390x unique
13:37:33	 From Ingo Adlung : And when considering AI or more general speaking analytics software we may even face inline optimisations not available for s390x and/or explicit endianness issues.
13:49:50	 From Mike MacIsaac : IBM will not allow z/VM on Hercules
13:53:04	 From Ingo Adlung : scale-out versus scale-up assumptions … software might run, but might not run cost efficiently …
13:54:04	 From Ingo Adlung : e.g. kubernetes workload scheduler, or Mongo sharding and data replication approach
13:56:04	 From Len Santalucia : Cassandra and Scylla DB designed around the lower availability of x86 writing three copies each write. After working with them IBM Z was able to get these DBs to perform more cost effectively
13:56:35	 From Mike Friesenegger : z./vm Cloud Connector?
13:58:33	 From Ingo Adlung : what about the Cloud Connector, Mike?
13:59:33	 From Mike MacIsaac : Ingo, we can talk offline
13:59:59	 From Mike MacIsaac : My phone is 862-308-5089 if you want to talk
