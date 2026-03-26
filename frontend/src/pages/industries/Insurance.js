import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Reveal } from '../../components/Reveal';
import { NeuralBackground } from '../../components/NeuralBackground';
import { useSEO } from '../../hooks/useSEO';
import { FileCheck, FileText, Shield, Search, ArrowRight, ArrowLeft } from 'lucide-react';

export default function Insurance() {
  useSEO({
    title: 'Agentic AI for Insurance | Drag AI Industry Solutions',
    description: 'Automate claims processing, underwriting, and risk assessment with intelligent AI agents',
    canonical: '/industries/insurance',
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
                <FileCheck className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
              </div>
              <Badge variant="outline" className="border-[hsl(var(--accent-purple))]/30">
                Insurance
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Agentic AI for <span className="text-[hsl(var(--accent-purple))]">Insurance</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              Automate claims processing, underwriting, and risk assessment with intelligent AI agents
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-14 sm:py-18 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              Insurance Challenges That Agentic AI Solves
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <Reveal key={0} delay={0}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Claims Processing Delays</h3>
                <p className="text-sm text-muted-foreground">Manual document review, fraud detection, and adjuster assignment create week-long delays. Customer satisfaction suffers.</p>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Underwriting Inefficiency</h3>
                <p className="text-sm text-muted-foreground">Risk assessment requires gathering data from multiple sources. Manual analysis is slow and inconsistent across underwriters.</p>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Fraud Detection Gaps</h3>
                <p className="text-sm text-muted-foreground">Rule-based fraud detection misses sophisticated schemes. Manual investigation is resource-intensive.</p>
              </Card>
            </Reveal>
            <Reveal key={3} delay={0.30000000000000004}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Customer Communication</h3>
                <p className="text-sm text-muted-foreground">Policyholders expect instant updates on claims status. Call centers are overwhelmed with routine inquiries.</p>
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
              How Agentic AI Transforms Insurance
            </h2>
            <p className="text-base text-muted-foreground mb-10 max-w-3xl">
              We design autonomous AI agents that operate 24/7, making intelligent decisions without constant human intervention.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <Reveal key={0} delay={0}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Claims Processing Agents</h3>
                <p className="text-sm text-muted-foreground">AI agents that intake claims across channels, extract data from documents, assess damage from photos, and route to appropriate adjusters with preliminary analysis.</p>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Underwriting Intelligence</h3>
                <p className="text-sm text-muted-foreground">Autonomous agents that gather applicant data from public records, credit bureaus, and telematics. Perform risk scoring and recommend policy terms.</p>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">Fraud Detection Systems</h3>
                <p className="text-sm text-muted-foreground">Multi-agent systems that analyze claim patterns, detect anomalies, and flag suspicious activity for investigation. Learns from confirmed fraud cases.</p>
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
                <h3 className="font-semibold text-lg mb-3">Automated First Notice of Loss (FNOL)</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">AI agents receive claims via phone, app, or web. Extract incident details, validate coverage, assess initial damage from photos, and assign to adjusters—all within minutes.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Reduce FNOL processing time from hours to minutes, improving customer satisfaction.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={1} delay={0.1}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Intelligent Document Processing</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Agents extract data from police reports, medical bills, and repair estimates. Cross-reference against policy terms and flag discrepancies for human review.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Accelerate claims settlement and reduce errors in coverage determination.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={2} delay={0.2}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Predictive Risk Modeling</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Multi-agent systems analyze historical claims, external risk factors (weather, crime rates), and policyholder behavior to predict future claim likelihood.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Improve underwriting accuracy and optimize premium pricing for profitability.</p>
                  </div>
                </div>
              </Card>
            </Reveal>
            <Reveal key={3} delay={0}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">Proactive Customer Engagement</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">Agents monitor customer policies, detect life events (home purchase, new car), and trigger personalized outreach with relevant coverage options.</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">Increase policy retention and cross-sell opportunities through timely engagement.</p>
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
              Ready to Transform Your Insurance Operations?
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
