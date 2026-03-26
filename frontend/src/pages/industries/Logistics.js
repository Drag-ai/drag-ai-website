import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Reveal } from '../../components/Reveal';
import { NeuralBackground } from '../../components/NeuralBackground';
import { useSEO } from '../../hooks/useSEO';
import { ArrowRight, ArrowLeft, Truck, Package, MapPin, Clock } from 'lucide-react';

export default function Logistics() {
  useSEO({
    title: 'Agentic AI for Logistics | Autonomous Supply Chain Solutions',
    description: 'Transform logistics operations with agentic AI. Autonomous route optimization, intelligent shipment tracking, and AI-powered warehouse automation for modern supply chains.',
    canonical: '/industries/logistics',
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
                <Truck className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
              </div>
              <Badge variant="outline" className="border-[hsl(var(--accent-purple))]/30">
                Logistics & Supply Chain
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Agentic AI for <span className="text-[hsl(var(--accent-purple))]">Logistics</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Build autonomous AI agents that optimize routes, track shipments intelligently, and automate warehouse operations—transforming your supply chain from reactive to predictive.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-14 sm:py-18 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              Logistics Challenges That Agentic AI Solves
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Route Optimization Complexity',
                description: 'Static routing systems cannot adapt to real-time traffic, weather, or delivery priority changes. Manual re-routing is slow and error-prone.'
              },
              {
                title: 'Shipment Visibility Gaps',
                description: 'Fragmented tracking across carriers creates blind spots. Customers demand real-time updates, but data integration is manual and delayed.'
              },
              {
                title: 'Warehouse Inefficiency',
                description: 'Picking, packing, and inventory management rely on human decision-making. Peak season overwhelms existing processes.'
              },
              {
                title: 'Document Processing Bottlenecks',
                description: 'Customs forms, BOLs, and compliance documents require manual review. Each delay cascades through the supply chain.'
              }
            ].map((challenge, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-6">
                  <h3 className="font-semibold mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground">{challenge.description}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How Agentic AI Helps */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              How Agentic AI Transforms Logistics
            </h2>
            <p className="text-base text-muted-foreground mb-10 max-w-3xl">
              We design autonomous AI agents that operate 24/7, making intelligent decisions across your supply chain without constant human intervention.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: 'Autonomous Route Agents',
                description: 'AI agents that continuously monitor traffic, weather, and delivery priorities to re-optimize routes in real-time. Learns from historical performance to improve future routing decisions.'
              },
              {
                icon: Package,
                title: 'Intelligent Shipment Tracking',
                description: 'Multi-agent systems that aggregate data from all carriers, predict delays before they happen, and proactively notify customers. Handles exception management autonomously.'
              },
              {
                icon: Clock,
                title: 'Warehouse Orchestration Agents',
                description: 'Coordinated AI agents for picking optimization, inventory replenishment, and dock scheduling. Adapts to demand fluctuations without manual planning.'
              }
            ].map((solution, idx) => (
              <Reveal key={idx} delay={0.1 * idx}>
                <Card className="p-6 card-hover">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                    <solution.icon className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                  </div>
                  <h3 className="font-semibold mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </Card>
              </Reveal>
            ))}
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
            {[
              {
                title: 'Last-Mile Delivery Optimization',
                workflow: 'AI agents analyze delivery density, traffic patterns, and driver availability to create optimal delivery sequences. Agents communicate with drivers and customers to handle real-time changes.',
                benefit: 'Reduce delivery times and fuel costs while improving customer satisfaction through accurate ETAs.'
              },
              {
                title: 'Predictive Maintenance for Fleets',
                workflow: 'Autonomous agents monitor vehicle telemetry, predict maintenance needs before failures occur, and schedule service during optimal windows. Coordinates with parts inventory agents.',
                benefit: 'Minimize downtime and extend vehicle lifespan through data-driven maintenance scheduling.'
              },
              {
                title: 'Customs Documentation Processing',
                workflow: 'Intelligent agents extract data from shipping documents, verify compliance requirements, and auto-fill customs forms. Flags discrepancies for human review.',
                benefit: 'Accelerate customs clearance and reduce errors in international shipping.'
              },
              {
                title: 'Demand-Based Inventory Positioning',
                workflow: 'Multi-agent systems analyze sales patterns, seasonal trends, and lead times to autonomously reposition inventory closer to predicted demand centers.',
                benefit: 'Reduce shipping costs and improve delivery speed by pre-positioning inventory intelligently.'
              }
            ].map((useCase, idx) => (
              <Reveal key={idx} delay={0.1 * (idx % 3)}>
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-3">{useCase.title}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                      <p className="text-sm text-muted-foreground">{useCase.workflow}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                      <p className="text-sm text-muted-foreground">{useCase.benefit}</p>
                    </div>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Ready to Transform Your Logistics Operations?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how agentic AI can optimize your supply chain, reduce costs, and improve delivery performance.
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
