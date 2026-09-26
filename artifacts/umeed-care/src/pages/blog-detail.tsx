import { useEffect } from "react";
import { Link, useParams, useLocation } from "wouter";
import { ChevronLeft, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { blogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { useSEO, SITE_URL } from "@/hooks/use-seo";

const WHATSAPP_URL = "https://wa.me/923136422564?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogDetailPage() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const post = getBlogPostBySlug(params.slug);

  useSEO({
    path: `/blog/${params.slug}`,
    title: post ? `${post.title} | Umeed Care Center` : "Article Not Found | Umeed Care Center",
    description: post ? post.metaDescription : "This article could not be found.",
    noindex: !post,
    jsonLd: post
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.metaDescription,
          image: `${SITE_URL}${post.coverImage}`,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: "Umeed Care Center",
          },
          publisher: {
            "@type": "MedicalClinic",
            name: "Umeed Care Center",
          },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
        }
      : undefined,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [params.slug]);

  useEffect(() => {
    if (!post) {
      navigate("/blog");
    }
  }, [post, navigate]);

  if (!post) return null;

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

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
                <span>{formatDate(post.date)}</span>
                <span>&middot;</span>
                <span>{post.readTime}</span>
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
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-muted mb-10">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <article className="prose prose-neutral max-w-none">
                {post.content.map((block, i) => {
                  if (block.type === "heading") {
                    return (
                      <h2 key={i} className="text-xl sm:text-2xl font-bold text-foreground mt-8 mb-3">
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "list") {
                    return (
                      <ul key={i} className="space-y-2 my-4 list-disc pl-5">
                        {block.items?.map((item, j) => (
                          <li key={j} className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4">
                      {block.text}
                    </p>
                  );
                })}
              </article>

              <div className="mt-10 pt-8 border-t border-border/40">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg h-11 sm:h-12 px-6 text-sm font-semibold border border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book a Consultation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Other posts */}
        <section className="py-14 sm:py-20 bg-card border-y border-border/40">
          <div className="container px-4 sm:px-6 mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">More Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-2xl overflow-hidden bg-background border border-border hover:border-primary/30 transition-colors"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.coverImage}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                View All Articles <ArrowRight className="w-4 h-4" />
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
