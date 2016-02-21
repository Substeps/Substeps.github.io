---
title: Substeps | Customisation
layout: documentation
---

Customisation
=============

You can build step implementations to do anything; 
    - send and receive emails
    - query a database
    - send JMS messages
    - make ReST calls
    - whatever you like...

To do so, you'll need to implement your own step implementations..

### Step Implementations


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

The step implementation class(es) will need to be registered in the pom in the `stepImplementationClassNames` section of the `executionConfig`


### Execution Context

Throughout the test cycle, an execution context is bound to the current thread as a ThreadLocal.  This provides a mechanism by which data can be placed into a scoped context for subsequent use.  Scopes include suite, feature, scenario etc.  At the end of the scope, all data at that level is cleared, providing a safe mechanism to pass data between test elements whilst minimising the risk of polluting other scenarios.
 
This can be useful for capturing the result of a particular function and using that value in a subsequent step.  The webdriver substep library uses this mechanism to make the initialised webdriver variable accessible across steps within a scenario. 

The execution context can be accessed thus:

``` java
import com.technophobia.substeps.runner.ExecutionContext;

// to put something into the execution context
ExecutionContext.put(Scope.FEATURE, "my-key", "data");

// and to retrieve
String data =  (String)ExecutionContext.get(Scope.FEATURE, "my-key");
```

An alternative pattern is to declare a static mutable Supplier

``` java
import com.technophobia.substeps.runner.ExecutionContextSupplier;
import com.technophobia.substeps.runner.MutableSupplier;

private static final MutableSupplier<BigDecimal> initialBalanceInContext = 
    new ExecutionContextSupplier<BigDecimal>(Scope.SCENARIO, "initialBalance");

initialBalanceInContext.set(currentBalance);

BigDecimal initialBalance = initialBalanceInContext.get();

```



### Setup and tear down

The underlying implementation of test scenarios frequently require setup and tear down.  A number of annotations are provided on the `Annotations` interface to allow for setup and tear down hooks that are called before and after every scenario, feature or suite (all features). For example

``` java
import com.technophobia.substeps.runner.setupteardown.Annotations;

public class MySetupAndTearDown{
    
    @BeforeAllFeatures
    public final void beforeAllFeaturesSetup() {
        ...
    }
    
    @BeforeEveryScenario
    public void beforeScenario(){
        ...
    }
}

```
Before and After methods are called symmetrically and where multiple setup methods are found for the same hook, execution order is determined by the methods found first (by the ordering of the step implementations in the pom), however such ordering should not be replied upon.

The setup and tear down class can be specified either in the pom:

``` xml
    <executionConfig>
        ....
        <initialisationClass>
            <param>com.technophobia.webdriver.substeps.example.ExampleSetupAndTearDown</param>
        </initialisationClass>
    </executionConfig>

```


or alternatively, since any setup and tear down is probably associated with a set of step implementations in a particular class, 
an attribute can be added to the StepImplementation annotation:

``` java
@StepImplementations( requiredInitialisationClasses = {MySetupClass.class}
public class MyStepImplementations {
    ...
```