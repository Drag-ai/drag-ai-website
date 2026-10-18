const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('@playwright/test');
const axePath = require.resolve('axe-core/axe.min.js');

const baseUrl = process.env.ACCESSIBILITY_AUDIT_BASE_URL || 'http://127.0.0.1:8788';
const outputDir = path.resolve(__dirname, '../ui-audit/2026-10-18');
const routes = [
  '/', '/products', '/contact', '/services', '/industries', '/how-we-work',
  '/case-studies', '/resources', '/insights', '/about', '/careers', '/chat-demo/',
];
const viewports = [390, 1440];

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { configurable: true, get: () => undefined });
  });

  const results = [];
  for (const route of routes) {
    for (const width of viewports) {
      await page.setViewportSize({ width, height: width < 768 ? 844 : 1000 });
      await page.goto(new URL(route, baseUrl).toString(), { waitUntil: 'domcontentloaded' });
      const heading = route.startsWith('/chat-demo/') ? '#product-title' : '#main-content h1';
      await page.locator(heading).first().waitFor({ state: 'visible' });
      await page.addScriptTag({ path: axePath });
      const result = await page.evaluate(async () => window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] },
      }));
      results.push({
        route,
        viewport: width,
        violations: result.violations.map((issue) => ({
          id: issue.id,
          impact: issue.impact,
          help: issue.help,
          nodes: issue.nodes.map((node) => ({
            target: node.target,
            summary: node.failureSummary,
          })),
        })),
        incomplete: result.incomplete.map(({ id, impact, help }) => ({ id, impact, help })),
      });
    }
  }
  await browser.close();

  const violations = results.flatMap((result) => result.violations.map((issue) => ({ route: result.route, viewport: result.viewport, ...issue })));
  const incompleteContrast = results.filter((result) => result.incomplete.some((item) => item.id === 'color-contrast'))
    .map((result) => `${result.route} at ${result.viewport}px`);
  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    routes,
    viewports,
    violationCount: violations.length,
    results,
    manualContrast: {
      accentPurple: { hex: '#662AF4', onOffWhite: '6.26:1', onWhite: '6.56:1', whiteTextOnPurple: '6.56:1' },
      accentPink: { hex: '#EC4699', onOffWhite: '3.39:1', use: 'large gradient headings only (at least 24px or 18.66px bold)' },
      wordmarkGradient: { endpointHex: '#D01673', minimumRatioOnOffWhite: '4.95:1', use: '20px semibold navbar wordmark' },
      gradientReview: 'The sRGB purple-to-pink text gradient was sampled across its full ramp against #F7FAFC. The bright pink endpoint is kept for large headings; the navbar wordmark uses a deeper endpoint that passes normal-text contrast.',
      mutedForeground: { hex: '#4B5768', onOffWhite: '7.01:1' },
      processStepNumbers: 'Changed to solid accent purple because white 18px bold numbers over the pink end of the gradient fell below 4.5:1.',
      caveat: 'Axe marks some gradient and image backgrounds incomplete; their rendered endpoint colors were checked with the listed WCAG contrast ratios.',
    },
  };
  fs.writeFileSync(path.join(outputDir, 'accessibility-report.json'), JSON.stringify(report, null, 2));
  const lines = [
    '# Drag AI accessibility review',
    '',
    `Generated ${report.generatedAt} against ${baseUrl}.`,
    '',
    `- Pages and viewports: ${routes.length} routes at ${viewports.join(' px and ')} px`,
    `- Axe WCAG 2.0, 2.1, and 2.2 A/AA violations: ${violations.length}`,
    `- Gradient contrast review incomplete in axe at: ${incompleteContrast.length ? incompleteContrast.join(', ') : 'none'}`,
    `- Manual branded color ratios: purple/#F7FAFC 6.26:1, bright pink/#F7FAFC 3.39:1, wordmark gradient minimum 4.95:1, muted text/off-white 7.01:1.`,
    '- Bright pink is limited to large display headings; the 20px semibold navbar wordmark uses a deeper pink endpoint. Process-step numbers use solid purple.',
    '',
    'See `accessibility-report.json` for rule details and nodes.',
    '',
  ];
  fs.writeFileSync(path.join(outputDir, 'accessibility-report.md'), lines.join('\n'));
  console.log(JSON.stringify({
    routeViewportCount: results.length,
    violationCount: violations.length,
    incompleteContrast,
    violations,
    outputDir,
  }, null, 2));
  if (violations.length) process.exitCode = 1;
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
