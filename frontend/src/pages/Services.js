import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import {
  ArrowRight,
  Bot,
  Database,
  FileText,
  MessageSquare,
  LineChart,
  Compass,
} from 'lucide-react';
import { ServiceDetailCard } from '../components/services/ServiceDetailCard';
import { ServicesQuickList } from '../components/services/ServicesQuickList';
import {
  HowWeDeliverSection,
  ServicesFAQSection,
} from '../components/services/ServicesSecondarySections';

const services = [
  {
    id: 'agentic-ai',
    Icon: Bot,
    name: 'Agentic AI Development',
    tagline: 'Tool-using agents that execute multi-step business workflows',
    whatItIs:
      'Production-ready agents built around your business logic: tool-calling, multi-step workflow execution, API and tool integration, human approval checkpoints, structured logging and monitoring, and guardrails with safe fallbacks.',
    whenToUse: [
      'Operational workflows that span multiple systems and steps',
      'Repetitive knowledge work that still needs judgement',
      'Processes that need controlled autonomy with audit trails',
    ],
    businessImpact:
      'Reduce repetitive work and automate operational tasks without losing human control.',
    testId: 'services-agentic-ai-card',
  },
  {
    id: 'rag',
    Icon: Database,
    name: 'RAG & Enterprise Knowledge Assistants',
    tagline: 'Source-grounded answers from your internal documents and systems',
    whatItIs:
      'Retrieval-Augmented Generation pipelines designed for the real world: PDF, DOCX, PPTX, and XLSX ingestion; embeddings and vector search; metadata filtering; source-grounded responses; access-control-ready architecture; and hallucination reduction with evaluation.',
    whenToUse: [
      'Internal Q&A over policies, SOPs, manuals, and proposals',
      'Customer support grounded in your verified content',
      'Compliance, audit, and onboarding knowledge assistants',
    ],
    businessImpact:
      'Help teams get trusted answers from internal documents and knowledge bases.',
    testId: 'services-rag-card',
  },
  {
    id: 'doc-ai',
    Icon: FileText,
    name: 'Document AI & Intelligent Extraction',
    tagline: 'Structured data from unstructured documents at scale',
    whatItIs:
      'Document understanding pipelines for invoices, contracts, leases, claims, and resumes. JD matching, validation rules, exception routing, and clean JSON / Excel / API output that drops straight into your existing workflows.',
    whenToUse: [
      'Invoice, contract, and lease processing',
      'Claims and policy document handling',
      'Resume-to-JD matching and recruitment workflows',
    ],
    businessImpact:
      'Reduce manual document processing and improve operational speed.',
    testId: 'services-doc-ai-card',
  },
  {
    id: 'chat-voice',
    Icon: MessageSquare,
    name: 'Conversational AI & Voice AI',
    tagline: 'Chat, voice, and multilingual assistants with safe escalation',
    whatItIs:
      'Website chatbots, internal support bots, multilingual assistants, and real-time voice agents. Speech-to-text workflows, intent classification, entity extraction, and graceful human escalation when confidence is low.',
    whenToUse: [
      'Customer support, FAQs, and lead intake',
      'Internal helpdesks across HR, IT, and operations',
      'Voice agents for booking, qualification, and follow-up',
    ],
    businessImpact:
      'Improve response time and consistency across customer and internal support.',
    testId: 'services-chat-voice-card',
  },
  {
    id: 'predictive',
    Icon: LineChart,
    name: 'Predictive Analytics & ML Solutions',
    tagline: 'Forecasting and decision support built into your workflows',
    whatItIs:
      'Custom ML models for forecasting, risk scoring, customer segmentation, recommendation systems, operational analytics, and KPI dashboards \u2014 integrated with your data platforms and reviewed against real business outcomes.',
    whenToUse: [
      'Demand, inventory, and capacity forecasting',
      'Churn, fraud, anomaly, and risk scoring',
      'KPI dashboards that combine reporting and prediction',
    ],
    businessImpact:
      'Help teams make better decisions using business data.',
    testId: 'services-predictive-card',
  },
  {
    id: 'consulting',
    Icon: Compass,
    name: 'AI Consulting & PoC Delivery',
    tagline: 'From AI idea to a measurable implementation plan',
    whatItIs:
      'Hands-on advisory and delivery: AI opportunity assessment, data readiness review, solution architecture, PoC delivery, evaluation framework, and a production roadmap your board and operations team both believe in.',
    whenToUse: [
      'You want a credible starting point for AI adoption',
      'You need a second opinion on an in-flight AI initiative',
      'You want a 90-day roadmap tied to outcomes, not buzzwords',
    ],
    businessImpact:
      'Move from AI idea to measurable implementation plan.',
    testId: 'services-consulting-card',
  },
];

const ServicesHero = () => (
  <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
    <NeuralBackground />
    <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              <span className="text-[hsl(var(--accent-purple))]">Agentic AI</span> Development Services
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Build autonomous AI agents and intelligent workflows that transform how your business
              operates. From custom agents to multi-agent orchestration—production-ready systems
              that deliver measurable results.
            </p>
          </Reveal>
        </div>

        <ServicesQuickList />
      </div>
    </div>
  </section>
);

const ServicesCTA = () => (
  <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
      <Reveal>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          Let us discuss which services align with your goals
        </p>
        <Link to="/contact#ai-discovery-call">
          <Button
            size="lg"
            className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] shadow-sm hover:brightness-95"
            data-testid="services-cta-button"
          >
            Book a 30-Minute AI Discovery Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </Reveal>
    </div>
  </section>
);

export default function Services() {
  useSEO({
    title: 'Agentic AI Development Services | Custom AI Agents & Autonomous Workflows',
    description:
      'Professional agentic AI development services. Build custom AI agents, autonomous workflow automation, multi-agent systems, RAG, document intelligence, voice AI, predictive analytics, and AI strategy consulting.',
    canonical: '/services',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ],
  });

  return (
    <div className="flex flex-col">
      <ServicesHero />

      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service) => (
              <ServiceDetailCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <HowWeDeliverSection />
      <ServicesFAQSection />
      <ServicesCTA />
    </div>
  );
}
