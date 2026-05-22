import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';

export default function CookiePolicy() {
  useSEO({
    title: 'Cookie Policy | Drag AI',
    description: 'Cookie Policy for Drag AI website. Learn about how we use cookies and similar technologies.',
    canonical: '/cookie-policy',
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
                Transparency
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Cookie <span className="text-[hsl(var(--accent-purple))]">Policy</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                How Drag AI uses cookies and similar technologies on this website.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <Card className="p-8 sm:p-10">
              <div className="prose prose-sm max-w-none">
                <p className="text-sm text-muted-foreground mb-6">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>

                <h2 className="text-xl font-semibold mb-4">What Are Cookies?</h2>
                <p className="text-muted-foreground mb-6">
                  Cookies are small text files that are placed on your device when you visit a website. They help the website remember your preferences and improve your experience.
                </p>

                <h2 className="text-xl font-semibold mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  Drag AI uses cookies for the following purposes:
                </p>

                <h3 className="text-lg font-semibold mb-3 mt-6">Essential Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  These cookies are necessary for the website to function properly. They enable basic features like page navigation, form submission, and security. The website cannot function properly without these cookies.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Session management</li>
                  <li>Security and authentication</li>
                  <li>Form data persistence</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Analytics Cookies</h3>
                <p className="text-muted-foreground mb-4">
                  We may use analytics cookies to understand how visitors interact with our website. This helps us improve website performance, content, and user experience.
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Page views and navigation patterns</li>
                  <li>Time spent on pages</li>
                  <li>Device and browser information</li>
                  <li>Approximate geographic location (country/city level)</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Marketing Cookies</h3>
                <p className="text-muted-foreground mb-6">
                  We currently do not use marketing or advertising cookies. If this changes, we will update this policy and seek your consent where required.
                </p>

                <h2 className="text-xl font-semibold mb-4 mt-8">Managing Cookies</h2>
                <p className="text-muted-foreground mb-4">
                  You can control and manage cookies in several ways:
                </p>

                <h3 className="text-lg font-semibold mb-3">Browser Settings</h3>
                <p className="text-muted-foreground mb-4">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>View and delete existing cookies</li>
                  <li>Block third-party cookies</li>
                  <li>Block all cookies (may affect website functionality)</li>
                  <li>Delete cookies when you close your browser</li>
                </ul>

                <p className="text-muted-foreground mb-6">
                  Consult your browser's help section for specific instructions:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                  <li>Google Chrome: Settings → Privacy and Security → Cookies</li>
                  <li>Firefox: Settings → Privacy & Security → Cookies</li>
                  <li>Safari: Preferences → Privacy → Cookies</li>
                  <li>Edge: Settings → Privacy → Cookies</li>
                </ul>

                <h2 className="text-xl font-semibold mb-4 mt-8">Third-Party Cookies</h2>
                <p className="text-muted-foreground mb-6">
                  Our website may include embedded content or integrations from third-party services (such as analytics providers). These third parties may set their own cookies. We do not control these cookies, and you should review the privacy policies of these third parties for more information.
                </p>

                <h2 className="text-xl font-semibold mb-4 mt-8">Changes to This Policy</h2>
                <p className="text-muted-foreground mb-6">
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date.
                </p>

                <h2 className="text-xl font-semibold mb-4 mt-8">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about our use of cookies, please contact us:
                </p>
                <ul className="list-none text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Email:</strong> <a href="mailto:contact@drag-ai.com" className="text-[hsl(var(--accent-purple))] hover:brightness-110">contact@drag-ai.com</a></li>
                  <li><strong className="text-foreground">Contact Form:</strong> <a href="/contact#form" className="text-[hsl(var(--accent-purple))] hover:brightness-110">https://drag-ai.com/contact</a></li>
                </ul>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
