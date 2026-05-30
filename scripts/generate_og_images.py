"""Generate branded Open Graph / Twitter card images (1200x630) for Drag AI.

Renders /app/scripts/og_template.html with per-page text variables via Playwright,
writes one PNG per page into /app/frontend/public/og-images/.

Run:
    python3 /app/scripts/generate_og_images.py
"""
from __future__ import annotations

import asyncio
import json
import pathlib

from playwright.async_api import async_playwright

ROOT = pathlib.Path(__file__).resolve().parent
TEMPLATE = ROOT / "og_template.html"
OUT_DIR = pathlib.Path("/app/frontend/public/og-images")
OUT_DIR.mkdir(parents=True, exist_ok=True)


# Each entry produces /app/frontend/public/og-images/<slug>.png
# Headline kept short to fit 1040px wide @ 64-72px font.
PAGES: list[dict] = [
    # --- Home -----------------------------------------------------------
    {
        "slug": "home",
        "eyebrow": "DRAG AI · AI AUTOMATION",
        "headline": "Production-Grade <span class='accent'>AI Agents</span> &amp; Automation",
        "subtitle": "Custom AI agents, RAG systems, document AI, voice AI, and predictive analytics for modern businesses.",
        "headline_class": "headline",
    },
    # --- 5 Services -----------------------------------------------------
    {
        "slug": "service-ai-agents",
        "eyebrow": "SERVICE · AI AGENTS",
        "headline": "Custom <span class='accent'>AI Agent</span> Development",
        "subtitle": "Production-grade AI agents that reason over your data, use your tools, and assist real workflows.",
        "headline_class": "headline",
    },
    {
        "slug": "service-rag-systems",
        "eyebrow": "SERVICE · RAG SYSTEMS",
        "headline": "Enterprise <span class='accent'>RAG</span> for Private Knowledge",
        "subtitle": "Source-grounded answers from your internal documents, contracts, policies, and data — with citations.",
        "headline_class": "headline",
    },
    {
        "slug": "service-document-ai",
        "eyebrow": "SERVICE · DOCUMENT AI",
        "headline": "<span class='accent'>Document AI</span> Automation",
        "subtitle": "Extract, classify, and validate invoices, contracts, leases, and reports at production scale.",
        "headline_class": "headline",
    },
    {
        "slug": "service-ai-chatbots",
        "eyebrow": "SERVICE · AI CHATBOTS",
        "headline": "<span class='accent'>AI Chatbots</span> for Websites &amp; Support",
        "subtitle": "Customer and internal assistants across web, messaging, and multilingual channels with safe escalation.",
        "headline_class": "headline long",
    },
    {
        "slug": "service-voice-ai",
        "eyebrow": "SERVICE · VOICE AI",
        "headline": "<span class='accent'>Voice AI</span> Agents for Business Calls",
        "subtitle": "Inbound and outbound voice agents that handle real conversations, route calls, and trigger workflows.",
        "headline_class": "headline",
    },
    # --- 3 Industry deep-dives -----------------------------------------
    {
        "slug": "industry-real-estate-ai",
        "eyebrow": "INDUSTRY · REAL ESTATE",
        "headline": "AI Automation for <span class='accent'>Real Estate</span>",
        "subtitle": "Lead qualification, property data, tenant comms, leasing, and document workflows — built for property teams.",
        "headline_class": "headline",
    },
    {
        "slug": "industry-healthcare-ai",
        "eyebrow": "INDUSTRY · HEALTHCARE OPS",
        "headline": "AI for <span class='accent'>Healthcare</span> Operations",
        "subtitle": "Non-clinical admin automation: scheduling, intake, document handling, and patient communication.",
        "headline_class": "headline",
    },
    {
        "slug": "industry-finance-ai",
        "eyebrow": "INDUSTRY · FINANCE TEAMS",
        "headline": "AI Automation for <span class='accent'>Finance Teams</span>",
        "subtitle": "Document intelligence, reporting workflows, reconciliations, and client-support automation for finance ops.",
        "headline_class": "headline long",
    },
    # --- 3 Full resource articles --------------------------------------
    {
        "slug": "article-what-is-an-ai-agent-for-business",
        "eyebrow": "GUIDE · AI AGENTS",
        "headline": "What is an <span class='accent'>AI Agent</span> for Business?",
        "subtitle": "A practical guide: how agents differ from chatbots, where they work, and how to scope your first build.",
        "headline_class": "headline",
    },
    {
        "slug": "article-rag-vs-fine-tuning",
        "eyebrow": "GUIDE · RAG VS FINE-TUNING",
        "headline": "<span class='accent'>RAG</span> vs Fine-Tuning",
        "subtitle": "Which approach should you use for private knowledge? A clear, no-hype decision guide for technical buyers.",
        "headline_class": "headline short",
    },
    {
        "slug": "article-private-ai-chatbot-company-documents",
        "eyebrow": "GUIDE · PRIVATE CHATBOTS",
        "headline": "Private <span class='accent'>AI Chatbot</span> on Your Documents",
        "subtitle": "How private, source-grounded chatbots trained on company data actually work — and how to deploy safely.",
        "headline_class": "headline long",
    },
    {
        "slug": "article-ai-agent-development-cost",
        "eyebrow": "GUIDE · PRICING & PLANNING",
        "headline": "<span class='accent'>AI Agent</span> Development Cost",
        "subtitle": "A practical budgeting guide: real price ranges, the five cost drivers, and ongoing run costs for production AI agents.",
        "headline_class": "headline",
    },
    {
        "slug": "article-document-ai-automation",
        "eyebrow": "GUIDE · DOCUMENT AI",
        "headline": "<span class='accent'>Document AI</span> Automation",
        "subtitle": "How it works, where it pays off, and how to measure ROI on invoices, contracts, leases, and claims.",
        "headline_class": "headline",
    },
]


async def render_all() -> None:
    template_url = TEMPLATE.as_uri()
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path="/usr/bin/chromium",
            args=["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
        )
        context = await browser.new_context(
            viewport={"width": 1200, "height": 630},
            device_scale_factor=1,
        )
        page = await context.new_page()
        await page.goto(template_url, wait_until="networkidle")
        # Wait for webfonts to load so typography is consistent.
        await page.evaluate("document.fonts.ready")

        for cfg in PAGES:
            await page.evaluate(
                """(cfg) => {
                    document.getElementById('og-eyebrow').textContent = cfg.eyebrow;
                    document.getElementById('og-headline').innerHTML = cfg.headline;
                    document.getElementById('og-headline').className = cfg.headline_class;
                    document.getElementById('og-subtitle').textContent = cfg.subtitle;
                }""",
                cfg,
            )
            # Small settle for any reflow / font swap.
            await page.wait_for_timeout(120)
            out = OUT_DIR / f"{cfg['slug']}.png"
            await page.screenshot(path=str(out), full_page=False, type="png")
            print(f"  wrote {out.relative_to(pathlib.Path('/app'))}  ({out.stat().st_size // 1024} KB)")

        await browser.close()


if __name__ == "__main__":
    print(f"Rendering {len(PAGES)} OG images at 1200x630 -> {OUT_DIR}")
    asyncio.run(render_all())
    manifest = {p["slug"]: f"/og-images/{p['slug']}.png" for p in PAGES}
    (OUT_DIR / "manifest.json").write_text(json.dumps(manifest, indent=2))
    print(f"\nManifest written to {OUT_DIR / 'manifest.json'}")
    print("Done.")
