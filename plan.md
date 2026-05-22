# plan.md — Drag AI Premium Website (React SPA + Tailwind + shadcn/ui)

## 1) Objectives
- Update and improve the Drag AI website to reflect UK incorporation as **DRAG AI LIMITED**.
- Make the site more **credible, professional, legally complete, SEO-friendly, and conversion-focused**.
- Maintain the current premium futuristic aesthetic (**Purple + Pink** theme + neural-network background via `tsParticles`).
- Ensure primary CTA is consistent site-wide:
  - **“Book a 30-minute AI Discovery Call”** → `/contact#ai-discovery-call`
  - Implementation must be easy to swap later to an external booking link (e.g., Calendly) by changing a central href constant.
- Implement UK legal/compliance content using **public company details only**:
  - **DRAG AI LIMITED**
  - **Company Number:** 17222197
  - **Registered in England and Wales**
  - **Registered Office:** 128 City Road, London, EC1V 2NX, United Kingdom
- Ensure required pages exist and are discoverable:
  - Core marketing: Home, Services, Solutions, Industries, How We Work, About, Insights, Contact
  - Legal: Company Information, Privacy Policy, Cookie Policy, Terms of Use
- Implement comprehensive SEO:
  - per-page meta tags, canonical URLs
  - Open Graph + Twitter tags
  - JSON-LD structured data (Organization, WebSite, Breadcrumb)
  - sitemap.xml + robots.txt
- Validate stability continuously: **run `yarn build` after each phase**.
- **Strict legal constraint:** NEVER publish private/residential addresses, DOBs, shareholder docs, or internal registers.

**Current status:** All phases completed ✅. Frontend build is green, lint is clean, regression tests passed, and backend smoke tests passed.

---

## 2) Implementation Steps

### Phase 1 — Build Fix (Sanitize broken JSX)
**Goal:** Restore a clean, compilable frontend before any content/SEO changes.

**Current status:** ✅ **COMPLETED**
- Fixed `HowWeWork.js` invalid escaped quotes (`\"` → `"`).
- Verified compile success.

**Exit criteria (met)**
- ✅ `yarn build` succeeds.

---

### Phase 2 — Navigation & Footer Overhaul + Legal Completeness
**Goal:** Ensure legal credibility and consistent IA (information architecture) across the site.

**Current status:** ✅ **COMPLETED**

**Delivered**
1. **Navbar overhaul**
   - IA: Home, Services, Solutions, Industries, How We Work, About, Insights, Contact.
   - Primary CTA in navbar: **Book a 30-Minute AI Discovery Call** → `/contact#ai-discovery-call`.
   - CTA target centralized for easy future swap.

2. **Footer overhaul**
   - Added public UK company block:
     - DRAG AI LIMITED, Company Number 17222197
     - Registered in England and Wales
     - Registered Office: 128 City Road, London, EC1V 2NX, United Kingdom
   - Added `info@drag-ai.com` contact link.
   - Added Explore + Company & Legal link columns.

3. **Legal pages updated / verified**
   - **Privacy Policy** rewritten for UK GDPR framing:
     - Data Controller section
     - lawful basis, retention, international transfers
     - rights + ICO complaint reference
   - **Terms of Use** rewritten:
     - England & Wales governing law and jurisdiction
   - **Company Information** updated:
     - removed unverified incorporation date
     - added Companies House link
   - **Cookie Policy** updated:
     - email changed to `info@drag-ai.com`
     - includes postal address line

**Exit criteria (met)**
- ✅ Navbar + Footer updated and consistent.
- ✅ Legal pages present, linked, and contain correct UK details.
- ✅ `yarn build` succeeds.

---

### Phase 3 — Core Page Content Updates (Conversion + Credibility)
**Goal:** Update primary pages to match positioning, credibility requirements, and conversion CTA.

**Current status:** ✅ **COMPLETED**

**Delivered**
1. **Home**
   - Standardized hero CTA to: **Book a 30-Minute AI Discovery Call** → `/contact#ai-discovery-call`.
   - Updated meta content (via `useSEO`) and JSON-LD WebPage.

2. **Services**
   - Added/expanded services to include:
     - Voice AI, Predictive Analytics, AI Strategy & Consulting
   - Replaced emoji icons with Lucide icons.
   - Standardized CTA.

3. **Industries**
   - Fixed copy issue/typo.
   - Standardized CTA.

4. **About**
   - Removed references to “Bengaluru, India” in company snapshot.
   - Added UK incorporation positioning (Registered in England & Wales / Company No.).
   - Standardized CTA.

5. **Contact**
   - Full rewrite:
     - new fields: Role/Title, Country, Area of Interest
     - consent checkbox (links to Privacy Policy)
     - standardized anchor: `#ai-discovery-call`
     - displays UK registered office
   - Web3Forms:
     - uses `REACT_APP_WEB3FORMS_ACCESS_KEY`
     - falls back to prior configured key if env var is missing

**Exit criteria (met)**
- ✅ Updated copy and CTAs on core pages.
- ✅ `/contact#ai-discovery-call` anchor exists and is the global CTA destination.
- ✅ Form is not blocked by missing key.
- ✅ `yarn build` succeeds.

---

### Phase 4 — Solutions, How We Work, Insights
**Goal:** Complete remaining required marketing pages and ensure consistent structure.

**Current status:** ✅ **COMPLETED**

**Delivered**
1. **Solutions**
   - Standardized CTAs to `/contact#ai-discovery-call`.

