import { Card } from '../ui/card';
import { Reveal } from '../Reveal';
import { Mail, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';

const PUBLIC_EMAIL = 'info@drag-ai.com';

const socialLinks = [
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/company/drag-ai/',
    Icon: Linkedin,
    label: 'Visit our LinkedIn page',
    testId: 'contact-social-linkedin',
  },
  {
    id: 'facebook',
    href: 'https://www.facebook.com/share/18cr5FMcj4/',
    Icon: Facebook,
    label: 'Visit our Facebook page',
    testId: 'contact-social-facebook',
  },
  {
    id: 'instagram',
    href: 'https://www.instagram.com/dragai.tech',
    Icon: Instagram,
    label: 'Visit our Instagram page',
    testId: 'contact-social-instagram',
  },
];

const InfoRow = ({ Icon, title, children }) => (
  <div className="flex items-start gap-4">
    <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10">
      <Icon className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
    </div>
    <div>
      <p className="font-semibold text-sm mb-1">{title}</p>
      {children}
    </div>
  </div>
);

export const ContactInfoCard = () => (
  <Reveal>
    <Card className="p-8 card-hover border-2">
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Talk to Us</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We typically respond within one business day. You can also reach us by email or via our registered UK office.
          </p>
        </div>

        <div className="space-y-6">
          <InfoRow Icon={Mail} title="Email">
            <a
              href={`mailto:${PUBLIC_EMAIL}`}
              className="text-sm text-muted-foreground hover:text-[hsl(var(--accent-purple))] link-underline transition-colors"
              data-testid="contact-info-email"
            >
              {PUBLIC_EMAIL}
            </a>
          </InfoRow>

          <InfoRow Icon={MapPin} title="Registered Office">
            <p className="text-sm text-muted-foreground leading-relaxed">
              DRAG AI LIMITED<br />
              128 City Road, London,<br />
              EC1V 2NX, United Kingdom
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Company No. 17222197 &middot; Registered in England &amp; Wales
            </p>
          </InfoRow>

          <InfoRow Icon={Linkedin} title="LinkedIn">
            <a
              href="https://www.linkedin.com/company/drag-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-[hsl(var(--accent-purple))] link-underline transition-colors"
              data-testid="contact-linkedin-link"
            >
              Follow Drag AI on LinkedIn
            </a>
          </InfoRow>

          <div className="pt-4 border-t">
            <p className="font-semibold text-sm mb-4">Connect With Us</p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ id, href, Icon, label, testId }) => (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/10 to-[hsl(var(--accent-purple))]/5 hover:from-[hsl(var(--accent-purple))]/20 hover:to-[hsl(var(--accent-purple))]/10 transition-all"
                  data-testid={testId}
                >
                  <Icon className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  </Reveal>
);
