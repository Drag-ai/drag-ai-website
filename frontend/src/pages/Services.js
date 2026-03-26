import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Bot, Database, Cog, FileText, MessageSquare } from 'lucide-react';

export default function Services() {
  useSEO({
    title: 'AI Services: RAG, Automation & AI Implementation | Drag AI',
    description: 'Professional AI services including RAG systems, AI automation, agentic AI, document intelligence, and conversational AI. Expert AI implementation and consulting for growing businesses.',
    canonical: '/services',
  });
  const services = [
    {
      icon: <Bot className="h-6 w-6" />,
      name: 'Agentic AI Systems',
      tagline: 'Autonomous systems that plan, execute, and adapt',
      whatItIs:
        'Multi-agent architectures where AI systems autonomously plan workflows, use tools, and make decisions to achieve complex goals.',
      whenToUse: [
        'Complex workflows requiring multi-step reasoning',
        'Tasks that need tool orchestration (APIs, databases, code execution)',
        'Scenarios requiring autonomous decision-making',
      ],
      businessImpact:
        'Reduces manual coordination overhead, accelerates complex processes, and enables scalable decision support systems.',
      testId: 'services-agentic-ai-card',
    },
    {
      icon: <Database className="h-6 w-6" />,
      name: 'RAG (Retrieval-Augmented Generation)',
      tagline: 'Knowledge-grounded AI that scales with your data',
      whatItIs:
        'Systems that combine large language models with your organization\'s knowledge base, enabling accurate, context-aware responses grounded in your data.',
      whenToUse: [
        'Internal knowledge management and Q&A',
        'Document search and summarization',
        'Customer support with company-specific information',
      ],
      businessImpact:
        'Unlocks organizational knowledge at scale, reduces information silos, and improves decision quality.',
      testId: 'services-rag-card',
    },
    {
      icon: <Cog className="h-6 w-6" />,
      name: 'AI Automation',
      tagline: 'Intelligent workflows that streamline operations',
      whatItIs:
        'AI-powered automation of repetitive business processes, from data entry to report generation, using a combination of LLMs, ML models, and traditional automation.',
      whenToUse: [
        'High-volume repetitive tasks',
        'Processes requiring judgment calls on structured data',
        'Workflow orchestration across multiple systems',
      ],
      businessImpact:
        'Reduces operational costs, improves accuracy, and frees teams to focus on high-value work.',
      testId: 'services-automation-card',
    },
    {
      icon: <FileText className="h-6 w-6" />,
      name: 'Document Intelligence',
      tagline: 'Extract, classify, and process documents at scale',
      whatItIs:
        'Automated extraction and processing of information from unstructured documents including PDFs, images, forms, and scanned files.',
      whenToUse: [
        'Invoice/contract processing',
        'Form digitization and validation',
        'Compliance document review',
      ],
      businessImpact:
        'Accelerates document processing cycles, reduces errors, and enables data-driven insights from unstructured sources.',
      testId: 'services-document-intelligence-card',
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      name: 'Conversational AI',
      tagline: 'Natural language interfaces for users and systems',
      whatItIs:
        'Chatbots and voice assistants powered by LLMs, capable of understanding intent, maintaining context, and executing actions.',
      whenToUse: [
        'Customer support automation',
        'Internal employee helpdesks',
        'Voice-driven application interfaces',
      ],
      businessImpact:
        'Improves customer experience, scales support operations, and reduces response times.',
      testId: 'services-conversational-ai-card',
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
                  <span className="text-[hsl(var(--accent-purple))]">AI Services</span> That Scale
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Production-grade AI capabilities tailored to your business needs. From agentic
                  systems to document intelligence, we build solutions that scale.
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
                <h3 className="font-semibold mb-2 text-lg">How long does AI implementation typically take?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Project timelines vary based on complexity. A proof of concept typically takes 2-4 weeks, while full implementation projects range from 2-6 months. We use iterative sprints with regular demos so you see progress weekly.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2 text-lg">Do we need an in-house AI team to work with you?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  No. We design systems that your existing technical team can maintain and evolve. We provide comprehensive documentation and knowledge transfer to ensure you're not dependent on us long-term.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.3}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2 text-lg">What industries do you specialize in?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We work across logistics, construction, hospitality, retail, insurance, property management, and professional services. Our focus is on understanding your specific workflows and translating them into AI solutions.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.4}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2 text-lg">How do you ensure ROI from AI projects?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We start by defining clear success metrics during discovery. Our pilot-first approach allows you to validate business value before full-scale deployment. We focus on measurable outcomes like cost reduction, time savings, and operational efficiency.
                </p>
              </Card>
            </Reveal>

            <Reveal delay={0.5}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2 text-lg">What's your pricing model?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We offer fixed-price pilots for proof of concept work, and time-and-materials or fixed-price contracts for full implementation. Pricing depends on project scope, complexity, and timeline. Contact us for a detailed quote.
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
