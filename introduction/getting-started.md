---
title: Substeps | Getting Started
layout: documentation
---

Getting Started with Substeps
=============================

Prerequisites
-------------
Substeps currently requires 

* JDK 1.8.
* Maven 3 (or equivalent dependency management eg SBT or Ivy).
* The IntelliJ plugin (optional) depends on 2016 (Community or Ultimate) and also needs to run with Java 8.
* The webdriver substeps library has additional dependencies, see [here](../webdriver/introduction)



Depending on your background and experience, there are two routes to setting up a Substeps project.

The easiest way is to download the example project and perform a few customisations and you'll be up and running.  
Alternatively you can include the relevant configuration and dependencies by hand.

Example project
---------------
The Example project can be downloaded from [here](https://github.com/Substeps/substeps-example/releases "Substeps example project releases").  
Download and extract the contents into a folder.

The example project can be run as is with Maven from the command line by running `mvn clean verify` from the root of the project.

You should see Maven run the Substeps suite of 'self tests', with the HTML test report produced in 
`target/substeps_report/report_frame.html`.  The report also includes usage details (for ongoing maintenance of the test pack) and a glossary of step implementations in scope  

### Example Report ###
A sample test execution report is included [here](../../substeps_report/report_frame.html), this includes a failing test for illustattive purposes.


### Starting development using the example project 

If the example project is to be used as the starting point for a substeps based project you may wish to modify the following in `pom.xml`

```xml
line
1    <?xml version="1.0" encoding="UTF-8"?>
2    <project xmlns="http://maven.apache.org/POM/4.0.0" ....
     ...
11   <groupId>org.substeps</groupId>       <--- replace with your organisation
12   <artifactId>webdriver-substeps-example</artifactId>   <--- a project identifier
     ...
16   <name>Webdriver Substeps Example</name>   <--- project name
17   <description>An example webdriver substeps project</description>  <---- project description
     ...
149  <reportTitle>Example Substeps Report - ${project.version}</reportTitle>   
                <--- the title that appears on the acceptance tests report
     ...
```

You can now start writing new features and implementing them in substeps!

### Learn more about
* [Importing projects into IntelliJ and using the plugin](../intellij-integration/)
* [implementing custom step implementations](../customisation/)
* documentation and execution reports
* integration with CI

