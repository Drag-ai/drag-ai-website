import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { Menu } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/products', label: 'Products' },
    { to: '/industries', label: 'Industries' },
    { to: '/case-studies', label: 'Case Studies' },
    { to: '/how-we-work', label: 'How We Work' },
    { to: '/resources', label: 'Resources' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  // Primary CTA target — kept centralized so it can be swapped to an external booking URL (e.g., Calendly) easily.
  const PRIMARY_CTA_HREF = '/contact#ai-discovery-call';

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70"
      data-testid="site-nav"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            data-testid="nav-logo"
          >
            <Logo className="h-8 w-8 group-hover:scale-110 transition-transform" />
            <span className="font-display text-xl font-semibold tracking-tight bg-gradient-to-r from-[hsl(var(--accent-purple))] to-[hsl(var(--accent-pink-contrast))] bg-clip-text text-transparent">
              Drag AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 min-[1280px]:flex 2xl:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={pathname === link.to || (link.to !== '/' && pathname.startsWith(`${link.to}/`)) ? 'page' : undefined}
                className={`link-underline whitespace-nowrap text-sm font-medium hover:text-foreground ${pathname === link.to || (link.to !== '/' && pathname.startsWith(`${link.to}/`)) ? 'text-foreground' : 'text-foreground/80'}`}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden min-[1280px]:block">
            <Link to={PRIMARY_CTA_HREF}>
              <Button
                className="bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))] shadow-sm hover:brightness-95"
                data-testid="nav-book-discovery-call"
              >
                Book Free AI Strategy Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="min-[1280px]:hidden">
              <Button
                variant="ghost"
                size="icon"
                data-testid="mobile-nav-open-button"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="max-h-dvh w-[300px] max-w-[calc(100vw-1rem)] overflow-y-auto sm:w-[400px]"
              data-testid="mobile-nav-sheet"
            >
              <SheetTitle className="text-lg font-semibold mb-2">Navigation Menu</SheetTitle>
              <SheetDescription className="text-sm text-muted-foreground mb-4">
                Navigate to different sections of the website
              </SheetDescription>
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-lg font-medium text-foreground/80 hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                    data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to={PRIMARY_CTA_HREF} onClick={() => setIsOpen(false)}>
                  <Button
                    className="w-full bg-[hsl(var(--accent-purple))] text-[hsl(var(--accent-purple-foreground))]"
                    data-testid="mobile-nav-book-discovery-call"
                  >
                    Book Free AI Strategy Call
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
