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
    <section id="faq" className="py-16 sm:py-24 border-b border-border">
      <div className="container px-4 md:px-6 mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {t.faq.titlePrefix}
            {t.faq.titleHighlight}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-md">{t.faq.description}</p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-md h-11 px-6 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t.faq.cta}
          </Link>
        </div>

        <div className="border-t border-foreground/15">
          {t.faq.items.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="border-b border-foreground/15">
                <h3>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between gap-4 text-start py-5 text-base sm:text-lg font-semibold text-foreground"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                  >
                    {faq.question}
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pe-8 text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
