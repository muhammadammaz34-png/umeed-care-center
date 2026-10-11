import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/language-context";

function categoryOf(id: string): "Prosthetics" | "Orthotics" | "Footwear" {
  if (id.includes("footwear")) return "Footwear";
  if (id.includes("prosthetic") && !id.includes("orthotic")) return "Prosthetics";
  return "Orthotics";
}

export default function Services() {
  const { language, t } = useLanguage();

  return (
    <section id="services" className="py-16 sm:py-24 bg-secondary/40 border-b border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="reveal max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {t.servicesSection.titlePrefix}
            {t.servicesSection.titleHighlight}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">{t.servicesSection.description}</p>
        </div>

        <ul className="mt-10 sm:mt-14 border-t border-foreground/15">
          {services.map((service, index) => (
            <li key={service.id} className="reveal border-b border-foreground/15">
              <Link
                href={`/services/${service.id}`}
                className="group grid grid-cols-[2.25rem_1fr_auto] sm:grid-cols-[3.5rem_16rem_1fr_7rem] items-center gap-x-4 gap-y-1 py-5 sm:py-6"
              >
                <span className="text-sm tabular-nums text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0 sm:contents">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {language === "ur" ? service.titleUr : service.title}
                  </h3>
                  <p className="mt-1 sm:mt-0 text-sm text-muted-foreground leading-relaxed sm:pr-6 line-clamp-2 sm:line-clamp-none">
                    {language === "ur" ? service.shortDescriptionUr : service.shortDescription}
                  </p>
                </div>
                <div className="flex items-center gap-3 justify-self-end">
                  <img
                    src={service.image}
                    alt=""
                    width={112}
                    height={78}
                    loading="lazy"
                    decoding="async"
                    className="w-20 sm:w-28 aspect-[10/7] object-cover rounded-sm"
                  />
                  <ArrowUpRight className="hidden sm:block w-5 h-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" aria-hidden="true" />
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <div className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
          <p className="text-muted-foreground">{t.servicesSection.ctaText}</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md h-11 px-6 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t.servicesSection.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
