import { time } from "console";
import { expect  } from '@playwright/test';


export class Dashboard {
  constructor(page) {

    this.page=page;


   this.DashboardPage=this.page.getByRole('button', { name: 'Dashboard' });
   //expect(page.getByText('👑 Premium Activated')).toBeVisible();
   this.PremiumSymbol=this.page.getByText('👑 ');
   this.PremiumText=this.page.getByText('Premium Activated');
 // await expect(page.getByRole('button', { name: 'Manage Premium' })).toBeVisible();
    this.ManagePremiumButton=this.page.getByRole('button', { name: 'Manage Premium' });
  //expect(page.getByText('Start Date:Sun, Jan 04,')).toBeVisible();
  this.StartDate=this.page.getByText('Start Date:Sun, Jan 04,').filter({ hasText: /^Start Date:/ });
  this.EndDate=this.page.getByText('End Date:Sat, Jan 10,').filter({ hasText: /^End Date:/ });
 // page.getByRole('button', { name: 'Manage Premium' }).click();
  //expect(page.getByRole('button', { name: 'Manage Premium' })).toBeVisible();
  //page.getByRole('button', { name: 'Manage Premium' }).click();
  //expect(page.getByRole('button', { name: 'Manage Premium' })).toBeVisible();
  //page.getByRole('button', { name: 'Manage Premium' }).click();
  this.ManagePremiumDialog=this.page.getByRole('dialog', { name: 'Cancel Premium Subscription?' });
  this.ManagePremiumText=this.page.getByText('Cancel Premium Subscription?Are you sure you want to cancel your premium');
  this.KeepPremiumButton=this.page.getByRole('button', { name: 'Keep Premium' });
    this.CancelPremiumButton=this.page.getByRole('button', { name: 'Cancel Premium' });
    this.KeepPremiumDialog=this.page.getByRole('dialog', { name: 'Are you sure you want to keep Premium?' });
    this.WhatYoullLoseText=this.page.getByText('What you\'ll lose:•');
    this.CloseButton=this.page.getByRole('button', { name: 'Close' });
    this.NotificationsButton=this.page.getByLabel('Notifications (F8)').getByRole('button').filter({ hasText: /^$/ });
    this.DialogCloseButton=this.page.getByRole('button', { name: 'Close' }).first();
  //expect(page.getByRole('dialog', { name: 'Wise Decision!' })).toBeVisible();
    this.PremiumSuccessMsg=this.page.getByRole('dialog', { name: 'Wise Decision!' });
    this.PremiumSuccessDialog=this.page.locator('li');
    this.EmotionalText=this.page.getByText('😊 Emotional Wellbeing');
    this.EmotionsText=this.page.getByText('😄😊😐😔😠😰');
    this.MoodText=this.page.getByText('Notes on your mood');
    this.MoodTextBox=this.page.getByRole('textbox', { name: 'Notes on your mood' });
    this.FeelingTxt=this.page.getByText('How are you feeling today?');
    this.energyText=this.page.getByText('Energy Level: ');
    this.energySlider=this.page.getByRole('slider');
    //this.Slider=this.page.getById('energyLevel');
    this.sliderValue=this.page.getByLabel('energyLevel').locator('input');
    this.energyMove=this.page.locator('.relative.h-2.w-full.grow');
    this.energyLowText=this.page.getByText('Low', { exact: true });
    this.energyHighText=this.page.getByText('High', { exact: true });
    this.EmotionalButton=this.page.getByRole('button', { name: 'Log Emotional State' });
    this.EmotionalDialog=this.page.getByRole('status');
    this.CancelPremiumDialog=this.page.getByRole('status').filter({hasText:/ Subscription Cancelled /})
//premiumchecks
    this.WeeklyChecks=this.page.getByText('/^[0-9]/', { exact: true })
    this.WeeklyProgress=this.page.getByRole('progressbar').first()
    this.ExerciseMinutes=this.page.getByText('/150this week')
    this.ExerciseProgress=this.page.getByRole('progressbar').nth(1);
    this.MedText=this.page.getByText('%');
    this.MedProgress=this.page.getByRole('progressbar').nth(2);
    this.CarbsCheck=this.page.getByText('/28');
    this.SmartText=this.page.getByText('Smart Insights');
    this.SmartDaysText=this.page.getByText('Last 7 days');
    this.AchieveText=this.page.getByText('You\'ve stayed within target');
    this.PatternText=this.page.getByText('Your glucose tends to spike');
    this.SuggestionText=this.page.getByText('Walking for 15 minutes after').filter([{hasText: 'Walking' }]);
    this.SmartInsightsLocator=this.page.locator('div').filter({ hasText: 'Target AchievementYou\'ve' }).nth(5);
  }
    async navigateToDashboard()
     {
        await this.DashboardPage.click();
    }

