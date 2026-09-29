import { Link } from "wouter";
import { Heart, ShieldCheck, MessageCircle, ChevronLeft, Users, Home as HomeIcon, Stethoscope } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import aboutImage from "@/assets/images/hero.png";
import { useSEO } from "@/hooks/use-seo";
import { useLanguage } from "@/lib/language-context";

const valueIcons = [
  <Heart className="w-6 h-6 text-primary" />,
  <ShieldCheck className="w-6 h-6 text-accent" />,
  <HomeIcon className="w-6 h-6 text-primary" />,
  <Users className="w-6 h-6 text-accent" />,
];
const valueAccents = ["primary", "accent", "primary", "accent"] as const;

export default function AboutPage() {
  const { t } = useLanguage();

  useSEO({
    path: "/about",
    title: "About Us | Umeed Care Center — Karachi",
    description: "Umeed means hope. Learn about Umeed Care Center's mission, values, and compassionate team providing orthotic & prosthetic care in Karachi, Pakistan.",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">

        {/* Page Hero */}
        <section className="bg-primary/5 border-b border-border/40 py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              {t.common.backHome}
            </Link>
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent mb-4">
                {t.aboutPage.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {t.aboutPage.titlePrefix}
                <span className="text-primary">{t.aboutPage.titleHighlight}</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {t.aboutPage.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="lg:w-1/2 space-y-6">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t.aboutPage.paragraph1}
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  {t.aboutPage.paragraph2}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg h-11 sm:h-12 px-6 text-sm font-semibold border border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t.common.bookConsultation}
                </Link>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={aboutImage}
                    alt="Umeed Care Center specialist helping a patient in Karachi, Pakistan"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Quote card — stacked below on mobile, overlapping the image on larger screens */}
                <div className="relative sm:-mt-10 mt-4 mx-auto sm:ml-6 sm:mr-0 max-w-sm bg-card border border-border/60 rounded-xl px-5 py-4">
                  <span className="font-serif text-3xl text-primary/40 leading-none">"</span>
                  <p className="text-sm sm:text-base font-serif text-foreground/80 leading-snug">
                    {t.aboutPage.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-14 sm:py-20 bg-card border-y border-border/40">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t.aboutPage.valuesTitlePrefix}<span className="text-primary">{t.aboutPage.valuesTitleHighlight}</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base">
                {t.aboutPage.valuesDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.aboutPage.values.map((value, i) => (
                <div key={i} className="bg-background p-6 rounded-2xl border border-border/50">
                  <div className={`w-12 h-12 rounded-full ${valueAccents[i] === "accent" ? "bg-accent/10" : "bg-primary/10"} flex items-center justify-center mb-4`}>
                    {valueIcons[i]}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
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
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg h-12 px-8 text-sm font-semibold border border-white bg-white text-primary hover:bg-transparent hover:text-white transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                {t.common.bookConsultation}
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg h-12 px-8 text-sm font-semibold border border-white/60 text-white hover:bg-white/10 transition-all duration-200"
              >
                <Stethoscope className="w-4 h-4" />
                {t.common.exploreServices}
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
