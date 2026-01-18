import { createBdd } from "playwright-bdd";
import { loginpage } from '../pages/Login.js'
import { expect } from '@playwright/test';
import { Premium2 } from "../pages/09-PremiumUserHomePagePom2.js";
import { ExcelReader } from '../utils/excelreader.js';
 const { Given, When, Then } = createBdd();
const reader = new ExcelReader();
 Given('User is in home page', async ({page}) => {
     const lp = new loginpage(page);
        await lp.navigatetoapplicationpage(process.env.APP_URL);
        await lp.clickonloginlink();
       /* await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton(); */
        const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();
});

When('User clicks meal section', async ({page}) => {
 //const loginobj= new Login(page);
  
 // await loginobj.typeEmail(process.env.VALID_EMAIL);

});

Then('User should see {string} title', async ({page}, arg) => {
    const premiumobj = new Premium2(page);
    await premiumobj.checkTitle();
});

Then('User should see alarm clock icon', async ({page}) => {
  const premiumobj = new Premium2(page);
  await premiumobj.checkTitle();
});

Then('User should see pre-meal in first place of each meal section', async ({page}) => {
  const premiumobj = new Premium2(page);
  await premiumobj.checkTitleLunch();
 
});


When('User clicks weekly plan', async ({page}) => {
 
    const premiumobj = new Premium2(page);
    await premiumobj.checkWeeklyPlan();
});

Then('User should get pdf download of weekly plan', async ({page}) => {
 const premiumobj = new Premium2(page);
    await premiumobj.verifyWeeklyPlanDownload();
});

When('User clicks on Blood glucose button', async ({page}) => {
      
     const premiumobj = new Premium2(page);
     await premiumobj.checkBlood();
});

Then('UUser should redirect to Blood Glucose popup window', async ({page}) => {
    const premiumobj = new Premium2(page);
    await premiumobj.verifyDialogOpened();
});

When('User clicks on physical activity button', async ({page}) => {
      
     const premiumobj = new Premium2(page);
     await premiumobj.checkPhysical()
});

Then('User should redirect to physical activity popup window', async ({page}) => {
        const premiumobj = new Premium2(page);
        await premiumobj.verifyPhysicalDialog();
});

When('User clicks on food intake button', async ({page}) => {
   
     const premiumobj = new Premium2(page);
     await premiumobj.checkFood();
});

Then('User should redirect to food intake popup window', async ({page}) => {
    const premiumobj = new Premium2(page);
    await premiumobj.verifyFoodDialog();
});

When('User clicks on medication button', async ({page}) => {
    
     const premiumobj = new Premium2(page);
     await premiumobj.checkMed();
});

Then('User should redirect to medication popup window', async ({page}) => {
    const premiumobj = new Premium2(page);
    await premiumobj.verifyMedDialog();
});

When('User clicks log button', async ({page}) => {
  
     const premiumobj = new Premium2(page);
     await premiumobj.checkLog();
});

Then('User should redirected to dashboard page', async ({page}) => {
      const premiumobj = new Premium2(page);
    await premiumobj.verifyDashboardURL();
});

Given('User is in dashboard page', async ({page}) => {
  
       
      const lp = new loginpage(page);
            await lp.navigatetoapplicationpage(process.env.APP_URL);
        await lp.clickonloginlink();
       /* await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton(); */
        const user = await reader.getLogin();
        await lp.enteremail(user.VALID_EMAIL);
        await lp.clickcontinuewithemailbutton();
        await lp.enterPassword(user.PASSWORD);
        await lp.clickSigninButton();

     const premiumobj = new Premium2(page);
     await premiumobj.checkLog();
     await premiumobj.verifyDashboardURL();
    
});

When('User clicks home tab after logging emotional state in dashboard', async ({page}) => {
   const premiumobj = new Premium2(page);

    
    await premiumobj.changeMood();
    await premiumobj.clickHomeTab();
});

Then('User should see emoji and mood text is changed', async ({page}) => {
    const premiumobj = new Premium2(page);
     await premiumobj.verifyMoodChanged('😊', 'Happy');
});


