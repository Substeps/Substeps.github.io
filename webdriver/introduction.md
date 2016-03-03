---
title: Substeps | Webdriver | Introduction
layout: documentation
---

Introduction
============

The Webdriver step implementations provide some common, reusable substeps based on Selenium Webdriver for the testing of web applications 

Getting started
---------------
If you've started with the example project, the webdriver substeps library is already included.  Otherwise include the following dependency:

``` xml
<dependency>
    <groupId>org.substeps</groupId>
    <artifactId>webdriver-substeps</artifactId>
    <version>1.0.1</version>
</dependency>
```

The latest version of the library is [![Maven Central](https://img.shields.io/maven-central/v/org.substeps/webdriver-substeps.png?label=webdriver-substeps)](https://maven-badges.herokuapp.com/maven-central/org.substeps/webdriver-substeps) 

To bring the step implementations into scope add the following to the substeps-maven plugin configuration:

``` xml
<stepImplementationClassNames>
    <param>com.technophobia.webdriver.substeps.impl.BaseWebdriverSubStepImplementations</param>
    ...
</stepImplementationClassNames>
```

Principles
----------

#### Finders

Webdriver-substeps *currently* works on the principle of finding an element in the DOM by some means, then performing an action, asserting on properties or finding further elements.  Each 'finder' sets a reference to the 'current element' (this is stored in the `ExecutionContext`) that a subsequent action can refer to.  Eg.

``` 
FindById my-button     # finds a element with id 'my-button', 
                       # stashes the found element as the 'current' element
Click                  # Clicks the 'current element'
```

#### Wait

Finders locate elements based on various criteria and build upon Webdriver's By mechanism, internally chaining Bys together.  A wait mechanism will test a By until it succeeds or timesout, so attempting to find an element is equivalent to waiting for it.  For some find criteria, xpath expressions are also used internally in combination with the By mechanism.  

#### Gotchas

There are some gotchas with this approach; with dynamic websites (as most are these days!), elements are frequently removed from the DOM or inaccessible; the finder can succeed but the element becomes stale or detached from the DOM before the action acts upon the element.  The wait mechanism can help with this, waiting for specific marker elements to be present (a title or a label for example) before looking for the real target.



Additional configuration
------------------------
The webdriver substeps library has some default configuration that can be overriden in the local environment properties


<table class="table">
<thead>
    <tr><th>Property</th> <th>Type</th> <th>Description</th></tr>
</thead>
<tbody>
    <tr><td>base.url</td><td>URL</td><td>file:/// or http://...  Base url to which NavigateTo instructions are appended</td></tr>
    <tr><td>driver.type</td><td>HTMLUNIT / IE / CHROME /  FIREFOX</td><td>The driver type to be used as a key to the webdriver factory</td></tr>
    <tr><td>webdriver.shutdown</td><td>true/false</td><td>Shuts the webdriver down after each scenario <strong>default true</strong></td></tr>
    <tr><td>webdriver.reuse</td><td>true/false</td><td>If no failures keep the webdriver instance open <strong>default false</strong></td></tr>
    <tr><td>visual.webdriver.close.on.fail</td><td>true/false</td><td>If true this will leave the browser open, useful for debug tests.  Don't use in headless environments. <strong>default true</strong></td></tr>
    <tr><td>default.webdriver.timeout.secs</td><td>Integer</td><td>Default timeout to wait for elements and conditions <strong>default 10</strong></td></tr>
    <tr><td>webdriver.locale</td><td>locale identifier</td><td>browser locale <strong>default en-gb</strong></td></tr>
    <tr><td>htmlunit.disable.javascript</td><td>true/false</td><td>Switch to enable running HTML with js disabled <strong>default false</strong></td></tr>
    <tr><td>htmlunit.proxy.host=</td><td>URL</td><td>Deprecated - use network.proxy.http instead.  A proxy for Htmlunit. Will run only evaluated if htmlunit.proxy.host is set.</td></tr>
    <tr><td>htmlunit.proxy.port</td><td></td><td>deprecated - use network.proxy.http_port instead. default 8080</td></tr>
    <tr><td>network.proxy.host</td><td>URL</td><td>use a proxy for Htmlunit or Firefox. Will run only evaluated if network.proxy.http is set. </td></tr>
    <tr><td>network.proxy.port</td><td>Integer</td><td>Proxy port <strong>default 8080</strong></td></tr>
    <tr><td>webdriver.factory.class</td><td>Class</td><td>Class that implements WebDriverFactory and creates webdriver instances based on the driver.type key above <strong>default com.technophobia.webdriver.substeps.runner.DefaultWebDriverFactory</strong></td></tr>
    <tr><td>step.depth.description</td><td>Integer</td><td>depth to which step descriptions are created when running with JUnit<strong>default 5</strong></td></tr>

</tbody>
</table>





Webdrivers
----------
Selenium Webdriver API uses real browser implementations to execute the various actions against the website under test.  Depending on the implementation of choice, Some additional setup maybe required.  Since browsers are frequently updated, it is not uncommon for selenium to suddenly break and be unable to control the browser.  [Check](http://search.maven.org/#search|gav|1|g%3A%22org.seleniumhq.selenium%22%20AND%20a%3A%22selenium-java%22) for a more recent version of selenium and potentially try upgrading.

### HTMLUnit
The `selenium-java` dependency includes HTMLUnit and no additional configuration is required to run this headless browser.

### Chrome
To use the Chrome webdriver, firstly Chrome must be installed.  Additionally a [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) needs to be installed that is appropriate to your platform.  A system property `webdriver.chrome.driver` will also need to be set that points to the chromedriver binary, eg. `/path/to/chromedriver`.  This can be set in code or passed in as a `-D` parameter.

### Firefox
Firefox simply requires the browser to be installed.

### IE
As a Linux user I've not done much in the way of testing with IE...  As far as I know, if IE is installed it should work...  The feedback of others would be welcome here!



### Useful links
* [Selenium webdriver](http://www.seleniumhq.org/docs/03_webdriver.jsp)
* [Selenium github page](https://github.com/seleniumhq/selenium)
* [Selenium Javadocs](http://seleniumhq.github.io/selenium/docs/api/java/index.html)