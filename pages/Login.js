import { expect } from '@playwright/test';
import logger from '../utils/logger.js';

export class loginpage {
  constructor(page) {
    this.page = page;
    this.loginlink =  page.getByRole('button', { name: ' Login' });
    this.welcomebackheading = page.getByRole('heading', { name: 'Welcome back' });
    this.signintext = page.getByText('Sign in to your account or create a new one',{ exact: false });
    this.closebutton = page.getByRole('button').first();
    this.emailinputfield = page.getByPlaceholder('Enter email');
    this.continuewithemailbutton = page.getByRole('button', { name: 'Continue with email' });
    this.orseparator = page.getByText('OR',{ exact: true });
    this.errormessege = page.getByText('Please enter a valid email address', { exact: true })
    this.passwordinputfield = page.getByPlaceholder('Enter your password');
    this.signinbutton = page.getByRole('button', { name: 'Sign in' });
    this.useremail = page.getByText('subulakshmi.Rajkumar@gmail.com',{ exact: true });
    this.completeprofileheading = page.getByText('Complete your profile',{ exact: true });
    this.profilepasswordinputfield = page.locator('input[name="password"]');
    this.fullnameinputfield = page.getByRole('textbox', { name: 'Full Name' });
    this.usernameinputfield = page.locator('input[name="username"]');
    this.checkbox = page.getByRole('checkbox', { name: 'I agree to the Terms & Conditions and Privacy Policy' });
    this.createaccountbutton = page.getByRole('button', { name: 'Create Account' });
    this.bloodreportuploadpageheading = page.getByRole('heading', { name: 'Drop a file, Dodge the boring steps!' });
 //////Onboarding with blood report/////
    this.uploadbloodreportbutton = page.getByText('Upload Blood Report',{ exact: true });
    this.blinkline = page.locator('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2)');
   this.uploadBox = page.locator('div.border-dashed.cursor-pointer');
    this.uploadPDFfile = page.getByText('Drag & drop or click to upload');
    this.uploadfile = page.locator('//input[@type="file"]');
    this.supportsPDFfile = page.getByText('Supports PDF files (max 10MB)');
    this.cancelBtn = page.locator('//button[text()="Cancel"]');
    this.uploadandprogressBtn = page.getByRole('button', { name: 'Upload & Process' });
    this.uploadError = page.getByText('Failed to execute "text" on "Response": body stream already read');
     this.processingBar = page.locator('//*[@id=\'root\']/div[1]/div/div[2]/div[3]/div[1]/span[2]')
     this.OnboardingBtn = page.locator('button', {name:'Continue to Onboarding'});
     this.processingText = page.getByText('Processing...');
     this.uploadError    = page.getByText('Upload failed');
     this.BloodTestResult = page.getByRole('heading', { name: 'Blood Test Results' });
     this.BloodCount = page.getByRole('heading', { name: 'Complete Blood Count' })
     this.MedicalConditions= page.getByRole('heading', { name: 'Medical Conditions' })
     this.AbnormalValue = page.getByRole('heading', { name: 'Abnormal Values' })
     this.Recommendation = page.getByRole('heading', { name: 'Recommendations' })
     this.MC = page.getByRole('heading', { name: 'Medical Conditions' })
     this.Agefield = page.getByPlaceholder('Enter your age');
     this.heightfield = page.getByPlaceholder('Enter height in cm (1-300)');
     this.weightfield = page.getByPlaceholder('Enter weight in kg (1-500)');
     this.genderfield = page.locator('select[name="gender"]');
     this.genderoptionDropdown = page.locator('select[name="gender"]')
   // options
     this.genderoption = page.locator('option')
     this.Step1ContinueBtn = page.locator('button', {name:'Continue'});
     this.invalidAgeMessage = page.getByText('Invalid Age', { exact: true });

     this.stepIndicator = page.getByText('Step 1 of 5', { exact: true });
     this.step2Indicator = page.getByText('Step 2 of 5', { exact: true });
     this.step3Indicator = page.getByText('Step 3 of 5', { exact: true });
     this.step4Indicator = page.getByText('Step 4 of 5', { exact: true });
     this.step5Indicator = page.getByText('Step 5 of 5', { exact: true });

     this.StepsprogressBar = page.locator('//*[@id="root"]/div[1]/div/div/div[1]');

     this.step2paceHeading = page.getByRole('heading', {name: 'Pick your pace: chill stroll or marathon magic'});
     this.step3Heading = page.getByRole('heading', {name: 'Your taste buds—what team are they on?'});
     this.step4Heading = page.getByRole('heading', { name: 'What\'s your go-to food passport?' })
     this.step5Heading = page.getByRole('heading', { name: 'Allergic to any foods?'})


     this.step2subtitile = page.getByText('Select your preferred exercise intensity level')
     this.step3subtitile = page.getByText('Select your dietary preference')
     this.step4subtitile = page.getByText("To create a meal plan you'll enjoy, please select your preferred cuisines!");
     this.step5subtitile = page.getByText('Select all that apply');
     
     this.navigationBtn = page.locator('svg.lucide lucide-arrow-right w-5 h-5 text-gray-400');
     this.backBtn = page.getByRole('button',{ name : ' Back'});

     this.easytext = page.getByText('Easy 🦋', { exact: true });
     this.mediumtext = page.getByText('Medium 💪', { exact: true });
     this.hardtext = page.getByText('Hard 🔥', { exact: true });

     this.allIncluctivetext = page.getByText('All-inclusive diet 🍴🍖🍎', { exact: true });
     this.vegetariantext = page.getByText('Vegetarian 🥗🍆🥕', { exact: true });
     this.vegantext = page.getByText('Vegan 🥬🌱🌿', { exact: true });

     this.indiantext = page.getByText('Indian 🍛', { exact: true });
     this.americantext = page.getByText('American 🍔', { exact: true });
     this.continentaltext = page.getByText('Continental 🥖', { exact: true });
     this.asiantext = page.getByText('Asian 🍜', { exact: true });
     this.meditext = page.getByText('Mediterranean 🥙', { exact: true });
     this.middleEasternText = page.getByText('Middle Eastern 🥙', { exact: true });
     this.mexicanText = page.getByText('Mexican 🌮', { exact: true });

     this.glutonText = page.getByText('Gluten 🥖🍞', { exact: true });
     this.eggsText = page.getByText('Eggs 🍳🥚', { exact: true });
     this.soyText = page.getByText('Soy 🫘🥡', { exact: true }); 
      this.nutsText = page.getByText('Nuts 🌰🥜', { exact: true });
      this.dairyText = page.getByText('Dairy 🐄🥛', { exact: true });
      this.shellfishText = page.getByText('Shellfish 🐚🍤', { exact: true });
      this.otherText = page.getByText('Other 🍽️🥴', { exact: true });
      this.noneText = page.getByText('None', { exact: true });

      this.glutenCheckBox = page.locator('//input[@name="foodAllergy" and @value="Gluten"]');
      this.nutsCheckbox = page.locator('//button[@value="Nuts"]');
      this.dairyCheckbox = page.locator('//input[@name="foodAllergy" and @value="Dairy"]');
      this.saveError = page.getByText('Failed to save preferences. Please try again.');
      this.submitBtn = page.getByRole('button', { name: 'submit' });

    /*Onboarding Without BloodReport*/
    this.stepthroughbutton = page.getByRole('button', { name: 'Step Through Onboarding' });
      this.onboard_step1heading = page.getByRole('heading',{ name : 'So, Which sugar rebellion are we dealing with?' })
      this.type2option = page.getByRole('button', { name: 'Type 2, I don\'t know' });
      this.Onboard_stepIndicator = page.getByText('Step 1 of 12', { exact: true });
       this.type2Button = page.locator('button:has-text("Type 2")');
       this.idkButton = page.locator('button:has-text("I don\'t know")');
     
//step 2
     this.onboard_step2heading = page.getByRole('heading',{ name : 'Which fabulous label fits you best?' });
     this.onboard_step2subtext = page.getByText('Choose your gender');
     this.onboard_step2Indicator = page.getByText('Step 2 of 12', { exact: true });
     this.alloptions= page.locator('div.bg-white.rounded-xl.p-4.shadow-md.space-y-2.max-h-80.overflow-y-auto > div');
     this.optionMale = page.getByRole('button', { name: 'Male 👨‍🦱' });
      this.optionFemale = page.getByRole('button', { name: 'Female 👩‍🦰' });
      this.optionOther = page.getByRole('button', { name: 'Other ⚧️' });
      this.onboard_backBtn = page.getByRole('button',{ name : 'Back'});
//step 3
this.onboard_step3heading = page.getByRole('heading',{ name : 'Age: own it, pick your number.' });
this.onboard_step3subtext = page.getByText('Please select your age');
this.onboard_step3Indicator = page.getByText('Step 3 of 12', { exact: true });
this.yearsoption = page.getByRole('button', { name: 'Years' });
this.option= page.getByRole('button', { name: '25 years' });
//step 4
this.onboard_step4heading = page.getByRole('heading',{ name : 'How close are you to the clouds?' });
this.onboard_step4subtext = page.getByText('Please enter your height');
this.onboard_step4Indicator = page.getByText('Step 4 of 12', { exact: true });
this.centimeteroption = page.getByRole('button', { name: 'Centimeters' });
this.inchesoption = page.getByRole('button', { name: 'Feet & Inches' });
this.cmoption = page.getByRole('button', { name: '170  cm' });
//step 5
this.onboard_step5heading = page.getByRole('heading',{ name : 'Allergic to any foods?' });
this.onboard_step5subtext = page.getByText('Select all that apply');
this.onboard_step5Indicator = page.getByText('Step 5 of 12', { exact: true });
this.kilogramoption = page.getByRole('button', { name: 'Kilograms' });
this.poundsoption = page.getByRole('button', { name: 'Pounds' });
this.kgoption = page.getByRole('button', { name: '70 kg',exact: true });

 //step 6
 this.onboard_step3heading = page.getByRole('heading',{ name : 'Your taste buds—what team are they on?' });
 this.onboard_step6subtext = page.getByText('Select your dietary preference');
 this.onboard_step6Indicator = page.getByText('Step 6 of 12', { exact: true });
  this.allIncluctiveoption = page.getByRole('button', { name: 'All-inclusive diet 🍴🍖🍎' });
  this.vegetarianoption = page.getByRole('button', { name: 'Vegetarian 🥗🍆🥕' });

//step7
this.onboard_step7heading = page.getByRole('heading',{ name : 'What\'s your go-to food passport?' });
this.onboard_step7subtext = page.getByText('To create a meal plan you\'ll enjoy, please select your preferred cuisines!');
this.onboard_step7Indicator = page.getByText('Step 7 of 12', { exact: true }); 
this.indianoption = page.getByRole('button', { name: 'Indian 🍛' });

//Step 8
      this.onboard_step8heading = page.getByRole('heading',{ name : 'Allergic to any foods?' });
      this.onboard_step8subtext = page.getByText('Select yesif you have any food allergies');
      this.onboard_step8Indicator = page.getByText('Step 8 of 12', { exact: true });
      this.foodallergyYesoption = page.getByRole('button', { name: 'Yes ✅' });
      this.foodallergyNooption = page.getByRole('button', { name: 'No ❌' });
  //step 9
  this.onboard_step9heading = page.getByRole('heading',{ name : 'Tap foods your body hates' });   
  this.onboard_step9subtext = page.getByText('Select all that apply');
  this.onboard_step9Indicator = page.getByText('Step 9 of 12', { exact: true });
 this.glutenCheckbox = page.locator('//button[@id="gluten"]');
  this.nutsCheckbox = page.locator('//button[@id="nuts"]');
  this.onboard_step9continueBtn = page.getByRole('button', { name: 'Continue' }); 
  //step 10
  this.onboard_step10heading = page.getByRole('heading',{ name : 'Any medical quirks worth mentioning?' });   
  this.onboard_step10subtext = page.getByText('Do you have any other medical conditions?');
  this.onboard_step10Indicator = page.getByText('Step 10 of 12', { exact: true });
  this.bloodpressureoption = page.locator('//button[@id="high-blood-pressure"]');
  this.onboard_step10continueBtn = page.getByRole('button', { name: 'Continue' });
  //step 11
  this.onboard_step11heading = page.getByRole('heading',{ name : 'Pick your pace: chill stroll or marathon magic?' });   
  this.onboard_step11subtext = page.getByText('Select your preferred exercise intensity level');
  this.onboard_step11Indicator = page.getByText('Step 11 of 12', { exact: true });
  this.onboard_step11easyoption = page.getByRole('button', { name: 'Easy 🦋' });
  this.onboard_step11continueBtn = page.getByRole('button', { name: 'Continue' });
  //step 12
  this.onboard_step12heading = page.getByRole('heading',{ name : 'Final Step- What’s your latest HbA1c number?!' });
  this.onboard_step12Indicator = page.getByText('Step 12 of 12', { exact: true });
  this.hbA1cValueoption =  page.getByPlaceholder('Enter your HbA1c value (e.g., 7.0)');
  this.onboard_step12continueBtn = page.getByRole('button', { name: 'Continue' });

  this.onboard_continueBtn= page.getByRole('button', { name: 'Continue' });
  }

