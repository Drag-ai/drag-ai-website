import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Search, Lightbulb, Code, BarChart, Rocket, TrendingUp } from 'lucide-react';

export default function HowWeWork() {
  useSEO({
    title: 'How We Work | Drag AI Process',
    description: 'Our 6-step AI implementation process: Discover, Design, Build PoC, Evaluate, Deploy, and Monitor. Business-first approach to practical AI adoption.',
    canonical: '/how-we-work',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'How We Work', path: '/how-we-work' },
    ],
  });

  const process = [
    {
      id: 'discover',
      number: '01',
      icon: Search,
      title: 'Discover',
      description: 'Understand the business problem, users, data, systems, and success metrics.',
      details: [
        'Identify the core business problem and operational workflow',
        'Map current process, pain points, and manual steps',
        'Assess available data, quality, and access requirements',
        'Define clear success metrics and ROI expectations',
        'Understand existing systems, integrations, and constraints'
      ]
    },
    {
      id: 'design',
      number: '02',
      icon: Lightbulb,
      title: 'Design',
      description: 'Create the AI workflow, architecture, data flow, integrations, and evaluation approach.',
      details: [
        'Design the end-to-end AI workflow and user experience',
        'Define technical architecture and integration points',
        'Plan data pipeline, preprocessing, and storage strategy',
        'Establish evaluation framework and quality metrics',
        'Document edge cases, fallback logic, and human-in-the-loop needs'
      ]
    },
    {
      id: 'build-poc',
      number: '03',
      icon: Code,
      title: 'Build PoC',
      description: 'Develop a focused proof of concept that solves one high-value problem.',
      details: [
        'Build core AI functionality with production-quality code',
        'Implement data ingestion, processing, and model integration',
        'Create user interface or API for testing',
        'Add logging, error handling, and monitoring hooks',
        'Focus on one critical workflow to validate quickly'
      ]
    },
    {
      id: 'evaluate',
      number: '04',
      icon: BarChart,
      title: 'Evaluate',
      description: 'Measure accuracy, reliability, cost, latency, usability, and business impact.',
      details: [
        'Test against real business scenarios and edge cases',
        'Measure accuracy, precision, recall, and error rates',
        'Assess cost per inference, latency, and scalability',
        'Gather user feedback on usability and trust',
        'Calculate projected ROI and operational impact'
      ]
    },
    {
      id: 'deploy',
      number: '05',
      icon: Rocket,
      title: 'Deploy',
      description: 'Move the solution into a secure production-ready environment.',
      details: [
        'Containerize and configure for production infrastructure',
        'Implement security, authentication, and access controls',
        'Set up monitoring, alerting, and logging systems',
        'Create deployment pipeline and rollback procedures',
        'Document operational procedures and support workflows'
      ]
    },
    {
      id: 'monitor',
      number: '06',
      icon: TrendingUp,
      title: 'Monitor & Improve',
      description: 'Track usage, errors, model performance, fallback cases, and improvement opportunities.',
      details: [
        'Monitor system performance, uptime, and error rates',
        'Track model accuracy drift and prediction quality',
        'Analyze fallback cases and human intervention patterns',
        'Collect user feedback and satisfaction metrics',
        'Identify optimization opportunities and iterative improvements'
      ]
    }
  ];

  const principles = [
    {
      title: 'Business-First',
      description: 'Start with the problem, not the technology. AI is a tool, not a solution.'
    },
    {
      title: 'Data-Aware',
      description: 'Assess data quality early. Great models need good data.'
    },
    {
      title: 'Iterative',
      description: 'Build PoC, validate, refine. Do not boil the ocean upfront.'
    },
    {
      title: 'Production-Ready',
      description: 'Design for deployment, not demos. Real systems need monitoring and fallbacks.'
    }
  ];

  return (
    <div className="flex flex-col" data-testid="how-we-work-page">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4 border-[hsl(var(--accent-purple))]/30">
                Our Process
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                How We <span className="text-[hsl(var(--accent-purple))]">Work</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We do not start with AI hype. We start with the business problem, available data, operational workflow, and measurable outcome.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {process.map((step, idx) => (
              <Reveal key={step.id} delay={0.1 * idx}>
                <div className="relative">
                  {idx < process.length - 1 && (
                    <div className="absolute left-7 top-20 bottom-0 w-px bg-border hidden sm:block" />
                  )}

                  <Card className="p-6 sm:p-8 relative" data-testid={`process-step-${step.id}`}>
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-pink))] flex items-center justify-center text-white font-bold text-lg">
                            {step.number}
                          </div>
                          <div className="mt-3 w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center">
                            <step.icon className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-base text-muted-foreground mb-4">{step.description}</p>

                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-foreground/60 mb-3">Key Activities</p>
                          <ul className="space-y-2">
                            {step.details.map((detail, dIdx) => (
                              <li key={`${step.id}-detail-${dIdx}`} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-[hsl(var(--accent-purple))] mr-2 mt-0.5">•</span>
                                <span className="leading-relaxed">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-14 sm:py-18 bg-secondary/40">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Card className="p-8 sm:p-10">
              <h2 className="text-2xl font-semibold mb-4 text-center">Our Philosophy</h2>
              <p className="text-base text-muted-foreground leading-relaxed text-center mb-8">
                We believe successful AI projects start with clarity, not complexity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {principles.map((principle, pIdx) => (
                  <div key={`principle-${pIdx}`} className="p-4 rounded-lg bg-secondary/50">
                    <h3 className="font-semibold mb-2">{principle.title}</h3>
                    <p className="text-sm text-muted-foreground">{principle.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Ready to Start Your AI Project?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let us discuss your business problem, workflow, and data to see if AI can help.
            </p>
            <Link to="/contact#ai-discovery-call">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] shadow-sm hover:brightness-95"
                data-testid="how-we-work-cta-button"
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
