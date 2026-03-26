{
  "project": {
    "name": "Drag AI",
    "type": "marketing_site / consulting_website",
    "theme": "light-only",
    "brand_attributes": [
      "engineering-first",
      "premium minimal",
      "futuristic but restrained",
      "honest + credible",
      "global enterprise-ready"
    ]
  },
  "design_personality": {
    "north_star": "A calm, white-space-forward consulting site that feels like a production system: precise typography, quiet depth, and a subtle ‘agentic network’ motion layer.",
    "visual_metaphors": [
      "agent graphs (nodes + edges)",
      "data streams (thin lines, slow drift)",
      "system diagrams (bento cards, labeled sections)",
      "engineering documentation (mono accents, crisp dividers)"
    ],
    "do_not": [
      "No fake client logos/testimonials/metrics",
      "No dark mode",
      "No loud gradients or neon overload",
      "No purple/pink heavy gradients",
      "No centered-everything layouts"
    ]
  },
  "inspiration_refs": {
    "visual_direction": [
      {
        "name": "2026 web design trends (clean, whitespace, subtle motion)",
        "url": "https://www.figma.com/resource-library/web-design-trends/"
      },
      {
        "name": "Particles.js (lightweight particle network background)",
        "url": "https://vincentgarreau.com/particles.js/"
      }
    ],
    "search_notes": "We’re borrowing: (1) premium editorial whitespace + strong type hierarchy, (2) subtle system-diagram bento layout, (3) lightweight particle network background with reduced-motion support."
  },
  "color_system": {
    "strategy": {
      "base": "off-white surfaces with cool-neutral grays",
      "accents": "cool cyan for primary actions + restrained blue-violet for secondary highlights (borders, small tags)",
      "gradients": {
        "allowed_usage": [
          "Hero background overlay only (<= 20% viewport)",
          "Decorative corner glows behind large sections",
          "Never on text-heavy cards"
        ],
        "approved_gradients": [
          {
            "name": "Cyan Mist",
            "css": "radial-gradient(60% 60% at 20% 10%, rgba(34, 211, 238, 0.18) 0%, rgba(34, 211, 238, 0.00) 60%)"
          },
          {
            "name": "Violet Trace (restrained)",
            "css": "radial-gradient(50% 50% at 85% 15%, rgba(99, 102, 241, 0.10) 0%, rgba(99, 102, 241, 0.00) 55%)"
          },
          {
            "name": "Edge Glow",
            "css": "linear-gradient(90deg, rgba(34, 211, 238, 0.00) 0%, rgba(34, 211, 238, 0.10) 50%, rgba(34, 211, 238, 0.00) 100%)"
          }
        ]
      }
    },
    "tokens_css_variables": {
      "note": "Implement by overriding :root tokens in /app/frontend/src/index.css (keep light-only; do not use .dark).",
      "css": ":root {\n  /* Surfaces */\n  --background: 210 40% 98%; /* #F7FAFC */\n  --foreground: 222 47% 11%; /* #0F172A */\n  --card: 0 0% 100%;\n  --card-foreground: 222 47% 11%;\n  --popover: 0 0% 100%;\n  --popover-foreground: 222 47% 11%;\n\n  /* Brand */\n  --primary: 222 47% 11%; /* ink */\n  --primary-foreground: 210 40% 98%;\n\n  /* Cyan action */\n  --accent-cyan: 190 95% 40%; /* #06B6D4-ish */\n  --accent-cyan-foreground: 210 40% 98%;\n\n  /* Violet trace (restrained) */\n  --accent-violet: 238 83% 66%; /* #818CF8-ish */\n  --accent-violet-foreground: 222 47% 11%;\n\n  /* UI */\n  --secondary: 210 40% 96%;\n  --secondary-foreground: 222 47% 11%;\n  --muted: 210 40% 96%;\n  --muted-foreground: 215 16% 35%; /* slate-600 */\n  --accent: 210 40% 96%;\n  --accent-foreground: 222 47% 11%;\n  --border: 214 32% 91%;\n  --input: 214 32% 91%;\n  --ring: 190 95% 40%;\n\n  /* States */\n  --destructive: 0 84% 60%;\n  --destructive-foreground: 210 40% 98%;\n\n  /* Radius */\n  --radius: 0.75rem;\n\n  /* Shadows (custom) */\n  --shadow-sm: 0 1px 2px rgba(15, 23, 42, 0.06);\n  --shadow-md: 0 10px 30px rgba(15, 23, 42, 0.08);\n  --shadow-glow-cyan: 0 0 0 6px rgba(34, 211, 238, 0.14);\n}\n\n::selection {\n  background: rgba(34, 211, 238, 0.22);\n}\n"
    },
    "tailwind_usage_notes": {
      "backgrounds": [
        "bg-background for page base",
        "bg-card for cards",
        "bg-secondary for subtle section bands"
      ],
      "accents": [
        "Use ring-ring for focus",
        "Use text-[hsl(var(--accent-cyan))] for links",
        "Use border-[hsl(var(--accent-violet))]/20 for ‘trace’ dividers"
      ]
    }
  },
  "typography": {
    "font_pairing": {
      "display": {
        "name": "Space Grotesk",
        "use": "H1/H2 + key section titles (premium tech)"
      },
      "body": {
        "name": "Inter",
        "use": "Body, UI labels, long-form readability"
      },
      "mono_accent": {
        "name": "IBM Plex Mono",
        "use": "Small ‘system labels’ (e.g., CAPABILITIES, INDUSTRIES), code-like callouts"
      },
      "implementation": {
        "note": "Use Google Fonts. In Next.js you’d use next/font; in this React setup, add <link> in index.html or import via CSS.",
        "css_snippet": "/* index.css */\n:root {\n  --font-display: 'Space Grotesk', ui-sans-serif, system-ui;\n  --font-body: 'Inter', ui-sans-serif, system-ui;\n  --font-mono: 'IBM Plex Mono', ui-monospace, SFMono-Regular;\n}\nbody { font-family: var(--font-body); }\n"
      }
    },
    "type_scale": {
      "h1": "text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight",
      "h2": "text-2xl sm:text-3xl font-semibold tracking-tight",
      "h3": "text-xl sm:text-2xl font-semibold",
      "subheading": "text-base md:text-lg text-muted-foreground",
      "body": "text-sm sm:text-base leading-relaxed text-foreground/90",
      "small": "text-xs sm:text-sm text-muted-foreground",
      "label_mono": "font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60"
    },
    "content_rules": [
      "Max line length: 68–78ch for paragraphs (use max-w-prose / max-w-[72ch])",
      "Use strong headings + short paragraphs + bullet lists (enterprise scanning)",
      "Avoid jargon walls; explain with ‘what it is’ + ‘why it matters’"
    ]
  },
  "layout_grid_spacing": {
    "grid": {
      "container": "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8",
      "section_padding": "py-14 sm:py-18 lg:py-24",
      "hero_padding": "pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14",
      "bento_grid": "grid gap-4 sm:gap-6 lg:gap-8",
      "columns": {
        "two_col": "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12",
        "three_col": "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        "four_col": "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      }
    },
    "spacing_philosophy": [
      "Use 2–3x more whitespace than typical templates",
      "Prefer section bands (bg-secondary/40) to separate content instead of heavy borders",
      "Use separators sparingly; rely on spacing + typography"
    ]
  },
  "component_system": {
    "component_path": {
      "shadcn_ui_dir": "/app/frontend/src/components/ui",
      "primary_components": [
        "button.jsx",
        "card.jsx",
        "badge.jsx",
        "navigation-menu.jsx",
        "sheet.jsx",
        "separator.jsx",
        "accordion.jsx",
        "tabs.jsx",
        "form.jsx",
        "input.jsx",
        "textarea.jsx",
        "label.jsx",
        "sonner.jsx"
      ]
    },
    "navigation": {
      "desktop": {
        "pattern": "Top nav with left brand, center links, right CTA button. Sticky with subtle blur.",
        "classes": "sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70",
        "links": "Use NavigationMenu for hoverable, accessible nav. Keep it simple (no mega menus).",
        "data_testids": {
          "nav": "site-nav",
          "logo": "nav-logo",
          "primary_cta": "nav-book-discovery-call"
        }
      },
      "mobile": {
        "pattern": "Use Sheet for hamburger menu. CTA appears as full-width button inside sheet.",
        "data_testids": {
          "menu_button": "mobile-nav-open-button",
          "menu_sheet": "mobile-nav-sheet",
          "menu_cta": "mobile-nav-book-discovery-call"
        }
      }
    },
    "buttons": {
      "style": "Professional / Corporate with premium radius (10–12px) and crisp focus ring.",
      "variants": {
        "primary": {
          "use": "Book a discovery call",
          "classes": "bg-[hsl(var(--accent-cyan))] text-[hsl(var(--accent-cyan-foreground))] shadow-sm hover:brightness-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "motion": "hover: slight lift (translate-y-[-1px]) + shadow increase; active: scale-95"
        },
        "secondary": {
          "use": "View services / Learn more",
          "classes": "bg-secondary text-foreground hover:bg-secondary/70 border border-border",
          "motion": "hover: border darken + subtle lift"
        },
        "ghost": {
          "use": "Text links in hero",
          "classes": "bg-transparent hover:bg-secondary/60 text-foreground"
        }
      },
      "data_testids": {
        "primary": "primary-cta-button",
        "secondary": "secondary-cta-button"
      }
    },
    "cards_bento": {
      "pattern": "Bento grid cards with thin borders, soft shadow, and a tiny mono label.",
      "card_classes": "rounded-xl border bg-card shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-shadow",
      "header_pattern": "Top row: mono label + title; body: 2–3 bullets; footer: small link",
      "micro_interaction": "On hover: show a 1px cyan top border (pseudo-element) and slightly increase shadow.",
      "data_testids": {
        "capability_card": "capability-card",
        "service_card": "service-card",
        "industry_card": "industry-card"
      }
    },
    "badges": {
      "use": "Small tags like ‘Production-ready’, ‘RAG’, ‘Automation’",
      "classes": "rounded-full border border-border bg-background text-foreground/80",
      "accent_badge": "border-[hsl(var(--accent-violet))]/25 bg-[hsl(var(--accent-violet))]/10 text-foreground"
    },
    "accordions_tabs": {
      "use": "Services page (FAQ-style depth) and How We Work steps.",
      "accordion": "accordion.jsx",
      "tabs": "tabs.jsx",
      "interaction": "Keep motion short (150–220ms). No bouncing."
    },
    "forms_contact": {
      "components": ["form.jsx", "input.jsx", "textarea.jsx", "label.jsx", "button.jsx"],
      "field_style": "Large hit targets, clear labels, helper text, visible focus ring.",
      "input_classes": "h-11 rounded-lg bg-background border-border focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "textarea_classes": "min-h-32 rounded-lg",
      "validation": "Inline errors under fields; also toast via sonner on submit success/failure.",
      "data_testids": {
        "form": "contact-form",
        "name": "contact-form-name-input",
        "email": "contact-form-email-input",
        "company": "contact-form-company-input",
        "message": "contact-form-message-textarea",
        "submit": "contact-form-submit-button",
        "status": "contact-form-status-text"
      },
      "web3forms": {
        "note": "Use Web3Forms endpoint; show success state with a calm confirmation card (no confetti)."
      }
    },
    "trust_building_blocks": {
      "allowed": [
        "Principles (honesty, security, maintainability)",
        "Process transparency (How we work)",
        "Architecture diagram-style visuals (no client names)",
        "Security & compliance posture statements (careful wording)",
        "Founder bios with credible roles"
      ],
      "components": ["card.jsx", "separator.jsx", "badge.jsx"],
      "patterns": [
        "‘What you get’ checklist card",
        "‘Engagement model’ timeline",
        "‘Technical stack we work with’ logo-less list (text only)"
      ]
    }
  },
  "page_level_layouts": {
    "home": {
      "hero": {
        "layout": "Left: headline + subhead + CTAs; Right: ‘system diagram’ card stack + subtle network animation behind.",
        "hero_bg": "Use 1–2 radial gradients (Cyan Mist + Violet Trace) + noise overlay.",
        "primary_cta": "Book a discovery call",
        "secondary_cta": "Explore services",
        "data_testids": {
          "hero": "home-hero",
          "hero_primary_cta": "home-hero-book-call",
          "hero_secondary_cta": "home-hero-explore-services"
        }
      },
      "sections": [
        "What We Do (3 cards)",
        "Capabilities (bento grid)",
        "How We Work (4-step timeline)",
        "Industries (chips + cards)",
        "Why Drag AI (principles)",
        "Founders preview (2 bio cards)",
        "CTA band (simple, no gradient)"
      ]
    },
    "about": {
      "structure": [
        "Company summary (max-w-prose)",
        "Principles (3–5 cards)",
        "Founders (text-only bios, 2 cards)",
        "Operating model (short bullets)"
      ]
    },
    "services": {
      "structure": [
        "Intro + service index",
        "5 service detail sections (each: what it is, where it fits, typical deliverables)",
        "FAQ accordion",
        "CTA"
      ],
      "services_list": [
        "Agentic AI Systems",
        "RAG (Retrieval-Augmented Generation)",
        "AI Automation",
        "Document Intelligence",
        "Conversational AI"
      ]
    },
    "industries": {
      "structure": [
        "Industry grid (7)",
        "For each: common workflows + example use-cases (no client claims)",
        "CTA"
      ],
      "industries_list": [
        "Logistics",
        "Construction",
        "Hospitality",
        "Retail",
        "Insurance",
        "Property Management",
        "Professional Services"
      ]
    },
    "contact": {
      "layout": "Two-column on desktop: left copy + contact details; right form card.",
      "include": [
        "LinkedIn link",
        "info@drag-ai.com",
        "Bengaluru, India"
      ]
    },
    "legal": {
      "privacy_terms": "Single-column, max-w-prose, strong headings, table-of-contents via anchor links."
    }
  },
  "motion_microinteractions": {
    "principles": [
      "Motion should communicate structure (reveal, focus, hierarchy) — not decoration",
      "Durations: 150–220ms for UI, 400–700ms for section reveals",
      "Easing: ease-out for entrances, ease-in-out for hover",
      "Respect prefers-reduced-motion: reduce (disable background animation + reduce reveal motion)"
    ],
    "recommended_library": {
      "name": "framer-motion",
      "install": "npm i framer-motion",
      "usage": "Use for section reveal on scroll (whileInView) and small hover transitions. Keep it moderate."
    },
    "section_reveal_pattern": {
      "js_scaffold": "// Example (React .js)\nimport { motion, useReducedMotion } from 'framer-motion';\n\nexport default function Reveal({ children }) {\n  const reduce = useReducedMotion();\n  return (\n    <motion.div\n      initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}\n      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}\n      viewport={{ once: true, amount: 0.2 }}\n      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}\n    >\n      {children}\n    </motion.div>\n  );\n}\n"
    },
    "hover_states": {
      "buttons": "hover: translate-y-[-1px] + shadow-md; active: scale-95",
      "cards": "transition-shadow only (no transition: all). Add subtle border highlight via pseudo-element.",
      "links": "Underline appears on hover with cyan 2px line (background-size animation)."
    }
  },
  "neural_network_background": {
    "goal": "A lightweight, subtle node-link animation behind the hero (and optionally the footer CTA), never interfering with readability.",
    "implementation_options": {
      "preferred": {
        "name": "tsparticles (React wrapper)",
        "why": "Modern, configurable, supports reduced motion and performance controls.",
        "install": "npm i @tsparticles/react tsparticles",
        "usage_notes": [
          "Render only in hero; set opacity low (0.25–0.35)",
          "Limit particles to ~40–70 on desktop, ~20–35 on mobile",
          "Disable on prefers-reduced-motion"
        ]
      },
      "fallback": {
        "name": "particles.js",
        "url": "https://vincentgarreau.com/particles.js/",
        "note": "If using particles.js, load it once and keep config minimal."
      }
    },
    "layering_rules": [
      "Canvas must be absolute inset-0 with pointer-events-none",
      "Add a white overlay (bg-background/70) above canvas to keep text crisp",
      "Never place canvas above interactive elements"
    ],
    "reduced_motion": {
      "rule": "If prefers-reduced-motion: reduce, do not animate; either hide canvas or render a static SVG pattern.",
      "css": "@media (prefers-reduced-motion: reduce) { .nn-bg { display: none; } }"
    }
  },
  "texture_noise": {
    "purpose": "Prevent flatness on large white areas without using heavy gradients.",
    "implementation": {
      "css": ".noise-overlay {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"120\" height=\"120\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"120\" height=\"120\" filter=\"url(%23n)\" opacity=\"0.08\"/></svg>');\n  mix-blend-mode: multiply;\n  opacity: 0.35;\n}\n"
    },
    "rule": "Use only on hero/section backgrounds; never on cards containing long text."
  },
  "imagery": {
    "policy": "No client logos/testimonials. Use abstract, system-like visuals only.",
    "image_urls": {
      "hero_abstract": [],
      "section_dividers": [],
      "optional": "Prefer CSS/SVG generated patterns over photos for credibility and performance."
    }
  },
  "accessibility_seo": {
    "a11y": [
      "WCAG AA contrast: ensure cyan text is not used for body paragraphs; reserve for links/accents",
      "Visible focus states: focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      "Keyboard navigable nav + sheet",
      "Reduced motion support for all animations"
    ],
    "seo": [
      "Use semantic headings (one H1 per page)",
      "Add descriptive meta titles/descriptions per page",
      "Use internal linking between Services ↔ Industries ↔ Contact",
      "Add Organization schema (no fake awards)"
    ]
  },
  "data_testid_conventions": {
    "rule": "All interactive and key informational elements must include data-testid in kebab-case.",
    "examples": [
      "data-testid=\"nav-book-discovery-call\"",
      "data-testid=\"services-agentic-ai-card\"",
      "data-testid=\"contact-form-submit-button\"",
      "data-testid=\"footer-linkedin-link\""
    ]
  },
  "instructions_to_main_agent": [
    "Update /app/frontend/src/App.css: remove dark .App-header defaults; avoid text-align:center. Prefer Tailwind for layout; keep App.css minimal for special effects only.",
    "Override tokens in /app/frontend/src/index.css to match the provided :root palette; do not rely on shadcn defaults.",
    "Use shadcn components from /app/frontend/src/components/ui (Button, Card, NavigationMenu, Sheet, Form, Input, Textarea, Sonner). Do not use raw HTML dropdowns/toasts.",
    "Implement hero neural network background using @tsparticles/react (preferred) with reduced-motion handling; render only in hero.",
    "Ensure every CTA, nav link, form field, and key info block has a stable data-testid attribute.",
    "Keep gradients within the restriction rules: only subtle radial overlays in hero; never on cards or long text."
  ],
  "appendix_general_ui_ux_design_guidelines": "<General UI UX Design Guidelines>  \n    - You must **not** apply universal transition. Eg: `transition: all`. This results in breaking transforms. Always add transitions for specific interactive elements like button, input excluding transforms\n    - You must **not** center align the app container, ie do not add `.App { text-align: center; }` in the css file. This disrupts the human natural reading flow of text\n   - NEVER: use AI assistant Emoji characters like`🤖🧠💭💡🔮🎯📚🎭🎬🎪🎉🎊🎁🎀🎂🍰🎈🎨🎰💰💵💳🏦💎🪙💸🤑📊📈📉💹🔢🏆🥇 etc for icons. Always use **FontAwesome cdn** or **lucid-react** library already installed in the package.json\n\n **GRADIENT RESTRICTION RULE**\nNEVER use dark/saturated gradient combos (e.g., purple/pink) on any UI element.  Prohibited gradients: blue-500 to purple 600, purple 500 to pink-500, green-500 to blue-500, red to pink etc\nNEVER use dark gradients for logo, testimonial, footer etc\nNEVER let gradients cover more than 20% of the viewport.\nNEVER apply gradients to text-heavy content or reading areas.\nNEVER use gradients on small UI elements (<100px width).\nNEVER stack multiple gradient layers in the same viewport.\n\n**ENFORCEMENT RULE:**\n    • Id gradient area exceeds 20% of viewport OR affects readability, **THEN** use solid colors\n\n**How and where to use:**\n   • Section backgrounds (not content backgrounds)\n   • Hero section header content. Eg: dark to light to dark color\n   • Decorative overlays and accent elements only\n   • Hero section with 2-3 mild color\n   • Gradients creation can be done for any angle say horizontal, vertical or diagonal\n\n- For AI chat, voice application, **do not use purple color. Use color like light green, ocean blue, peach orange etc**\n\n</Font Guidelines>\n\n- Every interaction needs micro-animations - hover states, transitions, parallax effects, and entrance animations. Static = dead. \n   \n- Use 2-3x more spacing than feels comfortable. Cramped designs look cheap.\n\n- Subtle grain textures, noise overlays, custom cursors, selection states, and loading animations: separates good from extraordinary.\n   \n- Before generating UI, infer the visual style from the problem statement (palette, contrast, mood, motion) and immediately instantiate it by setting global design tokens (primary, secondary/accent, background, foreground, ring, state colors), rather than relying on any library defaults. Don't make the background dark as a default step, always understand problem first and define colors accordingly\n    Eg: - if it implies playful/energetic, choose a colorful scheme\n           - if it implies monochrome/minimal, choose a black–white/neutral scheme\n\n**Component Reuse:**\n\t- Prioritize using pre-existing components from src/components/ui when applicable\n\t- Create new components that match the style and conventions of existing components when needed\n\t- Examine existing components to understand the project's component patterns before creating new ones\n\n**IMPORTANT**: Do not use HTML based component like dropdown, calendar, toast etc. You **MUST** always use `/app/frontend/src/components/ui/ ` only as a primary components as these are modern and stylish component\n\n**Best Practices:**\n\t- Use Shadcn/UI as the primary component library for consistency and accessibility\n\t- Import path: ./components/[component-name]\n\n**Export Conventions:**\n\t- Components MUST use named exports (export const ComponentName = ...)\n\t- Pages MUST use default exports (export default function PageName() {...})\n\n**Toasts:**\n  - Use `sonner` for toasts\"\n  - Sonner component are located in `/app/src/components/ui/sonner.tsx`\n\nUse 2–4 color gradients, subtle textures/noise overlays, or CSS-based noise to avoid flat visuals.\n</General UI UX Design Guidelines>"
}
