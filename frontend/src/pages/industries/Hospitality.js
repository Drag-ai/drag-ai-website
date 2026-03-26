import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Reveal } from '../../components/Reveal';
import { NeuralBackground } from '../../components/NeuralBackground';
import { useSEO } from '../../hooks/useSEO';
import { Hotel, MessageSquare, DollarSign, Users, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Hospitality() {
  useSEO({
    title: 'Agentic AI for Hospitality | Drag AI Industry Solutions',
    description: 'Transform guest experiences with intelligent automation and autonomous service coordination',
    canonical: '/industries/hospitality',
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
                <Hotel className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
              </div>
              <Badge variant="outline" className="border-[hsl(var(--accent-purple))]/30">
                Hospitality
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Agentic AI for <span className="text-[hsl(var(--accent-purple))]">Hospitality</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Transform guest experiences with intelligent automation and autonomous service coordination
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-14 sm:py-18 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              Hospitality Challenges That Agentic AI Solves
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Reveal key={0} delay={0}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Guest Service Delays</h3>
                <p className="text-sm text-muted-foreground">Requests for room service, housekeeping, or maintenance get lost in communication chains. Response times vary unpredictably.</p>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Revenue Management Complexity</h3>
                <p className="text-sm text-muted-foreground">Dynamic pricing requires constant monitoring of competitors, events, and demand patterns. Manual adjustments miss optimization opportunities.</p>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Staff Coordination</h3>
                <p className="text-sm text-muted-foreground">Scheduling housekeeping, front desk, and maintenance across shifts creates inefficiencies. Last-minute changes cause chaos.</p>
              </Card>
            </Reveal>
            <Reveal key={3} delay={0.30000000000000004}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Guest Preference Management</h3>
                <p className="text-sm text-muted-foreground">Capturing and acting on guest preferences (room temperature, pillow type, dietary needs) is inconsistent across stays.</p>
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
              How Agentic AI Transforms Hospitality
            </h2>
            <p className="text-base text-muted-foreground mb-10 max-w-3xl">
              We design autonomous AI agents that operate 24/7, making intelligent decisions without constant human intervention.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <Reveal key={0} delay={0}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Guest Service Orchestration</h3>
                <p className="text-sm text-muted-foreground">AI agents that receive requests across channels (phone, app, front desk), route to appropriate staff, and monitor resolution times. Learns guest patterns.</p>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Revenue Optimization Agents</h3>
                <p className="text-sm text-muted-foreground">Autonomous pricing agents that monitor competitor rates, local events, and booking patterns to adjust room rates in real-time for maximum revenue.</p>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Staff Coordination Systems</h3>
                <p className="text-sm text-muted-foreground">Multi-agent systems that optimize staff schedules based on predicted occupancy, handle shift swaps, and balance workload distribution.</p>
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
                <h3 className="font-semibold text-lg mb-3">Intelligent Concierge Service</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">AI agents handle common guest requests (restaurant reservations, activity bookings, local recommendations) autonomously. Complex requests are routed to human concierges with context.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Scale personalized service without proportionally increasing staff, improving guest satisfaction.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Predictive Housekeeping Scheduling</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Agents analyze checkout times, expected arrivals, and room status to optimize housekeeping routes. Prioritizes rooms for early check-ins.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Reduce turnover time and maximize room availability for revenue generation.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Guest Preference Learning</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Multi-agent systems track guest preferences across stays, automatically configure room settings before arrival, and suggest personalized upsells.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Create memorable experiences that drive repeat bookings and positive reviews.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={3} delay={0}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Maintenance Prediction & Scheduling</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Agents monitor equipment sensors (HVAC, elevators, kitchen appliances), predict failures, and schedule preventive maintenance during low-occupancy periods.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Prevent guest-facing equipment failures and reduce emergency repair costs.</p>
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
              Ready to Transform Your Hospitality Operations?
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
