---
title: Substeps | Webdriver | Drivers
layout: documentation
---

# Drivers

## Defaults

The webdriver-substeps library comes with some default configurations for Chrome, Firefox, HTMLUnit and IE and Remote driver capability.

The driver type is specified using a configuration key:
`org.substeps.executionConfig.webdriver.driver.type=CHROME # or FIREFOX etc`
this can be specified in the `baseExecutionConfig` to apply to all execution iterations, or overridden in each.

## WebdriverManager

To manage the specifics of each driver, [Webdriver Manager](https://github.com/bonigarcia/webdrivermanager) is used to download the appropriate intermediary drivers (eg chromedriver) and setup environment variables accordingly.

If specific webdriver manager configuration is required, set the configuration key `org.substeps.webdriver.webdriver.manager.properties` to point to the appropriate properties file.  
This can be useful if specific versions of browsers need to be pinned, alternative download locations specified or github auth keys specified.

see the webdriver manager [properties](https://github.com/bonigarcia/webdrivermanager/blob/master/src/main/resources/webdrivermanager.properties) reference for more details

## Driver creation

The webdriver-substeps framework takes care of creating, passing to stepimplementations, cleaning up and closing drivers. Drivers should not be created explicitly in step implementations.

Drivers are added to the ExecutionContext and should be accessed via this in custom step implementations.  This will ensure the correct driver is used for that particular thread 
(when parallel execution is implemented) and that the same driver is used in other step implementations in the scenario.

A strategy is defined using the configuration key `org.substeps.webdriver.reuse-strategy` to determine what to do with a driver at the end of a scenario.

Possible values are 

* `shutdown_and_create_new`
    terminate the webdriver after every scenario 
    
* `reuse_unless_error_keep_visuals_in_error` 
    keep re-using the webdriver unless there's an error,  in which case, keep the browser open (for debugging) and create a new one 

* `reuse_unless_error` 
    keep re-using the webdriver unless there's an error in which case close
    
* `leave_and_create_new` 
    don't ever close the  browser and create new each time

** NB. Only keep browsers open in local dev environments otherwise you'll exhaust resources on CI. **




### Driver Factories

The key maps to a `DriverFactory` class specified either as a default in the webdriver-substeps `reference.conf` or as an override 
in a projects configuration

``` conf
org.substeps.webdriver {
  driverFactories= [{
    key="CHROME"
    class="org.com.MyChromeDriverFactory"
  }]
}
```

Typical use cases for creating your own driver factory are to provide specific options or specify profiles, plugins etc.  
To implement a DriverFactory, just implement the `org.substeps.webdriver.DriverFactory` interface and specify a key in the configuration, example above.




- possible to configure some selenium webdrivers, out of the box - chrome, firefox, ie etc..
- use of webdrivermanager to install and run the appropriate intermediary drivers
  - may want to customise that, pin versions of drivers - this is how you do it (TODO add to the example)
  - auth to be able to access the downloads
- remotes  
- custom driver init
  - own init class, added to config
  - register key with the factory
     - replace the current registration with config instead - easier to override - no need for an init class
     - how would the config be merged ?  
