@freeUserr
Feature: Home Page Validation for Registered Free Account User

  Background:
    Given User logs into the appliocation

    Scenario Outline: Validate navigation bar elements
    Given the user is on the home page
    Then the navigation bar should contain "<item>" at position <position>

    Examples:
      | position | item      |
      | 1        | Home      |
      | 2        | Dashboard |
      | 3        | Education |

      @meal
  Scenario: Validate nutrition insights heading
    Given the user is on the home page
    When the user clicks on the meal section
    Then "Nutrition Insights" heading should be visible for each meal section
    @meal
  Scenario: Validate nutrition bars
    Given the user is on the home page
    When the user clicks on the meal section
    Then a horizontal nutrition bar should display for Carbs, Protein, and Fat in each meal

     @meal
  Scenario: Validate pre-meal title
    Given the user is on the home page
    When the user clicks on the meal section
    Then the pre-meal title should appear after the main dish

  @meal
  Scenario: Validate nutrition values
    Given the user is on the home page
    When the user clicks on the meal section
    Then Carbs value should be visible for the main meal
    Then Protein value should be visible for the main meal
    Then Fat value should be visible for the main meal

  @meal
  Scenario: Validate intake times
    Given the user is on the home page
    When the user clicks on the meal section
    Then intake time should be displayed in each pre-meal section

     @snack
  Scenario: Validate snack details
    Given the user is on the home page
    When the user clicks on the meal section
    When the user clicks on the snack section
    Then the "PM" indicator should be visible for snack pre-meal
    Then the time should display in "hh:mm format" for pre-meal snack
    Then the time should display as "3 o'clock" for pre-snack
    Then a dot indicator should separate time and calorie in each pre-meal session

     @navigation-button
  Scenario: Validate View Full Plan button
    Given the user is on the home page
    When the user clicks on the meal section
    When the user clicks the "View Full Plan" button
    Then the user should be redirected to the subscription page

   
    @navigation-button
  Scenario: Validate View Full Schedule button
    Given the user is on the home page
    When the user clicks on the exercise section
    When the user clicks the "View Full Schedule" button
    Then the user should be redirected to the subscription page

    @exercise
  Scenario: Validate exercise section
    Given the user is on the home page
    When the user clicks on the exercise section
    Then the title "Today's Exercise Plan" should be visible
    Then exactly 2 exercises should be listed for the day
    Then the scheduled time should display for each exercise
    Then the morning exercise should be scheduled for "7 o'clock"
    Then the evening exercise should be scheduled for "5 o'clock"
    Then a plan title should display for each exercise
    Then a "12-hour" clock indicator with "AM/PM" should be visible in each exercise plan 
    Then duration should display in minutes format for each exercise item
    Then a dot should separate duration and intensity level
    Then intensity level should display in each exercise item
    Then the "View Full Schedule" button should be visible

     

   