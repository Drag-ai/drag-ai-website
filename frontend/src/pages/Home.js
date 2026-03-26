import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Zap, Shield, Code, Gauge } from 'lucide-react';

export default function Home() {
  useSEO({
    title: 'Home',
    description: 'Drag AI builds production-grade Agentic AI systems for enterprises. Specializing in RAG pipelines, multi-agent workflows, and AI automation. Engineering-first, no demos.',
    canonical: '/',
  });
  const capabilities = [
    {
      icon: <Zap className="h-5 w-5" />,
      label: 'RAG SYSTEMS',
      title: 'Retrieval-Augmented Generation',
      description: 'Long-context RAG pipelines that scale with your knowledge base.',
    },
    {
      icon: <Code className="h-5 w-5" />,
      label: 'AGENTIC AI',
      title: 'Multi-Agent Workflows',
      description: 'Intelligent systems that plan, execute, and adapt autonomously.',
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      label: 'AUTOMATION',
      title: 'Enterprise AI Automation',
      description: 'Streamline operations with production-ready AI automation.',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      label: 'DOCUMENT AI',
      title: 'Document Intelligence',
      description: 'Extract, classify, and process documents at scale.',
    },
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

  const founders = [
    {
      name: 'Deepesh Agrawal',
      role: 'Technical Founder',
      bio: 'AI Architect and ML Engineer with experience in building production-ready GenAI systems including long-context RAG, document intelligence pipelines, and agentic workflows.',
      expertise: ['LLM Systems', 'RAG Architecture', 'Agentic AI', 'MLOps', 'NLP'],
    },
    {
      name: 'Nishit Gupta',
      role: 'Marketing & Sales Founder',
      bio: 'Leads business strategy, client engagement, and go-to-market. Focused on aligning AI solutions with real business outcomes.',
      expertise: ['Business Strategy', 'AI Consulting', 'Market Positioning', 'Client Success'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14"
        data-testid="home-hero"
      >
        {/* Background Gradients */}
        <div className="hero-gradient-cyan absolute inset-0" />
        <div className="hero-gradient-violet absolute inset-0" />
        <div className="noise-overlay" />
        
        {/* Neural Network Background */}
        <NeuralBackground />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <Reveal>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                  Production-Grade
                  <span className="block text-[hsl(var(--accent-cyan))]">Agentic AI Systems</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-prose">
                  We build reliable, scalable AI systems for enterprises — from RAG pipelines
                  to multi-agent workflows. Engineering-first, production-ready, no demos.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="bg-[hsl(var(--accent-cyan))] text-[hsl(var(--accent-cyan-foreground))] shadow-sm hover:brightness-95 hover:-translate-y-0.5 transition-all"
                      data-testid="home-hero-book-call"
                    >
                      Book a Discovery Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="hover:bg-secondary/70"
                      data-testid="home-hero-explore-services"
                    >
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: Visual */}
            <div className="hidden lg:block">
              <Reveal delay={0.3}>
                <div className="relative">
                  <Card className="p-8 card-hover">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-[hsl(var(--accent-cyan))] animate-pulse" />
                        <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60">
                          SYSTEM ACTIVE
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-secondary rounded-full w-3/4" />
                        <div className="h-2 bg-secondary rounded-full w-full" />
                        <div className="h-2 bg-secondary rounded-full w-5/6" />
                      </div>
                      <div className="flex gap-2 pt-4">
                        <Badge variant="outline">RAG</Badge>
                        <Badge variant="outline">Multi-Agent</Badge>
                        <Badge variant="outline">LLM</Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                What We Do
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                We build production-grade AI systems that solve real business problems.
                No fluff, no demos — just reliable, scalable solutions.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <Card className="p-6 card-hover">
                <h3 className="font-semibold text-lg mb-2">AI Consulting</h3>
                <p className="text-sm text-muted-foreground">
                  Strategy and architecture design for AI transformation initiatives.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.2}>
              <Card className="p-6 card-hover">
                <h3 className="font-semibold text-lg mb-2">Custom Development</h3>
                <p className="text-sm text-muted-foreground">
                  End-to-end implementation of agentic systems, RAG, and automation.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.3}>
              <Card className="p-6 card-hover">
                <h3 className="font-semibold text-lg mb-2">Proof of Concept</h3>
                <p className="text-sm text-muted-foreground">
                  Rapid prototyping to validate AI use cases before full deployment.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Core Capabilities
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Technical expertise across the modern AI stack
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card
                  className="p-6 card-hover"
                  data-testid="capability-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[hsl(var(--accent-cyan))]/10 text-[hsl(var(--accent-cyan))]">
                      {cap.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">
                        {cap.label}
                      </p>
                      <h3 className="font-semibold text-lg mb-2">{cap.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {cap.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                How We Work
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                A clear, transparent process from discovery to deployment
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your use case and requirements' },
              { step: '02', title: 'Design', desc: 'Architecture and technical planning' },
              { step: '03', title: 'Build', desc: 'Iterative development with regular check-ins' },
              { step: '04', title: 'Deploy', desc: 'Production rollout and handoff' },
            ].map((item, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-6">
                  <p className="font-mono text-2xl font-semibold text-[hsl(var(--accent-cyan))] mb-2">
                    {item.step}
                  </p>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Industries We Serve
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Tailored AI solutions across diverse sectors
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3 justify-center">
              {industries.map((industry, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="px-4 py-2 text-sm border-[hsl(var(--accent-violet))]/25 bg-[hsl(var(--accent-violet))]/10"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 text-center">
              <Link to="/industries">
                <Button variant="ghost" className="text-[hsl(var(--accent-cyan))]">
                  View Industry Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Drag AI */}
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Why Drag AI
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Reveal delay={0.1}>
              <Card className="p-6 text-center">
                <h3 className="font-semibold mb-2">Engineering-First</h3>
                <p className="text-sm text-muted-foreground">
                  We prioritize robust architecture and clean implementation over flashy demos.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.2}>
              <Card className="p-6 text-center">
                <h3 className="font-semibold mb-2">Production-Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Systems designed to scale, maintain, and evolve with your business.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.3}>
              <Card className="p-6 text-center">
                <h3 className="font-semibold mb-2">Honest Positioning</h3>
                <p className="text-sm text-muted-foreground">
                  Clear communication about what's possible, feasible, and valuable.
                </p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                Meet the Founders
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {founders.map((founder, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-8">
                  <h3 className="font-semibold text-xl mb-1">{founder.name}</h3>
                  <p className="text-sm text-[hsl(var(--accent-cyan))] mb-4">
                    {founder.role}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {founder.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill, skillIdx) => (
                      <Badge key={skillIdx} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Ready to Build Production AI?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Let's discuss your AI transformation goals
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-cyan))] text-[hsl(var(--accent-cyan-foreground))] shadow-sm hover:brightness-95"
              >
                Schedule a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
