import { useEffect } from "react";
import { Link, useParams, useLocation } from "wouter";
import { MessageCircle, CheckCircle, ArrowRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { services, getServiceById } from "@/data/services";
import { useSEO, SITE_URL } from "@/hooks/use-seo";

export default function ServiceDetailPage() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const service = getServiceById(params.id);

  useSEO({
    path: `/services/${params.id}`,
    title: service ? `${service.title} in Karachi | Umeed Care Center` : "Service Not Found | Umeed Care Center",
    description: service
      ? `${service.shortDescription} Serving ${service.whoItHelps.charAt(0).toLowerCase()}${service.whoItHelps.slice(1)} Book a consultation at Umeed Care Center, Karachi.`
      : "This service could not be found.",
    noindex: !service,
    jsonLd: service
      ? {
          "@context": "https://schema.org",
          "@type": "MedicalTherapy",
          name: service.title,
          description: service.description,
          url: `${SITE_URL}/services/${service.id}`,
          provider: {
            "@type": "MedicalClinic",
            name: "Umeed Care Center",
            telephone: "+92-313-6422564",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Karachi",
              addressRegion: "Sindh",
              addressCountry: "PK",
            },
          },
        }
      : undefined,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [params.id]);

  useEffect(() => {
    if (!service) {
      navigate("/services");
    }
  }, [service, navigate]);

  if (!service) return null;

  const otherServices = services.filter((s) => s.id !== service.id);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">

        {/* Page Hero */}
        <section className="bg-primary/5 border-b border-border/40 py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back to All Services
            </Link>
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-4">
                {service.tagline}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {service.title}
                <span className="block text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mt-1">in Karachi, Pakistan</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {service.shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg h-11 sm:h-12 px-6 text-sm font-semibold border border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Service detail */}
        <section className="py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">

              {/* Image */}
              <div className="w-full lg:w-2/5 shrink-0">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">{service.tagline}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">About This Service</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">{service.description}</p>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who it helps */}
                <div className="rounded-xl bg-primary/5 border border-primary/10 px-4 py-3 mb-6">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Who This Helps</p>
                  <p className="text-sm text-muted-foreground">{service.whoItHelps}</p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Enquire about this service <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Other services */}
        <section className="py-14 sm:py-20 bg-card border-y border-border/40">
          <div className="container px-4 sm:px-6 mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">Explore Other Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {otherServices.slice(0, 4).map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{s.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                View All Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="container px-4 sm:px-6 mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">Ready to Get Started?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Contact our team in Karachi to book your consultation. We'll assess your needs and recommend the right solution for you.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg h-12 px-8 text-sm font-semibold border border-white bg-white text-primary hover:bg-transparent hover:text-white transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
