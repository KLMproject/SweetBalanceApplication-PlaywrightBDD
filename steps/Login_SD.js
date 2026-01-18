﻿﻿import { loginpage } from '../pages/Login.js';
import { expect } from '@playwright/test';
import { ExcelReader } from '../utils/excelreader.js';
import { createBdd } from 'playwright-bdd';
import logger from '../utils/logger.js';
const { Given, When, Then } = createBdd(); 
const reader = new ExcelReader();
let lp;
Given('User is on SweetBalance homepage', async ({page}) => {
  lp = new loginpage(page);
  await lp.navigatetoapplicationpage(process.env.APP_URL);
});
When('User clicks on {string} link', async ({page}) => {
  lp = new loginpage(page)
  await lp.clickonloginlink();
});
Then('User should see {string} heading', async ({page}, heading) => {
  lp = new loginpage(page)
  await lp.verifywelcomebackheading();
});
Then('User should see {string}', async ({page}, singin) => {
  lp = new loginpage(page)
 await lp.verifysignintext();
});
Then('User should see close button at the right corner', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyclosebutton();
});
Then('User should see an input field to enter email', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyemailinputfield();
});
Then('User should see text {string} in email field placeholder', async ({page}, expectedText) => {
  lp = new loginpage(page)
  await lp.verifyemailplaceholdertext(expectedText);
});
Then('User should see a {string} button', async ({page}, arg) => {
  lp = new loginpage(page)
  await lp.verifycontinuewithemailbutton();
});
Then('User should see {string} button to be enabled', async ({page}, arg) => {
  lp = new loginpage(page)
  await lp.verifycontinuewithemailbuttonenabled();
});
Then('User should see an {string} separator', async ({page}, arg) => {
  lp = new loginpage(page)
  await lp.verifyorseparator();
});
Given('User is on the login page', async ({page}) => {
   lp = new loginpage(page);                         
  await lp.navigatetoapplicationpage(process.env.APP_URL);
  await lp.clickonloginlink();
 logger.info('the user is on login page');
}); 
When('User enters an invalid email', async ({page}) => {
   lp = new loginpage(page);
   const user = await reader.getLogin();
  await lp.enteremail(user.INVALID_EMAIL);
  await lp.clickcontinuewithemailbutton();
});
Then('Email field should show validation error', async ({page}) => {
  lp = new loginpage(page);
  await lp.verifyerrormessage();
}); 
When('Registered user clicks continue with email button after entering a valid existing email', async ({page}) => {
   lp = new loginpage(page);
   const user = await reader.getLogin();
  await lp.enteremail(user.VALID_EMAIL);
  await lp.clickcontinuewithemailbutton();
});
Then('User should get password field', async ({page}) => {
   lp = new loginpage(page);
  await lp.verifypasswordfield();
});
When('Registered user clicks continue with email button after entering a valid email', async ({page}) => {  
  lp = new loginpage(page) 
  const user = await reader.getLogin();
  await lp.enteremail(user.VALID_EMAIL);
  await lp.clickcontinuewithemailbutton();
});
Then('User should see Sign in button', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifySigninButton();
});
Then('User should see email id  in sub text', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyUserEmail();
});
Then('User should see text {string} as placeholder in password field', async ({page}, arg) => {
  lp = new loginpage(page)
  await lp.verifyPasswordInputField();
});
When('Registered user clicks sign in after entering password', async ({page}) => {
   lp = new loginpage(page);
   const user = await reader.getLogin();
  await lp.enteremail(user.VALID_EMAIL);
  logger.info('Before clicking Continue — page URL:', page.url());
  await lp.clickcontinuewithemailbutton();
  await lp.enterPassword(user.PASSWORD);
  await lp.clickSigninButton(); 
});
Then('User should be navigated to home page', async ({page}) => {
  lp = new loginpage(page)
  await expect(page).toHaveURL('https://sweet-balance-test-env-3-numpyninjadiabe.replit.app');
});
When('Unregistered user clicks continue with email button after entering a valid new email', async ({page}) => {
   lp = new loginpage(page);
   const user = await reader.getProfileWithBR();
   logger.info('Excel user:', user); 
  await lp.enteremail(user.VALID_NEW_EMAIL);
  await lp.clickcontinuewithemailbutton();
});
Then('User should get {string}  form', async ({page}, arg) => {
  lp = new loginpage(page)
 await lp.verifyCompleteProfileHeading();
});
When('User clicks continue with email button after entering a valid new emai', async ({page}) => {
   lp = new loginpage(page);
   const user = await reader.getProfileWithBR();
  await lp.enteremail(user.VALID_NEW_EMAIL);
  await lp.clickcontinuewithemailbutton();
});
Then('{string} input field should be displayed', async ({page}, arg) => {
  lp = new loginpage(page)
  await lp.verifyFullNameInputField();
});
Then('{string} checkbox should be displayed', async ({page}, arg) => {
  lp = new loginpage(page)
  await lp.verifyTermsCheckbox();
});
Then('{string} button should be disabled', async ({page}, arg) => {
  lp = new loginpage(page)
  await lp.verifyCreateAccountButtonDisabled();
});
Given('User is on complete profile form page', async ({page}) => {
    lp = new loginpage(page);
    const user = await reader.getProfileWithBR();
  await lp.navigatetoapplicationpage(process.env.APP_URL);
  await lp.clickonloginlink();
  await lp.enteremail(user.VALID_NEW_EMAIL);
  await lp.clickcontinuewithemailbutton();
  await lp.verifyCompleteProfileHeading();
  logger.info('User is on complete profile form page');
});
When('User checks the Terms & conditions box after filling all fields', async ({page}) => {
  lp = new loginpage(page)
  const user = await reader.getProfileWithBR();
  await lp.enterFullName(user.FULLNAME);
  await lp.enterUserNameInputField(user.USERNAME);
  await lp.enterProfilePasswordInputField(user.PROFILE_PASSWORD);
  await lp.clickTermsCheckbox();
  logger.info('User has filled all fields and checked the Terms & Conditions box');
});
Then('{string} button should be enabled', async ({page}, arg) => {
   lp = new loginpage(page);
  await lp.verifyCreateAccountButtonEnabled();
  logger.info(`"${arg}" button is enabled`);
});
When('User clicks create account button after filling valid data in all fields', async ({page}) => {
  lp = new loginpage(page);
  const user = await reader.getProfileWithBR();
  await lp.enterFullName(user.FULLNAME);
  await lp.enterUserNameInputField(user.USERNAME);
  await lp.enterProfilePasswordInputField(user.PROFILE_PASSWORD);
  await lp.clickTermsCheckbox(); 
  await lp.clickCreateAccountButton();
});
Then('User should redirected to upload blood report', async ({page}) => {
  lp = new loginpage(page)
   lp.verifyBloodReportUploadPageHeading();
});
Given('User is in upload blood report page', async ({page}) => {
  lp = new loginpage(page)
 await page.goto('https://sweet-balance-test-env-3-numpyninjadiabe.replit.app/blood-report-question');
});
When('User clicks on {string} button', async ({page}, arg) => {
  lp = new loginpage(page)
  await lp.clickUploadBloodReportButton();
  logger.info('User clicks on Upload Blood Report button');
});
Then('User should navigate to blood report modal', async ({page}) => {
  lp = new loginpage(page)
  await lp.goNextpage();
});
Given('User is on blood report modal', async ({page}) => {
   lp = new loginpage(page);
 await page.goto('https://sweet-balance-test-env-3-numpyninjadiabe.replit.app/upload-blood-report');
});
When('User hovers over the upload box', async ({page}) => {
   lp = new loginpage(page);
  await lp.hoverblinkline();
});
Then('Upload box should show drag & drop interaction', async ({page}) => {
  lp = new loginpage(page)
  await lp.visibleuploadPDFfile();
});
When('User tries to upload a non PDF file', async ({page}) => {
  lp = new loginpage(page)
  await lp.uploadNonPDF();
  await lp.cliclUploadAndProgressBtn();
});
Then('User should see {string} error', async ({page}, errormsg) => {
  lp = new loginpage(page);
  await lp.uploadErrorMsg(errormsg);
});
When('User uploads a PDF file over 10MB', async ({page}) => {
  lp = new loginpage(page)
  await lp.uploadLargeSizePDF();
  await lp.cliclUploadAndProgressBtn();
});
When('User uploads a valid PDF file', async ({page}) => {
  lp = new loginpage(page)
  await lp.uploadValidPDF();
});
Then('Upload and Process button should be enabled', async ({page}) => {
  lp = new loginpage(page)
  await lp.enableUploadAndProgressBtn();
});
Then('User should see processing percentage bar', async ({page}) => {
  lp = new loginpage(page)
  await lp.cliclUploadAndProgressBtn();
  await lp.verifyProcessingBarVisible();
});
When('User clicks Cancel', async ({page}) => {
  lp = new loginpage(page)
  await lp.clickCancelBtn();
});
Then('Modal should be closed and user returned to previous screen', async ({page}) => {
  lp = new loginpage(page)
  await lp.goback();
});
When('User clicks Upload and Process after uploading valid file', async ({page}) => {
  lp = new loginpage(page)
  await lp.uploadValidPDF();
  await lp.cliclUploadAndProgressBtn();
});
Then('User should see report analysis', async ({page}) => {
  lp = new loginpage(page)
  await lp.processing();
  await lp.goNextpage();
});
Then('User should see onboarding button', async ({page}) => {
  lp = new loginpage(page)
 await lp.processing();
 await page.goto('https://sweet-balance-test-env-3-numpyninjadiabe.replit.app/onboarding-upload')
  await lp.seeOnboardingBtn();
});
Given('User has successfully uploaded blood report', async ({page}) => {
  lp = new loginpage(page)
  await page.goto('https://sweet-balance-test-env-3-numpyninjadiabe.replit.app/onboarding-upload')
});
When('User clicks onboarding button', async ({page}) => {
  lp = new loginpage(page)
  await lp.seeOnboardingBtn();
});
Then('User should see text fields for Age height and weight', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyAllfield();
});
Given('User is on onboarding step {int}', async ({page}, arg) => {
 lp = new loginpage(page)
  await page.goto('https://sweet-balance-test-env-3-numpyninjadiabe.replit.app/onboarding-upload')
});
When('User views gender field', async ({page}) => {
  lp = new loginpage(page)
  await lp.viewgenderfield();
});
Then('User should see dropdown options', async ({page}) => {
  lp = new loginpage(page)
  await lp.clickgenderoption();
  await lp.seegenderDropdown();
});
When('User opens gender dropdown', async ({page}) => {
  lp = new loginpage(page)
  await lp.clickgenderoption();
});
Then('User should see options Male Female and Prefer not to say', async ({page}) => {
  lp = new loginpage(page)
  await lp.seeGenderoption();
});
When('User views continue button', async ({page}) => {
  lp = new loginpage(page)
  await lp.visibleStep1ConBtn();
});

