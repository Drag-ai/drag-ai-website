# plan.md — Drag AI Premium Website (Next.js + Tailwind + Cloudflare Workers)

## 1) Objectives
- Ship a premium, trust-first marketing site for Drag AI (light theme) that converts via **“Book a discovery call”**.
- Establish credibility without fake clients/metrics through clear positioning, strong UX, and high-quality execution.
- Maintain the current **Purple + Pink** premium theme and neural-network background animation.
- Ensure the site remains fast, accessible, SEO-ready, and deployable on **Cloudflare Workers**.
- Deliver a complete marketing site with core pages **plus Careers**, fully integrated into navigation.

## 2) Implementation Steps

### Phase 1 — Core Flow POC (Contact Form on Cloudflare)
**Goal:** Prove the only failure-prone “core” works end-to-end: form → submission handler → success/error UX.

**Current status:** **DONE (via Web3Forms client-side integration)**
- Contact form is implemented using Web3Forms (`https://api.web3forms.com/submit`) and is working in the SPA.
- Privacy/Terms pages exist and can be referenced before submission.

**User stories**
1. As a prospect, I can submit a discovery request and see a clear success confirmation.
2. As a prospect, I get actionable validation errors if I miss required fields.
3. As a prospect, I know where my message goes (info@drag-ai.com) without false promises.
4. As the team, we can receive messages reliably.
5. As a privacy-conscious user, I can access Privacy/Terms before submitting.

**Steps (original target for Next.js/Workers; revise if migrating)**
- Decide delivery approach for Cloudflare runtime:
  - Preferred: email provider HTTP API (Workers-compatible).
  - Current MVP: Web3Forms client-side submission (already implemented).
- If migrating to Next.js on Workers:
  - Implement route handler with schema validation (zod), rate limiting, honeypot, and explicit responses.
  - Verify in local dev + deploy preview on Cloudflare Workers.

**Exit criteria**
- Contact submissions succeed with deterministic success/error UX in the deployed environment.

---

### Phase 2 — V1 App Development (Design System + All Pages)
**Goal:** Build the full multi-page site around the proven contact flow; minimal, premium, futuristic-light aesthetic.

**Current status:** **DONE (implemented as a React SPA)**
- Pages implemented: **Home, About, Services, Industries, Contact, Privacy Policy, Terms**.
- Global UI includes sticky Navbar, Footer, CTA to Contact, custom SVG logo.
- Global neural network background animation (tsParticles) across pages.

**User stories**
1. As a visitor, I immediately understand Drag AI (agentic systems + production-grade delivery) from the hero.
2. As a buyer, I can scan services and quickly know when each applies + expected impact.
3. As a buyer, I can see industries you focus on without assuming prior clients.
4. As a visitor, I can evaluate credibility with clear messaging and consistent design.
5. As a prospect, I can reach the discovery call form from any page within 1 click.

**Steps**
- (Completed) Build core pages and navigation.
- (Completed) Ensure consistent design system components (Button, Card, Badge, etc.) and theme consistency.
- (Completed) Run end-to-end UI review and fix page issues/regressions.

**Exit criteria**
- All pages complete, consistent visual system, contact flow works.

---

### Phase 2.5 — Careers Page (Company Hiring)
**Goal:** Add a premium Careers page integrated into site navigation, aligned with existing theme and credibility standards.

**Current status:** **DONE + TESTED**
- **Careers page created** at `/careers` with:
  - Hero section and positioning
  - Benefits section
  - Company values section
  - Open roles with requirements
  - CTAs linking to Contact (“Apply Now” / “Get in Touch”)
- **Navigation integration complete**:
  - Route added in `App.js`
  - Navbar link added
  - Footer link added (Company section)
- **Testing passed (screenshot tool)**:
  - Careers renders correctly
  - Navbar link routes correctly
  - Footer link routes correctly

**Exit criteria**
- Careers page reachable and consistent with site UX; navigation verified.

---

