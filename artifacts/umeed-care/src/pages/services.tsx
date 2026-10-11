import { useEffect } from "react";
import { Link } from "wouter";
import { MessageCircle, ArrowRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CtaBand from "@/components/ui/cta-band";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { services } from "@/data/services";
import { useSEO } from "@/hooks/use-seo";
import { categoryOf, categoryLabels } from "@/lib/service-category";
import { useLanguage } from "@/lib/language-context";

export default function ServicesPage() {
  const { language, t } = useLanguage();

  useSEO({
    path: "/services",
    title: "Orthotic & Prosthetic Services in Karachi | Umeed Care Center",
    description: "Browse all orthotic & prosthetic services at Umeed Care Center, Karachi: prosthetic limbs, orthotics, spinal braces, diabetic footwear & pediatric care.",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">

        {/* Page Hero */}
        <section className="relative overflow-hidden bg-dark text-dark-foreground">
          <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 left-0 h-[24rem] w-[24rem] rounded-full bg-primary/20 blur-3xl" />
          <div className="container px-4 sm:px-6 mx-auto relative py-16 sm:py-24">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-white/65 hover:text-white transition-colors mb-8">
              <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
              {t.common.backHome}
            </Link>
            <div className="max-w-3xl">
              <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-5">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                {t.servicesPage.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
                {t.servicesPage.titlePrefix}
                <span className="text-primary">{t.servicesPage.titleHighlight}</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
                {t.servicesPage.description}
              </p>
            </div>
          </div>
        </section>

        {/* Services, grouped by category */}
        <section className="py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto space-y-16 sm:space-y-24">
            {(["prosthetics", "orthotics", "footwear"] as const).map((cat) => {
              const group = services.filter((s) => categoryOf(s.id) === cat);
              const label = categoryLabels[cat];
              return (
                <div key={cat}>
                  <div className="reveal flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 pb-5 border-b border-foreground/15">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {language === "ur" ? label.ur : label.en}
                    </h2>
                    <p className="text-sm text-muted-foreground">{language === "ur" ? label.noteUr : label.noteEn}</p>
                  </div>
                  <div className="mt-8 grid gap-6 md:grid-cols-6">
                    {group.map((service, i) => {
                      const wide = group.length % 2 === 1 && i === 0 && group.length > 1;
                      const full = group.length === 1;
                      return (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          className={`reveal group relative overflow-hidden rounded-2xl bg-dark text-dark-foreground ${
                            full || wide ? "md:col-span-6" : "md:col-span-3"
                          }`}
                        >
                          <div className={`relative overflow-hidden ${full || wide ? "aspect-[4/5] sm:aspect-[16/8]" : "aspect-[4/5] sm:aspect-[4/3]"}`}>
                            <img
                              src={service.image}
                              alt={language === "ur" ? service.titleUr : service.title}
                              width={960}
                              height={640}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
                          </div>
                          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 flex items-center gap-2"><span className="h-px w-6 bg-primary" aria-hidden="true" />
                              {language === "ur" ? service.taglineUr : service.tagline}
                            </p>
                            <h3 className="mt-2 text-xl sm:text-2xl font-semibold">
                              {language === "ur" ? service.titleUr : service.title}
                            </h3>
                            <p className="mt-2 max-w-xl text-sm text-white/75 leading-relaxed line-clamp-2">
                              {language === "ur" ? service.shortDescriptionUr : service.shortDescription}
                            </p>
                            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                              {t.servicesPage.learnMore}
                              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 rtl:-scale-x-100" />
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <CtaBand />

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
