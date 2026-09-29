import { useState } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

// Used for the FAQPage JSON-LD structured data on the home page, which
// should stay in English regardless of the UI language — that's what the
// site's canonical (English) prerendered HTML and SEO metadata are in.
export const faqs = translations.en.faq.items;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 scroll-animate opacity-0 transition-all duration-700 translate-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-4">
            {t.faq.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.faq.titlePrefix}
            <span className="text-primary">{t.faq.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            {t.faq.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {t.faq.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-border/60 rounded-xl bg-card overflow-hidden"
                onMouseEnter={() => setOpenIndex(i)}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 text-sm sm:text-base font-semibold text-foreground"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown className={`w-4 h-4 shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64" : "max-h-0"}`}>
                  <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg h-11 sm:h-12 px-6 text-sm font-semibold border border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
          >
            {t.faq.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
