import { createBdd } from "playwright-bdd";
//import { Login } from "../pom/launchpom.js";
import { loginpage } from '../pages/Login.js'
import { expect } from '@playwright/test';
import { Premium2 } from "../pages/09-PremiumUserHomePagePom2.js";
import { PremiumUser } from "../pages/10-PremiumUserRecordDataPom1.js";
import { ExcelReader } from '../utils/excelreader.js';
 const { Given, When, Then } = createBdd();
 const reader = new ExcelReader();
   
 Given('User navigates to home page', async ({page}) => {
   const lp = new loginpage(page);
          await lp.navigatetoapplicationpage(process.env.APP_URL);
          await lp.clickonloginlink();
        /*  const user = await reader.getLogin();
          await lp.enteremail(user.VALID_EMAIL);
          await lp.clickcontinuewithemailbutton();
          await lp.enterPassword(user.PASSWORD);
          await lp.clickSigninButton(); */

        await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();
    });

 When('User clicks Blood Glucose', async ({page}) => {
 const premiumobj = new PremiumUser(page);
    await premiumobj.clickGlucoseButton();
});

Then('User should see title {string} and subtext {string}', async ({page}, arg, arg1) => {
 const premiumobj = new PremiumUser(page);
    expect(await premiumobj.getTitle()).toBe(arg);
    expect(await premiumobj.getSubtext()).toBe(arg1);
});

Then('User should see field for Blood Glucose Level, Reading Type,Date', async ({page}) => {
 const premiumobj = new PremiumUser(page);
    expect(await premiumobj.getLevel());
    expect(await premiumobj.enterLevel());
    expect(await premiumobj.getReadingType());
    expect(await premiumobj.getDate());
});



Then('User should see text field for blood glucose', async ({page}) => {
  const premiumobj = new PremiumUser(page);
    expect(await premiumobj.getLevel());
});



Then('User should see text {string} in glucose field', async ({page}, arg) => {
    const premiumobj = new PremiumUser(page);
  expect(await premiumobj.getLevel());
  expect(await premiumobj.enterLevel());
});

Then('User should see field for unit', async ({page}) => {
     const premiumobj = new PremiumUser(page); 
    await premiumobj.checkUnit();
    
});

Then('User should see three transition details  with text {string}, {string}, {string}', async ({page}, arg, arg1, arg2) => {
        const premiumobj = new PremiumUser(page); 
        await premiumobj.checkIndicators();
});

Then('User should see Red color in low', async ({page}) => {
         const premiumobj = new PremiumUser(page); 
         await premiumobj.checkRed();
});

Then('User should see green color in normal', async ({page}) => {
           const premiumobj = new PremiumUser(page); 
           await premiumobj.checkGreen();
});

Then('User should see amber color in high', async ({page}) => {
          const premiumobj = new PremiumUser(page); 
           await premiumobj.checkAmber();
});

Then('User should see button {string},{string},{string},{string}', async ({page}, arg, arg1, arg2, arg3) => {
        const premiumobj = new PremiumUser(page); 
        await premiumobj.checkIndicators();
});

Then('User should see date picker', async ({page}) => {
          const premiumobj = new PremiumUser(page); 
          await premiumobj.getDate();
});

Then('User should see last reading details', async ({page}) => {
         const premiumobj = new PremiumUser(page); 
          await premiumobj.checkLastReading();
});


Then('User should see record reading button', async ({page}) => {
           const premiumobj = new PremiumUser(page); 
          await premiumobj.checkRecordReading();
});

When('User clicks record reading after valid reading', async ({page}) => {
        const premiumobj = new PremiumUser(page); 
          await premiumobj.clickGlucoseButton();
          await premiumobj.enterValue();
          await premiumobj.clickRecordReading();
});
         

Then('User should see Reading successfully recorded', async ({page}) => {
         const premiumobj = new PremiumUser(page); 
          await premiumobj.checkSuccess();
});

When('User enters invalid value in blood glucose', async ({page}) => {
          const premiumobj = new PremiumUser(page); 
          await premiumobj.clickGlucoseButton();
          await premiumobj.enterInvalidValue();
          
});

Then('User should see blank value', async ({page}) => {
         const premiumobj = new PremiumUser(page); 
         await premiumobj.checkBlank();
});

