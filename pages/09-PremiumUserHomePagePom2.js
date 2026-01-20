import { expect } from '@playwright/test';
export class Premium2{

    constructor(page){
        this.page=page;
   
  this.mealplan=page.getByRole('button', { name: 'Meal Plan', exact: true });
  this.image = page.getByText('⏰');this.premeal= page.getByRole('heading', { name: '⏰ Pre-Meal' });
  this.lunch=page.getByRole('button', { name: 'Lunch' });
this.dinner=page.getByRole('button', { name: 'Dinner' });
this.snacks= page.getByRole('button', { name: 'Snacks' });
 this.mainmeal=page.getByRole('heading', { name: '🍽️ Main Meal' });
 this.weeklyplan= page.getByRole('button', { name: 'Weekly Plan' });
 this.bloodglucose =page.getByRole('button', { name: 'Blood Glucose' });
this.phyactivity= page.getByRole('button', { name: 'Physical Activity' });
  this.food=page.getByRole('button', { name: 'Food Intake' });
this. med=page.getByRole('button', { name: 'Medication' });
   this.bloodGlucoseDialog = page.getByRole('dialog');
this.dialogHeading = page.getByRole('heading', { name: /Track Glucose/i });
    this.physicalActivityDialog = page.getByRole('dialog');
this.pdialogHeading = page.getByRole('heading', { name: /Physical Activity/i }); 
   this.foodintakeDialog = page.getByRole('dialog');
this.fdialogHeading = page.getByRole('heading', { name: /Food Intake Tracker/i, level: 1 });
this.medicationDialog = page.getByRole('dialog');
this.mdialogHeading = page.getByRole('heading', { name: /Medication/i, level: 1 });
 this.log=page.getByRole('button', { name: 'Log', exact: true });
this.homeTab =page.getByRole('button', { name: /Home/i });
    this.emojiDisplay = page.locator('.emoji-display'); 
    this.moodTextDisplay = page.locator('.mood-text');
     this.hemoji= page.getByText('😄');
     this.logbutton=page.getByRole('button', { name: 'Log Emotional State', exact: true });
};

async checkTitle()
{
    await expect(this.premeal).toBeVisible();
}

async checkTitleLunch()
{
    await expect(this.lunch).toBeVisible();
    const headings = this.page.locator('div.space-y-6 > div > h3');
// Assert the first heading is "Pre-Meal"
  await expect(headings.first()).toHaveText(/Pre-Meal/);
    //const preMealHeading = this.page.locator('h3').first();
    //await expect(preMealHeading).toHaveText(/Pre-Meal/);
// Optionally check the second is "Main Meal"
 // await expect(headings.nth(1)).toHaveText(/Main Meal/);
}

async checkTitleDinner()
{
    await expect(this.dinner).toBeVisible();
    const headings = this.page.locator('div.space-y-6 > div > h3');
      await expect(headings.first()).toHaveText(/Pre-Meal/);
     
}

async checkPremeal()
{
     const preMealEntry = this.page.locator('text=Pre-meal: None');
    await expect(preMealEntry).toBeVisible();
}

async checkWeeklyPlan()
{
    // await expect(this.weeklyplan).toBeVisible();
     await expect(this.page.getByText(/Weekly Plan/i)).toBeVisible();
     await this.page.getByText(/Weekly Plan/i).click();
}

async verifyWeeklyPlanDownload()
{
        const download = await this.page.waitForEvent('download');
   
       const suggestedName = download.suggestedFilename();
       expect(suggestedName).toMatch(/\.pdf$/);
}


async checkBlood()
{
    await this.bloodglucose.click();
}


async verifyDialogOpened() {
    
    await expect(this.bloodGlucoseDialog).toBeVisible();

    
    await expect(this.dialogHeading).toBeVisible();
  }

async checkPhysical()
{
    await this.phyactivity.click();
}
 async verifyPhysicalDialog() {
    // Option 1: check dialog container is visible
    await expect(this.physicalActivityDialog).toBeVisible();

    // Option 2: check heading text inside dialog
    await expect(this.pdialogHeading).toBeVisible();
  }

async checkFood()
{
    await this.food.click();
}
    async verifyFoodDialog() {

            await expect(this.foodintakeDialog).toBeVisible();

    // Option 2: check heading text inside dialog
            await expect(this.fdialogHeading).toBeVisible();
    }


async checkMed()
{
    await this.med.click();
}

  async verifyMedDialog() {

            await expect(this.medicationDialog).toBeVisible();

    // Option 2: check heading text inside dialog
            await expect(this.mdialogHeading).toBeVisible();
    }

    async checkLog()
    {
        await this.log.click();
    }

    async verifyDashboardURL()
    {
        await expect(this.page).toHaveURL(/.*dashboard/);
    }

      async gotoDashboard() {
    await this.page.goto('https://sweet-balance-test-env-3-numpyninjadiabe.replit.app/dashboard');
  }

  async changeMood()
  {
    
    await this.hemoji.click();
  
    await this.logbutton.click();
    await this.page.reload();

  }

  async clickHomeTab() {
    await this.homeTab.click();
  }

  async verifyMoodChanged(expectedMood) {
    await expect(this.page.getByText('😄')).toBeVisible();;
    await expect(this.page.getByText('Mood: Happy')).toBeVisible();
  }



};  
