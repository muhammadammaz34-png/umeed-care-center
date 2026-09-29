import { CalendarCheck, Ruler, Package } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const stepIcons = [
  <CalendarCheck className="w-7 h-7 text-accent" />,
  <Ruler className="w-7 h-7 text-primary" />,
  <Package className="w-7 h-7 text-accent" />,
];
const stepAccents = ["accent", "primary", "accent"] as const;
const stepNumbers = ["01", "02", "03"];

export default function Process() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden border-b border-border/30">
      {/* Subtle top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 sm:px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 transition-all duration-700 translate-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-4">
            {t.process.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.process.titlePrefix}
            <span className="text-primary">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            {t.process.description}
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 pointer-events-none" />

          {t.process.steps.map((step, i) => (
            <div
              key={i}
              className={`scroll-animate opacity-0 transition-all duration-700 translate-y-8 stagger-${i + 1} flex flex-col items-center md:items-start text-center md:text-left`}
            >
              {/* Step circle */}
              <div className="relative mb-5">
                <div className={`w-[60px] h-[60px] rounded-full ${stepAccents[i] === "accent" ? "bg-accent/10 border-accent/20" : "bg-primary/10 border-primary/20"} border flex items-center justify-center relative z-10`}>
                  {stepIcons[i]}
                </div>
                <span className={`absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full ${stepAccents[i] === "accent" ? "bg-accent" : "bg-primary"} text-white text-[10px] font-bold flex items-center justify-center z-20`}>
                  {i + 1}
                </span>
              </div>

              {/* Content card */}
              <div className={`bg-card border border-border/50 rounded-2xl p-6 w-full ${stepAccents[i] === "accent" ? "hover:border-accent/30" : "hover:border-primary/30"} hover:transition-all duration-300 card-tilt`}>
                <p className={`${stepAccents[i] === "accent" ? "text-accent" : "text-primary"} font-mono text-xs font-bold tracking-[0.15em] mb-2 opacity-60`}>{stepNumbers[i]}</p>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 scroll-animate opacity-0 transition-all duration-700 translate-y-8">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg h-12 px-8 text-sm font-semibold border border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            {t.process.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
