import { expect } from '@playwright/test';
export class PremiumUser{

    constructor(page){
        this.page=page;
   
 
   this.glucosebutton= page.getByRole('button', { name: 'Blood Glucose' });
  // expect(page.getByRole('button', { name: 'Blood Glucose' })).toBeVisible();
  
  this.glheading=page.getByRole('heading', { name: 'Track Glucose' });
  this.stext= page.getByText('Keep your health in check');
  this.glevel=page.getByText('Blood Glucose Level');
  this.rtext=page.getByText('Reading Type');
  this.rdate= page.getByText('Date', { exact: true });
 
  this.enterlevel=page.locator('input[name="value"]');
  this.bloodGlucoseLevelField = page.locator('#glucoseLevel');
  
  this.readingTypeLabel = page.getByText('Reading Type');
  this.fastingButton = page.getByRole('button', { name: 'Fasting' });

  this.datefield = page.getByText('Date', { exact: true });
  this.dateButton = page.getByRole('button', { name: /January/i });

  this.ltext= page.getByText('Low');
  this.ntext= page.getByText('Normal');
  this.htext= page.getByText('High');
  this.fasting= page.getByRole('button', { name: 'Fasting' });
  this.premeal=page.getByRole('button', { name: 'Pre-meal' });
  this.postmeal= page.getByRole('button', { name: 'Post-meal' });
  this.bedtime= page.getByRole('button', { name: 'Bedtime' });
  this.dtepick= page.getByRole('button', { name: 'December 18th,' });
  this.recreading= page.getByRole('button', { name: 'Record Reading' });
  this.unitLabel = page.getByText('mg/dL');

  this.lastreading=page.getByText(/Last reading:/);
  this.mgdl=page.getByText('200 mg/dL');
  this.typereading-page.getByText(/\(Fasting\)/);

  this.enterglucose=page.getByPlaceholder('Enter blood glucose level');

  this.prevmonth=page.getByRole('button', { name: 'Go to previous month' });
  this.nextmonth=page.getByRole('button', { name: 'Go to next month' });

  this.physctivitybutton=page.getByRole('button', { name: 'Physical Activity' });
  this.phyac=page.getByRole('heading', { name: 'Physical Activity' });
  this.track=page.getByText('Track your fitness journey');
  this.acty=page.getByText('Activity Type');
  //this.op=page.getByLabel('Activity Type').selectOption('Running');
  //this.op2=page.getByLabel('Activity Type').selectOption('Weight Training');
  this.duration=page.getByText('Duration');
  this.durationbtn=page.getByRole('spinbutton', { name: 'Duration' });
  //this.enterdur=page.locator('select[name="durationUnit"]').selectOption('hours');
  this.seldate= page.getByRole('button', { name: 'December 23rd,' });
  this.prevmonth= page.getByRole('button', { name: 'Go to previous month' });
  this.nextnonth=page.getByRole('button', { name: 'Go to next month' });
  this.inten=page.getByText('Intensity');
  this.intensityButtons = [
     page.getByRole('button', { name: 'Light'}), 
     page.getByRole('button', { name: 'Moderate' }),
      page.getByRole('button', { name: 'Vigorous'}) ];
  this.inttype=page.getByRole('button', { name: 'Light' });
  this.intype2=page.getByRole('button', { name: 'Moderate' });
  this.inttype3= page.getByRole('button', { name: 'Vigorous' });
  this.save=page.getByRole('button', { name: 'Save Activity' });
  this.succmessage= page.getByText('Success!');
  this.succmessage2= page.getByText('Your activity has been saved.');
  this.durationInput = page.locator('#duration'); 
  this.durationDropdown = page.locator('select[name="durationUnit"]');
    }

