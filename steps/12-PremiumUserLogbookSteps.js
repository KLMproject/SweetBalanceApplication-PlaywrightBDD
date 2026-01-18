import { createBdd } from "playwright-bdd";
const{Given,When, Then} = createBdd();
import { login } from '../pages/first';
import { expect } from "allure-playwright";
import { loginpage } from '../pages/Login.js';
import { ExcelReader } from '../utils/excelreader.js';
import { BloodGlucoseLogViewPage } from '../pages/logbook.js';
import logger from '../utils/logger.js';

let loginobj;
const reader = new ExcelReader();
let lp;
let view;

Given('the user is in first Homepage', async ({page}) => {
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
     loginobj=new login (page);
     view=new BloodGlucoseLogViewPage(page);
 });


 When('the user navigates to logbook Page', async ({page}) => {
   await loginobj.LogBookPage();
 });

Then('the User should see log review title {string}', async ({page}, heading) => {
  // loginobj = new login(page);
  await loginobj.verifyTitle();
});

Then('User should see log review table header {string},{string},{string},{string},Medication"', async ({page}, arg, arg1, arg2, arg3) => {
 // const loginobj = new login(page);
  await loginobj.verifyTableHeaders();
});

Then('User should see log review displays last {int} days of date entries including today', async ({page}, arg) => {
  //const loginobj = new login(page);
  await loginobj.verifyLast7DaysOrder();
  // Step: Then User should see log review displays last 7 days of date entries including today
  // From: features\PremiumUserLogView.feature:19:6
});

Then('User should see the date format as {string}', async ({page}, arg) => {   
  //const loginobj = new login(page);
  await loginobj.verifyDateFormat();
  // Step: Then User should see the date format as "MMM DD, YYYY"
  // From: features\PremiumUserLogView.feature:24:6
});

Then('User should see the date ordered in descending order for last {int} days including today', async ({page}, ) => {
  //const loginobj = new login(page);
  await loginobj.verifyDatesOrder();
  // Step: Then User should see the date ordered in descending order for last 7 days including today
  // From: features\PremiumUserLogView.feature:29:6
});

Given('the User has not logged any blood glucose value in home page', async ({page}) => {
  
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
   loginobj =new login(page);
   view=new BloodGlucoseLogViewPage (page)

  console.log("Inside Blood Glucose");
  // Step: Given the User has not logged any blood glucose value in home page
  // From: features\PremiumUserLogView.feature:32:6
});

//When('the user navigates to logbook Page', async ({}) => {
  // Step: When the user navigates to logbook Page
  // From: features\PremiumUserLogView.feature:33:5
//});

Then('User should see hyphen {string}  value for all the days in blood glucose', async ({page}, arg) => {
  //const loginobj = new login(page);
  await loginobj.verifyBloodHyphensPresent();
  // Step: Then User should see hyphen "-"  value for all the days in blood glucose
  // From: features\PremiumUserLogView.feature:34:6
});

Given('the User has not logged any nutrition value in home page', async ({page}) => {
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
     loginobj =new login(page);
      view=new BloodGlucoseLogViewPage (page)
});


Then('User should see hyphen {string}  value for all the days in nutrition value', async ({page}, arg) => {
 // const loginobj = new login(page);
  await loginobj.verifyNutritionHyphensPresent();
  // Step: Then User should see hyphen "-"  value for all the days in nutrition value
  // From: features\PremiumUserLogView.feature:39:6
});

Given('the User has not logged any physical activity value in home page', async ({page}) => {
 
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
   loginobj =new login(page);
    view=new BloodGlucoseLogViewPage (page)
});

//

Then('User should see hyphen {string}  value for all the days  in physical activity', async ({page}, arg) => {
  //const loginobj = new login(page);
  await loginobj.verifyActivityHyphensPresent();
  // From: features\PremiumUserLogView.feature:44:6
});

Given('the User has not logged any medication dosage in home page', async ({page}) => {
  
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
     loginobj =new login(page);
      view=new BloodGlucoseLogViewPage (page)
  // Step: Given the User has not logged any medication dosage in home page
  // From: features\PremiumUserLogView.feature:47:6
});



Then('User should see hyphen {string}  value for all the days in Medication', async ({page}, arg) => {
  //const loginobj = new login(page);
  await loginobj.verifyMedicationHyphensPresent();
  // Step: Then User should see hyphen "-"  value for all the days in Medication
  // From: features\PremiumUserLogView.feature:49:6
});

Given('the User has logged blood glucose value in home page', async ({page}) => {
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
     loginobj =new login(page);
      view=new BloodGlucoseLogViewPage (page)
  // Step: Given the User has logged blood glucose value in home page
  // From: features\PremiumUserLogView.feature:52:6
});

