import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand & Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <Logo className="h-7 w-7 group-hover:scale-110 transition-transform" />
              <span className="font-display text-xl font-semibold">Drag AI</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Production-grade AI agents and automation systems for modern businesses
            </p>
            
            {/* UK Company Details */}
            <div className="mt-6 text-xs text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground">DRAG AI LIMITED</p>
              <p>Company Number: 17222197</p>
              <p>Registered in England and Wales</p>
              <p>Registered Office: 128 City Road,</p>
              <p>London, EC1V 2NX, United Kingdom</p>
            </div>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/company/drag-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn page"
                  className="text-muted-foreground hover:text-[hsl(var(--accent-purple))] transition-colors"
                  data-testid="footer-linkedin-link"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/18cr5FMcj4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                  className="text-muted-foreground hover:text-[hsl(var(--accent-purple))] transition-colors"
                  data-testid="footer-facebook-link"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/dragai.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                  className="text-muted-foreground hover:text-[hsl(var(--accent-purple))] transition-colors"
                  data-testid="footer-instagram-link"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-muted-foreground hover:text-foreground transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/how-we-work" className="text-muted-foreground hover:text-foreground transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-muted-foreground hover:text-foreground transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact#form" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/company-information" className="text-muted-foreground hover:text-foreground transition-colors">
                  Company Information
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a 
                  href="mailto:contact@drag-ai.com" 
                  className="hover:text-foreground transition-colors"
                  title="Contact email (placeholder - to be configured)"
                >
                  contact@drag-ai.com
                </a>
              </li>
              <li className="pt-3">
                <Link to="/contact#form" className="text-[hsl(var(--accent-purple))] hover:brightness-110 font-medium transition-colors">
                  Book Discovery Call →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DRAG AI LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
