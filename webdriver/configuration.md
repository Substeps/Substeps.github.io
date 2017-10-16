---
title: Substeps | Webdriver | Configuration
layout: documentation
---

# Webdriver-Substeps Configuration

The webdriver-substeps library extends the [core substeps configuration](../../indepth/configuration); 
there is some general configuration and then per execution config based settings.  See the above link for details on how substeps configuration works.


### A typical configuration

The configurations below are in addition to core substeps configuration which has been ommitted for brevity.  
The webdriver substeps example is a good source to illustrate combined substeps and webdriver-substeps configuration.

The example below shows two execution configurations both using remote webdrivers (via a selenium grid for example) with one execution confg running Chrome, the other Firefox.

``` conf

org.substeps {
  baseExecutionConfig {

    # properties specified here will act as a default for all executionConfig.webdriver elements
    webdriver {
      driver.type=REMOTE
      remote.driver.url="http://localhost:4444/wd/hub"
    }
  }

  executionConfigs=[
    {
      dataOutputDir="1"  # this is actually core Substeps config
      description="Chrome Tests"

      webdriver {
        # the driver type to use
        # driver.type=CHROME # in this case, the value REMOTE from the baseExecutionConfig will be inherited
        # when using a remote driver, this specifies the flavour of remote to use
        remote.driver.base.capability=chrome
        # the version of the remote browser
        remote.driver.version=59.0.3071.86
        # the remote driver platform
        remote.driver.platform=Linux
      }
    },
    {
      dataOutputDir="2"
      description="Firefox Tests"
    
      webdriver {
        # the driver type to use
        # driver.type=CHROME # in this case, the value REMOTE from the baseExecutionConfig will be inherited
        # when using a remote driver, this specifies the flavour of remote to use
        remote.driver.base.capability=firefox
        # the version of the remote browser
        remote.driver.version=45.0
        # the remote driver platform
        remote.driver.platform=Linux
      }
    }
  ]
  webdriver {

    # file in the classpath that specifies the webdriver-manager properties - used to pin versions of drivers, specify credentials for downloading drivers etc
    # see https://github.com/bonigarcia/webdrivermanager/blob/master/src/main/resources/webdrivermanager.properties
    webdriver.manager.properties=substeps-webdrivermanager.properties

    # base url on top of which NavigateTo urls are appended
    base.url="http://substeps.github.io/substeps-webdriver/"
  }
}
```


### Complete Annotated configuration

The full set of configuration settings and a description of the settings is maintained in the codebase [here](https://github.com/Substeps/substeps-webdriver/blob/master/src/test/resources/annotated.conf) and reproduced here.

``` conf
org.substeps {
  baseExecutionConfig {

    # properties specified here will act as a default for all executionConfig.webdriver elements
    webdriver {
      #        driver.type=REMOTE
      # remote.driver.url="https://"${remote.username}":"${remote.token}"@ondemand.saucelabs.com:443/wd/hub"
      #                remote.driver.url="http://localhost:4444/wd/hub"
      remote.driver.platform=Linux
    }
  }

  executionConfigs=[
    {
      webdriver {
        # the driver type to use
        driver.type=CHROME
        # when using a remote driver, this specifies the flavour of remote to use
        remote.driver.base.capability=chrome
        # the version of the remote browser
        remote.driver.version=59.0.3071.86
        # the remote driver platform
        remote.driver.platform=Linux
      }
    },
  ]
  webdriver {

    # file in the classpath that specifies the webdriver-manager properties - used to pin versions of drivers, specify credentials for downloading drivers etc
    # see https://github.com/bonigarcia/webdrivermanager/blob/master/src/main/resources/webdrivermanager.properties
    webdriver.manager.properties=substeps-webdrivermanager.properties

    # base url on top of which NavigateTo urls are appended
    base.url="http://substeps.github.io/substeps-webdriver/"

    # array of the default driver factories - don't override these, included here for info
    default.driverFactories= [{
      # the key used to lookup the factory, specified using the org.substeps.executionConfig.driver.type value
      key="CHROME"
      class="org.substeps.webdriver.ChromeDriverFactory"
    },
      {
        key="FIREFOX"
        class="org.substeps.webdriver.FirefoxDriverFactory"
      },
      {
        key="HTMLUNIT"
        class="org.substeps.webdriver.HTMLUnitDriverFactory"
      },
      {
        key="IE"
        class="org.substeps.webdriver.IEDriverFactory"
      },
      {
        key="REMOTE"
        class="org.substeps.webdriver.RemoteDriverFactory"
      }
    ]

    # array of driverFactories populated from the defaults plus any overrides specified.  Use this to provide bespoke factories
    driverFactories= [{
      key="CHROME"
      class="org.substeps.webdriver.config.TestDriverFactory"
    }]

    # default selenium wait time (for locating elements)
    default.timeout.secs=5

    # log the pagesource if there is an error. NB. no good for JS heavy apps
    log.pagesource.onerror=false

    # ability to disable JS in HTMLUnit
    htmlunit{
      disable.javascript=false
    }

    # configure the browsers to use a proxy. Will be set if the host string is not empty
    network.proxy.host=""

    # proxy through which to run the browser
    network.proxy.port=8080

    # choose either maximise or specify a size to re-size browser windows on opening on
    window {
      maximise = true
      # or
      width=500
      height=500
    }

    # maps to WebdriverReuseStategy, upper cased and '-' replaced by '_'
    reuse-strategy = "shutdown_and_create_new"

    # Possible values:
    #  shutdown_and_create_new = terminate the webdriver after every scenario

    #  reuse_unless_error_keep_visuals_in_error = keep re-using the webdriver unless there's an error,
                            # in which case, keep the browser open (for debugging) and create a new one

    #  reuse_unless_error = keep re-using the webdriver unless there's an error in which case close

    #  leave_and_create_new = don't ever close the  browser and create new each time

    # NB. Only keep browsers open in local dev environments otherwise you'll exhaust resources on CI.
  }
}
```

