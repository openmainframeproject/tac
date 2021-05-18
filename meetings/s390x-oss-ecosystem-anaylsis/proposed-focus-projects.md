---
nav_exclude: true
---

# Proposed focus open source projects

## Projects with mentors

### Julia

* Mentor: David Edelsohn suggested https://www.linkedin.com/in/claudefalbriard/; John reached out
* Background of issues:
  * https://github.com/JuliaLang/julia/issues/29637

### TensorFlow
* Mentor: Enyu/Cindy
* Background of issues:
  * https://github.com/linux-on-ibm-z/docs/wiki/Building-TensorFlow
  * https://github.com/tensorflow/tensorflow/issues/25283

### rust
* Mentor: Possibly ulrich.weigand@de.ibm.com
* Background of issues:
  * Does compile on s390x Linux, but not optimized for Z architecture features
  * also z/OS port non-existent - https://www.reddit.com/r/rust/comments/8w9xjq/rust_on_zos/

### papi
* Mentor: Dan Horak
* Background of issues:
  * https://bugzilla.redhat.com/show_bug.cgi?id=1136331

## Needing mentors

### PHP JIT/HHVM
* Mentor: ???
* Background of issues:
  * https://github.com/linux-on-ibm-z/docs/wiki/Building-PHP
  * https://bugs.php.net/bug.php?id=73121
  * https://bugzilla.redhat.com/show_bug.cgi?id=1636032
  * https://github.com/facebook/hhvm/issues/6262

### elk
* Mentor: ???
* Background of issues:
  * http://elk.sourceforge.net/
* Scientific tool

### pcc
* Mentor: ???
* Background of issues:
  * http://pcc.ludd.ltu.se/
* gcc covers most use cases, but good for someone into compliers

### reptyr
* Mentor: ???
* Background of issues:
  * https://build.opensuse.org/package/live_build_log/openSUSE:Factory:zSystems/reptyr/standard/s390x
* https://github.com/nelhage/reptyr

### dpdk
* Mentor: ???
* Background of issues:
  * Broken all distros, but seems to have build instructions ( https://github.com/linux-on-ibm-z/docs/wiki/Building-DPDK )
  * https://mails.dpdk.org/archives/dev/2019-April/129880.html
  * Needs arch specific compiler code
  * Current patches -> https://patches.dpdk.org/project/dpdk/list/?series=&submitter=1273&state=*&q=&archive=&delegate=,

