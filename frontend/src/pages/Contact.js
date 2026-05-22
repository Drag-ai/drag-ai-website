import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { toast } from 'sonner';
import {
  Mail,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Send,
  Calendar,
  Clock,
} from 'lucide-react';

const PUBLIC_EMAIL = 'info@drag-ai.com';

// Read the Web3Forms access key from environment.
// Falls back to the previously-configured key only if no env var is set, so the form keeps working.
const WEB3FORMS_KEY =
  process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || 'af781fa2-7ab3-4154-8aee-f123f4ae54c5';

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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    country: '',
    interest: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-scroll to form for both legacy #form and new #ai-discovery-call anchors
  useEffect(() => {
    const targetHash = location.hash;
    if ((targetHash === '#form' || targetHash === '#ai-discovery-call') && formRef.current) {
      const t = setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      toast.error('Please accept the privacy notice to continue.');
      return;
    }

    setIsSubmitting(true);

    const payload = {
      access_key: WEB3FORMS_KEY,
      subject: `New AI Discovery Call request from ${formData.name}`,
      from_name: 'Drag AI Contact Form',
      email: formData.email,
      reply_to: formData.email,
      name: formData.name,
      company: formData.company,
      role: formData.role,
      country: formData.country,
      interest: formData.interest,
      message: formData.message,
      botcheck: false,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          company: '',
          role: '',
          country: '',
          interest: '',
          message: '',
          consent: false,
        });
        toast.success('Request received. We will reply within one business day.');
      } else {
        toast.error('Failed to send. Please try again or email us at info@drag-ai.com');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Network error. Please try again or email us at info@drag-ai.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col" data-testid="contact-page">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div
          className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
          style={{ zIndex: 10 }}
        >
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Book a <span className="text-[hsl(var(--accent-purple))]">30-Minute AI Discovery Call</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Tell us about your business problem, current workflow, and data. We will tell you
                honestly whether AI can help, what would deliver real value, and what would be a
                practical first step.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Quick Cards */}
      <section className="pb-6">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Reveal>
              <Card className="p-5 flex items-start gap-3" data-testid="contact-card-email">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10">
                  <Mail className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-foreground/60 mb-1">Email</p>
                  <a
                    href={`mailto:${PUBLIC_EMAIL}`}
                    className="text-sm font-medium hover:text-[hsl(var(--accent-purple))] transition-colors"
                  >
                    {PUBLIC_EMAIL}
                  </a>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.1}>
              <Card className="p-5 flex items-start gap-3" data-testid="contact-card-call">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10">
                  <Calendar className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-foreground/60 mb-1">Discovery Call</p>
                  <p className="text-sm font-medium">30 minutes &middot; free &middot; no obligation</p>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="p-5 flex items-start gap-3" data-testid="contact-card-response">
                <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-pink))]/10">
                  <Clock className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-foreground/60 mb-1">Response Time</p>
                  <p className="text-sm font-medium">Within 1 business day</p>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section
        id="ai-discovery-call"
        className="py-14 sm:py-18 lg:py-24 bg-secondary/40 scroll-mt-20"
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <Reveal>
                <Card className="p-8 card-hover border-2">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Talk to Us</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We typically respond within one business day. You can also reach us by
                        email or via our registered UK office.
                      </p>
                    </div>

                    <div className="space-y-6">
                      {/* Email */}
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10">
                          <Mail className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-1">Email</p>
                          <a
                            href={`mailto:${PUBLIC_EMAIL}`}
                            className="text-sm text-muted-foreground hover:text-[hsl(var(--accent-purple))] link-underline transition-colors"
                            data-testid="contact-info-email"
                          >
                            {PUBLIC_EMAIL}
                          </a>
                        </div>
                      </div>

                      {/* Registered Office */}
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10">
                          <MapPin className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-1">Registered Office</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            DRAG AI LIMITED<br />
                            128 City Road, London,<br />
                            EC1V 2NX, United Kingdom
                          </p>
                          <p className="text-xs text-muted-foreground mt-2">
                            Company No. 17222197 &middot; Registered in England &amp; Wales
                          </p>
                        </div>
                      </div>

                      {/* LinkedIn quick link */}
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10">
                          <Linkedin className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-1">LinkedIn</p>
                          <a
                            href="https://www.linkedin.com/company/drag-ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-muted-foreground hover:text-[hsl(var(--accent-purple))] link-underline transition-colors"
                            data-testid="contact-linkedin-link"
                          >
                            Follow Drag AI on LinkedIn
                          </a>
                        </div>
                      </div>

                      {/* Social Media Section */}
                      <div className="pt-4 border-t">
                        <p className="font-semibold text-sm mb-4">Connect With Us</p>
                        <div className="flex items-center gap-4">
                          <a
                            href="https://www.linkedin.com/company/drag-ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit our LinkedIn page"
                            className="p-3 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/10 to-[hsl(var(--accent-purple))]/5 hover:from-[hsl(var(--accent-purple))]/20 hover:to-[hsl(var(--accent-purple))]/10 transition-all"
                            data-testid="contact-social-linkedin"
                          >
                            <Linkedin className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                          </a>
                          <a
                            href="https://www.facebook.com/share/18cr5FMcj4/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit our Facebook page"
                            className="p-3 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/10 to-[hsl(var(--accent-purple))]/5 hover:from-[hsl(var(--accent-purple))]/20 hover:to-[hsl(var(--accent-purple))]/10 transition-all"
                            data-testid="contact-social-facebook"
                          >
                            <Facebook className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                          </a>
                          <a
                            href="https://www.instagram.com/dragai.tech"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit our Instagram page"
                            className="p-3 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/10 to-[hsl(var(--accent-purple))]/5 hover:from-[hsl(var(--accent-purple))]/20 hover:to-[hsl(var(--accent-purple))]/10 transition-all"
                            data-testid="contact-social-instagram"
                          >
                            <Instagram className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Reveal>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-3" ref={formRef} id="form">
              <Reveal delay={0.2}>
                <Card className="p-8 border-2 card-hover">
                  {isSuccess ? (
                    <div
                      className="text-center py-12"
                      data-testid="contact-form-success-message"
                    >
                      <div className="w-16 h-16 bg-[hsl(var(--accent-purple))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-[hsl(var(--accent-purple))]" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Request received</h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        Thank you for reaching out. We will reply within one business day to
                        schedule your 30-minute AI discovery call.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSuccess(false)}
                        data-testid="contact-form-send-another"
                      >
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      data-testid="contact-form"
                      noValidate
                    >
                      <div className="mb-6">
                        <h2 className="text-2xl font-semibold mb-2">Request Your Discovery Call</h2>
                        <p className="text-sm text-muted-foreground">
                          Share a few details so we come prepared with the right questions.
                        </p>
                      </div>

                      {/* Hidden honeypot */}
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Name */}
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Jane Doe"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              disabled={isSubmitting}
                              className="mt-1.5"
                              data-testid="contact-form-name-input"
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <Label htmlFor="email">Work Email *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="jane@company.com"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              disabled={isSubmitting}
                              className="mt-1.5"
                              data-testid="contact-form-email-input"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Company */}
                          <div>
                            <Label htmlFor="company">Company *</Label>
                            <Input
                              id="company"
                              name="company"
                              type="text"
                              placeholder="Acme Ltd."
                              value={formData.company}
                              onChange={handleChange}
                              required
                              disabled={isSubmitting}
                              className="mt-1.5"
                              data-testid="contact-form-company-input"
                            />
                          </div>

                          {/* Role */}
                          <div>
                            <Label htmlFor="role">Role / Title</Label>
                            <Input
                              id="role"
                              name="role"
                              type="text"
                              placeholder="CTO, Head of Operations, etc."
                              value={formData.role}
                              onChange={handleChange}
                              disabled={isSubmitting}
                              className="mt-1.5"
                              data-testid="contact-form-role-input"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Country */}
                          <div>
                            <Label htmlFor="country">Country</Label>
                            <Input
                              id="country"
                              name="country"
                              type="text"
                              placeholder="United Kingdom"
                              value={formData.country}
                              onChange={handleChange}
                              disabled={isSubmitting}
                              className="mt-1.5"
                              data-testid="contact-form-country-input"
                            />
                          </div>

                          {/* Area of Interest */}
                          <div>
                            <Label htmlFor="interest">Area of Interest</Label>
                            <Input
                              id="interest"
                              name="interest"
                              type="text"
                              placeholder="Agentic AI, RAG, Doc AI, Voice AI..."
                              value={formData.interest}
                              onChange={handleChange}
                              disabled={isSubmitting}
                              className="mt-1.5"
                              data-testid="contact-form-interest-input"
                            />
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <Label htmlFor="message">Tell us about your problem *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="What is the business problem, the current workflow, and the outcome you would like to achieve?"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            rows={6}
                            className="mt-1.5"
                            data-testid="contact-form-message-textarea"
                          />
                        </div>

                        {/* Consent */}
                        <div className="flex items-start gap-3">
                          <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="mt-1 h-4 w-4 rounded border-input text-[hsl(var(--accent-purple))] focus:ring-[hsl(var(--accent-purple))]"
                            data-testid="contact-form-consent-checkbox"
                            required
                          />
                          <Label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                            I agree to Drag AI processing the information above to respond to my
                            enquiry, as described in the{' '}
                            <a
                              href="/privacy"
                              className="text-[hsl(var(--accent-purple))] hover:brightness-110"
                            >
                              Privacy Policy
                            </a>
                            .
                          </Label>
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] shadow-sm hover:brightness-95"
                          data-testid="contact-form-submit-button"
                        >
                          {isSubmitting ? (
                            'Sending...'
                          ) : (
                            <>
                              Book My 30-Minute AI Discovery Call
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          Prefer email? Write to{' '}
                          <a
                            href={`mailto:${PUBLIC_EMAIL}`}
                            className="text-[hsl(var(--accent-purple))] hover:brightness-110"
                          >
                            {PUBLIC_EMAIL}
                          </a>
                          .
                        </p>
                      </div>
                    </form>
                  )}
                </Card>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
