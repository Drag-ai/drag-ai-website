import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { useContactForm } from '../hooks/useContactForm';
import { ContactQuickCards } from '../components/contact/ContactQuickCards';
import { ContactInfoCard } from '../components/contact/ContactInfoCard';
import { ContactForm } from '../components/contact/ContactForm';
import { toast } from 'sonner';

const ERROR_MESSAGES = {
  consent_required: 'Please accept the privacy notice to continue.',
  submission_failed: 'Failed to send. Please try again or email us at info@drag-ai.com',
  network_error: 'Network error. Please try again or email us at info@drag-ai.com',
};

const CONTACT_HASHES = new Set(['#form', '#ai-discovery-call']);

const useScrollToFormOnHash = (formRef, hash) => {
  useEffect(() => {
    if (!CONTACT_HASHES.has(hash) || !formRef.current) return undefined;
    const t = setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    return () => clearTimeout(t);
  }, [hash, formRef]);
};

export default function Contact() {
  useSEO({
    title: 'Book a 30-Minute AI Discovery Call | Contact Drag AI Limited',
    description:
      'Book a 30-minute AI discovery call with Drag AI Limited (Company No. 17222197). Discuss agentic AI, RAG, document intelligence, voice AI, and predictive analytics for your business.',
    canonical: '/contact',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ],
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Drag AI Limited',
        url: 'https://drag-ai.com/contact',
        about: 'AI Discovery Call booking',
        mainEntity: {
          '@type': 'Organization',
          name: 'DRAG AI LIMITED',
          email: 'info@drag-ai.com',
          url: 'https://drag-ai.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '128 City Road',
            addressLocality: 'London',
            postalCode: 'EC1V 2NX',
            addressCountry: 'GB',
          },
        },
      },
    ],
  });

  const location = useLocation();
  const formRef = useRef(null);

  useScrollToFormOnHash(formRef, location.hash);

  const {
    formData,
    isSubmitting,
    isSuccess,
    handleChange,
    handleSubmit,
    setIsSuccess,
  } = useContactForm({
    onSuccess: () => toast.success('Request received. We will reply within one business day.'),
    onError: (code) => toast.error(ERROR_MESSAGES[code] || ERROR_MESSAGES.submission_failed),
  });

  return (
    <div className="flex flex-col" data-testid="contact-page">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Let&apos;s Discuss Your{' '}
                <span className="text-[hsl(var(--accent-purple))]">AI Use Case</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Tell us about your business problem, workflow, or automation idea. We&apos;ll help
                you identify whether AI can solve it practically &mdash; honestly scoped, securely
                built, and tied to measurable outcomes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactQuickCards />

      <section
        id="ai-discovery-call"
        className="py-14 sm:py-18 lg:py-24 bg-secondary/40 scroll-mt-20"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <ContactInfoCard />
            </div>

            <ContactForm
              formRef={formRef}
              formData={formData}
              isSubmitting={isSubmitting}
              isSuccess={isSuccess}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              onReset={() => setIsSuccess(false)}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
