const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');
const { chromium } = require('@playwright/test');

const baseUrl = process.env.PERFORMANCE_AUDIT_BASE_URL || 'http://127.0.0.1:8788';
const outputDir = path.resolve(__dirname, '../ui-audit/2026-10-18');
const routes = ['/', '/products', '/contact'];
const viewports = [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'mobile', width: 390, height: 844 },
];

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await chromium.launch({ headless: true });

  const results = [];
  for (const route of routes) {
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height } });
      const page = await context.newPage();
      await page.emulateMedia({ reducedMotion: 'reduce' });
      await page.addInitScript(() => {
        window.__labVitals = { lcp: null, cls: 0, lcpSize: 0 };
        try {
          new PerformanceObserver((list) => {
            const entry = list.getEntries().at(-1);
            if (entry) window.__labVitals = { ...window.__labVitals, lcp: entry.startTime, lcpSize: entry.size };
          }).observe({ type: 'largest-contentful-paint', buffered: true });
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (!entry.hadRecentInput) window.__labVitals.cls += entry.value;
            }
          }).observe({ type: 'layout-shift', buffered: true });
        } catch { /* Browser does not expose a metric observer. */ }
        Object.defineProperty(navigator, 'webdriver', { configurable: true, get: () => undefined });
      });
      await page.setViewportSize(viewport);
      await page.goto(new URL(route, baseUrl).toString(), { waitUntil: 'domcontentloaded' });
      await page.locator('#main-content h1').first().waitFor({ state: 'visible' });
      await page.waitForTimeout(2500);
      results.push(await page.evaluate(({ routeName, viewportName }) => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const resources = performance.getEntriesByType('resource');
        return {
          route: routeName,
          viewport: viewportName,
          viewportWidth: window.innerWidth,
          lcpMs: window.__labVitals.lcp === null ? null : Math.round(window.__labVitals.lcp),
          lcpElementSize: window.__labVitals.lcpSize,
          cls: Number(window.__labVitals.cls.toFixed(4)),
          ttfbMs: Math.round(navigation.responseStart - navigation.requestStart),
          domContentLoadedMs: Math.round(navigation.domContentLoadedEventEnd),
          loadMs: Math.round(navigation.loadEventEnd),
          sameOriginResourceTransferBytes: resources
            .filter((entry) => new URL(entry.name).origin === location.origin)
            .reduce((total, entry) => total + entry.transferSize, 0),
          sameOriginRequests: resources.filter((entry) => new URL(entry.name).origin === location.origin).length,
        };
      }, { routeName: route, viewportName: viewport.name }));
      await context.close();
    }
  }
  await browser.close();

  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl,
    type: 'Local Chromium lab measurements; not field/RUM data.',
    bundleGzipKiB: Object.fromEntries(['js', 'css'].map((kind) => {
      const dir = path.resolve(__dirname, `../build/static/${kind}`);
      const asset = fs.readdirSync(dir).find((name) => name.startsWith('main.') && name.endsWith(`.${kind}`));
      const bytes = zlib.gzipSync(fs.readFileSync(path.join(dir, asset))).length;
      return [kind, Number((bytes / 1024).toFixed(2))];
    })),
    results,
  };
  fs.writeFileSync(path.join(outputDir, 'performance-report.json'), JSON.stringify(report, null, 2));
  const lines = [
    '# Drag AI performance checks',
    '',
    `Generated ${report.generatedAt} against ${baseUrl}. These are local Chromium lab measurements, not real-user data.`,
    '',
    '| Page | Viewport | LCP | CLS | TTFB | DOM ready | Load | Same-origin transfer |',
    '| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |',
    ...results.map((item) => `| ${item.route} | ${item.viewportWidth}px ${item.viewport} | ${item.lcpMs === null ? 'n/a' : `${item.lcpMs} ms`} | ${item.cls} | ${item.ttfbMs} ms | ${item.domContentLoadedMs} ms | ${item.loadMs} ms | ${Math.round(item.sameOriginResourceTransferBytes / 1024)} KiB |`),
    '',
    `Production bundle gzip sizes: ${report.bundleGzipKiB.js} KiB JavaScript and ${report.bundleGzipKiB.css} KiB CSS.`,
    '',
  ];
  fs.writeFileSync(path.join(outputDir, 'performance-report.md'), lines.join('\n'));
  console.log(JSON.stringify(report, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
