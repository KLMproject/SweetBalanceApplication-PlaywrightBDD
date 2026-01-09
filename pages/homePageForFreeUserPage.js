

import { expect } from "@playwright/test";
export class homePageForFreeUserPage {
  constructor(page) {
    this.page = page;
    this.navButtons = page.getByRole('button');
    this.navButtonByName = (name) => page.getByRole('button', { name });
    this.homeBtn = page.getByRole('button', { name: 'Home' });
    this.dashBoardBtn = page.getByRole('button', { name: 'Dashboard' });
    this.educationBtn = page.getByRole('button', { name: 'Education' });
    this.mealPlanButton = page.getByRole('button', { name: 'Today\'s Meal Plan' });
    this.todaysMealPlanBtn = page.getByRole('button', { name: 'Today\'s Meal Plan' });
        this.nutritionInsights = page.getByText('Nutrition Insights');
    this.nutritionBars = page.locator('.h-2.rounded-full.bg-green-500');
    this.preBreakfast = page.getByText('Pre-Breakfast');
    this.carbsValue = page.getByText('Carbs: 30g/80g');
    this.proteinValue = page.getByText('Protein: 15g/60g');
    this.fatValue = page.getByText('Fat: 10g/43g');
    this.freshFruitSalad = page.getByRole('heading', { name: 'Fresh fruit salad' });
    this.mealPlanTab = page.getByRole('button', { name: 'Meal Plan', exact: true });
    this.breakfastButton = page.getByRole('button', { name: 'Breakfast' });
    this.lunchButton = page.getByRole('button', { name: 'Lunch' });
    this.dinnerButton = page.getByRole('button', { name: 'Dinner' });
    this.snacksButton = page.getByRole('button', { name: 'Snacks' });
    this.timeIndicator = page.getByText(':30 PM');
    this.dotSeparator = page.getByText('•');
    this.snackTime = page.getByText(':00 PM');
    this.preSnack = page.getByText('Pre-Snack');
    this.viewFullPlanButton = page.getByRole('button', { name: 'View Full Plan' });
    this.exerciseButton = page.getByRole('button', { name: 'Exercise' });
    this.exerciseTitle = page.getByRole('heading', { name: 'Today\'s Exercise Plan' });
    this.morningWalk = page.getByText('Morning Walk');
    this.yogaSession = page.getByText('Yoga Session');
    this.lowIntensity = page.getByText('mins • Low intensity');
    this.mediumIntensity = page.getByText('mins • Medium intensity');
    this.morningTime = page.getByText(':00 AM');
    this.eveningTime = page.getByText(':00 PM');
    this.viewFullScheduleButton = page.getByRole('button', { name: 'View Full Schedule' });
  }
  async clickHomeBtn() {
    await this.homeBtn.click();
  }
   // Navigation Methods
  async getNavigationItemsOrder() {
    const navButtons = await this.navButtons.all();
    const navTexts = [];
    
    for (const button of navButtons) {
      const text = await button.textContent();
      // Filter only navigation items
      if (['Home', 'Dashboard', 'Education'].some(item => text.includes(item))) {
        navTexts.push(text.trim());
      }
    }
    
    return navTexts;
  }

  async verifyNavigationOrder(expectedItems) {
    const actualItems = await this.getNavigationItemsOrder();
    
    for (let i = 0; i < expectedItems.length; i++) {
      expect(actualItems[i]).toContain(expectedItems[i]);
    }
    return true;
  }

  async clickNavigationItem(itemName) {
    await this.navButtonByName(itemName).click();
    await this.page.waitForTimeout(300);
  }

  // Meal Plan Methods
  async openMealPlan() {
    await this.mealPlanTab.click();
    await this.page.waitForTimeout(500);
  }

  async toggleMealPlan() {
    await this.mealPlanButton.click();
    await this.page.waitForTimeout(500);
  }

  async clickMealType(mealType) {
    const buttonMap = {
      'Breakfast': this.breakfastButton,
      'Lunch': this.lunchButton,
      'Dinner': this.dinnerButton,
      'Snacks': this.snacksButton
    };
    
    if (buttonMap[mealType]) {
      await buttonMap[mealType].click();
      await this.page.waitForTimeout(300);
    }
  }

  async verifyNutritionInsightsForAllMeals() {
    const mealTypes = ['breakfast', 'lunch', 'dinner', 'snacks'];
    
    for (const mealType of mealTypes) {
      await this.clickMealType(mealType);
      
      // Check if Nutrition Insights is visible
      const isVisible = await this.nutritionInsights.isVisible();
      
      if (!isVisible) {
        throw new Error(`Nutrition Insights not visible for ${mealType}`);
      }
    }
    
    return true;
  }

  async getNutritionBarsCount() {
    return await this.nutritionBars.count();
  }

  async verifyNutritionValuesVisible() {
    await expect(this.carbsValue).toBeVisible();
    await expect(this.proteinValue).toBeVisible();
    await expect(this.fatValue).toBeVisible();
    return true;
  }

  async verifyPreMealTitle() {
    await expect(this.preBreakfast).toBeVisible();
    await expect(this.freshFruitSalad).toBeVisible();
    return true;
  }

  async verifyIntakeTimes() {
    await expect(this.timeIndicator).toBeVisible();
    await expect(this.snackTime).toBeVisible();
    return true;
  }

  async verifyDotSeparator() {
    await expect(this.dotSeparator).toBeVisible();
    const containerText = await this.dotSeparator.locator('..').textContent();
    expect(containerText).toMatch(/\d{1,2}:\d{2}\s*(AM|PM).*•.*cal/i);
    return true;
  }

  async clickViewFullPlan() {
    await this.viewFullPlanButton.click();
    await this.page.waitForTimeout(1000);
  }

  // Exercise Methods
  async openExerciseSection() {
    await this.exerciseButton.click();
    await this.page.waitForTimeout(1000);
  }

  async getExerciseCount() {
    const exerciseItems = this.page.locator('div').filter({ hasText: /Morning Walk|Yoga Session/ });
    return await exerciseItems.count();
  }

  async verifyExerciseDetails() {
    await expect(this.exerciseTitle).toBeVisible();
    await expect(this.morningWalk).toBeVisible();
    await expect(this.yogaSession).toBeVisible();
    await expect(this.lowIntensity).toBeVisible();
    await expect(this.mediumIntensity).toBeVisible();
    await expect(this.morningTime).toBeVisible();
    await expect(this.eveningTime).toBeVisible();
    return true;
  }

  async verifyTimeFormat() {
    const morningText = await this.morningTime.textContent();
    const eveningText = await this.eveningTime.textContent();
    
    expect(morningText).toMatch(/AM/i);
    expect(eveningText).toMatch(/PM/i);
    return true;
  }

  async clickViewFullSchedule() {
    await this.viewFullScheduleButton.click();
    await this.page.waitForTimeout(1000);
  }

  // Snack Methods
  async openSnackSection() {
    await this.snacksButton.click();
    await this.page.waitForTimeout(500);
  }

  async verifySnackTime() {
    const snackText = await this.snackTime.textContent();
    expect(snackText).toContain('PM');
    return true;
  }

  async verifyPreSnack() {
    await expect(this.preSnack).toBeVisible();
    return true;
  }
  async verifySuccessRedirectToUpgrade() {
    await expect(this.page).toHaveURL('/upgrade');
  }

  
}