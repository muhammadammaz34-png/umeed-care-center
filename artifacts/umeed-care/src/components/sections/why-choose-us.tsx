import { Stethoscope, HeartHandshake, Building2, MessagesSquare } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const icons = [Stethoscope, HeartHandshake, Building2, MessagesSquare];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-secondary/40 border-b border-border">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="reveal max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground text-balance">
            {t.whyChooseUs.titleLine1} {t.whyChooseUs.titleHighlight}
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">{t.whyChooseUs.description}</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5">
          {t.whyChooseUs.reasons.map((reason, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className={`reveal stagger-${index + 1} group relative overflow-hidden rounded-3xl bg-background border border-border p-7 sm:p-9 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300`}
              >
                <span className="absolute top-5 right-6 text-6xl font-bold tabular-nums text-foreground/[0.05] select-none" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{reason.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
