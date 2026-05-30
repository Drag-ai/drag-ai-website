import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AIAgents from './pages/services/AIAgents';
import RAGSystems from './pages/services/RAGSystems';
import DocumentAI from './pages/services/DocumentAI';
import AIChatbots from './pages/services/AIChatbots';
import VoiceAI from './pages/services/VoiceAI';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import HowWeWork from './pages/HowWeWork';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import CompanyInformation from './pages/CompanyInformation';
import CookiePolicy from './pages/CookiePolicy';
import Insights from './pages/Insights';
import Resources from './pages/Resources';
import CaseStudies from './pages/CaseStudies';

// Resource articles (published)
import WhatIsAnAIAgent from './pages/resources/WhatIsAnAIAgent';
import RAGVsFineTuning from './pages/resources/RAGVsFineTuning';
import PrivateAIChatbot from './pages/resources/PrivateAIChatbot';

// Resource articles (skeleton drafts — noindex, NOT in sitemap)
import DocumentAIArticle from './pages/resources/DocumentAIArticle';
import RealEstateUseCasesArticle from './pages/resources/RealEstateUseCasesArticle';
import AIAgentCostArticle from './pages/resources/AIAgentCostArticle';
import ChooseAgencyArticle from './pages/resources/ChooseAgencyArticle';
import VoiceAISupportArticle from './pages/resources/VoiceAISupportArticle';

// Industry pages
import Logistics from './pages/industries/Logistics';
import Construction from './pages/industries/Construction';
import Hospitality from './pages/industries/Hospitality';
import Retail from './pages/industries/Retail';
import Insurance from './pages/industries/Insurance';
// PropertyManagement deprecated \u2014 merged under /industries/real-estate-ai
import ProfessionalServices from './pages/industries/ProfessionalServices';

// Industry deep-dive pages
import RealEstateAI from './pages/industries/RealEstateAI';
import HealthcareAI from './pages/industries/HealthcareAI';
import FinanceAI from './pages/industries/FinanceAI';

import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/ai-agents" element={<AIAgents />} />
            <Route path="/services/rag-systems" element={<RAGSystems />} />
            <Route path="/services/document-ai" element={<DocumentAI />} />
            <Route path="/services/ai-chatbots" element={<AIChatbots />} />
            <Route path="/services/voice-ai" element={<VoiceAI />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/logistics" element={<Logistics />} />
            <Route path="/industries/construction" element={<Construction />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/insurance" element={<Insurance />} />
            {/* /industries/property-management is merged under Real Estate AI deep-dive */}
            <Route
              path="/industries/property-management"
              element={<Navigate to="/industries/real-estate-ai" replace />}
            />
            <Route path="/industries/professional-services" element={<ProfessionalServices />} />
            {/* New industry deep-dives */}
            <Route path="/industries/real-estate-ai" element={<RealEstateAI />} />
            <Route path="/industries/healthcare-ai" element={<HealthcareAI />} />
            <Route path="/industries/finance-ai" element={<FinanceAI />} />
            <Route path="/how-we-work" element={<HowWeWork />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/insights" element={<Insights />} />
            {/* Resources hub + articles */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/what-is-an-ai-agent-for-business" element={<WhatIsAnAIAgent />} />
            <Route path="/resources/rag-vs-fine-tuning" element={<RAGVsFineTuning />} />
            <Route path="/resources/private-ai-chatbot-company-documents" element={<PrivateAIChatbot />} />
            {/* Skeleton drafts (noindex) */}
            <Route path="/resources/document-ai-automation" element={<DocumentAIArticle />} />
            <Route path="/resources/ai-automation-use-cases-real-estate" element={<RealEstateUseCasesArticle />} />
            <Route path="/resources/ai-agent-development-cost" element={<AIAgentCostArticle />} />
            <Route path="/resources/how-to-choose-ai-automation-agency" element={<ChooseAgencyArticle />} />
            <Route path="/resources/voice-ai-agents-customer-support" element={<VoiceAISupportArticle />} />
            {/* Case studies */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/company-information" element={<CompanyInformation />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </Router>
  );
}

export default App;
