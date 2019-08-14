# Full S390x JIT support for LuaJIT

## Description
The [LuaJIT](https://github.com/LuaJIT/LuaJIT) project has been unmaintained for some time and there is a [fork](https://github.com/siddhesh/LuaJIT) that has been incorporating fixes and features, including s390x support.  The s390x support for LuaJIT is functional and incorporated into Fedora.  However, only a subset of the builtin testsuite runs due to the support being likely incomplete.

This project will involve the following tasks:

  * Study the testsuite results and find out missing tests
  * Isolate unimplemented features that would enable those tests
  * Implement features and ensure that tests pass
  * Iterate until testsuite state is similar to x86_64 or arm64.

## Additional Information
  * [Current CI Results for x86_64](https://ci.linaro.org/job/luajit-siddhesh/label=docker-jessie-amd64/23/console)
  * [Current CI Results for s390x](https://ci.linaro.org/job/luajit-siddhesh/label=jit-s390x/23/console)

## Desirable Skills
  * Familiar with compilers and/or JIT
  * Comfortable in C and s390x assembly programming

## Expected Outcome
  * Same number of tests run and pass as x86_64

## Difficultly
Medium

## Mentors
  * Siddhesh Poyarekar <siddhesh@gotplt.org>

## Additional Contacts
  * luajit@freelists.org
