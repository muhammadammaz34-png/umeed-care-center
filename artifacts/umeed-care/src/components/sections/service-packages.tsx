import { CheckCircle, MessageCircle } from "lucide-react";
import { packages } from "@/data/packages";
import { useLanguage } from "@/lib/language-context";

const WHATSAPP_BASE = "https://wa.me/923136422564";

export default function ServicePackages({ serviceId, serviceTitle }: { serviceId: string; serviceTitle: string }) {
  const { language } = useLanguage();
  const data = packages[serviceId];
  if (!data) return null;
  const ur = language === "ur";

  const t = ur
    ? {
        badge: "کیئر پیکجز",
        title: "اپنے لیے مناسب پیکج چنیں",
        sub: "ہر پیکج میں پہلی مشاورت، پیمائش اور فٹنگ شامل ہے۔ حتمی قیمت معائنے کے بعد بتائی جاتی ہے۔",
        popular: "زیادہ منتخب",
        after: "قیمت معائنے کے بعد",
        from: "ابتدائی قیمت",
        cta: "اس پیکج کے بارے میں پوچھیں",
        note: "پیکج کا انتخاب ڈاکٹر کے معائنے کے بعد بدل سکتا ہے۔",
      }
    : {
        badge: "Care packages",
        title: "Choose the package that fits you",
        sub: "Every package includes a free first consultation, measurement and fitting. The final price is given after your assessment.",
        popular: "Most chosen",
        after: "Quoted after assessment",
        from: "Starting from",
        cta: "Ask about this package",
        note: "The right package can change after the specialist examines you.",
      };

  const wa = (tierName: string) => {
    const text = ur
      ? `السلام علیکم، مجھے ${serviceTitle} کے "${tierName}" پیکج کے بارے میں معلومات چاہیے۔`
      : `Hello, I would like to know more about the "${tierName}" package for ${serviceTitle}.`;
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="packages" className="py-14 sm:py-20 bg-secondary/40 border-y border-border/40">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">{t.badge}</p>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground text-balance">{t.title}</h2>
          <p className="mt-4 text-muted-foreground">{t.sub}</p>
        </div>

        {data.marketNote && (
          <p className="mt-6 max-w-3xl mx-auto rounded-2xl border border-primary/20 bg-primary/5 px-5 py-3 text-sm text-foreground/80 text-center">
            {ur ? data.marketNoteUr : data.marketNote}
          </p>
        )}

        <div className="mt-10 grid gap-5 md:grid-cols-3 max-w-5xl mx-auto">
          {data.tiers.map((tier) => {
            const name = ur ? tier.nameUr : tier.name;
            const items = ur ? tier.includesUr : tier.includes;
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-3xl border bg-card p-6 sm:p-7 ${
                  tier.featured ? "border-primary shadow-xl shadow-primary/10 md:-translate-y-2" : "border-border"
                }`}
              >
                {tier.featured && (
                  <span className="absolute -top-3 start-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {t.popular}
                  </span>
                )}
                <h3 className="text-xl font-bold text-foreground">{name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{ur ? tier.forWhoUr : tier.forWho}</p>

                <div className="mt-5 border-y border-border/60 py-4">
                  {tier.fromPkr ? (
                    <p className="text-foreground">
                      <span className="block text-xs uppercase tracking-wider text-muted-foreground">{t.from}</span>
                      <span className="text-2xl font-bold tabular-nums">PKR {tier.fromPkr.toLocaleString("en-PK")}</span>
                    </p>
                  ) : (
                    <p className="text-sm font-semibold text-foreground">{t.after}</p>
                  )}
                </div>

                <ul className="mt-5 space-y-2.5 flex-1">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>

                <a
                  href={wa(name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors ${
                    tier.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {t.cta}
                </a>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">{t.note}</p>
      </div>
    </section>
  );
}
