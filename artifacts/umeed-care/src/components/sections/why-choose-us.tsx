import { useLanguage } from "@/lib/language-context";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-secondary/40 border-b border-border">
      <div className="container px-4 md:px-6 mx-auto grid lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {t.whyChooseUs.titleLine1} {t.whyChooseUs.titleHighlight}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-md">{t.whyChooseUs.description}</p>
        </div>

        <dl className="border-t border-foreground/15">
          {t.whyChooseUs.reasons.map((reason, index) => (
            <div
              key={index}
              className={`reveal stagger-${index + 1} grid sm:grid-cols-[13rem_1fr] gap-x-8 gap-y-1 py-6 border-b border-foreground/15`}
            >
              <dt className="text-lg font-semibold text-foreground">{reason.title}</dt>
              <dd className="text-muted-foreground leading-relaxed">{reason.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
