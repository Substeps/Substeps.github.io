---
title: Substeps | Configuration
layout: documentation
---

Configuration
=============

Substeps uses a number of config files to be able to control environment specific settings.  This can be useful for urls, usernames, passwords etc.

The config files use [typesafe config](https://github.com/typesafehub/config "Typesafe config"), properties can be combined, reference other properties, include other config files and be overridden by environment variables.  See the docs on Github for more details and examples.

Prior to v1.0.4, Substeps used .properties for configuration, Typesafe config can also use such files albeit with less functionality compared to the .conf files.  If you wish to continue using .properties files you can, pass `-Dsubsteps.use.dot.properties=true` as a VM property to the tests.  

Config files should be placed on the project classpath under `src/main/resources` or `src/test/resources`.  

The file to be used is specified as a JVM environment variable thus:
`-Denvironment=<name of property file>`  
eg. `-Denvironment=uat` to refer to uat.conf.


