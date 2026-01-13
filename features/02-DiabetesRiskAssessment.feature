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
