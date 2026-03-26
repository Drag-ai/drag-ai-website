const fs = require('fs');
const path = require('path');

const industries = {
  construction: {
    title: 'Construction',
    icon: 'Hammer',
    tagline: 'Build autonomous AI agents for project management, safety monitoring, and equipment optimization',
    challenges: [
      {
        title: 'Project Coordination Complexity',
        description: 'Multiple contractors, changing schedules, and material delays require constant manual coordination across stakeholders.'
      },
      {
        title: 'Safety Compliance Monitoring',
        description: 'Manual safety inspections miss real-time hazards. Documentation for compliance is time-consuming and error-prone.'
      },
      {
        title: 'Equipment Utilization',
        description: 'Heavy machinery sits idle while other sites need it. Manual scheduling leads to inefficient asset utilization.'
      },
      {
        title: 'Document Management',
        description: 'RFIs, change orders, and submittals create paper trails that slow decision-making and increase disputes.'
      }
    ],
    solutions: [
      {
        icon: 'Calendar',
        title: 'Project Orchestration Agents',
        description: 'AI agents that coordinate schedules across contractors, predict delays, and automatically adjust timelines. Monitors dependencies and sends proactive alerts.'
      },
      {
        icon: 'Shield',
        title: 'Safety Monitoring Systems',
        description: 'Computer vision agents that detect safety violations in real-time. Automatically logs incidents and generates compliance reports.'
      },
      {
        icon: 'Wrench',
        title: 'Equipment Optimization Agents',
        description: 'Multi-agent systems that track equipment across sites, predict maintenance needs, and optimize allocation based on project schedules.'
      }
    ],
    useCases: [
      {
        title: 'Automated Progress Tracking',
        workflow: 'AI agents analyze site photos/videos to assess completion percentage, compare against schedules, and flag discrepancies. Generates progress reports automatically.',
        benefit: 'Accurate project tracking without manual inspections, enabling faster billing and better stakeholder communication.'
      },
      {
        title: 'Material Procurement Intelligence',
        workflow: 'Agents monitor project schedules, predict material needs, check inventory levels, and trigger purchase orders. Learns from lead times to optimize ordering.',
        benefit: 'Reduce delays from material shortages and minimize excess inventory holding costs.'
      },
      {
        title: 'RFI & Change Order Processing',
        workflow: 'Intelligent agents extract data from RFIs, route to appropriate stakeholders, track response times, and auto-populate change order forms.',
        benefit: 'Accelerate decision cycles and maintain clear documentation trails for disputes.'
      },
      {
        title: 'Predictive Safety Risk Management',
        workflow: 'Multi-agent systems analyze weather forecasts, work schedules, and historical incidents to predict high-risk days. Proactively adjusts staffing and safety protocols.',
        benefit: 'Prevent accidents before they occur through data-driven safety planning.'
      }
    ]
  },
  hospitality: {
    title: 'Hospitality',
    icon: 'Hotel',
    tagline: 'Transform guest experiences with intelligent automation and autonomous service coordination',
    challenges: [
      {
        title: 'Guest Service Delays',
        description: 'Requests for room service, housekeeping, or maintenance get lost in communication chains. Response times vary unpredictably.'
      },
      {
        title: 'Revenue Management Complexity',
        description: 'Dynamic pricing requires constant monitoring of competitors, events, and demand patterns. Manual adjustments miss optimization opportunities.'
      },
      {
        title: 'Staff Coordination',
        description: 'Scheduling housekeeping, front desk, and maintenance across shifts creates inefficiencies. Last-minute changes cause chaos.'
      },
      {
        title: 'Guest Preference Management',
        description: 'Capturing and acting on guest preferences (room temperature, pillow type, dietary needs) is inconsistent across stays.'
      }
    ],
    solutions: [
      {
        icon: 'MessageSquare',
        title: 'Guest Service Orchestration',
        description: 'AI agents that receive requests across channels (phone, app, front desk), route to appropriate staff, and monitor resolution times. Learns guest patterns.'
      },
      {
        icon: 'DollarSign',
        title: 'Revenue Optimization Agents',
        description: 'Autonomous pricing agents that monitor competitor rates, local events, and booking patterns to adjust room rates in real-time for maximum revenue.'
      },
      {
        icon: 'Users',
        title: 'Staff Coordination Systems',
        description: 'Multi-agent systems that optimize staff schedules based on predicted occupancy, handle shift swaps, and balance workload distribution.'
      }
    ],
    useCases: [
      {
        title: 'Intelligent Concierge Service',
        workflow: 'AI agents handle common guest requests (restaurant reservations, activity bookings, local recommendations) autonomously. Complex requests are routed to human concierges with context.',
        benefit: 'Scale personalized service without proportionally increasing staff, improving guest satisfaction.'
      },
      {
        title: 'Predictive Housekeeping Scheduling',
        workflow: 'Agents analyze checkout times, expected arrivals, and room status to optimize housekeeping routes. Prioritizes rooms for early check-ins.',
        benefit: 'Reduce turnover time and maximize room availability for revenue generation.'
      },
      {
        title: 'Guest Preference Learning',
        workflow: 'Multi-agent systems track guest preferences across stays, automatically configure room settings before arrival, and suggest personalized upsells.',
        benefit: 'Create memorable experiences that drive repeat bookings and positive reviews.'
      },
      {
        title: 'Maintenance Prediction & Scheduling',
        workflow: 'Agents monitor equipment sensors (HVAC, elevators, kitchen appliances), predict failures, and schedule preventive maintenance during low-occupancy periods.',
        benefit: 'Prevent guest-facing equipment failures and reduce emergency repair costs.'
      }
    ]
  },
  retail: {
    title: 'Retail',
    icon: 'ShoppingCart',
    tagline: 'Deploy AI agents for inventory optimization, customer engagement, and omnichannel orchestration',
    challenges: [
      {
        title: 'Inventory Imbalance',
        description: 'Stockouts in high-demand items coexist with overstock in slow movers. Manual replenishment decisions lag behind demand shifts.'
      },
      {
        title: 'Omnichannel Complexity',
        description: 'Managing inventory across stores, warehouses, and online fulfillment creates blind spots. Buy-online-pickup-in-store (BOPIS) strains operations.'
      },
      {
        title: 'Pricing Optimization',
        description: 'Competitive pricing requires constant monitoring. Markdown timing is guesswork, often leaving money on the table.'
      },
      {
        title: 'Customer Engagement',
        description: 'Personalizing experiences across touchpoints (web, app, in-store) is fragmented. Loyalty programs do not drive meaningful behavior change.'
      }
    ],
    solutions: [
      {
        icon: 'Package',
        title: 'Inventory Intelligence Agents',
        description: 'AI agents that predict demand by SKU, location, and season. Autonomously trigger replenishment orders and suggest inventory transfers between locations.'
      },
      {
        icon: 'Tag',
        title: 'Dynamic Pricing Agents',
        description: 'Autonomous pricing agents that monitor competitor prices, stock levels, and demand elasticity to adjust prices in real-time across channels.'
      },
      {
        icon: 'Sparkles',
        title: 'Personalization Orchestration',
        description: 'Multi-agent systems that track customer behavior across touchpoints, predict preferences, and deliver personalized recommendations and offers.'
      }
    ],
    useCases: [
      {
        title: 'Automated Markdown Optimization',
        workflow: 'AI agents analyze sell-through rates, seasonal timelines, and competitor markdowns to recommend optimal discount levels and timing for clearance items.',
        benefit: 'Maximize margin recovery on slow-moving inventory while clearing space for new arrivals.'
      },
      {
        title: 'BOPIS Fulfillment Optimization',
        workflow: 'Agents coordinate between online orders and store inventory, optimize picking routes for store associates, and predict pickup windows based on historical patterns.',
        benefit: 'Improve BOPIS customer experience while minimizing disruption to in-store operations.'
      },
      {
        title: 'Customer Journey Agents',
        workflow: 'Multi-agent systems track customer interactions (browsing, cart abandonment, store visits) and deploy targeted interventions (email, SMS, app notifications) to drive conversion.',
        benefit: 'Increase conversion rates through timely, relevant customer engagement.'
      },
      {
        title: 'Supply Chain Visibility',
        workflow: 'Agents aggregate data from suppliers, warehouses, and carriers to provide real-time inventory visibility. Predicts delays and triggers mitigation actions.',
        benefit: 'Reduce stockouts and improve forecast accuracy through better supply chain intelligence.'
      }
    ]
  },
  insurance: {
    title: 'Insurance',
    icon: 'FileCheck',
    tagline: 'Automate claims processing, underwriting, and risk assessment with intelligent AI agents',
    challenges: [
      {
        title: 'Claims Processing Delays',
        description: 'Manual document review, fraud detection, and adjuster assignment create week-long delays. Customer satisfaction suffers.'
      },
      {
        title: 'Underwriting Inefficiency',
        description: 'Risk assessment requires gathering data from multiple sources. Manual analysis is slow and inconsistent across underwriters.'
      },
      {
        title: 'Fraud Detection Gaps',
        description: 'Rule-based fraud detection misses sophisticated schemes. Manual investigation is resource-intensive.'
      },
      {
        title: 'Customer Communication',
        description: 'Policyholders expect instant updates on claims status. Call centers are overwhelmed with routine inquiries.'
      }
    ],
    solutions: [
      {
        icon: 'FileText',
        title: 'Claims Processing Agents',
        description: 'AI agents that intake claims across channels, extract data from documents, assess damage from photos, and route to appropriate adjusters with preliminary analysis.'
      },
      {
        icon: 'Shield',
        title: 'Underwriting Intelligence',
        description: 'Autonomous agents that gather applicant data from public records, credit bureaus, and telematics. Perform risk scoring and recommend policy terms.'
      },
      {
        icon: 'Search',
        title: 'Fraud Detection Systems',
        description: 'Multi-agent systems that analyze claim patterns, detect anomalies, and flag suspicious activity for investigation. Learns from confirmed fraud cases.'
      }
    ],
    useCases: [
      {
        title: 'Automated First Notice of Loss (FNOL)',
        workflow: 'AI agents receive claims via phone, app, or web. Extract incident details, validate coverage, assess initial damage from photos, and assign to adjusters—all within minutes.',
        benefit: 'Reduce FNOL processing time from hours to minutes, improving customer satisfaction.'
      },
      {
        title: 'Intelligent Document Processing',
        workflow: 'Agents extract data from police reports, medical bills, and repair estimates. Cross-reference against policy terms and flag discrepancies for human review.',
        benefit: 'Accelerate claims settlement and reduce errors in coverage determination.'
      },
      {
        title: 'Predictive Risk Modeling',
        workflow: 'Multi-agent systems analyze historical claims, external risk factors (weather, crime rates), and policyholder behavior to predict future claim likelihood.',
        benefit: 'Improve underwriting accuracy and optimize premium pricing for profitability.'
      },
      {
        title: 'Proactive Customer Engagement',
        workflow: 'Agents monitor customer policies, detect life events (home purchase, new car), and trigger personalized outreach with relevant coverage options.',
        benefit: 'Increase policy retention and cross-sell opportunities through timely engagement.'
      }
    ]
  },
  'property-management': {
    title: 'Property Management',
    icon: 'Building',
    tagline: 'Streamline operations with AI agents for maintenance, tenant communication, and lease management',
    challenges: [
      {
        title: 'Maintenance Request Chaos',
        description: 'Tenant requests come via email, phone, and portals. Prioritization is manual. Contractors are not scheduled optimally.'
      },
      {
        title: 'Tenant Turnover Costs',
        description: 'Unit turnovers require coordinating cleaning, repairs, and inspections. Delays mean lost rent. Screening new tenants is time-consuming.'
      },
      {
        title: 'Lease Management Complexity',
        description: 'Tracking lease renewals, rent increases, and compliance across multiple properties is error-prone. Late renewals mean vacancies.'
      },
      {
        title: 'Vendor Coordination',
        description: 'Managing multiple contractors for HVAC, plumbing, landscaping, etc., requires constant communication and quality monitoring.'
      }
    ],
    solutions: [
      {
        icon: 'Wrench',
        title: 'Maintenance Orchestration Agents',
        description: 'AI agents that intake maintenance requests, assess urgency, dispatch appropriate contractors, and track completion. Learns contractor performance over time.'
      },
      {
        icon: 'UserCheck',
        title: 'Tenant Lifecycle Management',
        description: 'Autonomous agents handle lease renewals, screen applicants, coordinate move-ins/move-outs, and process rental payments.'
      },
      {
        icon: 'ClipboardCheck',
        title: 'Inspection & Compliance Agents',
        description: 'Multi-agent systems that schedule routine inspections, verify compliance with local regulations, and document property conditions.'
      }
    ],
    useCases: [
      {
        title: 'Automated Maintenance Dispatch',
        workflow: 'AI agents receive tenant maintenance requests, categorize by urgency (emergency vs routine), check warranty status, and dispatch to appropriate contractors with work order details.',
        benefit: 'Reduce response time for urgent issues and optimize contractor scheduling for routine maintenance.'
      },
      {
        title: 'Lease Renewal Automation',
        workflow: 'Agents monitor lease expiration dates, analyze market rents, generate renewal offers with appropriate pricing, and follow up with tenants via email/SMS.',
        benefit: 'Increase renewal rates and reduce vacancy periods through proactive lease management.'
      },
      {
        title: 'Tenant Screening Intelligence',
        workflow: 'Multi-agent systems pull credit reports, verify employment, check rental history, and score applicants. Flag concerns for human review.',
        benefit: 'Accelerate tenant screening while maintaining quality standards to reduce bad debt.'
      },
      {
        title: 'Predictive Property Maintenance',
        workflow: 'Agents analyze equipment age, maintenance history, and usage patterns to predict failures (HVAC, water heaters, appliances). Schedule preventive replacements.',
        benefit: 'Prevent tenant disruptions and reduce emergency repair costs through proactive maintenance.'
      }
    ]
  },
  'professional-services': {
    title: 'Professional Services',
    icon: 'Briefcase',
    tagline: 'Optimize resource allocation, project delivery, and client engagement with agentic AI',
    challenges: [
      {
        title: 'Resource Allocation Complexity',
        description: 'Matching consultant skills to project needs across multiple engagements is manual. Utilization tracking is delayed and inaccurate.'
      },
      {
        title: 'Project Delivery Predictability',
        description: 'Scope creep, staffing changes, and client delays make project timelines unreliable. Budget overruns are common.'
      },
      {
        title: 'Knowledge Management',
        description: 'Insights from past projects sit in consultant brains or buried in documents. New team members reinvent solutions.'
      },
      {
        title: 'Client Communication',
        description: 'Keeping clients updated on progress, deliverables, and next steps requires manual status reports and meetings.'
      }
    ],
    solutions: [
      {
        icon: 'Users',
        title: 'Resource Optimization Agents',
        description: 'AI agents that match consultant skills to project requirements, predict availability, and optimize utilization across the firm. Balances workload and development goals.'
      },
      {
        icon: 'TrendingUp',
        title: 'Project Intelligence Systems',
        description: 'Autonomous agents that track project health (budget, timeline, scope), predict risks, and recommend corrective actions. Alerts stakeholders proactively.'
      },
      {
        icon: 'Brain',
        title: 'Knowledge Orchestration Agents',
        description: 'Multi-agent systems that extract insights from project documents, build searchable knowledge bases, and suggest relevant past work for new engagements.'
      }
    ],
    useCases: [
      {
        title: 'Intelligent Staffing',
        workflow: 'AI agents analyze project requirements (skills, industry, timeline), consultant availability and preferences, and automatically propose optimal staffing plans with backup options.',
        benefit: 'Maximize billable utilization while respecting consultant development goals and work-life balance.'
      },
      {
        title: 'Automated Time & Expense Processing',
        workflow: 'Agents monitor calendars and project assignments to pre-populate timesheets. Flag anomalies (overages, misallocations) for review before invoicing.',
        benefit: 'Reduce administrative burden on consultants and improve billing accuracy.'
      },
      {
        title: 'Client Deliverable Tracking',
        workflow: 'Multi-agent systems track deliverable status across projects, send automatic client updates, and escalate delays before deadlines are missed.',
        benefit: 'Improve client satisfaction through proactive communication and on-time delivery.'
      },
      {
        title: 'Proposal Acceleration',
        workflow: 'Agents pull relevant case studies, methodologies, and team bios from knowledge base to auto-generate proposal sections. Learns from winning proposals.',
        benefit: 'Reduce proposal development time and improve win rates through data-driven content.'
      }
    ]
  }
};

