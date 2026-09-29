import { UserCheck, Stethoscope, Home, HeartHandshake } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const icons = [
  <UserCheck className="w-8 h-8 text-accent" />,
  <HeartHandshake className="w-8 h-8 text-primary" />,
  <Home className="w-8 h-8 text-accent" />,
  <Stethoscope className="w-8 h-8 text-primary" />,
];
const accents = ["accent", "primary", "accent", "primary"] as const;

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why-us" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 rounded-l-[100px] -z-10 transform translate-x-1/4"></div>

      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 scroll-animate opacity-0 transition-all duration-1000 translate-x-[-20px]">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.whyChooseUs.titleLine1} <br />
              <span className="text-primary">{t.whyChooseUs.titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t.whyChooseUs.description}
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {t.whyChooseUs.reasons.map((reason, index) => (
              <div
                key={index}
                className={`bg-card p-8 rounded-2xl border border-border/50 scroll-animate opacity-0 translate-y-8 card-tilt stagger-${index + 1}`}
              >
                <div className={`w-14 h-14 rounded-full ${accents[index] === "accent" ? "bg-accent/10" : "bg-primary/10"} flex items-center justify-center mb-6`}>
                  {icons[index]}
                </div>
                <h3 className="font-bold text-xl text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
