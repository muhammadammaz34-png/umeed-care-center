import { useLanguage } from "@/lib/language-context";

export default function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-20 sm:py-28 border-b border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="reveal max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">{t.process.badge}</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t.process.titlePrefix}
            {t.process.titleHighlight}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">{t.process.description}</p>
        </div>

        <ol className="relative mt-14 grid md:grid-cols-3 gap-5">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[2.65rem] left-[16%] right-[16%] h-px bg-gradient-to-r from-primary/60 via-accent/50 to-primary/60"
          />
          {t.process.steps.map((step, i) => (
            <li key={i} className={`reveal stagger-${i + 1} relative rounded-3xl border border-border bg-card p-7 sm:p-8 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300`}>
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-dark text-white text-sm font-semibold tabular-nums ring-4 ring-background">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full h-12 px-7 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t.process.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
