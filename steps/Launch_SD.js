import { LaunchPage } from '../pages/Launch.js';
import { expect } from '@playwright/test';
import { ExcelReader } from '../utils/excelreader.js';
import { createBdd } from 'playwright-bdd';
import logger from '../utils/logger.js';
const { Given, When, Then } = createBdd(); 
const reader = new ExcelReader();
let lp;
//App Name Validation
Given('User launches the browser', async ({ page }) => {
    lp = new LaunchPage(page); // initialize LaunchPage
  // Browser already launched in hooks
  expect(page).toBeDefined();
});
When('User enters the SweetBalance {string}', async ({ page }, key) => {
//   await lp.launchUrl(key);
await lp.launchURL(process.env.APP_URL);
await lp.waitForPageStable();
  logger.info(`Navigated to URL: ${process.env.APP_URL}`);
});
Then('User should see app name on the top left', async ({ page }) => {
  const appNameText = await lp.validateAppName();
  logger.info(`Validating app name: ${appNameText}`);
});
//homepage text and headings Validations

Then('User should see text {string} in launchPage', async ({page}, elementValue) => {
  await lp.validateElement('text', elementValue);
  logger.info(`Validating text: ${elementValue}`);
});

Then('User should see heading {string} in launchPage', async ({page}, elementValue) => {
 await lp.validateElement('heading', elementValue);
  logger.info(`Validating heading: ${elementValue}`);
});

Then('User should see section {string} in launchPage', async ({page}, elementValue) => {
   await lp.validateElement('section', elementValue);
  logger.info(`Validating section: ${elementValue}`);
});


//button_text Validations
Then('User should see a {string} input button', async ({page}, buttonText) => {
 await lp.validateButtonText(buttonText);
   await lp.waitForPageStable();  
 logger.info(`Validating button text: ${buttonText}`);

});

//card_title Validations

Then('User should see a card with title {string}', async ({page}, cardTitle) => {
  await lp.validateCardTitle(cardTitle);
  logger.info(`Validating card title: ${cardTitle}`);
});

//feature cards and feature cards descriptions validations

Then('User should see the text {string} in {string} card', async ({ page }, expectedText, cardTitle) => {
    await lp.validateFeatureCardDesc(cardTitle, expectedText);
    logger.info(`Validating card "${cardTitle}" with text "${expectedText}"`);
  }
);

//feature cards icons validations

Then('User should see {string} icon in {string} card', async ({page}, iconName, cardName) => {

  await lp.validateIcon(cardName, iconName);
  logger.info(`Validating icon "${iconName}" in card "${cardName}"`);

});

//testimonial from user validations 

Then('User should see a testimonial from user {string}', async ({page}, userName) => {
 await lp.validateUserTestimonial(userName);
 logger.info(`Validating testimonial "${userName}"`);
});

//validate 5 yellow stars

Then('User should see {int} yellow stars above {string} text', async ({}, starCount, sectionText) => {
  await lp.validateStarsAboveSection(sectionText, starCount);
  logger.info(`Validating ${starCount} yellow stars above text: "${sectionText}"`);
});

//validate user testimonial stars

Then('User should see {int} stars under {string}', async ({page}, expectedStars, userName) => {
  await lp.validateUserTestimonialStars(userName, expectedStars);  
  logger.info(`Validation completed for user "${userName}"`);
    logger.info(`Validating that user "${userName}" has ${expectedStars} stars`);    
});


//Click Start Today Button

When('User click the {string} button', async ({page}, buttonText) => {
  await lp.validateButtonText(buttonText);
  logger.info(`Clicked "${buttonText}" button`);

});

Then('User should be redirected to the Login page', async ({page}) => {
     await lp.validateWelcomBackPage();
      logger.info('Welcome Back page validated');
});

//

Then('User  should see a link labeled {string}', async ({page}, linkText) => {
await lp.validateLoginButton(linkText); // checks visible & enabled
logger.info(`Login link "${linkText}" is visible and enabled`);
});

//login button click and welcome back page validation

When('User click on the {string} link', async ({page}) => {
  await lp.clickLoginButton();
   await lp.waitForPageStable();
   logger.info('Clicked Login button');

});


//Check Your Risk button click
When('User click on {string} button', async ({page}) => {
  await lp.clickCheckYourRiskButton();
  await lp.waitForPageStable();  
  logger.info('Clicked Check Your Risk Button');
});

Then('User should be redirected to the assessment modal dialog', async ({page}) => {
await lp.validateAssessmentModal();
 logger.info('Diabetes Risk Analyzer dialog Box displayed');
});

//Non-Functional Testing - Home Page

Then('Page should be fully loaded within {int} seconds', async ({page}, maxTimeSec) => {
  await lp.validatePageLoadTime(process.env.APP_URL, maxTimeSec);
  logger.info(`Page loaded within ${maxTimeSec} seconds`);
});

//All elements are readable and accessible without horizontal scrolling
// Responsive check

Then('All elements are readable and accessible without horizontal scrolling', async ({page}) => {
 await lp.validateNoHorizontalScroll();
  logger.info('Homepage is responsive without horizontal scrolling');
});

// Accessibility check

Then('All major sections are accessible with appropriate labels and alt texts', async ({page}) => {
  await lp.validateAccessibility();
  logger.info('Homepage accessibility standards validated');
});

// Sticky navigation bar
Then('User can access other sections without scrolling up', async ({}) => {
await lp.validateStickyNavbar();
  logger.info('Navigation bar remains accessible while scrolling');
});