Then('User should see the logged blood glucose values for the respective dates in blood glucose column', async ({page}) => {
 //const loginobj = new login(page);
 await loginobj.verifyLoggedBloodGlucoseValues();
  // Step: Then User should see the logged blood glucose values for the respective dates in blood glucose column
  // From: features\PremiumUserLogView.feature:54:6
});

Given('the User has logged nutrition value in home page', async ({page}) => {        
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
     loginobj =new login(page);
      view=new BloodGlucoseLogViewPage (page)
  // Step: Given the User has logged nutrition value in home page
  // From: features\PremiumUserLogView.feature:57:6
  console.log("Inside Nutrition Logged Values");
});

Then('User should see the logged nutrition values for the respective dates in nutrition column', async ({page}) => {
  //const loginobj = new login(page);
  await loginobj.verifyLoggedNutritionValues();
  // Step: Then User should see the logged nutrition values for the respective dates in nutrition column
  // From: features\PremiumUserLogView.feature:59:6
});
Given('the User has logged physical activity value in home page', async ({page}) => {  
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
    loginobj =new login(page);
     view=new BloodGlucoseLogViewPage (page)
  console.log("Inside Physical Activity Logged Values");
  // Step: Given the User has logged physical activity value in home page
  // From: features\PremiumUserLogView.feature:62:6
});

Then('User should see the logged physical activity values for the respective dates in physical activity column', async ({}) => {
 
  await loginobj.verifyLoggedActivityValues();
  // Step: Then User should see the logged physical activity values for the respective dates in physical activity column
  // From: features\PremiumUserLogView.feature:64:6
});       
Given('the User has logged medication dosage value in home page', async ({page}) => {  
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
    loginobj =new login(page);
     view=new BloodGlucoseLogViewPage (page)
  console.log("Inside Medication Logged Values");
  // Step: Given the User has logged medication dosage in home page
  // From: features\PremiumUserLogView.feature:67:6
});

Then('User should see the logged medication dosage values for the respective dates in medication column', async ({}) => {
 await loginobj.LogBookPage();
  await loginobj.verifyLoggedMedicationValues();
  // Step: Then User should see the logged medication dosage values for the respective dates in medication column
  // From: features\PremiumUserLogView.feature:69:6
});

///////////////////////////////////BloodGlucose/////////////////////////////////


 Given('the user is in Homepage', async ({page}) => {
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
        await lp.clickSigninButton(); */
     loginobj =new login(page);
   view = new BloodGlucoseLogViewPage(page);
 });


When('the user navigates to the logbook Page', async ({page}) => {
  //loginobj = new login(page);
  await loginobj.LogBookPage();
  view = new BloodGlucoseLogViewPage(page);
});

Then('the Blood Glucose Tracker should be visible', async ({}) => {
 
  await view.BloodTrackerVisible();
});

Then('the User should see title {string}', async ({}, heading) => {
  
  await view.BloodGlucoseTitleVisible();
});

Then('User should see Fasting colour code as {string}', async ({}, arg) => {
  //const view = new BloodGlucoseLogViewPage(page);
  //await loginobj.LogBookPage();
  await view.FastingColorPurple();
});

Then('User should see Fasting glucose type range as {string}', async ({page}, arg) => {
  // coverage placeholder — UI range assertion handled in color methods
});

Then('User should see Pre-Meal displayed as {string}', async ({}, arg) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.PreMealColorGreen();
});

Then('User should see Pre-Meal glucose type range as {string}', async ({page}, arg) => {
  // placeholder
});

Then('User should see Post-Meal colour code as {string}', async ({}, arg) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.PostMealColorYellow();
});

Then('User should see the range for {string}  be {string}', async ({page}, tag, range) => {
  // placeholder
});

Then('User should see Bedtime colour code as {string}', async ({}, arg) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.BedtimeColorRed();
});

Then('User should see Bedtime glucose type range as {string}', async ({page}, arg) => {
  // placeholder
});

Then('User should see the X-axis display the last {int} days ending today', async ({page}, arg) => {
  // placeholder
});

Then('User should see Y-axis minimum value  {int}', async ({}, arg) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.YaxisMin();
});

Then('User should see Y-axis maximum value {int}', async ({}, arg) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.YaxisMax();
});

// meal and nutrition section

Given('the User has not logged any meals in home page', async ({page}) => {
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
   loginobj =new login(page);
  view = new BloodGlucoseLogViewPage(page);
});

When('the user now navigates to logbook Page', async ({page}) => {
  //const loginobj = new login(page);
  await loginobj.LogBookPage();
});

Then('the Meal & Nutrition section should be visible', async ({}) => {
  //const view = new BloodGlucoseLogViewPage(pag);
  await view.MealandNutritionHeaderVisible();
});

