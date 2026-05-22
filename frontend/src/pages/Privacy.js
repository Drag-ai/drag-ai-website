import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { useSEO } from '../hooks/useSEO';

export default function Privacy() {
  useSEO({
    title: 'Privacy Policy | Drag AI Limited',
    description: 'Drag AI Limited Privacy Policy. How DRAG AI LIMITED (Company No. 17222197) collects, uses and protects your personal data in line with UK GDPR.',
    canonical: '/privacy',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy' },
    ],
  });

  return (
    <div className="flex flex-col" data-testid="privacy-page">
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-4 border-[hsl(var(--accent-purple))]/30">Legal</Badge>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-4">
                Privacy <span className="text-[hsl(var(--accent-purple))]">Policy</span>
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
                  <h2 className="text-2xl font-semibold mb-4">1. About this Policy</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    This Privacy Policy explains how <strong>DRAG AI LIMITED</strong> ("Drag AI", "we", "us", "our") collects, uses, and protects your personal data when you visit our website at <span className="font-mono">drag-ai.com</span> or interact with our services.
                  </p>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    We are committed to protecting your personal data in line with the <strong>UK General Data Protection Regulation (UK GDPR)</strong> and the <strong>Data Protection Act 2018</strong>.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">2. Data Controller</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    The data controller is:
                  </p>
                  <div className="mt-3 p-4 rounded-lg bg-secondary/40 text-sm text-foreground/90">
                    <p><strong>DRAG AI LIMITED</strong></p>
                    <p>Company Number: 17222197</p>
                    <p>Registered in England and Wales</p>
                    <p>Registered Office: 128 City Road, London, EC1V 2NX, United Kingdom</p>
                    <p className="mt-2">Contact: <a href="mailto:info@drag-ai.com" className="text-[hsl(var(--accent-purple))] hover:brightness-110">info@drag-ai.com</a></p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">3. Information We Collect</h2>
                  <h3 className="text-lg font-semibold mb-2">3.1 Information you provide</h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                    <li>Name, work email, company name, role, and country when you fill in our contact or discovery-call form.</li>
                    <li>Project information, requirements, and context you share in messages with us.</li>
                    <li>Any additional information you choose to provide via email.</li>
                  </ul>

                  <h3 className="text-lg font-semibold mb-2 mt-6">3.2 Information collected automatically</h3>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                    <li>Device, browser, and operating system information.</li>
                    <li>IP address and approximate location (country / city level).</li>
                    <li>Pages visited, referring URLs, and time spent on pages.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">4. Lawful Basis &amp; Purposes</h2>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    We process personal data on the following lawful bases under UK GDPR:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                    <li><strong>Legitimate interests</strong> — responding to your enquiry, running and improving our website, and securing our systems.</li>
                    <li><strong>Consent</strong> — where required, for non-essential cookies and any marketing communications. You can withdraw consent at any time.</li>
                    <li><strong>Contractual necessity</strong> — to perform a contract or take steps prior to entering into a contract with you.</li>
                    <li><strong>Legal obligation</strong> — to comply with applicable laws and regulatory requirements.</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">5. How We Share Your Data</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    We do not sell your personal data. We may share it with trusted processors who help us operate:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/90 mt-3">
                    <li>Hosting and infrastructure providers.</li>
                    <li>Form submission and email delivery providers (e.g., Web3Forms) for handling enquiries.</li>
                    <li>Analytics providers, where used.</li>
                    <li>Professional advisors (legal, accounting) where strictly necessary.</li>
                    <li>Authorities, where required by law.</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    All processors are bound by appropriate data protection terms.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">6. International Transfers</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Some of our service providers may be located outside the UK or EEA. Where we transfer personal data internationally, we rely on appropriate safeguards such as UK adequacy regulations, the UK International Data Transfer Agreement (IDTA), or Standard Contractual Clauses.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    We retain personal data only for as long as necessary for the purposes set out in this policy, to comply with legal obligations, resolve disputes, and enforce our agreements. Enquiry data is typically kept for up to 24 months unless required longer.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    Subject to applicable law, you have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                    <li>Access the personal data we hold about you.</li>
                    <li>Request correction of inaccurate or incomplete data.</li>
                    <li>Request deletion of your data (right to erasure).</li>
                    <li>Restrict or object to certain processing.</li>
                    <li>Request data portability.</li>
                    <li>Withdraw consent at any time, where processing is based on consent.</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-4">
                    To exercise these rights, contact us at <a href="mailto:info@drag-ai.com" className="text-[hsl(var(--accent-purple))] hover:brightness-110">info@drag-ai.com</a>. You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--accent-purple))] hover:brightness-110">ico.org.uk</a>.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">9. Security</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    We implement reasonable technical and organisational measures to protect personal data against unauthorised access, alteration, disclosure, or destruction. However, no transmission over the internet is fully secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">10. Cookies</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Our website uses cookies and similar technologies as described in our <a href="/cookie-policy" className="text-[hsl(var(--accent-purple))] hover:brightness-110">Cookie Policy</a>.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">11. Children&apos;s Data</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Our services are intended for businesses and are not directed at children. We do not knowingly collect personal data from individuals under 16.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4">12. Changes</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    We may update this Privacy Policy from time to time. The latest version will always be available on this page with an updated "Last updated" date.
                  </p>
                </section>

                <section className="mb-2">
                  <h2 className="text-2xl font-semibold mb-4">13. Contact</h2>
                  <p className="text-foreground/90 leading-relaxed">
                    Questions about this Privacy Policy? Email <a href="mailto:info@drag-ai.com" className="text-[hsl(var(--accent-purple))] hover:brightness-110">info@drag-ai.com</a> or write to our registered office at 128 City Road, London, EC1V 2NX, United Kingdom.
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
