import { expect } from '@playwright/test';

export class DiabetesRiskAssessmentPage {
  constructor(page) {
    this.page = page;
  }

  
  async clickCheckYourRisk() {
    const button = this.page.locator('button', { hasText: 'Check Your Risk' });
    await expect(button).toBeVisible({ timeout: 10000 });
    await expect(button).toBeEnabled();
    await button.click();
  }

  async validateModalHeading(expectedHeading) {
    const modalHeading = this.page.locator('div[role="dialog"] h2', { hasText: expectedHeading });
    await expect(modalHeading).toBeVisible({ timeout: 10000 });
  }

  async validateModalText(expectedText) {
    const modalLocator = this.page.locator('div[role="dialog"]');
    await expect(modalLocator).toBeVisible({ timeout: 10000 });
    const actualText = await modalLocator.innerText();
    console.log(`Actual modal text: "${actualText}"`);
    expect(actualText).toContain(expectedText);
  }

  async validateButtonPresence(buttonText) {
    const btn = this.page.locator('div[role="dialog"] button', { hasText: buttonText });
    await expect(btn).toBeVisible();
  }

  async validateButtonDisabled(buttonText) {
    const btn = this.page.locator('div[role="dialog"] button', { hasText: buttonText });
    await expect(btn).toBeDisabled({ timeout: 10000 });
  }

  
  //stepper control validation -increment and decrement 

async validateStepperControlsById(fieldId) {
  const inputLocator = this.page.locator(`#${fieldId}`);

  await expect(inputLocator).toBeVisible();
  await expect(inputLocator).toHaveAttribute('type', 'number');

  const min = await inputLocator.getAttribute('min');
  const max = await inputLocator.getAttribute('max');

  expect(min, `${fieldId} missing min`).not.toBeNull();
  expect(max, `${fieldId} missing max`).not.toBeNull();

  await inputLocator.fill('10');

  // Increment
  await inputLocator.press('ArrowUp');
  await expect(inputLocator).toHaveValue('11');

  // Decrement
  await inputLocator.press('ArrowDown');
  await expect(inputLocator).toHaveValue('10');

  console.log(`✅ Stepper behavior verified for "${fieldId}"`);
}

 //check box validation 
    /**
   * Validates that a checkbox exists for the given field label
   * @param {string} fieldText - The label text of the checkbox
   */
  async validateCheckbox(fieldText) {
    // Locate the checkbox input using its label text
    const checkbox = this.page.locator(`label:has-text("${fieldText}") input[type="checkbox"]`);

    // Assert that the checkbox is visible and enabled
    await expect(checkbox).toBeVisible();
    await expect(checkbox).toBeEnabled();
  }
  
  async validatePlaceholder(fieldId, expectedPlaceholder) {
  const inputField = this.page.locator(`#${fieldId}`);
  await expect(inputField).toHaveAttribute('placeholder', expectedPlaceholder);
}

//dropdown validation

  // Generic method to validate any dropdown by its label text
  async validateDropdownByLabel(labelText) {
    const dropdown = this.page.locator(
      `label:has-text("${labelText}") + select, label:has-text("${labelText}") ~ select`
    );
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toBeEnabled();
  }


