import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight } from 'lucide-react';

export default function Industries() {
  useSEO({
    title: 'Industries',
    description: 'AI solutions for Logistics, Construction, Hospitality, Retail, Insurance, Property Management, and Professional Services. Tailored workflows for your industry.',
    canonical: '/industries',
  });
  const industries = [
    {
      name: 'Logistics',
      workflows: ['Route optimization', 'Shipment tracking', 'Warehouse automation'],
      useCases:
        'Intelligent dispatch systems, predictive maintenance for fleet, automated documentation processing.',
    },
    {
      name: 'Construction',
      workflows: ['Project planning', 'Safety compliance', 'Resource allocation'],
      useCases:
        'Automated permit tracking, site safety monitoring via computer vision, supply chain optimization.',
    },
    {
      name: 'Hospitality',
      workflows: ['Guest services', 'Booking management', 'Operations coordination'],
      useCases:
        'AI concierge systems, dynamic pricing optimization, review sentiment analysis and response automation.',
    },
    {
      name: 'Retail',
      workflows: ['Inventory management', 'Customer experience', 'Demand forecasting'],
      useCases:
        'Conversational product search, personalized recommendations, automated reordering systems.',
    },
    {
      name: 'Insurance',
      workflows: ['Claims processing', 'Risk assessment', 'Policy management'],
      useCases:
        'Automated claims triage, document intelligence for policy analysis, fraud detection systems.',
    },
    {
      name: 'Property Management',
      workflows: ['Tenant services', 'Maintenance coordination', 'Lease management'],
      useCases:
        'AI tenant support chatbots, automated maintenance scheduling, lease document processing.',
    },
    {
      name: 'Professional Services',
      workflows: ['Client engagement', 'Knowledge management', 'Proposal generation'],
      useCases:
        'Internal knowledge Q&A systems, automated proposal drafting, client communication summarization.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Industries We Serve
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Tailored AI solutions across diverse sectors. We understand industry-specific
                workflows and translate them into production-ready AI systems.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, idx) => (
              <Reveal key={idx} delay={0.1 * (idx % 4)}>
                <Card
                  className="p-6 card-hover group"
                  data-testid="industry-card"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-indigo))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center">
                      <span className="text-lg font-semibold text-[hsl(var(--accent-indigo))]">
                        {industry.name.charAt(0)}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold flex-1 group-hover:text-[hsl(var(--accent-indigo))] transition-colors">
                      {industry.name}
                    </h2>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-2">
                      COMMON WORKFLOWS
                    </p>
                    <ul className="space-y-1">
                      {industry.workflows.map((workflow, wIdx) => (
                        <li
                          key={wIdx}
                          className="text-sm text-muted-foreground flex items-start"
                        >
                          <span className="mr-2">•</span>
                          <span>{workflow}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-2">
                      EXAMPLE USE CASES
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {industry.useCases}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Bring */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                What We Bring to Your Industry
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <Card className="p-6 text-center">
                <h3 className="font-semibold mb-2">Deep Technical Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  We don\'t just understand AI — we understand how to deploy it reliably in
                  your industry\'s specific context.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.2}>
              <Card className="p-6 text-center">
                <h3 className="font-semibold mb-2">Production-First Mindset</h3>
                <p className="text-sm text-muted-foreground">
                  Systems designed for scale, edge cases, and evolving requirements — not just
                  demos.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.3}>
              <Card className="p-6 text-center">
                <h3 className="font-semibold mb-2">Clear Communication</h3>
                <p className="text-sm text-muted-foreground">
                  Transparent about what\'s possible, what\'s valuable, and what will deliver
                  measurable ROI.
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
              Don't See Your Industry?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              We work across many sectors. Let's discuss your specific use case.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-indigo))] text-[hsl(var(--accent-indigo-foreground))] shadow-sm hover:brightness-95"
              >
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
