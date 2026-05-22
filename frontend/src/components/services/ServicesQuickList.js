import { Card } from '../ui/card';
import { Reveal } from '../Reveal';
import { Bot, Database, FileText, MessageSquare, Mic, LineChart, Compass } from 'lucide-react';

const items = [
  { id: 'agentic', Icon: Bot, name: 'Agentic AI Systems' },
  { id: 'rag', Icon: Database, name: 'RAG & Knowledge Agents' },
  { id: 'doc', Icon: FileText, name: 'Document Intelligence' },
  { id: 'chat', Icon: MessageSquare, name: 'Conversational AI' },
  { id: 'voice', Icon: Mic, name: 'Voice AI' },
  { id: 'predict', Icon: LineChart, name: 'Predictive Analytics' },
  { id: 'consult', Icon: Compass, name: 'AI Strategy & Consulting' },
];

export const ServicesQuickList = () => (
  <div className="hidden lg:block">
    <Reveal delay={0.2}>
      <Card className="p-6 card-hover border-2">
        <div className="space-y-4">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-foreground/60 block">
            OUR SERVICES
          </span>
          <div className="space-y-3">
            {items.map((item) => {
              const { Icon } = item;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-3 group"
                  data-testid={`services-quick-${item.id}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center text-[hsl(var(--accent-purple))] group-hover:scale-110 transition-transform">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium group-hover:text-[hsl(var(--accent-purple))] transition-colors">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </Reveal>
  </div>
);
