---
title: Substeps | In depth | Tags
layout: documentation
---

## Tags

Features and Scenarios can be tagged using the keyword `Tags`  Tags can be used to include scenarios and features from a wider set. In addition tags can be used to mark a scenario or feature as 'non fatal', such a failing test will not result in an overall failure.  This is useful for features currently in development that might fail, however a successful build is required for a build pipeline.

Tags are hierarchical in that a tag at feature level, implicitly tags all scenarios within that feature.  If a particular scenario fails, it's parent feature will also fail.  Therefore to prevent build failure of a particular tag, the feature must also have the non-fatal tag.

Examples of Tag usage

``` gherkin
Tags: sprint1 all
Feature: Sprint1 feature

Tags: scenario1
Scenario: scenario 1
...

Tags: scenario2
Scenario: scenario 2
...
```

``` gherkin
Tags: sprint2 all
Feature: Sprint2 feature

Tags: scenario3
Scenario: scenario 3
...

Tags: scenario4
Scenario: scenario 4
...
```

Any of the individual scenarios can be run by specifying the scenario tag alone.  To run both scenario 1 and 2, the sprint1 tag could be used.  To run all tests, but allow those from sprint 2 to fail, without failing the build, `tags="all", nonFatalTags="sprint2"`.  NB.  If scenario 4 is the only scenario that can fail without affecting the pipeline, the tags will need to be structured in a different way as `tags="all" ,nonFatalTags="scenario4"` will allow scenario 4 to fail, but since a scenario in feature 2 has failed, feature 2 will also fail and thus fail the build.  To run all sprint 1 features except scenario 2, `tags="sprint1 --scenario2"`


