Feature:Home Page Validation for Registered premium Account User

Background:
    Given User is in password auth page
    When User clicks sign in after entering password

    Scenario: Verify order of text in navigation bar
    
    Then User should see the navigation bar displaying items in the order "Home", "Logbook", "Dashboard", "Education"

    Scenario:Verify the presence of animation and duration in challenge yourself button
  
    Then User should see flashing challenge yourself button

    Scenario:Verify the presence of  Challenge yourself today button
   
    Then User should see see "🎯 Challenge Yourself Today!"  button

    Scenario:Verify the presence of gender image in the grid
   
    Then User should see a gender-specific image based on the gender selected during the onboarding process

    Scenario Outline: Verify the presence of following text 
   
    Then User should see the following "<text>" 
    
    Examples:
    |text|
    |😄|
    |Mood: Happy|
    |Record New Data|
    |Blood Glucose|
    |Physical Activity|
    |Food Intake|
    |Medication|

    Scenario Outline: Verify the presence of following button text
    
    Then User should see the buttons "<buttonText>"

    Examples:
    |buttonText|
    |Log|
    |Meal Plan|
    |Blood Glucose|
    |Physical Activity|
    |Food Intake|
    |Medication|
    
 
 
    Scenario:Verify the presence of blood glucose icon in the home page

    Then Activity icon should be present in blood glucose

   
    Scenario:Verify the presence of Physical Activity icon in the home page

    Then Activity icon should be present in physical activity


    Scenario:Verify the presence of Food Intake icon in the home page

    Then Food intake icon should be present in food intake
  
    Scenario:Verify  icon for Medication

    Then Pill icon should be present in medication

























