Then('Continue button should be enabled', async ({page}) => {
  lp = new loginpage(page)
  await lp.enableStep1ConBtn();
});
When('User clicks continue', async ({page}) => {
  lp = new loginpage(page)
  await lp.clickStep1ConBtn();
});

Then('User should move to step {int}', async ({page}, arg) => {
  lp = new loginpage(page)
  await lp.goNextpage();
});
Then('User should see error message', async ({page}) => {
   lp = new loginpage(page)
   await lp.seeInvalidErrorMsg();
});
Then('Progress bar should be visible', async ({page}) => {
  lp = new loginpage(page)
  await lp.seeStepsProgressbar()
});
Then('Progress text should read Step {int} of {int}', async ({page}, arg, arg1) => {
  lp = new loginpage(page)
  await lp.seeStepIndicator();
});
Given('User is in step {int} onboarding process', async ({page}, arg) => {
  lp = new loginpage(page)
  await page.goto('https://sweet-balance-test-env-3-numpyninjadiabe.replit.app/onboarding-upload')
});
When('User clicks continue after filling form', async ({page}) => {
  lp = new loginpage(page)
  const user = await reader.getProfileWithBR();
  await lp.fillallthefields(user.AGE,user.HEIGHT,user.WEIGHT)
  await lp.clickgenderoption();
  await lp.selectMaleGender();
  await lp.clickStep1ConBtn();
});
Then('Page should display title Pick your pace chill stroll or marathon magic', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyStep2PaceHeading();
});
When('User views subtitle', async ({page}) => {
  lp = new loginpage(page)
  const user = await reader.getProfileWithBR();
   await lp.fillallthefields(user.AGE,user.HEIGHT,user.WEIGHT)
  await lp.clickgenderoption();
  await lp.selectMaleGender();
  await lp.clickStep1ConBtn();
  await lp.viewSubtitile();
});
Then('Page should display Select your preferred exercise intensity level', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifySubtitile();
});
When('User views navigation buttons', async ({page}) => {
  lp = new loginpage(page)
  const user = await reader.getProfileWithBR();
   await lp.fillallthefields(user.AGE,user.HEIGHT,user.WEIGHT)
  await lp.clickgenderoption();
  await lp.selectMaleGender();
  await lp.clickStep1ConBtn();
  await lp.viewNavigationBtn();
});
Then('Back button should be visible', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyBackBtn();
});
When('User views progress bar', async ({page}) => {
  lp = new loginpage(page)
  const user = await reader.getProfileWithBR();
  await lp.fillallthefields(user.AGE,user.HEIGHT,user.WEIGHT)
  await lp.clickgenderoption();
  await lp.selectMaleGender();
  await lp.clickStep1ConBtn();
  await lp.seeStepsProgressbar()
});
Then('Progress bar should reflect Step {int} of {int}', async ({page}, arg, arg1) => {
  lp = new loginpage(page)
  await lp.seeStep2Indicator();
});
Then('User should see Easy Medium and Hard', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyIntensityLevels();
});
When('User selects an intensity option', async ({page}) => {
  lp = new loginpage(page)
  const user = await reader.getProfileWithBR();
  await lp.fillallthefields(user.AGE,user.HEIGHT,user.WEIGHT)
  await lp.clickgenderoption();
  await lp.selectMaleGender();
  await lp.clickStep1ConBtn();
  await lp.clickEasy();
});
Then('User should navigate to step {int}', async ({page}, arg) => {
  lp = new loginpage(page)
  await lp.verifyStep3Heading();
});
When('User views heading', async ({page}) => {
  lp = new loginpage(page)
  const user = await reader.getProfileWithBR();
  await lp.fillallthefields(user.AGE,user.HEIGHT,user.WEIGHT)
  await lp.clickgenderoption();
  await lp.selectMaleGender();
  await lp.clickStep1ConBtn();
  await lp.clickEasy();
  await lp.seeStep3Heading();
});
Then('Page should display title Your taste buds what team are they on', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyStep3Heading();
});
Then('Page should display Select your dietary preference', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyStep3Subtitile();
});
Then('User should see All inclusive diet Vegetarian and Vegan', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyStep3IntensityLevels();
});
When('User selects dietary preference', async ({page}) => {
  lp = new loginpage(page)
  //const user = await reader.getNextUser();
  const user = await reader.getProfileWithBR();
  await lp.fillallthefields(user.AGE,user.HEIGHT,user.WEIGHT)
  await lp.clickgenderoption();
  await lp.selectMaleGender();
  await lp.clickStep1ConBtn();
  await lp.clickEasy();
});
Then('Page should display title Whats your go to food passport', async ({page}) => {
  lp = new loginpage(page)
  await lp.clickVegan();
  await lp.verifyStep4Heading();
});
Then('Page should display To create a meal plan youll enjoy please select your preferred cuisines', async ({page}) => { 
  lp = new loginpage(page)
  await lp.verifyStep4Subtitile();
});
Then('User should see Indian American Continental Mediterranean Asian Middle Eastern and Mexican', async ({page}) => {  
  lp = new loginpage(page)
  await lp.verifyStep4IntensityLevels();  
});
When('User selects food passport', async ({page}) => {
  lp = new loginpage(page)
  const user = await reader.getProfileWithBR();
  await lp.fillallthefields(user.AGE,user.HEIGHT,user.WEIGHT)
  await lp.clickgenderoption();
  await lp.selectMaleGender();
  await lp.clickStep1ConBtn();
  await lp.clickEasy();
  await lp.clickVegan();
  await lp.clickIndian();
});
Then('Page should display title Allergic to any foods', async ({page}) => {
  lp = new loginpage(page)
  await lp.clickAllInclusive();
  await lp.clickIndian();
  await lp.verifyStep5Heading();  
});
Then('Page should display Select all that apply', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyStep5Subtitile();
});
Then('User should see Gluten Eggs Soy Nuts Dairy Shellfish Other and None', async ({page}) => {
  lp = new loginpage(page)
  await lp.verifyStep5AllergyOptions();
});
Then('Submit button should be visible', async ({page}) => {
  lp = new loginpage(page)
  await lp.visibleSubmitBtn();
});
When('User selects one allergy and clicks submit', async ({page}) => {
  lp = new loginpage(page)
  const user = await reader.getProfileWithBR();
  await lp.fillallthefields(user.AGE,user.HEIGHT,user.WEIGHT)
  await lp.clickgenderoption();
  await lp.selectMaleGender();
  await lp.clickStep1ConBtn();
  await lp.clickEasy();
  await lp.clickVegan();
  await lp.clickIndian();
  await lp.clickgluetonCheckBox();
  await lp.clickSubmitBtn();
});
Then('User should navigate to subscription details', async ({page}) => {
  lp = new loginpage(page)
  await lp.goNextpage();
});
When('User selects multiple allergies and clicks submit', async ({page}) => {
  lp = new loginpage(page)
  const user = await reader.getProfileWithBR();
  await lp.fillallthefields(user.AGE,user.HEIGHT,user.WEIGHT)
  await lp.clickgenderoption();
  await lp.selectMaleGender();
  await lp.clickStep1ConBtn();
  await lp.clickEasy();
  await lp.clickVegan();
  await lp.clickIndian();
  await lp.clickgluetonCheckBox();
  await lp.clickdairyCheckBox();
  await lp.clickSubmitBtn();
});
Then('User should navigate to Upgrade to premium plus', async ({page}) => {
  lp = new loginpage(page)
  await lp.goNextpage();
});

