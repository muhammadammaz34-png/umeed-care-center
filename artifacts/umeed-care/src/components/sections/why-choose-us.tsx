import { UserCheck, Stethoscope, Home, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: <UserCheck className="w-8 h-8 text-accent" />,
    accent: "accent" as const,
    title: "Expert Team",
    description: "Highly qualified and experienced specialists dedicated to precision and optimal outcomes."
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    accent: "primary" as const,
    title: "Personalized Care",
    description: "We listen to your story, understand your goals, and craft solutions specifically for your body."
  },
  {
    icon: <Home className="w-8 h-8 text-accent" />,
    accent: "accent" as const,
    title: "All Under One Roof",
    description: "From consultation and measurement to fitting and follow-ups, everything is handled in-house."
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    accent: "primary" as const,
    title: "Compassionate Approach",
    description: "We treat every patient with the dignity, warmth, and respect they truly deserve."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/30 rounded-l-[100px] -z-10 transform translate-x-1/4"></div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 scroll-animate opacity-0 transition-all duration-1000 translate-x-[-20px]">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose <br />
              <span className="text-primary">Umeed?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We stand apart through our unwavering commitment to patient dignity and our rigorous attention to clinical detail.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`bg-card p-8 rounded-2xl border border-border/50 scroll-animate opacity-0 translate-y-8 card-tilt stagger-${index + 1}`}
              >
                <div className={`w-14 h-14 rounded-full ${reason.accent === "accent" ? "bg-accent/10" : "bg-primary/10"} flex items-center justify-center mb-6`}>
                  {reason.icon}
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
