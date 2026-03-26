import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Reveal } from '../../components/Reveal';
import { NeuralBackground } from '../../components/NeuralBackground';
import { useSEO } from '../../hooks/useSEO';
import { ShoppingCart, Package, Tag, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Retail() {
  useSEO({
    title: 'Agentic AI for Retail | Drag AI Industry Solutions',
    description: 'Deploy AI agents for inventory optimization, customer engagement, and omnichannel orchestration',
    canonical: '/industries/retail',
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
                <ShoppingCart className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
              </div>
              <Badge variant="outline" className="border-[hsl(var(--accent-purple))]/30">
                Retail
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Agentic AI for <span className="text-[hsl(var(--accent-purple))]">Retail</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Deploy AI agents for inventory optimization, customer engagement, and omnichannel orchestration
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-14 sm:py-18 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              Retail Challenges That Agentic AI Solves
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Reveal key={0} delay={0}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Inventory Imbalance</h3>
                <p className="text-sm text-muted-foreground">Stockouts in high-demand items coexist with overstock in slow movers. Manual replenishment decisions lag behind demand shifts.</p>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Omnichannel Complexity</h3>
                <p className="text-sm text-muted-foreground">Managing inventory across stores, warehouses, and online fulfillment creates blind spots. Buy-online-pickup-in-store (BOPIS) strains operations.</p>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Pricing Optimization</h3>
                <p className="text-sm text-muted-foreground">Competitive pricing requires constant monitoring. Markdown timing is guesswork, often leaving money on the table.</p>
              </Card>
            </Reveal>
            <Reveal key={3} delay={0.30000000000000004}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Customer Engagement</h3>
                <p className="text-sm text-muted-foreground">Personalizing experiences across touchpoints (web, app, in-store) is fragmented. Loyalty programs do not drive meaningful behavior change.</p>
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
              How Agentic AI Transforms Retail
            </h2>
            <p className="text-base text-muted-foreground mb-10 max-w-3xl">
              We design autonomous AI agents that operate 24/7, making intelligent decisions without constant human intervention.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <Reveal key={0} delay={0}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Inventory Intelligence Agents</h3>
                <p className="text-sm text-muted-foreground">AI agents that predict demand by SKU, location, and season. Autonomously trigger replenishment orders and suggest inventory transfers between locations.</p>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <Tag className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Dynamic Pricing Agents</h3>
                <p className="text-sm text-muted-foreground">Autonomous pricing agents that monitor competitor prices, stock levels, and demand elasticity to adjust prices in real-time across channels.</p>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Personalization Orchestration</h3>
                <p className="text-sm text-muted-foreground">Multi-agent systems that track customer behavior across touchpoints, predict preferences, and deliver personalized recommendations and offers.</p>
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
                <h3 className="font-semibold text-lg mb-3">Automated Markdown Optimization</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">AI agents analyze sell-through rates, seasonal timelines, and competitor markdowns to recommend optimal discount levels and timing for clearance items.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Maximize margin recovery on slow-moving inventory while clearing space for new arrivals.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">BOPIS Fulfillment Optimization</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Agents coordinate between online orders and store inventory, optimize picking routes for store associates, and predict pickup windows based on historical patterns.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Improve BOPIS customer experience while minimizing disruption to in-store operations.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Customer Journey Agents</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Multi-agent systems track customer interactions (browsing, cart abandonment, store visits) and deploy targeted interventions (email, SMS, app notifications) to drive conversion.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Increase conversion rates through timely, relevant customer engagement.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={3} delay={0}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Supply Chain Visibility</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Agents aggregate data from suppliers, warehouses, and carriers to provide real-time inventory visibility. Predicts delays and triggers mitigation actions.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Reduce stockouts and improve forecast accuracy through better supply chain intelligence.</p>
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
              Ready to Transform Your Retail Operations?
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
