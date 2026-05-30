# plan.md — Drag AI Premium Website (React SPA + Tailwind + shadcn/ui)

## 1) Objectives
- Update and improve the Drag AI website to reflect UK incorporation as **DRAG AI LIMITED**.
- Make the site more **credible, professional, legally complete, SEO-friendly, AI-search-friendly, and conversion-focused**.
- Maintain the current premium futuristic aesthetic (**Purple + Pink** theme + neural-network background via `tsParticles`) while improving clarity and performance.
- **Primary CTA (updated requirement):**
  - Replace all sitewide CTA copy with: **“Book Free AI Strategy Call”**
  - CTA destination remains: **`/contact#ai-discovery-call`**
  - Implementation must be easy to swap later to an external booking link (e.g., Calendly) by changing a central href constant.
- Implement UK legal/compliance content using **public company details only**:
  - **DRAG AI LIMITED**
  - **Company Number:** 17222197
  - **Registered in England and Wales**
  - **Registered Office:** 128 City Road, London, EC1V 2NX, United Kingdom
  - **Public email:** `info@drag-ai.com`
- Ensure required pages exist and are discoverable:
  - Core marketing: Home, Services, Solutions, Industries, How We Work, About, Contact
  - Content hubs: Resources (SEO hub), Case Studies
  - Legal: Company Information, Privacy Policy, Cookie Policy, Terms of Use
- Implement comprehensive SEO:
  - per-page meta tags, canonical URLs
  - Open Graph + Twitter tags
  - JSON-LD structured data (Organization, WebSite, BreadcrumbList)
  - page-specific schemas (Service, FAQPage)
  - sitemap.xml + robots.txt
  - **/llms.txt** for AI search visibility
- **Critical Technical SEO requirement (new):**
  - Make all public pages **crawler-friendly in initial HTML** (no JS-only app shell).
  - Implement **static pre-rendering** using **react-snap** across all indexable public routes.
  - Verify with **View Page Source** that title/meta/H1/body/internal links/JSON-LD/CTA appear in initial HTML.
- Validate stability continuously: **run `yarn build` after each phase**.
- **Strict legal constraint:** NEVER publish private/residential addresses, DOBs, shareholder docs, internal registers, or private incorporation PDFs.
- **No fake claims**: No fake clients, logos, revenue, performance percentages, or certifications.

**Current status:** Phases 1–7 completed ✅, expansion Phases A–G completed ✅, and Phase H (post-launch QA + branded OG images + 2 additional full articles) is **also completed ✅**. The site builds cleanly, react-snap pre-renders **34 indexable routes** to static HTML, every page has a unique branded 1200×630 OG/Twitter image, all per-page meta + JSON-LD is correct, the sitewide CTA is standardized, the Resources hub now lists **5 full articles**, and noindex/sitemap rules for the remaining 3 skeleton drafts are preserved. Remaining items are user-supplied (analytics IDs, optional Calendly swap).

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
   - Primary CTA previously standardized to discovery-call wording.