    // Generic method to validate default value of any dropdown
  async validateDropdownDefaultValue(labelText, expectedDefault) {
    const dropdown = this.page.locator(
      `label:has-text("${labelText}") + select, label:has-text("${labelText}") ~ select`
    );

    await expect(dropdown).toBeVisible();
    await expect(dropdown).toBeEnabled();

    const selectedOption = await dropdown.inputValue(); // gets the value of selected option
    const selectedText = await dropdown.locator(`option[value="${selectedOption}"]`).textContent();

    expect(selectedText.trim()).toBe(expectedDefault);
  }

  
  // Validate all options of a dropdown using JSON array string
  async validateDropdownOptions(labelText, expectedOptionsJson) {
    const dropdown = this.page.locator(
      `label:has-text("${labelText}") + select, label:has-text("${labelText}") ~ select`
    );
    await expect(dropdown).toBeVisible();
    await expect(dropdown).toBeEnabled();

    const expectedOptionsArray = JSON.parse(expectedOptionsJson); // parse JSON array

    const optionsHandles = await dropdown.locator('option').all();
    const actualOptionsArray = [];

    for (const opt of optionsHandles) {
      const text = (await opt.textContent())
        .replace(/\n/g, ' ')
        .replace(/\t/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      actualOptionsArray.push(text);
    }

    expect(actualOptionsArray).toEqual(expectedOptionsArray);
  }





  async clickCancel() {
    const cancelBtn = this.page.locator('div[role="dialog"] button', { hasText: 'Cancel' });
    await expect(cancelBtn).toBeVisible({ timeout: 10000 });
    await cancelBtn.click();
     console.log('✅ Cancel button clicked');
  }

  // Optional generic modal button click
  async clickModalButton(buttonText) {
    const btn = this.page.locator('div[role="dialog"] button', { hasText: buttonText });
    await expect(btn).toBeVisible({ timeout: 10000 });
    await btn.click();
    console.log(`✅ "${buttonText}" button clicked`);
  }


  async clickCalculateRisk() {
    const calcBtn = this.page.locator('div[role="dialog"] button', { hasText: 'Calculate Risk' });
    await expect(calcBtn).toBeVisible({ timeout: 10000 });
    await expect(calcBtn).toBeEnabled({ timeout: 10000 });
    await calcBtn.click();
  }

  async validateAssessmentDialog() {
    const dialog = this.page.locator('div[role="dialog"] h2', { hasText: 'Your Diabetes Risk Assessment' });
    await expect(dialog).toBeVisible({ timeout: 10000 });
  }



async selectDropdownByLabel(labelText, optionText) {
  const dropdown = this.page.locator(`label:has-text("${labelText}") ~ select`);

  // Wait until the dropdown is visible and has options
  await dropdown.waitFor({ state: 'visible', timeout: 10000 });
  await this.page.waitForFunction(
    (ddl) => ddl.options.length > 0,
    dropdown,
    { timeout: 10000 }
  );

  // Log options for debugging
  const opts = await dropdown.locator('option').allTextContents();
  console.log(`Options for "${labelText}":`, opts);

  // Trim the Excel value and select
  const cleanedOption = optionText.trim();
  if (!opts.includes(cleanedOption)) {
    throw new Error(`Option "${cleanedOption}" not found in "${labelText}" dropdown`);
  }

  await dropdown.selectOption({ label: cleanedOption });
}


// async enterValuesInAllFields(age, weight, activity, bp, diet, familyHistory = false) {
//   // Helper to normalize any value: null/undefined => '', trim string
//   const normalize = (val) => {
//     if (val === null || val === undefined) return '';
//     if (typeof val === 'object' && val.text) return val.text.trim();
//     return val.toString().trim();
//   };

//   // Normalize all fields
//   age = normalize(age);
//   weight = normalize(weight);
//   activity = normalize(activity);
//   bp = normalize(bp);
//   diet = normalize(diet);

//   // Fill fields only if value exists
//   if (age) {
//     await this.page.fill('label:has-text("Age") ~ input', age);
//   }

//   if (weight) {
//     await this.page.fill('label:has-text("Weight") ~ input', weight);
//   }

//   if (activity) {
//     await this.selectDropdownByLabel('Physical Activity Level', activity);
//   }

//   if (bp) {
//     await this.selectDropdownByLabel('Blood Pressure', bp);
//   }

//   if (diet) {
//     await this.selectDropdownByLabel('Diet Quality', diet);
//   }

//   if (familyHistory === true) {
//     const checkbox = this.page.locator(
//       'label:has-text("Family history of diabetes") input[type="checkbox"]'
//     );
//     await checkbox.check();
//   }

//   // ✅ Only log a safe string, no objects
//   console.log(
//     `✅ Filled Diabetes Risk form: Age="${age}", Weight="${weight}", Activity="${activity}", BP="${bp}", Diet="${diet}", FamilyHistory=${familyHistory}`
//   );
// }

// DiabetesRiskAssessmentPage.js
async enterRiskData(data) {
  // Age
  if (data.age) await this.page.fill('#risk_age', data.age.toString());
  
  // Weight
  if (data.weight) await this.page.fill('#risk_weight', data.weight.toString());

  // Physical Activity Level
  if (data.activity) {
    await this.page.selectOption('#risk_activity', { label: data.activity });
  }

  // Blood Pressure
  if (data.bloodPressure) {
    await this.page.selectOption('#risk_bloodPressure', { label: data.bloodPressure });
  }

  // Diet Quality
  if (data.diet) {
    await this.page.selectOption('#risk_diet', { label: data.diet });
  }

  // Family history (checkbox)
  const checkbox = this.page.locator('#risk_familyHistory');
  const shouldCheck = data.familyHistory === true || data.familyHistory === 'TRUE';
  if (shouldCheck) {
    if (!(await checkbox.isChecked())) await checkbox.check();
  } else {
    if (await checkbox.isChecked()) await checkbox.uncheck();
  }
}


}







// async enterValuesInAllFields(age, weight, activity, bp, diet, familyHistory = false) {
//   const normalize = (val) => (val === undefined || val === null ? '' : val.toString().trim());

//   age = normalize(age);
//   weight = normalize(weight);
//   activity = normalize(activity);
//   bp = normalize(bp);
//   diet = normalize(diet);

//   if (age) {
//     await this.page.fill('label:has-text("Age") ~ input', age);
//   }

//   if (weight) {
//     await this.page.fill('label:has-text("Weight") ~ input', weight);
//   }

//   if (activity) {
//     await this.selectDropdownByLabel('Physical Activity Level', activity);
//   }

//   if (bp) {
//     await this.selectDropdownByLabel('Blood Pressure', bp);
//   }

//   if (diet) {
//     await this.selectDropdownByLabel('Diet Quality', diet);
//   }

//   if (familyHistory === true) {
//     const checkbox = this.page.locator(
//       'label:has-text("Family history of diabetes") input[type="checkbox"]'
//     );
//     await checkbox.check();
//   }
// }

// }

//   async enterValuesInAllFields(age, weight, activity, bp, diet, familyHistory = false) {

//   // Age (skip if empty — supports Row 4)
//   if (age) {
//     await this.page.fill(
//       'label:has-text("Age") ~ input',
//       age.toString()
//     );
//   }

//   // Weight
//   if (weight) {
//     await this.page.fill(
//       'label:has-text("Weight") ~ input',
//       weight.toString()
//     );
//   }

//   // Dropdowns — select by LABEL (not value)
//   if (activity) {
//     await this.selectDropdownByLabel(
//       'Physical Activity Level',
//       activity
//     );
//   }

//   if (bp) {
//     await this.selectDropdownByLabel(
//       'Blood Pressure',
//       bp
//     );
//   }

//   if (diet) {
//     await this.selectDropdownByLabel(
//       'Diet Quality',
//       diet
//     );
//   }

//   // Checkbox
//   if (familyHistory === true) {
//     const checkbox = this.page.locator(
//       'label:has-text("Family history of diabetes") input[type="checkbox"]'
//     );
//     await checkbox.check();
//   }
// }


  
// }



  // async enterValuesInAllFields(age, weight, activity, bp, diet, familyHistory = false) {
  //   await this.page.fill('label:has-text("Age") ~ input', `${age}`);
  //   await this.page.fill('label:has-text("Weight") ~ input', `${weight}`);
  //   await this.page.selectOption('label:has-text("Physical Activity Level") ~ select', { label: activity });
  //   await this.page.selectOption('label:has-text("Blood Pressure") ~ select', { label: bp });
  //   await this.page.selectOption('label:has-text("Diet Quality") ~ select', { label: diet });

  //   if (familyHistory) {
  //     const checkbox = this.page.locator('label:has-text("Family history of diabetes") input[type="checkbox"]');
  //     await checkbox.check();
  //   }
  // }