/*Onboarding without blood report*/
Given('User is on the upload blood report page', async ({page}) => {
  lp = new loginpage(page)
  await page.goto('https://sweet-balance-test-env-3-numpyninjadiabe.replit.app/blood-report-question');
  await lp.goNextpage();
});

When('User clicks on the onboarding button', async ({page}) => {
  // Step: When User clicks on the onboarding button
  // From: features\Login.feature:294:1
  lp = new loginpage(page)
  await lp.clickStepThroughButton();
});

Then('User navigates to Step {int}', async ({page}, arg) => {
  // Step: Then User navigates to Step 1
  // From: features\Login.feature:295:1
  lp = new loginpage(page)
  //await lp.clickStepThroughButton();
   const user = await reader.getProfileWithoutBR();
  await lp.enteremail(user.VALID_NEW_EMAIL);
  await lp.clickcontinuewithemailbutton();
  await lp.enterFullName(user.FULLNAME);
  await lp.enterUserNameInputField(user.USERNAME);
  await lp.enterProfilePasswordInputField(user.PROFILE_PASSWORD);
  await lp.clickTermsCheckbox(); 
  await lp.clickCreateAccountButton();
  await lp.clickStepThroughButton();
  await lp.verifyonboard_step1heading();
});
When('User selects a condition in step {int}', async ({page}, arg) => {
  // Step: When User selects a condition in step 1
  // From: features\Login.feature:297:1
  lp = new loginpage(page)
  await lp.clicktype2Button();
});

