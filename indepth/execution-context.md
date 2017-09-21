---
title: Substeps | In depth | Execution Context
layout: documentation
---

# Execution Context

Throughout the test cycle, an execution context is bound to the current thread as a ThreadLocal.  This provides a mechanism by which data can be placed into a scoped context for subsequent use.  Scopes include suite, feature, scenario etc.  At the end of the scope, all data at that level is cleared, providing a safe mechanism to pass data between test elements whilst minimising the risk of polluting other scenarios.
 
This can be useful for capturing the result of a particular function and using that value in a subsequent step.  The webdriver substep library uses this mechanism to make the initialised webdriver variable accessible across steps within a scenario. 

The execution context can be accessed:

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

