import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Bot, Database, Cog, FileText, MessageSquare } from 'lucide-react';

export default function Services() {
  useSEO({
    title: 'Agentic AI Development Services | Custom AI Agents & Autonomous Workflows',
    description: 'Professional agentic AI development services. Build custom AI agents, autonomous workflow automation, multi-agent systems, and intelligent orchestration for enterprise operations.',
    canonical: '/services',
  });
  const services = [
    {
      icon: <Bot className="h-6 w-6" />,
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
      icon: <Cog className="h-6 w-6" />,
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
      icon: <Bot className="h-6 w-6" />,
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
      icon: <Database className="h-6 w-6" />,
      name: 'RAG Systems & Knowledge Agents',
      tagline: 'AI agents grounded in your proprietary knowledge',
      whatItIs:
        'Retrieval-Augmented Generation systems where AI agents access and reason over your organization\'s documents, databases, and knowledge bases to provide accurate, context-aware responses.',
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
      icon: <FileText className="h-6 w-6" />,
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
      icon: <MessageSquare className="h-6 w-6" />,
      name: 'Conversational AI Agents',
      tagline: 'Natural language interfaces powered by agentic workflows',
      whatItIs:
        'Conversational agents that don\'t just answer questions—they take action. Book appointments, retrieve data, trigger workflows, and escalate to humans when needed.',
      whenToUse: [
        'Customer self-service portals',
        'Internal employee helpdesks',
        'Intake automation for sales and support',
      ],
      businessImpact:
        'Built to handle high volumes of routine inquiries autonomously, improve response times, and help reduce support costs.',
      testId: 'services-conversational-agents-card',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <Reveal>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                  <span className="text-[hsl(var(--accent-purple))]">Agentic AI</span> Development Services
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Build autonomous AI agents and intelligent workflows that transform how your business operates. From custom agents to multi-agent orchestration—production-ready systems that deliver measurable results.
                </p>
              </Reveal>
            </div>

            {/* Right: Service Quick Stats */}
            <div className="hidden lg:block">
              <Reveal delay={0.2}>
                <Card className="p-6 card-hover border-2">
                  <div className="space-y-4">
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 block">
                      OUR SERVICES
                    </span>
                    <div className="space-y-3">
                      {[
                        { icon: '🤖', name: 'Agentic AI Systems', color: 'purple' },
                        { icon: '🗄️', name: 'RAG Systems', color: 'purple' },
                        { icon: '⚡', name: 'AI Automation', color: 'purple' },
                        { icon: '📄', name: 'Document Intelligence', color: 'purple' },
                        { icon: '💬', name: 'Conversational AI', color: 'purple' },
                      ].map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3 group">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                            {service.icon}
                          </div>
                          <span className="text-sm font-medium group-hover:text-[hsl(var(--accent-purple))] transition-colors">
                            {service.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <Reveal key={idx} delay={0}>
                <Card
                  className="p-8 md:p-10 card-hover"
                  data-testid={service.testId}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left: Icon + Title */}
                    <div className="lg:col-span-4">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))] icon-glow">
                          {service.icon}
                        </div>
                        <div>
                          <h2 className="text-2xl font-semibold mb-1">{service.name}</h2>
                          <p className="text-sm text-[hsl(var(--accent-purple))]">{service.tagline}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right: Details */}
                    <div className="lg:col-span-8 space-y-6">
                      <div>
                        <h3 className="font-semibold mb-2">What It Is</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.whatItIs}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">When to Use</h3>
                        <ul className="space-y-1">
                          {service.whenToUse.map((item, itemIdx) => (
                            <li
                              key={itemIdx}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Business Impact</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {service.businessImpact}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                How We Deliver
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                A structured approach from discovery to deployment
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Discovery & Design</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We start by understanding your use case, data landscape, and success criteria.
                  Then we design an architecture that addresses your requirements.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Iterative Development</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We build in sprints with regular demos and feedback loops. You see progress
                  weekly, not at the end of a months-long black box.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.3}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Production Rollout</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Deployment, monitoring setup, documentation, and knowledge transfer. We ensure
                  your team can maintain and evolve the system.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2 text-lg">What exactly are AI agents?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  AI agents are autonomous software systems that can perceive their environment, make decisions, and take actions to achieve specific goals. Unlike traditional automation, they can handle ambiguous situations, use tools, and adapt their behavior based on context—making them ideal for complex business workflows.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2 text-lg">How long does it take to build an agentic AI system?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A proof-of-concept agent typically takes 2-4 weeks to validate feasibility. Full production deployment ranges from 2-6 months depending on complexity, integration requirements, and the number of workflows being automated. We deliver working prototypes early and iterate based on real feedback.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.3}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2 text-lg">Do we need AI expertise in-house to adopt agentic systems?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No. We build systems your existing team can operate and maintain. Agents come with intuitive interfaces, monitoring dashboards, and human-in-the-loop controls. We provide training and documentation so your team is empowered, not dependent on us.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.4}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2 text-lg">What's the difference between AI automation and agentic AI?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Traditional AI automation follows fixed rules and handles predictable patterns. Agentic AI can reason, plan multi-step workflows, use tools dynamically, and handle exceptions—essentially acting like a skilled employee rather than a script. This makes agentic systems suitable for complex, judgment-intensive work.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.5}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2 text-lg">How do you ensure value from agentic AI projects?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We start with clear success metrics: time saved, cost reduced, accuracy improved, or throughput increased. Our pilot-first approach helps validate potential value before full deployment. We focus on measurable business outcomes and transparent project scoping.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Let's discuss which services align with your goals
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] shadow-sm hover:brightness-95"
              >
                Schedule a Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