When('User selects a gender  in step {int}', async ({page}, arg) => {
  // Step: When User selects a gender  in step 2
  // From: features\Login.feature:298:1
  lp = new loginpage(page)
  await lp.clickmaleoption();
});

When('User selects any age option in step {int}', async ({page}, arg) => {
  // Step: When User selects any age option in step 3
  // From: features\Login.feature:299:1
  lp = new loginpage(page)
  await lp.clickyearsoption();
});
When('User selects from options available in centimeters', async ({page}) => {
  // Step: When User selects from options available in centimeters
  // From: features\Login.feature:300:1
  lp = new loginpage(page)
  await lp.clickcmoption();
});

When('User selects from options available in kilogram', async ({page}) => {
  // Step: When User selects from options available in kilogram
  // From: features\Login.feature:300:1
  lp = new loginpage(page)
  await lp.clickkgoption();
});

When('User selects from the options in step {int}', async ({page}, arg) => {
  // Step: When User selects from the options in step 6
  // From: features\Login.feature:301:1
  lp = new loginpage(page)
  await lp.clickvegetarianoption();
});

When('User selects from one of the cuisine options in step {int}', async ({page}, arg) => {
  // Step: When User selects from one of the cuisine options in step 7
  // From: features\Login.feature:302:1
  lp = new loginpage(page)
  await lp.clickindianoption();
});

