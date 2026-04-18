import heroImage from "@/assets/images/hero.png";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/923136422564?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100054410172615";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Orthotic and prosthetic specialist helping a patient in Karachi Pakistan"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80 md:bg-background/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-16 md:py-20 mx-auto">
        <div className="max-w-2xl fade-in-up">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-5">
            Orthotic &amp; Prosthetic Clinic — Karachi, Pakistan
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-5">
            Restoring Mobility.<br />
            <span className="text-primary italic font-serif font-normal">Inspiring Hope.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
            Umeed Care Center provides expert orthotic and prosthetic solutions in Karachi — including prosthetic limbs, custom orthotics, spinal braces, and diabetic footwear. Compassionate care under one roof.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 fade-in-up delay-200">
            {/* Green → White on hover */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-md border-2 border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
            {/* Primary green → White on hover */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-md border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200"
            >
              Contact Us
            </a>
            {/* White/outline → Green on hover */}
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-sm border-2 border-primary bg-white/70 text-primary backdrop-blur-sm hover:bg-primary hover:text-white transition-all duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