  async clickGlucoseButton() {
    await this.glucosebutton.click();
  }  

async getTitle() { 
    
    return await this.glheading.textContent(); 

} 
async getSubtext() { 
    return await this.stext.textContent(); 
}

async getLevel() {
  // await this.glevel.isVisible();
   // await expect(this.enterlevel).toBeVisible();
   const label = this.page.getByText('Blood Glucose Level'); 
   await expect(label).toBeVisible(); 
   await expect(label).toHaveText('Blood Glucose Level');



};
async enterLevel(){
    const input = this.page.getByPlaceholder('Enter blood glucose level');
    await expect(input).toBeVisible(); 
    await expect(input).toHaveAttribute('placeholder', 'Enter blood glucose level');
}

async checkUnit()
{
  const unit = this.page.locator('span.text-gray-500', { hasText: 'mg/dL' });
  await expect(unit).toBeVisible(); 
}

async getReadingType() {
    await this.rtext.isVisible();
    await expect(this.fastingButton).toBeVisible();
    await expect(this.premeal).toBeVisible();
    await expect(this.postmeal).toBeVisible();
    await expect(this.bedtime).toBeVisible();
}

async getDate() {
    await this.datefield.isVisible();
    await expect(this.dateButton).toBeVisible();
}

async checkIndicators()
{
    const low = this.page.locator('div.text-red-600', { hasText: 'Low' }); 
    await expect(low).toBeVisible();
      const normal = this.page.locator('div.text-green-600', { hasText: 'Normal' }); 
    await expect(normal).toBeVisible();
      const high = this.page.locator('div.text-amber-600', { hasText: 'High' }); 
    await expect(high).toBeVisible();
}

async checkRed()
{
    const lowc = this.page.locator('div.text-red-600', { hasText: 'Low' }); 
    await expect(lowc).toHaveCSS('color', 'rgb(220, 38, 38)');
}

async checkGreen()
{
     const norm = this.page.locator('div.text-green-600', { hasText: 'Normal' }); 
    await expect(norm).toHaveCSS('color', 'rgb(22, 163, 74)');
}

async checkAmber()
{
   const high = this.page.locator('div.text-amber-600', { hasText: 'High' }); 
   await expect(high).toHaveCSS('color', 'rgb(217, 119, 6)');
}

async checkLastReading()
{
await expect(this.lastreading).toBeVisible(); 
const glucoseValue =this.page.getByText('200 mg/dL'); 
await expect(glucoseValue).toBeVisible();
const readingtype=this.page.getByText('(Fasting)'); 
await expect(readingtype).toBeVisible();
}

async checkRecordReading()
{
  const recordBtn = this.page.getByRole('button', { name: 'Record Reading' });
   await expect(recordBtn).toBeVisible();
}

async enterValue()
{
      const input = this.page.getByPlaceholder('Enter blood glucose level');
    await expect(input).toBeVisible(); 
    await expect(input).toHaveAttribute('placeholder', 'Enter blood glucose level');
    await this.page.getByPlaceholder('Enter blood glucose level').fill('200');
}

async clickRecordReading()

{
  const recordButton = this.page.getByRole('button', { name: 'Record Reading' }); 
  await expect(recordButton).toBeVisible();
  await this.page.getByRole('button', { name: 'Record Reading' }).click();
  
   
}

async checkSuccess()
{
  await expect(this.page.getByText('Reading successfully recorded!')).toBeVisible();
}

async enterInvalidValue()
{
    const input = this.page.getByPlaceholder('Enter blood glucose level');
    await expect(input).toBeVisible(); 
    await expect(input).toHaveAttribute('placeholder', 'Enter blood glucose level');
    await this.page.getByPlaceholder('Enter blood glucose level').fill('-0.9');
}

async checkBlank()
{
  await expect(this.page.getByPlaceholder('Enter blood glucose level')).toHaveValue('');
}

async enterLowValue()
{
      const input = this.page.getByPlaceholder('Enter blood glucose level');
    await expect(input).toBeVisible(); 
    await expect(input).toHaveAttribute('placeholder', 'Enter blood glucose level');
    await this.page.getByPlaceholder('Enter blood glucose level').fill('6');
}

async checkLowHighlight()
{
  const lowHighlight = this.page.getByText('Low');
  await expect(lowHighlight).toBeVisible();
  await expect(lowHighlight).toHaveCSS('color', 'rgb(220, 38, 38)');
  await expect(lowHighlight).toHaveCSS('background-color', 'rgba(254, 226, 226, 0.8)');
  await expect(lowHighlight).toHaveCSS('transform', 'matrix(1.05, 0, 0, 1.05, 0, 0)');
  await expect(lowHighlight).toHaveCSS('box-shadow', /rgba/);
}

async clickDatePicker()
{
  await this.page.getByRole('button', { name: /January/i }).click();
  //await this.page.getByRole('button', { name: /calendar|st|nd|rd|th/i }).click();
}

async checkCalender()
{
  await expect(this.page.getByRole('grid')).toBeVisible();
 // await expect(this.page.getByRole('dialog')).toBeVisible();
 // await expect(this.page.getByText('Mon')).toBeVisible();
}

async checkToday()
{
  const today = new Date().getDate().toString(); 
  const todayCell = this.page.getByRole('gridcell', { name: today, exact: true });
  await expect(todayCell).toBeVisible();
  await expect(todayCell).toHaveAttribute('aria-selected', 'true');
}

async checkPrevNext()
{
  const prevmonth=this.page.getByRole('button', { name: 'Go to previous month' } );
   await expect(prevmonth).toBeVisible();
  const nextmonth=this.page.getByRole('button', { name: 'Go to next month' });
   await expect(nextmonth).toBeVisible();
}

async clickPhyactivity()
{
  await this.physctivitybutton.click();
}

async checkPhyTitle()
{
 // const title = this.page.getByText(titleText, { exact: true });
  await expect(this.page.getByRole('heading', { name: 'Physical Activity' })).toBeVisible();
  // await expect(title).toBeVisible();
}

async checkSubtitle()
{
  //const subtitle=await this.track.textContent();
  await expect(this.track).toBeVisible();
}

async verifyFields(fieldList)
{
for (const field of fieldList) 
  { // Try label first 
  const label = this.page.getByLabel(field, { exact: false }); 
   if (await label.count() > 0) 
    { await expect(label).toBeVisible(); continue; } 

   // Try placeholder const placeholder = this.page.getByPlaceholder(field); 
   const placeholder = this.page.getByPlaceholder(field);
  if (await placeholder.count() > 0) 
    { await expect(placeholder).toBeVisible(); continue; } 
   
   const button = this.page.getByRole('button', { name: new RegExp(field, 'i') }); 
   if (await button.count() > 0) 
    { await expect(button).toBeVisible(); return; }

   await expect(this.page.getByText(field, { exact: true })).toBeVisible();
  }
}

async checkActivitytype()
{
  const label = this.page.locator('label', { hasText: 'Activity Type' });
   if (await label.count() > 0) 
    { await expect(label).toBeVisible(); 
      return;
}
}
 async checkDropdown()
 {
  const select = this.page.locator('select', { hasText: /activity type/i });
 if (await select.count() > 0) 
  { await expect(select).toBeVisible(); return; }
 }

