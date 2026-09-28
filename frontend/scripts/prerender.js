#!/usr/bin/env node
/**
 * Wrapper around react-snap that supplies a serverless-friendly Chromium
 * binary (@sparticuz/chromium) on Linux build hosts that lack the desktop
 * libraries (X11, GTK, ...) Puppeteer's default downloaded Chrome needs.
 *
 * Falls back to react-snap's normal (Puppeteer-managed) Chromium on any
 * other platform, or if @sparticuz/chromium can't be resolved. Any failure
 * here exits 0 so a broken prerender never blocks the site build/deploy.
 */

const url = require('url');
const { run } = require('react-snap');
const pkg = require(`${process.cwd()}/package.json`);

const { reactSnap = {}, homepage } = pkg;
const publicUrl = process.env.PUBLIC_URL || homepage;

const resolveServerlessChromium = async () => {
  if (process.platform !== 'linux') return null;
  try {
    const { default: chromium } = await import('@sparticuz/chromium');
    const executablePath = await chromium.executablePath();
    return { executablePath, args: chromium.args };
  } catch (err) {
    console.warn(
      `[prerender] @sparticuz/chromium unavailable (${err.message}); falling back to react-snap's default Chromium.`,
    );
    return null;
  }
};

(async () => {
  const serverless = await resolveServerlessChromium();

  const options = {
    publicPath: publicUrl ? url.parse(publicUrl).pathname : '/',
    ...reactSnap,
  };

  if (serverless) {
    options.puppeteerExecutablePath = serverless.executablePath;
    options.puppeteerArgs = [...(reactSnap.puppeteerArgs || []), ...serverless.args];
    console.log(`[prerender] using @sparticuz/chromium at ${serverless.executablePath}`);
  }

  try {
    await run(options);
    console.log('[prerender] done');
  } catch (err) {
    console.warn(
      '[prerender] prerendering failed, shipping the client-rendered build instead:',
      (err && err.message) || err,
    );
    process.exit(0);
  }
})().catch((err) => {
  console.warn(
    '[prerender] unexpected error, shipping the client-rendered build instead:',
    (err && err.message) || err,
  );
  process.exit(0);
});
