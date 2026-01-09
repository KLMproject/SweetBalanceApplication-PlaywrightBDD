Feature:Medication Validation
Background: User is in home page after logged  into app

Scenario Outline:Verify Medication Form UI structure
Given User is on home page
When User clicks Medication 
Then User should see the <elementType> "<expectedText>"

Examples:

 | elementType | expectedText |
 | title | Diabetes Medication Tracker | 
 | subtext | Keep track of your medications and never miss a dose | 
 | heading | Your Medications | 
 | flexHeading | Today's Medications |
 | message1 | No medications added yet  |
 | message2 | Click the 'Add Medication' button to get started    |


Scenario:Verify date picker field in medication form
Given User is on home page
When User clicks Medication 
Then User should see valid date picker field with default value as today

Scenario:Verify add medication button in medication form
Given User is on home page
When User clicks Medication 
Then User should see add medication button

Scenario:Verify close button in medication form
Given User is on home page
When User clicks Medication 
Then User should see close button

Scenario Outline: Verify UI elements inside the Add Medication 
  Given User is in diabetes tracker
  When User clicks add medication
  Then User should see "<element>" in add medication form

Examples:
| element | 
| cancelbutton | 
| modalheading | 
| medicationlabel | 
| dosagelabel |
| frequencylabel |
| datelabel | 
| takewithfoodlabel | 
| noteslabel | 
| medicationoptions | 
| dosageplaceholder | 
| frequencydropdown | 
| frequencyoptions |

Scenario: Validate presence of Date , checkbox,notes,addmedication button in Add Medication form
Given User is in diabetes tracker
When User clicks add medication
Then User should see date picker , take with food checkbox , notes field and add medication button in add medication form


