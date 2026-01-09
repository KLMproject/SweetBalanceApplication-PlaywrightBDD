

import { expect } from "@playwright/test";
export class subscriptionPage {
  constructor(page) {
    this.page = page;
    this.freeVsPremiumAccountfeaturesHeading = page.getByRole('heading', { name: 'Free vs. Premium Account' });
    this.upgradeToPremiumForCompleteDiabetesHeading = page.getByText('Upgrade to premium for');
    this.featureHeading = page.getByText('Feature', { exact: true });

    this.premiumAccountHeading = page.getByText('Premium Account', { exact: true });

    this.dailyMealPlanFeature = page.getByText('Daily Meal Plan');
    this.weeklyMealPlanFeature = page.getByText('Weekly Meal Plan');
    this.personalizedExerciseplanFeature = page.getByText('Personalized Exercise Plan');
    this.quickReversalPlan = page.getByText('-Day Quick Reversal Plan');
    this.bloodSugarreductionPlan = page.getByText('-Day Blood Sugar Reduction Plan');
    this.glucoseLevelGraph = page.getByText('Glucose Level Graph');
    this.BMICalculation = page.getByText('BMI Calculation');
    this.downloadableMealPlanPdf = page.getByText('Downloadable Meal Plan PDF');
    this.remainders = page.getByText('Reminders (Medication,');
    this.freeAccountHeading = page.getByText('Free Account');
    this.continueFreeBtn = page.getByRole('button', { name: 'Continue Free' });    
    this.upgradeToPremiumButtn = page.locator("//button[normalize-space()='Upgrade to Premium']");
    this.termsAndConditionstext = page.getByText('By purchasing, you agree to')
    
    //navigation buttons
    this.viewFullPlanBtn = page.getByRole('button', { name: 'View Full Plan' });
    this.exerciseBtn=page.getByRole('button', { name: 'Exercise' });
    this.viewFullSchedulebtn =page.getByRole('button', { name: 'View Full Schedule' });
    this.dashboardBtn =page.getByRole('button', { name: 'Dashboard' });
    this.upgradeToPremiumBtn = page.getByRole('button', { name: 'Upgrade to Premium' });
    //column headers
    this.freeAccountHeader= page.getByRole('columnheader', { name: 'Free Account $0 /month' });
    this.premiumAccountHeader= page.getByRole('columnheader', { name: 'Premium Account $9.99 /month' });
  
  }
  async navigateToUpdradePage() {

    await this.upgradeToPremiumButtn.click();
  }
  // async navigateToFreeAccountUserPage() {

  //   await this.page.goto('/free');
  // }

  async verifyFreeVsPremiumAccountfeaturesHeading() {
    await expect(this.freeVsPremiumAccountfeaturesHeading).toBeVisible();
  }
  async verifyDailyMealPlanFeature() {
    await expect(this.dailyMealPlanFeature).toBeVisible();
  }
  async verifyContinueFreeButton() {
    await expect(this.continueFreeBtn).toBeVisible();
  }
  async verifyUpgradeToPremiumButton() {
    await expect(this.upgradeToPremiumBtn).toBeVisible();
  }
  async verifyUpgradeToPremiumForCompleteDiabetesHeading() {
    await expect(this.upgradeToPremiumForCompleteDiabetesHeading).toBeVisible();
  }
  async verifyFreeAccountLabel() {
    await expect(this.freeAccountHeading).toBeVisible();
  }
  async verifyPremiumAccountLabel() {
    await expect(this.premiumAccountHeading).toBeVisible();
  }

  async clickContinueFreeButton() {
    await this.continueFreeBtn.click();
  }
  async clickUpgradeToPremiumButton() {
    await this.upgradeToPremiumBtn.click();
  }
  async verifyNavigatedToHomepage() {
    await expect(this.page).toHaveURL('/free');
  }
  async verifyNavigatedToUpgradePage() {
    await expect(this.page).toHaveURL('/Premium');
  }
  async verifyTermsAndConditionsText() {
    await expect(this.termsAndConditionstext).toBeVisible();
  }

  async clickViewFullPlanButton() {
    await this.viewFullPlanBtn.click();
  }
  async verifyOnUpgradePage() {
    await expect(this.page).toHaveURL('/upgrade');
    //await expect(this.pageTitle).toBeVisible();
  }
  async clickExerciseButton() {
    await this.exerciseBtn.click();
  }
  async clickViewFullScheduleButton() {
    await this.viewFullSchedulebtn.click();
  }
  async clickDashboardButton() {
    await this.dashboardBtn.click();
  }
  async clickUpgradeToPremiumButton() {
    await this.upgradeToPremiumBtn.click();
  }

  

  freeIcon(feature) {
  return this.page.locator(`//td[normalize-space()='${feature}']/following-sibling::td[1]/span`);
}

premiumIcon(feature) {
  return this.page.locator(`//td[normalize-space()='${feature}']/following-sibling::td[2]/span`);
}

async verifyAvailability(feature, availability) {
  var free = this.freeIcon(feature);
  var premium = this.premiumIcon(feature);
  var freeText, premiumText;

  switch (availability) {
    case 'both':
      await expect(free).toBeVisible();
        await expect(premium).toBeVisible();
      await expect(free).toHaveText('✓');
      await expect(premium).toHaveText('✓');
      break;

    case 'premium only':
      await expect(free).toBeVisible();
        await expect(premium).toBeVisible();
      await expect(premium).toHaveText('✓');
      freeText = await free.textContent();
      if (freeText !== '✕' && freeText !== '×') {
        throw new Error(`Expected cross symbol (✗ or ×) in free version but found: "${freeText}"`);
      }
      break;

    case 'free only':
      await expect(free).toBeVisible();
      await expect(premium).toBeVisible();
      await expect(free).toHaveText('✓');
      premiumText = await premium.textContent();
      if (premiumText !== '✕' && premiumText !== '×') {
        throw new Error(`Expected cross symbol (✗ or ×) in premium version but found: "${premiumText}"`);
      }
      break;

    case 'none':
      freeText = await free.textContent();
      premiumText = await premium.textContent();
      
      if (freeText !== '✕' && freeText !== '×') {
        throw new Error(`Expected cross symbol (✗ or ×) in free version but found: "${freeText}"`);
      }
      if (premiumText !== '✕' && premiumText !== '×') {
        throw new Error(`Expected cross symbol (✗ or ×) in premium version but found: "${premiumText}"`);
      }
      break;

    default:
      throw new Error(`Invalid availability: ${availability}`);
  }
}
}