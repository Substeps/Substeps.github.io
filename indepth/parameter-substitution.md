---
title: Substeps | In depth | Parameter substitution
layout: documentation
---

Parameter Substitution
======================

Parameters in features or substep definition files can be substituted with a value from the evaluation of an expression.

```
Scenario: Parameter scenario substitution example
    Given I login as "${my.project.value}"
```

would be substituted with a value from config 

```
# localhost.conf
my.project.value="localuser"

# OR

# jenkins.cong
my.project.value="jenkinsuser"
```
 
In this way the different environment config files and values can be used from a single scenario, consistent across environments.

#### Substitution with values from Execution Context

Expressions take the form `${key.other.name}` and are (parsed using [Jexl](http://commons.apache.org/proper/commons-jexl/)), in this example `key.other.name` refers to an object stashed in the [ExecutionContext](../customisation#execution-context) under the name `key`, with a property called `other`, that in turn has a `name` property.

The ExecutionContext is first searched for a value that corresponds to the expression, failing that, values from configuration are sought.  See [ArgumentsTests](https://github.com/Substeps/substeps-framework/blob/master/core/src/test/scala/com/technophobia/substeps/model/ArgumentsTest.scala) for more examples

