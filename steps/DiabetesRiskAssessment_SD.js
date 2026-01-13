import { DiabetesRiskAssessmentPage } from '../pages/DiabetesRiskAssessmentPage.js';
import { createBdd } from 'playwright-bdd';
import logger from '../utils/logger.js';

const { Given, When, Then } = createBdd();
let dra;

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

