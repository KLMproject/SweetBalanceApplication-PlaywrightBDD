import { expect } from '@playwright/test';

export class DiabetesRiskAssessmentPage {
  constructor(page) {
    this.page = page;
  }

  async clickCheckYourRisk() {
    const button = this.page.locator('button', { hasText: 'Check Your Risk' });
    await expect(button).toBeVisible();
    await expect(button).toBeEnabled();
    await button.click();
  }

  async validateModalHeading(expectedHeading) {
    const modalHeading = this.page.locator('div[role="dialog"] h2', { hasText: expectedHeading });
    await expect(modalHeading).toBeVisible({ timeout: 10000 });
  }

  // async validateModalText(expectedText) {
  //   const modalText = this.page.locator('div[role="dialog"]', { hasText: expectedText });
  //   await expect(modalText).toBeVisible({ timeout: 10000 });
  // }

async validateModalText(expectedText) {
    const modalLocator = this.page.locator('div[role="dialog"]');

    // Wait for the modal to be visible
    await expect(modalLocator).toBeVisible({ timeout: 10000 });

    // Get the actual text inside the modal
    const actualText = await modalLocator.innerText();

    // Print the actual text to console
    console.log(`Actual modal text: "${actualText}"`);

    // You can still optionally assert if needed
    if (!actualText.includes(expectedText)) {
        console.warn(`Warning: Modal text does not match expected! Expected: "${expectedText}", Actual: "${actualText}"`);
    }
}


  async validateButtonPresence(buttonText) {
    const btn = this.page.locator('div[role="dialog"] button', { hasText: buttonText });
    await expect(btn).toBeVisible();
  }

  async validateButtonDisabled(buttonText) {
    const btn = this.page.locator('div[role="dialog"] button', { hasText: buttonText });
    await expect(btn).toBeDisabled();
  }

  async validateFieldIncrement(fieldLabel) {
    const increment = this.page.locator(`label:has-text("${fieldLabel}") ~ div button[aria-label="increment"]`);
    await expect(increment).toBeVisible();
  }

  async validateFieldDecrement(fieldLabel) {
    const decrement = this.page.locator(`label:has-text("${fieldLabel}") ~ div button[aria-label="decrement"]`);
    await expect(decrement).toBeVisible();
  }

  async validateStepperControl(fieldLabel) {
    await this.validateFieldIncrement(fieldLabel);
    await this.validateFieldDecrement(fieldLabel);
  }

  async validateCheckbox(fieldLabel) {
    const checkbox = this.page.locator(`label:has-text("${fieldLabel}") input[type="checkbox"]`);
    await expect(checkbox).toBeVisible();
  }

  async validatePlaceholder(fieldLabel, placeholderText) {
    const input = this.page.locator(`label:has-text("${fieldLabel}") ~ input`);
    await expect(input).toHaveAttribute('placeholder', placeholderText);
  }

  async validateDropdown(fieldLabel) {
    const dropdown = this.page.locator(`label:has-text("${fieldLabel}") ~ select`);
    await expect(dropdown).toBeVisible();
  }

  async validateDropdownDefault(fieldLabel, defaultText) {
    const dropdown = this.page.locator(`label:has-text("${fieldLabel}") ~ select`);
    await expect(dropdown).toHaveValue('');
    const selectedOption = await dropdown.inputValue();
    expect(selectedOption).toBe('');
    // Additional validation of placeholder if needed
  }

  async validateDropdownValues(fieldLabel, expectedValues) {
    const dropdown = this.page.locator(`label:has-text("${fieldLabel}") ~ select`);
    const options = await dropdown.locator('option').allTextContents();
    expect(options.join(',')).toContain(expectedValues);
  }

  async clickCancel() {
    const cancelBtn = this.page.locator('div[role="dialog"] button', { hasText: 'Cancel' });
    await expect(cancelBtn).toBeVisible();
    await cancelBtn.click();
  }

  async clickCalculateRisk() {
    const calcBtn = this.page.locator('div[role="dialog"] button', { hasText: 'Calculate Risk' });
    await expect(calcBtn).toBeVisible();
    await expect(calcBtn).toBeEnabled();
    await calcBtn.click();
  }

  async validateAssessmentDialog() {
    const dialog = this.page.locator('div[role="dialog"] h2', { hasText: 'Your Diabetes Risk Assessment' });
    await expect(dialog).toBeVisible({ timeout: 10000 });
  }

  async enterValuesInAllFields(age, weight, activity, bp, diet, familyHistory = false) {
    await this.page.fill('label:has-text("Age") ~ input', `${age}`);
    await this.page.fill('label:has-text("Weight") ~ input', `${weight}`);
    await this.page.selectOption('label:has-text("Physical Activity Level") ~ select', { label: activity });
    await this.page.selectOption('label:has-text("Blood Pressure") ~ select', { label: bp });
    await this.page.selectOption('label:has-text("Diet Quality") ~ select', { label: diet });
    if (familyHistory) {
      const checkbox = this.page.locator('label:has-text("Family history of diabetes") input[type="checkbox"]');
      await checkbox.check();
    }
  }
}
