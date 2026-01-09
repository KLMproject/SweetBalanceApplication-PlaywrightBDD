import { expect } from "@playwright/test";
import { Given, When, Then } from '../fixtures/fixtures';
import { homePageForFreeUserPage } from "../pages/homePageForFreeUserPage";
import logger from '../utils/logger';
import { loginpage } from '../pages/Login.js'

Given('User logs into the appliocation', async ({loginpage}) => {
  // Step: Given User logs into the appliocation
  // From: features\homePageForFreeUser.feature:4:5
  await loginpage.goto();
  await loginpage.clickonloginlink();
  await loginpage.enteremail(process.env.USER_EMAIL);  
  await loginpage.clickcontinuewithemailbutton()
  await loginpage.enterPassword(process.env.USER_PASSWORD);
  await loginpage.clickSigninButton();
});

Given('the user is on the home page', async ({homePageForFreeUserPage}) => {
  // Step: Given the user is on the home page
  // From: features\homePageForFreeUser.feature:7:5
  await homePageForFreeUserPage.clickHomeBtn();
});

Then('the navigation bar should contain {string} at position {int}', async ({homePageForFreeUserPage}, expectedItem, expectedPosition) => {
  // Step: Then the navigation bar should contain "Home" at position 1
  // From: features\homePageForFreeUser.feature:8:5
 const navTexts=await homePageForFreeUserPage.getNavigationItemsOrder();
 const actualItem = navTexts[expectedPosition - 1];
    expect(actualItem).toContain(expectedItem);
 
});

// MEAL SECTION STEPS
When('the user clicks on the meal section', async ({homePageForFreeUserPage}) => {
  // Step: When the user clicks on the meal section
  // From: features\homePageForFreeUser.feature:19:5
  await homePageForFreeUserPage.openMealPlan();
});

Then('{string} heading should be visible for each meal section', async ({homePageForFreeUserPage}, arg) => {
  // Step: Then "Nutrition Insights" heading should be visible for each meal section
  // From: features\homePageForFreeUser.feature:20:5
   await homePageForFreeUserPage.toggleMealPlan();

   // Check for each meal section
  const mealButtons = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
  
  for (const meal of mealButtons) {
    await homePageForFreeUserPage.clickMealType(meal);
    await homePageForFreeUserPage.verifyNutritionInsightsForAllMeals();
  }
});

Then('a horizontal nutrition bar should display for Carbs, Protein, and Fat in each meal', async ({homePageForFreeUserPage}) => {
  // Step: Then a horizontal nutrition bar should display for Carbs, Protein, and Fat in each meal
  // From: features\homePageForFreeUser.feature:25:5
  const barCount =await homePageForFreeUserPage.getNutritionBarsCount();
  expect(barCount).toBeGreaterThanOrEqual(3);
});

Then('the pre-meal title should appear after the main dish', async ({homePageForFreeUserPage}) => {
  // Step: Then the pre-meal title should appear after the main dish
  // From: features\homePageForFreeUser.feature:31:5
  homePageForFreeUserPage.verifyPreMealTitle();
});

Then('Carbs value should be visible for the main meal', async ({homePageForFreeUserPage}) => {
  // Step: Then Carbs value should be visible for the main meal
  // From: features\homePageForFreeUser.feature:37:5  
  await homePageForFreeUserPage.clickMealType('Breakfast');
    await expect(homePageForFreeUserPage.carbsValue).toBeVisible();
});

Then('Protein value should be visible for the main meal', async ({homePageForFreeUserPage}) => {
  // Step: Then Protein value should be visible for the main meal
  // From: features\homePageForFreeUser.feature:38:5
  await homePageForFreeUserPage.clickMealType('Breakfast');
    await expect(homePageForFreeUserPage.proteinValue).toBeVisible();
});

Then('Fat value should be visible for the main meal', async ({homePageForFreeUserPage}) => {
  // Step: Then Fat value should be visible for the main meal
  // From: features\homePageForFreeUser.feature:39:5
  await homePageForFreeUserPage.clickMealType('Breakfast');
    await expect(homePageForFreeUserPage.fatValue).toBeVisible();
});

Then('intake time should be displayed in each pre-meal section', async ({homePageForFreeUserPage}) => {
  // Step: Then intake time should be displayed in each pre-meal section
  // From: features\homePageForFreeUser.feature:45:5
   await homePageForFreeUserPage.verifyIntakeTimes();
});

// SNACK SECTION STEPS

When('the user clicks on the snack section', async ({homePageForFreeUserPage}) => {
  // Step: When the user clicks on the snack section
  // From: features\homePageForFreeUser.feature:51:5
  await homePageForFreeUserPage.openSnackSection();
});

Then('the {string} indicator should be visible for snack pre-meal', async ({homePageForFreeUserPage}, arg) => {
  // Step: Then the "PM" indicator should be visible for snack pre-meal
  // From: features\homePageForFreeUser.feature:52:5
   await homePageForFreeUserPage.openSnackSection();
  await homePageForFreeUserPage.verifySnackTime();
});

Then('the time should display in {string} for pre-meal snack', async ({homePageForFreeUserPage}, arg) => {
  // Step: Then the time should display in "hh:mm format" for pre-meal snack
  // From: features\homePageForFreeUser.feature:53:5
   await homePageForFreeUserPage.openSnackSection();
    const snackText = await homePageForFreeUserPage.snackTime.textContent();
    const timePattern = /\d{1,2}:\d{2}\s*(AM|PM)/i;
    expect(snackText.trim()).toMatch(timePattern);
});