 async verifyActivityTypeOptions()
 {
  await this.page.locator('#activityType').click();
  const options = await this.page.locator('#activityType option').allTextContents();
   expect(options).toContain('Walking'); 
   expect(options).toContain('Running'); 
   expect(options).toContain('Cycling');
    expect(options).toContain('Weight Training');
     expect(options).toContain('Yoga'); 
     expect(options).toContain('HIIT'); 
     expect(options).toContain('Other');
 }

async verifyDurationField() { // 1. Verify input field is visible 
 await expect(this.durationInput).toBeVisible(); 
// 2. Verify placeholder text 
 const placeholder = await this.durationInput.getAttribute('placeholder'); 
expect(placeholder).toBe('30'); 
// 3. Verify dropdown is visible 
await expect(this.durationDropdown).toBeVisible(); 
await this.durationDropdown.click();
// 4. Verify dropdown options 
const expectedOptions = ['minutes', 'hours']; 
const actualOptions = await this.durationDropdown.locator('option').allTextContents(); 
for (const option of expectedOptions) 
  { expect(actualOptions).toContain(option); } 
}

async checkPhysDate()
{
  await expect(this.page.getByRole('button', { name: /jan/i })).toBeVisible();
 // await this.page.getByRole('button', { name: /december/i }).click();
}

async checkIntensity()
{

  await expect(this.inten).toBeVisible();


}

async checkIntensityOptions()
{

  for (const btn of this.intensityButtons) 
  { await expect(btn).toBeVisible(); }
}

async checkSaveButton()
{
  await expect(this.save).toBeVisible();

}

async verifySave()
{
  await this.durationInput.fill('45');
  await this.save.click();
}

async verifySuccessMessage()
{
  await expect(this.succmessage).toBeVisible();
  await expect(this.succmessage2).toBeVisible();
}

async verifyInvalidValue()
{
  await this.durationInput.fill('-0.09');
}

  async verifyBlank()
  {
    const value = await this.durationInput.inputValue();
    expect (value).toBe('');
  }
  
}


