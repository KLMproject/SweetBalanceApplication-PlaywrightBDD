import { createBdd } from "playwright-bdd";
import { loginpage } from '../pages/Login.js'
import { expect } from '@playwright/test';
import { Premium2 } from "../pages/09-PremiumUserHomePagePom2.js";
import { PremiumUser } from "../pages/10-PremiumUserRecordDataPom1.js";
import { PremiumUser2 } from "../pages/10-PremiumUserRecordDatapom2.js";
import { ExcelReader } from '../utils/excelreader.js';

const { Given, When, Then } = createBdd();
 const reader = new ExcelReader();
Given('User logs in to home page', async ({page}) => {
const lp = new loginpage(page);
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
});

When('User clicks Food Intake', async ({page}) => {
  const premiumobj = new PremiumUser2(page);
    await premiumobj.clickfoodIntake();
});

Then('User should see valid title and fields in food intake form', async ({page}) => {
   const premiumobj = new PremiumUser2(page);
   await premiumobj.verifyFoodIntakeForm();
});

Then('User should see valid food name and serving size fields', async ({page}) => {
   const premiumobj = new PremiumUser2(page);
   await premiumobj.verifyFoodIntakeFields();
});

Then('User should see calorie input field and helper text', async ({page}) => {
    const premiumobj = new PremiumUser2(page);
    await premiumobj.verifyCalorieField();
});

Then('User should see valid date field and default value as today', async ({page}) => {
    const premiumobj = new PremiumUser2(page);
    await premiumobj.clickDatePicker();
    await premiumobj.checkCalender();
    await premiumobj.checkToday();
    await premiumobj.checkPrevNext();
});

Then('User should see valid notes field', async ({page}) => {
    const premiumobj = new PremiumUser2(page);
    await premiumobj.verifyNotesField();
});

Then('User should see save food entry button', async ({page}) => {
    const premiumobj = new PremiumUser2(page);
    await premiumobj.saveFoodEntryButton();
});

Then('User should be able to save valid food data', async ({page}) => {
    const premiumobj = new PremiumUser2(page);
    await premiumobj.enterValidData();
});

Then('User should be able to save invalid food data', async ({page}) => {
    const premiumobj = new PremiumUser2(page);
    await premiumobj.enterInValidData();
});

Then('User should see new input field added below the serving field after selecting custom option in serving size dropdown', async ({page}) => {
    const premiumobj = new PremiumUser2(page);
    await premiumobj.verifyCustomFieldVisibility();
});

When('User enters invalid value in food name', async ({page}) => {
  const premiumobj = new PremiumUser2(page);
  await premiumobj.enterInvalidFoodName();
});

Then('User should see error message {string}', async ({page}, arg) => {
  const premiumobj = new PremiumUser2(page);
  await premiumobj.verifyInvalidFoodNameError;
});

Then('User should see valid automatic calorie calculation,helper text and change in value for serving size update', async ({page}) => {
    const premiumobj = new PremiumUser2(page); 
    await premiumobj.verifyAutomaticCalorieCalculation();     
});

When('User edit calorie value after automatic calorie calculation', async ({page}) => {
    const premiumobj = new PremiumUser2(page); 
    await premiumobj.verifyEditCalorieField();
});

Then('User should see edited value in automatic calorie value', async ({page}) => {
    const premiumobj = new PremiumUser2(page); 
    await premiumobj.verifyEditCalorieField();
});

When('User clicks the Save Food Entry button after leaving the Food Name field empty', async ({page}) => {
    const premiumobj = new PremiumUser2(page);   
    await premiumobj.verifyNullValueValidation()       
});

Then('User should see an error message indicating that the Food Name is required', async ({page}) => {
    const premiumobj = new PremiumUser2(page);
    await premiumobj.verifyNullValueValidation();
});

When('User clicks on date field', async ({page}) => {
    const premiumobj = new PremiumUser2(page);  
    await premiumobj.clickDatePicker();

});

Then('User should see date calendar with today\'s date highlighted and option to choose previous and next month', async ({page}) => {
    const premiumobj = new PremiumUser2(page);  
    await premiumobj.checkCalender();
    await premiumobj.checkToday();
    await premiumobj.checkPrevNext();
});

When('User selects previous date in the calendar after clicking date field', async ({page}) => {
    const premiumobj = new PremiumUser2(page);
    await premiumobj.selectPreviousDate();
});

Then('User should see selected date in the field', async ({page}) => {
    const premiumobj = new PremiumUser2(page);
    await premiumobj.verifySelectedDate();
});

When('User clicks save food entry after more than {int} words in notes', async ({page}, arg) => {
    const premiumobj = new PremiumUser2(page);
    await premiumobj.enterMoreThan250WordsInNotes();
});

Then('User should see error message in alert', async ({page}) => {
    const premiumobj = new PremiumUser2(page); 
    await premiumobj.clickSave();  
    await premiumobj.verifyNotesErrorMessage();       
});
