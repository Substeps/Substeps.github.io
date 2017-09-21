---
title: Substeps | In depth | Step documentation
layout: documentation
---

Documenting step definitions
============================

Key to the success of building any library of step implementations is that fellow test authors can discover the steps that are available, rather than implementing new.

Substeps provides some help in this regard with a capability to document step implementations, publish a glossary of steps and provide context sensitive help within the IntelliJ plugin.

Step implementations can be documented using standard javadocs along with some custom tags:

``` java
    /**  
     * The description of what the step implementation does 
     * 
     * @example DoSomething with a parameter "fred"
     * @section Custom
     * @param param a string parameter
     */
    @Step("DoSomething with parameter \"([^\"]*)\"")
    public void exampleOne(final String param)  {
        ...
    }
```

A custom javadoc doclet is run as part of the maven plugin report building, with the results added to the [glossary tab](../../test_report/glossary.html) on the test execution report.  The data is presented using the [Datatables](https://datatables.net/) plugin, making the content searchable and sortable. 

The data is also included in any substeps library and is used by the IntelliJ plugin to provide content assist and quick documentation. 


