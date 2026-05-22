import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, FileText, MessageSquare, Users, Briefcase, Brain, BarChart } from 'lucide-react';

export default function Solutions() {
  useSEO({
    title: 'AI Solutions for Business | Drag AI',
    description: 'Practical AI solutions for document processing, knowledge assistants, customer support, operations, recruitment, and analytics. UK-based AI consulting.',
    canonical: '/solutions',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Solutions', path: '/solutions' },
    ],
  });

  const solutions = [
    {
      id: 'document-processing',
      icon: FileText,
      title: 'AI Document Processing',
      problem: 'Your team spends hours extracting data from invoices, PDFs, contracts, forms, reports, and emails. Manual data entry is slow, error-prone, and prevents staff from focusing on higher-value work.',
      solution: 'We build AI systems that automatically extract, validate, summarize, and structure information from documents. The system can handle variations in format, route exceptions to humans, and export clean data to your existing workflows.',
      outcome: 'Reduce document processing time by 70-90%, improve data accuracy, and free your team to focus on decision-making instead of data entry.',
      workflows: [
        'Invoice extraction → validate → export to ERP',
        'Contract summarization → key terms extraction → risk flags',
        'Form processing → validation → structured output',
        'Report analysis → insights extraction → action items'
      ]
    },
    {
      id: 'knowledge-assistant',
      icon: Brain,
      title: 'AI Knowledge Assistant',
      problem: 'Your team needs fast answers from internal documents, policies, SOPs, training materials, and business records. Information is scattered across files, folders, and systems. People waste time searching or ask the same questions repeatedly.',
      solution: 'We build secure AI assistants that let your team ask questions in natural language and get accurate answers from your knowledge base. The system cites sources, handles follow-up questions, and can be configured with access controls.',
      outcome: 'Reduce time spent searching for information by 80%, improve onboarding speed, enable faster decision-making, and preserve institutional knowledge.',
      workflows: [
        'Question → search documents → retrieve context → answer with sources',
        'Policy query → extract relevant sections → explain in simple terms',
        'Training assistant → guide new hires → answer common questions',
        'Compliance check → verify against regulations → flag issues'
      ]
    },
    {
      id: 'customer-support',
      icon: MessageSquare,
      title: 'AI Customer Support Assistant',
      problem: 'Your support team is overwhelmed with repetitive queries. Response times are slow. Customers expect instant answers 24/7. Hiring more support staff is expensive and hard to scale.',
      solution: 'We build AI chatbots and email assistants that handle common customer queries automatically, collect required information, trigger workflows, and escalate complex cases to human agents with full context.',
      outcome: 'Handle 60-80% of routine queries automatically, reduce response time from hours to seconds, improve customer satisfaction, and let your team focus on complex issues.',
      workflows: [
        'Customer question → check knowledge base → provide answer → log interaction',
        'Order status query → fetch from system → provide update',
        'Technical issue → collect details → create ticket → assign to team',
        'Refund request → validate → process or escalate → notify customer'
      ]
    },
    {
      id: 'operations-assistant',
      icon: Briefcase,
      title: 'AI Operations Assistant',
      problem: 'Your operations team juggles task tracking, status updates, report generation, workflow routing, and decision support across multiple systems. Information is scattered, updates are manual, and important tasks fall through cracks.',
      solution: 'We build AI assistants that monitor workflows, provide status updates, generate reports, route tasks intelligently, and support operational decision-making. The system integrates with your existing tools and learns your processes.',
      outcome: 'Automate 50-70% of routine operational tasks, improve visibility across workflows, reduce errors from manual updates, and enable proactive issue management.',
      workflows: [
        'Task monitoring → status updates → alert on delays → suggest actions',
        'Report generation → data collection → analysis → formatted output',
        'Workflow routing → assess priority → assign to right team → track completion',
        'Decision support → gather context → present options → explain trade-offs'
      ]
    },
    {
      id: 'recruitment-assistant',
      icon: Users,
      title: 'AI Recruitment Assistant',
      problem: 'Your HR team manually screens hundreds of resumes, matches candidates to job descriptions, and struggles to explain hiring decisions objectively. Top candidates slip through due to volume, and bias is hard to eliminate.',
      solution: 'We build AI systems that screen resumes, match with job requirements, rank candidates, analyze skill gaps, and provide explainable shortlists. The system can handle multiple job types and learns from your hiring preferences.',
      outcome: 'Reduce resume screening time by 90%, improve candidate match quality, speed up time-to-hire, and make hiring decisions more consistent and explainable.',
      workflows: [
        'Resume intake → parse experience → match to JD → score candidates',
        'Skill gap analysis → identify missing skills → suggest training',
        'Candidate shortlist → rank by criteria → explain scoring',
        'Interview preparation → suggest questions → note key qualifications'
      ]
    },
    {
      id: 'analytics-assistant',
      icon: BarChart,
      title: 'AI Analytics Assistant',
      problem: 'Your team needs insights from business data but lacks time or expertise to build complex analyses. Reports are static, dashboards are outdated, and decision-makers want answers to ad-hoc questions quickly.',
      solution: 'We build AI assistants that let teams ask questions about business data in natural language, generate visualizations, forecast trends, and explain insights. The system connects to your data sources and handles technical complexity.',
      outcome: 'Democratize data access across teams, reduce time from question to insight by 80%, improve forecast accuracy, and enable data-driven decision-making at all levels.',
      workflows: [
        'Natural language query → fetch data → analyze → visualize → explain',
        'Trend analysis → identify patterns → forecast → highlight anomalies',
        'Performance metrics → compare periods → explain changes → suggest actions',
        'Custom reports → gather data → format → schedule delivery'
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4 border-[hsl(var(--accent-purple))]/30">
                Problem-Focused AI Solutions
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                AI Solutions for <span className="text-[hsl(var(--accent-purple))]">Real Business Problems</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                We don&apos;t start with AI technology. We start with your business problem, then build practical AI systems that deliver measurable outcomes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {solutions.map((solution, idx) => (
              <Reveal key={solution.id} delay={0.1 * (idx % 3)}>
                <Card className="p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center">
                        <solution.icon className="h-7 w-7 text-[hsl(var(--accent-purple))]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold mb-4">{solution.title}</h2>
                      
                      <div className="space-y-4">
                        {/* Problem */}
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-foreground/60 mb-2">The Problem</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{solution.problem}</p>
                        </div>

                        {/* What We Build */}
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-foreground/60 mb-2">What Drag AI Builds</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{solution.solution}</p>
                        </div>

                        {/* Outcome */}
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-foreground/60 mb-2">Business Outcome</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{solution.outcome}</p>
                        </div>

                        {/* Example Workflows */}
                        <div>
                          <p className="font-mono text-xs uppercase tracking-wider text-foreground/60 mb-2">Example Workflows</p>
                          <ul className="space-y-2">
                            {solution.workflows.map((workflow, wIdx) => (
                              <li key={`${solution.id}-workflow-${wIdx}`} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-[hsl(var(--accent-purple))] mr-2 mt-0.5">→</span>
                                <span className="leading-relaxed">{workflow}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 pt-6 border-t">
                        <Link to="/contact#ai-discovery-call">
                          <Button variant="outline" className="group" data-testid={`solution-cta-${solution.id}`}>
                            Discuss This Use Case
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
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
              Don&apos;t See Your Problem Listed?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every business has unique challenges. Let&apos;s discuss your specific workflow, data, and automation needs.
            </p>
            <Link to="/contact#ai-discovery-call">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] shadow-sm hover:brightness-95"
                data-testid="solutions-cta-button"
              >
                Book a 30-Minute AI Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
