---
title: Substeps | Overview
layout: documentation
---

What is Substeps ?
==================

* Substeps is a BDD framework designed specifically to enable non-technical folk to write, implement and execute functional tests with limited support from developers.

* Substeps syntax is very close to the Gherkin syntax of Cucumber

* Scenario steps can be implemented directly in code (as with Cucumber) or as a substep definition, which in turn may be composed of further substeps

* Substeps can be shared and reused across scenarios, features or packaged up and re-used across projects, domains and organisations.

#### A basic feature

``` substeps
Feature: Users can enter daily timesheets

Scenario: A user can enter timesheet data
    Given I am logged into the timesheet system
    And I can navigate to day 26
    Then I can enter from 08:30 to 12:30 working on the XYZ Project
    And I can enter from 12:30 to 14:00 at lunch
    And I can enter from 14:00 to 17:00 working on the XYZ Project
```

#### A substep definition

```
Define: Given I am logged into the timesheet system
    NavigateTo http://intranet.company.int/....
    FindById login_username    
    ClearAndSendKeys "imoore"
    FindById login_password
    ClearAndSendKeys "*****"
    FindByTagAndAttributes tag="input" attributes=[class="button",type="submit",value="Login"]
    Click
    # wait for the next page
    WaitFor 1000
```

#### Step Implementations
are simply annotated java methods

``` java
import com.technophobia.substeps.model.SubSteps.Step;
import com.technophobia.substeps.model.SubSteps.StepImplementations;

@StepImplementations
public class MyStepImplementations {

    @Step("DoSomething with parameter \"([^\"]*)\"")
    public void exampleOne(final String param)  {
        ...
    }
}
``` 
see [here](/indepth/customisation) for more detail on step implementations


#### Scenario outlines
 are also supported:

```
Scenario Outline: test that <game_name> launches correctly
    Given I am on the game launch page
    Then I can launch <game_name> from tile <game_tile>
    ... 

Examples:
    | game_name | game_tile |
    | poker     | 3         |
    | roulette  | 2         |
    ....
```





#### Parameters 
can be passed from features to substeps and then on to step implementations:
```
Define: A substep with a <parameter>
    ClearAndSendKeys "<parameter>"
```

#### n levels of abstraction

Step implementations can be called directly from feature steps, this also allows tables to be passed as a parameter (currently only possible from a feature to a step implementation):

```
Scenario: a scenario is executed with a table as a parameter
    Test_Given a step is defined with a table parameter
          | param1  |  param2  |    param3  |   param4  |
          | W       |   X      |    Y       |     Z     |         
```

the table is converted to a list of the column values, keyed on the column titles:

```java
 @Step("Given a step with a table argument")
    public void methodWithTableArgument(final List<Map<String, String>> table) {
    //...
    }
```
Alternatively, features can call nested substep definitions as deep as you like.




