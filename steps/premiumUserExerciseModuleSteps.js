import { expect } from "@playwright/test";
import { Given, When, Then } from '../fixtures/fixtures';
import { premiumUserExerciseModulePage } from "../pages/premiumUserExerciseModulePage";
import logger from '../utils/logger';
import { loginpage } from '../pages/Login.js'

Given('User is Logged into the app', async ({loginpage}) => {
  // Step: Given User is Logged into the app
  // From: features\premiumUserExerciseModule.feature:4:5
  await loginpage.goto();
  await loginpage.clickonloginlink();
  await loginpage.enteremail(process.env.USER_EMAIL);  
  await loginpage.clickcontinuewithemailbutton()
  await loginpage.enterPassword(process.env.USER_PASSWORD);
  await loginpage.clickSigninButton();
});

Given('User is on the homepage', async ({premiumUserExerciseModulePage}) => {
  // Step: Given User is on the homepage
  // From: features\premiumUserExerciseModule.feature:8:5
  await premiumUserExerciseModulePage.navigateToHomepage();
});

When('User clicks the Exercise option from the side panel', async ({premiumUserExerciseModulePage}) => {
  // Step: When User clicks the Exercise option from the side panel
  // From: features\premiumUserExerciseModule.feature:9:5
  await premiumUserExerciseModulePage.navigateToExerciseModule();
});

Then('View Full Schedule button is displayed on the right', async ({premiumUserExerciseModulePage}) => {
  // Step: Then View Full Schedule button is displayed on the right
  // From: features\premiumUserExerciseModule.feature:10:5
  await premiumUserExerciseModulePage.verifyViewFullScheduleButtonIsVisible();
});

Then('Warm Up tab is visible', async ({premiumUserExerciseModulePage}) => {
  // Step: Then Warm Up tab is visible
  // From: features\premiumUserExerciseModule.feature:11:5
  await expect(premiumUserExerciseModulePage.warmUpBtnn).toBeVisible();
});

Then('Main Workout tab is visible', async ({premiumUserExerciseModulePage}) => {
  // Step: Then Main Workout tab is visible
  // From: features\premiumUserExerciseModule.feature:12:5
  await expect(premiumUserExerciseModulePage.mainWorkoutBtn).toBeVisible();
});

Then('Cool Down tab is visible', async ({premiumUserExerciseModulePage}) => {
  // Step: Then Cool Down tab is visible
  // From: features\premiumUserExerciseModule.feature:13:5
  await expect(premiumUserExerciseModulePage.coolDownBtn).toBeVisible();
});

// Content scenario outline steps
Given('User is on the exercise module page', async ({premiumUserExerciseModulePage}) => {
  // Step: Given User is on the exercise module page
  // From: features\premiumUserExerciseModule.feature:17:5
  await premiumUserExerciseModulePage.navigateToExerciseModule();
});

When('User views the Warm Up section', async ({premiumUserExerciseModulePage}) => {
  // Step: When User views the Warm Up section
  // From: features\premiumUserExerciseModule.feature:18:5
  await premiumUserExerciseModulePage.viewSection('Warm Up');
});

Then('Exercise name is displayed', async ({premiumUserExerciseModulePage}, section) => {
  // Step: Then Exercise name is displayed
  // From: features\premiumUserExerciseModule.feature:19:5
  // This is handled in verifySectionContent, but we can keep individual steps
  switch(section) {
    case 'Warm Up':
      await expect(premiumUserExerciseModulePage.warmUpExrBasicStrching).toBeVisible();
      break;
    case 'Main Workout':
      await expect(premiumUserExerciseModulePage.mainWorkoutExrwalking).toBeVisible();
      break;
    case 'Cool Down':
      await expect(premiumUserExerciseModulePage.coolDownExrLightWalkingAndStretching).toBeVisible();
      break;
  }
});

Then('Description is shown below the Exercise name', async ({premiumUserExerciseModulePage}, section) => {
  // Step: Then Description is shown below the Exercise name
  // From: features\premiumUserExerciseModule.feature:20:5
  switch(section) {
    case 'Warm Up':
      await expect(premiumUserExerciseModulePage.warmUpExrDescrption).toBeVisible();
      break;
    case 'Main Workout':
      await expect(premiumUserExerciseModulePage.mainWorkoutExrdescription).toBeVisible();
      break;
    case 'Cool Down':
      await expect(premiumUserExerciseModulePage.coolDownExrDescription).toBeVisible();
      break;
  }
});

Then('Duration is displayed', async ({premiumUserExerciseModulePage}, section) => {
  // Step: Then Duration is displayed
  // From: features\premiumUserExerciseModule.feature:21:5
  switch(section) {
    case 'Warm Up':
      await expect(premiumUserExerciseModulePage.warmUpExrDuration).toBeVisible();
      break;
    case 'Main Workout':
      await expect(premiumUserExerciseModulePage.mainWorkoutExrDuration).toBeVisible();
      break;
    case 'Cool Down':
      await expect(premiumUserExerciseModulePage.coolDownExrDuration).toBeVisible();
      break;
  }
});