### Phase 3 — Animations, Micro-interactions, Polish
**Goal:** Add premium motion without harming performance; respect reduced motion.

**Current status:** **PARTIALLY DONE**
- Neural background animation is implemented globally.

**User stories**
1. As a visitor, I feel subtle technical sophistication via background motion that doesn’t distract.
2. As a motion-sensitive user, animations reduce/disable automatically.
3. As a mobile user, interactions remain smooth and battery-friendly.
4. As a visitor, hover/focus states make the UI feel responsive and premium.
5. As a buyer, section reveals help me scan content without losing context.

**Steps**
- Ensure `prefers-reduced-motion` support across animations.
- Review performance on mid-range mobile; throttle/optimize particles if needed.
- Add/verify subtle hover/focus micro-interactions for cards/buttons.
- Accessibility pass: focus rings, contrast checks, keyboard nav, semantic headings.
- Testing pass: motion on/off, mobile perf, Lighthouse spot-check.

**Exit criteria**
- Motion feels premium, no jank; accessibility and performance remain strong.

---

### Phase 4 — SEO, Reliability, Final QA
**Goal:** Ensure discoverability and production readiness.

**Current status:** **PARTIALLY DONE**
- SEO artifacts exist in `/public` (sitemap, robots.txt). Further per-page metadata work may be needed depending on SPA vs Next.js.

**User stories**
1. As a search engine, I can index each page with correct metadata.
2. As a visitor, pages load fast and look correct across devices.
3. As a prospect, the site feels trustworthy (no broken links, no placeholder copy).
4. As the team, deployments are repeatable with environment variables documented.
5. As a legal-conscious visitor, I can access Privacy/Terms easily.

**Steps**
- Add/verify per-page metadata strategy:
  - SPA approach: `react-helmet-async` (if needed) + ensure sitemap matches routes.
  - Next.js approach: App Router metadata exports.
- Verify canonical URLs, Open Graph fields.
- Add structured data (Organization + WebSite) with honest fields.
- Comprehensive QA: responsive, cross-browser, 404 handling, form UX.

**Exit criteria**
- Lighthouse targets met, SEO artifacts present, stable deploy, no broken UX.

---

### Phase 5 — Cloudflare Deployment Alignment (Workers/Pages)
**Goal:** Close the gap between the originally requested stack (Next.js App Router + TS + Cloudflare Workers) and the current implementation (React SPA).

**Current status:** **NOT STARTED (decision needed)**

**Steps**
- Confirm desired deployment target:
  - **Option A (keep SPA):** Deploy to Cloudflare Pages (recommended for SPA static hosting) + document build settings.
  - **Option B (migrate to Next.js):** Rebuild using Next.js App Router + TypeScript + Tailwind and deploy to Cloudflare Workers/Pages (larger refactor).
- Add deployment documentation:
  - Build command, output directory, environment variables (Web3Forms key), and routing configuration.

**Exit criteria**
- Clear, repeatable Cloudflare deployment path matching user preference.

## 3) Next Actions
1. **Confirm Cloudflare target**: keep React SPA and deploy via Cloudflare Pages, or migrate to Next.js App Router + TS for Workers.
2. If staying SPA: add Cloudflare Pages deployment docs/config and confirm SPA routing works (redirects to `index.html`).
3. If migrating to Next.js: define migration plan (routes, components, tsParticles integration, Web3Forms, metadata).
4. Run a final QA pass across all pages including **Careers** (desktop + mobile).

## 4) Success Criteria
- Conversion: primary CTA visible above the fold on Home; 1-click access site-wide.
- Trust: no fake logos/testimonials/metrics; messaging is crisp and engineering-led.
- Performance: fast loads, lightweight animation, strong Core Web Vitals.
- Accessibility: keyboard navigable, semantic structure, reduced-motion support.
- Reliability: contact form works with clear success/error handling.
- SEO: per-page metadata strategy, sitemap, robots.txt, structured data.
- Completeness: all required pages including **Careers** are present and integrated into navigation.