When('User enters value in blood glucose', async ({page}) => {
         const premiumobj = new PremiumUser(page); 
          await premiumobj.clickGlucoseButton();
          await premiumobj.enterLowValue();
    
});

Then('User should see transition details highlights', async ({page}) => {
          const premiumobj = new PremiumUser(page); 
          await premiumobj.checkLowHighlight();
});

When('User clicks date picker', async ({page}) => {
         const premiumobj = new PremiumUser(page); 
        
         await premiumobj.clickGlucoseButton();
         await premiumobj.getDate();
         await premiumobj.clickDatePicker();
});

Then('User should see date calendar', async ({page}) => {
         const premiumobj = new PremiumUser(page); 

         await premiumobj.checkCalender();
});

Then('User should see today\'s date highlighted', async ({page}) => {
            const premiumobj = new PremiumUser(page); 
             await premiumobj.checkToday();
});

Then('User should see previous and next button', async ({page}) => {
            const premiumobj = new PremiumUser(page); 
            await premiumobj.checkPrevNext();
});

When('User clicks physical activity', async ({page}) => {
            const premiumobj = new PremiumUser(page); 
            await premiumobj.clickPhyactivity();
});

Then('User should see title {string}', async ({page},arg) => {
              const premiumobj = new PremiumUser(page); 
              await premiumobj.checkPhyTitle();
});

Then('User should see subtext {string}', async ({page}, arg) => {
              const premiumobj = new PremiumUser(page); 
              await premiumobj.checkSubtitle();
              
});

Then('User should see field for {string}', async ({page}, fields) => {
    const premiumobj = new PremiumUser(page); 
    const fieldList = fields.split(',').map(f => f.trim());
     await premiumobj.verifyFields(fieldList);
});

Then('User should see  dropdown for activity type', async ({page}) => {
   const premiumobj = new PremiumUser(page); 
   await premiumobj.checkActivitytype();
   await premiumobj.checkDropdown();
});

Then('User should see  {string}', async ({page}, arg) => {
     const premiumobj = new PremiumUser(page); 

    await premiumobj.verifyActivityTypeOptions();
});

Then('User should see valid Duration field', async ({page}) => {
     const premiumobj = new PremiumUser(page); 
     await premiumobj.verifyDurationField();
});

Then('User should see date picker in physical activity', async ({page}) => {
    const premiumobj = new PremiumUser(page); 
    await premiumobj.checkPhysDate();
});

Then('User should see intensity field', async ({page}) => {
    const premiumobj = new PremiumUser(page); 
    await premiumobj.checkIntensity();
});

Then('User should see the Intensity options', async ({page}) => {
    const premiumobj = new PremiumUser(page); 
    await premiumobj.checkIntensityOptions();
});

Then('User should see save activity button', async ({page}) => {
    const premiumobj = new PremiumUser(page); 
    await premiumobj.checkSaveButton();
});

When('User clicks save activity after entering valid', async ({page}) => {
     const premiumobj = new PremiumUser(page); 
    await premiumobj.verifySave();
});

Then('User should see Your activity is recorded', async ({page}) => {
     const premiumobj = new PremiumUser(page); 
     await premiumobj.verifySuccessMessage();
});

Given('User is in physical activity', async ({page}) => {
   const lp = new loginpage(page);
          await lp.navigatetoapplicationpage(process.env.APP_URL);
          await lp.clickonloginlink();
          
        await lp.enteremail(process.env.USER_EMAIL);  
        await lp.clickcontinuewithemailbutton()
        await lp.enterPassword(process.env.USER_PASSWORD);
        await lp.clickSigninButton();

   const premiumobj = new PremiumUser(page); 
    await premiumobj.clickPhyactivity();
});

When('User enters invalid value in duration text field', async ({page}) => {
   const premiumobj = new PremiumUser(page); 
   await premiumobj.verifyInvalidValue();
});

Then('User should see blank', async ({page}) => {
  const premiumobj = new PremiumUser(page); 
   await premiumobj.verifyBlank();
});

When('User clicks date picker in physical activity', async ({page}) => {
   const premiumobj = new PremiumUser(page); 
   await premiumobj.clickDatePicker();
   await premiumobj.checkCalender();
});

Then('User should see date calendar with todays date highlighted and option to choose previous and next month', async ({page}) => {
  const premiumobj = new PremiumUser(page); 
  await premiumobj.checkToday();
  await premiumobj.checkPrevNext();
});