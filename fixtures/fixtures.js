import{test as base, createBdd} from 'playwright-bdd'
import { loginpage } from '../pages/Login.js';
// import { subscriptionPage } from '../pages/subscriptionPage';
// import { upgradeToPremiumPage } from '../pages/upgradeToPremiumPage';
import { homePageForFreeUserPage } from '../pages/homePageForFreeUserPage';
// import { premiumUserExerciseModulePage } from '../pages/premiumUserExerciseModulePage';
 

export const test = base.extend({  
  
   loginpage: async ({ page }, use) => {
    await use(new loginpage(page));
  },
  // subscriptionPage: async ({ page }, use) => {
  //   await use(new subscriptionPage(page));
  // },
  // upgradeToPremiumPage: async ({ page }, use) => {
  //   await use(new upgradeToPremiumPage(page));
  // },
  homePageForFreeUserPage: async ({ page }, use) => {
    await use(new homePageForFreeUserPage(page));
  },
  // premiumUserExerciseModulePage: async ({ page }, use) => {
  //   await use(new premiumUserExerciseModulePage(page));
  // }

  });

export const { Given, When, Then } = createBdd(test);