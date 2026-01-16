@homePageFreeUser
Feature: Home Page Validation for Registered Users
  
  Background:
    Given User is on the login page
    When Registered user clicks sign in after entering password
 

  Scenario: Verify home page loads for registered user
   Then User should see SweetBalance text on the left side of the page
   Then User should see user name on the top-right corner
   Then User should see Logout link on the top-right corner
    Then User should see top navigation bar
    Then User should see "Home" tab in the navigation bar
    Then User should see "Dashboard" tab in the navigation bar
    Then User should see "Education" tab in the navigation bar
    Then User should see "Current Status" section heading
    Then User should see "Last updated" label below Current Status
    Then User should see timestamp for last update
    Then User should see last updated time in minutes or hours
    #Then User should see 12-hour clock indicator (AM/PM)

    Then User should see "Latest HbA1C" label
    Then User should see "BMI" label
    Then User should see "Average Blood Sugar" label
    Then User should see Latest HbA1C value
    Then User should see BMI value
    Then User should see Average Blood Sugar value

    # Then User should see HbA1C condition for value < 5.7 as "Normal"
    # Then User should see HbA1C condition for value 5.7-6.4 as "Pre-Diabetic"
    # Then User should see HbA1C condition for value >= 6.5 as "Diabetic"
 
    # Then User should see BMI category for value < 18.5 as "Underweight"
    # Then User should see BMI category for value 18.5-24.9 as "Normal"
    # Then User should see BMI category for value 25-29.9 as "Overweight"
    # Then User should see BMI category for value >= 30 as "Obese"

    Then User should see correct HbA1C condition
    Then User should see correct BMI category
    Then User should see units "mg/dL" for Average Blood Sugar
    Then User should see "Today's Meal Plan" Title in flex container 
    Then User should see tabs: Breakfast, Lunch, Dinner, Snacks
    Then "Breakfast" tab should be selected by default
    Then User should see sidebar tabs with labels: Meal Plan, Exercise
    Then User should see utensil icon in Meal Plan tab
    Then User should see dumbbell icon in Exercise tab
    Then User should see "View Full Plan" button in Meal Plan section


  Scenario: Verify each meal section is clickable and shows valid times
  When User clicks on the "Breakfast" section
  Then "Breakfast" details become visible with valid times

  When User clicks on the "Lunch" section
  Then "Lunch" details become visible with valid times

  When User clicks on the "Dinner" section
  Then "Dinner" details become visible with valid times

  When User clicks on the "Snacks" section
  Then "Snacks" details become visible with valid times





  