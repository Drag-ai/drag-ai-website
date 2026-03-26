import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Reveal } from '../components/Reveal';
import { NeuralBackground } from '../components/NeuralBackground';
import { useSEO } from '../hooks/useSEO';
import { toast } from 'sonner';
import { Mail, MapPin, Linkedin, Facebook, Instagram, Send } from 'lucide-react';

export default function Contact() {
  useSEO({
    title: 'Contact Drag AI | Agentic AI Development & Consulting',
    description: 'Contact Drag AI to discuss agentic AI solutions for your business. Schedule a discovery call to explore custom AI agents, autonomous workflows, and intelligent automation for your operations.',
    canonical: '/contact',
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare payload for Web3Forms
    const payload = {
      access_key: 'af781fa2-7ab3-4154-8aee-f123f4ae54c5',
      subject: `New Contact Form Submission from ${formData.name}`,
      from_name: 'Drag AI Contact Form',
      email: formData.email,
      reply_to: formData.email,
      name: formData.name,
      company: formData.company,
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
        setFormData({ name: '', email: '', company: '', message: '' });
        toast.success('Message sent successfully! We\'ll be in touch soon.');
      } else {
        toast.error('Failed to send message. Please try again or email us directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Network error. Please try again or email us at info@drag-ai.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                Let's <span className="text-[hsl(var(--accent-purple))]">Build Together</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Ready to explore how Drag AI can support your AI initiatives? Let's start a
                conversation about your goals and how we can help achieve them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-14 sm:py-18 lg:py-24 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Contact Info */}
            <div className="lg:col-span-2">
              <Reveal>
                <Card className="p-8 card-hover border-2">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        We typically respond within 24 hours during business days.
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10">
                          <Mail className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-1">Email</p>
                          <a
                            href="mailto:info@drag-ai.com"
                            className="text-sm text-muted-foreground hover:text-[hsl(var(--accent-purple))] link-underline transition-colors"
                          >
                            info@drag-ai.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
                        <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10">
                          <MapPin className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm mb-1">Location</p>
                          <p className="text-sm text-muted-foreground">Bengaluru, India</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 group">
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
                            Follow us on LinkedIn
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
            <div className="lg:col-span-3">
              <Reveal delay={0.2}>
                <Card className="p-8 border-2 card-hover">
                  {isSuccess ? (
                    <div
                      className="text-center py-12"
                      data-testid="contact-form-success-message"
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSuccess(false)}
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      data-testid="contact-form"
                      noValidate
                    >
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
                        {/* Name */}
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
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
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="[email protected]"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            className="mt-1.5"
                            data-testid="contact-form-email-input"
                          />
                        </div>

                        {/* Company (Optional) */}
                        <div>
                          <Label htmlFor="company">
                            Company{' '}
                            <span className="text-xs text-muted-foreground">(Optional)</span>
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Your company"
                            value={formData.company}
                            onChange={handleChange}
                            disabled={isSubmitting}
                            className="mt-1.5"
                            data-testid="contact-form-company-input"
                          />
                        </div>

                        {/* Message */}
                        <div>
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project or question..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            disabled={isSubmitting}
                            rows={6}
                            className="mt-1.5"
                            data-testid="contact-form-message-textarea"
                          />
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
                              Send Message
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
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
