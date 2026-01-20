import { expect } from '@playwright/test';

export class CommonFeatureForHomePage {
  constructor(page) {
    this.page = page;

      // selector for the username at top-right corner
 
    this.loggedinUserName = page.locator('div.flex.items-center.space-x-4 span');

    this.timestampLocator = page.locator('div.text-sm.text-gray-500', { hasText: 'Last updated:' });
    this.lastUpdatedText = page.locator('text=/Last updated:/i');

       // Latest HbA1C card
    //this.hba1cCard = page.locator('div:has-text("Latest HbA1C")');
  
    this.hba1cCard = page.locator('div.text-center:has-text("Latest HbA1C")').first();
    this.hba1cValue = this.hba1cCard.locator('span.text-3xl');  // numeric value
    this.hba1cStatus = this.hba1cCard.locator('div.text-sm.font-bold', { hasText: 'Diabetic' });
    this.hba1cStatus = this.hba1cCard.locator('div.text-sm.font-bold'); // condition text (Normal/Pre-Diabetic/Diabetic)

    //BMI card locators

    this.bmiCard = page.locator('div.text-center:has-text("BMI")').first();
    this.bmiValue = this.bmiCard.locator('span.text-3xl');
    //this.bmiStatus = this.bmiCard.locator('div.text-sm.font-bold', { hasText: 'Overweight' }); 
    this.bmiStatus = this.bmiCard.locator('div.text-sm.font-bold');


    // Locator for Average Blood Sugar card

    // this.avgBloodSugarCard = page.locator('div.grid div:has-text("Average Blood Sugar")');
    // this.avgBloodSugarValue = this.avgBloodSugarCard.locator('span.text-3xl');
    // this.avgBloodSugarUnit = this.avgBloodSugarCard.locator('div.text-sm.text-gray-500');


    // this.avgBloodSugarCard = page.locator('div.text-sm.font-medium', { hasText: 'Average Blood Sugar' }).locator('..'); // parent card
    // this.avgBloodSugarValue = this.avgBloodSugarCard.locator('span.text-3xl');
    // this.avgBloodSugarUnit = this.avgBloodSugarCard.locator('div.text-sm.text-gray-500');

    this.avgBloodSugarCard = page.locator('div.text-sm.font-medium', { hasText: 'Average Blood Sugar' }).locator('..'); // mt-4 div
this.avgBloodSugarValue = this.avgBloodSugarCard.locator('xpath=preceding-sibling::div//span[contains(@class,"text-3xl")]');
this.avgBloodSugarUnit = this.avgBloodSugarCard.locator('div.text-sm.text-gray-500');

// Selector for meal section buttons and cards
this.mealSectionButtons = page.locator('.flex.rounded-full button');
this.mealCardsContainer = page.locator('.mt-6 .bg-gray-50');

//locator for dish title (Pre-Breakfast, Lunch, Dinner, Snacks)
  this.preMealDishTitle = page.locator('div.mt-6 h4.text-gray-900');

  }


  /**
 * Click on a meal section tab (Breakfast, Lunch, Dinner, Snacks)
 * @param {string} sectionName
 */
async clickMealSection(sectionName) {
  const sectionBtn = this.mealSectionButtons.filter({ hasText: sectionName });
  await sectionBtn.click();
}

/**
 * Get all meal times from currently visible cards
 * @returns {Promise<string[]>}
 */
async getMealTimes() {
  const timeSpans = this.mealCardsContainer.locator('.flex.items-center span:first-child');
  const times = await timeSpans.allTextContents();
  return times.map(t => t.trim());
}

/**
 * Validate a single time string in AM/PM format
 * @param {string} timeStr
 */
validateTimeFormat(timeStr) {
  const timeRegex = /^(0?[1-9]|1[0-2]):([0-5][0-9])\s?(AM|PM)$/i;

  if (!timeRegex.test(timeStr)) {
    throw new Error(`Invalid time format: ${timeStr}`);
  }

  const match = timeStr.match(timeRegex);
  const hours = parseInt(match[1], 10);
  const minutes = parseInt(match[2], 10);

  if (hours < 1 || hours > 12 || minutes < 0 || minutes > 59) {
    throw new Error(`Time out of valid range: ${timeStr}`);
  }
}

/**
 * Validate all meal times for the current section
 */
async validateAllMealTimes() {
  const times = await this.getMealTimes();
  if (times.length === 0) {
    throw new Error('No meal times found in this section');
  }
  times.forEach(time => this.validateTimeFormat(time));
}

/**
 * Ensure meal cards are visible
 */
async assertMealCardsVisible() {
  await expect(this.mealCardsContainer.first()).toBeVisible();
}


