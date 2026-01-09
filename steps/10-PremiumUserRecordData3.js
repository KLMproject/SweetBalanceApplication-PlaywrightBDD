import { createBdd } from "playwright-bdd";
//import { Login } from "../pom/launchpom.js";
import { loginpage } from '../pages/Login.js'
import { expect } from '@playwright/test';
import { Premium2 } from "../pages/09-PremiumUserHomePagePom2.js";
import { PremiumUser } from "../pages/10-PremiumUserRecordDataPom1.js";
import { PremiumUser3 } from "../pages/10-PremiumUserRecordDatapom3.js";
import { ExcelReader } from '../utils/excelreader.js';
const { Given, When, Then } = createBdd();
 const reader = new ExcelReader();
Given('User is on home page', async ({page}) => {
   const lp = new loginpage(page);
             await lp.navigatetoapplicationpage(process.env.APP_URL);
             await lp.clickonloginlink();
             const user = await reader.getLogin();
             await lp.enteremail(user.VALID_EMAIL);
             await lp.clickcontinuewithemailbutton();
            
             await lp.enterPassword(user.PASSWORD);
             await lp.clickSigninButton(); 
});

When('User clicks Medication', async ({page}) => {
  const premiumobj = new PremiumUser3(page);
  await premiumobj.clickMedication();
});


Then('User should see the title {string}', async ({page}, arg) => {
    const premiumobj = new PremiumUser3(page);
    expect(await premiumobj.getTitle()).toBe(arg);
});


Then('User should see the subtext {string}', async ({page}, arg) => {
  const premiumobj = new PremiumUser3(page);
  expect(await premiumobj.getSubtext()).toBe(arg);
});

Then('User should see the heading {string}', async ({page}, arg) => {
    const premiumobj = new PremiumUser3(page);      
    expect(await premiumobj.getHeader3()).toBe(arg);
});

Then('User should see the flexHeading {string}', async ({page}, arg) => {
   const premiumobj = new PremiumUser3(page);      
   expect(await premiumobj.getHeader4()).toBe(arg);
});

Then('User should see the message1 {string}', async ({page}, arg) => {
    const premiumobj = new PremiumUser3(page);  
    expect(await premiumobj.header5.textContent()).toBe(arg);    
});

Then('User should see the message2 {string}', async ({page}, arg) => {
    const premiumobj = new PremiumUser3(page);
    expect(await premiumobj.addmed.textContent()).toBe(arg);
});


Then('User should see valid date picker field with default value as today', async ({page}) => {
    const premiumobj = new PremiumUser3(page);
    await premiumobj.clickDatePicker();
    await premiumobj.checkCalender();
    await premiumobj.checkToday();
});

Then('User should see add medication button', async ({page}) => {
    const premiumobj = new PremiumUser3(page);
    await premiumobj.addmedbuttonClick();
    
});

Then('User should see close button', async ({page}) => {
    const premiumobj = new PremiumUser3(page);
    await premiumobj.closeMedication();
});

Given('User is in diabetes tracker', async ({page}) => {
   const lp = new loginpage(page);
             await lp.navigatetoapplicationpage(process.env.APP_URL);
             await lp.clickonloginlink();
             const user = await reader.getLogin();
             await lp.enteremail(user.VALID_EMAIL);
             await lp.clickcontinuewithemailbutton();
            
             await lp.enterPassword(user.PASSWORD);
             await lp.clickSigninButton(); 
  const premiumobj = new PremiumUser3(page);
  await premiumobj.clickMedication();
});

When('User clicks add medication', async ({page}) => {
  const premiumobj = new PremiumUser3(page);
  await premiumobj.clickAddMedication();
});

Then('User should see {string} in add medication form', async ({page}, element) => {
    const premiumobj = new PremiumUser3(page);  
    await premiumobj.checkElements(element);
});

Then('User should see date picker , take with food checkbox , notes field and add medication button in add medication form', async ({page}) => {
  const premiumobj = new PremiumUser3(page);
  await premiumobj.verifyUIElements();
});
