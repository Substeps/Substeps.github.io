---
title: Substeps | Customisation
layout: documentation
---

Customisation
=============

Step Implementations
--------------------

Implementing your own step implementations is easy, simply annotate the class and method:

```java
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

```java
import com.technophobia.substeps.model.SubSteps.StepParameter;
import com.technophobia.substeps.model.parameter.IntegerConverter;

    @Step("DoSomething with an int parameter \"([^\"]*)\"")
    public void exampleTwo(@StepParameter(converter = IntegerConverter.class) final int param)  {
        ...
    }
```

It is also possible to pass an entire table as a step parameter.  For example within a scenario:

```
DoSomething with a table parameter
    |col1     | col2    |  col3   |
    |row1-1   | row1-2  |  row1-3 |
    |row2-1   | row2-2  |  row3-3 |
```

could be implemented with a step such as this

```java
    @Step("DoSomething with a table parameter")
    public void exampleThree(final List<Map<String,String>> table)  {
        ...
    }
```

The each element of the list parameter representing a row, with values keyed by column values.

NB. this feature is currently only available to step implementations used directly in scenarios, not step definitions.

The step implementation class(es) will need to be registered in the pom in the `stepImplementationClassNames` section of the `executionConfig`


Setup and tear down
-------------------

