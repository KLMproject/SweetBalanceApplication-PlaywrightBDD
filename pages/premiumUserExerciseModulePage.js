
import { expect } from '@playwright/test';
export class premiumUserExerciseModulePage {
  constructor(page) {
    this.page = page;
//locators
this.homeBtn= page.getByRole('button', { name: 'Home' });
this.exerciseBtn= page.getByRole('button', { name: 'Exercise' });

this.warmUpBtn= page.getByRole('button', { name: 'Warm Up' });
this.warmUpBtnn= page.locator("//button[normalize-space()='Warm Up']");
 this.warmUpExrBasicStrching= page.getByRole('heading', { name: 'Basic Stretching' });
 this.warmUpExrDescrption= page.getByText('Light stretching exercises');
 this.warmUpExrDurationpage=page.getByText('Duration: 10 minutes');
 this.warmUpExrCalories= page.getByText('Calories:');
 this.warmUpexrIntensity= page.getByText('Intensity: Low');

 this.mainWorkoutBtn= page.getByRole('button', { name: 'Main Workout' });
this.mainWorkoutExrwalking= page.getByRole('heading', { name: 'Walking' });
 this.mainWorkoutExrdescription= page.getByText('Brisk walking at comfortable');
 this.mainWorkoutExrDuration= page.getByText('Duration: 20 minutes');
 this.mainWorkoutExrCalories= page.getByText('Calories:');
 this.mainWorkoutExrIntensity= page.getByText('Intensity: Low');

 this.coolDownBtn= page.getByRole('button', { name: 'Cool Down' });
 this.coolDownExrLightWalkingAndStretching= page.getByRole('heading', { name: 'Light Walking and Stretching' });
 this.coolDownExrDescription= page.getByText('Gradual cooldown with walking');
 this.coolDownExrDuration= page.getByText('Duration: 10 minutes');
 this.coolDownExrCalories= page.getByText('Calories:');
 this.coolDownExrIntensity= page.getByText('Intensity: Low');

this.viewFullScheduleBtn= page.getByRole('button', { name: 'View Full Schedule' });
this.warmupBtnInschedulePage= page.getByRole('heading', { name: 'Warm Up' });
this.WarmUpExrInSchedulePage= page.getByRole('heading', { name: 'Basic Stretching' });
this.descriptionOfWarmUpExrInSchedulePage= page.getByText('Light stretching exercises');
 this.warmUpDurationInSchedulePage= page.getByText('Duration: 10 minutes');
 this.warmUpCaloriesInSchedulePage= page.getByText('Calories: 40');
 this.warmUpIntensityInSchedulePage= page.getByText('Intensity: Low');

this.mainWorkoutInSchedulePage= page.getByRole('heading', { name: 'Main Workout' });
this.mainWorkoutExrwalking= page.getByRole('heading', { name: 'Walking' });
this.descriptionOfmainWorkoutExrInSchedulePage= page.getByText('Brisk walking at comfortable');
this.mainWorkoutDurationInSchedulePage= page.getByText('Duration: 20 minutes');
this.mainWorkoutCaloriesInSchedulePage= page.getByText('Calories: 100');
this.mainWorkoutIntensityInSchedulePage= page.getByText('Intensity: Low');

this.coolDownInSchedulePage= page.getByRole('heading', { name: 'Cool Down' });
this.coolDownExrInSchedulePage= page.getByRole('heading', { name: 'Light Walking and Stretching' });
this.descriptionOfCoolDownExrInSchedulePage= page.getByText('Gradual cooldown with walking');
this.coolDownDurationInSchedulePage= page.getByText('Duration: 10 minutes');
this.coolDownCaloriesInSchedulePage= page.getByText('Calories: 30');
this.coolDownIntensityInSchedulePage= page.getByText('Intensity: Low');

this.totalDurationInSchedulePage= page.getByText('Total Duration: 40 minutes');
this.totalCaloriesInSchedulePage = page.getByText('Total Calories:');
this.backToHomeBtn= page.getByRole('button', { name: 'Back to Home' })

this.markAsCompltedBtn= page.getByRole('button', { name: 'Mark as Completed' })
 this.unDoBtn= page.getByRole('button', { name: 'Undo' })
 this.completedBtn = page.getByRole('button', { name: 'Completed' });
 this.pageTitle = page.getByRole('heading', { name: 'Today\'s Exercise Schedule' });

  }
  // Navigation Methods
  async navigateToExerciseModule() {
    await this.exerciseBtn.click();
  }
  
