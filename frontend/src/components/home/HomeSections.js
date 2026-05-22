import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Reveal } from '../Reveal';
import { FounderCard } from '../shared/FounderCard';
import {
  ArrowRight,
  Zap,
  Shield,
  Code,
  Gauge,
  CheckCircle2,
  Target,
  Rocket,
} from 'lucide-react';

const whatWeDo = [
  { id: 'strategy', Icon: Target, title: 'AI Strategy & Consulting', desc: 'Architecture design and roadmap planning for AI transformation initiatives.' },
  { id: 'development', Icon: Code, title: 'Custom AI Development', desc: 'End-to-end implementation of agentic systems, RAG, and intelligent automation.' },
  { id: 'poc', Icon: Rocket, title: 'Proof of Concept', desc: 'Rapid prototyping to validate AI use cases before full-scale deployment.' },
];

const capabilities = [
  { id: 'agentic', Icon: Code, label: 'AGENTIC AI', title: 'Custom AI Agents', description: 'Build autonomous AI agents tailored to your business workflows—from customer support to operations automation.' },
  { id: 'workflow', Icon: Zap, label: 'WORKFLOW AUTOMATION', title: 'Autonomous Workflows', description: 'Multi-agent systems that orchestrate complex business processes without manual intervention.' },
  { id: 'orchestration', Icon: Gauge, label: 'ORCHESTRATION', title: 'Agent Orchestration', description: 'Coordinate multiple AI agents to solve complex problems with intelligent task routing and handoffs.' },
  { id: 'production', Icon: Shield, label: 'PRODUCTION SYSTEMS', title: 'Production-Ready Deployment', description: 'Agentic systems designed with monitoring, human-in-the-loop controls, and operational observability.' },
];

const process = [
  { id: 'discovery', step: '01', title: 'Discovery', desc: 'Understand requirements and define success criteria' },
  { id: 'design', step: '02', title: 'Design', desc: 'Architecture planning and technical blueprint' },
  { id: 'build', step: '03', title: 'Build', desc: 'Iterative development with regular demos' },
  { id: 'deploy', step: '04', title: 'Deploy', desc: 'Production rollout with monitoring and handoff' },
];

const industries = [
  'Logistics',
  'Construction',
  'Hospitality',
  'Retail',
  'Insurance',
  'Property Management',
  'Professional Services',
];

const whyChooseUs = [
  { id: 'engineering', Icon: Code, title: 'Engineering-First', desc: 'Robust architecture and clean implementation over flashy demos.' },
  { id: 'production-ready', Icon: CheckCircle2, title: 'Production-Ready', desc: 'Systems designed to scale, maintain, and evolve with your business.' },
  { id: 'transparent', Icon: Shield, title: 'Transparent', desc: 'Clear communication about what is feasible and what delivers real value.' },
];

const founders = [
  {
    id: 'deepesh',
    name: 'Deepesh Agrawal',
    role: 'Founder & AI Architect',
    bio: 'AI Architect with 10+ years building production-grade AI systems across Generative AI, Agentic AI, RAG, NLP, Computer Vision, and MLOps. Previously contributed to enterprise AI platforms at IBM Labs, Fujitsu Research, and AMD, and delivered AI/ML solutions for clients including Swiss Re and Capital Group at UST (Abzooba). Through Drag AI, helps businesses design and deploy custom AI agents, autonomous workflows, RAG pipelines, and scalable AI systems that move from prototype to production.',
    experience: '10+ years | IBM Labs, Fujitsu Research, AMD, UST',
    responsibilities: [
      'Technical architecture & AI system design',
      'Agent development & workflow automation',
      'Production deployment & scaling',
    ],
    expertise: ['Agentic AI Systems', 'Multi-Agent Orchestration', 'RAG Pipelines', 'Production MLOps'],
  },
  {
    id: 'nishit',
    name: 'Nishit Gupta',
    role: 'Co-Founder & Business Strategy',
    bio: 'Business strategist with 10+ years across technology, e-learning, market research, consulting, and client growth. Expertise in lead generation, market analysis, consultative selling, digital transformation, automation, and CRM-led campaigns. MBA in International Business from James Cook University, Australia. Brings a business-first, global perspective to AI adoption, connecting practical business needs with production-grade AI agents, autonomous workflows, and enterprise-ready systems.',
    experience: 'MBA International Business | 10+ years Business Development',
    responsibilities: [
      'Client partnerships & engagement',
      'Business strategy & growth',
      'Market development & lead generation',
    ],
    expertise: ['Business Strategy', 'AI Transformation', 'Client Success', 'Digital Marketing'],
  },
];

