Feature:Track Glucose Validation
Background:User is in home page after logged  into app

Scenario Outline:Verify title in blood glucose form
Given User navigates to home page
When User clicks Blood Glucose 
Then User should see title "<title>" and subtext "<subtext>"
Examples:
|title                     |subtext                                 |
|Track Glucose  |Keep your health in check   |



Scenario: Verify fields in track glucose 
Given  User navigates to home page
When   User clicks Blood Glucose 
Then   User should see field for Blood Glucose Level, Reading Type,Date

Scenario: Verify input field 
Given  User navigates to home page
When   User clicks Blood Glucose 
Then   User should see text field for blood glucose

Scenario: Verify the placeholder input in blood glucose field
Given  User navigates to home page
When   User clicks Blood Glucose 
Then   User should see text "Enter blood glucose level"

Scenario:Verify the text in the input field
Given  User navigates to home page
When   User clicks Blood Glucose
Then   User should see field for unit

Scenario:Verify the presence of transition field in track glucose
Given  User navigates to home page
When   User clicks Blood Glucose
Then   User should see three transition details  with text "Low", "normal", "high"

Scenario:Verify the color of transition in Low
Given  User navigates to home page
When   User clicks Blood Glucose
Then   User should see Red color in low


Scenario:Verify the color of transition in normal
Given  User navigates to home page
When   User clicks Blood Glucose
Then   User should see green color in normal

Scenario:Verify the color of transition in high
Given  User navigates to home page
When   User clicks Blood Glucose
Then   User should see amber color in high

Scenario:Verify the four button below reading type
Given  User navigates to home page
When   User clicks Blood Glucose
Then   User should see button "Fasting","Pre-meal","Post-meal","Bedtime"

Scenario:Verify the date picker option
Given  User navigates to home page
When   User clicks Blood Glucose
Then   User should see date picker 

Scenario:Verify the last reading time
Given  User navigates to home page
When   User clicks Blood Glucose
Then   User should see last reading details

Scenario:Verify the record reading button
Given  User navigates to home page
When   User clicks Blood Glucose
Then   User should see record reading button

Scenario:VVerify user able to record reading
Given  User navigates to home page
When   User clicks record reading after valid reading
Then   User should see Reading successfully recorded

Scenario:Verify user unable to enter invalid value
Given  User navigates to home page
When   User enters invalid value in blood glucose
Then   User should see blank value 

Scenario:Verify transition details highlights 
Given  User navigates to home page
When   User enters value in blood glucose
Then   User should see transition details highlights

Scenario:Verify datepicker option 
Given  User navigates to home page
When   User clicks date picker 
Then   User should see date calendar
And    User should see today's date highlighted
And    User should see previous and next button

Scenario:Verify title in physical activity form
Given  User navigates to home page
When   User clicks physical activity 
Then   User should see title "Physical Activity"
And    User should see subtext "Track your fitness journey"

Scenario:Verify fields in Physical activity
Given  User navigates to home page
When   User clicks physical activity 
Then   User should see field for "Activity Type,Duration,Date,Intensity"

Scenario:Verify the presence of dropdown for Activity Type 
Given  User navigates to home page
When   User clicks physical activity 
Then   User should see  dropdown for activity type
And    User should see  "Walking,Running,Cycling,Weight Training,Yoga,HIIT,Other"

Scenario: Verify Duration field 
Given User navigates to home page 
When User clicks physical activity 
Then User should see valid Duration field

Scenario: Verify the date picker option in Physical Activity
Given User navigates to home page 
When User clicks physical activity 
Then User should see date picker in physical activity

Scenario: Verify the presence of intensity
Given User navigates to home page 
When User clicks physical activity 
Then User should see intensity field
And  User should see the Intensity options

Scenario: Verify the save activity button
Given User navigates to home page 
When User clicks physical activity 
Then User should see save activity button
When User clicks save activity after entering valid
Then User should see Your activity is recorded

Scenario: Verify user unable to enter invalid value in physical activity
Given User is in physical activity
When User enters invalid value in duration text field
Then User should see blank 

Scenario: Verify options in datepicker in physical activity
Given User is in physical activity
When User clicks date picker in physical activity
Then User should see date calendar with todays date highlighted and option to choose previous and next month








