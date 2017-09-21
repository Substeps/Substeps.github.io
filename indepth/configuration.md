---
title: Substeps | In depth | Configuration
layout: documentation
---

Configuration
=============

Substeps uses a number of config files to be able to control environment specific settings.  This can be useful for urls, usernames, passwords etc.

The config files use [typesafe config](https://github.com/typesafehub/config "Typesafe config"), properties can be combined, reference other properties, include other config files and be overridden by environment variables.  See the docs on Github for more details and examples.

Prior to v1.0.4, Substeps used .properties files for configuration, Typesafe config can also use such files albeit with less functionality compared to the .conf files.  If you wish to continue using .properties files you can, pass `-Dsubsteps.use.dot.properties=true` as a VM property to the tests.  

In v1.1.0, the configuration of Substeps was rebuilt, still using Typesafe config, but support for .properties files was dropped.  *All* substeps configuration is located in config files.  Config previously specified in the maven pom.xml has been moved. If you're interested, see the notes on 1.1.0 Upgrade for the reasons why.

Config files should be placed on the project classpath under `src/main/resources` or `src/test/resources`.  

### Configuration loading and resolving
This process follows a number of steps, building on standard behaviour of Typesafe config.

- Reference.conf is loaded from any libraries (substeps and webdriver-substeps included).  These are the default settings

- Application.conf is loaded from the project and overlays reference.conf values.  see typesafe docs for how to change the filename loaded at this point.

- An environment override config file is then loaded to overlay the previous two sets, the environment is specified as an environment property (defaulting to localhost):

`-Denvironment=<name of property file>`  eg. `-Denvironment=uat` to refer to uat.conf.

- Finally a set of maven properties is constructed and injected in to allow maven like parameters (`${project.build.testOutputDirectory)`) to be used and expanded.

- The configuration format specifies a `baseExecutionConfig` section plus multiple `executionConfigs`.  For each iteration of execution, the executionConfig in question is extracted and used to override the baseExecutionConfig.  The remaining config, plus the final executionConfig is passed to the runner to perform the actual tests.

- Sounds complicated ?  maybe so.. the intention is to reduce the amount of boiler plate config that was required and maximise re-use, whilst providing the ability to tweak aspects of executions (eg. tags, timeouts, drivers).

- The previous interfaces to the configuration have been maintained, however the actual values are lo longer held as an enum and thus can be reloaded with different values.

## A typical project configuration

Most projects won't need to override all of the possible settings, below is a typical application.conf (that also includes some keys from webdriver-substeps for illustrative purposes).
  
The example below has two executionConfigurations that would be executed sequentially and differ in the webdriver related keys, description and output directories

``` conf
org.substeps.config {
    description="Self Test Features"
    checkForUncalledAndUnused=true

    glossary{
        excludeStepImplementationClassNames=[
            "org.substeps.webdriver.TestWebdriverStepImplementations"
        ]
    }
}

org.substeps.baseExecutionConfig {
    featureFile=${project.build.testOutputDirectory}"/features"
    stepImplementationClassNames=[
        "com.technophobia.webdriver.substeps.impl.BaseWebdriverSubStepImplementations",
        "org.substeps.webdriver.TestWebdriverStepImplementations"
    ]
    substepsFile=${project.build.testOutputDirectory}"/substeps"
    tags="@visual"
}

org.substeps.executionConfigs=[
    {
        dataOutputDir="1"
        description="Chrome Self Test Features"

        webdriver {
            remote.driver.base.capability=chrome
            remote.driver.version=48.0
        }
    },
    {
        dataOutputDir="2"
        description="Firefox Self Test Features"

        webdriver {
            remote.driver.base.capability=firefox
            remote.driver.version=45.0
        }
        nonFatalTags="fails-in-firefox"
    }
]
```

### Add your own configuration

Additional keys and values can be added to the configuration to suit your needs.  If the configuration is self contained, add under a specific namespace

```conf
com.org.project{
    a.b.c="21"
}
```

or weave into the Substeps config if configuration values has default values that can be overridden in execution configs

```conf
org.substeps.baseExecutionConfig {

    com.org.project.somekey="abc"
}

org.substeps.executionConfigs=[
    {
        //  com.org.project.somekey="abc" // inherited from the baseExecutionConfig
    },
    {
        com.org.project.somekey="overridden"
    }
]

```


## Complete Substeps core config
Below is the full set of configuration items used by the Substeps framework combining the default reference.conf and application config files, this can be found in [github](https://github.com/Substeps/substeps-webdriver/blob/master/src/test/resources/annotated.conf)

```conf
# An annotated example of Substeps config

org.substeps.config {

  current {
    branchname=""   // automatically populated by JGit, if using git
    projectversion=""  // automatically populated via maven
  }

  description="Substeps test suite"  // name of the whole test suite

  executionResultsCollector="org.substeps.report.ExecutionResultsCollector"
    // class responsible for collecting execution result data

  jmxPort=9999  // JMX port used when Substeps run in forked mode

  log.unused.uncalled=false
  // when set to true, uncalled and unsued steps and step impls are logged
  // can lead to spurious results if running a set of tags or specific scenarios

  parameter.substitution {
    enabled=true    // allows ${} syntax in steps and scenarios
    start="${"      // token delimiters used for the expression
    end="}"

    normalizeValue=false  // if true then values located will be converted from one charset to another
        // useful when the config files contains accented characters pasted in

    normalize {
      from=ISO-8859-1   // the from charset
      to=UTF-8          // converted to..
    }
  }


  report {
    data {
      base.dir=target   // legacy value to specify root location of report
      pretty.print=false  // pretty print report json
    }
    rootNodeDescriptionProvider="org.substeps.report.DefaultDescriptionProvider"
      // class to describe the root level node in the report
  }

  reportBuilder="org.substeps.report.ReportBuilder"
    // class that builds the report

  reportDir="target/substeps_report"
    // directory in which to build the report

  rootDataDir="target/substeps-data"
    // directory in which to write results into, and for the report builder to pick up from


  runTestsInForkedVM=false   // run the substeps in a forked VM ?

  step.depth.description=6   // beyond 6 deep, the Junit runner won't render a description

  glossary{
    // list of step impls not to be included in the glossary - generally test step impls that might be written to aid the testing of the tests, but not shippable..
    excludeStepImplementationClassNames=[
      "org.substeps.webdriver.TestWebdriverStepImplementations"
    ]
  }
}


org.substeps.baseExecutionConfig {
  // all execution configs (below) inherit this config.  These properties can be overriden in any of the
  // executionConfigs below

  executionListeners=[
    // set of listeners that receive test started / passed / failed events
    "com.technophobia.substeps.runner.logger.StepExecutionLogger"
  ]
  fastFailParseErrors=true
    // if true, parse failures of all scenarios and substeps result in immediate termination.
    // During development it may be beneficial to relax this.  Parse errors found during execution are
    // still treated as an error

  featureFile="target/test-classes/features"

  substepsFile="target/test-classes/substeps"

  stepImplementationClassNames=[
    "com.org.my.StepImplementations"
  ]
}


org.substeps.executionConfigs=[
  // an array of execution configs, each one will be executed sequentially

  {
    dataOutputDir="1"
    // the subdir, relative to rootDataDir, where the results data from this execution config will be written

    description="Set 1 Substeps tests"
    // the description of this iteration

    tags="set1"
    // the tagged scenarios to include

    nonFatalTags="set1-wip"
    // tagged scenarios and features that can fail, without failing the build
  },

  {
    dataOutputDir="2"
    description="Set 2 Substeps tests"
    tags="set2"
  }
]

```