Then('Calories are displayed', async ({premiumUserExerciseModulePage }, section) => {
  // Step: Then Calories are displayed
  // From: features\premiumUserExerciseModule.feature:22:5
  switch(section) {
    case 'Warm Up':
      await expect(premiumUserExerciseModulePage.warmUpExrCalories).toBeVisible();
      break;
    case 'Main Workout':
      await expect(premiumUserExerciseModulePage.mainWorkoutExrCalories).toBeVisible();
      break;
    case 'Cool Down':
      await expect(premiumUserExerciseModulePage.coolDownExrCalories).toBeVisible();
      break;
  }
});

Then('Intensity level is displayed', async ({premiumUserExerciseModulePage}, section) => {
  // Step: Then Intensity level is displayed
  // From: features\premiumUserExerciseModule.feature:23:5
  switch(section) {
    case 'Warm Up':
      await expect(premiumUserExerciseModulePage.warmUpexrIntensity).toBeVisible();
      break;
    case 'Main Workout':
      await expect(premiumUserExerciseModulePage.mainWorkoutExrIntensity).toBeVisible();
      break;
    case 'Cool Down':
      await expect(premiumUserExerciseModulePage.coolDownExrIntensity).toBeVisible();
      break;
  }
});

When('User views the Main Workout section', async ({premiumUserExerciseModulePage}) => {
  // Step: When User views the Main Workout section
  // From: features\premiumUserExerciseModule.feature:18:5
  await premiumUserExerciseModulePage.viewSection('Main Workout');
});

When('User views the Cool Down section', async ({premiumUserExerciseModulePage}) => {
  // Step: When User views the Cool Down section
  // From: features\premiumUserExerciseModule.feature:18:5
  await premiumUserExerciseModulePage.viewSection('Cool Down');
});

// Interaction scenario steps
When('User clicks the Mark As Completed button', async ({premiumUserExerciseModulePage}) => {
  // Step: When User clicks the Mark As Completed button
  // From: features\premiumUserExerciseModule.feature:34:5
  await premiumUserExerciseModulePage.markExerciseAsCompleted();
});

Then('Success dialog is shown', async ({premiumUserExerciseModulePage}) => {
  // Step: Then Success dialog is shown
  // From: features\premiumUserExerciseModule.feature:35:5
  await expect(premiumUserExerciseModulePage.successDialog).toBeVisible();
});

Then('Button changes to Completed', async ({premiumUserExerciseModulePage}) => {
  // Step: Then Button changes to Completed
  // From: features\premiumUserExerciseModule.feature:36:5
  await expect(premiumUserExerciseModulePage.completedBtn).toBeVisible();
});

Then('Undo option is visible', async ({premiumUserExerciseModulePage}) => {
  // Step: Then Undo option is visible
  // From: features\premiumUserExerciseModule.feature:37:5
  await expect(premiumUserExerciseModulePage.unDoBtn).toBeVisible();
});

// Undo scenario steps

Given('User has marked exercise as completed', async ({premiumUserExerciseModulePage}) => {
  // Step: Given User has marked exercise as completed
  // From: features\premiumUserExerciseModule.feature:41:5
  await premiumUserExerciseModulePage.navigateToExerciseModule();
  //await premiumUserExerciseModulePage.verifyExerciseCompletion();
});

When('User clicks the Undo button', async ({premiumUserExerciseModulePage}) => {
  // Step: When User clicks the Undo button
  // From: features\premiumUserExerciseModule.feature:42:5
  await premiumUserExerciseModulePage.undoExerciseCompletion();
});

Then('Button changes back to Mark As Completed', async ({premiumUserExerciseModulePage}) => {
  // Step: Then Button changes back to Mark As Completed
  // From: features\premiumUserExerciseModule.feature:43:5
  await premiumUserExerciseModulePage.verifyExerciseNotCompleted();
});
// Navigation scenario steps

When('User clicks the View Full Schedule button', async ({premiumUserExerciseModulePage}) => {
  // Step: When User clicks the View Full Schedule button
  // From: features\premiumUserExerciseModule.feature:48:5
  await premiumUserExerciseModulePage.navigateToFullSchedule();
});

Then('User is redirected to Today\'s Exercise Schedule page', async ({premiumUserExerciseModulePage}) => {
  // Step: Then User is redirected to Today's Exercise Schedule page
  // From: features\premiumUserExerciseModule.feature:49:5
   await premiumUserExerciseModulePage.verifySchedulePageNavigation();
});

Then('Back to Home button is visible', async ({premiumUserExerciseModulePage}) => {
  // Step: Then Back to Home button is visible
  // From: features\premiumUserExerciseModule.feature:50:5
   await expect(premiumUserExerciseModulePage.backToHomeBtn).toBeVisible();
});
Then('page title Today\'s Exercise Schedule is displayed', async ({premiumUserExerciseModulePage}) => {
  // Step: Then page title Today's Exercise Schedule is displayed
  // From: features\premiumUserExerciseModule.feature:51:5
  await expect(premiumUserExerciseModulePage.pageTitle).toBeVisible();
});


//Scenario outline for exercise section details after clickling View Full Schedule

