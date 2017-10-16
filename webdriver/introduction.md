---
title: Substeps | Webdriver | Introduction
layout: documentation
---

Webdriver-Substeps
============

This library of step implementations provide some common, reusable substeps based on Selenium Webdriver for the testing of web applications 

Getting started
---------------
If you've started with the example project, the webdriver substeps library is already included.  Otherwise include the following dependency:

``` xml
<dependency>
    <groupId>org.substeps</groupId>
    <artifactId>webdriver-substeps</artifactId>
    <version>1.1.2</version>
</dependency>
```

The latest version of the library is [![Maven Central](https://img.shields.io/maven-central/v/org.substeps/webdriver-substeps.png?label=webdriver-substeps)](https://maven-badges.herokuapp.com/maven-central/org.substeps/webdriver-substeps) 

As of v1.1.0 of webdriver-substeps, just adding the library as a dependency is sufficient to bring the appropriate step implementations into scope.  

In addition HTMLUnit is specified as the default driver type, this can easily be configured otherwise, see the [drivers](../drivers) page for details. , typically this might vary on a per execution config basis

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

There are some gotchas with this approach; with dynamic websites, elements are frequently removed from the DOM or inaccessible; the finder can succeed but the element becomes stale or detached from the DOM before the action acts upon the element.  The wait mechanism can help with this, waiting for specific marker elements to be present (a title or a label for example) before looking for the real target.


#### Read more about ...

- the [configuration](../configuration) options for webdriver-substeps

- options to configure different [drivers](../drivers) or to specify custom driver factories

- get a brief overview of the kind of [step implementations](../step-implementations) available

- search through the [glossary](../glossary) for the step implementations included in this library





### Useful links
* [Selenium webdriver](http://www.seleniumhq.org/docs/03_webdriver.jsp)
* [Selenium github page](https://github.com/seleniumhq/selenium)
* [Selenium Javadocs](http://seleniumhq.github.io/selenium/docs/api/java/index.html)