import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/Screenshot_2026-04-18_230504_1776538457084.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#why-us", label: "Why Choose Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <a href="#hero" className="flex items-center gap-2 sm:gap-3">
            <img
              src={logoImg}
              alt="Umeed Care Center — Orthotic & Prosthetic Solutions Karachi"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border-2 border-primary/20 shadow-sm"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base sm:text-lg text-primary tracking-tight leading-none">Umeed</span>
              <span className="font-sans text-[10px] sm:text-xs font-medium tracking-widest uppercase text-muted-foreground">Care Center</span>
            </div>
          </a>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center rounded-full h-10 px-5 text-sm font-semibold shadow-sm border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            Contact Us
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border/40 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 px-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors border-b border-border/30 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center rounded-full h-12 px-6 text-sm font-semibold shadow-sm border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200 w-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
