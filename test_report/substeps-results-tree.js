var treeData = {
  "id":"261",
  "text":"Self Test Features",
  "icon":"FAILED",
  "children":[
    {
      "id":"105",
      "text":"A feature to self test the webdriver substeps implementations",
      "icon":"CHILD_FAILED",
      "children":[
        {
          "id":"104",
          "text":"a scenario",
          "icon":"CHILD_FAILED",
          "children":[
            {
              "id":"2",
              "text":"Given I go to the self test page",
              "icon":"PASSED",
              "children":[
                {
                  "id":"1",
                  "text":"NavigateTo /self-test.html",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"4",
              "text":"Then I can see 'Hello Self Test page'",
              "icon":"PASSED",
              "children":[
                {
                  "id":"3",
                  "text":"WaitForPageTitle \"Hello Self Test page\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"6",
              "text":"And if I click the 'click me' button",
              "icon":"PASSED",
              "children":[
                {
                  "id":"5",
                  "text":"ClickSubmitButton \"click me\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"8",
              "text":"Then I can see \"Wahoo\" message",
              "icon":"PASSED",
              "children":[
                {
                  "id":"7",
                  "text":"FindById show-text-on-button-click-text-div-id and text = \"Wahoo\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"10",
              "text":"And I dont see \"number one option\" in select id select_id",
              "icon":"PASSED",
              "children":[
                {
                  "id":"9",
                  "text":"AssertSelect id=\"select_id\" text=\"number one option\" is not currently selected",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"12",
              "text":"And I see \"number two option\" in select id select_id",
              "icon":"PASSED",
              "children":[
                {
                  "id":"11",
                  "text":"AssertSelect id=\"select_id\" text=\"number two option\" is currently selected",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"14",
              "text":"Then I choose \"number three option\" in select id select_id",
              "icon":"PASSED",
              "children":[
                {
                  "id":"13",
                  "text":"ChooseOption \"number three option\" in id select_id",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"16",
              "text":"And I see \"number three option\" in select id select_id",
              "icon":"PASSED",
              "children":[
                {
                  "id":"15",
                  "text":"AssertSelect id=\"select_id\" text=\"number three option\" is currently selected",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"18",
              "text":"And if I click the Click by id button",
              "icon":"PASSED",
              "children":[
                {
                  "id":"17",
                  "text":"ClickById click-id",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"20",
              "text":"Then I can see another \"Wahoo Two\" message",
              "icon":"PASSED",
              "children":[
                {
                  "id":"19",
                  "text":"FindById show-text-on-id-click-text-div-id and text = \"Wahoo Two\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"22",
              "text":"And if I click the 'delayed click' button",
              "icon":"PASSED",
              "children":[
                {
                  "id":"21",
                  "text":"ClickSubmitButton \"delayed click\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"24",
              "text":"Then I see \"Delayed Text\" after a pause",
              "icon":"PASSED",
              "children":[
                {
                  "id":"23",
                  "text":"FindByIdTimeout show-text-on-deplayed-id-click-text-div-id timeout = 10 secs",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"27",
              "text":"Given I enter \"some text\" into the text field",
              "icon":"PASSED",
              "children":[
                {
                  "id":"25",
                  "text":"FindByTagAndAttributes tag=\"?input\"? attributes=\\[name=\"named_text_field\",maxlength=\"10\",size=\"10\"\\]",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"26",
                  "text":"ClearAndSendKeys \"some text\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"30",
              "text":"Then the text field will contain \"some text\"",
              "icon":"PASSED",
              "children":[
                {
                  "id":"28",
                  "text":"FindByName \"?named_text_field\"?",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"29",
                  "text":"AssertCurrentElement attribute=\"value\" value=\"some text\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"34",
              "text":"And the field located beneath the heading has the text 'some child text'",
              "icon":"PASSED",
              "children":[
                {
                  "id":"31",
                  "text":"FindById parent_div_id",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"32",
                  "text":"FindChild ByTagAndAttributes tag=\"?span\"? attributes=\\[class=\"some_class\"\\]",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"33",
                  "text":"AssertCurrentElement text=\"some child text\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"38",
              "text":"And I can click the link \"a text link\" and see \"clicked a link\"",
              "icon":"PASSED",
              "children":[
                {
                  "id":"35",
                  "text":"ClickLink \"a text link\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"36",
                  "text":"FindById show-text-on-link-click-text-div-id",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"37",
                  "text":"AssertCurrentElement text=\"clicked a link\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"41",
              "text":"Given radio button with text \"radio - option 1\" is checked",
              "icon":"PASSED",
              "children":[
                {
                  "id":"39",
                  "text":"FindRadioButton inside tag=\"?label\"? with label=\"radio - option 1\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"40",
                  "text":"AssertRadioButton checked=\"?true\"?",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"44",
              "text":"Given radio button with text \"radio - option 2\" is not checked",
              "icon":"PASSED",
              "children":[
                {
                  "id":"42",
                  "text":"FindRadioButton inside tag=\"?label\"? with label=\"radio - option 2\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"43",
                  "text":"AssertRadioButton checked=\"?false\"?",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"47",
              "text":"Then I can check radio button with text \"radio - option 3\"",
              "icon":"PASSED",
              "children":[
                {
                  "id":"45",
                  "text":"FindRadioButton inside tag=\"?label\"? with label=\"radio - option 3\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"46",
                  "text":"SetRadioButton checked=true",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"51",
              "text":"Then radio button with text \"radio - option 3\" is checked",
              "icon":"PASSED",
              "children":[
                {
                  "id":"50",
                  "text":"Given radio button with text \"<rb_text>\" is checked",
                  "icon":"PASSED",
                  "children":[
                    {
                      "id":"48",
                      "text":"FindRadioButton inside tag=\"?label\"? with label=\"radio - option 3\"",
                      "icon":"PASSED",
                      "state":{
                        "opened":false
                      }
                    },
                    {
                      "id":"49",
                      "text":"AssertRadioButton checked=\"?true\"?",
                      "icon":"PASSED",
                      "state":{
                        "opened":false
                      }
                    }
                  ],
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"54",
              "text":"Given checkbox with text \"a checkbox label\" is not checked",
              "icon":"PASSED",
              "children":[
                {
                  "id":"52",
                  "text":"FindCheckbox inside tag=\"?label\"? with label=\"a checkbox label\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"53",
                  "text":"AssertCheckBox checked=\"?false\"?",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"56",
              "text":"Then I can check checkbox with text \"a checkbox label\"",
              "icon":"PASSED",
              "children":[
                {
                  "id":"55",
                  "text":"SetCheckedBox checked=true",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"59",
              "text":"And checkbox with text \"a checkbox label\" is checked",
              "icon":"PASSED",
              "children":[
                {
                  "id":"57",
                  "text":"FindCheckbox inside tag=\"?label\"? with label=\"a checkbox label\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"58",
                  "text":"AssertCheckBox checked=\"?true\"?",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"62",
              "text":"And the table row 1, column 2 contains \"Mrs Evil Headtecher\"",
              "icon":"PASSED",
              "children":[
                {
                  "id":"60",
                  "text":"FindById table_id",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"61",
                  "text":"AssertTableValue column 2, row 1 contains text \"Mrs Evil Headtecher\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"68",
              "text":"And find by child works",
              "icon":"PASSED",
              "children":[
                {
                  "id":"63",
                  "text":"FindByTagAndAttributes tag=\"?div\"? attributes=\\[class=\"mini-profile\"\\]",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"64",
                  "text":"FindChild ByTagAndAttributes tag=\"?a\"? attributes=\\[class=\"btn edit-button dialog-modal\"\\]",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"65",
                  "text":"Click",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"66",
                  "text":"FindById mcshane-bug-div-id and text = \"mcshane\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"67",
                  "text":"FindById mcshane-negative-bug-div-id and text = \"mcshane negative test\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"71",
              "text":"And I can find the disabled text field",
              "icon":"PASSED",
              "children":[
                {
                  "id":"69",
                  "text":"FindById postcode",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"70",
                  "text":"AssertCurrentElement attribute=\"disabled\" value=\"true\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"73",
              "text":"And I dont see \"number two option\" in select id select_id",
              "icon":"PASSED",
              "children":[
                {
                  "id":"72",
                  "text":"AssertSelect id=\"select_id\" text=\"number two option\" is not currently selected",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"76",
              "text":"And I select the second option by looking at the text it contains",
              "icon":"PASSED",
              "children":[
                {
                  "id":"74",
                  "text":"FindFirstTagElementContainingText tag=\"option\" text=\"two\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"75",
                  "text":"Click",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"78",
              "text":"And I see \"number two option\" in select id select_id",
              "icon":"PASSED",
              "children":[
                {
                  "id":"77",
                  "text":"AssertSelect id=\"select_id\" text=\"number two option\" is currently selected",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"81",
              "text":"Then I find a row using column contents",
              "icon":"PASSED",
              "children":[
                {
                  "id":"79",
                  "text":"FindById table-contents-tests",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"80",
                  "text":"FindTableRowWithColumnsThatContainText \\[\"My Name\", \"Where it all began...\", \"09:31\"\\]",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"86",
              "text":"And I can find and click the link \"View\" in the row",
              "icon":"PASSED",
              "children":[
                {
                  "id":"82",
                  "text":"FindElementInRow linkText=\"View\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"83",
                  "text":"Click",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"84",
                  "text":"FindById show-text-on-link-click-in-row1",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"85",
                  "text":"FindById show-text-on-link-click-in-row2",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"89",
              "text":"And I can find a table with caption \"There are 2 comments awaiting moderation\"",
              "icon":"PASSED",
              "children":[
                {
                  "id":"87",
                  "text":"FindParentByTagAndAttributes tag=\"?table\"? attributes=\\[class=\"comments\"\\] ThatHasChild tag=\"?caption\"? text=\"There are 2 comments awaiting moderation\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"88",
                  "text":"AssertCurrentElement has attributes=\\[border=\"1\"\\]",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"92",
              "text":"And I can find a table with an error caption",
              "icon":"PASSED",
              "children":[
                {
                  "id":"90",
                  "text":"FindParentByTagAndAttributes tag=\"?table\"? attributes=\\[class=\"comments\"\\] ThatHasChild tag=\"?caption\"? attributes=\\[class=\"captionClassError\"\\]",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                },
                {
                  "id":"91",
                  "text":"AssertCurrentElement has attributes=\\[border=\"2\"\\]",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"94",
              "text":"And I can find an h4 tag with a css regex",
              "icon":"PASSED",
              "children":[
                {
                  "id":"93",
                  "text":"FindByTag \"h4\" with cssClassRegex \".* markerClass-d .*\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"96",
              "text":"And I can find an h4 tag with a css regex and text",
              "icon":"PASSED",
              "children":[
                {
                  "id":"95",
                  "text":"FindByTag \"h4\" with cssClassRegex \".* markerClass-d .*\" and containing text \"Another heading\"",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"97",
              "text":"FindById table_id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"98",
              "text":"FindTableBodyRow row 2",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"99",
              "text":"AssertColumn 2 text = \"Mr A. Person\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"100",
              "text":"FindById table_id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"101",
              "text":"FindTableBodyRow row 3",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"102",
              "text":"FindElementInRow ByTagAndAttributes tag=\"?span\"? attributes=\\[data-reactid=\"123456\"\\]",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"103",
              "text":"AssertCurrentElement text=\"Mr ZZ. Person\"",
              "icon":"FAILED",
              "state":{
                "opened":true
              }
            }
          ],
          "state":{
            "opened":true
          }
        }
      ],
      "state":{
        "opened":true
      }
    },
    {
      "id":"131",
      "text":"A feature to test Action Step implementations",
      "icon":"PASSED",
      "children":[
        {
          "id":"130",
          "text":"Test Action step impls",
          "icon":"PASSED",
          "children":[
            {
              "id":"107",
              "text":"Given I go to the self test page",
              "icon":"PASSED",
              "children":[
                {
                  "id":"106",
                  "text":"NavigateTo /self-test.html",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"108",
              "text":"ClickButton containing \"partially\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"109",
              "text":"FindById partial-text-button-div and text = \"Partial text matched Button click successful\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"110",
              "text":"ClickById other-button-enabler",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"111",
              "text":"FindById the-other-button",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"112",
              "text":"ClickWhenClickable",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"113",
              "text":"FindById the-other-button-div and text = \"Other button clicked\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"114",
              "text":"ClickById trigger-page-title-change",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"115",
              "text":"WaitForPageTitle \"A new page title\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"116",
              "text":"FindById dbl-click-trigger",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"117",
              "text":"PerformDoubleClick",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"118",
              "text":"FindById dbl-click-button-div and text = \"doubled clicked\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"119",
              "text":"FindById id-for-js-manipulation and text = \"initial\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"120",
              "text":"ExecuteJavascript document.getElementById(\"id-for-js-manipulation\").innerHTML = \"js fiddled\"$",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"121",
              "text":"FindById id-for-js-manipulation and text = \"js fiddled\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"122",
              "text":"NavigateTo https://swisnl.github.io/jQuery-contextMenu/demo.html",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"123",
              "text":"FindByCssClass \"context-menu-one\" with text \"right click me\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"124",
              "text":"PerformContextClick",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"125",
              "text":"FindByCssClass \"context-menu-item\" containing text \"Edit\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"126",
              "text":"AssertCurrentElement is visible",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"127",
              "text":"NavigateTo url property \"external.content\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"129",
              "text":"And the raw README is loaded",
              "icon":"PASSED",
              "children":[
                {
                  "id":"128",
                  "text":"AssertPageSourceContains \"Substeps.org Release Notes\"$",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            }
          ],
          "state":{
            "opened":false
          }
        }
      ],
      "state":{
        "opened":false
      }
    },
    {
      "id":"143",
      "text":"A feature to test Assertion based Step implementations",
      "icon":"PASSED",
      "children":[
        {
          "id":"142",
          "text":"Test Assertion step impls",
          "icon":"PASSED",
          "children":[
            {
              "id":"133",
              "text":"Given I go to the self test page",
              "icon":"PASSED",
              "children":[
                {
                  "id":"132",
                  "text":"NavigateTo /self-test.html",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"134",
              "text":"FindById span-id-with-regex",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"135",
              "text":"AssertCurrentElement text contains \"xyzabc\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"136",
              "text":"FindById input-value-assertion-id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"137",
              "text":"AssertCurrentInput value=\"123456\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"138",
              "text":"AssertNotPresent text=\"discombobulation\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"139",
              "text":"RememberForScenario textFrom \"remember-div\" as \"context.name\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"140",
              "text":"AssertSame rememberedValue \"context.name\" compareToElement \"to-compare-to-matching-div\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"141",
              "text":"AssertDifferent rememberedValue \"context.name\" compareToElement \"to-compare-to-not-matching-div\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            }
          ],
          "state":{
            "opened":false
          }
        }
      ],
      "state":{
        "opened":false
      }
    },
    {
      "id":"173",
      "text":"A feature to test CSS Step implementations",
      "icon":"PASSED",
      "children":[
        {
          "id":"172",
          "text":"Test css step impls",
          "icon":"PASSED",
          "children":[
            {
              "id":"145",
              "text":"Given I go to the self test page",
              "icon":"PASSED",
              "children":[
                {
                  "id":"144",
                  "text":"NavigateTo /self-test.html",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"146",
              "text":"FindByCssClass \"markerClass-1\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"147",
              "text":"FindByCssClass \"somethingElse\" with text \"Another heading\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"148",
              "text":"FindByCssClass \"markerClass-2\" containing text \"Another\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"149",
              "text":"FindByCssSelector \"#parent_div_id\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"150",
              "text":"FindByCssSelector \".markerClass-1\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"151",
              "text":"AssertCssSelector \".not-present-button\" is not present",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"152",
              "text":"ClickByCssClass \"not-present-button\" if present",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"153",
              "text":"ClickByCssClass \"present-button\" if present",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"154",
              "text":"FindByCssSelector \".present-button\" with text \"clicked\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"155",
              "text":"AssertCssSelector \".two-divs\" count is greater than \"1\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"156",
              "text":"AssertCssSelector \".two-divs\" count is \"2\" or less",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"157",
              "text":"AssertCssSelector \".two-divs\" is present",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"158",
              "text":"FindByCssClass \"two-divs\" using timeout \"500\" containing \"1\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"159",
              "text":"FindByCssClass \"two-divs\" using timeout \"500\" with text \"2\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"160",
              "text":"FindById visible-div",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"161",
              "text":"AssertCurrentElement is visible",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"162",
              "text":"ClickButton \"?hide something visible\"?",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"163",
              "text":"WaitFor CSS Selector \"#visible-div\" to be invisibile",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"164",
              "text":"ClickButton \"?make something visible\"?",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"165",
              "text":"WaitFor CSS Selector \"#visible-div\" to be visibile",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"166",
              "text":"Find ByChained CSS selectors \".parent-div-class\", \".nested-div-class\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"167",
              "text":"AssertCurrentElement text=\"expected\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"168",
              "text":"FindByCssSelector \".parent-div-class\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"169",
              "text":"FindChildByTag \"div\" with cssClassRegex \"nested-div-class-d{4}\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"170",
              "text":"AssertCurrentElement text=\"expected2\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"171",
              "text":"FindNthByTagAndText from parent by CSSSelector \".parent-div-class\", tag name \"span\", tag number \"2\" containing text \"two\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            }
          ],
          "state":{
            "opened":false
          }
        }
      ],
      "state":{
        "opened":false
      }
    },
    {
      "id":"203",
      "text":"A feature to test Form Step implementations",
      "icon":"PASSED",
      "children":[
        {
          "id":"202",
          "text":"Test Form step impls",
          "icon":"PASSED",
          "children":[
            {
              "id":"175",
              "text":"Given I go to the self test page",
              "icon":"PASSED",
              "children":[
                {
                  "id":"174",
                  "text":"NavigateTo /self-test.html",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"176",
              "text":"ClearAndSendKeys \"a test\" to id input-value-assertion-id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"177",
              "text":"FindById input-value-assertion-id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"178",
              "text":"AssertCurrentInput value=\"a test\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"179",
              "text":"FindById select_id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"180",
              "text":"ChooseOption \"number three option\" in current element",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"181",
              "text":"AssertSelect id=\"select_id\" text=\"number three option\" is currently selected",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"182",
              "text":"Select \"number one option\" option in Id \"select_id\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"183",
              "text":"AssertSelect id=\"select_id\" text=\"number one option\" is currently selected",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"184",
              "text":"Select \"number two option\" option in class \"select-marker-class\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"185",
              "text":"AssertSelect id=\"select_id\" text=\"number two option\" is currently selected",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"186",
              "text":"FindById text-id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"187",
              "text":"SendKeys \"abc123\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"188",
              "text":"FindById text-id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"189",
              "text":"AssertCurrentInput value=\"abc123\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"190",
              "text":"SendKey Key\\.BACK_SPACE",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"191",
              "text":"AssertCurrentInput value=\"abc12\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"192",
              "text":"FindById text-id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"193",
              "text":"ClearAndSendKeys \"\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"194",
              "text":"SendKeys pathOf property \"test.filename\" to current element",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"195",
              "text":"AssertCurrentInput value contains \"one.file\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"196",
              "text":"FindById text-id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"197",
              "text":"ClearAndSendKeys \"\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"198",
              "text":"SendKeys pathOf property \"test.filename2\" to id \"text-id\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"199",
              "text":"AssertCurrentInput value contains \"two.file\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"200",
              "text":"FindById input-value-to-submit-id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"201",
              "text":"Submit",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            }
          ],
          "state":{
            "opened":false
          }
        }
      ],
      "state":{
        "opened":false
      }
    },
    {
      "id":"246",
      "text":"A feature to test finder step implementations description",
      "icon":"PASSED",
      "children":[
        {
          "id":"245",
          "text":"Test finder step implementations",
          "icon":"PASSED",
          "children":[
            {
              "id":"205",
              "text":"Given I go to the self test page",
              "icon":"PASSED",
              "children":[
                {
                  "id":"204",
                  "text":"NavigateTo /self-test.html",
                  "icon":"PASSED",
                  "state":{
                    "opened":false
                  }
                }
              ],
              "state":{
                "opened":false
              }
            },
            {
              "id":"206",
              "text":"FindByTagAndAttributesWithText tag=\"?div\"? attributes=\\[data-reactid=\"12345\"\\] with text=\"div1 with tag and attributes\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"207",
              "text":"FindByTagAndAttributesWithText tag=\"?div\"? attributes=\\[data-reactid=\"12345\", aria-label=\"a-label\"\\] with text=\"div2 with tag and attributes\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"208",
              "text":"FindById find-child-by-name-parent",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"209",
              "text":"FindChild ByName name=\"?child1\"?",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"210",
              "text":"AssertCurrentElement text=\"child 1\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"211",
              "text":"FindById find-child-by-name-parent",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"212",
              "text":"FindChild ByTagAndAttributes tag=\"?div\"? attributes=\\[data-reactid=\"12345\"\\] with text=\"child div1 with tag and attributes\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"213",
              "text":"FindFirstByTagAndAttributes tag=\"?div\"? attributes=\\[data-reactid=\"54321\"\\]",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"214",
              "text":"AssertCurrentElement text=\"first\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"215",
              "text":"FindById find-child-by-name-parent",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"216",
              "text":"FindFirstChild ByTagAndAttributes tag=\"?div\"? attributes=\\[data-reactid=\"6789\"\\]",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"217",
              "text":"AssertCurrentElement text=\"first child\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"218",
              "text":"FindById find-child-by-name-parent",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"219",
              "text":"FindFirstTagElementStartingWithText tag=\"div\" text=\"beginning with\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"220",
              "text":"AssertCurrentElement text=\"beginning with first\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"221",
              "text":"FindNthByTagAndAttributes n=\"?2\"? tag=\"?div\"? attributes=\\[data-reactid=\"54321\"\\]",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"222",
              "text":"AssertCurrentElement text=\"second\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"223",
              "text":"FindByXpath //li[a/i[contains(@class, \"NOT_RUN\")]]$",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"224",
              "text":"AssertCurrentElement text=\"target\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"225",
              "text":"FindById ul-parent-id",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"226",
              "text":"FindFirstChildElementContainingText xpath=\"li//a\" text=\"decoy\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"227",
              "text":"FindByTag \"div\" with text \"some text\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"228",
              "text":"FindByTag \"span\" containing text \"xyzabc\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"229",
              "text":"FindById \"span-id-with-regex\" with text matching regex w* xyzabc.*$",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"230",
              "text":"AssertCurrentElement text=\"blah xyzabc found\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"231",
              "text":"NotImplemented",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"232",
              "text":"FindById visible-div",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"233",
              "text":"AssertCurrentElement is visible",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"234",
              "text":"ClickButton \"?hide something visible\"?",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"235",
              "text":"WaitFor id \"visible-div\" to hide",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"236",
              "text":"ClickButton \"?make something visible\"?",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"237",
              "text":"WaitFor id \"visible-div\" to be visible",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"238",
              "text":"FindById not-visible-div",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"239",
              "text":"AssertCurrentElement is invisible",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"240",
              "text":"FindById not-visible-hidden-div",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"241",
              "text":"AssertCurrentElement is invisible",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"242",
              "text":"FindBy xpath with token replacement \\$x\\//li[a/i[contains \"FAILED\"]]\"\\)(.*)$",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"243",
              "text":"AssertCurrentElement text=\"target2\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"244",
              "text":"FindById id-for-partial-text-match containing text=\"jarlsberg\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            }
          ],
          "state":{
            "opened":false
          }
        }
      ],
      "state":{
        "opened":false
      }
    },
    {
      "id":"260",
      "text":"A feature to test iframe and window related step impls",
      "icon":"PASSED",
      "children":[
        {
          "id":"259",
          "text":"Test iframe and window step implementations",
          "icon":"PASSED",
          "children":[
            {
              "id":"247",
              "text":"NavigateTo url property \"iframe.test.page\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"248",
              "text":"FindById outer-div-id and text = \"iframe page\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"249",
              "text":"Switch to new frame by name \"iframe-name\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"250",
              "text":"FindById iframed-div-id and text = \"iframed div\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"251",
              "text":"Switch to default content",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"252",
              "text":"FindById outer-div-id and text = \"iframe page\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"253",
              "text":"Switch to new frame by CSS selector \".iframe-class\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"254",
              "text":"FindById iframed-div-id and text = \"iframed div\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"255",
              "text":"Switch to default content",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"256",
              "text":"FindByCssSelector \".iframe-class\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"257",
              "text":"SwitchFrameToCurrentElement",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            },
            {
              "id":"258",
              "text":"FindById iframed-div-id and text = \"iframed div\"",
              "icon":"PASSED",
              "state":{
                "opened":false
              }
            }
          ],
          "state":{
            "opened":false
          }
        }
      ],
      "state":{
        "opened":false
      }
    }
  ],
  "state":{
    "opened":true
  }
}