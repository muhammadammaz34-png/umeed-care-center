import { Link } from "wouter";
import { MessageCircle, ArrowRight, Check } from "lucide-react";
import heroImage from "@/assets/images/hero.webp";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { language, t } = useLanguage();
  const ur = language === "ur";

  return (
    <section id="hero" className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 85% 10%, hsl(var(--primary) / 0.10), transparent 60%), radial-gradient(50rem 28rem at 0% 90%, hsl(var(--accent) / 0.09), transparent 60%)",
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center py-14 sm:py-20 lg:py-28">
        <div>
          <p className="fade-in-up inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            {t.hero.badge}
          </p>

          <h1 className="fade-in-up delay-100 text-[2.4rem] leading-[1.06] sm:text-6xl lg:text-[4.1rem] font-bold tracking-tight text-foreground text-balance">
            {t.hero.headlinePrefix}
            <span className="text-primary">{t.hero.headlineHighlight}</span>
          </h1>

          <p className="fade-in-up delay-200 mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            {t.hero.description}
          </p>

          <div className="fade-in-up delay-300 mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-7 text-base font-semibold bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
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

          <dl className="fade-in-up delay-400 mt-12 grid grid-cols-3 gap-3 max-w-xl">
            {t.hero.stats.map((stat) => (
              <div key={stat.value} className="rounded-2xl border border-border bg-background/70 backdrop-blur px-4 py-4">
                <dt className="text-lg sm:text-xl font-bold text-foreground leading-tight">{stat.value}</dt>
                <dd className="mt-1 text-xs sm:text-sm text-muted-foreground leading-snug">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="fade-in-up delay-200 order-first lg:order-none relative">
          <div
            aria-hidden="true"
            className="absolute -inset-3 sm:-inset-4 rounded-[2rem] border border-primary/25 translate-x-3 translate-y-3 sm:translate-x-5 sm:translate-y-5"
          />
          <img
            src={heroImage}
            width={1408}
            height={768}
            alt="Orthotic and prosthetic specialist helping a patient in Karachi, Pakistan"
            className="relative w-full h-auto aspect-[4/3] lg:aspect-[5/6] object-cover rounded-[1.75rem] shadow-2xl shadow-foreground/15"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute left-3 bottom-3 sm:-left-6 sm:bottom-10 rounded-2xl bg-background/95 backdrop-blur border border-border shadow-xl px-4 py-3 flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/12 text-primary">
              <Check className="w-5 h-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold text-foreground leading-tight">
              {ur ? "ایک ہی کلینک میں بنایا اور فٹ کیا" : "Made and fitted in one clinic"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
