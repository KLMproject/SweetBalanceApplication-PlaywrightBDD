import { expect } from '@playwright/test';
export class PremiumUser3{

    constructor(page){
        this.page=page;
   
 this.medication=page.getByRole('button', { name: 'Medication' });
 this.medicationDropdown= page.locator('select').first();
  this.header2= page.locator('h1');
  this.title=page.getByText('Keep track of your');
  this.header3= page.getByRole('heading', { name: 'Your Medications' });
  this.header4=page.getByRole('heading', { name: 'Today\'s Medications' });
  this.header5=page.getByRole('heading', { name: 'No medications added yet' });
  this.addmed=page.getByText('Click the \'Add Medication\'');
  this.addmedbutton=page.getByRole('button', { name: 'Add Medication' });
 
  this.date=page.getByRole('button', { name: 'January 5th,' });
 
  this.medtext=page.getByText('Your MedicationsAdd MedicationToday\'s MedicationsDecember 30th, 2025No');

   this.freqoption= page.getByRole('combobox').first();
  //this.freqoption2 =page.locator('select').nth(1).selectOption('twice');
  //this.freqoption1= page.locator('select').nth(1).selectOption('once');
  //this.medicationDropdown =page.getByRole('combobox').first().selectOption('');
  //this.medicationdropdown1=page.getByRole('combobox').first().selectOption('1');
  //this.medicationdropdown2= page.getByRole('combobox').first().selectOption('2');
  // page.locator('div').filter({ hasText: 'MedicationSelect a' }).nth(4).click();
  // page.getByRole('button').filter({ hasText: /^$/ }).click();

  this.datePicker = page.locator('label:has-text("Date") + button');
   this.takeWithFoodCheckbox = page.getByRole('checkbox', { name: /take with food/i }); 
   this.notesTextArea = page.locator('textarea[placeholder="Additional instructions or notes"]');
   this.addMedicationButton = page.getByRole('button', { name: 'Add Medication' });
 
 
  }
   async clickMedication()
    {

    await this.medication.click();
    }

    async getTitle(){
        return await this.header2.textContent();
    }

    async getSubtext(){
        return await this.title.textContent();
    }
    
    async getHeader3(){
        return await this.header3.textContent();
    }
    async getHeader4(){
        return await this.header4.textContent();
    }

    async getHeader5(){
        return await this.header5.textContent();
    }

    async getAddmed(){
        return await this.addmed.textContent();
    }

    async clickDatePicker()
{
  await this.page.waitForLoadState('networkidle')
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
  await this.page.waitForLoadState('networkidle')
  const today = new Date().getDate().toString(); 
  const todayCell = this.page.getByRole('gridcell', { name: today, exact: true });
  await expect(todayCell).toBeVisible();
  await expect(todayCell).toHaveAttribute('aria-selected', 'true');
}

async checkPrevNext()
{
  await page.waitForLoadState('networkidle')
  const prevmonth=this.page.getByRole('button', { name: 'Go to previous month' } );
   await expect(prevmonth).toBeVisible();
  const nextmonth=this.page.getByRole('button', { name: 'Go to next month' });
   await expect(nextmonth).toBeVisible();
}

async addmedbuttonClick()
{
  await expect(this.addmedbutton).toBeVisible();
}

async closeMedication()
{
  await expect(this.page.getByRole('button', { name:/close/i})).toBeVisible();
}

async clickAddMedication()
{
  await this.addmedbutton.click();

}

async checkElements(element)
{
 //await expect(this.page.getByText(expectedText, { exact: false })).toBeVisible()
 switch (element) 
 { case 'cancelbutton': 
    await expect(this.page.getByRole('button', { name: /cancel/i })).toBeVisible();
     break; 
     case 'modalheading':
         await expect(this.page.getByRole('heading', { name: /add new medication/i })).toBeVisible(); 
         break; 
         
case 'medicationlabel': 
await expect(this.page.getByLabel('Medication')).toBeVisible(); 
break; 
case 'dosagelabel':
     await expect(this.page.getByText('Dosage')).toBeVisible(); 
     break; 
case 'frequencylabel':
     await expect(this.page.getByText('Frequency')).toBeVisible(); 
     break; 
case 'datelabel': 
await expect(this.page.getByText('Date', { exact: true })).toBeVisible(); break; 
case 'takewithfoodlabel':
     await expect(this.page.getByText('Take with food')).toBeVisible(); 
     break; 
     case 'noteslabel': 
     await expect(this.page.getByText('Notes (optional)')).toBeVisible(); 
     break; 
  
      case 'medicationoptions': 
      // const dropdown = this.page.locator('select').first(); 
       //await dropdown.click(); 
      // await dropdown.press('ArrowDown');
       await this.page.locator('select').nth(0).click();
        const values = await this.page.locator('select').nth(0).locator('option').allTextContents();
        expect(values).toContain('Select a medication');
        expect(values).toContain('Metformin (Oral)');
    //  await expect(this.page.getByText('Select a medication')).toBeVisible(); 
      expect(values).toContain('Glipizide (Oral)');
      expect(values).toContain('Januvia (Oral)');
      expect(values).toContain('Jardiance (Oral)');
      expect(values).toContain('Trulicity (Injectable)');
      expect(values).toContain('Insulin Glargine (Injectable)');
      expect(values).toContain('Insulin Lispro (Injectable)');
       expect(values).toContain('Insulin NPH (Injectable)');
       expect(values).toContain('Other (Custom Medication)');
       break; 
             case 'dosageplaceholder': 
             await expect(this.page.getByPlaceholder('e.g., 500mg or 10 units')).toBeVisible();
             break; 
            case 'frequencydropdown':
             await expect(this.page.locator('select').nth(1)).toBeVisible(); 
             break; 
             case 'frequencyoptions': 
             //const freqDropdown = this.page.locator('select').nth(1);
             // await freqDropdown.click(); 
              // click the select 
             // await freqDropdown.press('ArrowDown');
          
            // await expect(this.page.locator('select').nth(1)).toBeVisible(); 
            // await this.page.locator('select').first().click();
            await this.page.locator('select').nth(1).click();
           const options = await this.page.locator('select').nth(1).locator('option').allTextContents();
            expect(options).toContain('Once daily');
             expect(options).toContain('Twice daily'); 
             expect(options).toContain('Three times daily');
              break;
              default: 
              throw new Error(`Unknown element: ${element}`);
             
}



}


async verifyUIElements()
{
await expect(this.datePicker).toBeVisible();
 await expect(this.takeWithFoodCheckbox).toBeVisible();
  await expect(this.notesTextArea).toBeVisible();
   await expect(this.addMedicationButton).toBeVisible();
}

}

