Feature: Functional and non functional test validation for premium account user

Background:
        User is logged into the app

        Scenario:Verify the presence of "Pre-meal" title in each meal section
        Given User is in home page
        When User clicks meal section
        Then User should see "Pre-Meal" title


        Scenario:Verify the presence of icon for Pre-meal in each meal section
        Given User is in home page
        When User clicks meal section
        Then User should see alarm clock icon

        Scenario:Verify pre-meal title is shown before main meal
        Given User is in home page
        When User clicks meal section
        Then User should see pre-meal in first place of each meal section

        Scenario:Verify user able download weekly plan
        Given User is in home page
        When User clicks weekly plan 
        Then User should get pdf download of weekly plan 

        Scenario:Verify the navigation of blood glucose
        Given User is in home page
        When User clicks on Blood glucose button
        Then UUser should redirect to Blood Glucose popup window
        
         Scenario:Verify the navigation of Physical activity 
        Given User is in home page
        When User clicks on physical activity button
        Then User should redirect to physical activity popup window
        
         Scenario:Verify the navigation of  food intake
        Given User is in home page
        When User clicks on food intake button
        Then User should redirect to food intake popup window
        
        Scenario:Verify the navigation of  medication
        Given User is in home page
        When User clicks on medication button
        Then User should redirect to medication popup window
        
        Scenario:Verify the navigation of log button
        Given User is in home page
        When User clicks log button
        Then User should redirected to dashboard page

        Scenario:Verify user able to change the log 
        Given User is in dashboard page
        When User clicks home tab after logging emotional state in dashboard
        Then User should see emoji and mood text is changed
































































































































