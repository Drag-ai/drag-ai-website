import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group w-fit">
              <Logo className="h-7 w-7 group-hover:scale-110 transition-transform" />
              <span className="font-display text-xl font-semibold">Drag AI</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Production-grade Agentic AI consulting
            </p>
            
            {/* Social Links */}
            <div className="mt-6">
              <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-3">
                Follow Us
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

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/industries" className="text-muted-foreground hover:text-foreground">
                  Industries
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-foreground">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@drag-ai.com</li>
              <li>Bengaluru, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Drag AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
