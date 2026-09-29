import { useEffect } from "react";
import { Link } from "wouter";
import { MessageCircle, ArrowRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { services } from "@/data/services";
import { useSEO } from "@/hooks/use-seo";
import { useLanguage } from "@/lib/language-context";

export default function ServicesPage() {
  const { language, t } = useLanguage();

  useSEO({
    path: "/services",
    title: "Orthotic & Prosthetic Services in Karachi | Umeed Care Center",
    description: "Browse all orthotic & prosthetic services at Umeed Care Center, Karachi — prosthetic limbs, orthotics, spinal braces, diabetic footwear & pediatric care.",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">

        {/* Page Hero */}
        <section className="bg-primary/5 border-b border-border/40 py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              {t.common.backHome}
            </Link>
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-4">
                {t.servicesPage.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {t.servicesPage.titlePrefix}{" "}
                <span className="text-primary">{t.servicesPage.titleHighlight}</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {t.servicesPage.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg h-11 sm:h-12 px-6 text-sm font-semibold border border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.common.bookConsultation}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className={`group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/30 scroll-animate opacity-0 translate-y-8 transition-all duration-500 card-tilt stagger-${Math.min(index + 1, 8)}`}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <p className="text-primary text-[11px] font-semibold uppercase tracking-widest mb-2">
                      {language === "ur" ? service.taglineUr : service.tagline}
                    </p>
                    <h3 className="font-bold text-lg text-foreground mb-3 font-serif group-hover:text-primary transition-colors">
                      {language === "ur" ? service.titleUr : service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {language === "ur" ? service.shortDescriptionUr : service.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {t.servicesPage.learnMore} <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="container px-4 sm:px-6 mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">{t.common.readyTitle}</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-sm sm:text-base">
              {t.common.readyDescription}
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg h-12 px-8 text-sm font-semibold border border-white bg-white text-primary hover:bg-transparent hover:text-white transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                {t.common.bookConsultation}
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
