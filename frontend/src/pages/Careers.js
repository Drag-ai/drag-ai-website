import { useState, useRef } from 'react';
import {
  Briefcase,
  Users,
  Heart,
  Send,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
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

const openPositions = [
  {
    id: 'senior-agentic-ai-engineer',
    title: 'Senior Agentic AI Engineer',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Remote (UK / EU friendly)',
    experience: '5+ years',
    summary:
      'Design and build production-grade agentic AI systems: tool-using agents, multi-step workflows, evaluation harnesses, and human-in-the-loop interfaces for real client engagements.',
    requirements: [
      '5+ years software engineering, with 2+ years on LLM / agent systems',
      'Strong Python and TypeScript; comfortable across backend and full-stack',
      'Hands-on with at least one agent framework (LangGraph, LlamaIndex, CrewAI, etc.)',
      'Experience designing evaluation, guardrails, and observability for AI systems',
    ],
  },
  {
    id: 'rag-knowledge-engineer',
    title: 'RAG &amp; Knowledge Systems Engineer',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Remote (UK / EU friendly)',
    experience: '3+ years',
    summary:
      'Own the design and delivery of enterprise RAG pipelines: ingestion, chunking, embeddings, retrieval quality, freshness, evaluation, and source-grounded responses.',
    requirements: [
      'Solid experience with embeddings, vector stores, and retrieval evaluation',
      'Python, FastAPI / Node, and at least one vector DB (pgvector, Pinecone, Qdrant, Weaviate)',
      'Comfortable working with messy enterprise data: PDF, DOCX, PPTX, XLSX',
      'Strong sense for accuracy, latency, and cost trade-offs in production',
    ],
  },
  {
    id: 'document-ai-engineer',
    title: 'Document AI Engineer',
    team: 'Engineering',
    type: 'Full-time / Contract',
    location: 'Remote',
    experience: '3+ years',
    summary:
      'Build Document AI pipelines for invoices, contracts, leases, claims, and forms — extraction, validation, exception routing, and clean JSON / Excel / API output.',
    requirements: [
      'Experience with document parsing, OCR, and structured extraction',
      'Comfortable combining LLMs with classical NLP, schemas, and validation rules',
      'Python; bonus for experience with layout-aware models or custom extractors',
      'Outcome-focused: precision, recall, and human review effort matter',
    ],
  },
  {
    id: 'ai-solutions-consultant',
    title: 'AI Solutions Consultant',
    team: 'Delivery',
    type: 'Full-time',
    location: 'Remote (UK / EU preferred)',
    experience: '4+ years',
    summary:
      'Bridge client business problems and our technical delivery. Run discovery, scope PoCs, design workflows, and translate operational needs into AI solutions that actually ship.',
    requirements: [
      '4+ years in consulting, solutions engineering, or technical product roles',
      'Strong communication with senior stakeholders and operational teams',
      'Good intuition for what AI can and cannot do today; honest framing of trade-offs',
      'Comfortable scoping, sizing, and evaluating AI use cases end-to-end',
    ],
  },
  {
    id: 'ai-product-designer',
    title: 'AI Product Designer',
    team: 'Design',
    type: 'Full-time / Contract',
    location: 'Remote',
    experience: '3+ years',
    summary:
      'Design interfaces and workflows for AI systems — agent UIs, review tools, dashboards, and human-in-the-loop experiences that are clear, fast, and trustworthy.',
    requirements: [
      '3+ years in product design with strong B2B or workflow tooling experience',
      'Solid Figma, design-system thinking, and a craft-led portfolio',
      'Interest in AI UX patterns: trust, control, transparency, and graceful fallback',
      'Comfortable working closely with engineering and partnering on prototypes',
    ],
  },
  {
    id: 'ai-delivery-lead',
    title: 'AI Delivery Lead',
    team: 'Delivery',
    type: 'Full-time',
    location: 'Remote (UK / EU friendly)',
    experience: '6+ years',
    summary:
      'Lead end-to-end client engagements: scope, plan, run delivery, and own outcomes for production AI initiatives across multiple workstreams.',
    requirements: [
      '6+ years delivering complex software / AI engagements with senior clients',
      'Strong project leadership, scoping, and stakeholder management skills',
      'Hands-on enough to challenge architecture and timeline assumptions',
      'Bias for honest scoping and measurable outcomes over scope creep',
    ],
  },
];

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

const PositionCard = ({ position, onApply }) => (
  <Card
    className="border-2 hover:border-[hsl(var(--accent-purple))]/30 transition-all duration-300"
    data-testid={`position-card-${position.id}`}
  >
    <CardContent className="pt-6">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <h3
              className="text-xl font-semibold"
              dangerouslySetInnerHTML={{ __html: position.title }}
            />
            <Badge
              variant="outline"
              className="text-[10px] uppercase tracking-wider border-[hsl(var(--accent-purple))]/30 bg-[hsl(var(--accent-purple))]/5"
            >
              {position.team}
            </Badge>
          </div>
          <div className="flex flex-wrap gap-2 mb-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Briefcase className="h-3.5 w-3.5" />
              {position.type}
            </span>
            <span className="text-foreground/30">&middot;</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {position.location}
            </span>
            <span className="text-foreground/30">&middot;</span>
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {position.experience}
            </span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{position.summary}</p>
        </div>

        <Button
          type="button"
          onClick={() => onApply(position)}
          className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95 whitespace-nowrap shrink-0"
          data-testid={`apply-button-${position.id}`}
        >
          Apply Now
        </Button>
      </div>

      <div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-foreground/60 mb-2">
          Key requirements
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
          {position.requirements.map((req) => (
            <li key={`${position.id}-req-${req}`}>{req}</li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

const Careers = () => {
  useSEO({
    title: 'Careers at Drag AI | Open Roles in Agentic AI, RAG, and AI Delivery',
    description:
      'Drag AI is hiring engineers, consultants, and designers building production-grade agentic AI, RAG, document intelligence, and voice AI for real businesses. Open roles, remote-friendly.',
    canonical: '/careers',
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Careers', path: '/careers' },
    ],
  });

  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    profileType: '',
    role: '',
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

  const handleApply = (position) => {
    setFormData((prev) => ({
      ...prev,
      role: position.title.replace(/&amp;/g, '&'),
      profileType:
        position.team === 'Design'
          ? 'designer-product'
          : position.team === 'Delivery'
            ? 'consultant'
            : 'ai-engineer',
    }));
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          subject: `Application / interest from ${formData.name}${
            formData.role ? ` (${formData.role})` : ''
          }`,
          from_name: 'Drag AI Careers Page',
          email: formData.email,
          reply_to: formData.email,
          name: formData.name,
          role_applied_for: formData.role,
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
          role: '',
          linkedin: '',
          message: '',
          consent: false,
        });
        toast.success('Application received. We will reach out within a few business days.');
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
            <Sparkles className="h-3.5 w-3.5 mr-1.5" />
            We&apos;re Growing
          </Badge>
          <h1
            className="text-4xl sm:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-pink))] bg-clip-text text-transparent"
            data-testid="careers-hero-title"
          >
            Build practical AI with us
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-6">
            We&apos;re hiring across engineering, design, and delivery for our next wave of
            production AI engagements &mdash; agentic systems, RAG, document AI, voice, and
            predictive analytics.
          </p>
          <p className="text-sm text-muted-foreground">
            Remote-friendly &middot; UK / EU preferred &middot; Async-first
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30" id="open-roles">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <h2 className="text-3xl font-display font-bold mb-2" data-testid="open-positions-title">
                Open Positions
              </h2>
              <p className="text-muted-foreground">
                {openPositions.length} live roles &mdash; click Apply Now to submit your profile.
              </p>
            </div>
            <Badge
              variant="outline"
              className="text-xs border-[hsl(var(--accent-purple))]/30 bg-[hsl(var(--accent-purple))]/5"
            >
              Updated regularly
            </Badge>
          </div>

          <div className="space-y-5">
            {openPositions.map((position) => (
              <PositionCard key={position.id} position={position} onApply={handleApply} />
            ))}
          </div>
        </div>
      </section>

      {/* Who else we're open to */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold mb-3">Don&apos;t see a perfect fit?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We&apos;re also open to conversations with the following profiles &mdash; send us your
              work and we&apos;ll reach out when relevant.
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

      {/* Application Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={formRef} id="apply">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold mb-3" data-testid="careers-form-title">
              Apply now
            </h2>
            <p className="text-muted-foreground">
              Tell us a bit about you and link your best work. We reply within a few business days.
            </p>
          </div>

          <Card className="p-8 border-2">
            {isSuccess ? (
              <div className="text-center py-8" data-testid="careers-form-success">
                <div className="w-14 h-14 bg-[hsl(var(--accent-purple))]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Application received</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Thank you. We&apos;ll reach out within a few business days if there&apos;s a fit.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>
                  Submit another
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
                    <Label htmlFor="careers-role">Role applying for</Label>
                    <select
                      id="careers-role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      data-testid="careers-form-role"
                    >
                      <option value="">General application</option>
                      {openPositions.map((p) => (
                        <option key={p.id} value={p.title.replace(/&amp;/g, '&')}>
                          {p.title.replace(/&amp;/g, '&')}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="careers-profile-type">Profile type</Label>
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
                      <option value="consultant">Consultant / Delivery</option>
                      <option value="delivery-partner">Delivery Partner / Studio</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="careers-linkedin">LinkedIn / Portfolio / GitHub URL</Label>
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
                    placeholder="Tell us briefly what you build, the problems you would like to work on, and links to your best work."
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
                  {isSubmitting ? 'Sending...' : 'Submit application'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Prefer email? Write to{' '}
                  <a
                    href="mailto:info@drag-ai.com"
                    className="text-[hsl(var(--accent-purple))] hover:brightness-110"
                  >
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
