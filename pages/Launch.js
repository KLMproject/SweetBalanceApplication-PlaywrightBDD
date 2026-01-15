import { expect } from '@playwright/test';
import logger from '../utils/logger.js';


export class LaunchPage {
      constructor(page) {
        this.page = page;
       
        this.subText = page.getByText('Effortless health management');
        this.sectionSubText = page.getByText('Everything you need to take control of your health journey');
  
    }

  async launchURL(url) {
  await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  await this.page.waitForLoadState('networkidle');
}


// async launchURL(url) {
//     // Clear cookies and storage
//     await this.page.context().clearCookies();
//     await this.page.evaluate(() => {
//         localStorage.clear();
//         sessionStorage.clear();
//     });

//     // Navigate to URL and wait for page load
//     await this.page.goto(url, { waitUntil: 'domcontentloaded' });
//     await this.page.waitForLoadState('networkidle');

//     // Wait for a key element to be visible
//     const mainContent = this.page.locator('main, nav'); // adjust selector
//     await expect(mainContent).toBeVisible({ timeout: 15000 });

//     console.log('URL launched with clean session and main content visible');
// }

async waitForPageStable() {
  await this.page.waitForLoadState('domcontentloaded');
  await this.page.waitForLoadState('networkidle');
}


    async validateAppName() {
        const appName  = this.page.getByText('SweetBalance', { exact: true });
       //await expect(appName).toBeVisible();         // keep the visibility check
      await appName.waitFor({ state: 'visible', timeout: 10000 });
      await expect(appName).toBeVisible();
        return await appName.textContent();                             
    }


    async validateElement(elementType, elementValue) {
  let locator;

  switch (elementType.toLowerCase()) {
    case 'text':
      locator = this.page.getByText(elementValue, { exact: true });
      break;

    case 'heading':
      locator = this.page.getByRole('heading', { name: elementValue });
      break;

    case 'section':
      locator = this.page.locator('section h2', { hasText: elementValue });
      break;

    default:
      throw new Error(`Unsupported element type: ${elementType}`);
  }

// await locator.scrollIntoViewIfNeeded();
// await expect(locator).toBeVisible({ timeout: 10000 });

await locator.waitFor({ state: 'attached', timeout: 10000 });
await locator.scrollIntoViewIfNeeded();
await expect(locator).toBeVisible({ timeout: 10000 });
}

    async validateHeadingText(expectedText) {
        const locator = this.page.locator('h1.font-bold.leading-tight', { hasText: expectedText });
        await expect(locator).toBeVisible({ timeout: 10000 });
    }
    async validateSection(sectionText) {
    
    const sectionLocator = this.page.locator('section h2', { hasText: sectionText });
    await expect(sectionLocator).toHaveText(sectionText);
    }
    
    async validateButtonText(buttonText) {
    const startTodayBtn = this.page.locator(`button:has-text("${buttonText}")`);
    // await expect(startTodayBtn).toBeVisible({ timeout: 5000 });
    // await startTodayBtn.click();
    await startTodayBtn.waitFor({ state: 'visible', timeout: 10000 });
    await expect(startTodayBtn).toBeEnabled();
    await startTodayBtn.click();
}
    async validateCardTitle(cardTitle) {
    const cardTitleLocator = this.page.getByRole('heading', { name: cardTitle });
    await expect(cardTitleLocator).toBeVisible();
}


async validateFeatureCardDesc(cardTitle, expectedText) {
  // Step 1: Locate the card by heading (anchor)
  const card = this.page.locator(
    'section, article, div', {
      has: this.page.getByRole('heading', { name: cardTitle })
    }
  ).first();

  // Ensure card itself is visible
  await card.scrollIntoViewIfNeeded();
  await expect(card).toBeVisible({ timeout: 10000 });

  // Step 2: Validate description text INSIDE that card
  const description = card.getByText(expectedText, { exact: false });

  await expect(description).toBeVisible({ timeout: 10000 });
}


//Feature card icon validations

async validateIcon(cardName, iconName) {
  // Locate card by heading
  const card = this.page
    .locator('div.rounded-lg.border.bg-card')
    .filter({
      has: this.page.getByRole('heading', { name: cardName })
    })
    .first();

  await expect(card, `Card "${cardName}" not found`).toBeVisible();

  const iconMap = {
    heart: 'lucide-heart',
    activity: 'lucide-square-activity',
    clock: 'lucide-clock'
  };

  const iconClass = iconMap[iconName.toLowerCase()];
  if (!iconClass) {
    throw new Error(`Unsupported icon: ${iconName}`);
  }

  const icon = card.locator(`svg.${iconClass}`);
  await expect(icon, `Icon "${iconName}" not visible in "${cardName}"`).toBeVisible();
}