2. **Footer overhaul**
   - Added public UK company block (DRAG AI LIMITED, Co# 17222197, 128 City Road, London EC1V 2NX).
   - Added `info@drag-ai.com`.
   - Link columns for Explore + Company & Legal.
3. **Legal pages updated / verified**
   - Privacy Policy (UK GDPR framing)
   - Terms (England & Wales law)
   - Company Information (Companies House link)
   - Cookie Policy (email + postal)

**Exit criteria (met)**
- ✅ Navbar + Footer updated and consistent.
- ✅ Legal pages present, linked, and contain correct UK details.
- ✅ `yarn build` succeeds.

---

### Phase 3 — Core Page Content Updates (Conversion + Credibility)
**Goal:** Update primary pages to match positioning, credibility requirements, and conversion CTA.

**Current status:** ✅ **COMPLETED** (with additional page-by-page revisions applied)

**Delivered**
- Home updated per review: Hero + trust line, “What Drag AI Builds” expanded, “AI Beyond Demos” added, 6-step process preview, improved final CTA.
- Services restructured to 6 grouped services.
- Industries expanded and made safe for missing subpages.
- About repositioned as founder-led; founders titled as co-founders (not directors).
- Contact form expanded (industry, data readiness, preferred contact).
- Scroll behavior fixed: page navigation always opens at top (anchor links respected).

**Exit criteria (met)**
- ✅ Core pages updated.
- ✅ Contact anchor exists (`#ai-discovery-call`).
- ✅ `yarn build` succeeds.

---

### Phase 4 — Solutions, How We Work, Insights
**Goal:** Complete remaining required marketing pages and ensure consistent structure.

**Current status:** ✅ **COMPLETED**
- Solutions aligned with “services vs solutions” separation.
- How We Work aligned with 6-step trust-building process.
- Insights page created and updated with recommended placeholder topics.

**Exit criteria (met)**
- ✅ `/insights` live and linked.
- ✅ `yarn build` succeeds.

---

### Phase 5 — Comprehensive SEO (Meta, OG, Structured Data, Sitemap)
**Goal:** Make the SPA SEO-ready at runtime.

**Current status:** ✅ **COMPLETED** (SPA runtime SEO)

**Delivered**
- `useSEO` supports canonical, OG, Twitter, robots meta, per-page JSON-LD injection, breadcrumb JSON-LD.
- Global `Organization` + `WebSite` JSON-LD in `public/index.html`.
- `sitemap.xml` + `robots.txt` exist and reference sitemap.

**Exit criteria (met)**
- ✅ Runtime SEO is in place.
- ✅ `yarn build` succeeds.

---

### Phase 6 — CTA Standardization, Polish, and Final Validation
**Goal:** Final conversion polish + reliability.

**Current status:** ✅ **COMPLETED** (for old CTA wording)

**Note:** CTA copy must be updated again in Phase A (new requirement: “Book Free AI Strategy Call”).

---

### Phase 7 — Code Quality + Maintainability Refactor (Post-overhaul)
**Goal:** Improve maintainability without changing user-facing behavior.

**Current status:** ✅ **COMPLETED**
- Refactored oversized pages into modular components.
- Fixed index-as-key issues.
- Removed console logs from production React source.
- Added backend type hints.

---

## 2B) NEW Implementation Steps (Scope Expansion A–G)

### Phase A — Sitewide CTA + Conversion Form Upgrade
**Goal:** Align conversion language, forms, and CTAs with “Free AI Strategy Call” positioning.

**Work**
1. Replace CTA copy globally:
   - “Book a 30-Minute…” → **“Book Free AI Strategy Call”**
   - Keep destination: `/contact#ai-discovery-call`
2. Update Contact form fields (homepage + contact page lead capture):
   - Name
   - Company
   - Work email
   - Phone or WhatsApp
   - What do you want to automate?
   - Current tools used
   - Budget range
   - Timeline
   - Submit: **“Request AI Strategy Call”**
   - Success message: “Thank you. Drag AI will review your workflow and contact you soon.”
3. Add a lightweight homepage lead form module (optional placement: after Problem/Solution sections).

**Exit criteria**
- ✅ All pages updated CTA copy.
- ✅ Forms collect required fields.
- ✅ `yarn build` succeeds.

---

### Phase B — Build Dedicated Service Pages (SEO Landing Pages)
**Goal:** Create high-intent service pages for Google + AI search visibility.

**Create pages**
- `/services/ai-agents`
- `/services/rag-systems`
- `/services/document-ai`
- `/services/ai-chatbots`
- `/services/voice-ai`

**Each includes**
- Unique SEO title + meta description + canonical
- One H1 + clean H2/H3 hierarchy
- Sections per brief (What is it, What we build, Use cases, Integrations, Security, Process, FAQ, CTA)
- Schema:
  - `Service`
  - `BreadcrumbList`
  - `FAQPage` only if FAQs are visible
- Internal links to Solutions, Industries, Resources, Contact.

**Also**
- Keep `/services` as an overview hub linking to these pages.
- Navbar can remain a single “Services” link to `/services` (or be converted to dropdown later).

**Exit criteria**
- ✅ 5 new service pages live and linked.
- ✅ `yarn build` succeeds.

---

### Phase C — Build 3 Industry Deep-Dive Pages + Merge Real Estate/Property Management
**Goal:** Create 3 SEO-ready, deep-dive industry landing pages.

**Create pages**
- `/industries/real-estate-ai` (includes Property Management subsection; avoid duplicate competing page)
- `/industries/healthcare-ai` (must include medical disclaimer)
- `/industries/finance-ai`

**Routing**
- Legacy `/industries/property-management` should redirect (SPA Navigate) → `/industries/real-estate-ai`.
- Industries overview should highlight the 3 deep dives.

**Schema**
- BreadcrumbList
- (Optional) `Service` or `WebPage` only if appropriate; avoid misleading schema.

**Exit criteria**
- ✅ 3 deep-dive pages live, linked, and reachable.
- ✅ Redirect works.
- ✅ `yarn build` succeeds.

---

### Phase D — Case Studies + Resources Hub + 3 Full Articles
**Goal:** Publish SEO content without thin/placeholder pages.

**Create**
- `/case-studies` — placeholder-friendly cards (no fake claims/logos/metrics)
- `/resources` — SEO hub listing resource posts and linking to service pages

**Write fully (indexable)**
1. `/resources/what-is-an-ai-agent-for-business`
2. `/resources/rag-vs-fine-tuning`
3. `/resources/private-ai-chatbot-company-documents`

**Create skeleton routes (NOT indexable; excluded from sitemap)**
- `/resources/rag-vs-fine-tuning` (already full)
- `/resources/document-ai-automation`
- `/resources/ai-automation-use-cases-real-estate`
- `/resources/ai-agent-development-cost`
- `/resources/how-to-choose-ai-automation-agency`
- `/resources/voice-ai-agents-customer-support`
- `/resources/private-ai-chatbot-company-documents` (already full)

**Noindex rules for incomplete articles**
- `useSEO({ noindex: true })`
- Robots meta: `noindex,nofollow`
- Exclude from sitemap.xml

**Exit criteria**
- ✅ Case studies page live.
- ✅ Resources hub live.
- ✅ 3 full articles published and indexable.
- ✅ Skeleton pages exist but are noindex and not in sitemap.
- ✅ `yarn build` succeeds.

---

### Phase E — Schema + SEO Hardening + robots/sitemap/llms
**Goal:** Strengthen schema for Google + AI crawlers and ensure correct indexing.

**Work**
1. Update `Organization` JSON-LD to match:
   - name: Drag AI / legalName: DRAG AI LIMITED
   - url: https://drag-ai.com
   - description per brief
   - email: info@drag-ai.com
   - areaServed: Global, India, UAE, United States (as requested)
   - sameAs: ONLY real social links
2. Ensure `WebSite` schema does not include fake `SearchAction`.
3. Add Service schema on each service detail page.
4. Add BreadcrumbList on service, industry, case study, and resource pages.
5. Add FAQPage schema only where FAQ exists and is visible.
6. Update `robots.txt` to explicitly allow:
   - Googlebot, Bingbot, OAI-SearchBot, GPTBot
   - Reference sitemap
7. Update `sitemap.xml` to include ONLY indexable routes.
8. Add `/llms.txt` with provided content.

**Exit criteria**
- ✅ Structured data validates.
- ✅ robots and sitemap correct.
- ✅ `yarn build` succeeds.

---

### Phase F — Static Pre-rendering with react-snap (Critical Crawlability)
**Goal:** Ensure every public indexable page has full HTML content in initial page source.

**Current status:** ✅ **COMPLETED**

**Delivered**
1. `react-snap@^1.23.0` added to `devDependencies` (via `yarn add --dev`).
2. `"postbuild": "react-snap"` script wired into `package.json` so it runs automatically after `yarn build`.
3. `reactSnap` configuration block in `package.json` explicitly enumerates **all 32 indexable routes** (home, 5 service deep-dives, 9 industry pages including the 3 new AI deep-dives, services/industries/resources overviews, case-studies, careers, insights, 3 full resource articles, contact, how-we-work, about, solutions, and 4 legal pages). Skeleton (noindex) resource articles are intentionally **excluded** to avoid generating indexable static HTML for unfinished content.
4. `puppeteerArgs` set to `--no-sandbox --disable-setuid-sandbox --disable-dev-shm-usage` for the container environment.
5. `crawl: false`, `skipThirdPartyRequests: true`, `removeBlobs: true`, `fixWebpackChunksIssue: "CRA2"` configured for deterministic, clean output.
6. `src/index.js` updated to use `ReactDOM.hydrateRoot` when the root already has children (i.e. pre-rendered markup) and `createRoot` otherwise. No flicker on hydration.
7. Fresh `yarn build` succeeds in ~23s and emits 33 static `index.html` files (32 React routes + the `public/logos/` static gallery) under `/app/frontend/build/`.

**Verified via View Source on built HTML**
- Per-page unique `<title>` and `<meta name="description">` (e.g. `Custom AI Agent Development Company | Drag AI` for `/services/ai-agents`).
- Per-page unique `<link rel="canonical" href="https://drag-ai.com/...">`.
- Per-page `<meta name="robots" content="index,follow">` on all indexable routes.
- Exactly **1 `<h1>`** per page across all 20+ spot-checked indexable routes.
- Full body content (hero, sections, lists, CTAs, footer) present in the static HTML — not just an empty `<div id="root">`.
- Three `application/ld+json` blocks per page on average: global `Organization` + `WebSite` (from `public/index.html`) plus per-page `WebPage` / `Service` / `Article` / `FAQPage` / `BreadcrumbList`.
- `Book Free AI Strategy Call` CTA present in **32/33** pre-rendered files (the only exception is `/logos/index.html`, which is the static logo gallery, not an SPA route).
- Internal navigation links (Home, Services, Industries, Case Studies, How We Work, Resources, About, Contact) appear in raw HTML — crawlable without JS.

**Exit criteria (met)**
- ✅ View Source shows full HTML on all indexable routes.
- ✅ Pre-rendered build deployable.
- ✅ `yarn build` succeeds end-to-end including the `react-snap` postbuild step.

---

### Phase G — Final QA + Performance + AI Search Optimization
**Goal:** Ensure conversion + SEO + AI-search readiness end-to-end.

**Current status:** ✅ **COMPLETED** (build-time QA pass)

**Verified**
- ✅ Unique title + meta description for every indexable page (20+ routes spot-checked).
- ✅ Exactly one H1 per page on every indexable route.
- ✅ Sitewide CTA "Book Free AI Strategy Call" is in the initial HTML of every indexable route.
- ✅ `robots.txt` explicitly allows Googlebot, Bingbot, OAI-SearchBot, GPTBot, PerplexityBot, ClaudeBot, Google-Extended and references the sitemap.
- ✅ `sitemap.xml` lists ONLY indexable routes (no skeleton articles, no `/careers` SEO leak, no admin routes).
- ✅ `/llms.txt` present in `public/` with service list, industry list, legal entity details, and primary CTA URL.
- ✅ Skeleton resource articles (`/resources/document-ai-automation`, `/resources/ai-automation-use-cases-real-estate`, `/resources/ai-agent-development-cost`, `/resources/how-to-choose-ai-automation-agency`, `/resources/voice-ai-agents-customer-support`) emit `<meta name="robots" content="noindex,nofollow">` via `useSEO({ noindex: true })`, are excluded from sitemap, and are NOT linked from the Resources hub.
- ✅ Per-page schemas: `WebPage` (home), `Service` + `FAQPage` + `BreadcrumbList` (service pages), `BreadcrumbList` + `FAQPage` (industry pages), `Article` + `Organization` + `BreadcrumbList` + `FAQPage` (full articles).
- ✅ React build is clean — `esbuild` lint on `src/` reports zero errors.

**Open items for the user (not blockers)**
1. **Analytics placeholders** (Phase G follow-up): GA4, Google Search Console, Microsoft Clarity, Meta Pixel, LinkedIn Insight Tag — awaiting tracking IDs from the user before injection into `public/index.html`.
2. **Image optimization**: ensure every `<img>` has descriptive `alt`, lazy-loading, and a compressed source. Most images today are inline `<svg>` (no `alt` needed) — but if hero photography is added, the existing components already use `loading="lazy"` where applicable.
3. **Booking calendar swap**: when Calendly (or similar) is ready, change the CTA href constant; everything else stays the same.

**Exit criteria (met)**
- ✅ All QA items pass.
- ✅ Final report produced (this section).

---

## 3) Next Actions
**Manual connections (post-implementation)**
1. Analytics integrations (prepare placeholders):
   - Google Search Console verification
   - GA4
   - Microsoft Clarity
   - Meta Pixel
   - LinkedIn Insight Tag
2. Booking calendar:
   - Swap CTA href to Calendly once available.
3. Publish remaining resource articles before indexing them.

---

## 2C) Post-launch hardening (Phase H — Testing, Social, Content)

### Phase H — Comprehensive site test + OG images + 2 more full articles
**Goal:** Verify the entire site behaves like a production B2B website, give every key page a branded social-share image, and convert two more skeleton drafts into indexable full articles.

**Current status:** ✅ **COMPLETED**

**Delivered**
1. **Comprehensive end-to-end testing (testing-agent, iteration 4):** 70 / 70 tests passed across all 20+ routes — desktop & mobile navigation, hamburger menu, footer UK company block, all 5 service deep-dives, all 3 industry deep-dives, the `/industries/property-management` → `/industries/real-estate-ai` redirect, all 6 legacy industry pages, the Resources hub, all 3 originally-published articles, all 5 skeleton drafts (noindex verified via `document.querySelector('meta[name="robots"]').content`), case-studies, about, careers, how-we-work, contact (with mocked Web3Forms submission → success toast), all 4 legal pages, the SEO meta sanity per page, the static `robots.txt` / `sitemap.xml` / `llms.txt`, scroll-to-top behavior, mobile responsive sanity, and console-error sweep. No critical bugs found.
2. **12 branded 1200×630 OG / Twitter card images** generated via Playwright + an HTML template (`/app/scripts/generate_og_images.py`, `/app/scripts/og_template.html`) for: home, 5 services (`/services/ai-agents`, `/services/rag-systems`, `/services/document-ai`, `/services/ai-chatbots`, `/services/voice-ai`), 3 industries (`/industries/real-estate-ai`, `/industries/healthcare-ai`, `/industries/finance-ai`), and 3 original articles. Saved to `/app/frontend/public/og-images/` (each ~220 KB). Branded with Drag AI logo, UK Registered chip, page-specific eyebrow + headline + subtitle, drag-ai.com domain, and a Book Free AI Strategy Call CTA pill.
3. **2 more full OG images** generated when the new articles were published, totalling **14 branded OG images**.
4. **`useSEO` upgraded** to support per-page `ogImage`, resolve relative paths to absolute, and emit `og:image`, `og:image:width`, `og:image:height`, `og:image:alt`, `twitter:image`, `twitter:image:alt` in the rendered HTML. Article JSON-LD now also includes the `image` property.
5. **Per-page OG wiring**: extended `ServiceDetailLayout`, `IndustryDetailLayout`, `ArticleLayout`, and `Home.js` to pass `ogImage` automatically (fallback to `/og-images/<type>-<slug>.png`). Verified in pre-rendered HTML: every key route now has a unique `og:image` and `twitter:image` URL.
6. **2 new full articles published** (previously noindex skeletons, now indexable):
   - `/resources/ai-agent-development-cost` — "AI Agent Development Cost: A Practical Budgeting Guide for 2026" (~1200 words, 7 sections, 6 FAQs, ToC, 5 internal links, full Article + FAQPage + BreadcrumbList schema, branded OG image).
   - `/resources/document-ai-automation` — "Document AI Automation: How It Works, Where It Pays Off, and How to Get It Right" (~1300 words, 7 sections, 6 FAQs, ToC, 6 internal links, full Article + FAQPage + BreadcrumbList schema, branded OG image).
7. **Resources hub `/resources` updated** to surface both new articles (now lists 5 full articles instead of 3). 3 remaining skeleton drafts continue to use `noindex,nofollow` and are still excluded from the hub.
8. **`sitemap.xml` updated** to include the 2 new article URLs. 3 remaining skeleton URLs continue to be excluded.
9. **`package.json` `reactSnap.include` updated** so both new articles are pre-rendered to static HTML at build time.
10. **Resource hub copy fix** — replaced literal `\u2014` (which was rendering as text in JSX) with a real em-dash character.
11. **Final fresh build verified**: `yarn build` succeeds end-to-end (~25s), pre-rendering 34 routes (was 32 before this phase). Spot-check confirms both new articles emit `index,follow`, canonical URL, single H1, unique title/description, Article + FAQPage + BreadcrumbList JSON-LD, and their branded OG image.

**Files created/changed in Phase H**
- Created: `/app/scripts/generate_og_images.py`, `/app/scripts/og_template.html`, `/app/frontend/public/og-images/*.png` (14 images + manifest.json).
- Modified: `/app/frontend/src/hooks/useSEO.js` (resolveOgImage helper + extra OG/Twitter meta), `/app/frontend/src/components/services/ServiceDetailLayout.js`, `/app/frontend/src/components/industries/IndustryDetailLayout.js`, `/app/frontend/src/components/resources/ArticleLayout.js`, `/app/frontend/src/pages/Home.js`, `/app/frontend/public/index.html` (default OG image + dimensions), `/app/frontend/public/sitemap.xml`, `/app/frontend/package.json` (reactSnap.include).
- Rewritten (skeleton → full): `/app/frontend/src/pages/resources/AIAgentCostArticle.js`, `/app/frontend/src/pages/resources/DocumentAIArticle.js`.
- Modified: `/app/frontend/src/pages/Resources.js` (added 2 cards to hub, fixed em-dash, added 2 new icons).

**Exit criteria (met)**
- ✅ 70/70 end-to-end tests passed.
- ✅ 14 branded OG images shipped at `/og-images/*.png`.
- ✅ Per-page `og:image` + `twitter:image` verified in pre-rendered HTML for all 14 key routes.
- ✅ 2 new full articles published, indexable, added to sitemap, and pre-rendered.
- ✅ Fresh `yarn build` succeeds with 34 pre-rendered routes.

---

## 4) Success Criteria
- **Build stability:** ✅ `yarn build` passes throughout.
- **Conversion:** Primary CTA is **“Book Free AI Strategy Call”** sitewide; forms capture qualified lead fields; success message shown.
- **Trust/legal:** UK company details included accurately everywhere; no private/shareholder/residential data published.
- **Completeness:** Core marketing + legal + service detail + industry deep-dive + case studies + resources hub exist and are discoverable.
- **SEO readiness:** per-page meta, canonical, OG/Twitter, JSON-LD (Organization/WebSite/Breadcrumb/Service/FAQPage), sitemap.xml, robots.txt, llms.txt.
- **Crawlability:** Pre-rendered HTML output available in page source for all indexable routes via react-snap.
- **AI visibility:** Clear answer-style sections + llms.txt + coherent internal linking.
- **No fake claims:** No fabricated client names/logos/metrics; healthcare disclaimer present on healthcare page.
