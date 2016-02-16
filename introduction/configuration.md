---
title: Substeps | Configuration
layout: documentation
---

Configuration
=============


Substeps uses a number of properties files to be able to control environment specific settings.  This can be useful for urls, usernames, passwords etc.  

Properties files should be placed on the project classpath under `src/main/resources` or `src/test/resources`.  

The file to be used is specified as a JVM environment variable thus:
`-Denvironment=<name of property file>`  
eg. `-Denvironment=uat` to refer to uat.properties.


