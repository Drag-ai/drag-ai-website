const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('@playwright/test');
const { reactSnap } = require('../package.json');

const baseUrl = process.env.VISUAL_AUDIT_BASE_URL || 'http://127.0.0.1:8788';
const outputDir = path.resolve(__dirname, '../ui-audit/2026-10-18');
const screenshotsDir = path.join(outputDir, 'after');
const widths = [360, 390, 768, 1024, 1440, 1920];
const importantRoutes = [
  '/', '/products', '/contact', '/services', '/industries', '/how-we-work',
  '/case-studies', '/resources', '/insights', '/about', '/careers',
  '/resources/what-is-an-ai-agent-for-business', '/privacy',
];
const standaloneRoutes = ['/chat-demo/'];

const ensureDir = (dir) => fs.mkdirSync(dir, { recursive: true });
const slug = (route) => (route === '/' ? 'home' : route.replace(/^\//, '').replace(/\/$/, '').replaceAll('/', '-'));

async function main() {
  ensureDir(screenshotsDir);
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { configurable: true, get: () => undefined });
  });

  const pageErrors = [];
  const consoleErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push({ route: new URL(page.url()).pathname, message: message.text() });
  });

  const routeMetrics = [];
  for (const route of reactSnap.include) {
    await page.setViewportSize({ width: 1440, height: 1000 });
    const response = await page.goto(new URL(route, baseUrl).toString(), { waitUntil: 'domcontentloaded' });
    await page.locator('#main-content h1').first().waitFor({ state: 'visible' });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(180);
    const heading = (await page.locator('#main-content h1').first().innerText()).trim();
    const layouts = [];

    for (const width of widths) {
      await page.setViewportSize({ width, height: width < 768 ? 844 : 1000 });
      await page.waitForTimeout(70);
      const layout = await page.evaluate(() => ({
        viewport: window.innerWidth,
        document: document.documentElement.scrollWidth,
        body: document.body.scrollWidth,
        pageHeight: document.documentElement.scrollHeight,
      }));
      layouts.push({ width, ...layout, hasHorizontalOverflow: Math.max(layout.document, layout.body) > width + 1 });
    }

    if (importantRoutes.includes(route)) {
      const name = slug(route);
      for (const { width, height } of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
        await page.setViewportSize({ width, height });
        await page.waitForTimeout(100);
        await page.screenshot({
          path: path.join(screenshotsDir, `${name}-${width}-viewport.png`),
          animations: 'disabled',
        });
        await page.screenshot({
          path: path.join(screenshotsDir, `${name}-${width}.png`),
          fullPage: true,
          animations: 'disabled',
        });
      }
    }

    routeMetrics.push({ route, status: response?.status() ?? null, heading, layouts });
  }

  for (const route of standaloneRoutes) {
    const response = await page.goto(new URL(route, baseUrl).toString(), { waitUntil: 'domcontentloaded' });
    await page.locator('#product-title').waitFor({ state: 'visible' });
    const heading = await page.locator('#product-title').innerText();
    const layouts = [];
    for (const width of widths) {
      const height = width < 768 ? 844 : 1000;
      await page.setViewportSize({ width, height });
      await page.waitForTimeout(70);
      const layout = await page.evaluate(() => ({
        viewport: window.innerWidth,
        document: document.documentElement.scrollWidth,
        body: document.body.scrollWidth,
        pageHeight: document.documentElement.scrollHeight,
      }));
      layouts.push({ width, ...layout, hasHorizontalOverflow: Math.max(layout.document, layout.body) > width + 1 });
      if (width === 1440 || width === 390) {
        const name = slug(route);
        await page.screenshot({ path: path.join(screenshotsDir, `${name}-${width}-viewport.png`), animations: 'disabled' });
        await page.screenshot({ path: path.join(screenshotsDir, `${name}-${width}.png`), fullPage: true, animations: 'disabled' });
      }
    }
    routeMetrics.push({ route, status: response?.status() ?? null, heading, layouts });
  }

  await browser.close();
  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    routeCount: routeMetrics.length,
    viewportWidths: widths,
    screenshotRoutes: [...importantRoutes, ...standaloneRoutes],
    routes: routeMetrics,
    pageErrors,
    consoleErrors,
  };
  fs.writeFileSync(path.join(outputDir, 'visual-report.json'), JSON.stringify(report, null, 2));

  const overflowCount = routeMetrics.flatMap((page) => page.layouts
    .filter((layout) => layout.hasHorizontalOverflow)
    .map((layout) => `${page.route} at ${layout.width}px`)).length;
  const failedRoutes = routeMetrics.filter((page) => page.status !== 200);
  const lines = [
    '# Drag AI visual audit',
    '',
    `Generated ${report.generatedAt} against ${baseUrl}.`,
    '',
    `- Configured routes reviewed: ${reactSnap.include.length}; standalone routes reviewed: ${standaloneRoutes.length}`,
    `- Layout widths checked per route: ${widths.join(', ')} px` ,
    `- Screenshot pages: ${importantRoutes.length} app pages plus ${standaloneRoutes.length} standalone page, with full-page and viewport captures at 1440 px and 390 px`,
    `- Non-200 routes: ${failedRoutes.length}`,
    `- Horizontal overflow cases: ${overflowCount}`,
    `- Uncaught page errors: ${pageErrors.length}`,
    `- Browser console errors: ${consoleErrors.length}`,
    '',
    'Screenshots are in `after/`; previous-pass baseline screenshots are in `before/`.',
    'The before captures predate this pass and some below-fold reveal sections were not scrolled into view, so compare above-fold composition directly and treat full-page changes as directional.',
    '',
  ];
  fs.writeFileSync(path.join(outputDir, 'visual-report.md'), lines.join('\n'));
  console.log(JSON.stringify({
    routeCount: routeMetrics.length,
    failedRoutes,
    overflowCount,
    pageErrors,
    consoleErrors: consoleErrors.slice(0, 20),
    outputDir,
  }, null, 2));
  if (failedRoutes.length || overflowCount || pageErrors.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