// Template for creating industry pages
const createIndustryPage = (slug, data) => {
  const iconImports = {
    'Logistics': 'Truck',
    'Construction': 'HardHat',
    'Hospitality': 'Hotel',
    'Retail': 'ShoppingCart',
    'Insurance': 'FileCheck',
    'Property Management': 'Building2',
    'Professional Services': 'Briefcase'
  };

  const solutionIcons = [...new Set(data.solutions.map(s => s.icon))];
  const allIcons = [iconImports[data.title], ...solutionIcons, 'ArrowRight', 'ArrowLeft'];

  return `import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Reveal } from '../../components/Reveal';
import { NeuralBackground } from '../../components/NeuralBackground';
import { useSEO } from '../../hooks/useSEO';
import { ${allIcons.join(', ')} } from 'lucide-react';

export default function ${data.title.replace(/[^a-zA-Z]/g, '')}() {
  useSEO({
    title: 'Agentic AI for ${data.title} | Drag AI Industry Solutions',
    description: '${data.tagline}',
    canonical: '/industries/${slug}',
  });

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14">
        <NeuralBackground />
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
          <Reveal>
            <Link to="/industries" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Industries
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/20 to-[hsl(var(--accent-pink))]/10 flex items-center justify-center">
                <${iconImports[data.title]} className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
              </div>
              <Badge variant="outline" className="border-[hsl(var(--accent-purple))]/30">
                ${data.title}
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              Agentic AI for <span className="text-[hsl(var(--accent-purple))]">${data.title}</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed">
              ${data.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-14 sm:py-18 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              ${data.title} Challenges That Agentic AI Solves
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${data.challenges.map((challenge, idx) => `
            <Reveal key={${idx}} delay={${0.1 * idx}}>
              <Card className="p-6">
                <h3 className="font-semibold mb-2">${challenge.title}</h3>
                <p className="text-sm text-muted-foreground">${challenge.description}</p>
              </Card>
            </Reveal>`).join('')}
          </div>
        </div>
      </section>

      {/* How Agentic AI Helps */}
      <section className="py-14 sm:py-18">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              How Agentic AI Transforms ${data.title}
            </h2>
            <p className="text-base text-muted-foreground mb-10 max-w-3xl">
              We design autonomous AI agents that operate 24/7, making intelligent decisions without constant human intervention.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            ${data.solutions.map((solution, idx) => `
            <Reveal key={${idx}} delay={${0.1 * idx}}>
              <Card className="p-6 card-hover">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[hsl(var(--accent-purple))]/15 to-[hsl(var(--accent-purple))]/10 flex items-center justify-center mb-4">
                  <${solution.icon} className="h-6 w-6 text-[hsl(var(--accent-purple))]" />
                </div>
                <h3 className="font-semibold mb-2">${solution.title}</h3>
                <p className="text-sm text-muted-foreground">${solution.description}</p>
              </Card>
            </Reveal>`).join('')}
          </div>
        </div>
      </section>

      {/* Specific Use Cases */}
      <section className="py-14 sm:py-18 bg-secondary/40">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8">
              Real-World Agentic AI Applications
            </h2>
          </Reveal>

          <div className="space-y-6">
            ${data.useCases.map((useCase, idx) => `
            <Reveal key={${idx}} delay={${0.1 * (idx % 3)}}>
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-3">${useCase.title}</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">WORKFLOW</p>
                    <p className="text-sm text-muted-foreground">${useCase.workflow}</p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] tracking-[0.18em] uppercase text-foreground/60 mb-1">BUSINESS IMPACT</p>
                    <p className="text-sm text-muted-foreground">${useCase.benefit}</p>
                  </div>
                </div>
              </Card>
            </Reveal>`).join('')}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-18 lg:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Ready to Transform Your ${data.title} Operations?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how agentic AI can optimize your operations, reduce costs, and improve outcomes.
            </p>
            <Link to="/contact#form">
              <Button
                size="lg"
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] shadow-sm hover:brightness-95"
              >
                Book a Discovery Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
`;
};

// Create all industry pages
Object.entries(industries).forEach(([slug, data]) => {
  const filePath = path.join(__dirname, 'src', 'pages', 'industries', `${data.title.replace(/[^a-zA-Z]/g, '')}.js`);
  const content = createIndustryPage(slug, data);
  fs.writeFileSync(filePath, content);
  console.log(`✅ Created: ${data.title} industry page`);
});

console.log('\n🎉 All industry pages created successfully!');
