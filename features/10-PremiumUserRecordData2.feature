Feature: Food Intake Validation
Background: User is in home page after logged  into app

Scenario:Verifying title and fields in food intake form
Given User logs in to home page
When User clicks Food Intake 
Then User should see valid title and fields in food intake form

Scenario:Verifying food name and serving size fields
Given User logs in to home page
When User clicks Food Intake 
Then User should see valid food name and serving size fields

Scenario: Verifying calorie input field and helper text
Given User logs in to home page
When User clicks Food Intake 
Then User should see calorie input field and helper text

Scenario: Verifying valid date field 
Given User logs in to home page
When User clicks Food Intake 
Then User should see valid date field and default value as today

Scenario: Verifying valid notes field 
Given User logs in to home page
When User clicks Food Intake 
Then User should see valid notes field 

Scenario: Verify the save food entry button
Given User logs in to home page
When User clicks Food Intake 
Then User should see save food entry button

Scenario: Verify saving valid food data
Given User logs in to home page
When User clicks Food Intake 
Then User should be able to save valid food data

Scenario: Verify saving Invalid food data
Given User logs in to home page
When User clicks Food Intake 
Then User should be able to save invalid food data

Scenario: Verify custom field in serving size
Given User logs in to home page
When User clicks Food Intake 
Then User should see new input field added below the serving field after selecting custom option in serving size dropdown

Scenario: Verify user error message for invalid value in calorie using  calculator
Given User logs in to home page
When User clicks Food Intake 
And User enters invalid value in food name
Then User should see error message "Please enter valid food name"

Scenario: Verify the automatic calorie calculation,helper text and change in value for serving size update
Given User logs in to home page
When User clicks Food Intake 
Then User should see valid automatic calorie calculation,helper text and change in value for serving size update

Scenario: Verify user able to edit the calorie value after automatic calorie calculation
Given User logs in to home page
When User clicks Food Intake 
And  User edit calorie value after automatic calorie calculation
Then User should see edited value in automatic calorie value

Scenario: Verify user able to save food entry with null value in food name 
Given User logs in to home page
When User clicks Food Intake 
And User clicks the Save Food Entry button after leaving the Food Name field empty
Then User should see an error message indicating that the Food Name is required

Scenario: Verify Date picker option in food intake form
Given User logs in to home page
When User clicks Food Intake 
And User clicks on date field
Then User should see date calendar with today's date highlighted and option to choose previous and next month

Scenario: Verify updated Date in date picker field
Given User logs in to home page
When User clicks Food Intake 
And  User selects previous date in the calendar after clicking date field
Then User should see selected date in the field

Scenario: Verify user  receives error message for entering more than 250 words in notes
Given User logs in to home page
When User clicks Food Intake 
And  User clicks save food entry after more than 250 words in notes
Then User should see error message in alert








