// ---------- Section components ----------

export const WhatWeDoSection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">What We Do</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            We build production-grade AI systems that solve real business problems.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {whatWeDo.map((item, idx) => {
          const { Icon } = item;
          return (
            <Reveal key={item.id} delay={0.1 * idx}>
              <Card className="p-6 card-hover group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center text-[hsl(var(--accent-purple))] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-[hsl(var(--accent-purple))] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export const CapabilitiesSection = () => (
  <section className="py-16 sm:py-20 lg:py-24">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">What We Build</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Agentic AI systems that transform how businesses operate
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((cap, idx) => {
          const { Icon } = cap;
          return (
            <Reveal key={cap.id} delay={0.1 * (idx % 2)}>
              <Card className="p-6 card-hover group" data-testid="capability-card">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 text-[hsl(var(--accent-purple))] icon-glow">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[hsl(var(--accent-purple))]/80 mb-1">
                      {cap.label}
                    </p>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-[hsl(var(--accent-purple))] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export const ProcessSection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Our Process</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A clear, transparent approach from discovery to deployment
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {process.map((item, idx) => (
          <Reveal key={item.id} delay={0.1 * idx}>
            <Card className="p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 text-7xl font-bold text-[hsl(var(--accent-purple))]/5 leading-none">
                {item.step}
              </div>
              <p className="font-mono text-xl font-semibold text-[hsl(var(--accent-purple))] mb-2 relative z-10">
                {item.step}
              </p>
              <h3 className="font-semibold mb-2 relative z-10 group-hover:text-[hsl(var(--accent-purple))] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground relative z-10 leading-relaxed">{item.desc}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const IndustriesSection = () => (
  <section className="py-16 sm:py-20 lg:py-24">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Industries We Serve
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailored AI solutions across diverse sectors
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="flex flex-wrap gap-3 justify-center">
          {industries.map((industry) => (
            <Badge
              key={industry}
              variant="outline"
              className="px-4 py-2 text-sm border-[hsl(var(--accent-purple))]/25 bg-[hsl(var(--accent-purple))]/10 hover:bg-[hsl(var(--accent-purple))]/15 transition-colors"
            >
              {industry}
            </Badge>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-8 text-center">
          <Link to="/industries">
            <Button
              variant="ghost"
              className="text-[hsl(var(--accent-purple))] hover:bg-[hsl(var(--accent-purple))]/10"
            >
              View Industry Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export const WhyDragAISection = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Why Drag AI</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {whyChooseUs.map((item, idx) => {
          const { Icon } = item;
          return (
            <Reveal key={item.id} delay={0.1 * idx}>
              <Card className="p-6 text-center group card-hover">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center text-[hsl(var(--accent-purple))] mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-[hsl(var(--accent-purple))] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export const FoundersSection = () => (
  <section className="py-16 sm:py-20 lg:py-24" data-testid="home-founders-section">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">Led by Experts</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep technical expertise combined with business acumen
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {founders.map((founder, idx) => (
          <Reveal key={founder.id} delay={0.1 * idx}>
            <FounderCard founder={founder} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const HomeFinalCTA = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[hsl(var(--accent-purple))]/5 to-[hsl(var(--accent-pink))]/5">
    <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
      <Reveal>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
          Ready to Build Production AI?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-8">
          Let us discuss your AI transformation goals and build something extraordinary
        </p>
        <Link to="/contact#ai-discovery-call">
          <Button
            size="lg"
            className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-110 shadow-lg hover:shadow-xl transition-all"
            data-testid="home-final-cta-button"
          >
            Book a 30-Minute AI Discovery Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </Reveal>
    </div>
  </section>
);
