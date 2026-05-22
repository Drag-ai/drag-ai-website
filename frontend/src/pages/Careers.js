import { useState } from 'react';
import { Briefcase, Users, Heart, Send } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { toast } from 'sonner';

const WEB3FORMS_KEY =
  process.env.REACT_APP_WEB3FORMS_ACCESS_KEY || 'af781fa2-7ab3-4154-8aee-f123f4ae54c5';

const opportunityTypes = [
  {
    id: 'engineer',
    icon: Briefcase,
    title: 'AI Engineers',
    description:
      'Practitioners who build production-grade AI systems \u2014 agentic workflows, RAG, document AI, voice agents \u2014 not just demos.',
  },
  {
    id: 'design-product',
    icon: Users,
    title: 'Designers, Consultants & Product Thinkers',
    description:
      'People who can shape AI use cases into business outcomes, design workflows, and communicate value to operations leaders.',
  },
  {
    id: 'delivery',
    icon: Heart,
    title: 'Delivery & Implementation Partners',
    description:
      'Boutique studios, freelancers, and specialist partners interested in collaborating on AI delivery for client engagements.',
  },
];

const Careers = () => {
  useSEO({
    title: 'Careers & Partnerships | Join Drag AI',
    description:
      'Drag AI is not actively hiring full-time roles right now, but we are open to conversations with AI engineers, designers, consultants, and delivery partners interested in building practical AI systems.',
    canonical: '/careers',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Careers', path: '/careers' },
    ],
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profileType: '',
    linkedin: '',
    message: '',
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Career / partnership interest from ${formData.name}`,
          from_name: 'Drag AI Careers Page',
          email: formData.email,
          reply_to: formData.email,
          name: formData.name,
          profile_type: formData.profileType,
          linkedin: formData.linkedin,
          message: formData.message,
          botcheck: false,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (response.ok && result.success) {
        setIsSuccess(true);
        setFormData({
          name: '',
          email: '',
          profileType: '',
          linkedin: '',
          message: '',
          consent: false,
        });
        toast.success('Thanks! We have received your profile and will reach out when relevant.');
      } else {
        toast.error('Failed to send. Please email us at info@drag-ai.com');
      }
    } catch (err) {
      toast.error('Network error. Please email us at info@drag-ai.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen" data-testid="careers-page">
      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge
            className="mb-6 bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))] border-[hsl(var(--accent-purple))]/20"
            data-testid="careers-badge"
          >
            Careers &amp; Partnerships
          </Badge>
          <h1
            className="text-4xl sm:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-pink))] bg-clip-text text-transparent"
            data-testid="careers-hero-title"
          >
            Build practical AI with us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We are not actively hiring for full-time roles right now, but we are open to
            conversations with AI engineers, designers, consultants, and delivery partners
            interested in building practical AI systems.
          </p>
        </div>
      </section>

      {/* Who we are open to */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-3">Who we are open to talking to</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three kinds of conversations we are always happy to have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {opportunityTypes.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.id}
                  className="border-2 hover:border-[hsl(var(--accent-purple))]/30 transition-all duration-300 h-full"
                  data-testid={`opportunity-card-${item.id}`}
                >
                  <CardContent className="pt-6">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/20 to-[hsl(var(--accent-pink))]/20 inline-flex mb-4">
                      <Icon className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              id: 'partner',
              title: 'Partner with Drag AI',
              desc: 'Co-deliver AI engagements with us as a specialist studio or freelancer.',
            },
            {
              id: 'future',
              title: 'Join future opportunities',
              desc: 'Send your profile so we can reach out when relevant roles open up.',
            },
            {
              id: 'profile',
              title: 'Send your profile',
              desc: 'Tell us what you build and the problems you would like to work on.',
            },
          ].map((card) => (
            <Card key={card.id} className="p-6 card-hover">
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground">{card.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold mb-3" data-testid="careers-form-title">
              Get in touch
            </h2>
            <p className="text-muted-foreground">
              Drop us a short message and a link to your work. We will reply if there&apos;s a good fit.
            </p>
          </div>

          <Card className="p-8 border-2">
            {isSuccess ? (
              <div className="text-center py-8" data-testid="careers-form-success">
                <div className="w-14 h-14 bg-[hsl(var(--accent-purple))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Profile received</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Thank you. We&apos;ll get back to you when there&apos;s a relevant opportunity.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Send another
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="careers-form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="careers-name">Full Name *</Label>
                    <Input
                      id="careers-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="mt-1.5"
                      data-testid="careers-form-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="careers-email">Work Email *</Label>
                    <Input
                      id="careers-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="mt-1.5"
                      data-testid="careers-form-email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="careers-profile-type">I am a</Label>
                    <select
                      id="careers-profile-type"
                      name="profileType"
                      value={formData.profileType}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      data-testid="careers-form-profile-type"
                    >
                      <option value="">Select one</option>
                      <option value="ai-engineer">AI Engineer</option>
                      <option value="designer-product">Designer / Product</option>
                      <option value="consultant">Consultant</option>
                      <option value="delivery-partner">Delivery Partner / Studio</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="careers-linkedin">LinkedIn / Portfolio URL</Label>
                    <Input
                      id="careers-linkedin"
                      name="linkedin"
                      type="url"
                      placeholder="https://..."
                      value={formData.linkedin}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="mt-1.5"
                      data-testid="careers-form-linkedin"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="careers-message">A short note *</Label>
                  <Textarea
                    id="careers-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    placeholder="Tell us briefly what you build, the problems you would like to work on, and any links to your best work."
                    className="mt-1.5"
                    data-testid="careers-form-message"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="careers-consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className="mt-1 h-4 w-4 rounded border-input"
                    data-testid="careers-form-consent"
                  />
                  <Label
                    htmlFor="careers-consent"
                    className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    I agree to Drag AI processing the information above in line with the{' '}
                    <Link to="/privacy" className="text-[hsl(var(--accent-purple))] hover:brightness-110">
                      Privacy Policy
                    </Link>
                    .
                  </Label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95"
                  data-testid="careers-form-submit"
                >
                  {isSubmitting ? 'Sending...' : 'Send my profile'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Prefer email? Write to{' '}
                  <a href="mailto:info@drag-ai.com" className="text-[hsl(var(--accent-purple))] hover:brightness-110">
                    info@drag-ai.com
                  </a>
                  .
                </p>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;
