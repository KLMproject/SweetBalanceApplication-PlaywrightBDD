
import { expect } from "@playwright/test";
import { Given, When, Then } from '../fixtures/fixtures';
import { subscriptionPage } from "../pages/subscriptionPage";
import logger from '../utils/logger';
import { loginpage } from '../pages/Login.js'

Given('User completes onboarding process', async ({loginpage}) => {
  // Step: Given User completes onboarding process
  // From: features\subscriptionPage.feature:4:1 
  
  await loginpage.goto();
  await loginpage.clickonloginlink();
  await loginpage.enteremail(process.env.USER_EMAIL);  
  await loginpage.clickcontinuewithemailbutton()
  await loginpage.enterPassword(process.env.USER_PASSWORD);
  await loginpage.clickSigninButton();
});

Then('Both Free and Premium should show Daily Meal Plan as available', async ({subscriptionPage}) => {
  // Step: Then Both Free and Premium should show Daily Meal Plan as available
  // From: features\subscriptionPage.feature:9:3
  await subscriptionPage. verifyDailyMealPlanFeature()
});

Then('{string} should be {string}', async ({subscriptionPage}, feature, availability) => {
  // Step: Then "Daily Meal Plan" should be "both"
  // From: features\subscriptionPage.feature:17:5
  await subscriptionPage.verifyAvailability(feature, availability);
  logger.info(`Verified that feature "${feature}" is available for "${availability}" accounts.`);
});

Then('Continue Free button should be visible', async ({subscriptionPage}) => {
  // Step: Then Continue Free button should be visible
  // From: features\subscriptionPage.feature:33:3
  await subscriptionPage.verifyContinueFreeButton();
});

Then('Upgrade to Premium button should be visible', async ({subscriptionPage}) => {
  // Step: Then Upgrade to Premium button should be visible
  // From: features\subscriptionPage.feature:36:3
  await subscriptionPage.verifyUpgradeToPremiumButton();
});

Then('Free Account label should be displayed', async ({subscriptionPage}) => {
  // Step: Then Free Account label should be displayed
  // From: features\subscriptionPage.feature:39:3
  await subscriptionPage.verifyFreeAccountLabel();
});

Then('Premium Account label should be displayed', async ({subscriptionPage}) => {
  // Step: Then Premium Account label should be displayed
  // From: features\subscriptionPage.feature:42:3
  await subscriptionPage.verifyPremiumAccountLabel();
});

Then('Upgrade message header should be displayed', async ({subscriptionPage}) => {
  // Step: Then Upgrade message header should be displayed
  // From: features\subscriptionPage.feature:45:3
  await subscriptionPage.verifyUpgradeToPremiumForCompleteDiabetesHeading();
});

Then('Terms and Conditions text should be visible', async ({subscriptionPage}) => {
  // Step: Then Terms and Conditions text should be visible
  // From: features\subscriptionPage.feature:48:3
  await subscriptionPage.verifyTermsAndConditionsText();
});

When('User clicks Continue Free button', async ({subscriptionPage}) => {
  // Step: When User clicks Continue Free button
  // From: features\subscriptionPage.feature:51:3
  await subscriptionPage.clickContinueFreeButton();
});

Then('User should be navigated to Home page', async ({subscriptionPage}) => {
  // Step: Then User should be navigated to Home page
  // From: features\subscriptionPage.feature:52:3
  await subscriptionPage.verifyNavigatedToHomepage();

});

When('User clicks  Upgrade to Premium button', async ({subscriptionPage}) => {
  // Step: When User clicks  Upgrade to Premium button
  // From: features\subscriptionPage.feature:55:3
  await subscriptionPage.clickUpgradeToPremiumButton();
});

Then('User should be navigated to upgrade page', async ({subscriptionPage}) => {
  // Step: Then User should be navigated to upgrade page
  // From: features\subscriptionPage.feature:56:3
  await subscriptionPage.verifyNavigatedToUpgradePage();
});

Given('User is logged in with Free account', async ({subscriptionPage}) => {
  // Step: Given User is logged in with Free account
  // From: features\subscriptionPage.feature:68:3
  await subscriptionPage.navigateToFreeAccountUserPage();
});

When('User clicks View Full Plan on Home page', async ({subscriptionPage}) => {
  // Step: When User clicks View Full Plan on Home page
  // From: features\subscriptionPage.feature:69:3
  await subscriptionPage.clickViewFullPlanButton();
});

Then('User should be redirected to the subscription payment screen', async ({subscriptionPage}) => {
  // Step: Then User should be redirected to the subscription payment screen
  // From: features\subscriptionPage.feature:70:3
  await subscriptionPage.verifyOnUpgradePage();
});

When('User navigates to Exercise tab', async ({subscriptionPage}) => {
  // Step: When User navigates to Exercise tab
  // From: features\subscriptionPage.feature:75:3
  await subscriptionPage.clickExerciseButton();
});

When('User clicks View Full Schedule', async ({subscriptionPage}) => {
  // Step: When User clicks View Full Schedule
  // From: features\subscriptionPage.feature:76:3
  await subscriptionPage.clickViewFullScheduleButton();
});

When('User clicks Upgrade to Premium on Dashboard', async ({subscriptionPage}) => {
  // Step: When User clicks Upgrade to Premium on Dashboard
  // From: features\subscriptionPage.feature:81:3
await subscriptionPage.clickDashboardButton();
await subscriptionPage.clickUpgradeToPremiumButton();
});


