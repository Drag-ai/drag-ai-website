import { Card } from '../ui/card';
import { Badge } from '../ui/badge';

const initials = (name) => name.split(' ').map((n) => n[0]).join('');

/**
 * Shared founder card used on both the About page ("Meet the Founders")
 * and the Home page ("Led by Experts") for visual consistency.
 *
 * Optional fields (experience, responsibilities) render only when present,
 * so the same component supports both rich and compact bios from a single
 * source of truth.
 */
export const FounderCard = ({ founder }) => (
  <Card
    className="p-8 card-hover group border-2 h-full"
    data-testid={`founder-card-${founder.id}`}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--accent-purple))]/20 to-[hsl(var(--accent-pink))]/15 flex items-center justify-center">
        <span className="text-xl font-semibold text-[hsl(var(--accent-purple))]">
          {initials(founder.name)}
        </span>
      </div>
      <div>
        <h3 className="font-semibold text-xl group-hover:text-[hsl(var(--accent-purple))] transition-colors">
          {founder.name}
        </h3>
        <p className="text-sm text-[hsl(var(--accent-purple))]">{founder.role}</p>
      </div>
    </div>

    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{founder.bio}</p>

    {founder.experience && (
      <div className="mb-4 p-3 bg-secondary/50 rounded-lg">
        <p className="text-xs font-mono uppercase tracking-wider text-foreground/60 mb-1">
          Experience
        </p>
        <p className="text-sm text-muted-foreground">{founder.experience}</p>
      </div>
    )}

    {Array.isArray(founder.responsibilities) && founder.responsibilities.length > 0 && (
      <div className="mb-4">
        <p className="font-semibold text-sm mb-2">Focus Areas:</p>
        <ul className="space-y-1">
          {founder.responsibilities.map((resp) => (
            <li
              key={`${founder.id}-resp-${resp}`}
              className="text-sm text-muted-foreground flex items-start"
            >
              <span className="text-[hsl(var(--accent-purple))] mr-2">&bull;</span>
              <span>{resp}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {Array.isArray(founder.expertise) && founder.expertise.length > 0 && (
      <div className="flex flex-wrap gap-2">
        {founder.expertise.map((skill) => (
          <Badge key={`${founder.id}-skill-${skill}`} variant="outline" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
    )}
  </Card>
);
