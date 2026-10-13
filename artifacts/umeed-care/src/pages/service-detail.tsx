import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "wouter";
import { MessageCircle, CheckCircle, ArrowRight, ChevronLeft, ChevronDown, BookOpen } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import CtaBand from "@/components/ui/cta-band";
import ServicePackages from "@/components/sections/service-packages";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { services, getServiceById, seoTitles } from "@/data/services";
import { useSEO, SITE_URL } from "@/hooks/use-seo";
import { useLanguage } from "@/lib/language-context";

// Maps a service to its matching in-depth blog guide, so each service page
// links out to longer-form content and each blog post's traffic can flow
// back to the service that converts it — internal linking that reinforces
// topical relevance for both pages instead of leaving them isolated.
const relatedArticles: Record<string, { slug: string; title: string; titleUr: string }> = {
  "lower-limb-prosthetics": {
    slug: "prosthetic-leg-price-pakistan",
    title: "Prosthetic Leg Price in Pakistan: What Determines the Cost",
    titleUr: "پاکستان میں مصنوعی ٹانگ کی قیمت کیا طے کرتی ہے",
  },
  "lower-limb-orthotics": {
    slug: "afo-brace-foot-drop-karachi",
    title: "AFO Brace for Foot Drop: Types, Cost & What to Expect",
    titleUr: "فٹ ڈراپ کے لیے اے ایف او بریس: اقسام، قیمت اور توقعات",
  },
  "pediatric-orthotics-prosthetics": {
    slug: "does-my-child-need-orthotics",
    title: "Does My Child Need Orthotics? A Parent's Guide",
    titleUr: "کیا میرے بچے کو آرتھوٹکس کی ضرورت ہے؟ والدین کے لیے رہنما",
  },
};

export default function ServiceDetailPage() {
  const params = useParams<{ id: string }>();
  const [, navigate] = useLocation();
  const service = getServiceById(params.id);
  const { language, t } = useLanguage();

  useSEO({
    path: `/services/${params.id}`,
    title: service ? (seoTitles[service.id] ?? `${service.title} in Karachi | Umeed Care Center`) : "Service Not Found | Umeed Care Center",
    description: service
      ? `${service.shortDescription} Serving ${service.whoItHelps.charAt(0).toLowerCase()}${service.whoItHelps.slice(1)} Book a consultation at Umeed Care Center, Karachi.`
      : "This service could not be found.",
    noindex: !service,
    jsonLd: service
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
                { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_URL}/services/${service.id}` },
              ],
            },
            {
              "@type": "MedicalTherapy",
              name: service.title,
              description: service.description,
              url: `${SITE_URL}/services/${service.id}`,
              provider: {
                "@type": "MedicalBusiness",
                name: "Umeed Care Center",
                telephone: "+92-313-6422564",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Karachi",
                  addressRegion: "Sindh",
                  addressCountry: "PK",
                },
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: service.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ],
        }
      : undefined,
  });

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

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
  const title = language === "ur" ? service.titleUr : service.title;
  const tagline = language === "ur" ? service.taglineUr : service.tagline;
  const shortDescription = language === "ur" ? service.shortDescriptionUr : service.shortDescription;
  const description = language === "ur" ? service.descriptionUr : service.description;
  const benefits = language === "ur" ? service.benefitsUr : service.benefits;
  const whoItHelps = language === "ur" ? service.whoItHelpsUr : service.whoItHelps;
  const faqs = language === "ur" ? service.faqsUr : service.faqs;
  const relatedArticle = relatedArticles[service.id];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">

        {/* Page Hero */}
        <section className="relative overflow-hidden bg-dark text-dark-foreground">
          <img
            src={service.image}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-50"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/10" />
          <div className="container px-4 sm:px-6 mx-auto relative py-16 sm:py-24 lg:py-28">
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-white/65 hover:text-white transition-colors mb-8">
              <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
              {t.serviceDetail.backAll}
            </Link>
            <div className="max-w-3xl">
              <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-5">
                <span className="h-px w-8 bg-primary" aria-hidden="true" />
                {tagline}
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-balance">
                {title}
              </h1>
              <p className="mt-3 text-lg sm:text-xl text-primary font-medium">{t.serviceDetail.inKarachi}</p>
              <p className="mt-6 text-base sm:text-lg text-white/75 max-w-2xl leading-relaxed">
                {shortDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mt-9">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-7 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  {t.common.bookConsultation}
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
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">{tagline}</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{t.serviceDetail.aboutTitle}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">{description}</p>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">{t.serviceDetail.keyBenefits}</h3>
                  <ul className="space-y-2">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Who it helps */}
                <div className="rounded-xl bg-primary/5 border border-primary/10 px-4 py-3 mb-6">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{t.serviceDetail.whoHelps}</p>
                  <p className="text-sm text-muted-foreground">{whoItHelps}</p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  {t.serviceDetail.enquire} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ServicePackages serviceId={service.id} serviceTitle={title} />

        {/* FAQ */}
        <section className="py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">{t.serviceDetail.faqTitle}</h2>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div
                    key={i}
                    className="border border-border/60 rounded-xl bg-card overflow-hidden"
                    onMouseEnter={() => setOpenFaqIndex(i)}
                  >
                    <button
                      type="button"
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 text-sm sm:text-base font-semibold text-foreground"
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      {faq.question}
                      <ChevronDown className={`w-4 h-4 shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64" : "max-h-0"}`}>
                      <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Related reading */}
        {relatedArticle && (
          <section className="pb-14 sm:pb-20">
            <div className="container px-4 sm:px-6 mx-auto">
              <div className="max-w-3xl mx-auto">
                <Link
                  href={`/blog/${relatedArticle.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card px-5 py-4 hover:border-primary/30 transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                      {language === "ur" ? "مزید پڑھیں" : "Related reading"}
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {language === "ur" ? relatedArticle.titleUr : relatedArticle.title}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Other services */}
        <section className="py-14 sm:py-20 bg-card border-y border-border/40">
          <div className="container px-4 sm:px-6 mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">{t.serviceDetail.exploreOthers}</h2>
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
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                      {language === "ur" ? s.titleUr : s.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                {t.serviceDetail.viewAll} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <CtaBand />

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
