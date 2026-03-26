import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';

export default function Privacy() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 lg:pb-24">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <div className="prose prose-sm sm:prose max-w-none">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-8">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground mb-8">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Drag AI ("we," "us," or "our") is committed to protecting your privacy. This
                  Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-semibold mb-2">2.1 Information You Provide</h3>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Name, email address, and company information when you contact us</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold mb-2 mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  When you visit our website, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                  <li>Pages visited and time spent on our site</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you information about our services</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Information Sharing</h2>
                <p className="text-foreground/90 leading-relaxed">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90 mt-4">
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who perform services on
                    our behalf (e.g., email delivery, analytics)
                  </li>
                  <li>
                    <strong>Legal Requirements:</strong> When required by law or to protect our
                    rights
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a merger, sale, or other
                    business transaction
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
                <p className="text-foreground/90 leading-relaxed">
                  We implement reasonable security measures to protect your information. However,
                  no method of transmission over the internet is 100% secure, and we cannot
                  guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Object to or restrict certain processing activities</li>
                </ul>
                <p className="text-foreground/90 leading-relaxed mt-4">
                  To exercise these rights, please contact us at info@drag-ai.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Cookies</h2>
                <p className="text-foreground/90 leading-relaxed">
                  We may use cookies and similar tracking technologies to collect information about
                  your browsing activities. You can control cookies through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Our services are not directed to individuals under 18. We do not knowingly collect
                  information from children.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
                <p className="text-foreground/90 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any
                  changes by posting the new policy on this page with an updated "Last Updated"
                  date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
                <p className="text-foreground/90 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-foreground/90 mt-4">
                  <strong>Email:</strong> info@drag-ai.com<br />
                  <strong>Location:</strong> Bengaluru, India
                </p>
              </section>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
