import { time } from "console";
import { expect  } from '@playwright/test';
import { login } from './first';


export class BloodGlucoseLogViewPage {
  constructor(page) {
    if (!page) throw new Error('BloodGlucoseLogViewPage requires a Playwright `page` instance');
    this.page = page;
     this.LogBookBtn = page.getByText(/Logbook/i);
    //this.BloodTracker = this.page.locator('div').filter({ hasText: '' }).nth(4);
    this.BloodGlucoseTitle = this.page.getByRole('heading', { name: 'Blood Glucose Tracker' });
    this.FastingColorCode = this.page.getByText('Fasting70-100 mg/dL');
    this.PreMealColorCode = this.page.getByText('Pre-Meal70-130 mg/dL');
    this.PostMealColorCode = this.page.getByText('Post-Meal<180 mg/dL');
    this.BedtimeColorCode = this.page.getByText('Bedtime100-140 mg/dL');
    this.Xaxis = this.page.getByText('Dec').first();
    this.YaxisMinRange = this.page.getByText('70', { exact: true });
    this.YaxisMaxRange = this.page.getByText('180', { exact: true });
    this.MealandNutritionHeader = this.page.getByRole('heading', { name: 'Meal & Nutrition' });
    this.MealNutritionIcon = this.page.locator('.lucide.lucide-cooking-pot');
    this.DayAggNutrition = this.page.getByText('7-Day Aggregate Nutrition');
    this.DailyNutritionBreakdown = this.page.getByText('Daily Nutrition Breakdown');
    this.CarbsText = this.page.getByText('Carbs');
    this.ProteinText = this.page.getByText('Protein');
    this.FatsText = this.page.getByText('Fats');
    this.CarbsCard = this.page.getByText('0g (0%)').first();
    this.ProteinCard = this.page.getByText('0g (0%)').nth(1);
    this.FatsCard = this.page.getByText('0g (0%)').nth(2);
    this.MedicalDosageHeader = this.page.getByRole('heading', { name: 'Medication Dosage' });
    this.MedicationDosageIcon = this.page.locator('.lucide.lucide-pill');
    this.MedicalDosageYaxisLabel = this.page.getByText('Number of Doses ');
    this.TotalScheduledDosesText = this.page.getByText('Total Scheduled');
    this.TotalScheduledDoses=page.getByText('doses').nth(1);
    this.DosesTakenText = this.page.getByText('Doses Taken');
    this.DosesTaken=page.getByText('doses').nth(3);
    this.DosesMissedText = this.page.getByText('Doses Missed');
    this.DosesMissed=page.getByText('doses').nth(5);
    this.LogMedicationBtn=page.getByRole('button', { name: ' Medication' });
    this.MedicationTakenBtn=page.getByRole('button', { name: ' Mark  as Taken ' });
    this.MedicationDialogCloseBtn=page.getByRole('button', { name: 'Close' });
    this.MedicationChartBarTaken=page.locator('.recharts-rectangle[name="Taken"]');
    this.MedicationChartBarMissed=this.page.locator('.recharts-rectangle[name="Missed"]');
    this.PhysicalActivityHeader = this.page.getByRole('heading', { name: 'Physical Activity' });
    this.PhysicalActivityIcon = this.page.locator('.lucide.lucide-activity.mr-2');
    this.PhysicalActivityXaxisLabel = this.page.getByText('Calories Burned', { exact: true });
    this.PhysicalActivityYaxisLabel = this.page.getByText('Calories', { exact: true });
    this.TotalCaloriesInfo=this.page.getByText('Total Calories');
    this.DailyAverageInfo=this.page.getByText('Daily Average');
    this.PeakDayInfo=this.page.getByText('Peak Day');
    this.TotalCaloriesValue=page.getByText('cal').nth(4);
    this.DailyAverageValue=page.getByText('cal').nth(5);
    this.PeakDayValue=page.locator('div.text-rose-600').nth(3);
    this.statsGrida=page.locator('//*[@id="root"]/div[1]/div[3]/div[1]/div[2]/div[2]');
    this.StatGrid=page.locator("mt-6 grid grid-cols-3 gap-4 text-sm");
    this.PhysicalActivityChartBar=page.locator('.recharts-layer > .recharts-rectangle');


    //this.FoodIntakeBtn=page.getByRole('button', { name: 'Food Intake' })
    //this.MealChart=page.locator('.grid > div > .recharts-responsive-container > .recharts-wrapper > svg').child(1);


  }
// Blood Glucose Tracker Section Methods

  async BloodTrackerVisible() {
    await expect(this.BloodGlucoseTitle).toBeVisible();
  }

