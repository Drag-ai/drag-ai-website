import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Industries from './pages/Industries';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Resources from './pages/Resources';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Industry pages
import Logistics from './pages/industries/Logistics';
import Construction from './pages/industries/Construction';
import Hospitality from './pages/industries/Hospitality';
import Retail from './pages/industries/Retail';
import Insurance from './pages/industries/Insurance';
import PropertyManagement from './pages/industries/PropertyManagement';
import ProfessionalServices from './pages/industries/ProfessionalServices';

import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/logistics" element={<Logistics />} />
            <Route path="/industries/construction" element={<Construction />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/retail" element={<Retail />} />
            <Route path="/industries/insurance" element={<Insurance />} />
            <Route path="/industries/property-management" element={<PropertyManagement />} />
            <Route path="/industries/professional-services" element={<ProfessionalServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/privacy" element={<Privacy />} />
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