   //name testimonial validations
 async validateUserTestimonial(userName) {
    const testimonialCard = this.page.locator('div.rounded-lg.border').filter({ hasText: userName });
    await expect(testimonialCard).toBeVisible({ timeout: 5000 });
    }
    async validateUserTestimonialStars(userName, expectedStars) {
    // Reuse the testimonial card locator and Locate all star SVGs inside this card
    const testimonialCard = this.page.locator('div.rounded-lg.border').filter({ hasText: userName });
    const starsLocator = testimonialCard.locator('svg.lucide-star');
    // Count the stars
    const starCount = await starsLocator.count();
    // console.log(`Found ${starCount} stars for ${userName}`);
    // Verify the number of stars matches expected
    if (starCount !== expectedStars) {
        throw new Error(`Expected ${expectedStars} stars for ${userName} but found ${starCount}`);
    }
   // console.log(`Star count validated for ${userName}`);
}

//validate 5 yellow stars
async validateStarsAboveSection(sectionText, expectedCount) {
    const section = this.page.getByText(sectionText, { exact: true });
    const stars = section.locator('xpath=preceding::div[1]').locator('svg.lucide-star.fill-yellow-400');
    await expect(stars).toHaveCount(expectedCount);
    }
    //Validate login button visibility and enabled 
    async validateLoginButton() {
  const loginButton = this.page.locator('button', { hasText: 'Login' });
  await expect(loginButton).toBeVisible();
  await expect(loginButton).toBeEnabled();
}
//validate login button click
async clickLoginButton() {
  await this.validateLoginButton();
  const loginButton = this.page.locator('button', { hasText: 'Login' });
  await loginButton.click();
}

        async validateWelcomBackPage(){
    const welcomeBackHeading = this.page.locator('h1', { hasText: 'Welcome back'})
    await expect(welcomeBackHeading).toBeVisible({ timeout: 5000 });
        
 } 
 async clickCheckYourRiskButton() {
  const button = this.page.locator('button', { hasText: 'Check Your Risk' });
  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
  await button.click();
}

async validateAssessmentModal() {
  // Locate the modal
  const modal = this.page.locator('div[role="dialog"]');
  // await expect(modal).toBeVisible({ timeout: 5000 });

  await modal.waitFor({ state: 'visible', timeout: 10000 });
await expect(modal).toBeVisible();
  // Validate the heading inside the modal
  const modalHeading = modal.locator('h2', { hasText: 'Diabetes Risk Analyzer' });
  await expect(modalHeading).toBeVisible({ timeout: 5000 });
}

 ////////////////////////////////Non-Functional Validations ////////////////////////

async validatePageLoadTime(maxTimeSec) {
  const startTime = Date.now();
  // Wait for page to be fully ready instead of navigating again
  await this.page.waitForLoadState('load');
  const loadTimeMs = Date.now() - startTime;
  console.log(`Page load time: ${loadTimeMs} ms`);
  if (loadTimeMs > maxTimeSec * 1000) {
    throw new Error(`Page load exceeded ${maxTimeSec} seconds`);
  }
}

//

async validateNoHorizontalScroll() {
  const hasHorizontalScroll = await this.page.evaluate(() => {
    return document.documentElement.scrollWidth > document.documentElement.clientWidth;
  });

  if (hasHorizontalScroll) {
    throw new Error('Horizontal scrolling detected on homepage');
  }
}

async validateAccessibility() {
  // Images must have alt text
  const imagesWithoutAlt = await this.page.locator('img:not([alt])').count();
  if (imagesWithoutAlt > 0) {
    throw new Error(`Found ${imagesWithoutAlt} images without alt text`);
  }

  // Inputs must have labels or aria-label
  const inputsWithoutLabel = await this.page.evaluate(() => {
    const inputs = Array.from(document.querySelectorAll('input'));
    return inputs.filter(input =>
      !input.labels?.length &&
      !input.getAttribute('aria-label') &&
      !input.getAttribute('aria-labelledby')
    ).length;
  });

  if (inputsWithoutLabel > 0) {
    throw new Error(`Found ${inputsWithoutLabel} inputs without accessible labels`);
  }
}

async validateStickyNavbar() {
  // Find the topmost visible header-like element
  const header = this.page.locator(
    'header, [role="navigation"], div:has(button:has-text("Login"))'
  ).first();

  // Wait only for DOM presence
  await header.waitFor({ state: 'attached', timeout: 10000 });

  // Get initial position
  const initialBox = await header.boundingBox();
  if (!initialBox) {
    throw new Error('Sticky header not rendered');
  }

  // Scroll down
  await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await this.page.waitForTimeout(300);

  // Get position after scroll
  const afterScrollBox = await header.boundingBox();
  if (!afterScrollBox) {
    throw new Error('Sticky header disappeared after scrolling');
  }

  // Header must stay at top of viewport
  if (afterScrollBox.y > initialBox.y + 5) {
    throw new Error('Header is not sticky and moved out of view');
  }
}

    async validatehomepageHeading() {
        await expect(this.headingText).toBeVisible();
    }

    async validateSubText() {
        await expect(this.subText).toBeVisible();
    }

    async validateSectionSubText() {
        await expect(this.sectionSubText).toBeVisible();
    }
}