  async navigatetoapplicationpage(url) {
    await this.page.goto(url);
  }

  async clickonloginlink() {
    await this.loginlink.click();
  }

  async verifywelcomebackheading() {
    await expect(this.welcomebackheading).toBeVisible();
  }

  async verifysignintext() {
    await expect(this.signintext).toBeVisible();
  }

  async verifyclosebutton() {
    await expect(this.closebutton).toBeVisible();
  }

  async verifyemailinputfield() {
    await expect(this.emailinputfield).toBeVisible();
  }

  async verifyemailplaceholdertext(expectedText) {
    const attr = await this.emailinputfield.getAttribute('placeholder');
  expect(attr.toLowerCase()).toBe(expectedText.toLowerCase());
  }
  async verifycontinuewithemailbutton() {
    await expect(this.continuewithemailbutton).toBeVisible();
  }
  async verifycontinuewithemailbuttonenabled() {
    await expect(this.continuewithemailbutton).toBeEnabled();
  }
  async verifyorseparator() {
    await expect(this.orseparator).toBeVisible();
  }
  async enteremail(email) {
    logger.info('Filling email input with:', email);
    await this.emailinputfield.waitFor({ state: 'visible' });
    await this.emailinputfield.fill(email);
  }
  async clickcontinuewithemailbutton() {
    await this.continuewithemailbutton.click();
  }
  async verifyerrormessage() {
   await this.errormessege.isVisible();
  }
  async verifypasswordfield() {
    await expect(this.passwordinputfield).toBeVisible();
  } 
  async verifySigninButton() {
    await expect(this.signinbutton).toBeVisible();
  }
  async clickSigninButton() {
    await this.signinbutton.click();
  }
  async verifyUserEmail() {
    await expect(this.useremail).toBeVisible();
  }
  async verifyPasswordInputField() {
    await expect(this.passwordinputfield).toBeVisible();
  }
  async enterPassword(password) {
    logger.info('Filling password with:', password);
    await this.passwordinputfield.fill(password);
  }
  async verifyCompleteProfileHeading() {
    await expect(this.completeprofileheading).toBeVisible();
  }
  async verifyFullNameInputField() {
    await expect(this.fullnameinputfield).toBeVisible();        
  }
  async enterFullName(fullname) {
    logger.info('Filling full name with:', fullname);
    await this.fullnameinputfield.fill(fullname);
  } 
  async enterUserNameInputField(username) {
    logger.info('Filling username with:', username);
    await this.usernameinputfield.fill(username);
  }
  async enterProfilePasswordInputField(profilepassword) {
    logger.info('Filling profile password with:', profilepassword);
    await this.profilepasswordinputfield.fill(profilepassword);
  }
  async verifyTermsCheckbox() {
    await expect(this.checkbox).toBeVisible();
  }
  async clickTermsCheckbox() {
    await this.checkbox.click();
  } 
  async verifyCreateAccountButtonDisabled() {
    await expect(this.createaccountbutton).toBeDisabled();
  }
  async verifyCreateAccountButtonEnabled() {
    await expect(this.createaccountbutton).toBeEnabled();
  }
  async clickCreateAccountButton(page) {
    await this.createaccountbutton.click();
   await this.page.waitForURL('https://sweet-balance-test-env-3-numpyninjadiabe.replit.app/blood-report-question', { timeout: 15000 });
   logger.info(' User redirected to blood report question page'); 
  
  } 
  async verifyBloodReportUploadPageHeading() {
    await this.bloodreportuploadpageheading.isVisible();
  }
  //////Onboarding with blood report/////
  async clickUploadBloodReportButton() {
    await this.uploadbloodreportbutton.click();
  } 
  async clickStepThroughButton() {
    await this.stepthroughbutton.click();
  } 
  async visibleuploadbox(){
    await this.uploadBox.isVisible();
  }
  async hoverblinkline(){
    await this.blinkline.hover();
  }
  async visibleuploadPDFfile(){
    await expect(this.uploadPDFfile).toBeVisible();
  }
  async seeSupportsPDFOnly(){
    await expect(this.supportsPDFfile).toBeVisible();
  }
  async uploadNonPDF(){
    await this.uploadfile.setInputFiles('./BloodReport/cbc.docx');
    logger.error("Upload Failed");
  }
  async uploadLargeSizePDF(){
    await this.uploadfile.setInputFiles('./BloodReport/sample-BloodReport-12MB.pdf');
    logger.error("Upload Failed")
  }
  async uploadValidPDF(){
    await this.uploadfile.setInputFiles('./BloodReport/samplereport1.pdf');
  }
  async clickCancelBtn(){
    await this.cancelBtn.click();
  }
  async enableUploadAndProgressBtn(){
    await expect(this.uploadandprogressBtn).toBeEnabled();
  }
  async cliclUploadAndProgressBtn(){
    await this.uploadandprogressBtn.click();
  }
  async uploadErrorMsg(expectedError){
   await expect(this.uploadError).toBeVisible({ timeout: 20000 });
    await expect(this.uploadError).toHaveText(expectedError);
  }
   async verifyProcessingBarVisible() {
    await this.processingBar.waitFor({ state: 'visible', timeout: 5000 });
    return await this.processingBar.isVisible();
  }
  async processing(){
    await expect(this.processingText).toBeHidden({ timeout: 20000 });
  }
  async seeOnboardingBtn(){
    await expect(this.uploadError).toBeHidden({ timeout: 20000 });
    await expect(this.OnboardingBtn).toBeVisible();
  }
  async clickOnboardingBtn(){
    await this.OnboardingBtn.click();
  }
  async verifyAllfield(){
    await expect(this.Agefield).toBeVisible();
    await expect(this.heightfield).toBeVisible();
    await expect(this.weightfield).toBeVisible();
  }
  async fillallthefields(age,height,weight){
  await this.Agefield.fill(age)
  await this.heightfield.fill(height)
  await this.weightfield.fill(weight)
}
  async viewgenderfield(){
     await expect(this.genderfield).toBeVisible();
  }
  async seegenderDropdown(){
    await expect(this.genderoptionDropdown).toBeVisible();
  }
  async clickgenderoption(){
    await this.genderoptionDropdown.click();
  }
  async seeGenderoption(){
  await expect(this.genderoption).toHaveText([
  'Select Gender','Male','Female','Prefer Not to Say'],{timeout : 5000});
}
async selectMaleGender(){
  await this.genderoptionDropdown.selectOption('Male');
}
async visibleStep1ConBtn(){
  await expect(this.Step1ContinueBtn).toBeVisible();
}
async enableStep1ConBtn(){
  await expect(this.Step1ContinueBtn).toBeEnabled();
}
async clickStep1ConBtn(){
  await this.Step1ContinueBtn.click();
}
async seeInvalidErrorMsg(){
  await expect(this.invalidAgeMessage).toBeVisible();
}
async seeStepsProgressbar(){
  await expect(this.StepsprogressBar).toBeVisible();
}
async seeStepIndicator(){
  await expect(this.stepIndicator).toBeVisible();
}
async seeStep2Indicator(){
  await expect(this.step2Indicator).toBeVisible();
}
async seeStep3Indicator(){
  await expect(this.step3Indicator).toBeVisible();
}
async seeStep4Indicator(){
  await expect(this.step4Indicator).toBeVisible();
}
async seeStep5Indicator(){
  await expect(this.step5Indicator).toBeVisible();
}
async verifyStep2PaceHeading(){
  await expect(this.step2paceHeading).toBeVisible();
}
async verifyStep3Heading(){
  await expect(this.step3Heading).toBeVisible();
}
async seeStep3Heading(){
  await this.step3Heading.isVisible();
}
async seeStep4Heading(){
  await this.step4Heading.isVisible();
}
async verifyStep4Heading(){
  await expect(this.step4Heading).toBeVisible();
}
async seeStep5Heading(){
  await this.step5Heading.isVisible();
} 
async verifyStep5Heading(){
  await expect(this.step5Heading).toBeVisible();
}
async viewSubtitile(){
  await this.step2subtitile.isVisible();
}
async verifySubtitile(){
  await expect(this.step2subtitile).toBeVisible();
}
async verifyStep3Subtitile(){
  await expect(this.step3subtitile).toBeVisible();
}
async verifyStep4Subtitile(){
  await expect(this.step4subtitile).toBeVisible();
}
async verifyStep5Subtitile(){
  await expect(this.step5subtitile).toBeVisible();
}
async viewNavigationBtn(){
  await this.navigationBtn.isVisible();
}
async clickNavigationBtn(){
  await this.navigationBtn.click();
}
async verifyBackBtn(){
  await expect(this.backBtn).toBeVisible();
}
async clickBackBtn(){
  await this.backBtn.click();
}
async verifyIntensityLevels(){
  await expect(this.easytext).toBeVisible();
  await expect(this.mediumtext).toBeVisible();
  await expect(this.hardtext).toBeVisible();
}
async clickEasy(){
  await this.easytext.click();
}
async verifyStep3IntensityLevels(){
  await expect(this.allIncluctivetext).toBeVisible();
  await expect(this.vegetariantext).toBeVisible();
  await expect(this.vegantext).toBeVisible();
}
async verifyStep4IntensityLevels(){
  await expect(this.indiantext).toBeVisible();
  await expect(this.americantext).toBeVisible();
  await expect(this.continentaltext).toBeVisible();
  await expect(this.asiantext).toBeVisible();
  await expect(this.meditext).toBeVisible();
  await expect(this.middleEasternText).toBeVisible();
  await expect(this.mexicanText).toBeVisible();
}
async verifyStep5AllergyOptions(){
  await expect(this.glutonText).toBeVisible();
  await expect(this.eggsText).toBeVisible();
  await expect(this.soyText).toBeVisible();
  await expect(this.nutsText).toBeVisible();
  await expect(this.dairyText).toBeVisible();
  await expect(this.shellfishText).toBeVisible();
  await expect(this.otherText).toBeVisible();
  await expect(this.noneText).toBeVisible();
}

async clickVegan(){
  await this.vegantext.click(); 
}
async clickAllInclusive(){
  await this.allIncluctivetext.click();
}
async clickIndian(){  
  await this.indiantext.click();
}
async clickgluetonCheckBox(){
  await expect(this.glutenCheckBox).toBeVisible();
  await this.glutenCheckBox.click();
  await expect(this.glutenCheckBox).toBeChecked();
}
async clicknutsCheckBox(){
  await expect(this.nutsCheckbox).toBeVisible();
  await this.nutsCheckbox.click();
  await expect(this.nutsCheckbox).toBeChecked();
}
async clickdairyCheckBox(){
  await expect(this.dairyCheckbox).toBeVisible();
  await this.dairyCheckbox.click();
  await expect(this.dairyCheckbox).toBeChecked();
}
async verifySaveError(){
  await expect(this.saveError).toBeVisible();
}
async visibleSubmitBtn(){
  await expect(this.submitBtn).toBeVisible();
}
async clickSubmitBtn(){
  await this.submitBtn.click();
}
/* onboarding without bloodreport methods*/
async verifyonboard_step1heading(){
  await expect(this.onboard_step1heading).toBeVisible({timeout : 15000});
}
async verifysubtext(){
  await expect(this.subtext).toBeVisible();
}
async verifytype2option(){
  await expect(this.type2option).toBeVisible();
}
async verifytype2option(){
  await this.type2option.isVisible();
}
async verifyonboard_stepIndicator(){
  await expect(this.Onboard_stepIndicator).toBeVisible();
}
async clicktype2Button(){
  await this.type2Button.click();
}
async clickidkoption(){
  await this.idkButton.click();
}
async verifyOnboard_Step2Heading(){
  await expect(this.onboard_step2heading).toBeVisible({timeout : 10000});
}
async verifyOnboard_Subtext(){
  await expect(this.onboard_step2subtext).toBeVisible();
}
async clickmaleoption(){
  await this.optionMale.click();
}
async clickyearsoption(){
  await this.option.click();
}
async clickcmoption(){
  await this.cmoption.click();
}
async clickkgoption(){
  await this.kgoption.click();
}
async clickvegetarianoption(){
  await this.vegetarianoption.click();
}
async clickindianoption(){
   await expect(this.indianoption).toBeVisible({ timeout: 10000 });
  await this.indianoption.click();
}
async clickfoodallergyYesoption(){
  await this.foodallergyYesoption.click();
}
async clickglutencheckbox(){
  await expect(this.glutenCheckbox).toBeVisible();
  await this.glutenCheckbox.click();
  await expect(this.glutenCheckbox).toBeChecked();
}
async clicknutscheckbox(){
 await expect(this.nutsCheckbox).toBeVisible();
  await this.nutsCheckbox.click();
  await expect(this.nutsCheckbox).toBeChecked();
}
async clickbloodpressureoption(){
  await expect(this.bloodpressureoption).toBeVisible();
  await this.bloodpressureoption.click();
  await expect(this.bloodpressureoption).toBeChecked();
}
async clickeasyoption(){
  await this.onboard_step11easyoption.click();
}
async clickhbA1cValueoption(hba1cvalue){
  logger.info('Filling HbA1c value with:', hba1cvalue);
  await this.hbA1cValueoption.fill(hba1cvalue);
}
async clickonboard_continueBtn(){
  await this.onboard_continueBtn.click();
}
/*Common Methods*/
  async goback() {
  await this.page.goBack();
}
  async goNextpage(){
    await this.page.goForward();
  }
  async bloodreportquestionpage(){
    await this.page.goto('https://sweet-balance-test-env-3-numpyninjadiabe.replit.app/blood-report-question')
  }

}
