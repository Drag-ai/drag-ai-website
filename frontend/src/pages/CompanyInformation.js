import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { Building2, MapPin, Globe, Mail } from 'lucide-react';

export default function CompanyInformation() {
  useSEO({
    title: 'Company Information | Drag AI Limited',
    description: 'DRAG AI LIMITED is a UK-registered AI consulting company. Company Number 17222197, registered in England and Wales.',
    canonical: '/company-information',
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4 border-[hsl(var(--accent-purple))]/30">
                Legal Information
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Company <span className="text-[hsl(var(--accent-purple))]">Information</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                DRAG AI LIMITED is a private limited company registered in England and Wales.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Company Details */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Card className="p-8 sm:p-10">
              <div className="space-y-8">
                {/* Legal Name */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center flex-shrink-0">
                    <Building2 className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Legal Name</h3>
                    <p className="text-muted-foreground">DRAG AI LIMITED</p>
                  </div>
                </div>

                {/* Company Number */}
                <div className="pl-14">
                  <h3 className="font-semibold mb-1">Company Number</h3>
                  <p className="text-muted-foreground">17222197</p>
                </div>

                {/* Jurisdiction */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Jurisdiction</h3>
                    <p className="text-muted-foreground">England and Wales</p>
                  </div>
                </div>

                {/* Registered Office */}
                <div className="pl-14">
                  <h3 className="font-semibold mb-1">Registered Office</h3>
                  <p className="text-muted-foreground">
                    128 City Road<br />
                    London<br />
                    EC1V 2NX<br />
                    United Kingdom
                  </p>
                </div>

                {/* Company Type */}
                <div className="pl-14">
                  <h3 className="font-semibold mb-1">Company Type</h3>
                  <p className="text-muted-foreground">Private company limited by shares</p>
                </div>

                {/* Incorporated */}
                <div className="pl-14">
                  <h3 className="font-semibold mb-1">Incorporated</h3>
                  <p className="text-muted-foreground">15 May 2026</p>
                </div>

                {/* Website */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Website</h3>
                    <p className="text-muted-foreground">
                      <a href="https://drag-ai.com" className="hover:text-[hsl(var(--accent-purple))] transition-colors">
                        https://drag-ai.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Contact */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Enquiries</h3>
                    <p className="text-muted-foreground">
                      For business enquiries, please use the <a href="/contact#form" className="text-[hsl(var(--accent-purple))] hover:brightness-110 transition-colors">contact form</a> on this website.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Note */}
          <Reveal delay={0.2}>
            <div className="mt-8 p-4 bg-secondary/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Note:</strong> The registered office address is the official correspondence address for legal and regulatory purposes. For business enquiries and project discussions, please use the contact form.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
