import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

const Disclaimer = ({ text }) => (
  <div className="bg-muted/50 p-4 rounded-lg border">
    <p className="text-xs text-muted-foreground italic">{text}</p>
  </div>
);

const TextBlock = ({ label, body }) => (
  <div>
    <h4 className="font-semibold mb-2">{label}</h4>
    <p className="text-sm text-muted-foreground">{body}</p>
  </div>
);

const StepList = ({ label, items, keyPrefix }) => (
  <div>
    <h4 className="font-semibold mb-2">{label}</h4>
    <ul className="space-y-2">
      {items.map((step) => (
        <li
          key={`${keyPrefix}-${step}`}
          className="flex items-start gap-2 text-sm text-muted-foreground"
        >
          <CheckCircle2 className="h-4 w-4 text-[hsl(var(--accent-purple))] mt-0.5 flex-shrink-0" />
          {step}
        </li>
      ))}
    </ul>
  </div>
);

const BadgeList = ({ label, items, keyPrefix }) => (
  <div>
    <h4 className="font-semibold mb-2">{label}</h4>
    <div className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <Badge key={`${keyPrefix}-${tech}`} variant="outline" className="text-xs">
          {tech}
        </Badge>
      ))}
    </div>
  </div>
);

const PrototypeContent = ({ id, content }) => (
  <>
    <TextBlock label="Overview" body={content.overview} />
    <TextBlock label="The Business Problem We Explored" body={content.problem} />
    <TextBlock label="What We Built" body={content.built} />
    <StepList label="How the Agent Works" items={content.howItWorks} keyPrefix={`${id}-how`} />
    <BadgeList label="Tools / Architecture" items={content.architecture} keyPrefix={`${id}-arch`} />
    <TextBlock label="What We Observed in Internal Testing" body={content.observations} />
    <TextBlock label="Limitations" body={content.limitations} />
    <TextBlock label="Where This Approach May Fit" body={content.fits} />
    <Disclaimer text={content.disclaimer} />
  </>
);

const UseCaseContent = ({ id, content }) => (
  <>
    <TextBlock label="Scenario Summary" body={content.scenario} />
    <TextBlock label="Example Company Profile" body={content.profile} />
    <TextBlock label="Workflow Before AI" body={content.before} />
    <StepList
      label="Proposed Agentic Workflow"
      items={content.workflow}
      keyPrefix={`${id}-workflow`}
    />
    <TextBlock label="Human Review Points" body={content.humanReview} />
    <TextBlock label="Risks and Governance Considerations" body={content.risks} />
    <TextBlock label="Expected Operational Benefits" body={content.benefits} />
    <TextBlock
      label="What Would Need Validation in a Real Deployment"
      body={content.validation}
    />
    <Disclaimer text={content.disclaimer} />
  </>
);

const BlueprintContent = ({ content }) => (
  <>
    <TextBlock label="Objective" body={content.objective} />
    <TextBlock label="Discovery and Workflow Mapping" body={content.discovery} />
    <TextBlock label="Agent Design" body={content.design} />
    <TextBlock label="Tool Integration Plan" body={content.integration} />
    <TextBlock label="Guardrails and Approvals" body={content.guardrails} />
    <TextBlock label="Pilot Scope" body={content.pilot} />
    <TextBlock label="Evaluation Framework" body={content.evaluation} />
    <TextBlock label="Rollout Approach" body={content.rollout} />
    <TextBlock label="What Success Would Be Measured By" body={content.success} />
    <Disclaimer text={content.disclaimer} />
  </>
);

const contentRenderers = {
  prototype: PrototypeContent,
  usecase: UseCaseContent,
  blueprint: BlueprintContent,
};

export const ResourceCard = ({ resource, isExpanded, onToggle }) => {
  const ContentRenderer = contentRenderers[resource.id];

  return (
    <Card className="border-2 hover:border-[hsl(var(--accent-purple))]/30 transition-all">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <Badge className={`${resource.typeColor} border`}>{resource.type}</Badge>
              <div className="flex items-center gap-2 text-[hsl(var(--accent-purple))]">
                {resource.icon}
              </div>
            </div>
            <CardTitle className="text-xl sm:text-2xl mb-2">{resource.title}</CardTitle>
            <CardDescription className="text-sm">{resource.subtitle}</CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggle}
            className="flex-shrink-0"
            aria-label={isExpanded ? 'Collapse resource' : 'Expand resource'}
          >
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-3">{resource.summary}</p>
      </CardHeader>

      {isExpanded && ContentRenderer && (
        <CardContent className="pt-0">
          <div className="border-t pt-6 space-y-6">
            <ContentRenderer id={resource.id} content={resource.content} />
          </div>
        </CardContent>
      )}
    </Card>
  );
};