  async navigateToHomepage() {
    await this.homeBtn.click();
  }
  
  async navigateToFullSchedule() {
    await this.viewFullScheduleBtn.click();
  }
  
  async navigateBackToHome() {
    await this.backToHomeBtn.click();
  }

  // Section Interaction Methods
  async viewSection(sectionName) {
    switch(sectionName) {
      case 'Warm Up':
        await this.warmUpBtn.click();
        break;
      case 'Main Workout':
        await this.mainWorkoutBtn.click();
        break;
      case 'Cool Down':
        await this.coolDownBtn.click();
        break;
      default:
        throw new Error(`Unknown section: ${sectionName}`);
    }
  }

  // Verification Methods for Main Exercise Page
  async verifyViewFullScheduleButtonIsVisible() {
    await expect(this.viewFullScheduleBtn).toBeVisible();
  }
  
  async verifyAllTabsAreVisible() {
    await expect(this.warmUpBtn).toBeVisible();
    await expect(this.mainWorkoutBtn).toBeVisible();
    await expect(this.coolDownBtn).toBeVisible();
  }
  
  async verifySectionContent(sectionName) {
    switch(sectionName) {
      case 'Warm Up':
        await expect(this.warmUpExrBasicStrching).toBeVisible();
        await expect(this.warmUpExrDescrption).toBeVisible();
        await expect(this.warmUpExrDuration).toBeVisible();
        await expect(this.warmUpExrCalories).toBeVisible();
        await expect(this.warmUpexrIntensity).toBeVisible();
        break;
      case 'Main Workout':
        await expect(this.mainWorkoutExrwalking).toBeVisible();
        await expect(this.mainWorkoutExrdescription).toBeVisible();
        await expect(this.mainWorkoutExrDuration).toBeVisible();
        await expect(this.mainWorkoutExrCalories).toBeVisible();
        await expect(this.mainWorkoutExrIntensity).toBeVisible();
        break;
      case 'Cool Down':
        await expect(this.coolDownExrLightWalkingAndStretching).toBeVisible();
        await expect(this.coolDownExrDescription).toBeVisible();
        await expect(this.coolDownExrDuration).toBeVisible();
        await expect(this.coolDownExrCalories).toBeVisible();
        await expect(this.coolDownExrIntensity).toBeVisible();
        break;
    }
  }
  // Exercise Completion Methods
  async markExerciseAsCompleted() {
    await this.markAsCompltedBtn.click();
  }
  
  async undoExerciseCompletion() {
    await this.unDoBtn.click();
  }
  
  async verifyExerciseCompletion() {
    await expect(this.successDialog).toBeVisible();
    await expect(this.completedBtn).toBeVisible();
    await expect(this.unDoBtn).toBeVisible();
  }
  
  async verifyExerciseNotCompleted() {
    await expect(this.markAsCompltedBtn).toBeVisible();
  }

  // Schedule Page Verification Methods
  async verifySchedulePageNavigation() {
    await expect(this.page).toHaveURL(/.*schedule.*/);
    await expect(this.pageTitle).toBeVisible();
    await expect(this.backToHomeBtn).toBeVisible();
  }
  
