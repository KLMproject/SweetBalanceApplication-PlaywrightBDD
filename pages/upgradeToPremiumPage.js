import { expect } from '@playwright/test';
export class upgradeToPremiumPage {
  constructor(page) {
    this.page = page;
    this.upgradeToPremiumHeading = page.getByRole('heading', { name: 'Upgrade to Premium' });
    this.premiumFeaturesHeading = page.getByRole('heading', { name: 'Premium Features' });
    this.personalizedMealPlansFeature = page.getByText('✓Personalized meal plans');
    this.advancedAnalyticsFeature = page.getByText('✓Advanced analytics'); 
    this.prioritySupportFeature = page.getByText('✓Priority support');
    this.monthlyPriceText = page.getByText('$9.99/month');
    this.cancelAnytimeText = page.getByText('Cancel anytime');
    this.cardNumberText = page.getByText('Card Number');
    this.payButton = page.getByRole('button', { name: 'Pay $9.99 USD' });

    //payment locators   
    this.getPersonalizedinsightsText= page.getByText('Get personalized insights and');
    //this.cardNumberField=  page.locator('iframe[name="__privateStripeFrame6443"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card number' });
    this.cardNumberField= page.locator("iframe[title='Secure card number input frame']");    
   this.expirationDateInput= page.locator("//div[@id='card-expiry']");
    //this.cvvInput= page.locator('iframe[name="__privateStripeFrame6445"]').contentFrame().getByRole('textbox', { name: 'Credit or debit card CVC/CVV' }).click();
    this.cvvInput= page.locator("//div[@id='card-cvc']");
    this.payBtn= page.getByRole('button', { name: 'Pay $9.99 USD' });

    this.errormsgForincompleteCardnum =page.getByText('Your card number is incomplete.')
    this.errormsgForinvalidCardnum =page.getByText('Your card number is invalid.')
    this.errormsgForinvalidDate =page.getByText('Your card’s expiration year is in the past.')
    this.errormsgForincompleteCvv =page.getByText('Your card’s security code is incomplete.')
    this.genericPaymentError = page.locator('div.flex.items-center.text-red-500.text-sm.mt-2');

  }
  // async navigateToPremiumPaymentPage() {
  //       await this.page.goto('/Premium');
  // }
  async verifyOnUpgradePage() {
    await expect(this.page).toHaveURL('/Premium');
    await expect(this.upgradeToPremiumHeading).toBeVisible();
  }
  async verifyGetPersonalizedinsightsText() {
    await expect(this.getPersonalizedinsightsText).toBeVisible();
  }
  async verifyPremiumFeaturesHeading() {
    await expect(this.premiumFeaturesHeading).toBeVisible();
  }
  async verifyCancelAnytimeText() {
    await expect(this.cancelAnytimeText).toBeVisible();
  }
  async verifyCardNumberText() {
    await expect(this.cardNumberText).toBeVisible();
  }
  async verifyCardNumberField() {
    await expect(this.cardNumberField).toBeVisible();
  }
  async verfyExpirationField() {
    await expect(this.expirationDateInput).toBeVisible();
  }
  async verifyCvvField() {
    await expect(this.cvvInput).toBeVisible();
  }
  async verifyPayButton() {
    await expect(this.payButton).toBeVisible();
  }
  async verifyPaymentPageLoaded() {
    await expect(this.getPersonalizedinsightsText).toBeVisible();
  }
  async fillCardNumber(cardNumber) {
    const cardFrame = this.page.frameLocator(
      'iframe[title="Secure card number input frame"]'
    );
    await cardFrame.locator('input[name="cardnumber"]').fill(cardNumber);
  }

  async fillExpiry(expiry) {
    const expiryFrame = this.page.frameLocator(
      'iframe[title="Secure expiration date input frame"]'
    );
    await expiryFrame.locator('input[name="exp-date"]').fill(expiry);
  }

  async fillCVV(cvv) {
    const cvvFrame = this.page.frameLocator(
      'iframe[title="Secure CVC input frame"]'
    );
    await cvvFrame.locator('input[name="cvc"]').fill(cvv);
  }

  async enterPaymentDetails(card, exp, cvv) {
    await this.fillCardNumber(card);
    await this.fillExpiry(exp);
    await this.fillCVV(cvv);
  }

  async clickPay() {
    await this.payButton.click();
  }

  async verifyErrorMessageForInvalidCard() {
    await expect(this.errormsgForinvalidCardnum).toBeVisible();
  }
  async verifyErrorMessageForIncompleteCard() {
    await expect(this.errormsgForincompleteCardnum).toBeVisible();
  }
  async verifyErrorMessageForinvalidDate() {
    await expect(this.errormsgForinvalidDate).toBeVisible();
  }
  async verifyErrorMessageForIncompleteCvv() {
    await expect(this.errormsgForincompleteCvv).toBeVisible();
  }
  async verifyErrorMessageForEmptyDate() {
    await expect(this.genericPaymentError).toBeVisible();
  }

  async verifySuccessRedirect() {
    await expect(this.page).toHaveURL('/premium');
  }
}
//module.exports = HomePage;