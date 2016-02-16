---
title: Substeps | Overview
layout: documentation
---

What is Substeps ?
==================

* Substeps is a BDD framework designed specifically to enable non-technical folk to write, implement and execute functional tests with limited support from developers.

* Substeps syntax is very close to the Gherkin syntax of Cucumber

* Scenario steps can be implemented directly in code (as with Cucumber) or as a substep definition, which in turn may be composed of further substeps

* Substeps can be shared and reused across scenarios, features or packaged up and re-used across projects, domains and organisations.

A feature file:

```
Feature: Users can enter daily timesheets

Scenario: A user can enter timesheet data
    Given I am logged into the timesheet system
    And I can navigate to day 26
    Then I can enter from 08:30 to 12:30 working on the XYZ Project
    And I can enter from 12:30 to 14:00 at lunch
    And I can enter from 14:00 to 17:00 working on the XYZ Project
```

A substep definition file:	

```
Define: Given I am logged into the timesheet system
    NavigateTo http://intranet.company.int/....
    FindById login_username    
    ClearAndSendKeys "imoore"
    FindById login_password
    ClearAndSendKeys "*****"
    FindByTagAndAttributes tag="input" attributes=[class="button",type="submit",value="Login"]
    Click
    # wait for the next page
    WaitFor 1000
		
```
		
		