Then('the User should see Meal & Nutrition title {string}', async ({}, heading) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.MealandNutritionTextVisible();
});

Then('User should see Icon  on the left side of {string} title', async ({}, arg) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.MealNutritionIconVisible();
});

Then('User should see {int}-day aggregate nutrition section in Meal & Nutrition section', async ({}, arg) => {
  //const view = new BloodGlucoseLogViewPage();
  await view.DayAggNutritionVisible();
});

Then('User should see Daily Nutrition breakdown in Meal & Nutrition section', async ({}) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.DailyNutritionBreakdownVisible();
});

Then('User should see Carbs text color as {string} in {int}-day aggregate nutrition section', async ({}, arg, arg1) => {
 // const view = new BloodGlucoseLogViewPage(page);
  await view.CarbsColorVisible();
});

Then('User should see Proteins text color as {string} in {int}-day aggregate nutrition section', async ({page}, arg, arg1) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.ProteinColorVisible();
});

Then('User should see Fats text color as {string} in {int}-day aggregate nutrition section', async ({}, arg, arg1) => {
 // const view = new BloodGlucoseLogViewPage(page);
  await view.FatsColorVisible();
});

Then('User should see last {int} days of X-axis should be displayed in Daily Nutrition breakdown section', async ({page}, arg) => {
  // placeholder
});

// meals not logged 


Then('User should see no bars in Daily Nutrition breakdown section', async ({}) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.NoMealChartVisible();
});

Then('User should not see any pie chart in {int}-day aggregate Nutrition section', async ({}, arg) => {
  // Step: Then User should not see any pie chart in 7-day aggregate Nutrition section
  // From: features\PremiumUserLogBloodGlucose.feature:127:6
});

Then('User should see Carbs card displays {string}', async ({}, arg) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.CarbsCardVisible();
});

Then('User should see Proteins card displays {string}', async ({}, arg) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.ProteinCardVisible();
});

Then('User should see Fats card displays {string}', async ({}, arg) => {
  //const view = new BloodGlucoseLogViewPage(page);
  await view.FatsCardVisible();
});


//--------
// medical dosage section
//-----------


Given('the User in home page', async ({page}) => {
  lp = new loginpage(page);
  loginobj =new login(page);
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
  view = new BloodGlucoseLogViewPage(page);
});

When('the user now goes to logbook Page', async ({page}) => {
  //const loginobj = new login(page);
  await loginobj.LogBookPage();
});
Then('the Medical Dosage section should be visible', async ({}) => {
 
  await view.MedicalDosageHeaderVisible();
});

Then('the User should see Medical Dosage title {string}', async ({}) => {
  
  await view.MedicalDosageText();
});

Then('User should see the icon on left side of title', async ({}) => {
 
  await view.MedicalDosageIconVisible();
});



Then('User should see the Y-axis clearly labeled with the text {string}', async ({}, arg) => {
  await view.MedicalDosageYaxisLabelVisible();
  // placeholder
});

Given('the User has not scheduled any medication in home page', async ({page}) => {
  lp = new loginpage(page);
  loginobj =new login(page);
        await lp.navigatetoapplicationpage(process.env.APP_URL);
        await lp.clickonloginlink();
        const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();

        /*await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
  view = new BloodGlucoseLogViewPage(page);
  // Step: Given the User has not scheduled any medication in home page    
  // From: features\PremiumUserLogBloodGlucose.feature:193:6
});

When('the user goes to logbook', async ({}) => {
  await loginobj.LogBookPage();
  // Step: When the user scrolls down to Medical Dosage section
  // From: features\PremiumUserLogBloodGlucose.feature:186:5
});

Then('User should see no bars in the chart', async ({}) => {
  // placeholder
});

Then('User should see {string}  value in the Total scheduled statistics', async ({}, arg) => {
  // placeholder user should see 0
  await view.TotalScheduledValueZero();
});

Then('User should see {string} value in the Doses Taken statistics', async ({}, arg) => {
  // placeholder user should see 0
  await view.DosesTakenValueZero();
});

Then('User should see {string} value in the Missed Doses statistics', async ({}, arg) => {
  // placeholder user should see 0
    await view.DosesMissedValueZero();
});

Then('User should see Total Scheduled text in {string} color', async ({}, arg) => {
  // placeholder colour purple
    await view.TotalScheduledTextColor();
});

Then('User should see Doses Taken text in {string} color', async ({}, arg) => {
  // placeholder color green
    await view.DosesTakenTextColor();
});

Then('User should see Missed Doses text in {string} color', async ({}, arg) => {
  // placeholder color yellow
  await view.DosesMissedTextColor();
});

Given('User has taken the scheduled dose for a day', async ({page}) => {
  // placeholder
  lp = new loginpage(page);
  loginobj =new login(page);
        await lp.navigatetoapplicationpage(process.env.APP_URL);
        await lp.clickonloginlink();
       /* await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();*/
        const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();
  view = new BloodGlucoseLogViewPage(page);
});

