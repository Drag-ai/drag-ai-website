import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import {
  ArrowRight,
  Bot,
  Database,
  Cog,
  FileText,
  MessageSquare,
  Mic,
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
    id: 'custom-agents',
    Icon: Bot,
    name: 'Custom AI Agents Development',
    tagline: 'Build domain-specific autonomous agents for your business',
    whatItIs:
      'Purpose-built AI agents designed for specific business workflows—from customer intake to operations automation. Each agent understands context, uses tools, and takes autonomous action.',
    whenToUse: [
      'Automating repetitive knowledge work',
      'Customer support and engagement workflows',
      'Operations tasks requiring judgment and context',
    ],
    businessImpact:
      'Designed to reduce manual workload, enable continuous operation, and help scale operational capabilities across teams.',
    testId: 'services-custom-agents-card',
  },
  {
    id: 'workflow-automation',
    Icon: Cog,
    name: 'Autonomous Workflow Automation',
    tagline: 'End-to-end process automation with AI orchestration',
    whatItIs:
      'Multi-step business processes automated using coordinated AI agents. From data intake to decision-making to action—without manual handoffs.',
    whenToUse: [
      'Complex workflows spanning multiple systems',
      'Processes requiring conditional logic and decisions',
      'High-volume operations needing intelligent routing',
    ],
    businessImpact:
      'Built to accelerate processing times, reduce bottlenecks, and improve execution consistency.',
    testId: 'services-workflow-automation-card',
  },
  {
    id: 'multi-agent',
    Icon: Bot,
    name: 'Multi-Agent Systems & Orchestration',
    tagline: 'Coordinate specialized agents for complex business problems',
    whatItIs:
      'Architected systems where multiple AI agents with different specializations collaborate to solve complex problems. Includes task routing, inter-agent communication, and result aggregation.',
    whenToUse: [
      'Problems requiring diverse expertise (analysis, writing, validation)',
      'Workflows with parallel processing needs',
      'Systems needing specialist agents for different domains',
    ],
    businessImpact:
      'Designed to handle complex problems that require multiple specialized capabilities, reducing time-to-resolution through coordinated agent collaboration.',
    testId: 'services-multi-agent-card',
  },
  {
    id: 'rag',
    Icon: Database,
    name: 'RAG Systems & Knowledge Agents',
    tagline: 'AI agents grounded in your proprietary knowledge',
    whatItIs:
      "Retrieval-Augmented Generation systems where AI agents access and reason over your organization's documents, databases, and knowledge bases to provide accurate, context-aware responses.",
    whenToUse: [
      'Internal knowledge management and Q&A',
      'Customer support with company-specific information',
      'Compliance and policy interpretation',
    ],
    businessImpact:
      'Helps unlock institutional knowledge at scale, supports faster onboarding, and provides consistent information access.',
    testId: 'services-rag-card',
  },
  {
    id: 'doc-ai',
    Icon: FileText,
    name: 'Document Processing Agents',
    tagline: 'Intelligent extraction and classification at scale',
    whatItIs:
      'AI agents specialized in document understanding—extracting data from invoices, contracts, forms, and unstructured files with context awareness.',
    whenToUse: [
      'Invoice and contract processing',
      'Form digitization and validation',
      'Compliance document review and categorization',
    ],
    businessImpact:
      'Designed to significantly accelerate document processing, improve accuracy, and enable faster data availability.',
    testId: 'services-document-agents-card',
  },
  {
    id: 'conversational',
    Icon: MessageSquare,
    name: 'Conversational AI Agents',
    tagline: 'Natural language interfaces powered by agentic workflows',
    whatItIs:
      'Conversational agents that do not just answer questions—they take action. Book appointments, retrieve data, trigger workflows, and escalate to humans when needed.',
    whenToUse: [
      'Customer self-service portals',
      'Internal employee helpdesks',
      'Intake automation for sales and support',
    ],
    businessImpact:
      'Built to handle high volumes of routine inquiries autonomously, improve response times, and help reduce support costs.',
    testId: 'services-conversational-agents-card',
  },
  {
    id: 'voice',
    Icon: Mic,
    name: 'Voice AI Agents',
    tagline: 'Real-time voice agents for support, intake, and scheduling',
    whatItIs:
      'Low-latency voice agents that handle inbound and outbound calls with natural conversation, integrate with your CRM and telephony stack, and follow your business logic and compliance scripts.',
    whenToUse: [
      'Automated customer support and FAQs',
      'Appointment booking and reminders',
      'Lead qualification and outbound follow-up',
    ],
    businessImpact:
      'Designed to extend support hours, reduce queue times, and free human teams to focus on complex cases.',
    testId: 'services-voice-ai-card',
  },
  {
    id: 'predictive',
    Icon: LineChart,
    name: 'Predictive Analytics',
    tagline: 'Forecasting and decision support powered by ML',
    whatItIs:
      'Custom machine learning models for demand forecasting, churn prediction, anomaly detection, and risk scoring — integrated into your dashboards and operational workflows.',
    whenToUse: [
      'Demand, inventory, and capacity planning',
      'Customer churn and lifetime value prediction',
      'Fraud, anomaly, and risk detection',
    ],
    businessImpact:
      'Helps decision-makers act earlier with data-driven confidence and reduce avoidable losses.',
    testId: 'services-predictive-analytics-card',
  },
  {
    id: 'consulting',
    Icon: Compass,
    name: 'AI Strategy & Consulting',
    tagline: 'Where to start, what to build, and how to scale AI safely',
    whatItIs:
      'Hands-on advisory for leadership teams: AI use-case discovery, opportunity sizing, architecture review, vendor and model selection, and a pragmatic 90-day roadmap that fits your data, team, and risk profile.',
    whenToUse: [
      'You want a credible starting point for AI adoption',
      'You need a second opinion on an in-flight AI initiative',
      'You want a roadmap your board and ops team both believe in',
    ],
    businessImpact:
      'Cuts wasted spend on the wrong AI experiments and aligns AI investment with measurable business outcomes.',
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