When('User views the Warm Up section details', async ({premiumUserExerciseModulePage}, sectionName) => {
  // Step: When User views the Warm Up section details
  // From: features\premiumUserExerciseModule.feature:58:6
  await premiumUserExerciseModulePage. verifySectionInSchedule(sectionName)
});

When('User views the Main Workout section details', async ({premiumUserExerciseModulePage}, sectionName) => {
  // Step: When User views the Main Workout section details
  // From: features\premiumUserExerciseModule.feature:58:6
  await premiumUserExerciseModulePage. verifySectionInSchedule(sectionName)
});

When('User views the Cool Down section details', async ({premiumUserExerciseModulePage}, sectionName) => {
  // Step: When User views the Cool Down section details
  // From: features\premiumUserExerciseModule.feature:58:6
  await premiumUserExerciseModulePage. verifySectionInSchedule(sectionName)
});
Then('Warm Up section is visible', async ({premiumUserExerciseModulePage}, sectionName) => {
  // Step: Then Warm Up section is visible
  // From: features\premiumUserExerciseModule.feature:57:5
  await premiumUserExerciseModulePage. verifySectionInSchedule(sectionName)
});

Then('exercise name is visible', async ({premiumUserExerciseModulePage}, sectionName) => {
  // Step: Then exercise name is visible
  // From: features\premiumUserExerciseModule.feature:58:5
   await premiumUserExerciseModulePage. verifySectionInSchedule(sectionName)
});

Then('exercise description is visible', async ({premiumUserExerciseModulePage},sectionName) => {
  // Step: Then exercise description is visible
  // From: features\premiumUserExerciseModule.feature:59:5
   await premiumUserExerciseModulePage. verifySectionInSchedule(sectionName)
});

Then('exercise duration is visible', async ({premiumUserExerciseModulePage}, sectionName) => {
  // Step: Then exercise duration is visible
  // From: features\premiumUserExerciseModule.feature:60:5
   await premiumUserExerciseModulePage. verifySectionInSchedule(sectionName)
});

Then('exercise calories are visible', async ({premiumUserExerciseModulePage}, sectionName) => {
  // Step: Then exercise calories are visible
  // From: features\premiumUserExerciseModule.feature:61:5
   await premiumUserExerciseModulePage. verifySectionInSchedule(sectionName)
});

Then('exercise intensity is visible', async ({premiumUserExerciseModulePage}, sectionName) => {
  // Step: Then exercise intensity is visible
  // From: features\premiumUserExerciseModule.feature:62:5
   await premiumUserExerciseModulePage. verifySectionInSchedule(sectionName)
});

Then('Main Workout section is visible', async ({premiumUserExerciseModulePage}, sectionName) => {
  // Step: Then Main Workout section is visible
  // From: features\premiumUserExerciseModule.feature:57:5
   await premiumUserExerciseModulePage. verifySectionInSchedule(sectionName)
});

Then('Cool Down section is visible', async ({premiumUserExerciseModulePage}, sectionName) => {
  // Step: Then Cool Down section is visible
  // From: features\premiumUserExerciseModule.feature:57:5
   await premiumUserExerciseModulePage. verifySectionInSchedule(sectionName)
});
//@validation

Then('Exercise intensity values are valid \\(low\\/medium\\/hard)', async ({premiumUserExerciseModulePage}) => {
  // Step: Then Exercise intensity values are valid (low/medium/hard)
  // From: features\premiumUserExerciseModule.feature:76:5
  await premiumUserExerciseModulePage.validateIntensityValues();
});
Then('Exercise intensity values are valid', async ({premiumUserExerciseModulePage}) => {
  // Step: Then Exercise intensity values are valid
  // From: features\premiumUserExerciseModule.feature:76:5
  await premiumUserExerciseModulePage.validateIntensityValues();
});


Then('total duration equals the sum of all individual durations', async ({premiumUserExerciseModulePage}) => {
  // Step: Then total duration equals the sum of all individual durations
  // From: features\premiumUserExerciseModule.feature:77:5
  const isValid = await premiumUserExerciseModulePage.validateTotalDurationCalculation();
  expect(isValid).toBe(true);
});

Then('total calories equals the sum of all individual calories', async ({premiumUserExerciseModulePage}) => {
  // Step: Then total calories equals the sum of all individual calories
  // From: features\premiumUserExerciseModule.feature:78:5
  const isValid = await premiumUserExerciseModulePage.validateTotalCaloriesCalculation();
  expect(isValid).toBe(true);
});
// Navigation back to homepage steps
When('User returns to home page', async ({premiumUserExerciseModulePage}) => {
  // Step: When User returns to home page
  // From: features\premiumUserExerciseModule.feature:84:5
  await premiumUserExerciseModulePage.navigateBackToHome();
});

Then('user is on the homepage', async ({premiumUserExerciseModulePage}) => {
  // Step: Then user is on the homepage
  // From: features\premiumUserExerciseModule.feature:85:5
  const isOnHomepage = await premiumUserExerciseModulePage.isOnHomepage();
  expect(isOnHomepage).toBe(true);

  
});

