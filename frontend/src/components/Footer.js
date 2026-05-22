import { Link } from 'react-router-dom';
import { Linkedin, Facebook, Instagram, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  const PRIMARY_CTA_HREF = '/contact#ai-discovery-call';
  const PUBLIC_EMAIL = 'info@drag-ai.com';

  return (
    <footer className="border-t bg-background" data-testid="site-footer">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Brand & UK Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 group w-fit" data-testid="footer-logo">
              <Logo className="h-7 w-7 group-hover:scale-110 transition-transform" />
              <span className="font-display text-xl font-semibold">Drag AI</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              Production-grade AI agents, automation, and document intelligence for modern businesses.
            </p>

            {/* UK Company Details (public Companies House information only) */}
            <div
              className="mt-6 text-xs text-muted-foreground space-y-1"
              data-testid="footer-uk-company-details"
            >
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

          {/* Explore */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-home">Home</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-services">Services</Link></li>
              <li><Link to="/solutions" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-solutions">Solutions</Link></li>
              <li><Link to="/industries" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-industries">Industries</Link></li>
              <li><Link to="/how-we-work" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-how-we-work">How We Work</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-about">About</Link></li>
              <li><Link to="/insights" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-insights">Insights</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-careers">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>

          {/* Legal & Company */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Company &amp; Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/company-information" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-company-information">Company Information</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-privacy">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-cookie-policy">Cookie Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="footer-link-terms">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${PUBLIC_EMAIL}`}
                  className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
                  data-testid="footer-email-link"
                >
                  <Mail className="h-4 w-4" />
                  {PUBLIC_EMAIL}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to={PRIMARY_CTA_HREF}
                  className="text-[hsl(var(--accent-purple))] hover:brightness-110 font-medium transition-colors"
                  data-testid="footer-book-discovery-call"
                >
                  Book a 30-Minute AI Discovery Call →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} DRAG AI LIMITED. All rights reserved.</p>
          <p>Registered in England and Wales · Company No. 17222197</p>
        </div>
      </div>
    </footer>
  );
};
