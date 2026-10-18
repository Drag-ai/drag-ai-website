# Drag AI final UI and production verification

This folder contains the final browser review artifacts from October 18, 2026.

## Screenshots

- `before/` contains baseline captures from the prior audit pass.
- `after/` contains final desktop (1440px) and mobile (390px) viewport and full-page captures for the homepage, Products, Contact, Services, Industries, How We Work, Case Studies, Resources, Insights, About, Careers, a resource article, Privacy, and the standalone Chat demo.
- Compare `before/baseline-home-1440-viewport.png` with `after/home-1440-viewport.png`, and `before/baseline-products-1440-full.png` with `after/products-1440.png`. Earlier full-page captures did not scroll reveal sections into view, so above-fold comparisons are the most reliable.

## Reports

- `visual-report.md` / `.json`: all 35 configured prerender routes plus `/chat-demo/` checked at 360, 390, 768, 1024, 1440, and 1920px. No failed routes, horizontal overflow, uncaught page errors, or browser console errors.
- `accessibility-report.md` / `.json`: axe WCAG 2.0, 2.1, and 2.2 A/AA review of 12 important routes at 390px and 1440px, plus manual checks of text over brand gradients. Zero axe violations.
- `performance-report.md` / `.json`: local Chromium lab measurements of Home, Products, and Contact at 390px and 1440px. These are not field/RUM measurements.

## Verification performed

- Production build: successful; React Snap generated all 35 configured routes.
- Jest: 2 suites, 9 tests passed.
- Playwright: 7 tests passed, including all configured routes at six widths and mocked form, pricing, chat, and voice interactions.
- Cloudflare Pages Functions: local Wrangler exercised. With no local provider credentials, availability returned `false` and protected endpoints returned their expected 503 configuration responses; cross-origin chat POST returned 403. Function success paths were covered with mocked D1, OpenAI, and Twilio responses in Jest and with browser route mocks.
- No real email, phone call, or paid provider request was made.

## Known environment warnings

- React Snap intentionally blocks third-party requests during prerendering; blocked font/resource requests log `ERR_FAILED` while all 35 routes still render. Fonts may use their configured system fallbacks during prerender.
- Chromium warns that the same-origin chat iframe grants both `allow-scripts` and `allow-same-origin`. The demo requires same-origin access to its Pages Function endpoint; do not treat this warning as a runtime console error. E2E also reports CRA/Webpack dev-server option deprecations, which come from the existing development stack.
