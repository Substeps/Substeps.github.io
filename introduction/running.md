---
title: Substeps | Test Execution
layout: documentation
---

Test Execution
==============

There are a number of ways to run Substeps tests:
    - via the Maven plugins which will also produce a test exceution report, an example can be seen [here](/test_report/report_frame.html) 
    - the IntelliJ plugin
    - Junit Runner
    - Ant runner

#### General configuration

As of v 1.1.0, all Substep runners use the Typesafe config files found in the project and associated libraries, see the [configuration](configuration/) page for more details.

The Junit runner and IntelliJ plugin override the project config files in order to specify singular feature and scenarios to run.  All other settings are picked up from the config files as standard.


## Maven
Running Substeps tests with the Maven plugin is most suited to running a larger number of features and scenarios.  The following configuration is required in the `pom.xml`

``` xml
<build>
    <plugins>
      <plugin>
        <groupId>org.substeps</groupId>
        <artifactId>substeps-maven-plugin</artifactId>
        <version>1.0.5</version>

        <executions>

          <execution>
            <id>Substeps Test</id>
            <phase>integration-test</phase>
            <goals>
              <goal>run-features</goal>
            </goals>
          </execution>

          <execution>
            <id>Build SubSteps Report</id>
            <phase>verify</phase>
            <goals>
              <goal>build-report</goal>
            </goals>
          </execution>

          <execution>
            <id>Build SubSteps Glossary</id>
            <phase>process-test-resources</phase>
            <goals>
              <goal>generate-docs</goal>
            </goals>
          </execution>

        </executions>

      </plugin>
    </plugins>
</build>

```

## IntelliJ
To run individual features during development, the [Substeps IntelliJ plugin](/introduction/intellij-integration/) is probably the easiest option

## Junit
If you're not using IntelliJ as your IDE, using the JunitRunner is a reasonable alternative in order to run individual scenarios and features.  You will need to create a class and annotate accordingly:

``` java
import my.org.substeps.MyStepImplementations;

import com.technophobia.substeps.runner.JunitFeatureRunner;
import com.technophobia.webdriver.substeps.impl.BaseWebdriverSubStepImplementations;

import org.junit.runner.RunWith;

@JunitFeatureRunner.SubStepsConfiguration(featureFile = "./target/classes/features/my.feature",
        subStepsFile = "./target/classes/substeps/",
        stepImplementations = { BaseWebdriverSubStepImplementations.class, MyStepImplementations.class},
        tagList = "@myTags",
        strict = false, nonStrictKeywordPrecedence = {"Given", "When", "Then", "And"})
@RunWith(JunitFeatureRunner.class)

public class MyFeatureTest {
}
```





## Ant
The Ant runner has been included as this was part of the original set of Substeps runners, but is not actively maintained beyond compilation and existing tests passing.  If you use the ant runner and encounter issues, please [raise an issue in Github](https://github.com/Substeps/substeps-framework/issues/new) and I'll endeavour to look into it