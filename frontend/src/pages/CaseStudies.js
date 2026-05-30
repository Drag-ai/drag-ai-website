import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Briefcase, Layers, Workflow, Plug } from 'lucide-react';

// Placeholder case-study structure. We do NOT use fake client names, fake logos,
// fake revenue, or fake percentages. Each card describes a representative
// engagement pattern with explicitly placeholder results language.
const caseStudies = [
  {
    id: 'agentic-customer-support',
    Icon: Briefcase,
    sector: 'B2B Software / SMB Support',
    challenge: 'Customer support team overloaded with repetitive tier-1 queries and slow after-hours coverage.',
    solution: 'Agentic AI assistant grounded in the company knowledge base, with human escalation for sensitive cases and CRM updates on resolution.',
    workflows: ['Tier-1 question answering', 'Ticket triage and routing', 'Conversation summarisation', 'CRM updates on resolution'],
    integrations: ['Zendesk', 'HubSpot', 'Slack', 'Custom KB'],
  },
  {
    id: 'document-ai-finance-ops',
    Icon: Layers,
    sector: 'Finance Operations',
    challenge: 'Finance team spending many hours per week extracting fields from inconsistent supplier invoices.',
    solution: 'Document AI pipeline with reviewer queues, validation rules, and clean writes into the accounting system.',
    workflows: ['Invoice ingestion', 'Line-level extraction', 'Validation against PO data', 'Reviewer queue for exceptions'],
    integrations: ['NetSuite or QuickBooks', 'S3 / SharePoint inbox', 'Slack reviewer notifications'],
  },
  {
    id: 'rag-internal-knowledge',
    Icon: Workflow,
    sector: 'Internal Knowledge / Operations',
    challenge: 'Operations team repeatedly answering the same questions about policies, SOPs, and product details.',
    solution: 'Private RAG assistant grounded in SharePoint and Confluence content, with per-user access control and source citations.',
    workflows: ['Internal Q&A with citations', 'SOP and policy retrieval', 'Drafting support for routine responses'],
    integrations: ['SharePoint', 'Confluence', 'Slack / Microsoft Teams', 'SSO via Azure AD'],
  },
  {
    id: 'voice-ai-appointments',
    Icon: Plug,
    sector: 'Services / Appointment-Driven Business',
    challenge: 'Front-desk team missing inbound calls outside business hours, leading to lost bookings.',
    solution: 'Voice AI agent for after-hours coverage: capture intent, qualify, book directly into the real calendar, escalate clinical or sensitive cases.',
    workflows: ['Inbound call answering', 'Intent capture and qualification', 'Calendar-aware booking', 'Clean handoff to staff'],
    integrations: ['Twilio', 'Google Calendar / Microsoft 365', 'CRM record creation'],
  },
];

export default function CaseStudies() {
  useSEO({
    title: 'AI Automation Case Studies | Drag AI',
    description:
      'Representative AI automation engagements from Drag AI — agentic systems, RAG, document AI, and voice AI built for real business workflows.',
    canonical: '/case-studies',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Case Studies', path: '/case-studies' },
    ],
  });

  return (
    <div className="flex flex-col" data-testid="case-studies-page">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="border-b bg-secondary/20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-3 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">Case Studies</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <Badge variant="outline" className="mb-4 border-[hsl(var(--accent-purple))]/30">
              Case Studies
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 max-w-3xl">
              AI Automation Case Studies
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              The following are representative engagement patterns Drag AI delivers. Client names,
              logos, and specific outcomes are intentionally omitted to respect confidentiality and
              to avoid inflated claims. We&apos;ll discuss directly comparable work on your strategy
              call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Cards */}
      <section className="py-10 sm:py-14 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((cs) => {
              const { Icon } = cs;
              return (
                <Reveal key={cs.id}>
                  <Card
                    className="p-6 card-hover h-full"
                    data-testid={`case-study-${cs.id}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                        {cs.sector}
                      </Badge>
                    </div>

                    <div className="mb-4">
                      <p className="font-mono text-[10px] tracking-wider uppercase text-foreground/60 mb-1">
                        Business Challenge
                      </p>
                      <p className="text-sm text-foreground/90 leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="mb-4">
                      <p className="font-mono text-[10px] tracking-wider uppercase text-foreground/60 mb-1">
                        AI Solution
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                    </div>

                    <div className="mb-4">
                      <p className="font-mono text-[10px] tracking-wider uppercase text-foreground/60 mb-1">
                        Workflows Automated
                      </p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {cs.workflows.map((w) => (
                          <li key={`${cs.id}-w-${w}`} className="flex items-start">
                            <span className="mr-2 text-[hsl(var(--accent-purple))]">&bull;</span>
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <p className="font-mono text-[10px] tracking-wider uppercase text-foreground/60 mb-1">
                        Tools Integrated
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cs.integrations.map((t) => (
                          <Badge key={`${cs.id}-t-${t}`} variant="outline" className="text-xs">
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="font-mono text-[10px] tracking-wider uppercase text-foreground/60 mb-1">
                        Results
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                        Results depend on workflow complexity and deployment scope. Discussed in
                        detail under NDA on your strategy call.
                      </p>
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-14 sm:py-18 lg:py-24 bg-gradient-to-br from-[hsl(var(--accent-purple))]/5 to-[hsl(var(--accent-pink))]/5">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Want directly comparable work for your business?
            </h2>
            <p className="text-base text-muted-foreground mb-8">
              Book a free AI strategy call. We&apos;ll talk about workflows closest to yours and
              what worked.
            </p>
            <Link to="/contact#ai-discovery-call">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95 shadow-sm"
                data-testid="case-studies-cta-button"
              >
                Book Free AI Strategy Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