  async verifySectionInSchedule(sectionName) {
    switch(sectionName) {
      case 'Warm Up':
        await expect(this.warmupBtnInschedulePage).toBeVisible();
        await expect(this.WarmUpExrInSchedulePage).toBeVisible();
        await expect(this.descriptionOfWarmUpExrInSchedulePage).toBeVisible();
        await expect(this.warmUpDurationInSchedulePage).toBeVisible();
        await expect(this.warmUpCaloriesInSchedulePage).toBeVisible();
        await expect(this.warmUpIntensityInSchedulePage).toBeVisible();
        break;
      case 'Main Workout':
        await expect(this.mainWorkoutInSchedulePage).toBeVisible();
        await expect(this.mainWorkoutExrwalking).toBeVisible();
        await expect(this.descriptionOfmainWorkoutExrInSchedulePage).toBeVisible();
        await expect(this.mainWorkoutDurationInSchedulePage).toBeVisible();
        await expect(this.mainWorkoutCaloriesInSchedulePage).toBeVisible();
        await expect(this.mainWorkoutIntensityInSchedulePage).toBeVisible();
        break;
      case 'Cool Down':
        await expect(this.coolDownInSchedulePage).toBeVisible();
        await expect(this.coolDownExrInSchedulePage).toBeVisible();
        await expect(this.descriptionOfCoolDownExrInSchedulePage).toBeVisible();
        await expect(this.coolDownDurationInSchedulePage).toBeVisible();
        await expect(this.coolDownCaloriesInSchedulePage).toBeVisible();
        await expect(this.coolDownIntensityInSchedulePage).toBeVisible();
        break;
    }
  }
 // Data Validation Methods
  async validateIntensityValues() {
    const intensities = [
      await this.warmUpexrIntensity.textContent(),
      await this.mainWorkoutExrIntensity.textContent(),
      await this.coolDownExrIntensity.textContent()
    ];
    
    const validIntensities = ['Low', 'Medium', 'High', 'low', 'medium', 'high'];
    
    for (const intensity of intensities) {
      const cleanIntensity = intensity?.trim().replace('Intensity: ', '');
      if (!validIntensities.includes(cleanIntensity)) {
        throw new Error(`Invalid intensity value: ${cleanIntensity}`);
      }
    }
    return true;
  }
   async validateTotalDurationCalculation() {
    const warmUpDuration = await this.extractMinutes(this.warmUpDurationInSchedulePage);
    const mainWorkoutDuration = await this.extractMinutes(this.mainWorkoutDurationInSchedulePage);
    const coolDownDuration = await this.extractMinutes(this.coolDownDurationInSchedulePage);
    
    const totalDurationElement = this.totalDurationInSchedulePage;
    const totalDurationText = await totalDurationElement.textContent();
    const totalDuration = this.extractTotalMinutes(totalDurationText);
    
    const sum = warmUpDuration + mainWorkoutDuration + coolDownDuration;
    return totalDuration === sum;
  }
  async validateTotalCaloriesCalculation() {
    const warmUpCalories = await this.extractCalories(this.warmUpCaloriesInSchedulePage);
    const mainWorkoutCalories = await this.extractCalories(this.mainWorkoutCaloriesInSchedulePage);
    const coolDownCalories = await this.extractCalories(this.coolDownCaloriesInSchedulePage);
    
    const totalCaloriesElement = this.totalCaloriesInSchedulePage;
    const totalCaloriesText = await totalCaloriesElement.textContent();
    const totalCalories = this.extractTotalCalories(totalCaloriesText);
    
    const sum = warmUpCalories + mainWorkoutCalories + coolDownCalories;
    return totalCalories === sum;
  }
   // Helper Methods
  async extractMinutes(element) {
    const text = await element.textContent();
    const match = text?.match(/(\d+)\s*minutes?/);
    return match ? parseInt(match[1]) : 0;
  }
  
  extractTotalMinutes(text) {
    const match = text?.match(/(\d+)\s*minutes?/);
    return match ? parseInt(match[1]) : 0;
  }
  
  async extractCalories(element) {
    const text = await element.textContent();
    const match = text?.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }
  
  extractTotalCalories(text) {
    const match = text?.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
  }
  async isOnHomepage() {
   const currentUrl = this.page.url();
  const isHomeUrl = currentUrl || currentUrl.endsWith('/');
  
  // Also check for homepage-specific element
  const isHomeBtnVisible = await this.homeBtn.isVisible().catch(() => false);
  
  // Return boolean, not string
  return isHomeUrl || isHomeBtnVisible;
  }
  
}