    async verifyPremiumSymbol()
     {
        await expect(this.PremiumSymbol).toBeVisible();
    }
    async verifyPremiumText()
    {

        await expect(this.PremiumText).toBeVisible();
    }
    async managePremiumVisibility() 
    {
        await expect(this.ManagePremiumButton).toBeVisible();
    }   
    async dialogVisible()
    {
       // await this.ManagePremiumButton.click();
       // if (await expect(this.ManagePremiumButton).click())
        await this.ManagePremiumDialog.waitFor();
        await expect(this.ManagePremiumDialog).toBeVisible();
    }
    async startDateVisibility()
    {
        await expect(this.StartDate).toBeVisible(); 
        const dateRegex = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(0[1-9]|[12][0-9]|3[01]),\s\d{4}$/;
        await expect(this.StartDate).toHaveText(new RegExp(`^Start Date:${dateRegex.source.slice(1, -1)}$`));
    }
    async endDateVisibility()
    {
        await expect(this.EndDate).toBeVisible();
        const dateRegex = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(0[1-9]|[12][0-9]|3[01]),\s\d{4}$/;
        await expect(this.EndDate).toHaveText(new RegExp(`^End Date:${dateRegex.source.slice(1, -1)}$`));
        console.log("End Date is visible with correct format");
    }

   //# #Feature: Emotional Wellbeing validations on Premium dashboard

    async EmotionalTextVisibility()
    {
      await expect(this.EmotionalText).toBeVisible(); 

    }

    async verifyFeelingsText()
    {
      await expect(this.FeelingTxt).toBeVisible(); 

    } 
    async verifyemotionsText()
    {
      await expect(this.EmotionsText).toBeVisible();  
    }

async verifymoodText()
    {
      await expect(this.MoodText).toBeVisible();  
    }
    async verifyMoodTextBox()
    {
      await expect(this.MoodTextBox).toBeVisible();  
      await expect(this.MoodTextBox).toHaveText('What\'s affecting your mood today?');
    }

    async moodFillVerify(text)
    {

      await expect(this.MoodTextBox).toHaveValue(`${text}`);
    }

    async enegrysliderVisibility()
    {
      await expect(this.energySlider).toBeVisible();  
     
    }

