import { Link } from "wouter";
import heroImage from "@/assets/images/hero.png";
import { MessageCircle, Award, Users, Package, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const statIcons = [
  <Package className="w-5 h-5 text-accent" />,
  <Users className="w-5 h-5 text-primary" />,
  <Award className="w-5 h-5 text-accent" />,
];
const statAccents = ["accent", "primary", "accent"] as const;

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Orthotic and prosthetic specialist helping a patient in Karachi Pakistan"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/85 md:bg-background/60"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 sm:px-6 py-16 md:py-20 mx-auto flex-1 flex flex-col justify-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="fade-in-up inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs sm:text-sm font-medium text-muted-foreground mb-5 sm:mb-6">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            {t.hero.badge}
          </div>

          {/* Headline */}
          <h1 className="fade-in-up delay-100 text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15] mb-4 sm:mb-5">
            <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-2">{t.hero.headlineSmall}</span>
            {t.hero.headlinePrefix}<span className="text-primary">{t.hero.headlineHighlight}</span>
          </h1>

          {/* Description */}
          <p className="fade-in-up delay-200 text-sm sm:text-base md:text-lg text-muted-foreground mb-7 sm:mb-8 leading-relaxed max-w-xl">
            {t.hero.description}
          </p>

          {/* CTA buttons */}
          <div className="fade-in-up delay-300 flex flex-col sm:flex-row gap-3 mb-10 sm:mb-12">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg h-11 sm:h-12 px-6 text-sm sm:text-base font-semibold bg-green-600 text-white hover:bg-green-700 transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              {t.hero.ctaBook}
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg h-11 sm:h-12 px-6 text-sm sm:text-base font-semibold border border-border bg-background text-foreground hover:border-accent hover:text-accent transition-colors duration-200"
            >
              {t.hero.ctaExplore}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats strip */}
          <div className="fade-in-up delay-[400ms] grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl">
            {t.hero.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-xl bg-card border border-border px-4 py-3 sm:px-5 sm:py-4 flex flex-row sm:flex-col gap-3 sm:gap-1.5 items-center sm:items-start"
              >
                <div className={`w-8 h-8 rounded-md ${statAccents[i] === "accent" ? "bg-accent/10" : "bg-primary/10"} flex items-center justify-center shrink-0`}>
                  {statIcons[i]}
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold text-foreground leading-none">{stat.value}</p>
                  <p className="text-xs font-semibold text-foreground/80 mt-1">{stat.label}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 leading-tight">{stat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
