import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { 
  ChevronDown, 
  ChevronUp, 
  FlaskConical, 
  Lightbulb, 
  Map,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function Resources() {
  useSEO({
    title: 'Resources | Agentic AI Examples & Methodology | Drag AI',
    description: 'Explore our internal prototypes, illustrative use cases, and delivery blueprints for agentic AI systems. Transparent examples showing our technical approach and implementation methodology.',
    canonical: '/resources',
  });

  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const resources = [
    {
      id: 'prototype',
      type: 'Internal',
      typeColor: 'bg-blue-500/10 text-blue-600 border-blue-500/30',
      icon: <FlaskConical className="h-5 w-5" />,
      title: 'Internal Prototype: Multi-Agent Workflow Demo',
      subtitle: 'Built by our team for demonstration purposes',
      summary: 'An internal prototype exploring how agentic AI systems can coordinate research, planning, and structured output generation.',
      content: {
        overview: 'We built this internal prototype to explore how agentic AI systems can coordinate research, planning, and structured output generation for business workflows.',
        problem: 'Many teams spend too much time collecting information, routing tasks, and manually preparing outputs. We wanted to test whether a multi-agent workflow could reduce coordination overhead while keeping humans in control.',
        built: 'A prototype workflow with distinct agents for intake, retrieval, reasoning, draft generation, and human review. The system was designed to pass context between steps and surface uncertainty clearly.',
        howItWorks: [
          'Intake agent structures the request',
          'Research agent gathers relevant context',
          'Planning agent decides next steps',
          'Drafting agent produces outputs',
          'Review layer flags uncertainty and routes for human approval'
        ],
        architecture: [
          'LLMs for reasoning and generation',
          'Retrieval systems for context',
          'API integrations for data access',
          'Workflow orchestration layer',
          'Human-in-the-loop review interface'
        ],
        observations: 'Internal testing suggested that agentic workflows may help speed up repetitive coordination-heavy tasks, but performance depends heavily on scope control, tool reliability, and review design.',
        limitations: 'This prototype was tested internally only. Results described here are observations from internal testing and are not presented as production outcomes.',
        fits: 'Operations, internal knowledge work, research workflows, triage, and structured drafting tasks.',
        disclaimer: 'This is an internal prototype created by our team for demonstration purposes. Any observations described here are based on internal testing only.'
      }
    },
    {
      id: 'usecase',
      type: 'Hypothetical',
      typeColor: 'bg-purple-500/10 text-purple-600 border-purple-500/30',
      icon: <Lightbulb className="h-5 w-5" />,
      title: 'Illustrative Use Case: Insurance Operations',
      subtitle: 'Hypothetical example for educational purposes',
      summary: 'How an insurance operations team could use agentic AI to support claim intake, document processing, and coordination.',
      content: {
        scenario: 'This example shows how an insurance operations team could use agentic AI to support claim intake, document classification, follow-up coordination, and human review.',
        profile: 'A mid-sized insurance team handling high volumes of inbound claims and supporting documents.',
        before: 'Manual intake, repeated document checks, fragmented handoffs, and delayed follow-up.',
        workflow: [
          'Intake agent receives and categorizes incoming requests',
          'Document agent extracts structured data',
          'Policy-check agent surfaces relevant rules for review',
          'Follow-up agent drafts missing-information requests',
          'Human reviewer approves key decisions'
        ],
        humanReview: 'All coverage decisions, exception handling, and customer-facing final actions remain under human control.',
        risks: 'Document quality, policy interpretation risk, escalation design, audit trails, and clear approval checkpoints.',
        benefits: 'Potentially faster triage, better consistency in information gathering, and less manual coordination. These are not presented as measured results.',
        validation: 'Accuracy, latency, escalation rates, reviewer burden, compliance requirements, and integration constraints.',
        disclaimer: 'This is a hypothetical example created for educational purposes. It is intended to illustrate approach, workflow design, and evaluation thinking.'
      }
    },
    {
      id: 'blueprint',
      type: 'Methodology',
      typeColor: 'bg-green-500/10 text-green-600 border-green-500/30',
      icon: <Map className="h-5 w-5" />,
      title: 'Delivery Blueprint: Our Implementation Approach',
      subtitle: 'A methodology example showing how we work',
      summary: 'Our recommended approach for designing and deploying an agentic AI workflow for business use cases.',
      content: {
        objective: 'Show how we would approach designing and deploying an agentic AI workflow for a business use case.',
        discovery: 'We document the current workflow, identify repetitive decisions, define constraints, and determine where human review must remain.',
        design: 'We define the roles of each agent, context boundaries, tool access, and handoff logic.',
        integration: 'We identify which systems the workflow needs to read from, write to, or trigger.',
        guardrails: 'We define approval points, fallback behavior, auditability requirements, and confidence thresholds.',
        pilot: 'We recommend starting with a narrow, low-risk workflow and clear evaluation criteria.',
        evaluation: 'We assess output quality, exception handling, time savings, reviewer effort, and operational fit.',
        rollout: 'Expand gradually after the pilot shows acceptable quality and governance readiness.',
        success: 'Cycle time, handoff reduction, accuracy, reviewer load, and business-specific workflow KPIs. No actual numbers are included.',
        disclaimer: 'This blueprint describes our recommended approach for this kind of problem. It is intended to show our methodology, planning process, and evaluation framework.'
      }
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
                Resources
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                We share internal prototypes, educational examples, and practical implementation thinking with clear labeling. These resources help you understand our technical approach and evaluation methodology.
              </p>
              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border">
                <AlertCircle className="h-5 w-5 text-[hsl(var(--accent-purple))] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium mb-1">Transparency Note</p>
                  <p className="text-sm text-muted-foreground">
                    All examples below are clearly labeled as internal prototypes, hypothetical scenarios, or methodology descriptions. We do not present these as client case studies or proven production outcomes.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Examples Section */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              Examples
            </h2>
          </Reveal>

          <div className="space-y-6">
            {resources.map((resource, index) => (
              <Reveal key={resource.id} delay={index * 0.1}>
                <Card className="border-2 hover:border-[hsl(var(--accent-purple))]/30 transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className={`${resource.typeColor} border`}>
                            {resource.type}
                          </Badge>
                          <div className="flex items-center gap-2 text-[hsl(var(--accent-purple))]">
                            {resource.icon}
                          </div>
                        </div>
                        <CardTitle className="text-xl sm:text-2xl mb-2">
                          {resource.title}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {resource.subtitle}
                        </CardDescription>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCard(resource.id)}
                        className="flex-shrink-0"
                      >
                        {expandedCard === resource.id ? (
                          <ChevronUp className="h-5 w-5" />
                        ) : (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground mt-3">
                      {resource.summary}
                    </p>
                  </CardHeader>

                  {expandedCard === resource.id && (
                    <CardContent className="pt-0">
                      <div className="border-t pt-6 space-y-6">
                        {/* Prototype Content */}
                        {resource.id === 'prototype' && (
                          <>
                            <div>
                              <h4 className="font-semibold mb-2">Overview</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.overview}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">The Business Problem We Explored</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.problem}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">What We Built</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.built}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">How the Agent Works</h4>
                              <ul className="space-y-2">
                                {resource.content.howItWorks.map((step, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-purple))] mt-0.5 flex-shrink-0" />
                                    {step}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Tools / Architecture</h4>
                              <div className="flex flex-wrap gap-2">
                                {resource.content.architecture.map((tech, idx) => (
                                  <Badge key={idx} variant="outline" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">What We Observed in Internal Testing</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.observations}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Limitations</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.limitations}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Where This Approach May Fit</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.fits}</p>
                            </div>

                            <div className="bg-muted/50 p-4 rounded-lg border">
                              <p className="text-xs text-muted-foreground italic">{resource.content.disclaimer}</p>
                            </div>
                          </>
                        )}

                        {/* Use Case Content */}
                        {resource.id === 'usecase' && (
                          <>
                            <div>
                              <h4 className="font-semibold mb-2">Scenario Summary</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.scenario}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Example Company Profile</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.profile}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Workflow Before AI</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.before}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Proposed Agentic Workflow</h4>
                              <ul className="space-y-2">
                                {resource.content.workflow.map((step, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-purple))] mt-0.5 flex-shrink-0" />
                                    {step}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Human Review Points</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.humanReview}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Risks and Governance Considerations</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.risks}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Expected Operational Benefits</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.benefits}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">What Would Need Validation in a Real Deployment</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.validation}</p>
                            </div>

                            <div className="bg-muted/50 p-4 rounded-lg border">
                              <p className="text-xs text-muted-foreground italic">{resource.content.disclaimer}</p>
                            </div>
                          </>
                        )}

                        {/* Blueprint Content */}
                        {resource.id === 'blueprint' && (
                          <>
                            <div>
                              <h4 className="font-semibold mb-2">Objective</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.objective}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Discovery and Workflow Mapping</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.discovery}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Agent Design</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.design}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Tool Integration Plan</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.integration}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Guardrails and Approvals</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.guardrails}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Pilot Scope</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.pilot}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Evaluation Framework</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.evaluation}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">Rollout Approach</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.rollout}</p>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2">What Success Would Be Measured By</h4>
                              <p className="text-sm text-muted-foreground">{resource.content.success}</p>
                            </div>

                            <div className="bg-muted/50 p-4 rounded-lg border">
                              <p className="text-xs text-muted-foreground italic">{resource.content.disclaimer}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