    async moveEnergySlider()
    {
      const box = await this.energyMove.boundingBox();  
      if (box) {
        const startX = box.x + box.width / 2;
        const startY = box.y + box.height / 2;
        const endX = box.x + box.width - 1; 
        await this.page.mouse.move(startX, startY);
        await this.page.mouse.down();
        await this.page.mouse.move(endX, startY, { steps: 10 });
        await this.page.mouse.up();
      }
    }
      async verifyEnergySliderValue()
      {
        const slider = this.energySlider
    const valueText = this.sliderValue

// Show value on load
      valueText.textContent = slider.value;

// Update value when slider moves
    slider.addEventListener('input', () => {
   valueText.textContent = slider.value;
});
        //const sliderValue = await this.energyMove.inputValue(); 
        //console.log(`Slider Value: ${sliderValue}`);
        //expect(parseInt(sliderValue)).toBeGreaterThan(50);
      }
      async selectMoodEmoji()
      {

        //const mood = await this.page.EmotionsText.inputValue();
       if (await this.page.getByRole('button', { name: '😄' }).click()){
        await this.EmotionalButton.click();
       }
       else if (await this.page.getByRole('button', { name: '😊' }).click())
       {await this.EmotionalButton.click();}
       else if (await this.page.getByRole('button', { name: '😐' }).click())
       {await this.EmotionalButton.click();}
       else if (await this.page.getByRole('button', { name: '😔' }).click())
       {await this.EmotionalButton.click();}
       else if (await this.page.getByRole('button', { name: '😠' }).click())
       {await this.EmotionalButton.click();}
       else {(await this.page.getByRole('button', { name: '😰' }).click() ) 
        
          
            
       
       // await this.page.getByRole('button', { name: '😊' }).click();
     
    }}
      async clickEmotionalButton()
      {
        await this.EmotionalButton.click();
      }
      async verifyEmotionalDialog()
      {
        await expect(this.EmotionalDialog).toBeVisible();  
      } 
      async closeEmotionalDialog()
      {
        await this.DialogCloseButton.click();
      }

      //Premium DialogValidation

      async PremiumDialogVerify()
      {
        await expect(this.WhatYoullLoseText).toHaveText("What You'll lose");
      }

      async PremiumButtonsVisible()
      {
        await expect(this.KeepPremiumButton).toBeVisible;
        await expect(this.CancelPremiumButton).toBeVisible;
      }

      async KeepPremiumColor()
      {
        const cls = await this.KeepPremiumButton.getAttribute('class');
      await expect(cls).toContain('bg- white');
        await expect(this.KeepPremiumButton).toHaveCSS('rgb(255,99,132)');
      
      }
      async CancelPremiumColor()
      {
        const cls = await this.CancelPremiumButton.getAttribute('class');
      await expect(cls).toContain('bg- red');
        await expect(this.CancelPremiumButton).toHaveCSS('rgb(255,99,132)');
      }

      async KeepPremiumVerify()
      {
        await this.KeepPremiumButton.click();
        await expect(this.KeepPremiumDialog).toBeVisible;
      }

      async CancelPremiumVerify()
      {
        await this.CancelPremiumButton.click();
        await expect(this.CancelPremiumDialog).toBeVisible();
      }
      async CloseButton()
      {
        await this.closeEmotionalDialog.click();
      }
     async PremiumDialog()
    {
      await expect(this.ManagePremiumDialog).toHaveText("Are you sure you want to cancel your premium subscription? You'll continue to have access to premium features until the end of your current billing period.'")
    }

    //Tracking onPRemium Dashboard

    async WeeklyCheckVerify()
    {
      const textRegex=/^(A-Z a-z)$/;
      expect(this.WeeklyChecks).toHaveText('textRegex');
    }
    async ExerciseMinutesVerify()
    {
      expect(this.ExerciseMinutes).toHaveText('0/150this week');
    }
    async MedTextVerify()
    {
      expect(this.MedText).toHaveText('0%');
    }
    async CarbsCheckVerify()
    {
      expect(this.CarbsCheck).toHaveText('0/28');
    }

    async SmartTextVerify()
    {
      expect(this.SmartText).toBeVisible;
    }
async SmartDaysTextVerify()
{
  await expect(this.SmartDaysText).toBeVisible;
}
async SmartInsightsLocatorVarify()
{

}
async AchieveTextVerify()
{
  await expect(this.AchieveText).toHaveText('You\'ve stayed within target');
}
async PatternTextVerify()
{
  await expect(this.PatternText).toHaveText('Your glucose tends to spike');
}
async SuggestionTextVerify()
{
  await expect(this.SuggestionText).toHaveText('Walking *');
}
}
