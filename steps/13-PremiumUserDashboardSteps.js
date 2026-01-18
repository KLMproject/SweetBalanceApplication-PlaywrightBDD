import { createBdd } from "playwright-bdd";
const{Given,When, Then} = createBdd();
import { login } from '../pages/first';
import { Dashboard } from '../pages/Dashboard';
import { expect } from "allure-playwright";
import { loginpage } from '../pages/Login.js';
import { ExcelReader } from '../utils/excelreader.js';
import logger from '../utils/logger.js';

const reader = new ExcelReader();
let lp;

let dash;
let loginobj;
let mood;

Given('the user is logged in to Homepage', async ({page}) => {

    lp = new loginpage(page);
      await lp.navigatetoapplicationpage(process.env.APP_URL);
      await lp.clickonloginlink();
      /*  await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
        const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();

      dash = new Dashboard(page);
       var mood="feeling happy today";

  // Step: Given the user is in Homepage
  // From: features\PremiumUserDashBoard.feature:8:1
});

When('the user clicks dashboard on the navigation bar', async ({page}) => {
  await dash.navigateToDashboard();
  // Step: When the user clicks dashboard on the navigation bar
  // From: features\PremiumUserDashBoard.feature:9:1
});

Then('the user should see a King symbol next to their name', async ({}) => {
  await dash.verifyPremiumSymbol();
  // Step: Then the user should see a King symbol next to their name
  // From: features\PremiumUserDashBoard.feature:10:1
});

Then('the user should see a premium activated status next to the symbol', async ({}) => {
  await dash.verifyPremiumText();
  // Step: Then the user should see a premium activated status next to the symbol      
  // From: features\PremiumUserDashBoard.feature:15:1
});

Then('the user should see a manage premium button', async ({}) => {
  // Step: Then the user should see a manage premium button
  await dash.managePremiumVisibility();
  // From: features\PremiumUserDashBoard.feature:20:1
});

When('the user clicks {string} button', async ({}, arg) => {
   await dash.navigateToDashboard();
   await dash.ManagePremiumButton.click();
  // Step: When the user clicks "Manage Premium" button
  // From: features\PremiumUserDashBoard.feature:24:2
});

Then('the user should see dialog box open', async ({}) => {
  // Step: Then the user should see dialog box open
   await dash.dialogVisible();
  // From: features\PremiumUserDashBoard.feature:25:2
});

When('the user clicks dashboard on the navigation bar again', async ({}) => {
  await dash.navigateToDashboard();
  // Step: When the user clicks dashboard on the navigation bar
  // From: features\PremiumUserDashBoard.feature:29:1
});

Then('User should see the {string} with value in format {string}', async ({}, arg, arg1) => {
  await dash.startDateVisibility();
  // Step: Then User should see the "Start Date:" with value in format "EEE, MMM dd, yyyy"
  // From: features\PremiumUserDashBoard.feature:30:2
});

Then('User should see the end date {string} with value in format {string}', async ({}, arg, arg1) => {
  // Step: Then User should see the "End Date:" with value in format "EEE, MMM dd, yyyy"
  await dash.endDateVisibility();
  // From: features\PremiumUserDashBoard.feature:35:2
});

/// Emotional Wellbeing validations on Premium dashboard
//let mood;
Given('the user is in Dashboard page', async ({page}) => {

   lp = new loginpage(page);
      await lp.navigatetoapplicationpage(process.env.APP_URL);
      await lp.clickonloginlink();
      const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();
   
       /* await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
      dash = new Dashboard(page);
     mood="feeling happy today";
  // Step: Given the user is in Dashboard page
  // From: features\PremiumUserDashBoard.feature:42:1
});

When('User scrolls to middle', async ({page}) => {
  // Step: When User scrolls to middle
  await dash.navigateToDashboard();
  // From: features\PremiumUserDashBoard.feature:43:2
});

Then('User should see the title {string}', async ({}, arg) => {
  // Step: Then User should see the title "Emotional Wellbeing"
  await dash.EmotionalTextVisibility();
  // From: features\PremiumUserDashBoard.feature:44:2
});

Then('User should see the question {string}', async ({}, arg) => {
  await dash.verifyFeelingsText();
  // Step: Then User should see the question "How are you feeling today?"
  // From: features\PremiumUserDashBoard.feature:49:2
});

Then('User should see six emoji 😄 😊 😐 😔 😠 😰 options visible for selection', async ({}) => {
  await dash.verifyemotionsText();
  // Step: Then User should see six emoji 😄 😊 😐 😔 😠 😰 options visible for selection
  // From: features\PremiumUserDashBoard.feature:54:2
});

Then('User should see the text {string}', async ({}, arg) => {
  await dash.verifymoodText();
  // Step: Then User should see the text "Notes on your mood"
  // From: features\PremiumUserDashBoard.feature:59:2
});

Then('User should see the Text {string} in input field', async ({}, arg) => {
  await dash.verifyMoodTextBox();
  // Step: Then User should see the Text "What's affecting your mood today?" in input field
  // From: features\PremiumUserDashBoard.feature:64:2
});

When('User scrolls to middle and enter value in notes on your mood input field', async ({page}) => {
 await dash.navigateToDashboard();

  await dash.MoodTextBox.fill(`${mood}`);
  
  // Step: When User scrolls to middle and enter "value" in notes on your mood input field
  // From: features\PremiumUserDashBoard.feature:68:2
});

Then('User should see the value entered in input field', async ({}) => {
  await dash.moodFillVerify(`${mood}`);
  // Step: Then User should see the "value" entered in input field
  // From: features\PremiumUserDashBoard.feature:69:2
});

/*When('User scrolls to middle and enter value in notes on your mood input field', async ({}) => {
 
 //await this.MoodTextBox.fill(`${mood}`);
//  await dash.moodFillVerify();

  // Step: When User scrolls to middle and enter value in notes on your mood input field
  // From: features\PremiumUserDashBoard.feature:68:2
});

Then('User should see the value entered in input field', async ({}) => {
  // Step: Then User should see the value entered in input field
  //await dash.moodFillVerify(mood);
  // From: features\PremiumUserDashBoard.feature:69:2
});*/
Then('User should see the  "Energy Level:"slider', async ({}) => {
  await dash.enegrysliderVisibility();
  // Step: Then User should see the  "Energy Level:"slider
  // From: features\PremiumUserDashBoard.feature:74:2
});

Then('User should see Energy level slider with labels {string} and {string}', async ({}, arg, arg1) => {
   await expect(dash.energyLowText).toBeVisible();  
      await expect(dash.energyHighText).toBeVisible();  
  // Step: Then User should see Energy level slider with labels "low" and "high"       
  // From: features\PremiumUserDashBoard.feature:79:2
})

When('User scrolls to middle and move the energy level slider to new position', async ({page}) => {
  await dash.navigateToDashboard();
  await dash.moveEnergySlider();

  // Step: When User scrolls to middle and move the energy level slider to new position
  // From: features\PremiumUserDashBoard.feature:83:2
});

Then('User should see the energy level value changes as per the slider position', async ({}) => {
  await dash.verifyEnergySliderValue();
  // Step: Then User should see the energy level value changes as per the slider position
  // From: features\PremiumUserDashBoard.feature:84:2
});

Then('User should see the {string} button', async ({}, arg) => {
  await expect(dash.EmotionalButton).toBeVisible();
  // Step: Then User should see the "Log Emotional State" button
  // From: features\PremiumUserDashBoard.feature:89:2
});

When('User select mood emoji and click log emotional state button', async ({}) => {    
 await dash.navigateToDashboard();
 await dash.selectMoodEmoji();
  await dash.clickEmotionalButton();
  // Step: When User select mood emoji and click log emotional state button
  // From: features\PremiumUserDashBoard.feature:93:2
});

Then('User should see the success message {string}', async ({}, arg) => {
  await expect(dash.EmotionalDialog).toHaveText('Your emotional state has been logged successfully');
  // Step: Then User should see the success message "Your emotional state has been logged successfully"
  // From: features\PremiumUserDashBoard.feature:94:2
});

//Premium Dialog box validations

Given('User is in premium subscription dialog box', async ({page}) => {
  lp = new loginpage(page);
      await lp.navigatetoapplicationpage(process.env.APP_URL);
      await lp.clickonloginlink();

      /*  await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
        const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();
  dash=new Dashboard(page);
  // Step: Given User is in premium subscription dialog box
  // From: features\PremiumUserDashBoard.feature:100:2
});

When('User view Manage premium Dialog box', async ({}) => {
  await dash.navigateToDashboard();
  // Step: When User view Manage premium Dialog box
  // From: features\PremiumUserDashBoard.feature:101:2
});

Then('User should see the  the message {string}', async ({}, arg) => {
  await dash.PremiumDialog();
  // Step: Then User should see the  the message "Are you sure you want to cancel your premium subscription? You'll continue to have access to premium features until the end of your current billing period."
  // From: features\PremiumUserDashBoard.feature:102:2
});

Then('User should see the section {string} with list {string},{string},{string},{string}', async ({}, arg, arg1, arg2, arg3, arg4) => {
  await dash.PremiumDialogVerify();
  // Step: Then User should see the section "What you'll lose:" with list "Personalized meal plans tailored to your health goals"," Advanced analytics and blood sugar insights","Specialized diabetes management plans","Priority support and premium features"     
  // From: features\PremiumUserDashBoard.feature:107:2
});

Then('User should see {string} button and {string} button', async ({}, arg, arg1) => { 
  await dash.PremiumButtonsVisible();
  // Step: Then User should see "Keep Premium" button and "Cancel Premium" button      
  // From: features\PremiumUserDashBoard.feature:112:2
});

Then('User should See {string} button with white background and dark text', async ({}, arg) => {
  await dash.KeepPremiumColor();
  // Step: Then User should See "Keep Premium" button with white background and dark text
  // From: features\PremiumUserDashBoard.feature:117:2
});

Then('User should See {string} button with red background and white text', async ({}, arg) => {
  await dash.CancelPremiumColor();
  // Step: Then User should See "Cancel Premium" button with red background and white text
  // From: features\PremiumUserDashBoard.feature:122:2
});

When('User clicks {string} button', async ({}, arg) => {
   await dash.navigateToDashboard();
    await dash.ManagePremiumButton.click();
   await dash.KeepPremiumButton.click();
  // Step: When User clicks "Keep Premium" button
  // From: features\PremiumUserDashBoard.feature:126:2
});

Then('User should see success message {string}', async ({}, arg) => {
  await dash.NotificationsButton.toBeVisible;
  // Step: Then User should see success message " your premium subscription will continue"
  // From: features\PremiumUserDashBoard.feature:127:2
});

When('User clicks {string} Cancel button', async ({}, arg) => {
   await dash.navigateToDashboard();
   await dash.ManagePremiumButton.click();
  // Step: When User clicks "Cancel Premium" button
  // From: features\PremiumUserDashBoard.feature:131:2
});
Then('User should see message {string}', async ({}, arg) => {
  await dash.CancelPremiumVerify();
  // Step: Then User should see message "Your premium subscription will be cancelled"
  // From: features\PremiumUserDashBoard.feature:132:2
});

When ('User clicks {string} close button ', async ({}, arg) => {
  await dash. CloseButton();
  // Step: When User clicks "x" button 
  // From: features\PremiumUserDashBoard.feature:136:2
});

Then('User should see the dialog box closed', async ({}) => {
  // Step: Then User should see the dialog box closed
  // From: features\PremiumUserDashBoard.feature:137:2
});

// #Feature:Tracking on premium Dashboard

Given('User has not logged any weekly checks for the current week', async ({page}) => {    
  lp = new loginpage(page);
      await lp.navigatetoapplicationpage(process.env.APP_URL);
      await lp.clickonloginlink();
      const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();
  
       /* await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
  dash=new Dashboard(page);
  // Step: Given User has not logged any weekly checks for the current week
  // From: features\PremiumUserDashBoard.feature:142:2
});

When('User navigates to dashboard page', async ({}) => { 
   await dash.navigateToDashboard();

  // Step: When User navigates to dashboard page
  // From: features\PremiumUserDashBoard.feature:143:2
});

Then('User should see  {string}  displaying {string} with subtitle {string}', async ({}, arg, arg1, arg2) => {
  await dash. WeeklyCheckVerify();
  // Step: Then User should see  "Weekly Checks"  displaying "0" with subtitle "Total log entries per week"
  // From: features\PremiumUserDashBoard.feature:144:2
});

Given('User has logged multiple weekly checks for the current week', async ({page}) => {   
  lp = new loginpage(page);
      await lp.navigatetoapplicationpage(process.env.APP_URL);
      await lp.clickonloginlink();
      const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();

       /* await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
  // Step: Given User has logged multiple weekly checks for the current week
  // From: features\PremiumUserDashBoard.feature:147:2
});

//When('User navigates again to dashboard page', async ({}) => {    
    // Step: When User navigates to dashboard page  
    // From: features\PremiumUserDashBoard.feature:148:2
//});

Then('User should see  {string}  displaying value based on the logs', async ({}, arg) => {
  // Step: Then User should see  "Weekly Checks"  displaying value based on the logs   
  // From: features\PremiumUserDashBoard.feature:149:2
});

Given('User has not logged any exercise minutes for the current week', async ({page}) => { 
  lp = new loginpage(page);
      await lp.navigatetoapplicationpage(process.env.APP_URL);
      await lp.clickonloginlink();
      const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();
       /* await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/

  dash= new Dashboard(page);
  // Step: Given User has not logged any exercise minutes for the current week
  // From: features\PremiumUserDashBoard.feature:152:2
});

Then('User should see the {string} displaying {string} with subtitle {string}', async ({}, arg, arg1, arg2) => {
  await dash.ExerciseMinutesVerify();
  // Step: Then User should see the "Exercise Minutes" displaying "0/150 this week" with subtitle "Target: 150 minutes per week"
  // From: features\PremiumUserDashBoard.feature:154:2
});

Given('User has logged exercise minutes for the week', async ({page}) => {
 lp = new loginpage(page);
      await lp.navigatetoapplicationpage(process.env.APP_URL);
      await lp.clickonloginlink();
      const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();

       /* await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
  // Step: Given User has logged exercise minutes for the week
  // From: features\PremiumUserDashBoard.feature:157:2
});

When('User navigates to dashboard page# Then User should see {string} displaying number of minutes based on the entries', async ({}, arg) => {
  // Step: When User navigates to dashboard page# Then User should see "Exercise Minutes" displaying number of minutes based on the entries
  // From: features\PremiumUserDashBoard.feature:158:2
});

Then('User should see the {string} displaying number of minutes based on the entries', async ({}, arg) => {
  // Step: Then User should see the "Exercise Minutes" displaying number of minutes based on the entries
  // From: features\PremiumUserDashBoard.feature:159:2
});

Given('User has not logged any medication adherence for the current week', async ({page}) => {
  lp = new loginpage(page);
      await lp.navigatetoapplicationpage(process.env.APP_URL);
      await lp.clickonloginlink();
      const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();

       /* await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
  dash=new Dashboard(page);
  // Step: Given User has not logged any medication adherence for the current week     
  // From: features\PremiumUserDashBoard.feature:162:2
});

Then('User should see {string} displaying {string} with subtitle {string}', async ({}, arg, arg1, arg2) => {
  await dash.MedTextVerify()
  // Step: Then User should see "Med Adherence" displaying "0%" with subtitle "Needs improvement"
  // From: features\PremiumUserDashBoard.feature:164:2
});

Given('User has logged medication adherence for the current week', async ({page}) => {     
  lp = new loginpage(page);
      await lp.navigatetoapplicationpage(process.env.APP_URL);
      await lp.clickonloginlink();
      const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();

      /*  await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
  // Step: Given User has logged medication adherence for the current week
  // From: features\PremiumUserDashBoard.feature:167:2
});

Then('User should see {string} displaying percentage value based on log', async ({}, arg) => {
  // Step: Then User should see "Med Adherence" displaying percentage value based on log
  // From: features\PremiumUserDashBoard.feature:169:2
});

Given('User has not logged Carb goals for the week', async ({page}) => {
   lp = new loginpage(page);
      await lp.navigatetoapplicationpage(process.env.APP_URL);
      await lp.clickonloginlink();
      const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();

      /* await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
  dash=new Dashboard(page);
  // Step: Given User has not logged Carb goals for the week
  // From: features\PremiumUserDashBoard.feature:172:2
});

Then('User should see carbs {string} displaying {string} with subtitle {string}', async ({}, arg, arg1, arg2) => {
  await dash.CarbsCheckVerify()
  // Step: Then User should see "Carb Goals" displaying "0%" with subtitle "Needs improvement"
  // From: features\PremiumUserDashBoard.feature:174:2
});
Given('User has logged to Carb goals for the week', async ({}) => {
  // Step: Given User has logged to Carb goals for the week
  // From: features\PremiumUserDashBoard.feature:177:2
});

Then('User should see {string} displaying value based on the logs', async ({}, arg) => {
  // Step: Then User should see "Carb Goals" displaying value based on the logs        
  // From: features\PremiumUserDashBoard.feature:179:2
});

//feature:Smart Insights Validation on Premium dashboard

Given('User has health data for the last {int} days', async ({page}, arg) => {
 lp = new loginpage(page);
      await lp.navigatetoapplicationpage(process.env.APP_URL);
      await lp.clickonloginlink();
      const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();

       /*  await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
  dash=new Dashboard(page);
  // Step: Given User has health data for the last 7 days
  // From: features\PremiumUserDashBoard.feature:184:2
});
When ('the User navigates to dashboard page', async ({page}) => {
  await dash.navigateToDashboard();

  // Step: When User navigates to dashboard page
  // From: features\PremiumUserDashBoard.feature:185:2
});

Then('User should see the title {string} in smart insights section', async ({}, arg) => {
  await dash.SmartTextVerify()
  // Step: Then User should see the title "Smart Insights" in smart insights section   
  // From: features\PremiumUserDashBoard.feature:186:2
});

Then('User should see the label {string} in smart insights section', async ({}, arg) => {
  await dash.SmartDaysTextVerify();
  // Step: Then User should see the label "last 7 days" in smart insights section      
  // From: features\PremiumUserDashBoard.feature:191:2
});

Then('User should see Titles {string},{string},{string}', async ({}, arg, arg1, arg2) => {
  await dash.SmartInsightsLocatorVerify()
  // Step: Then User should see Titles " Target Achievement","Pattern detected","Suggestion"
  // From: features\PremiumUserDashBoard.feature:196:2
});

Then('User should see the display of percentage of time the user was in the target range for the last {int} days with the percentage improvement compared to the previous week', async ({}, arg) => {
  await dash.AchieveTextVerify()
  // Step: Then User should see the display of percentage of time the user was in the target range for the last 7 days with the percentage improvement compared to the previous week
  // From: features\PremiumUserDashBoard.feature:201:2
});

Then('user should see  percentage of glucose value spike  with suggestion to improve', async ({}) => {
 await dash.navigateToDashboard();
  await dash.PatternTextVerify()
  // Step: Then user should see  percentage of glucose value spike  with suggestion to improve
  // From: features\PremiumUserDashBoard.feature:206:2
});
Then('user should see a suggestion of activity  with the average expected glucose reduction from this activity', async ({}) => {
  await dash.SuggestionTextVerify();
  // Step: Then user should see a suggestion of activity  with the average expected glucose reduction from this activity
  // From: features\PremiumUserDashBoard.feature:211:2
});
