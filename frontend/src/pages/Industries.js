import { Link } from 'react-router-dom';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight } from 'lucide-react';

export default function Industries() {
  useSEO({
    title: 'Agentic AI Solutions by Industry | Custom AI Agents for Business',
    description:
      'Industry-specific agentic AI solutions for construction, hospitality, logistics, real estate, insurance, HR & recruitment, retail, manufacturing, and professional services. Tailored to your operational workflows.',
    canonical: '/industries',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Industries', path: '/industries' },
    ],
  });
  const industries = [
    {
      name: 'Construction & EPC',
      slug: 'construction',
      workflows: ['BOQ extraction', 'RFI automation', 'Bid analysis', 'Site report summarization'],
      useCases:
        'AI agents for automated permit tracking, autonomous site safety monitoring with computer vision, multi-agent systems for supply chain coordination.',
    },
    {
      name: 'Hospitality & Restaurants',
      slug: 'hospitality',
      workflows: ['Booking assistant', 'Review intelligence', 'Staff scheduling', 'Customer support'],
      useCases:
        'AI concierge agents for 24/7 guest services, autonomous pricing agents for revenue optimization, workflow agents for review response and sentiment analysis.',
    },
    {
      name: 'Logistics & Warehousing',
      slug: 'logistics',
      workflows: ['BOL/invoice extraction', 'ETA assistant', 'Exception triage', 'Warehouse analytics'],
      useCases:
        'Autonomous dispatch agents, AI-powered predictive maintenance for fleets, intelligent document processing agents for customs and compliance.',
    },
    {
      name: 'Real Estate & Property Management',
      slug: 'property-management',
      workflows: ['Lease abstraction', 'Tenant chatbot', 'Maintenance request triage'],
      useCases:
        'AI tenant support agents for 24/7 service, autonomous maintenance scheduling agents, intelligent lease document processing with workflow automation.',
    },
    {
      name: 'Insurance & Claims',
      slug: 'insurance',
      workflows: ['Policy Q&A', 'Claim extraction', 'Claims triage', 'Exception detection'],
      useCases:
        'Autonomous claims triage agents, intelligent document extraction agents for policy analysis, multi-agent fraud detection systems.',
    },
    {
      name: 'HR & Recruitment',
      slug: 'hr-recruitment',
      workflows: ['Resume screening', 'JD matching', 'Candidate ranking'],
      useCases:
        'Explainable resume-to-JD matching, skill-gap reasoning, AI-assisted shortlisting, and interview-prep generation for hiring teams.',
    },
    {
      name: 'Retail & E-commerce',
      slug: 'retail',
      workflows: ['Product content automation', 'Returns triage', 'Demand forecasting'],
      useCases:
        'Conversational shopping agents, autonomous inventory replenishment agents, AI-powered demand forecasting with multi-agent coordination.',
    },
    {
      name: 'Manufacturing & Operations',
      slug: 'manufacturing-operations',
      workflows: ['SOP assistant', 'Quality report analysis', 'Predictive maintenance insights'],
      useCases:
        'SOP and procedure assistants for operators, anomaly detection over quality and downtime data, and predictive maintenance signals integrated with existing MES/SCADA stacks.',
    },
    {
      name: 'Professional Services',
      slug: 'professional-services',
      workflows: ['Client engagement', 'Knowledge management', 'Proposal generation'],
      useCases:
        'Knowledge retrieval agents for internal expertise, autonomous proposal generation agents, AI-powered client communication summarization and routing.',
    },
  ];

  // Slugs that have a dedicated detail subpage. Industries without a subpage
  // render as static cards with a "Discuss this industry" CTA instead of a broken link.
  const industriesWithSubpages = new Set([
    'logistics',
    'construction',
    'hospitality',
    'retail',
    'insurance',
    'property-management',
    'professional-services',
  ]);

  const renderIndustryCard = (industry) => (
    <Card className="p-6 card-hover group h-full" data-testid="industry-card">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center flex-shrink-0">
          <span className="text-lg font-semibold text-[hsl(var(--accent-purple))]">
            {industry.name.charAt(0)}
          </span>
        </div>
        <h2 className="text-xl font-semibold flex-1 group-hover:text-[hsl(var(--accent-purple))] transition-colors">
          {industry.name}
        </h2>
      </div>

      <div className="mb-4">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-2">
          COMMON WORKFLOWS
        </p>
        <ul className="space-y-1">
          {industry.workflows.map((workflow) => (
            <li
              key={`${industry.slug}-wf-${workflow}`}
              className="text-sm text-muted-foreground flex items-start"
            >
              <span className="mr-2">&bull;</span>
              <span>{workflow}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4">
        <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-2">
          AGENTIC AI USE CASES
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {industry.useCases}
        </p>
      </div>

      <div className="pt-4 border-t flex items-center justify-between text-sm text-muted-foreground group-hover:text-[hsl(var(--accent-purple))] transition-colors">
        <span>
          {industriesWithSubpages.has(industry.slug) ? 'Learn more' : 'Discuss this industry'}
        </span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Card>
  );

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
                  Agentic AI for <span className="text-[hsl(var(--accent-purple))]">Every Industry</span>
                </h1>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Custom AI agents and autonomous workflows tailored to your industry. From logistics to professional services—we build intelligent systems that understand your domain and transform your operations.
                </p>
              </Reveal>
            </div>

            {/* Right: Industry Count Widget */}
            <div className="hidden lg:block">
              <Reveal delay={0.2}>
                <Card className="p-8 card-hover border-2">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/20 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center">
                      <span className="text-5xl font-bold text-[hsl(var(--accent-purple))]">
                        9
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Industries Served</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      From construction to manufacturing
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Badge variant="outline" className="text-xs border-[hsl(var(--accent-purple))]/30 bg-[hsl(var(--accent-purple))]/5">
                        AI-Powered
                      </Badge>
                      <Badge variant="outline" className="text-xs border-[hsl(var(--accent-purple))]/30 bg-[hsl(var(--accent-purple))]/5">
                        Scalable
                      </Badge>
                    </div>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => {
              const hasSubpage = industriesWithSubpages.has(industry.slug);
              return (
                <Reveal key={industry.slug} delay={0.05 * (idx % 3)}>
                  {hasSubpage ? (
                    <Link to={`/industries/${industry.slug}`} className="block h-full">
                      {renderIndustryCard(industry)}
                    </Link>
                  ) : (
                    <Link
                      to="/contact#ai-discovery-call"
                      className="block h-full"
                      data-testid={`industry-discuss-${industry.slug}`}
                    >
                      {renderIndustryCard(industry)}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Bring */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Industry-Specific AI Agent Expertise
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <Card className="p-6 text-center">
                <h3 className="font-semibold mb-2">Domain-Aware AI Agents</h3>
                <p className="text-sm text-muted-foreground">
                  We build AI agents that understand your industry&apos;s language, workflows, and compliance requirements&mdash;not generic automation.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.2}>
              <Card className="p-6 text-center">
                <h3 className="font-semibold mb-2">Proven Agent Architectures</h3>
                <p className="text-sm text-muted-foreground">
                  Reusable multi-agent patterns for common industry workflows, customized to your specific operational context.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.3}>
              <Card className="p-6 text-center">
                <h3 className="font-semibold mb-2">Rapid Agent Deployment</h3>
                <p className="text-sm text-muted-foreground">
                  From pilot to production in weeks, not months. We deliver autonomous systems that scale with your operations.
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
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              We work across many sectors. Let&apos;s discuss your specific use case.
            </p>
            <Link to="/contact#ai-discovery-call">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] shadow-sm hover:brightness-95"
                data-testid="industries-cta-button"
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
