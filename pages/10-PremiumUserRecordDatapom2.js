import { expect } from '@playwright/test';
export class PremiumUser2{

    constructor(page){
        this.page=page;
   
 
  
  // expect(page.getByRole('button', { name: 'Blood Glucose' })).toBeVisible();
  
 this.foodintake=page.getByRole('button', { name: 'Food Intake' });
  this.header= page.getByRole('heading', { name: 'Food Intake Tracker' });
  this.foodsubtext=page.getByText('Track what you eat to manage');
  this.breakfastbutton= page.getByRole('button', { name: 'Breakfast' });
  this.lunchbutton=page.getByRole('button', { name: 'Lunch' });
  this.dinnerbutton= page.getByRole('button', { name: 'Dinner' });
  this.snackbutton=page.getByRole('button', { name: 'Snack' });
this.fname=page.getByText('Food Name');
  //page.getByRole('textbox', { name: 'Food Name' });
this.servingsize= page.getByText('Serving Size');
this.tracker= page.getByLabel('Food Intake Tracker')
this.calories=page.getByLabel('Calories');
  this.calories2=page.getByRole('spinbutton', { name: 'Calories' });
  this.datefield= page.getByText('Date', { exact: true });
  // page.getByRole('button', { name: 'December 26th,' });
  // page.locator('.space-y-4.rdp-caption_start');
  //page.getByRole('gridcell', { name: '26' });
  // page.getByText('BreakfastLunchDinnerSnackFood');
  this.notes= page.getByRole('textbox', { name: 'Notes' });
  this.notes2=page.getByText('Notes');
  this.savefood= page.getByRole('button', { name: 'Save Food Entry' });
  //page.getByText('Serving Size');
  //this.defaultSelectedTab = page.locator('button.bg-gradient-to-r');
  
  // Food Name input field 
  this.foodNameInput = page.getByLabel(/food name/i); 
  // Serving Size dropdown 
  this.servingSizeDropdown = page.getByLabel(/serving size/i); 
  // Dropdown options
   this.servingSizeOptions = 
   [ 'Small (1/2 cup)', 'Medium (1 cup)', 'Large (2 cups)', 'Custom' ];

   // Calculator icon 
   this.calorieIcon = page.getByTitle('Calculate calories automatically'); 
   // Calorie input field 
   this.calorieInput = page.getByLabel(/calories/i); 
    // Helper text
     this.calorieHelperText = page.locator('.text-sm.text-gray-500').filter({ hasText: 'Enter calories or click the calculator icon for automatic calculation.'});
     this.customServingSizeInput = page.locator('#customServingSize');
     this.calorieHelperText1 = page.locator('.text-sm.text-gray-500').filter({ hasText: 'Calories calculated automatically. You can edit if needed.'});

     this.notesField = page.locator('#notes');
    }

