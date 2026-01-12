 #language: en
Feature: Log view Validation

Background: User logged into app

    Scenario: Verify title of Log View section
    Given the user is in first Homepage
    When the user navigates to the logbook Page
    Then the User should see log review title "Log Review"

    Scenario: Verify table header in log review section
    Given the user is in Homepage
    When the user navigates to logbook Page
    Then User should see log review table header "Date","Blood Glucose","Nutrition","Activity",Medication"

    Scenario:Verify log review displays last 7 days of date entries including today
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see log review displays last 7 days of date entries including today

     Scenario: Verify the display of date format
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see the date format as "MMM DD, YYYY" 

    Scenario: Verify the order of date 
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see the date ordered in descending order for last 7 days including today

    Scenario:Verify the blood glucose value in log review section if there is no log 
     Given the User has not logged any blood glucose value in home page
     When the user navigates to logbook Page
     Then User should see hyphen "-"  value for all the days in blood glucose 

    Scenario:Verify the nutrition value in log review section if there is no log 
     Given the User has not logged any nutrition value in home page
     When the user navigates to logbook Page
     Then User should see hyphen "-"  value for all the days in nutrition value

    Scenario:Verify the physical activity value in log review section if there is no log    
     Given the User has not logged any physical activity value in home page
     When the user navigates to logbook Page
     Then User should see hyphen "-"  value for all the days  in physical activity 

     Scenario:Verify the entries of Medication in log review section if there is no value
     Given the User has not logged any medication dosage in home page
     When the user navigates to logbook Page
     Then User should see hyphen "-"  value for all the days in Medication

     Scenario:Verify the blood glucose entries in log review section if there is log
     Given the User has logged blood glucose value in home page
     When the user navigates to logbook Page
     Then User should see the logged blood glucose values for the respective dates in blood glucose column

     Scenario:   Verify the nutrition value entries in log review section if there is log
     Given the User has logged nutrition value in home page
     When the user navigates to logbook Page
     Then User should see the logged nutrition values for the respective dates in nutrition column   

     Scenario:   Verify the physical activity value entries in log review section if there is log
     Given the User has logged physical activity value in home page
     When the user navigates to logbook Page
     Then User should see the logged physical activity values for the respective dates in physical activity column

     Scenario:   Verify the medication dosage value entries in log review section if there is log
     Given the User has logged medication dosage value in home page
     When the user navigates to logbook Page
     Then User should see the logged medication dosage values for the respective dates in medication column
    

#________________________
 
#Feature: Blood Glucose Tracker Validation

#Background: User logged into app

Scenario: Verify presence of Blood Glucose Tracker section
    Given the user is in Homepage
    When the user navigates to logbook Page
    Then the Blood Glucose Tracker should be visible

Scenario: Verify title of Blood Glucose Tracker section
    Given the user is in Homepage
    When the user navigates to logbook Page
    Then the User should see title "Blood Glucose Tracker"

Scenario: Verify colour codes for Fasting 
Given the user is in Homepage
    When the user navigates to logbook Page
    Then User should see Fasting colour code as "Purple"

 Scenario:Verify Fasting glucose type range displayed
 Given the user is in Homepage
 When the user navigates to logbook Page
    Then User should see Fasting glucose type range as "70-100 mg/dL"

    Scenario:Verify colour codes for Pre-Meal
    Given the user is in Homepage
    When the user navigates to logbook Page
    Then User should see Pre-Meal displayed as "green"

     Scenario:   Verify Pre-Meal glucose type range displayed
     Given the user is in Homepage
    When the user navigates to logbook Page
    Then User should see Pre-Meal glucose type range as "70-130 mg/dL"

    Scenario:Verify colour codes for Post-Meal
     Given the user is in Homepage
    When the user navigates to logbook Page
    Then User should see Post-Meal colour code as "Yellow"

     Scenario:   Verify Post-Meal glucose type range displayed
     Given the user is in Homepage
    When the user navigates to logbook Page
    Then User should see the range for "Post-Meal"  be "<180 mg/dL"

     Scenario:Verify colour codes for Bedtime
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see Bedtime colour code as "Red"

     Scenario:   Verify Bedtime glucose type range displayed
     Given the user is in Homepage      
     When the user navigates to logbook Page
    Then User should see Bedtime glucose type range as "100-140 mg/dL"

    Scenario: Verify last 7 days are displayed on X-axis
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see the X-axis display the last 7 days ending today

     Scenario:Verify Y-axis starts at 70 in glucose chart
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see Y-axis minimum value  70

    Scenario: Verify Y-axis ends at 180 in glucose chart
     Given the user is in Homepage
    When the user navigates to logbook Page
    Then User should see Y-axis maximum value 180 

    #----------------------------
    #feature: Meal and Nutrition Validation

