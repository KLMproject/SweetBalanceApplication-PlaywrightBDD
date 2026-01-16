import { expect } from '@playwright/test';
import { CommonFeatureForHomePage } from '../pages/CommonFeatureForHomePage.js';
import { createBdd } from 'playwright-bdd';
import logger from '../utils/logger.js';
import { ExcelReader } from '../utils/excelreader.js';
const reader = new ExcelReader();

const { Given, When, Then } = createBdd();

// Module-level POM instance
let cfh;
// let loginEmail;

//SweetBalance text  on the left side of the page
Then('User should see SweetBalance text on the left side of the page', async ({ page }) => {
  // initialize POM if not already done
  cfh = cfh || new CommonFeatureForHomePage(page);
  
  // call the POM method
  await cfh.verifySweetBalanceText();
});



// Username validation
Then('User should see user name on the top-right corner', async ({ page }) => {
  const user = await reader.getLogin(); // Read from Excel
  const loginEmail = user.VALID_EMAIL;

  const expectedName = CommonFeatureForHomePage.getDisplayNameFromEmail(loginEmail);

  cfh = cfh || new CommonFeatureForHomePage(page);

  const usernameLocator = cfh.loggedinUserName;
  await usernameLocator.waitFor({ state: 'visible', timeout: 5000 });

  const actualName = (await usernameLocator.textContent()).trim();
  //expect(actualName).toBe(expectedName);

  expect(actualName.toLowerCase()).toBe(expectedName.toLowerCase());


  logger.info(`Verified username: ${actualName}`);
});

Then('User should see Logout link on the top-right corner', async ({ page }) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyLogoutLink();
  logger.info('Verified Logout link');
});

Then('User should see top navigation bar', async ({ page }) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyTopNavigationBar();
  logger.info('Verified top navigation bar');
});

Then('User should see {string} tab in the navigation bar', async ({ page }, tabName) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyNavigationTab(tabName);
  logger.info(`Verified navigation tab: ${tabName}`);
});

Then('User should see {string} section heading', async ({ page }, headingText) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifySectionHeading(headingText);
  logger.info(`Verified section heading: ${headingText}`);
});

Then('User should see {string} label below Current Status', async ({page}, labelText) => {
   cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyLabel(labelText);
  logger.info(`Verified label: ${labelText}`);
});

Then('User should see timestamp for last update', async ({ page }) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyLastUpdateTimestamp();
});


Then('User should see last updated time in minutes or hours', async ({page}) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyLastUpdatedTimeInMinutesOrHours();

  logger.info('Verified last updated time is in minutes or hours');
});


Then('User should see {string} label', async ({page}, labelText) => {
 await cfh.verifyLabel(labelText);
  logger.info(`Verified label: ${labelText}`);

});


Then('User should see Latest HbA1C value', async ({ page }) => {
  cfh = cfh || new CommonFeatureForHomePage(page);

  await cfh.verifyHba1cCard();

  logger.info('Verified Latest HbA1C value');
});

Then('User should see BMI value', async ({page}) => {

  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyBmiCard();
 
});

Then('User should see Average Blood Sugar value', async ({ page }) => {
    cfh = cfh || new CommonFeatureForHomePage(page);
    await cfh.verifyAverageBloodSugarCard();
});



Then('User should see correct HbA1C condition', async ({ page }) => {
  const cfh = new CommonFeatureForHomePage(page);

  // Get numeric value
  const value = await cfh.getHba1cValue();
  const displayedStatus = await cfh.getHba1cStatusText();

  // Determine expected status based on ranges
  let expectedStatus;
  if (value < 5.7) {
    expectedStatus = 'Normal';
  } else if (value >= 5.7 && value <= 6.4) {
    expectedStatus = 'Pre-Diabetic';
  } else if (value >= 6.5) {
    expectedStatus = 'Diabetic';
  } else {
    throw new Error(`Unexpected HbA1C value: ${value}`);
  }

  // Assertion
  expect(displayedStatus).toBe(expectedStatus);

  console.log(`HbA1C value: ${value}, Expected: ${expectedStatus}, Displayed: ${displayedStatus}`);
});


//BMI Values 


Then('User should see correct BMI category', async ({ page }) => {
  const cfh = new CommonFeatureForHomePage(page);

  const value = await cfh.getBmiValue();
  const displayedStatus = await cfh.getBmiStatusText();

  // Determine expected status based on BMI ranges
  let expectedStatus;
  if (value < 18.5) {
    expectedStatus = 'Underweight';
  } else if (value >= 18.5 && value <= 24.9) {
    expectedStatus = 'Normal';
  } else if (value >= 25 && value <= 29.9) {
    expectedStatus = 'Overweight';
  } else if (value >= 30) {
    expectedStatus = 'Obese';
  } else {
    throw new Error(`Unexpected BMI value: ${value}`);
  }

  // Assertion
  expect(displayedStatus).toBe(expectedStatus);

  console.log(`BMI value: ${value}, Expected: ${expectedStatus}, Displayed: ${displayedStatus}`);
});


Then('User should see units {string} for Average Blood Sugar', async ({ page }, expectedUnit) => {
  const cfh = new CommonFeatureForHomePage(page);
  const actualUnit = await cfh.getAvgBloodSugarUnit();

  expect(actualUnit).toBe(expectedUnit); // validate units
  console.log(`Average Blood Sugar units: Expected = ${expectedUnit}, Actual = ${actualUnit}`);
});


//Meal Plan 
Then('User should see "Today\'s Meal Plan" Title in flex container', async ({ page }) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyTodaysMealPlanTitle();
});

Then('User should see tabs: Breakfast, Lunch, Dinner, Snacks', async ({ page }) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyMealTabs();
});

Then('"Breakfast" tab should be selected by default', async ({ page }) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyDefaultSelectedTab();
});


Then('User should see sidebar tabs with labels: Meal Plan, Exercise', async ({ page }) => {
    cfh = cfh || new CommonFeatureForHomePage(page);

    await cfh.verifySidebarTabs(); // verifies both Meal Plan and Exercise icons
    logger.info('Verified sidebar tabs with correct icons: Meal Plan and Exercise');
});


Then('User should see utensil icon in Meal Plan tab', async ({ page }) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyMealPlanIcon(); // uses correct selector
});

Then('User should see dumbbell icon in Exercise tab', async ({ page }) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyExerciseIcon(); // uses correct selector
});

Then('User should see "View Full Plan" button in Meal Plan section', async ({ page }) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyViewFullPlanButton();
});

Then('User should see sidebar tab with label {string}', async ({ page }, labelText) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifySidebarLabel(labelText);
  logger.info(`Verified sidebar label: ${labelText}`);
});


Then('User should see button {string}', async ({ page }, buttonText) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.verifyButton(buttonText);
  logger.info(`Verified button: ${buttonText}`);
});

//Click on Meal Sections and validate meal times - breakfast, lunch ,dinner ,snacks

When('User clicks on the {string} section', async ({ page }, sectionName) => {
  cfh = cfh || new CommonFeatureForHomePage(page);
  await cfh.clickMealSection(sectionName);
});

//validate time am pm format
Then('{string} details become visible with valid times', async ({}, sectionName) => {
  await cfh.assertMealCardsVisible();
  await cfh.validateAllMealTimes();
  console.log(`${sectionName} section meal times validated successfully`);
});