2. **How We Work**
   - Build fixed in Phase 1.
   - CTA standardized to `/contact#ai-discovery-call`.

3. **Insights**
   - Created dedicated `Insights.js` routed at `/insights`.
   - Includes placeholder “coming soon” article cards + POV tiles + CTA.
   - Kept `/resources` as a separate, still-useful methodology/examples page (not redirected), linked from Insights.

**Exit criteria (met)**
- ✅ `/insights` live and linked in nav.
- ✅ Solutions + How We Work aligned with CTA.
- ✅ `yarn build` succeeds.

---

### Phase 5 — Comprehensive SEO (Meta, OG, Structured Data, Sitemap)
**Goal:** Make the SPA SEO-ready with correct metadata, structured data, and indexing artifacts.

**Current status:** ✅ **COMPLETED**

**Delivered**
1. **Enhanced `useSEO` hook**
   - Supports:
     - canonical URLs
     - Open Graph + Twitter tags
     - robots meta (index/noindex)
     - optional JSON-LD injection
     - breadcrumb JSON-LD

2. **Global structured data (index.html)**
   - Replaced India-based structured data with:
     - `Organization` schema including UK public company details
     - `WebSite` schema
   - Added OG/Twitter default meta tags (overridden per-route by SPA runtime).

3. **Per-page structured data**
   - Added breadcrumb JSON-LD across key pages.
   - Added a ContactPage JSON-LD block for Contact.

4. **Sitemap & robots**
   - Updated `public/sitemap.xml` to include:
     - all core routes
     - legal routes
     - industry sub-pages
   - `public/robots.txt` references sitemap.

**Exit criteria (met)**
- ✅ SEO metadata applied per route via `useSEO`.
- ✅ Structured data present and aligned with UK incorporation.
- ✅ Sitemap includes current route list.
- ✅ `yarn build` succeeds.

---

### Phase 6 — CTA Standardization, Polish, and Final Validation
**Goal:** Final conversion polish + reliability.

**Current status:** ✅ **COMPLETED**

**Delivered**
1. **CTA standardization**
   - Primary CTA standardized site-wide.
   - Navbar/Footer CTA href centralized for future swap.

2. **Validation**
   - `yarn build` confirmed successful after each phase.
   - Lint checks clean.
   - Manual smoke validation via screenshots and navigation checks.
   - Automated regression testing performed (100% pass).

**Exit criteria (met)**
- ✅ Cohesive navigation and conversion flow.
- ✅ No broken builds.
- ✅ `yarn build` succeeds.

---

### Phase 7 — Code Quality + Maintainability Refactor (Post-overhaul)
**Goal:** Improve maintainability without changing user-facing behavior.

**Current status:** ✅ **COMPLETED**

**Delivered**
1. **Oversized components refactored into smaller modules**
   - `Home.js` **463 → 46 lines** (extracted `HomeHero` + section components)
   - `Contact.js` **555 → 129 lines** (extracted `useContactForm`, `ContactForm`, `ContactInfoCard`, `ContactQuickCards`)
   - `Services.js` **405 → 251 lines** (extracted `ServiceDetailCard`, `ServicesQuickList`, secondary sections)
   - `About.js` **331 → 131 lines** (extracted sections)
   - `Resources.js` **349 → 170 lines** (extracted `ResourceCard`)
   - `Careers.js` updated with stable keys and UK-friendly remote locations

2. **Hook complexity + dependency fixes**
   - `useSEO.js` rewritten with extracted helper functions and explicit dependencies.
   - `Contact.js` scroll behavior extracted and dependency-safe.

3. **Index-as-key fixes**
   - Eliminated array-index keys across the codebase (Industries + 7 industry sub-pages, Careers, Resources, Services, Home).

4. **Production console removal**
   - Removed all `console.*` statements from production React source (`/src`).

5. **Regression testing**
   - 19/19 frontend regression checks passed after refactor.

6. **Backend maintainability**
   - Added Python type hints to `backend/server.py` (ruff clean, API endpoints verified).

**Exit criteria (met)**
- ✅ `yarn build` succeeds.
- ✅ No functional regressions.
- ✅ Lint passes.

---

## 3) Next Actions
**Optional follow-ups**
1. Decide whether `/resources` should redirect to `/insights`.
   - Current implementation keeps both pages, since `/resources` contains distinct methodology/examples.
2. Replace OG image from `favicon.svg` to a dedicated social preview image (e.g., `/og.png`).
3. Add a Calendly link later:
   - Update centralized CTA href constant(s) in Navbar/Footer and page CTAs.
4. Add an Insights CMS or markdown-based blog rendering if you want real articles rather than placeholders.

---

## 4) Success Criteria
- **Build stability:** ✅ `yarn build` passes.
- **Conversion:** ✅ Primary CTA visible and consistent site-wide; destination `/contact#ai-discovery-call`.
- **Trust/legal:** ✅ UK company details included accurately; no private/shareholder/residential data published.
- **Completeness:** ✅ All required marketing + legal pages exist and are discoverable via nav/footer.
- **SEO readiness:** ✅ per-page meta, canonical URLs, OG/Twitter tags, JSON-LD (Organization/WebSite/Breadcrumb), sitemap.xml, robots.txt.
- **Reliability:** ✅ Contact form supports env var configuration (`REACT_APP_WEB3FORMS_ACCESS_KEY`) with fallback.
- **Maintainability:** ✅ Large-component refactor completed; index-as-key removed; hooks simplified; regression-tested.