Then('the time should display as {string} for pre-snack', async ({homePageForFreeUserPage}, arg) => {
  // Step: Then the time should display as "3 o'clock" for pre-snack
  // From: features\homePageForFreeUser.feature:54:5
  await homePageForFreeUserPage.openSnackSection();
    await homePageForFreeUserPage.verifyPreSnack();

    // Check if time contains expected value
    const snackText = await homePageForFreeUserPage.snackTime.textContent();
    expect(snackText).toContain('00 PM'); // Adjust based on  actual time

});

Then('a dot indicator should separate time and calorie in each pre-meal session', async ({homePageForFreeUserPage}) => {
  // Step: Then a dot indicator should separate time and calorie in each pre-meal session
  // From: features\homePageForFreeUser.feature:55:5
   await homePageForFreeUserPage.verifyDotSeparator();
});

When('the user clicks the {string} button', async ({homePageForFreeUserPage}, buttonText) => {
  // Step: When the user clicks the "View Full Plan" button
  // From: features\homePageForFreeUser.feature:61:5
  if (buttonText === 'View Full Plan') {
      await homePageForFreeUserPage.clickViewFullPlan();
    } else if (buttonText === 'View Full Schedule') {
      await homePageForFreeUserPage.clickViewFullSchedule();
    }
  
});

Then('the user should be redirected to the subscription page', async ({homePageForFreeUserPage}) => {
  // Step: Then the user should be redirected to the subscription page
  // From: features\homePageForFreeUser.feature:62:5
  await homePageForFreeUserPage.verifySuccessRedirectToUpgrade();
});

// EXERCISE SECTION Data tableSTEPS
When('the user clicks on the exercise section', async ({homePageForFreeUserPage}) => {
  // Step: When the user clicks on the exercise section
  // From: features\homePageForFreeUser.feature:67:3
  homePageForFreeUserPage.openExerciseSection();
});


  //exercise details verification
  Then('the title {string} should be visible', async ({homePageForFreeUserPage}, arg) => {
  // Step: Then the title "Today's Exercise Plan" should be visible
  // From: features\homePageForFreeUser.feature:86:5
  await expect(homePageForFreeUserPage.exerciseTitle).toBeVisible();
});

Then('exactly {int} exercises should be listed for the day', async ({homePageForFreeUserPage}, expectedCount) => {
  // Step: Then exactly 2 exercises should be listed for the day
  // From: features\homePageForFreeUser.feature:87:5
  const count = await homePageForFreeUserPage.getExerciseCount();
    expect(count).toBe(expectedCount);
});

Then('the scheduled time should display for each exercise', async ({homePageForFreeUserPage}) => {
  // Step: Then the scheduled time should display for each exercise
  // From: features\homePageForFreeUser.feature:88:5
  await expect(homePageForFreeUserPage.morningTime).toBeVisible();
    await expect(homePageForFreeUserPage.eveningTime).toBeVisible();
});

Then('the morning exercise should be scheduled for {string}', async ({homePageForFreeUserPage}, expectedTime) => {
  // Step: Then the morning exercise should be scheduled for "7 o'clock"
  // From: features\homePageForFreeUser.feature:89:5
  const morningText = await homePageForFreeUserPage.morningTime.textContent();
    expect(morningText).toMatch(/7:00 AM/i);
});

Then('the evening exercise should be scheduled for {string}', async ({homePageForFreeUserPage}, expectedTime) => {
  // Step: Then the evening exercise should be scheduled for "5 o'clock"
  // From: features\homePageForFreeUser.feature:90:5
  const eveningText = await homePageForFreeUserPage.eveningTime.textContent();
    expect(eveningText).toMatch(/5:00 PM/i);
});

Then('a plan title should display for each exercise', async ({homePageForFreeUserPage}) => {
  // Step: Then a plan title should display for each exercise
  // From: features\homePageForFreeUser.feature:91:5
   await expect(homePageForFreeUserPage.morningWalk).toBeVisible();
    await expect(homePageForFreeUserPage.yogaSession).toBeVisible();
});

Then('a {string} clock indicator with {string} should be visible in each exercise plan', async ({homePageForFreeUserPage }, arg, arg1) => {
  // Step: Then a "12-hour" clock indicator with "AM/PM" should be visible in each exercise plan
  // From: features\homePageForFreeUser.feature:92:5
  await homePageForFreeUserPage.verifyTimeFormat();
});

Then('duration should display in minutes format for each exercise item', async ({homePageForFreeUserPage}) => {
  // Step: Then duration should display in minutes format for each exercise item
  // From: features\homePageForFreeUser.feature:94:5
  await expect(homePageForFreeUserPage.lowIntensity).toBeVisible();
    await expect(homePageForFreeUserPage.mediumIntensity).toBeVisible();
  
});

Then('a dot should separate duration and intensity level', async ({homePageForFreeUserPage}) => {
  // Step: Then a dot should separate duration and intensity level
  // From: features\homePageForFreeUser.feature:95:5
  const durationText = await homePageForFreeUserPage.lowIntensity.textContent();
    expect(durationText).toContain('•');
});
Then('intensity level should display in each exercise item', async ({homePageForFreeUserPage}) => {
  // Step: Then intensity level should display in each exercise item
  // From: features\homePageForFreeUser.feature:96:5
   await homePage.verifyExerciseDetails();
});

Then('the {string} button should be visible', async ({homePageForFreeUserPage}, arg) => {
  // Step: Then the "View Full Schedule" button should be visible
  // From: features\homePageForFreeUser.feature:97:5
  if (buttonText === 'View Full Plan') {
      await expect(homePageForFreeUserPage.viewFullPlanButton).toBeVisible();
    } else if (buttonText === 'View Full Schedule') {
      await expect(homePageForFreeUserPage.viewFullScheduleButton).toBeVisible();
    }
});


