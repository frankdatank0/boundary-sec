/*
 * Design: Perimeter Mesh — Architectural Minimalism
 * Sticky header with teal CTA, geometric footer
 * Typography: Instrument Serif headings, DM Sans body
 * Colors: charcoal (#1A1A2E) + white (#FAFAFA) + teal (#0D9488) accent
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/agent-services", label: "AI Solutions" },
  { href: "/cybersecurity", label: "Cybersecurity" },
  { href: "/demos", label: "Demos" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center transition-transform group-hover:scale-105">
            <Shield className="w-4.5 h-4.5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            Boundary<span className="text-primary">Sec</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact">
            <Button size="sm" className="text-sm bg-primary hover:bg-primary/90 text-primary-foreground">
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-lg border-b border-border overflow-hidden"
          >
            <nav className="container py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                    location === link.href
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-border">
                <Link href="/contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Contact
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.15_0.02_270)] text-[oklch(0.75_0.005_80)]">
      <div className="container py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-sm bg-primary flex items-center justify-center">
                <Shield className="w-4.5 h-4.5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tight text-white">
                Boundary<span className="text-primary">Sec</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[oklch(0.60_0.005_80)] max-w-xs">
              AI solutions built for business. Security built in. Custom AI, automation, and cybersecurity services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.50_0.005_80)] mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li><Link href="/agent-services" className="text-sm hover:text-primary transition-colors">AI Solutions</Link></li>
              <li><Link href="/cybersecurity" className="text-sm hover:text-primary transition-colors">Cybersecurity</Link></li>
              <li><Link href="/demos" className="text-sm hover:text-primary transition-colors">Demos</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.50_0.005_80)] mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link></li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.50_0.005_80)] mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              <li><span className="text-sm text-[oklch(0.50_0.005_80)]">Privacy Policy</span></li>
              <li><span className="text-sm text-[oklch(0.50_0.005_80)]">Terms of Service</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[oklch(0.45_0.005_80)]">
            &copy; {new Date().getFullYear()} Boundary Security. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-[oklch(0.45_0.005_80)]">info@boundary-sec.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
