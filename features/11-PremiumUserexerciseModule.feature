@premiumuser
Feature: Premium User Exercise Module
  
  Background:
    Given User is Logged into the app

  @smoke
  Scenario: Access exercise module from homepage
    Given User is on the homepage
    When User clicks the Exercise option from the side panel
    Then View Full Schedule button is displayed on the right
    Then Warm Up tab is visible
    Then Main Workout tab is visible
    Then Cool Down tab is visible

@content
  Scenario Outline: View exercise details in each section
    Given User is on the exercise module page
    
    When User views the <section> section
    Then Exercise name is displayed
    Then Description is shown below the Exercise name
    Then Duration is displayed
    Then Calories are displayed
    Then Intensity level is displayed

    Examples:
      | section      |
      | Warm Up      |
      | Main Workout |
      | Cool Down    |

     @interaction 
  Scenario: Complete exercise workflow
    Given User is on the exercise module page
    When User clicks the Mark As Completed button
    #Then Success dialog is shown
    Then Button changes to Completed
    Then Undo option is visible

  @interaction
  Scenario: Undo exercise completion
    #Given User has marked exercise as completed
    When User clicks the Undo button
    Then Button changes back to Mark As Completed

  @navigation
  Scenario: View full exercise schedule
    Given User is on the exercise module page
    When User clicks the View Full Schedule button
    Then User is redirected to Today's Exercise Schedule page    
    Then Back to Home button is visible
    Then page title Today's Exercise Schedule is displayed

     @schedule
  Scenario Outline: Verify exercise details in schedule
    Given User is on the exercise module page
    When User clicks the View Full Schedule button
     When User views the <section> section details
    Then <section> section is visible
    Then exercise name is visible
    Then exercise description is visible
    Then exercise duration is visible
    Then exercise calories are visible
    Then exercise intensity is visible

    Examples:
      | section      |
      | Warm Up      |
      | Main Workout |
      | Cool Down    |

      @validation 
  Scenario: Validate exercise data integrity
    Given User is on the exercise module page
    When User clicks the View Full Schedule button
    Then Exercise intensity values are valid 
    Then total duration equals the sum of all individual durations
    Then total calories equals the sum of all individual calories

  @navigation 
  Scenario: Navigate back to homepage
     Given User is on the exercise module page
    When User clicks the View Full Schedule button
    When User returns to home page
    Then user is on the homepage