When('User select option yes', async ({page}) => {
  // Step: When User select option yes
  // From: features\Login.feature:303:1
  lp = new loginpage(page)
  await lp.clickfoodallergyYesoption()
});
When('User clicks allergy option in step {int}', async ({page}, arg) => {
  // Step: When User clicks allergy option in step 9
  // From: features\Login.feature:305:1
  lp = new loginpage(page)
  await lp.clickglutencheckbox();
  await lp.clicknutscheckbox();
});

When('User clicks continue button', async ({page}) => {
  // Step: When User clicks continue button
  // From: features\Login.feature:306:1
  lp = new loginpage(page)
  await lp.clickonboard_continueBtn();
});
When('User checks more than one checkbox', async ({page}) => {
  // Step: When User checks more than one checkbox
  // From: features\Login.feature:307:1
  lp = new loginpage(page)
 /* await lp.clickgluetonCheckBox();
  await lp.clicknutscheckbox();*/
   await lp.clickbloodpressureoption();
});

When('User clicks continue in step {int}', async ({page}, arg) => {
  // Step: When User clicks continue in step 10
  // From: features\Login.feature:308:1
  lp = new loginpage(page)
  await lp.clickonboard_continueBtn();
});

When('User clicks option from the preferred intensity level', async ({page}) => {
  // Step: When User clicks option from the preferred intensity level
  // From: features\Login.feature:309:1
  lp = new loginpage(page)
  await lp.clickeasyoption();
});

When('User enters valid range of value in input field', async ({page}) => {
  // Step: When User enters valid range of value in input field
  // From: features\Login.feature:310:1
  lp = new loginpage(page)
  await lp.clickhbA1cValueoption('6.5');
});

When('User clicks {string}', async ({page}, arg) => {
  // Step: When User clicks "continue"
  // From: features\Login.feature:311:1
  lp = new loginpage(page)
  await lp.clickonboard_continueBtn();
});

Then('User should be navigated to the {string} screen after loading personalised screen', async ({page}, arg) => {   
  lp = new loginpage(page)
  await expect(page).toHaveURL("https://sweet-balance-test-env-3-numpyninjadiabe.replit.app/onboarding");
});
