---
title: Substeps | Manual setup
layout: documentation
---

Manual setup with Maven
=======================

## Dependencies

All Substeps libraries are hosted in Maven Central.  Check <a href="http://search.maven.org/#search|ga|1|org.substeps">here</a> for the latest versions.  Snapshots are also uploaded to Sonatype [here](https://oss.sonatype.org/content/repositories/snapshots/org/substeps/)

There are two core substeps dependencies `substeps-core-api` and `substeps-core`.  If you want to be able to use the junit runner you will also need `substeps-junit-runner`.

``` xml
	<properties>
        <substeps.framework.version>1.1.0</substeps.framework.version>
        ...
     </properties>
        
	<dependencies>
		<dependency>
			<groupId>org.substeps</groupId>
			<artifactId>substeps-core-api</artifactId>
			<version>${substeps.framework.version}</version>
		</dependency>

		<dependency>
			<groupId>org.substeps</groupId>
			<artifactId>substeps-core</artifactId>
			<version>${substeps.framework.version}</version>
		</dependency>

		<dependency>
			<groupId>org.substeps</groupId>
			<artifactId>substeps-junit-runner</artifactId>
			<version>${substeps.framework.version}</version>
			<scope>test</scope>
		</dependency>
        ...
    </dependencies>    
```


To run substeps tests using the `substeps-maven-plugin` you will need to add some configuration to a `build` section in the pom, typically within a profile. See [here](../running#general-settings) for full details of the configuration items.

``` xml
<profile>
    <id>run-substeps-test</id>
    <activation>
        <activeByDefault>true</activeByDefault>
    </activation>
    <build>

    <plugin>
        <groupId>org.substeps</groupId>
        <artifactId>substeps-maven-plugin</artifactId>
        <version>${substeps.framework.version}</version>

        <executions>
            <execution>
                <id>SubSteps Test</id>
                <phase>integration-test</phase>
                <goals>
                    <goal>run-features</goal>
                </goals>
                <configuration>

                </configuration>
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

        <dependencies>

             <dependency>
                <groupId>org.slf4j</groupId>
                <artifactId>slf4j-log4j12</artifactId>
                <version>${slf4j.version}</version>
            </dependency>

        </dependencies>
    </plugin>
    </build>
  </profile>
```

#### Substeps pre v1.1.0 Maven plugin configuration

In addition to the configuration above, substeps configuration was specified in the pom rather than config files

```xml
      <plugin>
      <!-- ....  -->
    <configuration>
 
<!-- ****************************************************
    As of 1.1.0 version of substeps 
    all further configuration is in configuration files 
********************************************************* -->

            <runTestsInForkedVM>false</runTestsInForkedVM>

            <executionConfigs>

                <executionConfig>
                    <description>Self Test Features</description>
                    <tags>@non-visual</tags>
                    <fastFailParseErrors>false</fastFailParseErrors>
                    <featureFile>${basedir}/target/test-classes/features</featureFile>
                    <subStepsFileName>${basedir}/target/test-classes/substeps</subStepsFileName>

                    <stepImplementationClassNames>
                        <param>com.technophobia.webdriver.substeps.impl.BaseWebdriverSubStepImplementations</param>
                    </stepImplementationClassNames>

                    <executionListeners>
                        <param>com.technophobia.substeps.runner.logger.StepExecutionLogger</param>
                    </executionListeners>

                </executionConfig>
            </executionConfigs>

              <executionReportBuilder implementation="com.technophobia.substeps.report.DefaultExecutionReportBuilder">
                <outputDirectory>${project.build.directory}</outputDirectory>
                <reportTitle>Webdriver Substeps - ${project.version}</reportTitle>
              </executionReportBuilder>

        </configuration> 
    </plugin>
```