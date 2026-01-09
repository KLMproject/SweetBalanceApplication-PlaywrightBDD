@subscription 
Feature: Subscription page validation

 Background: 
 Given User completes onboarding process
 
  
  Scenario Outline: Verify feature availability on Subscription page 
  When User clicks Upgrade to Premium on Dashboard
    Then "<Feature>" should be "<Availability>"

    Examples:
      | Feature                                   | Availability   |
      | Daily Meal Plan                           | both           |
      | Weekly Meal Plan                          | premium only   |
      | Personalized Exercise Plan                | premium only   |
      | 10-Day Quick Reversal Plan                | premium only   |
      | 30-Day Blood Sugar Reduction Plan         | premium only   |
      | Glucose Level Graph                       | both           |
      | BMI Calculation                           | both           |
      | Downloadable Meal Plan PDF                | premium only   |
      | Reminders (Medication, Appointments, Health Tasks) | premium only |


 Scenario: Verify Continue Free button visibility 
 When User clicks Upgrade to Premium on Dashboard
  Then Continue Free button should be visible

Scenario: Verify Upgrade to Premium button visibility 
 When User clicks Upgrade to Premium on Dashboard
  Then Upgrade to Premium button should be visible

Scenario: Verify Free Account label
When User clicks Upgrade to Premium on Dashboard
  Then Free Account label should be displayed

Scenario: Verify Premium Account label
When User clicks Upgrade to Premium on Dashboard
  Then Premium Account label should be displayed

Scenario: Verify upgrade message header
When User clicks Upgrade to Premium on Dashboard
  Then Upgrade message header should be displayed

Scenario: Verify terms and conditions text
When User clicks Upgrade to Premium on Dashboard
  Then Terms and Conditions text should be visible

 Scenario: Verify Continue Free button navigation 
 When User clicks Upgrade to Premium on Dashboard
  When User clicks Continue Free button
  Then User should be navigated to Home page

Scenario: Verify Upgrade to Premium button navigation
When User clicks Upgrade to Premium on Dashboard
  When User clicks  Upgrade to Premium button
  Then User should be navigated to upgrade page
  #Navigate to Upgrade page from different sections of the app (3 ways)

Scenario: Navigate to Upgrade page from Home page using View Full Plan  
  When User clicks View Full Plan on Home page
  Then User should be redirected to the subscription payment screen


Scenario: Navigate to Upgrade page from Exercise tab using View Full Schedule 
  When User navigates to Exercise tab
  When User clicks View Full Schedule
  Then User should be redirected to the subscription payment screen

Scenario: Navigate to Upgrade page from Dashboard 
  When User clicks Upgrade to Premium on Dashboard
  Then User should be redirected to the subscription payment screen

