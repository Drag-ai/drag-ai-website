import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Reveal } from '../../components/Reveal';
import { NeuralBackground } from '../../components/NeuralBackground';
import { useSEO } from '../../hooks/useSEO';
import { HardHat, Calendar, Shield, Wrench, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Construction() {
  useSEO({
    title: 'Agentic AI for Construction | Drag AI Industry Solutions',
    description: 'Build autonomous AI agents for project management, safety monitoring, and equipment optimization',
    canonical: '/industries/construction',
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
                <HardHat className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
              </div>
              <Badge variant="outline" className="border-[hsl(var(--accent-purple))]/30">
                Construction
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Agentic AI for <span className="text-[hsl(var(--accent-purple))]">Construction</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Build autonomous AI agents for project management, safety monitoring, and equipment optimization
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-14 sm:py-18 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              Construction Challenges That Agentic AI Solves
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Reveal key={0} delay={0}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Project Coordination Complexity</h3>
                <p className="text-sm text-muted-foreground">Multiple contractors, changing schedules, and material delays require constant manual coordination across stakeholders.</p>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Safety Compliance Monitoring</h3>
                <p className="text-sm text-muted-foreground">Manual safety inspections miss real-time hazards. Documentation for compliance is time-consuming and error-prone.</p>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Equipment Utilization</h3>
                <p className="text-sm text-muted-foreground">Heavy machinery sits idle while other sites need it. Manual scheduling leads to inefficient asset utilization.</p>
              </Card>
            </Reveal>
            <Reveal key={3} delay={0.30000000000000004}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Document Management</h3>
                <p className="text-sm text-muted-foreground">RFIs, change orders, and submittals create paper trails that slow decision-making and increase disputes.</p>
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
              How Agentic AI Transforms Construction
            </h2>
            <p className="text-base text-muted-foreground mb-10 max-w-3xl">
              We design autonomous AI agents that operate 24/7, making intelligent decisions without constant human intervention.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <Reveal key={0} delay={0}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Project Orchestration Agents</h3>
                <p className="text-sm text-muted-foreground">AI agents that coordinate schedules across contractors, predict delays, and automatically adjust timelines. Monitors dependencies and sends proactive alerts.</p>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Safety Monitoring Systems</h3>
                <p className="text-sm text-muted-foreground">Computer vision agents that detect safety violations in real-time. Automatically logs incidents and generates compliance reports.</p>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <Wrench className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Equipment Optimization Agents</h3>
                <p className="text-sm text-muted-foreground">Multi-agent systems that track equipment across sites, predict maintenance needs, and optimize allocation based on project schedules.</p>
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
                <h3 className="font-semibold text-lg mb-3">Automated Progress Tracking</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">AI agents analyze site photos/videos to assess completion percentage, compare against schedules, and flag discrepancies. Generates progress reports automatically.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Accurate project tracking without manual inspections, enabling faster billing and better stakeholder communication.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Material Procurement Intelligence</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Agents monitor project schedules, predict material needs, check inventory levels, and trigger purchase orders. Learns from lead times to optimize ordering.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Reduce delays from material shortages and minimize excess inventory holding costs.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">RFI & Change Order Processing</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Intelligent agents extract data from RFIs, route to appropriate stakeholders, track response times, and auto-populate change order forms.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Accelerate decision cycles and maintain clear documentation trails for disputes.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={3} delay={0}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Predictive Safety Risk Management</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Multi-agent systems analyze weather forecasts, work schedules, and historical incidents to predict high-risk days. Proactively adjusts staffing and safety protocols.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Prevent accidents before they occur through data-driven safety planning.</p>
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
              Ready to Transform Your Construction Operations?
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
