# Proposed focus open source projects

## High priority

### Julia

* https://github.com/JuliaLang/julia/issues/29637

### TensorFlow
* https://github.com/linux-on-ibm-z/docs/wiki/Building-TensorFlow
* https://github.com/tensorflow/tensorflow/issues/25283

### rust
* https://build.opensuse.org/project/show/devel:languages:rust
* Now working cargo 1.33 ( package manager )
* looks like it's not optimized for Z currently
* also z/OS port non-existent - https://www.reddit.com/r/rust/comments/8w9xjq/rust_on_zos/
* Engage ulrich.weigand@de.ibm.com as he is the current IBM expert on Rust

### PHP JIT/HHVM
* https://github.com/linux-on-ibm-z/docs/wiki/Building-PHP
* https://bugs.php.net/bug.php?id=73121
* https://bugzilla.redhat.com/show_bug.cgi?id=1636032
* https://github.com/facebook/hhvm/issues/6262

## Low priority

### elk
* http://elk.sourceforge.net/
* Scientific tool

### papi
* https://bugzilla.redhat.com/show_bug.cgi?id=1136331

### pcc
* http://pcc.ludd.ltu.se/
* gcc covers most use cases, but good for someone into compliers

### reptyr
* https://build.opensuse.org/package/live_build_log/openSUSE:Factory:zSystems/reptyr/standard/s390x
* https://github.com/nelhage/reptyr

## Needs more research

### clisp ( maxima )
* http://git.savannah.gnu.org/gitweb/?p=libffcall.git;a=blob_plain;f=porting-tools/emulation/qemu-s390x.txt
* https://sourceforge.net/p/clisp/mailman/message/36005105/
* Could be mismatch of clisp tool

### dpdk
* Broken all distros, but seems to have build instructions ( https://github.com/linux-on-ibm-z/docs/wiki/Building-DPDK )
* https://mails.dpdk.org/archives/dev/2019-April/129880.html
* Needs arch specific compiler code
* Needs input from Enyu/Cindy on the status

## In progress

### luajit
* https://github.com/LuaJIT/LuaJIT/pull/395
* https://github.com/linux-on-ibm-z/docs/wiki/Building-LuaJIT
* https://github.com/LuaJIT/LuaJIT/pull/395#issuecomment-484036548
* https://github.com/siddhesh/LuaJIT/tree/v2.1
* Work being done in community, will provide CI infra once Marist infrastructure