  static getDisplayNameFromEmail(email) {
  const digitMap = {
    '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four',
    '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine'
  };

  const namePart = email.split('@')[0]; // e.g., "testuser100"

  // Hardcode camel case for known usernames (most reliable if small set)
  let alphaPart = namePart.replace(/\d+$/, ''); // "testuser"
  const numPart = namePart.match(/\d+$/)?.[0] || ''; // "100"

  // Capitalize first letter of each word in alphaPart
 
  alphaPart = alphaPart.replace(/^[a-z]+|[a-z]+/gi, (s) => s.charAt(0).toUpperCase() + s.slice(1));

  // Convert numbers to words
  let numWord = '';
  for (const digit of numPart) {
    numWord += digitMap[digit];
  }

  return alphaPart + numWord; 
}

  async verifySweetBalanceText() {
    await expect(this.page.locator('text=SweetBalance')).toBeVisible();
  }

  async verifyLogoutLink() {
    await expect(this.page.locator('text=Logout')).toBeVisible();
  }

  async verifyTopNavigationBar() {
    await expect(this.page.locator('nav')).toBeVisible();
  }

  async verifyNavigationTab(tabName) {
    await expect(this.page.locator(`nav >> text=${tabName}`)).toBeVisible();
  }

  async verifySectionHeading(text) {
  // locate h2 elements containing the text, ignoring extra nodes or spaces
  const headingLocator = this.page.locator('h3', { hasText: text });
  await expect(headingLocator).toBeVisible();
  console.log(`Verified section heading: ${text}`);
}
  async verifyLabel(labelText) {
    await expect(this.page.locator(`text=${labelText}`)).toBeVisible();
  }

  async verifyLastUpdateTimestamp() {
    await this.timestampLocator.waitFor({ state: 'visible', timeout: 5000 });

    const timestampText = (await this.timestampLocator.textContent()).trim();

    // Check for "Last updated:" presence
    if (!timestampText.startsWith('Last updated:')) {
      throw new Error(`Timestamp not found or not in expected format. Found: "${timestampText}"`);
    }

    console.log('Verified timestamp:', timestampText);
    return timestampText;
  }

  async verifyLastUpdatedTimeInMinutesOrHours() {
    await expect(this.lastUpdatedText).toBeVisible();

    const text = await this.lastUpdatedText.textContent();

    // Matches: "Last updated: 2h ago" or "Last updated: 15m ago"
    const timeRegex = /Last updated:\s*\d+\s*(m|h)\s*ago/i;

    expect(text).toMatch(timeRegex);
  }


  //  async verifyLastUpdateTimestamp() {
  //   await this.timestampLocator.waitFor({ state: 'visible', timeout: 5000 });
  //   const timestampText = (await this.timestampLocator.textContent()).trim();

  //   if (!timestampText.includes('Last updated:')) {
  //     throw new Error(`Timestamp not found or not in expected format. Found: "${timestampText}"`);
  //   }

  //   console.log('Verified timestamp:', timestampText);
  //   return timestampText;
  // }

  // async verifyValue(selector) {
  //   await expect(this.page.locator(selector)).toBeVisible();
  // }


  async verifyHba1cCard() {
    // Verify card visible
    await expect(this.hba1cCard).toBeVisible();

    // Verify value exists and is not empty
    const valueText = await this.hba1cValue.textContent();
    expect(valueText).not.toBe('');
    
    // Optional: verify status text
    await expect(this.hba1cStatus).toBeVisible();
  }



    // Get numeric HbA1C value as a float
  async getHba1cValue() {
    const valueText = (await this.hba1cValue.textContent()).trim();
    return parseFloat(valueText);
  }

  // Get the condition text displayed on the card
  async getHba1cStatusText() {
    return (await this.hba1cStatus.textContent()).trim();
  }


