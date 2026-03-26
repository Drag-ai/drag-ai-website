# plan.md — Drag AI Premium Website (Next.js + Tailwind + Cloudflare Workers)

## 1) Objectives
- Ship a premium, trust-first marketing site for Drag AI (light theme only) that converts via **“Book a discovery call”**.
- Establish credibility without fake clients/metrics through clear positioning, strong UX, and high-quality execution.
- Keep the site fast, accessible, SEO-ready, and deployable on **Cloudflare Workers**.

## 2) Implementation Steps

### Phase 1 — Core Flow POC (Contact Form on Cloudflare) 
**Goal:** Prove the only failure-prone “core” works end-to-end: form → server handler (Workers runtime) → success/error UX.

**User stories**
1. As a prospect, I can submit a discovery request and see a clear success confirmation.
2. As a prospect, I get actionable validation errors if I miss required fields.
3. As a prospect, I know where my message goes (info@drag-ai.com) without false promises.
4. As the team, we can receive messages reliably in the Cloudflare runtime.
5. As a privacy-conscious user, I can access Privacy/Terms before submitting.

**Steps**
- Web search: best practice for **Next.js on Cloudflare Workers** + recommended email delivery approach (API route/route handler constraints).
- Decide delivery: 
  - Preferred: email provider HTTP API (e.g., Resend/Mailchannels) via fetch (Workers-compatible).
  - Fallback (MVP): store request in Cloudflare KV (or just log) + show “We received your message; we’ll reply at info@drag-ai.com” (honest stub).
- Implement minimal `/contact` page + route handler (`app/api/contact/route.ts`) with:
  - schema validation (zod)
  - rate limiting (lightweight: IP hash + in-memory / KV if available)
  - bot protection (honeypot field)
  - explicit responses (200/400/429/500)
- Verify in local dev + deploy preview on Cloudflare Workers.
- Fix until: successful submission + error states + no Node-only APIs.

**Exit criteria**
- Deployed POC URL accepts valid submissions and returns deterministic success/error.

---

### Phase 2 — V1 App Development (Design System + All Pages)
**Goal:** Build the full 7-page site around the proven contact flow; minimal, premium, futuristic-light aesthetic.

**User stories**
1. As a visitor, I immediately understand Drag AI (agentic systems + production-grade delivery) from the hero.
2. As a buyer, I can scan services and quickly know when each applies + expected impact.
3. As a buyer, I can see industries you focus on without assuming prior clients.
4. As a visitor, I can evaluate founder credibility with clear bios and expertise tags.
5. As a prospect, I can reach the discovery call form from any page within 1 click.

**Steps**
- Repo setup (NEW_PROJECT): Next.js App Router + TS + Tailwind; configure for Cloudflare Workers deployment.
- Create design system primitives:
  - tokens: off-white base, cyan + restrained blue-violet accents
  - typography scale, spacing, shadows, borders, focus states
  - components: Button, Link, Card, Badge, Section, Container, Navbar, Footer
- Global layout:
  - sticky minimal nav (Home/About/Services/Industries/Contact)
  - footer with LinkedIn + legal links + location
- Build pages (content-driven, no fake proof):
  - Home: hero + What we do + Capabilities + How we work + Industries + Why Drag AI + Founders preview + CTA
  - About: company summary + founders + principles (engineering-first, production-ready)
  - Services: 5 service sections each with (What / When / Business impact)
  - Industries: list + example use-cases phrased as “common workflows” (no claims)
  - Contact: form + email + Bengaluru, India
  - Privacy + Terms: concise, honest, form-data related coverage
- Add navigation CTA: “Book a discovery call” routes to Contact.
- Run 1 end-to-end testing pass: navigation, responsiveness, contact submissions, error states.

**Exit criteria**
- All pages complete, consistent visual system, contact flow works in deployed environment.

---

### Phase 3 — Animations, Micro-interactions, Polish
**Goal:** Add premium motion without harming performance; respect reduced motion.

**User stories**
1. As a visitor, I feel subtle technical sophistication via background motion that doesn’t distract.
2. As a motion-sensitive user, animations reduce/disable automatically.
3. As a mobile user, interactions remain smooth and battery-friendly.
4. As a visitor, hover/focus states make the UI feel responsive and premium.
5. As a buyer, section reveals help me scan content without losing context.

**Steps**
- Background animation (lightweight): canvas/SVG neural-flow effect; throttle + pause offscreen; `prefers-reduced-motion` support.
- Section reveal on scroll (IntersectionObserver; avoid heavy libraries).
- Button/card micro-interactions (subtle translate/shadow/gradient shift).
- Accessibility pass: focus rings, contrast checks, keyboard nav, semantic headings.
- Testing pass: motion on/off, mobile perf, Lighthouse spot-check.

**Exit criteria**
- Motion feels premium, no jank; accessibility and performance remain strong.

---

### Phase 4 — SEO, Reliability, Final QA
**Goal:** Ensure discoverability and production readiness.

**User stories**
1. As a search engine, I can index each page with correct metadata.
2. As a visitor, pages load fast and look correct across devices.
3. As a prospect, the site feels trustworthy (no broken links, no placeholder copy).
4. As the team, deployments are repeatable with environment variables documented.
5. As a legal-conscious visitor, I can access Privacy/Terms easily.

**Steps**
- Per-page metadata (title/description/open graph); canonical URLs.
- Generate sitemap + robots.txt.
- Add structured data (Organization + WebSite) with honest fields.
- Verify contact handler observability (structured logs) + env var docs.
- Comprehensive QA: responsive, cross-browser, 404/500 handling, form abuse checks.
- Final Cloudflare Workers deploy; validate runtime compatibility.

**Exit criteria**
- Lighthouse targets met, SEO artifacts present, stable deploy, no broken UX.

## 3) Next Actions
1. Confirm contact form delivery approach preference: (A) email provider API, (B) KV/logging stub + manual follow-up.
2. Run web search for Next.js App Router + Cloudflare Workers constraints; lock deployment template.
3. Implement Phase 1 POC contact route + minimal contact UI; deploy and verify.
4. After POC passes, proceed to Phase 2 page build-out.

## 4) Success Criteria
- Conversion: primary CTA visible above the fold on Home; 1-click access site-wide.
- Trust: no fake logos/testimonials/metrics; messaging is crisp and engineering-led.
- Performance: fast loads, lightweight animation, strong Core Web Vitals.
- Accessibility: keyboard navigable, semantic structure, reduced-motion support.
- Reliability: contact form works on Cloudflare Workers with clear success/error handling.
- SEO: per-page metadata, sitemap, robots.txt, structured data.