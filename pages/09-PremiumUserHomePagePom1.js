import { expect } from '@playwright/test';
export class premium{

    constructor(page){
        this.page=page;
 
      this.challengebutton=page.getByRole('button', { name: '🎯 Challenge Yourself Today!' });
     this.emoji= page.getByText('😄');
  this.moodtext= page.getByText('Mood: Happy');
  this.moodbutton=page.getByRole('button', { name: 'Log', exact: true });
    this.recordnewdata=page.getByRole('heading', { name: 'Record New Data' });
  this.bloodglucose=page.getByRole('button', { name: 'Blood Glucose' });
  this.physicalactivity=page.getByRole('button', { name: 'Physical Activity' });
  this.foodintake=page.getByRole('button', { name: 'Food Intake' });
   this.medication=page.getByRole('button', { name: 'Medication' });
this.mealplanexercise= page.locator('div').filter({ hasText: 'Meal PlanExercise' }).nth(5);
  
  
   this.mealplanexercise=page.locator('div').filter({ hasText: 'Meal PlanExercise' });
  this.genderimage=page.getByRole('img', { name: 'Female character illustration' });
};  

async checkItemsOrder()
{
   await this.page.waitForSelector('nav button');
  return await this.page.locator('nav button').allTextContents();
}

async checkChallengeButtonFlashing() {

   // await this.page.waitForSelector('this.challengebutton:has-text("Challenge Yourself Today!")');

    await expect(this.challengebutton).toBeVisible();
    await expect(this.challengebutton).toHaveClass(/animate-pulse/);


}


async checkChallengeButtonSeconds()
{
    await expect(this.challengebutton).toBeVisible();
    const duration = await this.challengebutton.evaluate(el => getComputedStyle(el).animationDuration);
    expect(duration).toBe('0.2s');

 
}
async checkChallengeButton()
{
     await expect(this.challengebutton).toBeVisible();
}

async checkGender(){
    await expect(this.genderimage).toBeVisible();
}

async checkText(textToCheck)
{
  const textLocator = this.page.getByText(textToCheck, { exact: true });
         await this.page.waitForLoadState('networkidle');
        // Assert that the element is visible
        await expect(textLocator).toBeVisible();
}

async checkButtonIsVisible(buttonName) {
        // ⭐ Use getByRole('button') for best practice and accessibility checks
        const buttonLocator = this.page.getByRole('button', { name: buttonName ,exact: true });
       // await this.page.waitForSelector('button:has-text("buttonName")');
        await this.page.waitForLoadState('networkidle');
        // Assert that the located button is visible on the page
        await expect(buttonLocator).toBeVisible();
    }

async checkBloodGlucoseIcon()
  {
    const bloodglucoseicon = this.page.locator('svg.lucide-activity').nth(0);
    await expect(bloodglucoseicon).toBeVisible();

  }
 
 async checkActivity() {

  const activityButton = this.page.getByRole('button', { name: 'Physical Activity', exact: true });
  await expect(activityButton).toBeVisible();

  // Then check its icon
  const icon = activityButton.locator('svg');
  await expect(icon).toBeVisible();
 
}

async checkFoodIntake()
{
    const foodintakeButton = this.page.getByRole('button', { name: 'Food Intake', exact: true });
  await expect(foodintakeButton).toBeVisible();

  // Then check its icon
  const icon = foodintakeButton.locator('svg');
  await expect(icon).toBeVisible();
}

async checkMedication()
{
    const medicationButton = this.page.getByRole('button', { name: 'Medication', exact: true });
  await expect(medicationButton).toBeVisible();

  // Then check its icon
  const icon = medicationButton.locator('svg');
  await expect(icon).toBeVisible();
}
 
}