var glossary=[
  {
    "section":"Location",
    "expression":"NavigateTo &lt;url&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"NavigateTo ([^\"]*)",
    "example":"NavigateTo /myApp (will navigate to http://localhost/myApp if\n          base.url is set to http://localhost)",
    "description":"Navigate to a url, if the url begins with http or file, the url will be  used as is, if a relative url is specified then it will be prepended with  the base url property",
    "parameterNames":[
      "url"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"NavigateTo url property \"&lt;urlProperty&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"NavigateTo url property \"([^\"]*)\"",
    "example":"NavigateTo url property \"login.url\"",
    "description":"Navigate to a url specified by a property in the config files",
    "parameterNames":[
      "urlProperty"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Clicks",
    "expression":"ClickById &lt;id&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"ClickById ([^\"]*)",
    "example":"ClickById login",
    "description":"Find an element by id, then click it.",
    "parameterNames":[
      "id"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Clicks",
    "expression":"Click",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"Click",
    "example":"Click",
    "description":"Click (the current element)",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"Clicks",
    "expression":"ClickWhenClickable",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"ClickWhenClickable",
    "example":"ClickWhenClickable",
    "description":"Clicks (the current element) when the element can be clicked (visibility, enabled etc)",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"Clicks",
    "expression":"ClickButton containing \"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"ClickButton containing \"([^\"]*)\"",
    "example":"ClickButton containing \"button text\"",
    "description":"Finds a button that contains the specified text, waits until the element is clickable, then clicks it.",
    "parameterNames":[
      "text"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Clicks",
    "expression":"ClickLink \"&lt;linkText&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"ClickLink \"([^\"]*)\"",
    "example":"ClickLink \"Contracts\"",
    "description":"Click the link \"(....)\" as it appears on the page",
    "parameterNames":[
      "linkText"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Clicks",
    "expression":"ClickButton \"&lt;buttonText&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"ClickButton \"?([^\"]*)\"?",
    "example":"ClickButton \"submit button\"",
    "description":"Click a button that has the text, NB surrounding quotes are optional",
    "parameterNames":[
      "buttonText"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Form",
    "expression":"ClickSubmitButton \"&lt;buttonText&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"ClickSubmitButton \"([^\"]*)\"",
    "example":"ClickSubmitButton \"Submit\"",
    "description":"Finds an input element with the specified value, then clicks it.",
    "parameterNames":[
      "buttonText"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"WaitFor &lt;value&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"WaitFor ([^\"]*)",
    "example":"WaitFor 10",
    "description":"Wait for the specified number of milliseconds",
    "parameterNames":[
      "value"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"WaitForPageTitle \"&lt;expectedTitle&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"WaitForPageTitle \"([^\"]*)\"",
    "example":"WaitForPageTitle \"My Home Page\"",
    "description":"Wait for the page title to change to the specified value",
    "parameterNames":[
      "expectedTitle"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Clicks",
    "expression":"PerformDoubleClick",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"PerformDoubleClick",
    "example":"PerformDoubleClick",
    "description":"Performs a double click on the current element (set with a previous Find  method).",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"Clicks",
    "expression":"PerformContextClick",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"PerformContextClick",
    "example":"PerformContextClick",
    "description":"Performs a context click (typically right click, unless this has been  changed by the user) on the current element.",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"Clicks",
    "expression":"DismissAlert with message \"&lt;message&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"DismissAlert with message \"([^\"]*)\"",
    "example":"DismissAlert with message \"Popup\"",
    "description":"Dismisses an Alert with specific text",
    "parameterNames":[
      "message"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertCurrentElement is visible",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"AssertCurrentElement is visible",
    "example":"AssertCurrentElement is visible",
    "description":"Asserts that the current element is visible, it will wait until this is true",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertCurrentElement is invisible",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"AssertCurrentElement is invisible",
    "example":"AssertCurrentElement is invisible",
    "description":"Waits until the current element is invisible, either visibility: hidden or display:none",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"Actions",
    "expression":"ExecuteJavascript &lt;js&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"ExecuteJavascript (.*)$",
    "example":"ExecuteJavascript document.getElementById(\"id-for-js-manipulation\").innerHTML = \"js fiddled\"",
    "description":"Invoke the webdriver Javascript executor to run a line of javascript",
    "parameterNames":[
      "js"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Actions",
    "expression":"TakeScreenshot with prefix \"&lt;filePrefix&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.ActionWebDriverSubStepImplementations",
    "regex":"TakeScreenshot with prefix \"([^\"]*)\"",
    "example":"TakeScreenshot with prefix \"self-test\"",
    "description":"Takes a screenshot and writes to a file with the specified prefix, appending a timestamp of the format (yyMMddHHmm)",
    "parameterNames":[
      "filePrefix"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertCurrentElement text=\"&lt;expected&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertCurrentElement text=\"([^\"]*)\"",
    "example":"AssertCurrentElement text=\"Hello World!\"",
    "description":"Check that the current element has the expected text value",
    "parameterNames":[
      "expected"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertCurrentInput value=\"&lt;expected&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertCurrentInput value=\"([^\"]*)\"",
    "example":"AssertCurrentInput value=\"Hello World!\"",
    "description":"Check that the current input field has the expected text value",
    "parameterNames":[
      "expected"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertCurrentInput value contains \"&lt;expected&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertCurrentInput value contains \"([^\"]*)\"",
    "example":"AssertCurrentInput value contains \"Hello\"",
    "description":"Check that the current input field contains the expected text value",
    "parameterNames":[
      "expected"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertCurrentElement text contains \"&lt;expected&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertCurrentElement text contains \"([^\"]*)\"",
    "example":"AssertCurrentElement text contains \"Hello world\"",
    "description":"Check that the current element contains the specified text",
    "parameterNames":[
      "expected"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertCurrentElement attribute=\"&lt;attribute&gt;\" value=\"&lt;expected&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertCurrentElement attribute=\"([^\"]*)\" value=\"([^\"]*)\"",
    "example":"AssertCurrentElement attribute=\"class\" value=\"icon32x32\"",
    "description":"Check that the current element has the specified attribute and value",
    "parameterNames":[
      "attribute",
      "expected"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertPageTitle is \"&lt;expectedTitle&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertPageTitle is \"([^\"]*)\"",
    "example":"AssertPageTitle is \"My Home Page\"",
    "description":"Check that the page title is ....",
    "parameterNames":[
      "expectedTitle"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertPageSourceContains \"&lt;expected&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertPageSourceContains \"(.*)\"$",
    "example":"AssertPageSourceContains \"foobar\"",
    "description":"Simple text search on page source",
    "parameterNames":[
      "expected"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertCheckBox checked=\"&lt;checkedString&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertCheckBox checked=\"?([^\"]*)\"?",
    "example":"AssertCheckBox checked=true/false",
    "description":"Check that the current element, a checkbox is checked or not",
    "parameterNames":[
      "checkedString"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertRadioButton checked=\"&lt;checkedString&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertRadioButton checked=\"?([^\"]*)\"?",
    "example":"AssertRadioButton checked=true/false",
    "description":"Check that the current element, a radio button, is checked or not",
    "parameterNames":[
      "checkedString"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertCurrentElement has attributes=[&lt;attributeString&gt;]",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertCurrentElement has attributes=\\[(.*)\\]",
    "example":"AssertCurrentElement has\n          attributes=[type=\"submit\",value=\"Search\"]",
    "description":"Check that the current element has the specified attributes",
    "parameterNames":[
      "attributeString"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"RememberForScenario textFrom \"&lt;elementId&gt;\" as \"&lt;nameToSaveAs&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"RememberForScenario textFrom \"([^\"]*)\" as \"([^\"]*)\"",
    "example":"RememberForScenario textFrom \"projectName\" as \"savedProjectName\"",
    "description":"Grab the text of an element (identified by id) and save it for the  duration of this scenario",
    "parameterNames":[
      "elementId",
      "nameToSaveAs"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertDifferent rememberedValue \"&lt;rememberedValueName&gt;\" compareToElement \"&lt;elementId&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertDifferent rememberedValue \"([^\"]*)\" compareToElement \"([^\"]*)\"",
    "example":"AssertDifferent rememberedValue \"savedProjectName\"\n          compareToElement \"projectName\"",
    "description":"Compare the text of an element (identified by ID) to a value previously  remembered",
    "parameterNames":[
      "rememberedValueName",
      "elementId"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertSame rememberedValue \"&lt;rememberedValueName&gt;\" compareToElement \"&lt;elementId&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertSame rememberedValue \"([^\"]*)\" compareToElement \"([^\"]*)\"",
    "example":"AssertSame rememberedValue \"savedProjectName\" compareToElement\n          \"projectName\"",
    "description":"Compare the text of an element (identified by ID) to a value previously  remembered - assert they're the same",
    "parameterNames":[
      "rememberedValueName",
      "elementId"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Assertions",
    "expression":"AssertNotPresent text=\"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.AssertionWebDriverSubStepImplementations",
    "regex":"AssertNotPresent text=\"([^\"]*)\"",
    "example":"AssertNotPresent text=\"undesirable text\"",
    "description":"Assert that the specified text is not found within the page source",
    "parameterNames":[
      "text"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindById &lt;id&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindById ([^\"]*)",
    "example":"FindById username",
    "description":"Find an element by it's ID",
    "parameterNames":[
      "id"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindByIdTimeout &lt;id&gt; timeout = &lt;timeout&gt; secs",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindByIdTimeout ([^\"]*) timeout = ([^\"]*) secs",
    "example":"FindByIdTimeout username timeout = 15 secs",
    "description":"Find an element by it's ID with the specified timeout",
    "parameterNames":[
      "id",
      "timeout"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Finders",
    "expression":"FindByXpath &lt;xpath&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindByXpath (.*)$",
    "example":"FindByXpath //li[a/i[contains(@class, \"NOT_RUN\")]]",
    "description":"Finds an element using an xpath expression, the expression may contain quotes, unlike an earlier implementation.  Xpath expressions should search rather than full paths to elements",
    "parameterNames":[
      "xpath"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindByName \"&lt;name&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindByName \"?([^\"]*)\"?",
    "example":"FindByName \"named field\"",
    "description":"Find an element using the name attribute of the element",
    "parameterNames":[
      "name"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindFirstTagElementContainingText tag=\"&lt;tag&gt;\" text=\"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindFirstTagElementContainingText tag=\"([^\"]*)\" text=\"([^\"]*)\"",
    "example":"FindFirstTagElementContainingText tag=\"ul\"\n          text=\"list item itext\"",
    "description":"Finds an element on the page with the specified tag and containing the specified text",
    "parameterNames":[
      "tag",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindChild ByName name=\"&lt;name&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindChild ByName name=\"?([^\"]*)\"?",
    "example":"FindChild ByName name=\"child name\"",
    "description":"Finds an element that is a child of the current element using the name  attribute, another Find method should be used first",
    "parameterNames":[
      "name"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindChild ByTagAndAttributes tag=\"&lt;tag&gt;\" attributes=[&lt;attributeString&gt;]",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindChild ByTagAndAttributes tag=\"?([^\"]*)\"? attributes=\\[(.*)\\]",
    "example":"FindChild ByTagAndAttributes tag=\"input\"\n          attributes=[type=\"submit\",value=\"Search\"]",
    "description":"Finds an element that is a child of the current element using the tag  name and specified attributes, another Find method should be used first",
    "parameterNames":[
      "tag",
      "attributeString"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindChild ByTagAndAttributes tag=\"&lt;tag&gt;\" attributes=[&lt;attributeString&gt;] with text=\"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindChild ByTagAndAttributes tag=\"?([^\"]*)\"? attributes=\\[(.*)\\] with text=\"([^\"]*)\"",
    "example":"FindChild ByTagAndAttributes tag=\"input\"\n          attributes=[type=\"submit\",value=\"Search\"] with text=\"bob\"",
    "description":"Finds an element that is a child of the current element using the tag  name, specified attributes and text, another Find method should be used first",
    "parameterNames":[
      "tag",
      "attributeString",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindFirstChild ByTagAndAttributes tag=\"&lt;tag&gt;\" attributes=[&lt;attributeString&gt;]",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindFirstChild ByTagAndAttributes tag=\"?([^\"]*)\"? attributes=\\[(.*)\\]",
    "example":"FindFirstChild ByTagAndAttributes tag=\"input\"\n          attributes=[type=\"submit\",value=\"Search\"]",
    "description":"Finds the first child element of the 'current' element using the tag name  and specified attributes, another Find method should be used first",
    "parameterNames":[
      "tag",
      "attributeString"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindCheckbox inside tag=\"&lt;tag&gt;\" with label=\"&lt;label&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindCheckbox inside tag=\"?([^\"]*)\"? with label=\"([^\"]*)\"",
    "example":"FindCheckbox inside tag=\"label\" with label=\"a checkbox label\"",
    "description":"Finds a checkbox that is a child of the specified tag, that contains the  specified text; eg.       &lt;pre&gt;      &lt;label&gt;      &lt;input type=&quot;checkbox&quot; name=&quot;checkbox_name&quot; value=&quot;yeah&quot;/&gt;a checkbox &lt;span&gt;label&lt;/span&gt;      &lt;/label&gt;      &lt;/pre&gt;",
    "parameterNames":[
      "tag",
      "label"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindRadioButton inside tag=\"&lt;tag&gt;\" with label=\"&lt;label&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindRadioButton inside tag=\"?([^\"]*)\"? with label=\"([^\"]*)\"",
    "example":"FindRadioButton inside tag=\"label\" with label=\"a radio label\"",
    "description":"Finds a radiobutton that is a child of the specified tag, that contains  the specified text; eg.       &lt;pre&gt;      &lt;label&gt;      &lt;input type=&quot;radio&quot; name=&quot;radio_name&quot; value=&quot;yeah&quot;/&gt;a radio &lt;span&gt;label&lt;/span&gt;      &lt;/label&gt;      &lt;/pre&gt;",
    "parameterNames":[
      "tag",
      "label"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindByTagAndAttributes tag=\"&lt;tag&gt;\" attributes=[&lt;attributeString&gt;]",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindByTagAndAttributes tag=\"?([^\"]*)\"? attributes=\\[(.*)\\]",
    "example":"FindByTagAndAttributes tag=\"input\"\n          attributes=[type=\"submit\",value=\"Search\"]",
    "description":"Find an element by tag name and a set of attributes and corresponding  values",
    "parameterNames":[
      "tag",
      "attributeString"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindFirstByTagAndAttributes tag=\"&lt;tag&gt;\" attributes=[&lt;attributeString&gt;]",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindFirstByTagAndAttributes tag=\"?([^\"]*)\"? attributes=\\[(.*)\\]",
    "example":"FindFirstByTagAndAttributes tag=\"input\"\n          attributes=[type=\"submit\",value=\"Search\"]",
    "description":"Finds the first element by tag name and a set of attributes and  corresponding values",
    "parameterNames":[
      "tag",
      "attributeString"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindNthByTagAndAttributes n=\"&lt;nth&gt;\" tag=\"&lt;tag&gt;\" attributes=[&lt;attributeString&gt;]",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindNthByTagAndAttributes n=\"?([^\"]*)\"? tag=\"?([^\"]*)\"? attributes=\\[(.*)\\]",
    "example":"FindNthByTagAndAttributes n=2 tag=\"input\"\n          attributes=[type=\"submit\",value=\"Search\"]",
    "description":"Finds the n th element by tag name and a set of attributes and  corresponding values",
    "parameterNames":[
      "nth",
      "tag",
      "attributeString"
    ],
    "parameterClassNames":[
      "Integer",
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindParentByTagAndAttributes tag=\"&lt;tag&gt;\" attributes=[&lt;attributeString&gt;] ThatHasChild tag=\"&lt;childTag&gt;\" text=\"&lt;childText&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindParentByTagAndAttributes tag=\"?([^\"]*)\"? attributes=\\[(.*)\\] ThatHasChild tag=\"?([^\"]*)\"? text=\"([^\"]*)\"",
    "example":"FindParentByTagAndAttributes tag=\"table\"\n          attributes=[class=\"mytable\"] ThatHasChild tag=\"caption\"\n          text=\"wahoo\"",
    "description":"Finds an element by tag name and a set of attributes and corresponding  values, that has a child tag element of the specified type and having the  specified text",
    "parameterNames":[
      "tag",
      "attributeString",
      "childTag",
      "childText"
    ],
    "parameterClassNames":[
      "String",
      "String",
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindParentByTagAndAttributes tag=\"&lt;tag&gt;\" attributes=[&lt;attributeString&gt;] ThatHasChild tag=\"&lt;childTag&gt;\" attributes=[&lt;childAttributeString&gt;]",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindParentByTagAndAttributes tag=\"?([^\"]*)\"? attributes=\\[(.*)\\] ThatHasChild tag=\"?([^\"]*)\"? attributes=\\[(.*)\\]",
    "example":"FindParentByTagAndAttributes tag=\"table\"\n          attributes=[class=\"mytable\"] ThatHasChild tag=\"caption\"\n          attributes=[class=\"childClass\"]",
    "description":"Finds an element by tag name and a set of attributes and corresponding  values, that has a child tag element of the specified type that has the  specified attributes..",
    "parameterNames":[
      "tag",
      "attributeString",
      "childTag",
      "childAttributeString"
    ],
    "parameterClassNames":[
      "String",
      "String",
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindById &lt;id&gt; and text = \"&lt;expected&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindById ([^\"]*) and text = \"([^\"]*)\"",
    "example":"FindById msg_id and text = \"Hello World\"",
    "description":"Find the element with id that has the text ....",
    "parameterNames":[
      "id",
      "expected"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindFirstChildElementContainingText xpath=\"&lt;xpath&gt;\" text=\"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindFirstChildElementContainingText xpath=\"([^\"]*)\" text=\"([^\"]*)\"",
    "example":"FindFirstChildElementContainingText xpath=\"li//a\" text =\n          \"Log Out\"",
    "description":"From the current element, apply the xpath selecting the first child that  has the text ...",
    "parameterNames":[
      "xpath",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindFirstTagElementStartingWithText tag=\"&lt;tag&gt;\" text=\"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindFirstTagElementStartingWithText tag=\"([^\"]*)\" text=\"([^\"]*)\"",
    "example":"FindTagElementStartingWithText tag=\"ul\" text=\"list item itext\"",
    "description":"Finds the first html tag that starts with the specified text",
    "parameterNames":[
      "tag",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Location",
    "expression":"FindByTagAndAttributesWithText tag=\"&lt;tag&gt;\" attributes=[&lt;attributeString&gt;] with text=\"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindByTagAndAttributesWithText tag=\"?([^\"]*)\"? attributes=\\[(.*)\\] with text=\"([^\"]*)\"",
    "example":"FindByTagAndAttributesWithText tag=\"input\" attributes=[type=\"submit\",value=\"Search\"] with text=\"abc\"",
    "description":"Find an element by tag name and a set of attributes and expected text",
    "parameterNames":[
      "tag",
      "attributeString",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String",
      "String"
    ]
  },
  {
    "section":"Finders",
    "expression":"FindById &lt;elementId&gt; containing text=\"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FinderWebDriverSubStepImplementations",
    "regex":"FindById ([^\"]*) containing text=\"([^\"]*)\"",
    "example":"FindById id containing text=\"abc\"",
    "description":"Finds and waits for if necessary, an element by Id containing the specified text",
    "parameterNames":[
      "elementId",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Clicks",
    "expression":"Submit",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"Submit",
    "example":"Submit",
    "description":"Submit the form of the current element. NB using click is preferable as  javascript may be executed on click, which this method would bypass",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"Forms",
    "expression":"SendKeys \"&lt;value&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"SendKeys \"([^\"]*)\"",
    "example":"SendKeys \"hello\"",
    "description":"Enters text to the current element, without clearing any current content  first",
    "parameterNames":[
      "value"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Forms",
    "expression":"SendKey Key.&lt;key&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"SendKey Key\\.(.+)",
    "example":"SendKey Key.RETURN",
    "description":"Enters the given key into the current element, without clearing any current content    Note this is to be used for 'special' keys defined by org.openqa.selenium.Keys",
    "parameterNames":[
      "key"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Forms",
    "expression":"ClearAndSendKeys \"&lt;value&gt;\" to id &lt;id&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"ClearAndSendKeys \"([^\"]*)\" to id ([^\"]*)",
    "example":"ClearAndSendKeys \"fred\" to id username",
    "description":"Find an element by id, clear any text from the element, and enter text",
    "parameterNames":[
      "value",
      "id"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Forms",
    "expression":"ClearAndSendKeys \"&lt;value&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"ClearAndSendKeys \"([^\"]*)\"",
    "example":"ClearAndSendKeys \"hello\"",
    "description":"Clear any text from the element, and enter text (to the current element)",
    "parameterNames":[
      "value"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Forms",
    "expression":"ChooseOption \"&lt;value&gt;\" in id &lt;id&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"ChooseOption \"([^\"]*)\" in id ([^\"]*)",
    "example":"ChooseOption \"fred\" in id usersList",
    "description":"Select a value in the option list that has the id",
    "parameterNames":[
      "value",
      "id"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Forms",
    "expression":"ChooseOption \"&lt;value&gt;\" in current element",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"ChooseOption \"([^\"]*)\" in current element",
    "example":"ChooseOption \"fred\" in current element",
    "description":"Select a value in the option list in the current element, a Find  operation is required immediatebly before",
    "parameterNames":[
      "value"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Form",
    "expression":"AssertSelect id=\"&lt;id&gt;\" text=\"&lt;value&gt;\" is currently selected",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"AssertSelect id=\"([^\"]*)\" text=\"([^\"]*)\" is currently selected",
    "example":"AssertSelect id=\"select_id\" text=\"number two option\" is currently selected",
    "description":"Asserts that the select with the specified id has the specified option text selected",
    "parameterNames":[
      "id",
      "value"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Form",
    "expression":"AssertSelect id=\"&lt;id&gt;\" text=\"&lt;value&gt;\" is not currently selected",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"AssertSelect id=\"([^\"]*)\" text=\"([^\"]*)\" is not currently selected",
    "example":"AssertSelect id=\"select_id\" text=\"number one option\" is not currently selected",
    "description":"Asserts that the select with the specified id does not have the specified option text selected",
    "parameterNames":[
      "id",
      "value"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Forms",
    "expression":"SetRadioButton checked=&lt;checked&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"SetRadioButton checked=([^\"]*)",
    "example":"SetRadioButton checked=true",
    "description":"Sets the value of the current element, assumed to be a radio button to...",
    "parameterNames":[
      "checked"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Forms",
    "expression":"SetCheckedBox checked=&lt;checked&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"SetCheckedBox checked=([^\"]*)",
    "example":"SetCheckedBox checked=true",
    "description":"Sets the value of the current element, assumed to be a checkbox to...",
    "parameterNames":[
      "checked"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Form",
    "expression":"Select \"&lt;optionText&gt;\" option in class \"&lt;cssClassName&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"Select \"([^\"]*)\" option in class \"([^\"]*)\"",
    "example":"Select \"number two option\" option in class \"select-marker-class\"",
    "description":"Choose an option with the specified text in the select with the specified css class",
    "parameterNames":[
      "optionText",
      "cssClassName"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Form",
    "expression":"Select \"&lt;optionText&gt;\" option in Id \"&lt;id&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"Select \"([^\"]*)\" option in Id \"([^\"]*)\"",
    "example":"Select \"number one option\" option in Id \"select_id\"",
    "description":"Choose an option with the specified text in the select with the given id",
    "parameterNames":[
      "optionText",
      "id"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Form\n\n used to pass the path of a file for file uploads",
    "expression":"SendKeys pathOf property \"&lt;filePropertyName&gt;\" to current element",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"SendKeys pathOf property \"([^\"]*)\" to current element",
    "example":"SendKeys pathOf property \"test.filename\" to current element",
    "description":"Uses a value of a property in the config file, constructs a File and passes the absolute path of that file to the current element.  Useful for file upload scenarios.",
    "parameterNames":[
      "filePropertyName"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Form",
    "expression":"SendKeys pathOf property \"&lt;filePropertyName&gt;\" to id \"&lt;id&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.FormWebDriverSubStepImplementations",
    "regex":"SendKeys pathOf property \"([^\"]*)\" to id \"([^\"]*)\"",
    "example":"SendKeys pathOf property \"test.filename2\" to id \"text-id\"",
    "description":"Uses a value of a property in the config file, constructs a File and passes the absolute path of that file to the element with the specified id.  Useful for file upload scenarios.",
    "parameterNames":[
      "filePropertyName",
      "id"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Table",
    "expression":"FindTableBodyRow row &lt;row&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.TableSubStepImplementations",
    "regex":"FindTableBodyRow row ([^\"]*)",
    "example":"FindTableBodyRow row 3",
    "description":"Locates the table body row, assuming that the table has already been  located Row 1 is the first  &lt;tr&gt;  beneath a &lt;tbody&gt;",
    "parameterNames":[
      "row"
    ],
    "parameterClassNames":[
      "Integer"
    ]
  },
  {
    "section":"Table",
    "expression":"AssertTableValue column &lt;column&gt;, row &lt;row&gt; contains text \"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.TableSubStepImplementations",
    "regex":"AssertTableValue column ([^\"]*), row ([^\"]*) contains text \"([^\"]*)\"",
    "example":"AssertTableValue column 2, row 3 contains text \"Hello Bob\"",
    "description":"Check that a table cell contains the specified text using a 1 based  index. Row 1 is the first  &lt;tr&gt;  beneath a &lt;tbody&gt;",
    "parameterNames":[
      "column",
      "row",
      "text"
    ],
    "parameterClassNames":[
      "Integer",
      "Integer",
      "String"
    ]
  },
  {
    "section":"Table",
    "expression":"AssertColumn &lt;column&gt; text = \"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.TableSubStepImplementations",
    "regex":"AssertColumn (\\d+) text = \"([^\"]*)\"",
    "example":"AssertColumn 2 text = \"Mr A. Person\"",
    "description":"Step implementation to be used after a table and specific row, assert that the given column has the specified  text",
    "parameterNames":[
      "column",
      "text"
    ],
    "parameterClassNames":[
      "Integer",
      "String"
    ]
  },
  {
    "section":"Table",
    "expression":"FindTableRowWithColumnsThatContainText [&lt;columnText&gt;]",
    "className":"com.technophobia.webdriver.substeps.impl.TableSubStepImplementations",
    "regex":"FindTableRowWithColumnsThatContainText \\[(.*)\\]",
    "example":"FindTableRowWithColumnsThatContainText\n          [\"My Name\",\"Where it all began...\",\"December 19 2012\"]",
    "description":"Find a row in a table where columns exist that contain the specified  text. Not all columns of the table need to specified, however the order  is important. Finding multiple matching results will result in an error.    Once the row has been located, other FindInRow methods can be used that  may in turn refer to and set the 'Current Element', this method does not  set the current element for that reason.",
    "parameterNames":[
      "columnText"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Table",
    "expression":"FindElementInRow ByTagAndAttributes tag=\"&lt;tag&gt;\" attributes=[&lt;attributeString&gt;]",
    "className":"com.technophobia.webdriver.substeps.impl.TableSubStepImplementations",
    "regex":"FindElementInRow ByTagAndAttributes tag=\"?([^\"]*)\"? attributes=\\[(.*)\\]",
    "example":"FindElementInRow ByTagAndAttributes tag=\"a\"\n          attributes=[class=\"link-class\",....]",
    "description":"Find an element within a table row by tag and attributes.",
    "parameterNames":[
      "tag",
      "attributeString"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Table",
    "expression":"FindElementInRow linkText=\"&lt;linkText&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.TableSubStepImplementations",
    "regex":"FindElementInRow linkText=\"([^\"]*)\"",
    "example":"FindElementInRow linkText=\"View\"",
    "description":"Find a link (anchor) element within a table row using the link text as a  discriminator.",
    "parameterNames":[
      "linkText"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"FindByTag \"&lt;tag&gt;\" with cssClassRegex \"&lt;cssRegex&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"FindByTag \"([^\"]*)\" with cssClassRegex \"([^\"]*)\"",
    "example":"FindByTag \"tag\" with cssClassRegex \".* marker-\\d .*\"",
    "description":"Finds an element of the specified type and with css classes that match the specified expression",
    "parameterNames":[
      "tag",
      "cssRegex"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"FindChildByTag \"&lt;tag&gt;\" with cssClassRegex \"&lt;cssRegex&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"FindChildByTag \"([^\"]*)\" with cssClassRegex \"([^\"]*)\"",
    "example":"FindChildByTag \"div\" with cssClassRegex \"nested-div-class-\\d{4}\"",
    "description":"Finds an element with a css class that matches a regex, relative to the current, previously found element.",
    "parameterNames":[
      "tag",
      "cssRegex"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"FindByTag \"&lt;tag&gt;\" with cssClassRegex \"&lt;cssRegex&gt;\" and containing text \"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"FindByTag \"([^\"]*)\" with cssClassRegex \"([^\"]*)\" and containing text \"([^\"]*)\"",
    "example":"FindByTag \"h4\" with cssClassRegex \".* markerClass-\\d .*\" and containing text \"Another heading\"",
    "description":"Finds an element of the specified type and with css classes that match the specified expression and containing the specified text",
    "parameterNames":[
      "tag",
      "cssRegex",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String",
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"ClickByCssClass \"&lt;cssClassName&gt;\" if present",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"ClickByCssClass \"([^\"]*)\" if present",
    "example":"ClickByCssClass \"not-present-button\" if present",
    "description":"Click on an element located by css classname if present, NB. this step implementation does not wait for the element to be present",
    "parameterNames":[
      "cssClassName"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"FindByCssClass \"&lt;cssClassName&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"FindByCssClass \"([^\"]*)\"",
    "example":"FindByCssClass \"markerClass-1\"",
    "description":"Find an element that has the specified CSS class (the element can have other classes that apply, but only one can be specified)",
    "parameterNames":[
      "cssClassName"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"FindByCssClass \"&lt;cssClass&gt;\" with text \"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"FindByCssClass \"([^\"]*)\" with text \"([^\"]*)\"",
    "example":"FindByCssClass \"somethingElse\" with text \"Another heading\"",
    "description":"Find an element that has the specified CSS class and text(the element can have other classes that apply, but only one can be specified)",
    "parameterNames":[
      "cssClass",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"FindByCssClass \"&lt;cssClass&gt;\" containing text \"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"FindByCssClass \"([^\"]*)\" containing text \"([^\"]*)\"",
    "example":"FindByCssClass \"markerClass-2\" containing text \"Another\"",
    "description":"Find an element that has the specified CSS class and contains the text (the element can have other classes that apply, but only one can be specified)",
    "parameterNames":[
      "cssClass",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"FindByCssClass \"&lt;cssClass&gt;\" using timeout \"&lt;timeoutSecs&gt;\" with text \"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"FindByCssClass \"([^\"]*)\" using timeout \"(\\d+)\" with text \"([^\"]*)\"",
    "example":"FindByCssClass \"two-divs\" using timeout \"500\" with text \"2\"",
    "description":"Locates an element with the specified CSS class and text within the specified timeout",
    "parameterNames":[
      "cssClass",
      "timeoutSecs",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "long",
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"FindByCssClass \"&lt;cssClass&gt;\" using timeout \"&lt;timeoutSecs&gt;\" containing \"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"FindByCssClass \"([^\"]*)\" using timeout \"(\\d+)\" containing \"([^\"]*)\"",
    "example":"FindByCssClass \"two-divs\" using timeout \"500\" containing \"1\"",
    "description":"Locates an element with the specified CSS class and containing the specified text within the specified timeout",
    "parameterNames":[
      "cssClass",
      "timeoutSecs",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "long",
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"FindNthByTagAndText from parent by CSSSelector \"&lt;parentCSSSelector&gt;\", tag name \"&lt;tagName&gt;\", tag number \"&lt;tagNumber&gt;\" containing text \"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"FindNthByTagAndText from parent by CSSSelector \"([^\"]*)\", tag name \"([^\"]*)\", tag number \"(\\d+)\" containing text \"([^\"]*)\"",
    "example":"FindNthByTagAndText from parent by CSSSelector \".parent-div-class\", tag name \"span\", tag number \"2\" containing text \"two\"",
    "description":"Finds a parent element using a CSS Selector, then finds the n th (1 based) instance of particular tag with the expected text",
    "parameterNames":[
      "parentCSSSelector",
      "tagName",
      "tagNumber",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String",
      "int",
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"AssertCssSelector \"&lt;cssSelector&gt;\" is not present",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"AssertCssSelector \"([^\"]*)\" is not present",
    "example":"AssertCssSelector \".not-present-button\" is not present",
    "description":"Ensures that the CSS Selector returns no results.",
    "parameterNames":[
      "cssSelector"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"AssertCssSelector \"&lt;cssSelector&gt;\" is present",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"AssertCssSelector \"([^\"]*)\" is present",
    "example":"AssertCssSelector \".two-divs\" is present",
    "description":"Ensure that the CSS Selector returns some results",
    "parameterNames":[
      "cssSelector"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"FindByCssSelector \"&lt;cssSelector&gt;\" with text \"&lt;expectedText&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"FindByCssSelector \"([^\"]*)\" with text \"([^\"]*)\"",
    "example":"FindByCssSelector \".present-button\" with text \"clicked\"",
    "description":"Finds an element by CSS selector with the specified text",
    "parameterNames":[
      "cssSelector",
      "expectedText"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"FindByCssSelector \"&lt;cssSelector&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"FindByCssSelector \"([^\"]*)\"",
    "example":"FindByCssSelector \"#parent_div_id\"",
    "description":"Finds an element using a css selector; #id, .class for example, more css selectors <a href=\"http://www.w3schools.com/cssref/css_selectors.asp\">here</a>",
    "parameterNames":[
      "cssSelector"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"AssertCssSelector \"&lt;cssSelector&gt;\" count is \"&lt;expectedSize&gt;\" or less",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"AssertCssSelector \"([^\"]*)\" count is \"([^\"]*)\" or less",
    "example":"AssertCssSelector \"two-divs\" count is \"2\" or less",
    "description":"Checks that the number of elements located by the CSS Selector is less than the specified size",
    "parameterNames":[
      "cssSelector",
      "expectedSize"
    ],
    "parameterClassNames":[
      "String",
      "int"
    ]
  },
  {
    "section":"CSS",
    "expression":"AssertCssSelector \"&lt;cssSelector&gt;\" count is greater than \"&lt;expectedSize&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"AssertCssSelector \"([^\"]*)\" count is greater than \"([^\"]*)\"",
    "example":"AssertCssSelector \"two-divs\" count is greater than \"1\"",
    "description":"Checks that the number of elements located by the CSS Selector is greater than the specified size",
    "parameterNames":[
      "cssSelector",
      "expectedSize"
    ],
    "parameterClassNames":[
      "String",
      "int"
    ]
  },
  {
    "section":"CSS",
    "expression":"Find ByChained CSS selectors \"&lt;cssSelector1&gt;\", \"&lt;cssSelector2&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"Find ByChained CSS selectors \"([^\"]*)\", \"([^\"]*)\"",
    "example":"Find ByChained CSS selectors \".parent\", \".nested\"",
    "description":"Uses two chained CSS Selectors to find an element and set it is as the current element",
    "parameterNames":[
      "cssSelector1",
      "cssSelector2"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"WaitFor CSS Selector \"&lt;cssSelector&gt;\" to be visibile",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"WaitFor CSS Selector \"([^\"]*)\" to be visibile",
    "example":"WaitFor CSS Selector \"#visible-div\" to be visibile",
    "description":"Waits for an element located using the supplied CSS selector to be visible",
    "parameterNames":[
      "cssSelector"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"CSS",
    "expression":"WaitFor CSS Selector \"&lt;cssSelector&gt;\" to be invisibile",
    "className":"com.technophobia.webdriver.substeps.impl.CssStepImplementations",
    "regex":"WaitFor CSS Selector \"([^\"]*)\" to be invisibile",
    "example":"WaitFor CSS Selector \"#visible-div\" to be invisibile",
    "description":"Waits for an element located using the supplied CSS selector to be invisible",
    "parameterNames":[
      "cssSelector"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"windows",
    "expression":"Switch to new window",
    "className":"com.technophobia.webdriver.substeps.impl.IFrameAndWindowSubstepImplementations",
    "regex":"Switch to new window",
    "example":"Switch to new window",
    "description":"Switches to the new window which has been opened",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"windows",
    "expression":"Close new window",
    "className":"com.technophobia.webdriver.substeps.impl.IFrameAndWindowSubstepImplementations",
    "regex":"Close new window",
    "example":"Close new window",
    "description":"Close the new window which was been opened and return the focus to the original window",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"windows",
    "expression":"Switch to new frame by CSS selector \"&lt;iFrameCssSelector&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.IFrameAndWindowSubstepImplementations",
    "regex":"Switch to new frame by CSS selector \"([^\"]*)\"",
    "example":"Switch to new frame by CSS selector \".iframe-class\"",
    "description":"Switches to the new iFrame present on current page and store the webdriver element for the iFrame",
    "parameterNames":[
      "iFrameCssSelector"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"windows",
    "expression":"Switch to new frame by name \"&lt;frameName&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.IFrameAndWindowSubstepImplementations",
    "regex":"Switch to new frame by name \"([^\"]*)\"",
    "example":"Switch to new frame by name \"iframe-name\"",
    "description":"Switches to the specified iFrame present on current page and store the webdriver element for the iFrame",
    "parameterNames":[
      "frameName"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Windows",
    "expression":"Switch to default content",
    "className":"com.technophobia.webdriver.substeps.impl.IFrameAndWindowSubstepImplementations",
    "regex":"Switch to default content",
    "example":"Switch to default content",
    "description":"Switches back to the default content",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"Windows",
    "expression":"SwitchFrameToCurrentElement",
    "className":"com.technophobia.webdriver.substeps.impl.IFrameAndWindowSubstepImplementations",
    "regex":"SwitchFrameToCurrentElement",
    "example":"SwitchFrameToCurrentElement",
    "description":"Transfer the focus into the current element (set with a previous Find  method) which should be a frame or iframe",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"Finders",
    "expression":"FindById \"&lt;id&gt;\" with text matching regex &lt;regex&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.NewFinderStepImplementations",
    "regex":"FindById \"([^\"]*)\" with text matching regex (.*)$",
    "example":"FindById \"span-id-with-regex\" with text matching regex \\w* xyzabc.*",
    "description":"Attempts to find an element with a specific id and matching the text against a regex",
    "parameterNames":[
      "id",
      "regex"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Finders",
    "expression":"FindBy xpath with token replacement $x&lt;xpath&gt;\")&lt;tokens&gt;",
    "className":"com.technophobia.webdriver.substeps.impl.NewFinderStepImplementations",
    "regex":"FindBy xpath with token replacement \\$x\\(\"([^\"]*)\"\\)(.*)$",
    "example":"FindBy xpath with token replacement $x(\"//li[a/i[contains(@class, '%s')]]\") \"FAILED\"",
    "description":"Finds an element using an xpath expression which is merged using placeholders and additional token parameters. NB. the xpath expression is surrounded by $x(\".... \"),  (the same format that can be used directly in Chrome Dev tools) and therefore can't contain double quotes.",
    "parameterNames":[
      "xpath",
      "tokens"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Finders",
    "expression":"WaitFor id \"&lt;id&gt;\" to hide",
    "className":"com.technophobia.webdriver.substeps.impl.NewFinderStepImplementations",
    "regex":"WaitFor id \"([^\"]*)\" to hide",
    "example":"WaitFor id \"invisible-div\" to be invisible",
    "description":"Waits for the element with the specified id to become invisible (either visibility or display CSS attributes)",
    "parameterNames":[
      "id"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Finders",
    "expression":"WaitFor id \"&lt;id&gt;\" to be visible",
    "className":"com.technophobia.webdriver.substeps.impl.NewFinderStepImplementations",
    "regex":"WaitFor id \"([^\"]*)\" to be visible",
    "example":"WaitFor id \"visible-div\" to be visible",
    "description":"Waits for the element with the specified id to become visible (either visibility or display CSS attributes)",
    "parameterNames":[
      "id"
    ],
    "parameterClassNames":[
      "String"
    ]
  },
  {
    "section":"Miscellaneous",
    "expression":"NotImplemented",
    "className":"com.technophobia.webdriver.substeps.impl.NewFinderStepImplementations",
    "regex":"NotImplemented",
    "example":"NotImplemented",
    "description":"A step implementation to use when sketching out features and substep defs",
    "parameterNames":[
      
    ],
    "parameterClassNames":[
      
    ]
  },
  {
    "section":"Finders",
    "expression":"FindByTag \"&lt;tag&gt;\" with text \"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.NewFinderStepImplementations",
    "regex":"FindByTag \"([^\"]*)\" with text \"([^\"]*)\"",
    "example":"FindByTag \"div\" with text \"some text\"",
    "description":"Finds an element with the specified tag, with the specified text",
    "parameterNames":[
      "tag",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  },
  {
    "section":"Finders",
    "expression":"FindByTag \"&lt;tag&gt;\" containing text \"&lt;text&gt;\"",
    "className":"com.technophobia.webdriver.substeps.impl.NewFinderStepImplementations",
    "regex":"FindByTag \"([^\"]*)\" containing text \"([^\"]*)\"",
    "example":"FindByTag \"span\" containing text \"xyzabc\"",
    "description":"Finds an element with the specified tag, containing the specified text",
    "parameterNames":[
      "tag",
      "text"
    ],
    "parameterClassNames":[
      "String",
      "String"
    ]
  }
];
