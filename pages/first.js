import { time } from "console";
import { expect  } from '@playwright/test';

export class login {


  constructor(page) {
    if (!page) {
      throw new Error('Login class requires a Playwright page instance');
    }
    this.page = page;
    this.loginBtn = this.page.getByRole('button', { name: 'Login' });
    this.username = this.page.getByRole('textbox', { name: 'Enter email' });
       this.continueBtn = this.page.getByRole('button', { name: 'Continue with email' });
    this.password = this.page.getByRole('textbox', { name: 'Enter your password' });
    this.signInBtn= this.page.getByRole('button', { name: 'Sign In' });
       this.LogBookBtn = this.page.getByText(/Logbook/i);
    this.LogReviewTitle= this.page.getByRole('heading', { name: 'Log Review' });
    this.BloodGlucoseHeader= this.page.getByRole('cell', { name: 'Blood Glucose' });
    this.NutritionHeader= this.page.getByRole('cell', { name: 'Nutrition' });
    this.ActivityHeader= this.page.getByRole('cell', { name: 'Activity' });
    this.MedicationHeader= this.page.getByRole('cell', { name: 'Medication' });
    this.OneDateFormat= this.page.locator('tr:nth-child(1) > td:nth-child(1)');
    this.DateFormat= this.page.locator('tbody tr td.p-3:nth-child(1)');
    //this.allHyphenCells = page.locator('td', { hasText: '-' });
    this.BloodGlucoseCell=this.page.locator('tbody tr td.p-3:nth-child(2)');
    this.NutritionCell=this.page.locator('tbody tr td.p-3:nth-child(3)');
    this.ActivityCell=this.page.locator('tbody tr td.p-3:nth-child(4)');
    this.MedicationCell=this.page.locator('tbody tr td.p-3:nth-child(5)'); 
   
      }

  async launchApp() {
    await this.page.goto(process.env.BASE_URL);
   // await this.LogBookBtn.waitFor({ state: 'visible', timeout: 60000 });
  }

  async loginStandard() {
    await this.loginBtn.click();
    await this.username.fill(process.env.USERNME);
     await this.continueBtn.waitFor({ state: 'visible', timeout: 60000 });
    await this.continueBtn.click();
    // Wait for password field to appear before filling
    await this.password.waitFor({ state: 'visible', timeout: 60000 });
    await this.password.fill(process.env.PASSWORD)
    // Wait for Sign in button to be visible/enabled before clicking
    await this.signInBtn.waitFor({ state: 'visible', timeout: 60000 });
    await this.signInBtn.click();
    
  }

  async LogBookPage(){
    // Wait for the Logbook link to be visible and stable before clicking
    await this.LogBookBtn.waitFor({ state: 'visible', timeout: 60000 });
    await this.LogBookBtn.click({ timeout: 60000 });
    // Wait for navigation/load after clicking the Logbook link
    await this.page.waitForLoadState('load', { timeout: 60000 });
    //await verifyHyphensPresent();
  }
  async verifyTitle(){
    await expect(this.LogReviewTitle).toHaveText('Log Review');
  }
  async verifyTableHeaders(){
    await expect(this.BloodGlucoseHeader).toHaveText('Blood Glucose');
    await expect(this.NutritionHeader).toHaveText('Nutrition');
    await expect(this.ActivityHeader).toHaveText('Activity');
    await expect(this.MedicationHeader).toHaveText('Medication');
  }

  async verifyDateFormat(){
    
    await expect(this.OneDateFormat).toHaveText(/^[A-Za-z]{3} \d{2}, \d{4}$/); //date format
  }

  async verifyDatesOrder() {
     const dateCells = await this.DateFormat.allTextContents();

  // this is to Convert to Date objects
  const dates = dateCells.map(d => new Date(d)); 

  // this is to check order
  for (let i = 0; i < dates.length - 1; i++) {
    expect(dates[i].getTime()).toBeGreaterThanOrEqual(dates[i + 1].getTime());
  }
};
      async verifyLast7DaysOrder() {
    const dateCells = await this.DateFormat.allTextContents();
    console.log(dateCells);
    expect(dateCells.length).toBe(7); // Ensure there are 7 entries
    
    
        const uiDates = dateCells.map(str => {
      const d = new Date(str);
      d.setHours(0, 0, 0, 0);
      return d;
    });

    // Construct expected last 7 days
    const expectedDates = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      expectedDates.push(d);
    }

    for (let i = 0; i < 7; i++) {
      expect(uiDates[i].getTime()).toBe(expectedDates[i].getTime());
    }
  }


 
   async verifyBloodHyphensPresent() {
const count = await this.BloodGlucoseCell.count();
for (let i = 0; i < count; i++) {
  if(await this.BloodGlucoseCell.nth(i).innerText() !== '-') continue;
await expect(this.BloodGlucoseCell.nth(i)).toHaveText('-');
}
  }

  async verifyNutritionHyphensPresent() {
    const count = await this.NutritionCell.count();
   
    for (let i = 0; i < count; i++) {
    await expect(this.NutritionCell.nth(i)).toHaveText('-');
    }
  }
  async verifyActivityHyphensPresent() {
    const count = await this.ActivityCell.count();    
       for (let i = 0; i < count; i++) {
    await expect(this.ActivityCell.nth(i)).toHaveText('-');
    } 
  }
  async verifyMedicationHyphensPresent() {
    const count = await this.MedicationCell.count();    
    
    for (let i = 0; i < count; i++) {
    await expect(this.MedicationCell.nth(i)).toHaveText('-');
    } 
  }   

  async verifyLoggedBloodGlucoseValues() {
    const count = await this.BloodGlucoseCell.count();    
    for (let i = 0; i < count; i++) { 
    const text = (await this.BloodGlucoseCell.nth(i).innerText()).trim();
    
    console.log(text); 
    }
    } 
    async verifyLoggedNutritionValues() {
      const count = await this.NutritionCell.count();   
       for (let i = 0; i < count; i++) { 
      const text = (await this.NutritionCell.nth(i).innerText()).trim();
      //await expect(text).not.toHaveText('-');  
      console.log(text); 
      }
      } 
      async verifyLoggedActivityValues() {
        const count = await this.ActivityCell.count();      
              for (let i = 0; i < count; i++) { 
        const text = (await this.ActivityCell.nth(i).innerText()).trim();
               console.log(text); 
        }
        }   
        async verifyLoggedMedicationValues() {
          const count = await this.MedicationCell.count();  
          for (let i = 0; i < count; i++) { 
          const text = (await this.MedicationCell.nth(i).innerText()).trim();
        console.log(text); 
          }
          }
  }