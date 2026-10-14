import { useEffect } from "react";
import { Link, useParams } from "wouter";
import { ChevronLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { useSEO, SITE_URL } from "@/hooks/use-seo";
import { useLanguage } from "@/lib/language-context";
import { getGuide, guides } from "@/data/guides";
import { services } from "@/data/services";
import NotFound from "@/pages/not-found";

const WHATSAPP = "https://wa.me/923136422564";

export default function GuideDetailPage() {
  const params = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const ur = language === "ur";
  const guide = getGuide(params.slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [params.slug]);

  useSEO({
    path: `/guides/${params.slug}`,
    title: guide ? guide.seoTitle : "Guide | Umeed Care Center",
    description: guide ? guide.description : "Umeed Care Center guide.",
    noindex: !guide,
    jsonLd: guide
      ? {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
                { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
                { "@type": "ListItem", position: 3, name: guide.title, item: `${SITE_URL}/guides/${guide.slug}` },
              ],
            },
            {
              "@type": "Article",
              headline: guide.title,
              description: guide.description,
              dateModified: guide.updated,
              datePublished: guide.updated,
              inLanguage: "en",
              mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
              author: { "@type": "Organization", name: "Umeed Care Center", url: `${SITE_URL}/` },
              publisher: { "@type": "MedicalBusiness", name: "Umeed Care Center", url: `${SITE_URL}/` },
              speakable: { "@type": "SpeakableSpecification", cssSelector: [".guide-answer"] },
            },
            {
              "@type": "FAQPage",
              mainEntity: guide.faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }
      : undefined,
  });

  if (!guide) return <NotFound />;

  const service = services.find((s) => s.id === guide.serviceId);
  const others = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);
  const waText = encodeURIComponent(`Hello, I read your guide "${guide.title}" and would like to book a home visit in Karachi.`);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-primary/5 border-b border-border/40 py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <Link href="/guides" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              {ur ? "تمام گائیڈز" : "All guides"}
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-medium text-primary">
                  {guide.category}
                </span>
                <span>{ur ? "اپ ڈیٹ:" : "Updated"} {guide.updated}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">{guide.title}</h1>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="max-w-3xl mx-auto" dir="ltr">
              <div className="guide-answer rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:p-6 mb-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Short answer</p>
                <p className="text-base sm:text-lg text-foreground leading-relaxed">{guide.answer}</p>
              </div>

              <article className="space-y-9">
                {guide.sections.map((s) => (
                  <div key={s.heading}>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">{s.heading}</h2>
                    {s.paragraphs.map((p) => (
                      <p key={p} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
                    ))}
                    {s.list.length > 0 && (
                      <ul className="list-disc ps-5 space-y-1.5 text-muted-foreground leading-relaxed">
                        {s.list.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </article>

              <div className="mt-12">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4">Frequently asked questions</h2>
                <div className="space-y-4">
                  {guide.faqs.map((f) => (
                    <div key={f.q} className="rounded-xl border border-border/50 bg-card p-5">
                      <h3 className="font-semibold text-foreground mb-1.5">{f.q}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="mt-8 text-xs text-muted-foreground">
                This guide is general information, not medical advice. Your doctor and specialist decide what is right for you.
              </p>

              <div className="mt-10 pt-8 border-t border-border/40 flex flex-col sm:flex-row gap-3">
                <a
                  href={`${WHATSAPP}?text=${waText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md h-11 sm:h-12 px-6 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book a free home consultation
                </a>
                {service && (
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center justify-center rounded-md h-11 sm:h-12 px-6 text-sm font-semibold border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {service.title}
                  </Link>
                )}
                {guide.blogSlug && (
                  <Link
                    href={`/blog/${guide.blogSlug}`}
                    className="inline-flex items-center justify-center rounded-md h-11 sm:h-12 px-6 text-sm font-semibold border border-border text-foreground hover:border-primary transition-colors"
                  >
                    Price guide
                  </Link>
                )}
              </div>

              <div className="mt-12">
                <h2 className="text-lg font-bold text-foreground mb-3">More guides</h2>
                <ul className="space-y-2">
                  {others.map((g) => (
                    <li key={g.slug}>
                      <Link href={`/guides/${g.slug}`} className="text-primary hover:underline">
                        {g.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
