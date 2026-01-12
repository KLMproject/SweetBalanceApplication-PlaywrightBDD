#language: en
Feature: Dashboard page validation for Registered premium account user

Background: User logged into the app

Scenario: Verify display of  King symbol next to their name
Given the user is logged in to Homepage
When the user clicks dashboard on the navigation bar    
Then the user should see a King symbol next to their name 

Scenario: Verify display of  premium activated status next to their name
Given the user is logged in to Homepage
When the user clicks dashboard on the navigation bar    
Then the user should see a premium activated status next to the symbol

Scenario: Verify manage premium button is visible
Given the user is logged in to Homepage
When the user clicks dashboard on the navigation bar    
Then the user should see a manage premium button 

 Scenario:Verify manage premium button is clickable
 Given the user is logged in to Homepage
 When the user clicks "Manage Premium" button  
 Then the user should see dialog box open

 Scenario: Verify the display of start date text and its value
 Given the user is logged in to Homepage
 When the user clicks dashboard on the navigation bar    
 Then User should see the "Start Date:" with value in format "EEE, MMM dd, yyyy"

 Scenario: Verify the display of End date Text and its value
 Given the user is logged in to Homepage
 When the user clicks dashboard on the navigation bar    
 Then User should see the "End Date:" with value in format "EEE, MMM dd, yyyy"

# #Feature: Emotional Wellbeing validations on Premium dashboard

# #Background: User is in homepage after login

 Scenario: Verify the title of emotional wellbeing
Given the user is in Dashboard page
 When User scrolls to middle
 Then User should see the title "Emotional Wellbeing"

 Scenario: Verify the question about wellbeing is displayed
 Given the user is in Dashboard page
 When User scrolls to middle
 Then User should see the question "How are you feeling today?"

 Scenario: Verify the mood emojis are displayed
 Given the user is in Dashboard page
 When User scrolls to middle
 Then User should see six emoji 😄 😊 😐 😔 😠 😰 options visible for selection

 Scenario: Verify the text notes on your mood 
 Given the user is in Dashboard page
 When User scrolls to middle
 Then User should see the text "Notes on your mood"

Scenario:Verify the input field of the notes
 Given the user is in Dashboard page
 When User scrolls to middle
 Then User should see the Text "What's affecting your mood today?" in input field 

Scenario: Verify able to give inputs to "notes on your mood" input field
 Given the user is in Dashboard page
 When User scrolls to middle and enter value in notes on your mood input field
 Then User should see the value entered in input field

 Scenario: Verify the text energy level is present with value
 Given the user is in Dashboard page
 When User scrolls to middle
 Then User should see the  "Energy Level:"slider

 Scenario:Verify energy level slider is displayed
 Given the user is in Dashboard page
 When User scrolls to middle
 Then User should see Energy level slider with labels "low" and "high"

 Scenario:verify energy level changes when sliders move
 Given the user is in Dashboard page
 When User scrolls to middle and move the energy level slider to new position
 Then User should see the energy level value changes as per the slider position

Scenario: Verify log Emotional state  button is displayed
 Given the user is in Dashboard page
 When User scrolls to middle
 Then User should see the "Log Emotional State" button

 Scenario:Verify Emotional state log success message
 Given the user is in Dashboard page
 When User select mood emoji and click log emotional state button
 Then User should see the success message "Your emotional state has been logged successfully"

# #feature:PremiumDialog box validations
# #Background: User clicks manage premium in dashboard page after logging in 

Scenario:Verify the message displayed in dialog box
 Given User is in premium subscription dialog box 
 When User view Manage premium Dialog box
 Then User should see the  the message "Are you sure you want to cancel your premium subscription? You'll continue to have access to premium features until the end of your current billing period."

 Scenario:Verify loss of features section is displayed
 Given User is in premium subscription dialog box 
 When User view Manage premium Dialog box
 Then User should see the section "What you'll lose:" with list "Personalized meal plans tailored to your health goals"," Advanced analytics and blood sugar insights","Specialized diabetes management plans","Priority support and premium features"

 Scenario:Verify action buttons are displayed 
 Given User is in premium subscription dialog box 
  When User view Manage premium Dialog box
 Then User should see "Keep Premium" button and "Cancel Premium" button

 Scenario: Verify style and colour of "Keep Premium" button
 Given User is in premium subscription dialog box 
 When User view Manage premium Dialog box
 Then User should See "Keep Premium" button with white background and dark text

 Scenario: Verify style and colour of "Cancel Premium" button
 Given User is in premium subscription dialog box    
 When User view Manage premium Dialog box
 Then User should See "Cancel Premium" button with red background and white text

 Scenario:Verify Keep premium button functionality
 Given User is in premium subscription dialog box 
 When User clicks "Keep Premium" button
 Then User should see success message " your premium subscription will continue" 

