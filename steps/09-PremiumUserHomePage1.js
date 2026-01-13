import { createBdd } from "playwright-bdd";
import { loginpage } from '../pages/Login.js'
import { expect } from '@playwright/test';
import { premium } from '../pages/09-PremiumUserHomePagePom1.js';
import { ExcelReader } from '../utils/excelreader.js';
 const { Given, When, Then } = createBdd();
const reader = new ExcelReader();
 Given('User is in password auth page', async ({page}) => {

   const lp = new loginpage(page);
    await lp.navigatetoapplicationpage(process.env.APP_URL);
    await lp.clickonloginlink();
    await lp.enteremail(process.env.USER_EMAIL);  
    await lp.clickcontinuewithemailbutton()
});

When('User clicks sign in after entering password', async ({page}) => {
 const lp = new loginpage(page)
  await lp.enterPassword(process.env.USER_PASSWORD);
  await lp.clickSigninButton();
});

Then('User should see the navigation bar displaying items in the order {string}, {string}, {string}, {string}', async ({page}, arg, arg1, arg2, arg3) => {
 const premiumobj= new premium(page);
  const expectedItems = [arg, arg1, arg2, arg3];
  const actualItems = await premiumobj.checkItemsOrder();
 expect(actualItems).toEqual(expectedItems);
});

Then('User should see flashing challenge yourself button', async ({page}) => {
  const premiumobj= new premium(page);
  await premiumobj.checkChallengeButtonFlashing();
  await premiumobj.checkChallengeButtonSeconds();

});

Then('User should see see {string}  button', async ({page}, arg) => {
    const premiumobj= new premium(page);
   await premiumobj.checkChallengeButton();
});

Then('User should see a gender-specific image based on the gender selected during the onboarding process', async ({page}) => {
    const premiumobj= new premium(page);
    await premiumobj.checkGender();
});


Then('User should see the following {string}', async ({page}, text) => {
    const premiumobj= new premium(page);
    
    await premiumobj.checkText(text);


});
Then('User should see the buttons {string}', async ({page}, buttonText) => {
   const premiumobj= new premium(page);
    
    await premiumobj.checkButtonIsVisible(buttonText);
  
});
Then('Activity icon should be present in blood glucose', async ({page}) => {
    const premiumobj= new premium(page);

    await premiumobj.checkBloodGlucoseIcon();
});
Then('Activity icon should be present in physical activity', async ({page}) => {
    const premiumobj= new premium(page);
    await premiumobj.checkActivity();
});

Then('Food intake icon should be present in food intake', async ({page}) => {
    const premiumobj= new premium(page);
    await premiumobj.checkFoodIntake();
});

Then('Pill icon should be present in medication', async ({page}) => {
   const premiumobj= new premium(page);
    await premiumobj.checkMedication();
});



