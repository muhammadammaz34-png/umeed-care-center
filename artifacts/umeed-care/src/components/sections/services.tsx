import { Link } from "wouter";
import { services } from "@/data/services";

export default function Services() {
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
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className={`group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/30 scroll-animate opacity-0 translate-y-8 card-tilt stagger-${Math.min(index + 1, 8)}`}
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
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center scroll-animate opacity-0 transition-all duration-1000 translate-y-8">
          <p className="text-muted-foreground mb-6">Need a consultation for a specific service?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full h-14 px-10 text-base font-semibold shadow-md border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
}
