import { DiabetesRiskAssessmentPage } from '../pages/DiabetesRiskAssessmentPage.js';
import { createBdd } from 'playwright-bdd';
import logger from '../utils/logger.js';
import { expect } from '@playwright/test';
import { LaunchPage } from '../pages/Launch.js';

import { ExcelReader } from '../utils/excelreader.js';
const excel = new ExcelReader();


const { Given, When, Then } = createBdd();


let dra;
let lp;

When('User clicks {string} button', async ({page}) => {
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



 
 // When step: fill data  from Excel


//  When('User enters diabetes risk data from excel row {string}', async ({ page, rowNo }) => {
//   const dra = new DiabetesRiskAssessmentPage(page);
//   const rowNumber = parseInt(rowNo, 10);
//   const data = await excel.getDiabetesRiskData(rowNumber);
//   await dra.enterRiskData(data);
// });

// Then('{string} should occur', async ({ page, expectedResult }) => {
//   const dra = new DiabetesRiskAssessmentPage(page);
//   const button = dra.page.locator('button:has-text("Calculate Risk")');

//   if (expectedResult.toLowerCase().includes('disabled')) {
//     await expect(button).toBeDisabled();
//   } else if (expectedResult.toLowerCase().includes('assessment')) {
//     const modal = dra.page.locator('#assessmentModal'); // adjust selector
//     await expect(modal).toBeVisible({ timeout: 5000 });
//   }
// });


//  When('User enters diabetes risk data from excel row {string}', async ({ rowNo }) => {
//   const dra = new DiabetesRiskAssessmentPage(page);
//   const excel = new ExcelReader();
//   const rowNumber = parseInt(rowNo, 10);
//   const data = await excel.getDiabetesRiskData(rowNumber);
//   await dra.enterRiskData(data);
// });

//  When('User enters diabetes risk data from excel row {string}', async (rowNo) {
//   dra = new DiabetesRiskAssessmentPage(this.page);
//   const rowNumber = parseInt(rowNo, 10);
//   const data = await excel.getDiabetesRiskData(rowNumber);

//   await dra.enterRiskData(data);
// });


// Then('{string} should occur', async function (expectedResult) {
//   const button = dra.page.locator('button:has-text("Calculate Risk")');

//   if (expectedResult.toLowerCase().includes('disabled')) {
//     await expect(button).toBeDisabled();
//   } else if (expectedResult.toLowerCase().includes('assessment')) {
//     // Wait for modal/dialog to appear
//     const modal = dra.page.locator('#assessmentModal'); // adjust selector
//     await expect(modal).toBeVisible({ timeout: 5000 });
//   }
// });





// // When step: fill form from Excel
// When('User enters diabetes risk data from excel row {string}', async ({ page }, rowNo) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);

//   // Get Excel row data
//   const data = await reader.getDiabetesRiskRow(Number(rowNo));

//   // Convert familyHistory to boolean
//   const familyHistory = String(data.familyHistory).toLowerCase() === 'true';

//   // Fill all fields using Page Object method
//   await dra.enterValuesInAllFields(
//     data.age ?? '',        // empty string if null
//     data.weight ?? '',
//     data.activity ?? '',
//     data.bp ?? '',
//     data.diet ?? '',
//     familyHistory
//   );

//   // ✅ Only log safe string
//   console.log(`✅ Filled Diabetes Risk form for Excel row ${rowNo}`);
// });


// Then('{string} should occur', async ({ page }, expectedResult) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);

//   switch (expectedResult) {
//     case 'button disabled':
//       await dra.validateButtonDisabled('Calculate Risk');
//       console.log('✅ "Calculate Risk" button is disabled'); // safe
//       break;
//     case 'assessment dialog':
//       await dra.clickModalButton('Calculate Risk');
//       await dra.validateAssessmentDialog();
//       console.log('✅ Assessment dialog displayed'); // safe
//       break;
//     default:
//       throw new Error(`Unknown expected result: ${expectedResult}`);
//   }
// });

// When('User enters diabetes risk data from excel row {string}', async ({ page }, rowNo) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);

//   // Get Excel row data
//   const data = await reader.getDiabetesRiskRow(Number(rowNo));

//   // Convert familyHistory to boolean
//   const familyHistory = String(data.familyHistory).toLowerCase() === 'true';

//   // Fill all fields using Page Object method
//   await dra.enterValuesInAllFields(
//     data.age,        // handles null/empty
//     data.weight,
//     data.activity,
//     data.bp,
//     data.diet,
//     familyHistory
//   );

//   console.log(`✅ Filled Diabetes Risk form using Excel row ${rowNo}`);
// });


// Then('{string} should occur', async ({ page }, expectedResult) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);

//   switch (expectedResult) {
//     case 'button disabled':
//       await dra.validateButtonDisabled('Calculate Risk');
//       console.log('✅ "Calculate Risk" button is disabled');
//       break;
//     case 'assessment dialog':
//       await dra.clickModalButton('Calculate Risk');
//       await dra.validateAssessmentDialog();
//       console.log('✅ Assessment dialog displayed');
//       break;
//     default:
//       throw new Error(`Unknown expected result: ${expectedResult}`);
//   }
// });



// When: fill form from Excel
// When('User enters diabetes risk data from excel row {string}', async ({ rowNo, page }) => {
//   const data = await reader.getDiabetesRiskRow(Number(rowNo));
//   await dra.enterValuesInAllFields(
//     data.age,
//     data.weight,
//     data.activity,
//     data.bp,
//     data.diet,
//     String(data.familyHistory).toLowerCase() === 'true'
//   );
// });



// // Then: verify expected result
// Then('{string} should occur', async ({ page, expectedResult }) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);
//   switch (expectedResult) {
//     case 'button disabled':
//       await dra.validateButtonDisabled('Calculate Risk');
//       break;
//     case 'assessment dialog':
//       await dra.clickModalButton('Calculate Risk');
//       await dra.validateAssessmentDialog();
//       break;
//     default:
//       throw new Error(`Unknown expected result: ${expectedResult}`);
//   }
// });













// // Handle expected results
// Then('{string} should occur', async ({ page }, expectedResult) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);

//   switch (expectedResult) {
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














// When('User enters diabetes risk data from excel row {string}', async ({ page }, rowNo) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);
//   const data = await reader.getDiabetesRiskRow(Number(rowNo));

//   await dra.enterValuesInAllFields(
//     data.age,
//     data.weight,
//     data.activity,
//     data.bp,
//     data.diet,
//     data.familyHistory === true || data.familyHistory === 'TRUE'
//   );

//   logger.info(`Filled Diabetes Risk form with Excel row ${rowNo}`);
// });

// // Handle expected results
// Then('{string} should occur', async ({ page }, expectedResult) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);

//   switch (expectedResult) {
//     case 'button disabled':
//       await dra.validateButtonDisabled('Calculate Risk');
//       logger.info('"Calculate Risk" button is disabled');
//       break;
//     case 'assessment dialog':
//       await dra.clickModalButton('Calculate Risk'); // reuse generic click
//       await dra.validateAssessmentDialog();
//       logger.info('Assessment dialog displayed');
//       break;
//     default:
//       throw new Error(`Unknown expected result: ${expectedResult}`);
//   }
// });



// Fill form from Excel


// When('User enters diabetes risk data from excel row {string}', async ({ page }, rowNo) => {
//   const rowData = await excel.getDiabetesRiskRow(parseInt(rowNo));
//   await dra.enterValuesInAllFields(
//     rowData.age,
//     rowData.weight,
//     rowData.activity,
//     rowData.bp,
//     rowData.diet,
//     rowData.familyHistory
//   );

//    logger.info(`Filled Diabetes Risk form with Excel row ${rowNo}`);
// });


// Fill form from Excel
// When('User enters diabetes risk data from excel row {string}', async ({ page }, rowNo) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);
//   const data = await reader.getDiabetesRiskRow(Number(rowNo));

//   await dra.enterValuesInAllFields(
//     data.age,
//     data.weight,
//     data.activity,
//     data.bp,
//     data.diet,
//     Boolean(data.familyHistory?.toString().toLowerCase() === 'true')
//   );

//   logger.info(`Filled Diabetes Risk form with Excel row ${rowNo}`);
// });



// When('User enters diabetes risk data from excel row {string}', async ({ page }, rowNo) => {
//   dra = dra || new DiabetesRiskAssessmentPage(page);

//   const data = await reader.getDiabetesRiskRow(Number(rowNo));

//   const familyHistory =
//     String(data.familyHistory).toLowerCase() === 'true';

//   await dra.enterValuesInAllFields(
//     data.age,        // null for Row 4 → skipped
//     data.weight,
//     data.activity,
//     data.bp,
//     data.diet,
//     familyHistory
//   );

//   logger.info(`Filled Diabetes Risk form using Excel row ${rowNo}`);
// });


// When('User enters diabetes risk data from excel row {string}', async ({ rowNo, page }) => {
//   const excel = new ExcelReader();
//   const rowData = await excel.getRowData('DiabetesRisk', parseInt(rowNo));

//   await dra.enterValuesInAllFields(
//     rowData.age,
//     rowData.weight,
//     rowData.activity,
//     rowData.bp,
//     rowData.diet,
//     rowData.familyHistory
//   );
// });
