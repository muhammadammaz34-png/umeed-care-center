import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLocation, Link } from "wouter";
import logoImg from "@assets/Screenshot_2026-04-18_230504_1776538457084.png";
import { services as SERVICES } from "@/data/services";

const WHATSAPP_URL = "https://wa.me/923136422564?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const companyCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
      if (companyCloseTimer.current) clearTimeout(companyCloseTimer.current);
    };
  }, []);

  function handleLogoClick(e: React.MouseEvent) {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setMobileOpen(false);
    }
  }

  function openServicesMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }

  function scheduleCloseServicesMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150);
  }

  function openCompanyMenu() {
    if (companyCloseTimer.current) clearTimeout(companyCloseTimer.current);
    setCompanyOpen(true);
  }

  function scheduleCloseCompanyMenu() {
    if (companyCloseTimer.current) clearTimeout(companyCloseTimer.current);
    companyCloseTimer.current = setTimeout(() => setCompanyOpen(false), 150);
  }

  // Nav links differ by page
  const navLinks = isHome
    ? [
        { href: "#hero", label: "Home" },
        { href: "#gallery", label: "Gallery" },
        { href: "#why-us", label: "Why Choose Us" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/#gallery", label: "Gallery" },
      ];

  const companyLinks = [
    { href: "/about", label: "About Us" },
    { href: isHome ? "#contact" : "/#contact", label: "Contact Us" },
    { href: "/blog", label: "Blogs" },
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
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group" onClick={handleLogoClick}>
            <img
              src={logoImg}
              alt="Umeed Care Center logo"
              className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-base sm:text-lg text-primary tracking-tight leading-none">Umeed</span>
              <span className="font-sans text-[10px] sm:text-xs font-medium tracking-widest uppercase text-muted-foreground">Care Center</span>
            </div>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          <NavLink href={navLinks[0].href} label={navLinks[0].label} />

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={openServicesMenu}
            onMouseLeave={scheduleCloseServicesMenu}
          >
            <Link
              href="/services"
              className={`flex items-center gap-1 text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                location === "/services" ? "text-primary after:w-full" : "text-foreground/80 hover:text-primary"
              }`}
              onClick={() => setServicesOpen(false)}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 transition-all duration-200 ${
                servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
              }`}
            >
              <div className="w-72 rounded-xl border border-border/40 bg-background overflow-hidden">
                <div className="py-2 max-h-[70vh] overflow-y-auto">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="block px-4 py-2.5 text-sm font-semibold text-primary border-t border-border/40 hover:bg-primary/5 transition-colors"
                  onClick={() => setServicesOpen(false)}
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}

          {/* Company dropdown */}
          <div
            className="relative"
            onMouseEnter={openCompanyMenu}
            onMouseLeave={scheduleCloseCompanyMenu}
          >
            <button
              type="button"
              className={`flex items-center gap-1 text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                companyOpen ? "text-accent after:w-full" : "text-foreground/80 hover:text-accent"
              }`}
            >
              Company
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? "rotate-180" : ""}`} />
            </button>

            <div
              className={`absolute right-0 top-full pt-3 transition-all duration-200 ${
                companyOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
              }`}
            >
              <div className="w-48 rounded-xl border border-border/40 bg-background overflow-hidden py-2">
                {companyLinks.map((link) =>
                  link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors"
                      onClick={() => setCompanyOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-accent hover:bg-accent/5 transition-colors"
                      onClick={() => setCompanyOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center justify-center rounded-lg h-10 px-5 text-sm font-semibold shadow-sm border border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            Book Now
          </a>
          {/* Mobile/tablet hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        } bg-background border-t border-border/40`}
      >
        <div className="px-4 py-4 flex flex-col gap-1 overflow-y-auto max-h-[70vh]">
          <MobileNavLink href={navLinks[0].href} label={navLinks[0].label} />

          {/* Services accordion */}
          <div className="border-b border-border/30 last:border-0">
            <button
              className="w-full flex items-center justify-between py-3 px-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              onClick={() => setMobileServicesOpen((v) => !v)}
            >
              <Link
                href="/services"
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileOpen(false);
                }}
                className={location === "/services" ? "text-primary" : ""}
              >
                Services
              </Link>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setMobileServicesOpen((v) => !v);
                }}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileServicesOpen ? "max-h-[28rem]" : "max-h-0"
              }`}
            >
              <div className="pb-2 pl-3 flex flex-col">
                {SERVICES.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}`}
                    className="py-2 px-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <MobileNavLink key={link.href} href={link.href} label={link.label} />
          ))}

          {/* Company accordion */}
          <div className="border-b border-border/30 last:border-0">
            <button
              className="w-full flex items-center justify-between py-3 px-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors"
              onClick={() => setMobileCompanyOpen((v) => !v)}
            >
              Company
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileCompanyOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileCompanyOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="pb-2 pl-3 flex flex-col">
                {companyLinks.map((link) =>
                  link.href.startsWith("/") && !link.href.startsWith("/#") ? (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="py-2 px-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      href={link.href}
                      className="py-2 px-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="pt-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center rounded-lg h-12 px-6 text-sm font-semibold shadow-sm border border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200 w-full"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
