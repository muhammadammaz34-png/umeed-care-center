import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Contact from "@/components/sections/contact";
import { useSEO, SITE_URL } from "@/hooks/use-seo";

export default function ContactPage() {
  useSEO({
    path: "/contact",
    title: "Contact Us | Umeed Care Center — Karachi",
    description: "Get in touch with Umeed Care Center in Karachi. Book a free consultation via WhatsApp, phone, or email for orthotic and prosthetic care.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Umeed Care Center",
      url: `${SITE_URL}/contact`,
      about: {
        "@type": "MedicalClinic",
        name: "Umeed Care Center",
        telephone: "+92-313-6422564",
        email: "shahsahab022@gmail.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karachi",
          addressRegion: "Sindh",
          addressCountry: "PK",
        },
      },
    },
  });

  useEffect(() => {
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
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">

        {/* Page Hero */}
        <section className="bg-primary/5 border-b border-border/40 py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent mb-4">
                Get in Touch
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Contact Umeed Care Center{" "}
                <span className="block text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium mt-1">Karachi, Pakistan</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Have a question or ready to book a consultation? Fill in the form below and we'll open WhatsApp with your details pre-filled.
              </p>
            </div>
          </div>
        </section>

        {/* Consultation form */}
        <Contact />

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
