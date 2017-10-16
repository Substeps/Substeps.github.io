---
title: Substeps | In depth | Setup and tear down
layout: documentation
---


# Setup and tear down

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
Before and After methods are called symmetrically, where multiple setup methods are found for the same hook, execution order is determined by the methods found first (by the ordering of the step implementations in the pom), however such ordering should not be replied upon.  

If multiple classes rely on the same setup method, it will be only called once each time all before / after methods are called.

## Configuration

Setup and tear down classes can be specified in config or associated with the step implementation

#### In config
```
org.substeps.baseExecutionConfig{
    initialisationClasses = [
        "com.project.InitOne",
        "com.project.InitTwo"
     ]
}

# OR

org.substeps.executionConfigs=[
    {
        initialisationClasses = [
            "com.project.InitOne",
            "com.project.InitTwo"
         ]
    }
]
```

see the [Configuration](../configuration) page for more details on configuring substeps.

### Associated step implementations

Since setup and tear down is probably associated with a set of step implementations in a particular class it seems reasonable to associate initialisation with a step implementation by adding an attribute to the StepImplementation annotation:

``` java
@StepImplementations( requiredInitialisationClasses = {MySetupClass.class}
public class MyStepImplementations {
    ...
```

Initialisation classes defined explicitly in configuration will be executed before initialisation classes inferred from annotations.


#### Substeps pre v1.1.0

The setup and tear down class can be specified either in the pom:

``` xml
    <executionConfig>
        ....
        <initialisationClass>
            <param>com.technophobia.webdriver.substeps.example.ExampleSetupAndTearDown</param>
        </initialisationClass>
    </executionConfig>

```
