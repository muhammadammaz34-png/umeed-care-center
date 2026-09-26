import { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "wouter";
import { ChevronLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { fetchBlogPostBySlug, type ContentfulBlogPost } from "@/lib/contentful";
import { renderRichText } from "@/lib/render-rich-text";
import { useSEO, SITE_URL } from "@/hooks/use-seo";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogDetailPage() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const [post, setPost] = useState<ContentfulBlogPost | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "not-found" | "error">("loading");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    fetchBlogPostBySlug(params.slug)
      .then((data) => {
        if (cancelled) return;
        if (data) {
          setPost(data);
          setStatus("ready");
        } else {
          setStatus("not-found");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, [params.slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [params.slug]);

  useEffect(() => {
    if (status === "not-found") {
      navigate("/blog");
    }
  }, [status, navigate]);

  useSEO({
    path: `/blog/${params.slug}`,
    title: post ? `${post.title} | Umeed Care Center` : "Article | Umeed Care Center",
    description: post ? post.excerpt : "Umeed Care Center blog article.",
    noindex: status !== "ready",
    jsonLd: post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: post.coverImageUrl,
          datePublished: post.publishedDate,
          author: { "@type": "Organization", name: "Umeed Care Center" },
          publisher: { "@type": "MedicalClinic", name: "Umeed Care Center" },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        }
      : undefined,
  });

  if (status === "loading") {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow py-24">
          <div className="container px-4 sm:px-6 mx-auto max-w-3xl animate-pulse space-y-4">
            <div className="h-4 w-32 bg-muted rounded" />
            <div className="h-10 w-3/4 bg-muted rounded" />
            <div className="aspect-[16/9] bg-muted rounded-2xl" />
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">

        {/* Page Hero */}
        <section className="bg-primary/5 border-b border-border/40 py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-medium text-primary">
                  {post.category}
                </span>
                <span>{formatDate(post.publishedDate)}</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Cover image + content */}
        <section className="py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="max-w-3xl mx-auto">
              {post.coverImageUrl && (
                <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-muted mb-10">
                  <img
                    src={post.coverImageUrl}
                    alt={post.coverImageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <article>
                {renderRichText(post.body)}
              </article>

              <div className="mt-10 pt-8 border-t border-border/40">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg h-11 sm:h-12 px-6 text-sm font-semibold border border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book a Consultation
                </Link>
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
