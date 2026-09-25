import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fatima R.",
    initials: "FR",
    location: "Karachi",
    service: "Lower Limb Prosthetics",
    text: "After my amputation I was devastated. The team at Umeed Care Center not only provided a perfect-fitting prosthetic leg but guided me through every step with so much patience and care. I'm walking again and I couldn't be more grateful.",
    stars: 5,
  },
  {
    name: "Hassan M.",
    initials: "HM",
    location: "Karachi",
    service: "Custom Foot Orthotics",
    text: "I had been suffering from severe foot pain for years. After getting custom orthotics made here, the difference was night and day. Highly professional team, very precise measurements. 100% recommend to anyone in Karachi.",
    stars: 5,
  },
  {
    name: "Sara K.",
    initials: "SK",
    location: "Karachi",
    service: "Pediatric Orthotics",
    text: "My son has cerebral palsy and needed special ankle supports. The specialist was incredibly gentle with him and explained everything clearly to us. The orthotics fit perfectly and his walking has improved so much.",
    stars: 5,
  },
  {
    name: "Imran A.",
    initials: "IA",
    location: "Karachi",
    service: "Spinal Orthotics",
    text: "Got a lumbar brace for my back condition. The fitting was done with great care and the brace is very comfortable. Staff is knowledgeable and the WhatsApp contact makes it very easy to ask follow-up questions.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(120 58% 40%) 1px, transparent 0)", backgroundSize: "28px 28px" }}
      />

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-animate opacity-0 transition-all duration-700 translate-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-4">
            Patient Stories
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lives Changed at{" "}
            <span className="text-primary">Umeed</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Hear from patients across Karachi whose mobility and confidence have been restored.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`scroll-animate opacity-0 translate-y-8 stagger-${i + 1} bg-card border border-border/50 rounded-2xl p-6 flex flex-col gap-4 card-tilt hover:border-primary/20`}
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-primary/30 shrink-0" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>

              {/* Divider */}
              <div className="h-px bg-border/50" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
