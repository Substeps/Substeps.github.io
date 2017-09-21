---
title: Substeps | In depth | Custom step implementations
layout: documentation
---

Custom step implementations
===========================

You can build step implementations to do anything; 
    - send and receive emails
    - query a database
    - send JMS messages
    - make ReST calls
    - whatever you like...

To do so, you might need to implement your own step implementations..

### Implementation

Implementing your own step implementations is easy, simply annotate the class and method:

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

Standard java RegEx capture groups are used to extract parameters.  String parameters can be converted to other types with an additional annotation:

``` java
import com.technophobia.substeps.model.SubSteps.StepParameter;
import com.technophobia.substeps.model.parameter.IntegerConverter;

    @Step("DoSomething with an int parameter \"([^\"]*)\"")
    public void exampleTwo(@StepParameter(converter = IntegerConverter.class) final int param)  {
        ...
    }
```

It is also possible to pass an entire table as a step parameter.  For example within a scenario:

```gherkin
Scenario: A Sample scenario
    DoSomething with a table parameter
        |col1     | col2    |  col3   |
        |row1-1   | row1-2  |  row1-3 |
        |row2-1   | row2-2  |  row3-3 |
```

could be implemented with a step such as this

``` java
    @Step("DoSomething with a table parameter")
    public void exampleThree(final List<Map<String,String>> table)  {
        ...
    }
```

The each element of the list parameter representing a row, with values keyed by column values.

NB. this feature is currently only available to step implementations used directly in scenarios, not step definitions.

### Configuration
Step implementations are specified in config:

```
org.substeps.baseExecutionConfig{
    stepImplementationClassNames = [
        "com.project.StepImplsOne",
        "com.project.StepImplsTwo"
     ]
}

# OR

org.substeps.executionConfigs=[
    {
        stepImplementationClassNames = [
            "com.project.StepImplsOne",
            "com.project.StepImplsTwo"
         ]
    }
]
```
see the [Configuration](../configuration) page for more details on configuring substeps.


#### Substeps pre v1.1.0

The step implementation class(es) will need to be registered in the pom in the `stepImplementationClassNames` section of the `executionConfig`

### What to do inside a step implementation ?

#### Whatever you want !


Your step implementations might need to :

* use some specific [setup or tear down](../setup-tear-down) (eg. initialising and opening connections).

* to pass information from one step to another in an [execution context](../execution-context)


