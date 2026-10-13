import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import Gallery from "@/components/sections/gallery";
import { useSEO } from "@/hooks/use-seo";
import { useLanguage } from "@/lib/language-context";

export default function GalleryPage() {
  const { t } = useLanguage();

  useSEO({
    path: "/gallery",
    title: "Product Gallery: Orthotics, Prosthetics & Diabetic Footwear | Umeed Care Center",
    description:
      "See the AFO braces, spinal braces, prosthetic hands and joints, orthotic sandals and children's boots made by Umeed Care Center in Karachi.",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-primary/5 border-b border-border/40 py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors mb-6"
            >
              <ChevronLeft className="w-4 h-4" />
              {t.common.backHome}
            </Link>
            <div className="max-w-3xl">
              <span className="block text-sm font-semibold text-primary mb-3">{t.gallery.badge}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                {t.gallery.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {t.gallery.description}
              </p>
            </div>
          </div>
        </section>
        <Gallery full />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
