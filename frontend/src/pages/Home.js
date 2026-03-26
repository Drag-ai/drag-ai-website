import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, Zap, Shield, Code, Gauge, CheckCircle2, Target, Rocket } from 'lucide-react';
import React from 'react';

export default function Home() {
  useSEO({
    title: 'Agentic AI Systems for Business | Production-Grade AI Agents',
    description: 'Build production-grade agentic AI systems with Drag AI. Custom AI agents, autonomous workflows, and multi-agent orchestration for enterprise operations. Transform business processes with intelligent automation.',
    canonical: '/',
  });

  const capabilities = [
    {
      icon: <Code className="h-5 w-5" />,
      label: 'AGENTIC AI',
      title: 'Custom AI Agents',
      description: 'Build autonomous AI agents tailored to your business workflows—from customer support to operations automation.',
    },
    {
      icon: <Zap className="h-5 w-5" />,
      label: 'WORKFLOW AUTOMATION',
      title: 'Autonomous Workflows',
      description: 'Multi-agent systems that orchestrate complex business processes without manual intervention.',
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      label: 'ORCHESTRATION',
      title: 'Agent Orchestration',
      description: 'Coordinate multiple AI agents to solve complex problems with intelligent task routing and handoffs.',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      label: 'PRODUCTION SYSTEMS',
      title: 'Production-Ready Deployment',
      description: 'Agentic systems designed with monitoring, human-in-the-loop controls, and operational observability.',
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
      bio: 'AI Architect specializing in production-ready GenAI systems, RAG architectures, and agentic workflows.',
      expertise: ['LLM Systems', 'RAG Architecture', 'Agentic AI', 'MLOps'],
    },
    {
      name: 'Nishit Gupta',
      role: 'Business Founder',
      bio: 'Leads strategy, business development, and partnerships. Focused on practical AI implementation and business value.',
      expertise: ['Business Strategy', 'AI Implementation', 'Business Development'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16"
        data-testid="home-hero"
      >
        <div className="hero-gradient-purple absolute inset-0" style={{ zIndex: 0 }} />
        <div className="hero-gradient-pink absolute inset-0" style={{ zIndex: 0 }} />
        <NeuralBackground />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Reveal>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                  Production-Grade
                  <span className="block text-[hsl(var(--accent-purple))] mt-2">Agentic AI Systems</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-prose leading-relaxed">
                  We design and build autonomous AI agents for business operations. From intelligent workflow automation to multi-agent orchestration—focused on practical, production-ready agentic systems.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button
                      size="lg"
                      className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-110 transition-all shadow-lg hover:shadow-xl"
                      data-testid="home-hero-book-call"
                    >
                      Book a Discovery Call
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 hover:bg-secondary/70"
                      data-testid="home-hero-explore-services"
                    >
                      Explore Services
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: What We Focus On */}
            <div className="hidden lg:block">
              <Reveal delay={0.3}>
                <Card className="p-8 card-hover border-2">
                  <div className="space-y-6">
                    <div className="mb-4">
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60">
                        WHAT WE BUILD
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-purple))]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Custom AI Agents</p>
                          <p className="text-xs text-muted-foreground">Domain-specific autonomous agents for business workflows</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-purple))]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Autonomous Workflows</p>
                          <p className="text-xs text-muted-foreground">Multi-agent systems that orchestrate complex processes</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-purple))]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Agent Orchestration</p>
                          <p className="text-xs text-muted-foreground">Coordinated multi-agent architectures for complex problems</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-purple))]" />
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Production Systems</p>
                          <p className="text-xs text-muted-foreground">Deployed agents with monitoring and human-in-the-loop controls</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 block mb-3">
                        TECHNICAL FOCUS
                      </span>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-xs border-[hsl(var(--accent-purple))]/30 bg-[hsl(var(--accent-purple))]/5">
                          LLM Agents
                        </Badge>
                        <Badge variant="outline" className="text-xs border-[hsl(var(--accent-purple))]/30 bg-[hsl(var(--accent-purple))]/5">
                          Multi-Agent
                        </Badge>
                        <Badge variant="outline" className="text-xs border-[hsl(var(--accent-purple))]/30 bg-[hsl(var(--accent-purple))]/5">
                          LLM
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                What We Do
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                We build production-grade AI systems that solve real business problems.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Target className="h-5 w-5" />, title: 'AI Strategy & Consulting', desc: 'Architecture design and roadmap planning for AI transformation initiatives.' },
              { icon: <Code className="h-5 w-5" />, title: 'Custom AI Development', desc: 'End-to-end implementation of agentic systems, RAG, and intelligent automation.' },
              { icon: <Rocket className="h-5 w-5" />, title: 'Proof of Concept', desc: 'Rapid prototyping to validate AI use cases before full-scale deployment.' },
            ].map((item, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-6 card-hover group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center text-[hsl(var(--accent-purple))] mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[hsl(var(--accent-purple))] transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                What We Build
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Agentic AI systems that transform how businesses operate
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, idx) => (
              <Reveal key={idx} delay={0.1 * (idx % 2)}>
                <Card
                  className="p-6 card-hover group"
                  data-testid="capability-card"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 text-[hsl(var(--accent-purple))] icon-glow">
                      {cap.icon}
                    </div>
                    <div className="flex-1">
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[hsl(var(--accent-purple))]/80 mb-1">
                        {cap.label}
                      </p>
                      <h3 className="font-semibold text-lg mb-2 group-hover:text-[hsl(var(--accent-purple))] transition-colors">{cap.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
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
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                Our Process
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                A clear, transparent approach from discovery to deployment
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand requirements and define success criteria' },
              { step: '02', title: 'Design', desc: 'Architecture planning and technical blueprint' },
              { step: '03', title: 'Build', desc: 'Iterative development with regular demos' },
              { step: '04', title: 'Deploy', desc: 'Production rollout with monitoring and handoff' },
            ].map((item, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-6 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 text-7xl font-bold text-[hsl(var(--accent-purple))]/5 leading-none">
                    {item.step}
                  </div>
                  <p className="font-mono text-xl font-semibold text-[hsl(var(--accent-purple))] mb-2 relative z-10">
                    {item.step}
                  </p>
                  <h3 className="font-semibold mb-2 relative z-10 group-hover:text-[hsl(var(--accent-purple))] transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground relative z-10 leading-relaxed">{item.desc}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
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
              {industries.map((industry, idx) => (
                <Badge
                  key={idx}
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
                <Button variant="ghost" className="text-[hsl(var(--accent-purple))] hover:bg-[hsl(var(--accent-purple))]/10">
                  View Industry Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24 bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                Why Drag AI
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Code className="h-5 w-5" />, title: 'Engineering-First', desc: 'Robust architecture and clean implementation over flashy demos.' },
              { icon: <CheckCircle2 className="h-5 w-5" />, title: 'Production-Ready', desc: 'Systems designed to scale, maintain, and evolve with your business.' },
              { icon: <Shield className="h-5 w-5" />, title: 'Transparent', desc: 'Clear communication about what\'s feasible and what delivers real value.' },
            ].map((item, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-6 text-center group card-hover">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center text-[hsl(var(--accent-purple))] mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-[hsl(var(--accent-purple))] transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
                Led by Experts
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep technical expertise combined with business acumen
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-8 card-hover group">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(var(--accent-purple))]/20 to-[hsl(var(--accent-pink))]/15 flex items-center justify-center">
                      <span className="text-lg font-semibold text-[hsl(var(--accent-purple))]">
                        {founder.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-[hsl(var(--accent-purple))] transition-colors">{founder.name}</h3>
                      <p className="text-sm text-[hsl(var(--accent-purple))]">
                        {founder.role}
                      </p>
                    </div>
                  </div>
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

      {/* Final CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[hsl(var(--accent-purple))]/5 to-[hsl(var(--accent-pink))]/5">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Ready to Build Production AI?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8">
              Let's discuss your AI transformation goals and build something extraordinary
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-110 shadow-lg hover:shadow-xl transition-all"
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
