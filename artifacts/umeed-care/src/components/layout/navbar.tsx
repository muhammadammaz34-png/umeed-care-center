import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link } from "wouter";

const WHATSAPP_URL = "https://wa.me/923136422564?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Nav links differ by page
  const navLinks = isHome
    ? [
        { href: "#about", label: "About Us", external: false },
        { href: "/services", label: "Services", external: false },
        { href: "#gallery", label: "Gallery", external: false },
        { href: "#why-us", label: "Why Choose Us", external: false },
        { href: "#contact", label: "Contact", external: false },
      ]
    : [
        { href: "/", label: "Home", external: false },
        { href: "/services", label: "Services", external: false },
        { href: "/#gallery", label: "Gallery", external: false },
        { href: "/#contact", label: "Contact", external: false },
      ];

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = href === "/services" && location === "/services";
    const baseClass =
      "text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full";

    if (href.startsWith("/") && !href.startsWith("/#")) {
      return (
        <Link
          href={href}
          className={`${baseClass} ${isActive ? "text-primary after:w-full" : "text-foreground/80 hover:text-primary"}`}
        >
          {label}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={`${baseClass} text-foreground/80 hover:text-primary`}
      >
        {label}
      </a>
    );
  };

  const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = href === "/services" && location === "/services";
    const baseClass =
      "block py-3 px-2 text-sm font-medium transition-colors border-b border-border/30 last:border-0";

    if (href.startsWith("/") && !href.startsWith("/#")) {
      return (
        <Link
          href={href}
          className={`${baseClass} ${isActive ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
          onClick={() => setMobileOpen(false)}
        >
          {label}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={`${baseClass} text-foreground/80 hover:text-primary`}
        onClick={() => setMobileOpen(false)}
      >
        {label}
      </a>
    );
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            {/* Inline SVG logo — always renders, no external file dependency */}
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 transition-transform duration-300 group-hover:scale-105"
              aria-hidden="true"
            >
              <circle cx="22" cy="22" r="21" fill="hsl(120 58% 40%)" stroke="hsl(120 58% 40% / 0.2)" strokeWidth="1.5" />
              {/* Stylised 'U' letterform */}
              <path
                d="M14 14 L14 24 C14 29.5 30 29.5 30 24 L30 14"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              {/* Small leaf/heart at base */}
              <circle cx="22" cy="30" r="2.5" fill="white" fillOpacity="0.85" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base sm:text-lg text-primary tracking-tight leading-none">Umeed</span>
              <span className="font-sans text-[10px] sm:text-xs font-medium tracking-widest uppercase text-muted-foreground">Care Center</span>
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-full h-10 px-5 text-sm font-semibold shadow-sm border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            Book Now
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
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-background border-t border-border/40`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <MobileNavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <div className="pt-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center rounded-full h-12 px-6 text-sm font-semibold shadow-sm border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200 w-full"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