  // Validate condition based on numeric value
  async validateHba1cCondition() {
    const value = await this.getHba1cValue();
    const statusText = await this.getHba1cStatusText();

    let expectedStatus;
    if (value < 5.7) {
      expectedStatus = 'Normal';
    } else if (value >= 5.7 && value <= 6.4) {
      expectedStatus = 'Pre-Diabetic';
    } else if (value >= 6.5) {
      expectedStatus = 'Diabetic';
    } else {
      throw new Error(`Unexpected HbA1C value: ${value}`);
    }

    // Assert that the displayed status matches expected
    expect(statusText).toBe(expectedStatus);

    console.log(`HbA1C value: ${value}, Expected Status: ${expectedStatus}, Displayed Status: ${statusText}`);
  }


    // BMI validation
  async verifyBmiCard() {
    // Verify card is visible
    await expect(this.bmiCard).toBeVisible();

    // Verify value exists and is not empty
    const valueText = await this.bmiValue.textContent();
    expect(valueText).not.toBe('');

    // Optional: verify status text (Overweight / Underweight / Normal)
    await expect(this.bmiStatus).toBeVisible();
  }


//   async getBmiValue() {
//   const text = (await this.bmiValue.textContent()).trim();
//   return parseFloat(text); // convert to number
// }


async getBmiValue() {
  const text = (await this.bmiValue.textContent())?.trim();
  
  if (!text) {
    throw new Error('BMI value is missing from the page');
  }

  const value = parseFloat(text);
  
  if (isNaN(value)) {
    throw new Error(`Unexpected BMI value: "${text}"`);
  }

  return value;
}

async getBmiStatusText() {
  return (await this.bmiStatus.textContent()).trim();
}

    // Method to verify Average Blood Sugar card

    async verifyAverageBloodSugarCard() {
    await expect(this.avgBloodSugarCard).toBeVisible({ timeout: 5000 });

    const valueText = (await this.avgBloodSugarValue.textContent()).trim();
    if (!valueText) throw new Error('Average Blood Sugar value is missing');

    await expect(this.avgBloodSugarUnit).toBeVisible();
    const unitText = (await this.avgBloodSugarUnit.textContent()).trim();
    if (!unitText) throw new Error('Average Blood Sugar unit is missing');

    console.log(`Verified Average Blood Sugar: ${valueText} ${unitText}`);
}

// Method to get unit text for Avg Blood Sugar
async getAvgBloodSugarUnit() {
  await this.avgBloodSugarUnit.waitFor({ state: 'visible', timeout: 5000 });
  return (await this.avgBloodSugarUnit.textContent()).trim();
}

// HBA1C condition verification 

async verifyHba1cCondition() {
  // 1. Locate the HbA1C card
  const card = this.page.locator('div.grid div:has-text("HbA1C")');
  
  // 2. Get the numeric value from the span
  const valueText = (await card.locator('span.text-3xl').textContent()).trim();
  const valueNumber = parseFloat(valueText);

  if (isNaN(valueNumber)) throw new Error(`HbA1C value is not a number: "${valueText}"`);

  // 3. Get the displayed condition text
  const conditionText = (await card.locator('div.text-sm.font-bold').textContent()).trim();

  // 4. Determine expected condition based on range
  let expectedCondition;
  if (valueNumber < 5.7) expectedCondition = 'Normal';
  else if (valueNumber >= 5.7 && valueNumber <= 6.4) expectedCondition = 'Pre-Diabetic';
  else expectedCondition = 'Diabetic';

  // 5. Assert the displayed condition matches expected
  if (conditionText !== expectedCondition) {
    throw new Error(`HbA1C condition mismatch. Value: ${valueNumber}, Expected: ${expectedCondition}, Found: ${conditionText}`);
  }

  console.log(`Verified HbA1C value ${valueNumber} with condition "${conditionText}"`);
}




//     async verifyAverageBloodSugarCard() {
//     // Verify card is visible
//     await expect(this.avgBloodSugarCard).toBeVisible({ timeout: 5000 });

//     // Verify the value exists and is not empty
//     const valueText = (await this.avgBloodSugarValue.textContent()).trim();
//     if (!valueText) {
//         throw new Error('Average Blood Sugar value is missing');
//     }

//     // Verify the unit exists and is visible
//     await expect(this.avgBloodSugarUnit).toBeVisible();
//     const unitText = (await this.avgBloodSugarUnit.textContent()).trim();
//     if (!unitText) {
//         throw new Error('Average Blood Sugar unit is missing');
//     }

//     console.log(`Verified Average Blood Sugar: ${valueText} ${unitText}`);
// }
  // async verifyAverageBloodSugarCard() {
  //   // Verify the card is visible
  //   await expect(this.avgBloodSugarCard).toBeVisible();

