@diabetesRiskAssessment
Feature: Diabetes Risk Assessment Validations 

Background: 
     Given User launches the browser
     When User enters the SweetBalance "url"

     #  modal dialog validations #

       Scenario: Validate modal dialog heading
        When User clicks "Check Your Risk" button
        Then User should see "Diabetes Risk Analyzer" header

        Scenario: Validate modal dialog sub text
        When User clicks "Check Your Risk" button
        Then User see  "Answer a few questions to assess your risk of developing diabetes" text

        Scenario: Verify the presence of Cancel button 
          When User clicks "Check Your Risk" button
          Then User should see Cancel button

Scenario: Verify the presence of Calculate Risk button
  When User clicks "Check Your Risk" button
  Then User should see Calculate Risk button

  Scenario: Validate "Calculate Risk" is disabled
   When User clicks "Check Your Risk" button
   Then User should see Calculate Risk button disabled


  Scenario Outline: Validate field increment and decrement controls
    Then User should see field with for="<fieldFor>" having "<controlType>" control

 Examples:
      | fieldFor     | controlType |
      | risk_age     | increment   |
      | risk_age     | decrement   |
      | risk_weight  | increment   |
      | risk_weight  | decrement   |

       Scenario: Verify the presence of checkbox
    When User clicks "Check Your Risk" button
    Then User should see check box for "Family history of diabetes" field

          Scenario: Verify the placeholder text for Age field
    When User clicks "Check Your Risk" button
    Then User should see placeholder "Enter your age (1-150)" in Age field


    Scenario: Verify the placeholder text for weight
    When User clicks "Check Your Risk" button
    Then User should see placeholder "Enter your weight in kg (1-500)" in weight field

#       # Dropdown Verification Scenarios

  Scenario: Verify the dropdown for Physical Activity Level
    When User clicks "Check Your Risk" button
    Then User should see dropdown for "Physical Activity Level"

  Scenario: Verify the dropdown for Blood Pressure
    When User clicks "Check Your Risk" button
    Then User should see dropdown for "Blood Pressure"

  Scenario: Verify the dropdown for Diet Quality
    When User clicks "Check Your Risk" button
    Then User should see dropdown for "Diet Quality"

Scenario: Verify the presence of initial value for Physical Activity Level
    When User clicks "Check Your Risk" button
    Then User should see "Select activity level" as the default option for "Physical Activity Level"

  Scenario: Verify the presence of initial value dropdown for Blood Pressure
    When User clicks "Check Your Risk" button
    Then User should see "Select blood pressure status" as the default option for "Blood Pressure"

  Scenario: Verify the presence of initial value dropdown for Diet Quality
    When User clicks "Check Your Risk" button
    Then User should see "Select diet quality" as the default option for "Diet Quality"


Scenario: Verify dropdown options
    When User clicks "Check Your Risk" button
    Then User should see options '["Select activity level","Active (Exercise 3+ times a week)","Moderate (Exercise 1-2 times a week)","Sedentary (Rarely exercise)"]' for "Physical Activity Level"
    Then User should see options '["Select blood pressure status","Normal","Elevated","High"]' for "Blood Pressure"
    Then User should see options '["Select diet quality","Excellent (Balanced, mostly whole foods)","Average (Mixed whole foods and processed foods)","Poor (Mostly processed foods, high sugar)"]' for "Diet Quality"

#   # Functional Verification on Diabetes Risk Analyzer ==> buttons verification

  Scenario: Validate 'Cancel' button to return home page
    Given User is in diabetes risk analyzer
    When User clicks "Cancel" button on Diabetes Risk Analyzer page
    Then User should be returned to the home page



# Scenario: Validation "Calculate Risk" button disabled / assessment dialog
#   Given User is in diabetes risk analyzer
#   When User enters diabetes risk data from excel row "<RowNo>"
#   Then "<ExpectedResult>" should occur

# Examples:
#   | RowNo | ExpectedResult        |
#   | 2     | assessment dialog     |
#   | 3     | assessment dialog     |
#   | 4     | button disabled       |