Scenario: Verify presence of Meal & Nutrition section
    Given the user is in Homepage
    When the user navigates to logbook Page
    Then the Meal & Nutrition section should be visible

    Scenario:Verify title of Meal & Nutrition section
    Given the user is in Homepage
    When the user navigates to logbook Page
    Then the User should see title "Meal & Nutrition"

    Scenario: Verify icon for Meal & Nutrition section is displayed
     Given the user is in Homepage
    When the user navigates to logbook Page
     Then User should see Icon  on the left side of "Meal & Nutrition" title

    Scenario:Verify the presence of 7-day aggregate nutrition section in Meal & Nutrition section
    Given the user is in Homepage
    When the user navigates to logbook Page
    Then User should see 7-day aggregate nutrition section in Meal & Nutrition section

     Scenario: Verify the presence of Daily Nutrition breakdown in Meal & Nutrition section
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see Daily Nutrition breakdown in Meal & Nutrition section

    Scenario: Verify text color of Carbs in 7-day aggregate nutrition section
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see Carbs text color as "Pink" in 7-day aggregate nutrition section

     Scenario: Verify text color of Proteins in 7-day aggregate nutrition section
    Given the user is in Homepage
    When the user navigates to logbook Page
    Then User should see Proteins text color as "Blue" in 7-day aggregate nutrition section

    Scenario: Verify text color of Fats in 7-day aggregate nutrition section    
    Given the user is in Homepage
    When the user navigates to logbook Page
    Then User should see Fats text color as "Yellow" in 7-day aggregate nutrition section

     Scenario:Verify last 7 days are displayed on X-axis in Daily Nutrition breakdown section
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see the X-axis display the last 7 days ending today

     Scenario:Verify bar chart behavior when user has not logged any meals
     Given the User has not logged any meals in home page
     When the user navigates to logbook Page
     Then User should see no bars in Daily Nutrition breakdown section

     Scenario:Verify pie chart is hidden when user has not logged any meals
    Given the User has not logged any meals in home page
     When the user navigates to logbook Page
     Then User should not see any pie chart in 7-day aggregate Nutrition section

     Scenario:Verify Carbs card displays 0g and 0%  in Daily nutrition breakdown section when there is no logs
     Given the User has not logged any meals in home page
     When the user navigates to logbook Page
     Then User should see Carbs card displays "0g(0%)" 

     Scenario:Verify Proteins card displays 0g and 0%  in Daily nutrition breakdown section when there is no logs
     Given the User has not logged any meals in home page
    When the user navigates to logbook Page
    Then User should see Proteins card displays "0g(0%)"

     Scenario:Verify Fats card displays 0g and 0%  in Daily nutrition breakdown section when there is no logs
     Given the User has not logged any meals in home page
    When the user navigates to logbook Page
    Then User should see Fats card displays "0g(0%)"

    # Scenario:Verify bar chart behavior when user has logged meals
    #  Given the User has logged meals in home page
    #  When the user navigates to logbook Page
    #  Then User should see Bars with nutrient distribution

    # Scenario:Verify pie chart is displayed when user has logged meals
    #  Given the User has logged meals in home page
    #  When the user navigates to logbook Page
    #  Then User should see pie chart displayed with nutrient distribution

    # Scenario:Verify Carbs card displays correct value in Daily nutrition breakdown section when there are logs
    #  Given the User has logged meals in home page
    #  When the user navigates to logbook Page
    #  Then User should see the value in the carbs card

    #  Scenario:Verify Proteins card displays correct value in Daily nutrition breakdown section when there are logs
    # Given the User has logged meals in home page
    # When the user navigates to logbook Page
    # Then User should see the value in the Proteins card

    #  Scenario:Verify Fats card displays correct value in Daily nutrition breakdown section when there are logs
    # Given the User has logged meals in home page
    # When the user navigates to logbook Page
    # Then User should see the value in the Fats card

    #---------------------
    #feature: Medical dosage Validation

    Scenario: Verify presence of Medical Dosage section
    Given the user is in Homepage
    When the user navigates to logbook Page
    Then the Medical Dosage section should be visible

    Scenario: Verify title of Medical Dosage section
   Given the user is in Homepage
    When the user navigates to logbook Page
    Then the User should see title "Medical Dosage"

     Scenario: Verify icon beside Medical Dosage section 
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see the icon on left side of title

    Scenario:Verify the Y-axis has text "Number of Doses"
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see the Y-axis clearly labeled with the text "Number of Doses"

    Scenario: Verify display empty chart when no medication is scheduled
     Given the User has not scheduled any medication in home page
     When the user navigates to logbook Page
     Then User should see no bars in the chart

    Scenario: Verify Total scheduled will display 0 doses, if no medication is scheduled
     Given the User has not scheduled any medication in home page
     When the user navigates to logbook Page
     Then User should see "0 doses"  value in the Total scheduled statistics

    Scenario:Verify Doses Taken will display 0 doses , if no medication is displayed
     Given the User has not scheduled any medication in home page
     When the user navigates to logbook Page
     Then User should see "0 doses" value in the Doses Taken statistics  

     Scenario:Verify Missed Doses will display 0 doses , if no medication is displayed
     Given the User has not scheduled any medication in home page
     When the user navigates to logbook Page
     Then User should see "0 doses" value in the Missed Doses statistics

    Scenario: Verify the colour of Total Scheduled text 
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see Total Scheduled text in "Purple" color 

    Scenario: Verify the colour of Doses Taken text 
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see Doses Taken text in "Green" color

     Scenario: Verify the colour of Missed Doses text 
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see Missed Doses text in "Yellow" color

     Scenario: verify green colour bar is displayed for doses taken on one week schedule
     Given User has taken the scheduled dose for a day
     When the user logs medication
     Then User should see green colour bar for that day in the chart

    Scenario:  verify red colour bar is displayed for missed doses on one week schedule
     Given User has missed the scheduled dose for a day
    When the user navigates to logbook Page
    Then User should see red colour bar for that day in the chart
    
    #----------------------
    #feature: Activity Validation

    Scenario: Verify presence of Physical Activity section
    Given the user is in Homepage
    When the user navigates to logbook Page
    Then the Physical Activity section should be visible

        Scenario: Verify title of Physical Activity section
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then the User should see title "Physical Activity"

    Scenario: Verify the presence of icons beside title physical activity
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see Icon on the left side of "Physical Activity" title

     Scenario:Verify last 7 days of activity are displayed on X-axis
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see the X-axis display the last 7 days of activity ending today

     Scenario:Verify the alignment of statistic card "Total calories","Daily Average","Peak day"
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see exactly 3 statistic cards displayed horizontally

     Scenario:Verify the text colour of total calories
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should the total calories text in  purple colour

    Scenario:Verify the text colour of daily average
     Given the user is in Homepage
    When the user navigates to logbook Page
    Then User should the daily average text in orange/brown colour

     Scenario:Verify the text colour of peak day
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see peak day text in Red/Maroon color

    Scenario: Verify Y-axis has text calories
     Given the user is in Homepage
     When the user navigates to logbook Page
     Then User should see y-axis  clearly labeled with the text "Calories"

     Scenario:Verify display of empty chart for no activity log
     Given the User has not logged any physical activity in home page
     When the user navigates to logbook Page
     Then User should see no bars in the chart

     Scenario:verify the total calories value for no activity log
     Given the User has not logged any physical activity in home page
     When the user navigates to logbook Page
     Then User should see total calories has "0 cal" value

    Scenario:verify the daily average value for no activity log
     Given the User has not logged any physical activity in home page
    When the user navigates to logbook Page
    Then User should see daily average has "0 cal" value

     Scenario:verify the peak day value for no activity log
     Given the User has not logged any physical activity in home page    
     When the user navigates to logbook Page
     Then User should see no value

    Scenario:Verify the display of bars if there is activity log in home page 
    Given the User has logged physical activity in home page
    When the user navigates to logbook Page
    Then user should see the bars  displayed only for days with logged activity