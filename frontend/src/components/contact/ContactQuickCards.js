import { Card } from '../ui/card';
import { Reveal } from '../Reveal';
import { Mail, Calendar, Clock } from 'lucide-react';

const PUBLIC_EMAIL = 'info@drag-ai.com';

const items = [
  {
    id: 'email',
    Icon: Mail,
    label: 'Email',
    content: (
      <a
        href={`mailto:${PUBLIC_EMAIL}`}
        className="text-sm font-medium hover:text-[hsl(var(--accent-purple))] transition-colors"
      >
        {PUBLIC_EMAIL}
      </a>
    ),
  },
  {
    id: 'call',
    Icon: Calendar,
    label: 'Discovery Call',
    content: <p className="text-sm font-medium">30 minutes &middot; free &middot; no obligation</p>,
  },
  {
    id: 'response',
    Icon: Clock,
    label: 'Response Time',
    content: <p className="text-sm font-medium">Within 1 business day</p>,
  },
];

export const ContactQuickCards = () => (
  <section className="pb-6">
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item, idx) => {
          const { Icon } = item;
          return (
            <Reveal key={item.id} delay={idx * 0.1}>
              <Card className="p-5 flex items-start gap-3" data-testid={`contact-card-${item.id}`}>
                <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10">
                  <Icon className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-foreground/60 mb-1">
                    {item.label}
                  </p>
                  {item.content}
                </div>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);
