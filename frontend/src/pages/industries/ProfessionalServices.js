import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Reveal } from '../../components/Reveal';
import { NeuralBackground } from '../../components/NeuralBackground';
import { useSEO } from '../../hooks/useSEO';
import { Briefcase, Users, TrendingUp, Brain, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ProfessionalServices() {
  useSEO({
    title: 'Agentic AI for Professional Services | Drag AI Industry Solutions',
    description: 'Optimize resource allocation, project delivery, and client engagement with agentic AI',
    canonical: '/industries/professional-services',
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <Link to="/industries" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/20 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
              </div>
              <Badge variant="outline" className="border-[hsl(var(--accent-purple))]/30">
                Professional Services
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Agentic AI for <span className="text-[hsl(var(--accent-purple))]">Professional Services</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Optimize resource allocation, project delivery, and client engagement with agentic AI
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-14 sm:py-18 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              Professional Services Challenges That Agentic AI Solves
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Reveal key={0} delay={0}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Resource Allocation Complexity</h3>
                <p className="text-sm text-muted-foreground">Matching consultant skills to project needs across multiple engagements is manual. Utilization tracking is delayed and inaccurate.</p>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Project Delivery Predictability</h3>
                <p className="text-sm text-muted-foreground">Scope creep, staffing changes, and client delays make project timelines unreliable. Budget overruns are common.</p>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Knowledge Management</h3>
                <p className="text-sm text-muted-foreground">Insights from past projects sit in consultant brains or buried in documents. New team members reinvent solutions.</p>
              </Card>
            </Reveal>
            <Reveal key={3} delay={0.30000000000000004}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Client Communication</h3>
                <p className="text-sm text-muted-foreground">Keeping clients updated on progress, deliverables, and next steps requires manual status reports and meetings.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How Agentic AI Helps */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              How Agentic AI Transforms Professional Services
            </h2>
            <p className="text-base text-muted-foreground mb-10 max-w-3xl">
              We design autonomous AI agents that operate 24/7, making intelligent decisions without constant human intervention.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <Reveal key={0} delay={0}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Resource Optimization Agents</h3>
                <p className="text-sm text-muted-foreground">AI agents that match consultant skills to project requirements, predict availability, and optimize utilization across the firm. Balances workload and development goals.</p>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Project Intelligence Systems</h3>
                <p className="text-sm text-muted-foreground">Autonomous agents that track project health (budget, timeline, scope), predict risks, and recommend corrective actions. Alerts stakeholders proactively.</p>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Knowledge Orchestration Agents</h3>
                <p className="text-sm text-muted-foreground">Multi-agent systems that extract insights from project documents, build searchable knowledge bases, and suggest relevant past work for new engagements.</p>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Specific Use Cases */}
      <section className="py-14 sm:py-18 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              Real-World Agentic AI Applications
            </h2>
          </Reveal>

          <div className="space-y-6">
            
            <Reveal key={0} delay={0}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Intelligent Staffing</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">AI agents analyze project requirements (skills, industry, timeline), consultant availability and preferences, and automatically propose optimal staffing plans with backup options.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Maximize billable utilization while respecting consultant development goals and work-life balance.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Automated Time & Expense Processing</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Agents monitor calendars and project assignments to pre-populate timesheets. Flag anomalies (overages, misallocations) for review before invoicing.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Reduce administrative burden on consultants and improve billing accuracy.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Client Deliverable Tracking</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Multi-agent systems track deliverable status across projects, send automatic client updates, and escalate delays before deadlines are missed.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Improve client satisfaction through proactive communication and on-time delivery.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={3} delay={0}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Proposal Acceleration</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Agents pull relevant case studies, methodologies, and team bios from knowledge base to auto-generate proposal sections. Learns from winning proposals.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Reduce proposal development time and improve win rates through data-driven content.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Ready to Transform Your Professional Services Operations?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how agentic AI can optimize your operations, reduce costs, and improve outcomes.
            </p>
            <Link to="/contact#form">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] shadow-sm hover:brightness-95"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
