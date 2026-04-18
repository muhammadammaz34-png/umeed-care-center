import lowerLimbProsthetic from "@/assets/images/service-lower-limb-prosthetic.png";
import upperLimbProsthetic from "@/assets/images/service-upper-limb-prosthetic.png";
import pediatricOrthotics from "@/assets/images/service-pediatric-orthotics.png";
import spinalOrthotics from "@/assets/images/service-spinal-orthotics.png";
import lowerLimbOrthotics from "@/assets/images/service-lower-limb-orthotics.png";
import upperLimbOrthotics from "@/assets/images/service-upper-limb-orthotics.png";
import customFootOrthotics from "@/assets/images/service-custom-foot-orthotics.png";
import diabeticFootwear from "@/assets/images/service-diabetic-footwear.png";

const services = [
  {
    title: "Lower Limb Prosthetics",
    description: "Advanced artificial legs and feet designed for natural movement, stability, and comfort.",
    image: lowerLimbProsthetic,
  },
  {
    title: "Upper Limb Prosthetics",
    description: "Custom-fitted artificial arms and hands that restore functionality and independence.",
    image: upperLimbProsthetic,
  },
  {
    title: "Pediatric Orthotics & Prosthetics",
    description: "Gentle, compassionate fitting of supportive devices for children as they grow and develop.",
    image: pediatricOrthotics,
  },
  {
    title: "Spinal Orthotics",
    description: "Supportive braces to stabilize the spine, relieve pain, and aid in recovery.",
    image: spinalOrthotics,
  },
  {
    title: "Lower Limb Orthotics",
    description: "Custom leg braces to support weakened joints, improve alignment, and enhance mobility.",
    image: lowerLimbOrthotics,
  },
  {
    title: "Upper Limb Orthotics",
    description: "Precision splints and braces for the arm, wrist, and hand to support healing and function.",
    image: upperLimbOrthotics,
  },
  {
    title: "Custom Foot Orthotics",
    description: "Personalized insoles crafted to correct foot mechanics, reduce pain, and improve posture.",
    image: customFootOrthotics,
  },
  {
    title: "Diabetic & Pressure-Relief Footwear",
    description: "Specialized shoes and inserts to protect sensitive feet and prevent complications.",
    image: diabeticFootwear,
  },
];

export default function Services() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=100054410172615";

  return (
    <section id="services" className="py-24 md:py-32 bg-card border-y border-border/40">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 scroll-animate opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Care <span className="text-primary italic font-serif font-normal">Under One Roof</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide a full spectrum of orthotic and prosthetic solutions, carefully tailored to each individual's unique needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 scroll-animate opacity-0 translate-y-8"
              style={{ transitionDelay: `${(index % 4) * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-foreground mb-3 font-serif group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center scroll-animate opacity-0 transition-all duration-1000 translate-y-8">
          <p className="text-muted-foreground mb-6">Need a consultation for a specific service?</p>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full h-14 px-10 text-base font-semibold shadow-md border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
