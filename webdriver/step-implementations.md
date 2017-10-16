---
title: Substeps | Webdriver | Step implementations summary
layout: documentation
---

# Webdriver Step Implementations (Summary)

The webdriver-substeps framework operates by locating an element and potentially performing an action such as a click or an assertion.

The full details of the step implementations can be found in the [glossary](../glossary) and additionally on the substeps test execution report.

Below is an in-exhaustive summary of the step implementations available

- There's a range of finders using tag names, css classes and selectors, element id's, regexes, xpaths, the children of elements, combinations of...

- Clicking, entering text, choosing options or radio buttons, checking checkboxes

- navigating around iframes and popups, context menus, execute arbitrary javascript

- assert form elements have particular values, page titles are as expected, elements are visible

- extract values from table rows and cells

- and more....



See the webdriver-substeps suite of [self-tests](https://github.com/Substeps/substeps-webdriver/tree/master/src/test/resources/features) for working examples of these implementations.  The suite is designed to run against a known, predictable and largely static HTML site and thus assuring (to a degree, as negative tests are difficult to do with Selenium) that the steps work as expected.  