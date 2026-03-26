import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';

export default function Terms() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-14 sm:pb-18 lg:pb-24">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <div className="prose prose-sm sm:prose max-w-none">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-8">
                Terms of Service
              </h1>
              <p className="text-muted-foreground mb-8">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p className="text-foreground/90 leading-relaxed">
                  By accessing or using the Drag AI website and services, you agree to be bound by
                  these Terms of Service. If you do not agree to these terms, please do not use our
                  services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Description of Services</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Drag AI provides AI consulting and development services, including but not limited
                  to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90 mt-4">
                  <li>Agentic AI system development</li>
                  <li>RAG (Retrieval-Augmented Generation) implementation</li>
                  <li>AI automation solutions</li>
                  <li>Document intelligence systems</li>
                  <li>Conversational AI development</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  When using our services, you agree to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the confidentiality of any account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  Unless otherwise agreed in writing:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    All content on this website, including text, graphics, and code, is the property
                    of Drag AI or its licensors
                  </li>
                  <li>
                    Custom work developed for clients is typically transferred to the client upon
                    full payment
                  </li>
                  <li>
                    General frameworks and methodologies developed by Drag AI remain our intellectual
                    property
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">5. Confidentiality</h2>
                <p className="text-foreground/90 leading-relaxed">
                  We treat all client information as confidential and will not disclose it to third
                  parties without your consent, except as required by law or as necessary to provide
                  our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
                <p className="text-foreground/90 leading-relaxed mb-4">
                  To the fullest extent permitted by law:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    Drag AI shall not be liable for any indirect, incidental, special, or
                    consequential damages
                  </li>
                  <li>
                    Our total liability shall not exceed the amount paid by you for the specific
                    service giving rise to the claim
                  </li>
                  <li>
                    We do not guarantee that our services will be uninterrupted or error-free
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">7. Disclaimer of Warranties</h2>
                <p className="text-foreground/90 leading-relaxed">
                  Our services are provided "as is" without warranties of any kind, either express
                  or implied. We do not warrant that our services will meet your specific
                  requirements or that results will be achieved.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
                <p className="text-foreground/90 leading-relaxed">
                  We reserve the right to terminate or suspend access to our services at our sole
                  discretion, without notice, for conduct that we believe violates these Terms or is
                  harmful to other users, us, or third parties.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
                <p className="text-foreground/90 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of
                  India, without regard to its conflict of law provisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
                <p className="text-foreground/90 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of
                  any material changes by posting the new Terms on this page with an updated "Last
                  Updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
                <p className="text-foreground/90 leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
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