Scenario:Verify cancel premium button functionality
 Given User is in premium subscription dialog box 
 When User clicks "Cancel Premium" button
 Then User should see message "Your premium subscription will be cancelled"

Scenario:Verify "x" button 
 Given User is in premium subscription dialog box 
 When User clicks "x" button 
 Then User should see the dialog box closed

# #Feature:Tracking on premium Dashboard

Scenario:Verify Weekly Checks card shows "0" when the user hasn't logged any checks
 Given User has not logged any weekly checks for the current week
 When User navigates to dashboard page
 Then User should see  "Weekly Checks"  displaying "0" with subtitle "Total log entries per week"

 Scenario:Verify Weekly Checks card shows correct count based on existing check logs
 Given User has logged multiple weekly checks for the current week
 When User navigates to dashboard page
 Then User should see  "Weekly Checks"  displaying value based on the logs

 Scenario:Verify Exercise Minutes card shows "0/150 this week" when there's no exercise logged
 Given User has not logged any exercise minutes for the current week
 When User navigates to dashboard page
 Then User should see the "Exercise Minutes" displaying "0/150 this week" with subtitle "Target: 150 minutes per week"

 Scenario:Verify Exercise Minutes card shows correct minutes based on user entries
 Given User has logged exercise minutes for the week
 When User navigates to dashboard page# Then User should see "Exercise Minutes" displaying number of minutes based on the entries
 Then User should see the "Exercise Minutes" displaying number of minutes based on the entries

Scenario:Verify Med Adherence shows "0%" with "Needs improvement" when there's no log
 Given User has not logged any medication adherence for the current week
 When User navigates to dashboard page
 Then User should see "Med Adherence" displaying "0%" with subtitle "Needs improvement"

 Scenario:Verify  Med Adherence shows the correct percentage based on logged adherence
 Given User has logged medication adherence for the current week
 When User navigates to dashboard page
 Then User should see "Med Adherence" displaying percentage value based on log

 Scenario:Verify Carb Goals card shows "0/28" when no meals are logged
 Given User has not logged Carb goals for the week
 When User navigates to dashboard page
 Then User should see "Carb Goals" displaying "0/28" with subtitle "Weekly meals completed"

Scenario:Verify Carb Goals card shows correct count based on logged meals
 Given User has logged to Carb goals for the week
 When User navigates to dashboard page
 Then User should see "Carb Goals" displaying value based on the logs

# #feature:Smart Insights Validation on Premium dashboard

 Scenario:Verify smart insights section title
 Given User has health data for the last 7 days
 When User navigates to dashboard page
 Then User should see the title "Smart Insights" in smart insights section

 Scenario:Verify smart insights section has the label "Last 7 days"
 Given User has health data for the last 7 days
 When User navigates to dashboard page
 Then User should see the label "last 7 days" in smart insights section

 Scenario:Verify smart insights section has titles
 Given User has health data for the last 7 days
 When User navigates to dashboard page
 Then User should see Titles " Target Achievement","Pattern detected","Suggestion"

 Scenario:Verify the display of Target Achievement based on health data
 Given User has health data for the last 7 days
 When User navigates to dashboard page
 Then User should see the display of percentage of time the user was in the target range for the last 7 days with the percentage improvement compared to the previous week

 Scenario:Verify the display of Pattern Detected based on health data
 Given User has health data for the last 7 days
 When User navigates to dashboard page
 Then user should see  percentage of glucose value spike  with suggestion to improve 

 Scenario:Verify the display of Suggestion based on health data
 Given User has health data for the last 7 days
 When User navigates to dashboard page
 Then user should see a suggestion of activity  with the average expected glucose reduction from this activity