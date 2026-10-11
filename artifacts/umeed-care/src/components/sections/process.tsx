import { useLanguage } from "@/lib/language-context";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-16 sm:py-24 border-b border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="reveal max-w-2xl">
          <p className="text-sm font-semibold text-primary mb-3">{t.process.badge}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {t.process.titlePrefix}
            {t.process.titleHighlight}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">{t.process.description}</p>
        </div>

        <ol className="mt-10 sm:mt-14 grid md:grid-cols-3 gap-x-10 gap-y-10">
          {t.process.steps.map((step, i) => (
            <li key={i} className={`reveal stagger-${i + 1} border-t-2 border-foreground pt-5`}>
              <span className="text-sm font-semibold tabular-nums text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md h-12 px-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t.process.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
