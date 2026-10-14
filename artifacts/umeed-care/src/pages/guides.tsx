import { Link } from "wouter";
import { ChevronLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { useSEO } from "@/hooks/use-seo";
import { useLanguage } from "@/lib/language-context";
import { guides } from "@/data/guides";

export default function GuidesPage() {
  const { language, t } = useLanguage();
  const ur = language === "ur";

  useSEO({
    path: "/guides",
    title: "Orthotic & Prosthetic Guides for Karachi | Umeed Care Center",
    description:
      "Plain answers on artificial legs, KAFO and AFO braces, clubfoot shoes, scoliosis braces and diabetic footwear, and how home visits work in Karachi.",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-primary/5 border-b border-border/40 py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              {t.common.backHome}
            </Link>
            <div className="max-w-3xl">
              <span className="block text-sm font-semibold text-primary mb-3">{ur ? "گائیڈز" : "Guides"}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {ur ? "آرتھوٹکس اور پروستھیٹکس کے سادہ جوابات" : "Plain answers on orthotics and prosthetics"}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {ur
                  ? "یہ گائیڈز انگریزی میں ہیں۔ ہر گائیڈ کے شروع میں مختصر جواب ہے، پھر تفصیل اور عام سوالات۔"
                  : "Each guide starts with a short answer, then the detail and the questions patients ask most."}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {guides.map((g) => (
                <Link
                  key={g.slug}
                  href={`/guides/${g.slug}`}
                  className="group flex flex-col rounded-2xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-colors"
                >
                  <span className="text-xs font-semibold text-primary mb-2">{g.category}</span>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground leading-snug mb-2">{g.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{g.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {ur ? "پڑھیں" : "Read the guide"}
                    <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${ur ? "-scale-x-100" : ""}`} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