When('the user logs medication', async ({}) => {
  // Step: When the user logs medication
  // From: features\PremiumUserLogBloodGlucose.feature:229:6
  await view.logMedication();
  
});

Then('User should see green colour bar for that day in the chart', async ({}) => {
  // placeholder
    
  
  await view.CheckDoseTaken();
   loginobj.LogBookPage();
});

Then('User has missed the scheduled dose for a day', async ({}) => {
  // placeholder
});

Then('User should see red colour bar for that day in the chart', async ({}) => {
  // placeholder
 
  await view.CheckDoseMissed();
});


//--------
// physical activity section
//-----------
Given('the User is in home page for physical activity', async ({page}) => {
 lp = new loginpage(page);
 loginobj =new login(page);
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
  view = new BloodGlucoseLogViewPage(page);
});

When('the user navigates to logbook Page for physical activity', async ({page}) => {
  //const loginobj = new login(page);
  await loginobj.LogBookPage();
});

Then('the Physical Activity section should be visible', async ({}) => {
  
  await view.PhysicalActivityTitleVisible();
});

Then('the User should see Physical Activity title {string}', async ({}, heading) => {
 
  await view.PhysicalActivityTextVisible();
});

Then('User should see Icon on the left side of {string} title', async ({}, arg) => {
  await view.PhysicalActivityIconVisible();
  // Step: Then User should see Icon on the left side of "Physical Activity" title
  // From: features\PremiumUserLogBloodGlucose.feature:253:6
});

Then('User should see the X-axis display the last {int} days of activity ending today', async ({}, arg) => {
  // Step: Then User should see the X-axis display the last 7 days of activity ending today
  // From: features\PremiumUserLogBloodGlucose.feature:258:6
});

Then('User should see exactly {int} statistic cards displayed horizontally', async ({}, arg) => {
  await view.textPlacement();
  // Step: Then User should see exactly 3 statistic cards displayed horizontally
  // From: features\PremiumUserLogBloodGlucose.feature:263:6
});

Then('User should the total calories text in  purple colour', async ({}) => {
  await view.TotalCaloriesColor();
  // Step: Then User should the text in  purple colour
  // From: features\PremiumUserLogBloodGlucose.feature:268:6
});
Then('User should the daily average text in orange\\/brown colour', async ({}) => {
  await view.DailyAverageColor();
  // Step: Then User should the text in orange/brown colour
  // From: features\PremiumUserLogBloodGlucose.feature:273:5
});

Then('User should see peak day text in Red\\/Maroon color', async ({}) => {
  await view.PeakDayColor();
  // Step: Then User should see text in Red/Maroon color
  // From: features\PremiumUserLogBloodGlucose.feature:278:6
});

Then('User should see y-axis  clearly labeled with the text {string}', async ({}, arg) => {
  // Step: Then User should see y-axis  clearly labeled with the text "Calories"
  // From: features\PremiumUserLogBloodGlucose.feature:283:6
});

Given('the User has not logged any physical activity in home page', async ({page}) => {
  lp = new loginpage(page);
  loginobj =new login(page);
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
  // Step: Given the User has not logged any physical activity in home page
  // From: features\PremiumUserLogBloodGlucose.feature:286:6
});

Then('User should see no physical activity bars in the chart', async ({}) => {
 await loginobj.LogBookPage();
    await view.PhysicalActivityChartBarVisible();
  // Step: Then User should see no bars in the chart
  // From: features\PremiumUserLogBloodGlucose.feature:289:6
});
Then('User should see total calories has {string} value', async ({}, arg) => {
 await view.TotalCaloriesValueZero();
  // Step: Then User should see total calories has "0 cal" value
  // From: features\PremiumUserLogBloodGlucose.feature:293:6
});
Then('User should see daily average has {string} value', async ({}, arg) => {
  await view.DailyAverageValueZero();
  // Step: Then User should see daily average has "0 cal" value
  // From: features\PremiumUserLogBloodGlucose.feature:298:5
});

Then('User should see no value', async ({}) => {
  await view.PeakDayValueZero();
  // Step: Then User should see no value
  // From: features\PremiumUserLogBloodGlucose.feature:303:6
});
Given('the User has logged physical activity in home page', async ({page}) => {
  lp = new loginpage(page);
  loginobj =new login(page);
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
});

Then('user should see the bars  displayed only for days with logged activity', async ({}) => {
  // Step: Then user should see the bars  displayed only for days with logged activity
  // From: features\PremiumUserLogBloodGlucose.feature:308:5
});