  //   // Verify value exists and is not empty
  //   const valueText = (await this.avgBloodSugarValue.textContent()).trim();
  //   expect(valueText).not.toBe('');
  //   console.log('Average Blood Sugar Value:', valueText);

  //   // Verify unit text exists and is correct
  //   const unitText = (await this.avgBloodSugarUnit.textContent()).trim();
  //   expect(unitText).toBe('mg/dL');
  // }


//Verify “Today's Meal Plan” Title
  async verifyTodaysMealPlanTitle() {
  const titleLocator = this.page.locator('h2:text("Today\'s Meal Plan")');
  await expect(titleLocator).toBeVisible();
}


async verifyMealTabs(tabs = ['Breakfast', 'Lunch', 'Dinner', 'Snacks']) {
  for (const tab of tabs) {
    const locator = this.page.locator(`.flex.rounded-full button:text("${tab}")`);
    await expect(locator).toBeVisible();
  }
}

//Verify Default Selected Tab

async verifyDefaultSelectedTab(tabName = 'Breakfast') {
  const locator = this.page.locator(`.flex.rounded-full button:text("${tabName}")`);
  // Check for selected class (your HTML uses bg-violet-500 for selected)
  await expect(locator).toHaveClass(/bg-violet-500/);
}


//Verify “View Full Plan” Button

async verifyViewFullPlanButton() {
  await expect(this.page.locator('button:text("View Full Plan")')).toBeVisible();
}

  async verifySidebarLabel(labelText) {
    await expect(this.page.locator(`.sidebar >> text=${labelText}`)).toBeVisible();
  }

  // Verify a generic icon
async verifyIcon(selector) {
    await expect(this.page.locator(selector)).toBeVisible();
}

// Verify Meal Plan icon (crossed fork & knife)
async verifyMealPlanIcon() {
    const selector = '.w-24 div.flex-col button:has(span:text("Meal Plan")) svg.lucide-utensils-crossed';
    await this.verifyIcon(selector);
}

// Verify Exercise icon (dumbbell)
async verifyExerciseIcon() {
    const selector = '.w-24 div.flex-col button:has(span:text("Exercise")) svg.lucide-dumbbell';
    await this.verifyIcon(selector);
}


// Grouped verification for sidebar tabs with icons
async verifySidebarTabs() {
    await this.verifyMealPlanIcon();
    await this.verifyExerciseIcon();
}


//Specific methods for each tab/icon:
//1.Meal Plan icon
async verifyMealPlanIcon() {
    const selector = 'div.flex.flex-col button:has(span:text("Meal Plan")) svg.lucide-utensils-crossed';
    await this.verifyIcon(selector);
}


// 2.Exercise icon
async verifyExerciseIcon() {
    const selector = 'div.flex.flex-col button:has(span:text("Exercise")) svg.lucide-dumbbell';
    await this.verifyIcon(selector);
}

  async verifyButton(buttonText) {
    await expect(this.page.locator(`text=${buttonText}`)).toBeVisible();
  }
  

 
  // Method to validate dish title is visible and return its text
  async verifyAndGetDishTitle() {
    // Ensure the dish title is visible
    await expect(this.preMealDishTitle).toBeVisible({ timeout: 5000 });

    // Get the text content
    const text = await this.preMealDishTitle.textContent();

    // Check that it’s not empty
    if (!text || text.trim() === '') {
      throw new Error('Dish title is empty!');
    }

    // Return the dish title text
    return text.trim();
  }


  // Method to verify pre-meal item name is visible and get text
  async verifyAndGetPreMealItemName() {
    // Ensure the pre-meal item is visible
    await expect(this.preMealItemName).toBeVisible({ timeout: 5000 });

    // Get the text
    const text = await this.preMealItemName.textContent();

    // Check it’s not empty
    if (!text || text.trim() === '') {
      throw new Error('Pre-meal item name is empty!');
    }

    // Return the pre-meal item name
    return text.trim();
  }
}
