---
has_children: true
title: Mainframe Access
---

# Mainframe Access for Open Source Projects

Open Mainframe Project hosts a mainframe environment for open-source projects that wish to support the mainframe architecture. The current hardware is an IBM z15, and projects can get a guest instance for either running Linux or z/OS.

*NOTE: The current status of the Mainframe being activated is being tracked [here](https://github.com/openmainframeproject/tac/issues/596)*

## How to request mainframe resources

Please [create a request](https://github.com/openmainframeproject/tac/issues/new/choose) to request mainframe resources. Applications are reviewed regularly and subject to TAC approval. 

## How to request support

Please [create a support request](https://github.com/openmainframeproject/tac/issues/new/choose) for any issues with your mainframe resources. Note that the Open Mainframe Project does not support specific issues inside a provided instance; in those cases, the instance can be reset to the default image.

## Resources available

The base offering is as follows:

* Guest under z/VM or KVM LPAR ( z/OS, z/VM, Linux )
    * Linux distros: SUSE/openSUSE, Red Hat/Alma Linux, Ubuntu - latest versions
* 2 Virtual CPUs
    * Enable SMT for Linux
* 8GB RAM
* SSH/SCP/SFTP access
* TN3270 access
* Disk Space: 128GB

If there are other requirements, those cases be specified in the application.
