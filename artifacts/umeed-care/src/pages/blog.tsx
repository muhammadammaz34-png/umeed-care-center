import { Link } from "wouter";
import { MessageCircle, ChevronLeft, Newspaper } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { useSEO } from "@/hooks/use-seo";

const WHATSAPP_URL = "https://wa.me/923136422564?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.";

export default function BlogPage() {
  useSEO({
    path: "/blog",
    title: "Blog | Umeed Care Center — Karachi",
    description: "Articles, guides, and updates from Umeed Care Center's orthotic and prosthetic specialists in Karachi. Coming soon.",
    noindex: true,
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
              Back to Home
            </Link>
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent mb-4">
                Umeed Care Center Blog
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Insights on{" "}
                <span className="text-primary">Mobility &amp; Care</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Articles, guides, and updates from our orthotic and prosthetic specialists in Karachi.
              </p>
            </div>
          </div>
        </section>

        {/* Empty state */}
        <section className="py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="max-w-md mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Newspaper className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3">Coming Soon</h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-8">
                We're preparing helpful articles on orthotic and prosthetic care, recovery tips, and patient stories. Check back soon.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg h-11 sm:h-12 px-6 text-sm font-semibold border border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                Ask Us a Question
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
