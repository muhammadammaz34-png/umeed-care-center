import { CalendarCheck, Ruler, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <CalendarCheck className="w-7 h-7 text-primary" />,
    title: "Book a Consultation",
    description:
      "Reach us via WhatsApp, phone, or the form below. We'll confirm a convenient appointment time — no long waiting lists.",
  },
  {
    number: "02",
    icon: <Ruler className="w-7 h-7 text-primary" />,
    title: "Assessment & Measurement",
    description:
      "Our specialist evaluates your condition, takes precise measurements, and discusses your mobility goals to design the ideal solution.",
  },
  {
    number: "03",
    icon: <Package className="w-7 h-7 text-primary" />,
    title: "Custom Fitting & Follow-Up",
    description:
      "Your device is crafted, fitted, and fine-tuned in-house. We stay with you through follow-up visits until you're fully comfortable.",
  },
];

export default function Process() {
  return (
    <section className="py-16 sm:py-24 bg-background relative overflow-hidden border-b border-border/30">
      {/* Subtle top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container px-4 sm:px-6 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 transition-all duration-700 translate-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-4">
            Simple Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            From First Contact to{" "}
            <span className="text-primary italic font-serif font-normal">Full Mobility</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            We make the journey to better mobility as simple and stress-free as possible — three clear steps from consultation to custom fit.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-14 left-[calc(16.67%+1.5rem)] right-[calc(16.67%+1.5rem)] h-px bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 pointer-events-none" />

          {steps.map((step, i) => (
            <div
              key={i}
              className={`scroll-animate opacity-0 transition-all duration-700 translate-y-8 stagger-${i + 1} flex flex-col items-center md:items-start text-center md:text-left`}
            >
              {/* Step circle */}
              <div className="relative mb-5">
                <div className="w-[60px] h-[60px] rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center relative z-10">
                  {step.icon}
                </div>
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center z-20">
                  {i + 1}
                </span>
              </div>

              {/* Content card */}
              <div className="bg-card border border-border/50 rounded-2xl p-6 w-full hover:border-primary/30 hover:shadow-lg transition-all duration-300 card-tilt">
                <p className="text-primary font-mono text-xs font-bold tracking-[0.15em] mb-2 opacity-60">{step.number}</p>
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
            className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 text-sm font-semibold shadow-md border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            Start Your Journey Today
          </a>
        </div>
      </div>
    </section>
  );
}
