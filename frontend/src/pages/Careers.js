import { Briefcase, Users, Award, Zap, Heart, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';

const Careers = () => {
  useSEO({
    title: 'Careers at Drag AI | Join Our AI Consulting Team in Bengaluru',
    description: 'Join Drag AI\'s team in Bengaluru, India. Open positions for AI engineers, ML consultants, and product managers. Build production-grade AI systems with us.',
    canonical: '/careers',
  });

  const openPositions = [
    {
      title: 'Senior AI Engineer',
      type: 'Full-time',
      location: 'Bengaluru, India / Remote',
      description: 'Build cutting-edge agentic AI solutions for enterprise clients. Work with LLMs, multi-agent systems, and production-grade AI architectures.',
      requirements: ['5+ years in software engineering', 'Experience with LLMs (GPT, Claude, etc.)', 'Python/TypeScript expertise', 'Strong system design skills'],
    },
    {
      title: 'ML Solutions Consultant',
      type: 'Full-time',
      location: 'Bengaluru, India / Hybrid',
      description: 'Bridge the gap between business needs and AI capabilities. Design and architect custom AI solutions for mid-to-large enterprises.',
      requirements: ['3+ years in ML/AI consulting', 'Strong communication skills', 'Experience with enterprise clients', 'Technical depth in ML frameworks'],
    },
    {
      title: 'AI Product Manager',
      type: 'Full-time',
      location: 'Bengaluru, India',
      description: 'Define and drive the roadmap for our AI consulting products. Work closely with clients to understand needs and translate them into technical requirements.',
      requirements: ['4+ years in product management', 'AI/ML domain knowledge', 'Experience in B2B SaaS', 'Strong analytical mindset'],
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Work on diverse projects across industries with cutting-edge AI technologies',
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a team of passionate AI practitioners who value innovation and excellence',
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and a culture that respects your personal time',
    },
    {
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Industry-leading salary packages with performance-based incentives',
    },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI, experimenting with the latest techniques and frameworks.',
    },
    {
      title: 'Client Impact',
      description: 'Every project we take on is designed to deliver measurable business value for our clients.',
    },
    {
      title: 'Continuous Learning',
      description: 'The AI landscape evolves rapidly. We invest in our team\'s growth through training, conferences, and hands-on experimentation.',
    },
    {
      title: 'Excellence & Precision',
      description: 'We deliver production-grade solutions. Quality, reliability, and performance are non-negotiable.',
    },
  ];

  return (
    <div className="min-h-screen" data-testid="careers-page">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Badge className="mb-6 bg-[hsl(var(--accent-purple))]/10 text-[hsl(var(--accent-purple))] border-[hsl(var(--accent-purple))]/20" data-testid="careers-badge">
            Join Our Team
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-pink))] bg-clip-text text-transparent" data-testid="careers-hero-title">
            Build the Future of AI
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            At Drag AI, we're not just implementing AI—we're architecting production-grade agentic systems that transform how enterprises operate. Join us in shaping the next generation of intelligent automation.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4" data-testid="why-join-title">
              Why Drag AI?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're building something special—a company where innovation meets impact, and where your work directly shapes the AI landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-[hsl(var(--accent-purple))]/30 transition-all duration-300" data-testid={`benefit-card-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/20 to-[hsl(var(--accent-pink))]/20">
                      <benefit.icon className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4" data-testid="values-title">
              Our Core Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do, from client engagements to internal collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="space-y-2" data-testid={`value-item-${index}`}>
                <h3 className="text-xl font-semibold flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[hsl(var(--accent-purple))]" />
                  {value.title}
                </h3>
                <p className="text-muted-foreground pl-7">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4" data-testid="open-positions-title">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're actively hiring talented individuals who are passionate about AI and want to make a real impact.
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border-2 hover:border-[hsl(var(--accent-purple))]/30 transition-all duration-300" data-testid={`position-card-${index}`}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Briefcase className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                        {position.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">{position.type}</Badge>
                        <Badge variant="outline" className="text-xs">{position.location}</Badge>
                      </div>
                      <CardDescription className="text-base">{position.description}</CardDescription>
                    </div>
                    <Link to="/contact">
                      <Button 
                        className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95 whitespace-nowrap"
                        data-testid={`apply-button-${index}`}
                      >
                        Apply Now
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="p-12 rounded-2xl border-2 border-[hsl(var(--accent-purple))]/20 bg-gradient-to-br from-[hsl(var(--accent-purple))]/5 to-[hsl(var(--accent-pink))]/5">
            <h2 className="text-3xl font-display font-bold mb-4" data-testid="cta-title">
              Don't See a Perfect Match?
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              We're always looking for exceptional talent. Send us your resume and tell us how you can contribute to our mission.
            </p>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] hover:brightness-95"
                data-testid="careers-get-in-touch-button"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
