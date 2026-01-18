import { DiabetesRiskAssessmentPage } from '../pages/02-DiabetesRiskAssessment.js';
import { createBdd } from 'playwright-bdd';
import logger from '../utils/logger.js';
import { expect } from '@playwright/test';
import { LaunchPage } from '../pages/Launch.js';

import { ExcelReader } from '../utils/excelreader.js';
const excel = new ExcelReader();


const { Given, When, Then } = createBdd();


let dra;
let lp;

When('User clicks {string} button.', async ({page}) => {
  dra = new DiabetesRiskAssessmentPage(page);
  await dra.clickCheckYourRisk();
  logger.info('Clicked "Check Your Risk" button');
});


//modal heading validation
Then('User should see {string} header', async ({page}, expectedHeading) => {
  await dra.validateModalHeading(expectedHeading);
  logger.info(`Validated modal header: "${expectedHeading}"`);
});

// modal dialog sub text validation
Then('User see  {string} text', async ({page}, expectedText) => {
  await dra.validateModalText(expectedText);
  logger.info(`Validated modal text: "${expectedText}"`);
});

//Verify cancel button presence
Then('User should see Cancel button', async ({page}) => {
   await dra.validateButtonPresence('Cancel');
  logger.info('Cancel button is visible');
});

Then('User should see Calculate Risk button', async ({page}) => {
   await dra.validateButtonPresence('Calculate Risk');
  logger.info('Calculate Risk button is visible');
});

Then('User should see Calculate Risk button disabled', async ({page}) => {
  await dra.validateButtonDisabled('Calculate Risk');
  logger.info('Calculate Risk button is disabled');
});


//stepper controls 

Then(
  'User should see field with for={string} having {string} control',
  async ({ page }, fieldFor, controlType) => {
    const dra = new DiabetesRiskAssessmentPage(page);

    // Both increment and decrement are verified inside validateStepperControlsById
    if (controlType === 'increment' || controlType === 'decrement') {
      await dra.validateStepperControlsById(fieldFor);
    } else {
      throw new Error(`Unsupported control type: ${controlType}`);
    }
  }
);

Then(
  'User should see check box for {string} field',
  async ({ page }, fieldText) => {
    const dra = new DiabetesRiskAssessmentPage(page);
    await dra.validateCheckbox(fieldText);
  }
);

//placeholder validation
Then('User should see placeholder {string} in Age field', async ({page}, expectedPlaceholder) => {
 const dra = new DiabetesRiskAssessmentPage(page);
 await dra.validatePlaceholder('risk_age', expectedPlaceholder);
});

Then('User should see placeholder {string} in weight field', async ({page}, expectedPlaceholder) => {
  const dra = new DiabetesRiskAssessmentPage(page);
  await dra.validatePlaceholder('risk_weight', expectedPlaceholder);
});

//dropdown validation

Then('User should see dropdown for {string}', async ({ page }, dropdownLabel) => {
  dra = new DiabetesRiskAssessmentPage(page);
  await dra.validateDropdownByLabel(dropdownLabel);
});

//deafult dropdown value validation

Then('User should see {string} as the default option for {string}', async ({ page }, expectedDefault, dropdownLabel) => {
  dra = new DiabetesRiskAssessmentPage(page);
  await dra.validateDropdownDefaultValue(dropdownLabel, expectedDefault);
});


//dropdown options validation


Then('User should see options {string} for {string}', async ({ page }, expectedOptionsJson, labelText) => {
  dra = new DiabetesRiskAssessmentPage(page);
  await dra.validateDropdownOptions(labelText, expectedOptionsJson);
});

//Functional Verification on Diabetes Risk Analyzer = > button validations 

// Given step: open URL and modal
Given('User is in diabetes risk analyzer', async ({ page }) => {
  lp = new LaunchPage(page);
  await lp.launchURL(process.env.APP_URL);
  if (lp.waitForPageStable) await lp.waitForPageStable();

  dra = new DiabetesRiskAssessmentPage(page);
  await dra.clickCheckYourRisk();
});

//When step: click Cancel button
When('User clicks {string} button on Diabetes Risk Analyzer page', async ({ page }, buttonText) => {
  dra = dra || new DiabetesRiskAssessmentPage(page);
  await dra.clickModalButton(buttonText); // works for Cancel or any other modal button
});


Then('User should be returned to the home page', async ({page}) => {
 const appNameText = await lp.validateAppName();
  logger.info(`Validating app name: ${appNameText}`);
 });

/**
 * WHEN: Fill Diabetes Risk form from Excel
 */
// When('User enters diabetes risk data from excel row {string}', async ({ page }, rowNo) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);

//   const data = await reader.getDiabetesRiskRow(Number(rowNo));

//   const familyHistory =
//     String(data.familyHistory).toLowerCase() === 'true';

//   await dra.enterValuesInAllFields(
//     data.age ?? '',
//     data.weight ?? '',
//     data.activity ?? '',
//     data.bp ?? '',
//     data.diet ?? '',
//     familyHistory
//   );

//   logger.info(`Filled Diabetes Risk form using Excel row ${rowNo}`);
// });

// /**
//  * THEN: Verify expected result
//  */
// Then('{string} should occur', async ({ page }, expectedResult) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);

//   switch (expectedResult.toLowerCase()) {
//     case 'button disabled':
//       await dra.validateButtonDisabled('Calculate Risk');
//       logger.info('"Calculate Risk" button is disabled');
//       break;

//     case 'assessment dialog':
//       await dra.clickModalButton('Calculate Risk');
//       await dra.validateAssessmentDialog();
//       logger.info('Assessment dialog displayed');
//       break;

//     default:
//       throw new Error(`Unknown expected result: ${expectedResult}`);
//   }
// });
