import { Link } from "wouter";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "@/assets/images/hero.webp";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="border-b border-border">
      <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center py-12 sm:py-16 lg:py-24">
        <div>
          <p className="fade-in-up text-sm font-medium text-muted-foreground mb-5">{t.hero.badge}</p>

          <h1 className="fade-in-up delay-100 text-[2rem] leading-[1.12] sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight text-foreground text-balance">
            {t.hero.headlinePrefix}
            <span className="text-primary">{t.hero.headlineHighlight}</span>
          </h1>

          <p className="fade-in-up delay-200 mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            {t.hero.description}
          </p>

          <div className="fade-in-up delay-300 mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md h-12 px-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              {t.hero.ctaBook}
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-base font-semibold text-foreground hover:text-accent transition-colors"
            >
              {t.hero.ctaExplore}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 rtl:rotate-180" aria-hidden="true" />
            </Link>
          </div>

          <dl className="fade-in-up delay-400 mt-12 pt-6 border-t border-border grid grid-cols-3 gap-4 max-w-xl">
            {t.hero.stats.map((stat) => (
              <div key={stat.value}>
                <dt className="text-lg sm:text-xl font-bold text-foreground leading-tight">{stat.value}</dt>
                <dd className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="fade-in-up delay-200 order-first lg:order-none">
          <img
            src={heroImage}
            width={1408}
            height={768}
            alt="Orthotic and prosthetic specialist helping a patient in Karachi, Pakistan"
            className="w-full h-auto aspect-[4/3] lg:aspect-[5/4] object-cover rounded-md"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