    async clickfoodIntake()
    {
    this.foodintake.click();
    }
    async verifyFoodIntakeForm() 
    { // 1. Title 
    await expect(this.page.locator('h1', { hasText: 'Food Intake Tracker' })).toBeVisible(); 
     // 2. Subtext 
     await expect(this.foodsubtext).toBeVisible();
      // 3. Tabs 
    await expect(this.breakfastbutton).toBeVisible(); 
    await expect(this.lunchbutton).toBeVisible(); 
    await expect(this.dinnerbutton).toBeVisible(); 
    await expect(this.snackbutton).toBeVisible(); 
    // 4. Fields 
     await expect(this.fname).toBeVisible(); 
    await expect(this.servingsize).toBeVisible(); 
    await expect(this.calories).toBeVisible(); 
    await expect(this.datefield).toBeVisible(); 
    await expect(this.notes).toBeVisible(); 
    // 5. Default tab selection 
 const selectedTab = this.page.locator('button.bg-gradient-to-r', { hasText: 'Breakfast' });
  await expect(selectedTab).toBeVisible();

}

async verifyFoodIntakeFields() { 
    // 1. Verify Food Name input field is visible 
    await expect(this.foodNameInput).toBeVisible(); 
    // 2. Verify placeholder text 
    const placeholder = await this.foodNameInput.getAttribute('placeholder');
     expect(placeholder).toBe('e.g., Grilled Chicken Salad');
      // 3. Verify Serving Size dropdown is visible 
      await expect(this.servingSizeDropdown).toBeVisible(); 
      // 4. Verify default value in Serving Size dropdown 
const selectedValue = await this.servingSizeDropdown.inputValue();
 expect(selectedValue).toBe('medium');
const selectedLabel = await this.servingSizeDropdown.locator('option:checked').textContent();
expect(selectedLabel.trim()).toBe('Medium (1 cup)');

      // 5. Verify dropdown options 
   const options = this.servingSizeDropdown.locator('option');
    const expected = [ 'Small (1/2 cup)', 'Medium (1 cup)', 'Large (2 cups)', 'Custom...' ];
     for (let i = 0; i < expected.length; i++) 
        { const text = await options.nth(i).textContent(); 
            expect(text.trim()).toBe(expected[i]); }

}

async verifyCalorieField() 
{ // 1. Verify calculator icon is visible 
await expect(this.calorieIcon).toBeVisible(); 
// 2. Verify calorie input field is visible
 await expect(this.calorieInput).toBeVisible(); 
 // 3. Verify placeholder text 
 const placeholder = await this.calorieInput.getAttribute('placeholder');
  expect(placeholder).toBe('e.g., 250'); 
  // 4. Verify helper text 
  await expect(this.calorieHelperText).toBeVisible(); 
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

async verifyNotesField() { 
    // 1. Verify Notes input block is visible 
    await expect(this.notes).toBeVisible();
  // 2. Verify placeholder text 
  const placeholder = await this.notes.getAttribute('placeholder');
   expect(placeholder).toBe('Add any additional information...'); // adjust to your actual placeholder }

}

async saveFoodEntryButton()
{
    const saveButton = this.page.getByRole('button', { name: 'Save Food Entry' });
    await expect(saveButton).toBeVisible(); 

}

async enterValidData()
{
    await this.foodNameInput.fill('Chicken gravy');
    await this.servingSizeDropdown.selectOption('large');
    await this.calorieInput.fill('300');
     await this.page.getByRole('button', { name: /January/i }).click();
     await this.page.getByRole('gridcell', { name: '15' }).click();
    await this.notes.fill('Lunch before meeting.');
    await this.savefood.click();
    await expect(this.page.getByText('Food Entry is recorded')).toBeVisible();
}

async enterInValidData()
{
    await this.foodNameInput.fill('777');
    await this.servingSizeDropdown.selectOption('large');
    await this.calorieInput.fill('500');
     await this.page.getByRole('button', { name: /January/i }).click();
     await this.page.getByRole('gridcell', { name: '15' }).click();
    await this.notes.fill('dinner committee meeting.');
    await this.savefood.click();
  const errorToast = this.page.getByText(/failed/i); 
  await expect(errorToast).toBeAttached();
}

async verifyCustomFieldVisibility() { 
// 1. Before selecting "Custom", the field should be hidden 
await expect(this.customServingSizeInput).toBeHidden(); 
// 2. Select "Custom" from dropdown await 
this.servingSizeDropdown.selectOption('custom'); 
// 3. Now the custom field should be visible 
await expect(this.customServingSizeInput).toBeVisible();
 }

 async enterInvalidFoodName() {
    await this.foodNameInput.fill('@@@###');
 }

 async verifyInvalidFoodNameError() {
    const errorMessage = this.page.getByText('Please enter a valid food name.');
    await expect(errorMessage).toBeVisible();
 }

 async verifyAutomaticCalorieCalculation() { 
    await this.foodNameInput.fill('vegsalad')
    // 1. Select a serving size that triggers auto-calculation 
    await this.servingSizeDropdown.selectOption('medium'); 
    // 2. Verify calorie field auto-calculates (not empty) 
    await expect(this.calorieInput).not.toHaveValue("");
    const initialValue = await this.calorieInput.inputValue();
    // expect(initialValue).not.toBe(''); 
     // 3. Verify helper text appears 
     await expect(this.calorieHelperText1).toBeVisible(); 
    
     // 4. Change serving size to trigger new calculation
      await this.servingSizeDropdown.selectOption('large');
       // 5. Verify calorie value updates 
       await expect(this.calorieInput).not.toHaveValue("100");
       const updatedValue = await this.calorieInput.inputValue(); 
       expect(updatedValue).not.toBe(initialValue); 
    }

    async verifyEditCalorieField()
    {
       
        await this.foodNameInput.fill('fishsalad');
        await this.servingSizeDropdown.selectOption('medium');
        await expect(this.calorieInput).not.toHaveValue("");
         await this.calorieInput.fill('450');
          await expect(this.calorieInput).toHaveValue("450")
    }

    async verifyNullValueValidation()
        {
          await this.servingSizeDropdown.selectOption('large');
           await this.calorieInput.fill('300');  
            await this.savefood.click();
             //const errorMessage = this.page.getByText('Please fill out this field.');
    //await expect(errorMessage).toBeVisible();
   await expect(this.page.locator('#foodName')).toHaveAttribute('required', '');

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
  //const todayCell = this.page.getByRole('gridcell', { name: today });
   const todayCell= await this.page.getByRole('gridcell', { name: today, exact: true });

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

async selectPreviousDate() { 
    // 1. Open the date picker 
    
    await this.page.getByRole('button', { name: /January/i }).click();
    // 2. Calculate yesterday 
    const today = new Date(); 
    const yesterday = new Date(today); 
    yesterday.setDate(today.getDate() - 1); 
    const day = yesterday.getDate().toString(); 
    // 3. Click the day in the calendar
     await this.page.getByRole('gridcell', { name: day, exact: true }).click(); 
     // Store for verification
      this.selectedDate = yesterday.toISOString().split('T')[0];
     } 
      async verifySelectedDate() 
      { 
        //await expect(this.page.getByRole('button', { name: /december/i })).toHaveValue(this.selectedDate);
        const expectedDateText = 'January 11th, 2026';
        await expect(this.page.getByRole('button', { name: /January/i })) .toHaveText(new RegExp(expectedDateText, 'i'));

     }
async enterMoreThan250WordsInNotes() 
{ 
    await this.foodNameInput.fill('veg');
    await this.servingSizeDropdown.selectOption('medium');
    const longText = Array(260).fill('word').join(' ');
     await this.notesField.fill(longText);
     } 
     async clickSave() 
     { 
        await this.savefood.click();
     } 
     async verifyNotesErrorMessage() 
     { 
        await expect(this.page.getByText(/250/i)).toBeVisible();
     }
     }
   

