---
title: Substeps | IntelliJ Integration
layout: documentation
---

IntelliJ
========

The Substeps plugin for IntelliJ can be downloaded from [here](https://github.com/iantmoore/substeps-intellij-plugin/releases)

Requirements
------------
- IntelliJ 15 (Community or Ultimate) running with JDK 8 see [here](https://intellij-support.jetbrains.com/hc/en-us/articles/206544879-Selecting-the-JDK-version-the-IDE-will-run-under) for more details.
- A Substeps project and step implementation libraries built with substeps.org.

Features
--------
- Basic Syntax highlighting
- Code completetion / suggestion
- 'Go to Step definition' navigation to steps and step implementations
- Outline views of features
- Run individual features or scenarios (using default configurations) including display of the steps, scenarios etc passed
- Debug features or scenarios (NB. breakpoints and stepping capability only in Java code, not at the feature / step level)
- Comment toggle over multiple lines
- Quick Documentation - bring up the javadocs and example usage for step implementations (if present)


Installation
------------
- Download the plugin zip from [here](https://github.com/iantmoore/substeps-intellij-plugin/releases).
- Within IntelliJ, File, Settings, Plugins
- Untick Cucumber and Gherkin plugins (to avoid collisions with file associations)
- restart IntelliJ
- navigate to the plugins page again, choose 'Install plugin from disk..'  locate the zip file downloaded above and install.
- restart

To upgrade to new versions, uninstall the old substeps plugin, restart, install the new one, restart.


On the backlog!
---------------
- central hosting (this will make upgrades easier)
- highlighting of errors
- Suggestions to fix errors (Alt + Enter -> create step definition / create step implementation)
- enable flexibility around run configurations, ie pass in other settings
- Improve reliability of 'Go to Step definition' - sometimes gets confused!
- navigation from the test runner output to code
- fix up the stats around what's run and what hasn't
- highlighting of comments at the end of the line
- allow user configurable colours
- clearer icons (Help!)
- highlighting and validation of parameters in Outline scenarios, example blocks and step definitions
- upload to IntelliJ's plugin repository
- .... and more....


Suggestions, issues, pull requests all welcomed.  If you find an issue and would like to report it, it would be a great help if you could enable logging first and then reproduce.

add the following to $IDEA_HOME/bin/log.xml with a suitable appender-ref

    <logger name="uk.co.itmoore" additivity="false">
        <level value="TRACE"/>
        <appender-ref ref="FILE"/>
    </logger>
)

