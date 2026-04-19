import heroImage from "@/assets/images/hero.png";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/923136422564?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Orthotic and prosthetic specialist helping a patient in Karachi Pakistan"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/85 md:bg-background/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>

      {/* Animated blobs */}
      <div className="absolute -top-20 -left-20 w-56 sm:w-72 h-56 sm:h-72 bg-primary/10 animate-blob z-0 pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-40 sm:w-52 h-40 sm:h-52 bg-accent/10 animate-blob-delay z-0 pointer-events-none" />

      <div className="container relative z-10 px-4 sm:px-6 py-16 md:py-20 mx-auto">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="fade-in-up inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-4 sm:mb-5 animate-shimmer">
            Orthotic &amp; Prosthetic Clinic — Karachi, Pakistan
          </div>

          {/* Headline */}
          <h1 className="fade-in-up delay-100 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-4 sm:mb-5">
            Restoring Mobility.<br />
            <span className="text-primary italic font-serif font-normal">Inspiring Hope.</span>
          </h1>

          {/* Description */}
          <p className="fade-in-up delay-200 text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed max-w-xl">
            Umeed Care Center provides expert orthotic and prosthetic solutions in Karachi — including prosthetic limbs, custom orthotics, spinal braces, and diabetic footwear. Compassionate care under one roof.
          </p>

          {/* CTA buttons */}
          <div className="fade-in-up delay-300 flex flex-col xs:flex-row flex-wrap gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 text-sm sm:text-base font-semibold shadow-md border-2 border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200 animate-pulse-ring"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              WhatsApp Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 text-sm sm:text-base font-semibold shadow-md border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200"
            >
              Contact Us
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full h-11 sm:h-12 md:h-14 px-5 sm:px-6 md:px-8 text-sm sm:text-base font-semibold shadow-sm border-2 border-primary bg-white/70 text-primary backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>

      {/* Floating dots — desktop only */}
      <div className="absolute right-8 top-1/3 w-3 h-3 rounded-full bg-primary/40 animate-float hidden lg:block pointer-events-none" />
      <div className="absolute right-24 top-1/2 w-2 h-2 rounded-full bg-accent/50 animate-float-delay hidden lg:block pointer-events-none" />
      <div className="absolute right-16 bottom-24 w-2.5 h-2.5 rounded-full bg-primary/30 animate-float-slow hidden lg:block pointer-events-none" />
    </section>
  );
}