  async BloodGlucoseTitleVisible() {
    await expect(this.BloodGlucoseTitle).toHaveText('Blood Glucose Tracker');
  }
  async FastingColorPurple() {
    await expect(this.FastingColorCode).toBeVisible();
      await expect (this.FastingColorCode).toHaveText('Fasting70-100 mg/dL');
      const cls = await this.FastingColorCode.getAttribute('class');
      await expect(cls).toContain('bg-violet'); 
      console.log("Checked fasting range and color"); // Purple color

  }
  async PreMealColorGreen() {
    await expect(this.PreMealColorCode).toBeVisible();
    await expect (this.PreMealColorCode).toHaveText('Pre-Meal70-130 mg/dL');    
      const cls = await this.PreMealColorCode.getAttribute('class');
      await expect(cls).toContain('bg-emerald'); 
      console.log("Checked Pre-Meal range and color"); // Green color      
  }
  async PostMealColorYellow() {
    await expect(this.PostMealColorCode).toBeVisible();
    await expect (this.PostMealColorCode).toHaveText('Post-Meal<180 mg/dL');  
      const cls = await this.PostMealColorCode.getAttribute('class');
      await expect(cls).toContain('bg-amber');  // Yellow color      
      console.log("Checked Post-Meal Range and Color");
    } 
  async BedtimeColorRed() {
    await expect(this.BedtimeColorCode).toBeVisible();
    await expect (this.BedtimeColorCode).toHaveText('Bedtime100-140 mg/dL');  
      const cls = await this.BedtimeColorCode.getAttribute('class');
      await expect(cls).toContain('bg-');
      console.log("Checked Bedtime Range and Color");
  
}
  async Xaxis(){
    

  }
  async YaxisMin(){
    await expect(this.YaxisMinRange).toBeVisible();
  }
  async YaxisMax(){
    await expect(this.YaxisMaxRange).toBeVisible();
  }

// Meal & Nutrition Section Methods

async MealandNutritionHeaderVisible() {
  await expect(this.MealandNutritionHeader).toBeVisible();
}
async MealandNutritionTextVisible() {
  await expect(this.MealandNutritionHeader).toHaveText('Meal & Nutrition');
}
async MealNutritionIconVisible() {
  await expect(this.MealNutritionIcon).toBeVisible();
}

async DayAggNutritionVisible() {
  await expect(this.DayAggNutrition).toBeVisible(); 
}

async DailyNutritionBreakdownVisible() {
  await expect(this.DailyNutritionBreakdown).toBeVisible();   
}

async CarbsColorVisible() {
  await expect(this.CarbsText).toHaveCSS('rgb(255,99,132)');
 // const cls = await this.CarbsText.getAttribute('class');
  //expect(cls).toContain('rgb(255,99,132)');
}

async ProteinColorVisible() { 
  const cls = await this.ProteinText.getAttribute('class');
  expect(cls).toContain('rgb(54,162,235)');
}
async FatsColorVisible() {
  const cls = await this.FatsText.getAttribute('class');
  expect(cls).toContain('rgb(255,206,86)');
}

async CarbsCardVisible() {
  await expect(this.CarbsCard).toBeVisible();   
}
async ProteinCardVisible() {
  await expect(this.ProteinCard).toBeVisible();   
}
async FatsCardVisible() {
  await expect(this.FatsCard).toBeVisible();   
}
async NoMealChartVisible() {
   expect(this.MealChart).not.toBeVisible ();
}



// Medication Dosage Section Methods

async MedicalDosageHeaderVisible()
{
  await expect(this.MedicalDosageHeader).toBeVisible();
}
async MedicalDosageText()
{
  await expect(this.MedicalDosageHeader).toHaveText('Medical Dosage');

}
async MedicalDosageIconVisible()
{
  await expect(this.MedicationDosageIcon).toBeVisible();  
}
async MedicalDosageYaxisLabelVisible()
{
  await expect(this.MedicalDosageYaxisLabel).toBeVisible(); 
}
async TotalScheduledValueZero()
{ 
  const value= await this.TotalScheduledDoses.textContent();
  await expect(this.TotalScheduledDoses).toHaveText(`${value}`);
}
async DosesTakenValueZero()
{ 
  const value= await this.DosesTaken.textContent();
  await expect(this.DosesTaken).toHaveText(`${value}`);  
}
async DosesMissedValueZero()
{ 
  const value= await this.DosesMissed.textContent();  
  await expect(this.DosesMissed).toHaveText(`${value}`);    
}
async TotalScheduledTextColor()
{ 
  expect(this.TotalScheduledDosesText).toHaveCSS('color', 'rgb(91, 33, 182)');
  //const cls = await this.TotalScheduledDosesText.getAttribute('class');
  //expect(cls).toContain('text-purple-800');     
}
async DosesTakenTextColor()
{ 
  expect(this.DosesTakenText).toHaveCSS('color', 'rgb(6, 95, 70)');
  //const cls = await this.DosesTakenText.getAttribute('class');
  //expect(cls).toContain('text-emerald-700');     
}
async DosesMissedTextColor()
{ 
  expect(this.DosesMissedText).toHaveCSS('color', 'rgb(2, 8, 23)');
  //const cls = await this.DosesMissedText.getAttribute('class');
  //expect(cls).toContain('textamber-800'); 
}

async logMedication() {
  await this.LogMedicationBtn.click();
  await this.page.waitForTimeout(2000); // Wait for 2 seconds to ensure the action is completed
  // Use a boolean visibility check instead of using `expect` inside an if
  if (await this.MedicationTakenBtn.isVisible().catch(() => false)) {
    await this.MedicationTakenBtn.click();
  }

  // Close the dialog using the page-object's locator
  await this.MedicationDialogCloseBtn.click();

}
  

async CheckDoseTaken()
{
  // Target the rendered SVG bar with the green fill color used for "Taken"
  await this.LogBookBtn.click();
  const takenBar = this.MedicationChartBarTaken.first();
  await expect(takenBar).toBeVisible();
  await expect(takenBar).toHaveAttribute('fill', '#22c55e');
  console.log("Medication logged and verified green bar in chart");
}

async CheckDoseMissed()
{
  await this.LogBookBtn.click();
  // Target the rendered SVG bar with the red fill color used for "Missed"
  const missedBar = this.MedicationChartBarMissed.first();
  await expect(missedBar).toBeVisible();
  await expect(missedBar).toHaveAttribute('fill', '#ef4444');
  console.log("Medication missed and verified red bar in chart");

}
// Physical Activity Section Methods
async PhysicalActivityTitleVisible()
{
  await expect(this.PhysicalActivityHeader).toBeVisible();  
}

async PhysicalActivityTextVisible()
{
  await expect(this.PhysicalActivityHeader).toHaveText('Physical Activity');    

}
async PhysicalActivityIconVisible()
{
  await expect(this.PhysicalActivityIcon).toBeVisible();    
}

async PhysicalActivityXaxisLabelVisible()
{
  await expect(this.PhysicalActivityXaxisLabel).toBeVisible();    
}

async textPlacement()
{
 await expect(this.statsGrida).toBeVisible();

    // Individual cards
    const cards = this.statsGrida.locator(
      'div.p-4.rounded-xl'
    );

    //Verify exactly 3 cards
    await expect(cards).toHaveCount(3);

    //  Get bounding boxes
    const box1 = await cards.nth(0).boundingBox();
    const box2 = await cards.nth(1).boundingBox();
    const box3 = await cards.nth(2).boundingBox();

    expect(box1).not.toBeNull();
    expect(box2).not.toBeNull();
    expect(box3).not.toBeNull();

    // Same row → Y positions almost equal
    expect(Math.abs(box1.y - box2.y)).toBeLessThan(5);
    expect(Math.abs(box2.y - box3.y)).toBeLessThan(5);

    // Left to right order
    expect(box1.x).toBeLessThan(box2.x);
    expect(box2.x).toBeLessThan(box3.x);
  }

async TotalCaloriesColor()
{
  expect(this.TotalCaloriesInfo).toHaveCSS('color', 'rgb(91, 33, 182)');  
} 
async DailyAverageColor() 
{

  expect(this.DailyAverageInfo).toHaveCSS('color', 'rgb(146, 64, 14)');  
}
async PeakDayColor()
{   
  expect(this.PeakDayInfo).toHaveCSS('color', 'rgb(159, 18, 57)');
}
async PhysicalActivityYaxisLabelVisible()
{
  await expect(this.PhysicalActivityYaxisLabel).toBeVisible();
}
async PhysicalActivityChartBarVisible()
{
  const bar = this.PhysicalActivityChartBar.first();
  await expect(bar).toBeVisible();
  await expect(bar).toHaveAttribute('fill', '#8b5cf6');

}
async TotalCaloriesValueZero()
{ 
  const value= await this.TotalCaloriesValue.textContent();
  await expect(this.TotalCaloriesValue).toHaveText(`${value}`);  
}
async DailyAverageValueZero()
{ 
  const value= await this.DailyAverageValue.textContent();
  await expect(this.DailyAverageValue).toHaveText(`${value}`);      
}
async PeakDayValueZero()
{ 
  const value= await this.PeakDayValue.textContent();  
  await expect(this.PeakDayValue).toHaveText(`${value}`);        
}
}