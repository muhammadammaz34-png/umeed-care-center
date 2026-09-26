import { Link } from "wouter";
import { ChevronLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { useSEO } from "@/hooks/use-seo";
import { blogPosts } from "@/data/blog-posts";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  useSEO({
    path: "/blog",
    title: "Blog | Orthotic & Prosthetic Care Guides — Umeed Care Center",
    description: "Practical guides on prosthetics, orthotics, pediatric care, and diabetic foot health from Umeed Care Center's specialists in Karachi.",
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
                Practical guides on prosthetics, orthotics, pediatric care, and diabetic foot health from our specialists in Karachi.
              </p>
            </div>
          </div>
        </section>

        {/* Post grid */}
        <section className="py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden bg-card border border-border/50 card-tilt hover:border-primary/20"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                      <span className="text-primary font-semibold">{post.category}</span>
                      <span>&middot;</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="font-bold text-lg text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/40">
                      <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                        Read <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
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
