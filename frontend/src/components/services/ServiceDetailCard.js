import { Card } from '../ui/card';
import { Reveal } from '../Reveal';

export const ServiceDetailCard = ({ service }) => {
  const { Icon, name, tagline, whatItIs, whenToUse, businessImpact, testId, id } = service;
  return (
    <Reveal>
      <Card className="p-8 md:p-10 card-hover" data-testid={testId}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))] icon-glow">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-1">{name}</h2>
                <p className="text-sm text-[hsl(var(--accent-purple))]">{tagline}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6">
            <div>
              <h3 className="font-semibold mb-2">What It Is</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{whatItIs}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">When to Use</h3>
              <ul className="space-y-1">
                {whenToUse.map((item) => (
                  <li
                    key={`${id}-when-${item}`}
                    className="text-sm text-muted-foreground flex items-start"
                  >
                    <span className="mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Business Impact</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{businessImpact}</p>
            </div>
          </div>
        </div>
      </Card>
    </Reveal>
  );
};
