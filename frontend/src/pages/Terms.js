import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useSEO } from '../hooks/useSEO';

export default function Terms() {
  useSEO({
    title: 'Terms of Use | Drag AI Limited',
    description: 'Terms of Use for the Drag AI website and services. Operated by DRAG AI LIMITED (Company No. 17222197), registered in England and Wales.',
    canonical: '/terms',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Terms of Use', path: '/terms' },
    ],
  });

  return (
    <div className="flex flex-col" data-testid="terms-page">
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-4 border-[hsl(var(--accent-purple))]/30">Legal</Badge>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
                Terms <span className="text-[hsl(var(--accent-purple))]">of Use</span>
              </h1>
              <p className="text-sm text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-14 sm:pb-18 lg:pb-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Card className="p-8 md:p-12">
              <div className="prose prose-sm sm:prose max-w-none">

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">1. About these Terms</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    These Terms of Use ("Terms") govern your access to and use of the website operated by <strong>DRAG AI LIMITED</strong> ("Drag AI", "we", "us", "our") at <span className="font-mono">drag-ai.com</span>. By accessing or using the website, you agree to be bound by these Terms.
                  </p>
                  <div className="mt-4 p-4 rounded-lg bg-secondary/40 text-sm text-foreground/90">
                    <p><strong>DRAG AI LIMITED</strong></p>
                    <p>Company Number: 17222197</p>
                    <p>Registered in England and Wales</p>
                    <p>Registered Office: 128 City Road, London, EC1V 2NX, United Kingdom</p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. About Our Services</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    This website provides information about Drag AI&apos;s consulting and engineering services, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                    <li>Agentic AI systems</li>
                    <li>Retrieval-Augmented Generation (RAG)</li>
                    <li>Document intelligence (Doc AI / OCR)</li>
                    <li>Voice and conversational AI</li>
                    <li>Predictive analytics</li>
                    <li>AI strategy &amp; consulting</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    Specific engagements are governed by a separate written agreement between Drag AI and the client.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Acceptable Use</h2>
                  <p className="text-foreground/90 leading-relaxed mb-3">When using this website you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                    <li>Use the website only for lawful purposes.</li>
                    <li>Not attempt to gain unauthorised access to any part of the website, systems, or networks.</li>
                    <li>Not introduce malware, viruses, or any harmful code.</li>
                    <li>Not use automated tools to scrape, harvest, or interfere with the website.</li>
                    <li>Provide accurate information in any forms you submit.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    Unless otherwise stated, all content on this website — including text, graphics, logos, code, and design — is owned by or licensed to DRAG AI LIMITED and is protected by applicable intellectual property laws.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                    <li>You may view and share links to our pages for non-commercial, informational purposes.</li>
                    <li>You may not copy, reproduce, republish, or commercially exploit our content without prior written consent.</li>
                    <li>Frameworks, methodologies, internal tooling, and reusable components developed by Drag AI remain our intellectual property.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. Third-Party Links</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or policies of such third-party sites. Accessing them is at your own risk.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. Disclaimer</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    This website and its content are provided on an "as is" and "as available" basis. Content is for general information only and does not constitute professional, legal, financial, or technical advice. Use of any AI-related guidance or examples is at your own discretion and risk.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    To the fullest extent permitted by applicable law:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                    <li>Drag AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website.</li>
                    <li>Our total aggregate liability arising out of or in connection with the website shall not exceed GBP 100, except where liability cannot be excluded by law.</li>
                    <li>Nothing in these Terms excludes or limits liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under UK law.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">8. Privacy</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Your use of the website is also subject to our <a href="/privacy" className="text-[hsl(var(--accent-purple))] hover:brightness-110">Privacy Policy</a> and <a href="/cookie-policy" className="text-[hsl(var(--accent-purple))] hover:brightness-110">Cookie Policy</a>.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">9. Changes</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    We may update these Terms from time to time. The latest version will always be published on this page with an updated "Last updated" date. Continued use of the website after changes are posted constitutes acceptance of the updated Terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">10. Governing Law &amp; Jurisdiction</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    These Terms and any dispute arising out of or in connection with them are governed by the laws of <strong>England and Wales</strong>. The courts of England and Wales shall have exclusive jurisdiction to settle any such dispute.
                  </p>
                </section>

                <section className="mb-2">
                  <h2 className="text-2xl font-semibold mb-4">11. Contact</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Questions about these Terms? Email <a href="mailto:info@drag-ai.com" className="text-[hsl(var(--accent-purple))] hover:brightness-110">info@drag-ai.com</a> or write to our registered office at 128 City Road, London, EC1V 2NX, United Kingdom.
                  </p>
                </section>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
