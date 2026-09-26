import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft, MapPin, MessageCircle, Mail, Facebook } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Contact from "@/components/sections/contact";
import { useSEO, SITE_URL } from "@/hooks/use-seo";

const WHATSAPP_URL = "https://wa.me/923136422564?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100054410172615";

const contactMethods = [
  {
    icon: <MessageCircle className="w-5 h-5 text-white" />,
    label: "WhatsApp",
    value: "+92 313 6422564",
    href: WHATSAPP_URL,
  },
  {
    icon: <Mail className="w-5 h-5 text-white" />,
    label: "Email",
    value: "shahsahab022@gmail.com",
    href: "mailto:shahsahab022@gmail.com",
  },
  {
    icon: <MapPin className="w-5 h-5 text-white" />,
    label: "Location",
    value: "Karachi, Sindh, Pakistan",
    href: undefined,
  },
  {
    icon: <Facebook className="w-5 h-5 text-white" />,
    label: "Facebook",
    value: "Umeed Care Center",
    href: FACEBOOK_URL,
  },
];

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
                Have a question or ready to book a consultation? Reach out via WhatsApp, phone, or email — our team responds quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact methods */}
        <section className="py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {contactMethods.map((method, i) => {
                const content = (
                  <div className="bg-card border border-border/50 rounded-2xl p-6 h-full flex flex-col items-start gap-3 card-tilt">
                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center">
                      {method.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">{method.label}</p>
                      <p className="font-semibold text-foreground break-words">{method.value}</p>
                    </div>
                  </div>
                );
                return method.href ? (
                  <a key={i} href={method.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
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
