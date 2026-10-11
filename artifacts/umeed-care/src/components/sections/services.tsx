import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/language-context";
import { categoryOf, categoryLabels } from "@/lib/service-category";

export default function Services() {
  const { language, t } = useLanguage();
  const ur = language === "ur";
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="relative bg-dark text-dark-foreground py-20 sm:py-28 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-accent/20 blur-3xl"
      />
      <div className="container px-4 md:px-6 mx-auto relative">
        <div className="reveal flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
              {ur ? "ہماری خدمات" : "Services"}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              {t.servicesSection.titlePrefix}
              {t.servicesSection.titleHighlight}
            </h2>
          </div>
          <p className="max-w-md text-base text-white/70 leading-relaxed">{t.servicesSection.description}</p>
        </div>

        {/* Desktop: index list with live preview */}
        <div className="reveal mt-14 hidden lg:grid grid-cols-12 gap-12">
          <ul className="col-span-6 border-t border-white/15" onMouseLeave={() => undefined}>
            {services.map((service, index) => {
              const isActive = index === active;
              const cat = categoryLabels[categoryOf(service.id)];
              return (
                <li key={service.id} className="border-b border-white/15">
                  <Link
                    href={`/services/${service.id}`}
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className="group flex items-center gap-5 py-5 pr-2 outline-none"
                  >
                    <span className={`w-8 text-sm tabular-nums transition-colors ${isActive ? "text-primary" : "text-white/40"}`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span
                        className={`block text-xl font-semibold transition-all duration-300 ${
                          isActive ? "text-white translate-x-1.5" : "text-white/55 group-hover:text-white/80"
                        }`}
                      >
                        {ur ? service.titleUr : service.title}
                      </span>
                    </span>
                    <span className="text-xs uppercase tracking-widest text-white/40">{ur ? cat.ur : cat.en}</span>
                    <ArrowUpRight
                      className={`w-5 h-5 transition-all duration-300 rtl:-scale-x-100 ${
                        isActive ? "text-primary opacity-100" : "opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="col-span-6">
            <div className="sticky top-28">
              <div className="relative aspect-[5/4] rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10">
                {services.map((service, index) => (
                  <img
                    key={service.id}
                    src={service.image}
                    alt={ur ? service.titleUr : service.title}
                    width={720}
                    height={576}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                      index === active ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80 flex items-center gap-2"><span className="h-px w-6 bg-primary" aria-hidden="true" />
                    {ur ? current.taglineUr : current.tagline}
                  </p>
                  <p className="mt-2 text-white/85 leading-relaxed max-w-md">
                    {ur ? current.shortDescriptionUr : current.shortDescription}
                  </p>
                  <Link
                    href={`/services/${current.id}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors"
                  >
                    {t.servicesPage.learnMore}
                    <ArrowRight className="w-4 h-4 rtl:-scale-x-100" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile and tablet: image cards */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:hidden">
          {services.map((service, index) => (
            <li key={service.id} className="reveal">
              <Link
                href={`/services/${service.id}`}
                className="group block rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt=""
                    width={640}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-dark/70 backdrop-blur px-2.5 py-1 text-xs tabular-nums text-white/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white">{ur ? service.titleUr : service.title}</h3>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed line-clamp-3">
                    {ur ? service.shortDescriptionUr : service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {t.servicesPage.learnMore}
                    <ArrowRight className="w-3.5 h-3.5 rtl:-scale-x-100" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="reveal mt-14 flex flex-wrap items-center gap-x-6 gap-y-4">
          <p className="text-white/70">{t.servicesSection.ctaText}</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md h-11 px-6 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t.servicesSection.ctaButton}
          </a>
          <Link href="/services" className="text-sm font-semibold text-white/80 hover:text-white underline underline-offset-4">
            {ur ? "تمام خدمات دیکھیں" : "View all services"}
          </Link>
        </div>
      </div>
    </section>
  );
}
