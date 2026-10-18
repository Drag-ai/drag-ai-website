const { test, expect } = require('@playwright/test');
const { reactSnap } = require('../../package.json');

const withStableMotion = async (page) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { configurable: true, get: () => undefined });
  });
};
const gotoApp = (page, route) => page.goto(route, { waitUntil: 'domcontentloaded' });

test('all configured prerender routes render at each supported layout width', async ({ page }) => {
  await withStableMotion(page);
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  const widths = [360, 390, 768, 1024, 1440, 1920];

  for (const route of reactSnap.include) {
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('#main-content h1').first(), `${route} should expose a page heading`).toBeVisible();
    for (const width of widths) {
      await page.setViewportSize({ width, height: width < 768 ? 844 : 900 });
      const metrics = await page.evaluate(() => ({
        viewportWidth: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
        bodyWidth: document.body.scrollWidth,
      }));
      expect(Math.max(metrics.documentWidth, metrics.bodyWidth), `${route} overflows at ${width}px`).toBeLessThanOrEqual(width + 1);
    }
  }
  expect(errors, 'routes should not throw browser runtime errors').toEqual([]);
});

test('skip navigation and the mobile menu work with keyboard and pointer input', async ({ page }) => {
  await withStableMotion(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await gotoApp(page, '/');

  await page.keyboard.press('Tab');
  const skipLink = page.getByRole('link', { name: 'Skip to main content' });
  await expect(skipLink).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();

  await page.getByRole('button', { name: 'Open navigation menu' }).click();
  const menu = page.getByRole('dialog');
  await expect(menu).toBeVisible();
  await menu.getByRole('link', { name: 'Contact' }).click();
  await expect(page).toHaveURL(/\/contact$/);
  await expect(menu).toBeHidden();
});

test('contact form blocks incomplete input and confirms a mocked successful response', async ({ page }) => {
  await withStableMotion(page);
  let requestCount = 0;
  await page.route('https://api.web3forms.com/submit', async (route) => {
    requestCount += 1;
    await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ success: true }) });
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await gotoApp(page, '/contact');

  const form = page.getByTestId('contact-form');
  await page.getByTestId('contact-form-submit-button').click();
  expect(await form.evaluate((node) => node.checkValidity())).toBe(false);
  expect(requestCount).toBe(0);

  await page.getByTestId('contact-form-name-input').fill('Taylor Example');
  await page.getByTestId('contact-form-company-input').fill('Example Studio');
  await page.getByTestId('contact-form-automation-textarea').fill('Route support inquiries to the right team.');
  const email = page.getByTestId('contact-form-email-input');
  await email.fill('not-an-email');
  expect(await email.evaluate((node) => node.checkValidity())).toBe(false);
  expect(requestCount).toBe(0);
  await email.fill('taylor@example.com');
  await page.getByTestId('contact-form-consent-checkbox').check();
  await page.getByTestId('contact-form-submit-button').click();

  await expect(page.getByTestId('contact-form-success-message')).toBeVisible();
  await expect(page.getByText('Drag AI will review your workflow and contact you soon.')).toBeVisible();
  expect(requestCount).toBe(1);
});

test('contact form communicates a mocked provider failure', async ({ page }) => {
  await withStableMotion(page);
  await page.route('https://api.web3forms.com/submit', (route) => route.fulfill({
    status: 502,
    contentType: 'application/json',
    body: JSON.stringify({ success: false }),
  }));
  await gotoApp(page, '/contact');
  await page.getByTestId('contact-form-name-input').fill('Taylor Example');
  await page.getByTestId('contact-form-company-input').fill('Example Studio');
  await page.getByTestId('contact-form-email-input').fill('taylor@example.com');
  await page.getByTestId('contact-form-automation-textarea').fill('Route support inquiries to the right team.');
  await page.getByTestId('contact-form-consent-checkbox').check();
  await page.getByTestId('contact-form-submit-button').click();

  await expect(page.getByText(/Failed to send\. Please try again or email us/)).toBeVisible();
  await expect(page.getByTestId('contact-form-success-message')).toHaveCount(0);
});

test('pricing toggle updates annual and monthly product amounts', async ({ page }) => {
  await withStableMotion(page);
  await gotoApp(page, '/products');
  await page.getByRole('button', { name: 'Annual', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Annual', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByTestId('pricing-voice-annual')).toContainText('$990');
  await expect(page.getByTestId('pricing-chat-annual')).toContainText('$290');

  await page.getByRole('button', { name: 'Monthly', exact: true }).click();
  await expect(page.getByTestId('pricing-voice-monthly')).toContainText('$99');
  await expect(page.getByTestId('pricing-chat-monthly')).toContainText('$29');
});

test('chat demo template switching resets the welcome and sample prompts', async ({ page }) => {
  await withStableMotion(page);
  await page.route('**/api/chat', async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    await route.fulfill({
      status: 503,
      contentType: 'application/json',
      body: JSON.stringify({ message: 'The chat demo is not configured yet.' }),
    });
  });
  await gotoApp(page, '/products');
  const demo = page.frameLocator('iframe[title="Try the Drag Chat interactive demo"]');
  const template = demo.locator('#template-select');
  await expect(template).toHaveValue('general');
  await template.selectOption('customer_support');
  await expect(demo.locator('#template-name')).toHaveText('Customer support');
  await expect(demo.locator('#messages')).toContainText('Hi, I’m here to help. What do you need a hand with?');
  await expect(demo.locator('#prompt-row')).toContainText('I need help with a recent order.');
  await demo.locator('#prompt-row').getByRole('button', { name: 'I need help with a recent order.' }).click();
  await expect(demo.locator('#message-input')).toBeDisabled();
  await expect(demo.locator('#messages')).toContainText('The chat demo is not configured yet.');
  await expect(demo.locator('#message-input')).toBeEnabled();
});

test('voice call interface uses mocked availability and call controls only', async ({ page }) => {
  await withStableMotion(page);
  const fakeCallSid = `CA${'d'.repeat(32)}`;
  await page.route('**/api/voice-demo-call', async (route) => {
    if (route.request().method() === 'GET') {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ available: true }) });
      return;
    }
    const { accessCode } = route.request().postDataJSON();
    if (accessCode === 'bad-code') {
      await route.fulfill({
        status: 401,
        contentType: 'application/json',
        body: JSON.stringify({ message: 'That access code is invalid or has expired.' }),
      });
      return;
    }
    await route.fulfill({
      status: 202,
      contentType: 'application/json',
      body: JSON.stringify({ callSid: fakeCallSid, message: 'Mock Twilio accepted the request.' }),
    });
  });
  await page.route('**/api/voice-demo-call-control', async (route) => {
    const { action } = route.request().postDataJSON();
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(action === 'status'
        ? { status: 'in-progress', active: true }
        : { status: 'completed', active: false, message: 'The mock call has ended.' }),
    });
  });
  await gotoApp(page, '/products');

  await page.getByLabel('Temporary demo access code').fill('bad-code');
  await page.getByRole('button', { name: 'Call my demo phone' }).click();
  await expect(page.getByRole('status')).toContainText('That access code is invalid or has expired.');

  await page.getByLabel('Temporary demo access code').fill('local-demo-code');
  await page.getByRole('button', { name: 'Call my demo phone' }).click();
  await expect(page.getByRole('status')).toContainText('The call is connected.');
  await page.getByRole('button', { name: 'End call' }).click();
  await expect(page.getByText('The mock call has ended.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Call my demo phone' })).toBeVisible();
});
