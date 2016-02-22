---
title: Substeps | Test Execution
layout: documentation
---

Test Execution
==============

There are a number of ways to run Substeps tests, with:
- the IntelliJ plugin
- the Junit Runner
- Ant runner
- Maven

## General Settings
There are a number of settings that apply with a Substeps run configuration:

<table class="table">
    <thead>
    <tr>
        <th>Attribute</th> <th>Type</th> <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr class="danger">
        <td>featureFile</td> <td>String</td> <td>path to the file or directory containing feature files.</td>
    </tr>
    <tr class="danger">
        <td>subStepsFile</td> <td>String</td> <td>path to the file or directory containing substeps files.</td>
    </tr>
    <tr class="warning">

        <td>stepImplementations</td> <td>Class</td> <td>The classes containing step implementations to be used for this run configuration (Junit only)</td>
    </tr>

    <tr class="warning">
        <td>stepImplementationClassNames</td> <td>String</td> <td>Maven equivalent of the above</td>
    </tr>


    <tr class="success">

        <td>tagList</td> <td>String</td> <td>Space delimited set of tags.  Use -- to negate.  See tags below</td>
    </tr>
    <tr class="success">
        
        <td>strict</td> <td>boolean</td> <td>If strict (the default), then an exact match with the step expression will be sought, if false then matching on the first word is relaxed, accoding to the precendence rules defined in nonStrictKeywordPrecedence</td>
    </tr>
    <tr class="success">

        <td>nonStrictKeywordPrecedence</td> <td>list of strings</td> <td>order of preference to look for alternative matches, eg <code>{"Given", "When", "Then", "And"}</code></td>

    </tr>

    
        <tr class="success">
            <td>nonFatalTags</td> <td>String</td> <td>Space delimited set of tags, a failing feature or scenario that has tags that match will not result in overall build failure</td>
        </tr>

    <tr class="success">
        <td>fastFailParseErrors</td> <td>boolean</td> <td>If true (the default), the build will fail immediately if there are any parse errors in any feature or substeps files or if there are missing step implementations or step definitions.  If false, parse errors and unimplemented steps are just reported as failures of the scenario. Disabling this can be useful if your suite of tests is a work in progress, but you'd like to run as much as you can.</td>
    </tr>


    


    <tr class="success">
        <td>executionReportBuilder</td> <td>String</td> <td>class that extends <code>com.technophobia.substeps.report.ExecutionReportBuilder</code> to be used to generate the test execution report</td>
    </tr>


    <tr class="success">
        <td>outputDirectory</td> <td>String</td> <td>the output directory for the report and associated files</td>
    </tr>


    <tr class="success">
        <td>reportTitle</td> <td>String</td> <td>the title that appears on the report</td>
    </tr>


    <tr class="success">
        <td>executionListeners</td> <td>List</td> <td>List of execution listeners, classes that extend <code>com.technophobia.substeps.runner.ExecutionLogger</code> and are called as test elements start, fail, pass etc.</td>
    </tr>





    </tbody>
</table>



<table class="table">
    <tr>
        <th>Key</th><td class="danger">Mandatory</td> <td class="warning" >Runner specific</td> <td class="success">Optional</td>
    </tr>
</table>



## Tags

Features and Scenarios can be tagged using the keyword `Tags`  Tags can be used to include scenarios and features from a wider set. In addition tags can be used to mark a scenario or feature as 'non fatal', such a failing test will not result in an overall failure.  This is useful for features currently in development that might fail, however a successful build is required for a build pipeline.

Tags are hierarchical in that a tag at feature level, implicitly tags all scenarios within that feature.  If a particular scenario fails, it's parent feature will also fail.  Therefore to prevent build failure of a particular tag, the feature must also have the non-fatal tag.

Examples of Tag usage

``` gherkin
Tags: 
sprint1
all

Feature: Sprint1 feature

Tags: scenario1
Scenario: scenario 1
...

Tags: scenario2
Scenario: scenario 2
...
```

``` gherkin
Tags: 
sprint2
all

Feature: Sprint2 feature

Tags: scenario3
Scenario: scenario 3
...

Tags: scenario4
Scenario: scenario 4
...
```

Any of the individual scenarios can be run by specifying the scenario tag alone.  To run both scenario 1 and 2, the sprint1 tag could be used.  To run all tests, but allow those from sprint 2 to fail, without failing the build, `tags="all", nonFatalTags="sprint2"`.  NB.  If scenario 4 is the only scenario that can fail without affecting the pipeline, the tags will need to be structured in a different way as `tags="all" ,nonFatalTags="scenario4"` will allow scenario 4 to fail, but since a scenario in feature 2 has failed, feature 2 will also fail and thus fail the build.  To run all sprint 1 features except scenario 2, `tags="sprint1 --scenario2"`


## IntelliJ
Running individual scenarios or features during development is most easily achieved with the [Substeps IntelliJ plugin](/introduction/intellij-integration/)

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






## Maven
Running Substeps tests with the Maven plugin is most suited to running a larger number of features and scenarios.  The following configuration is required in the `pom.xml`

``` xml
<build>
    <plugins>
      <plugin>
        <groupId>org.substeps</groupId>
        <artifactId>substeps-maven-plugin</artifactId>
        <version>1.0.1</version>
        <executions>
          <execution>
            <id>Substeps Test</id>
            <phase>integration-test</phase>
            <goals>
              <goal>run-features</goal>
            </goals>
          </execution>
        </executions>
        <configuration>
          <runTestsInForkedVM>false</runTestsInForkedVM>
          <executionConfigs>
            <executionConfig>
              <description>Substeps Test description</description>
              <tags>ALL --WIP</tags>
              <nonFatalTags>@failing</nonFatalTags>
              <strict>false</strict>
              <nonStrictKeywordPrecedence>
                 <param>Given</param>
                 <param>When</param>
                 <param>Then</param>
                 <param>And</param>
              </nonStrictKeywordPrecedence>
              <fastFailParseErrors>false</fastFailParseErrors>
              <featureFile>${basedir}/target/classes/features</featureFile>
              <subStepsFileName>${basedir}/target/classes/substeps</subStepsFileName>
              
              <stepImplementationClassNames>
                <param>com.technophobia.webdriver.substeps.impl.BaseWebdriverSubStepImplementations</param>
                <param>my.org.substeps.MyStepImplementations</param>
              </stepImplementationClassNames>
              
              <executionListeners>
                <param>com.technophobia.substeps.runner.logger.StepExecutionLogger</param>
                <!--	or com.technophobia.substeps.runner.logger.AnsiColourExecutionLogger -->
              </executionListeners>
              
            </executionConfig>
          </executionConfigs>
          <executionReportBuilder implementation="com.technophobia.substeps.report.DefaultExecutionReportBuilder">
            <outputDirectory>${project.build.directory}</outputDirectory>
            <reportTitle>Substeps Report - ${project.version}</reportTitle>
          </executionReportBuilder>
        </configuration>
      </plugin>
    </plugins>
</build>

```

## Ant
The Ant runner has been included as this was part of the original set of Substeps runners.