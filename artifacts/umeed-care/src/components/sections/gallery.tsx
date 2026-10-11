import { useState } from "react";
import img1 from "@/assets/gallery/img1.webp";
import img2 from "@/assets/gallery/img2.webp";
import img3 from "@/assets/gallery/img3.webp";
import img4 from "@/assets/gallery/img4.webp";
import img5 from "@/assets/gallery/img5.webp";
import img6 from "@/assets/gallery/img6.webp";
import img7 from "@/assets/gallery/img7.webp";
import img8 from "@/assets/gallery/img8.webp";
import img9 from "@/assets/gallery/img9.webp";
import img10 from "@/assets/gallery/img10.webp";
import img11 from "@/assets/gallery/img11.webp";
import img12 from "@/assets/gallery/img12.webp";
import img13 from "@/assets/gallery/img13.webp";
import img14 from "@/assets/gallery/img14.webp";
import img15 from "@/assets/gallery/img15.webp";
import img16 from "@/assets/gallery/img16.webp";
import img17 from "@/assets/gallery/img17.webp";
import img18 from "@/assets/gallery/img18.webp";
import img19 from "@/assets/gallery/img19.webp";
import img20 from "@/assets/gallery/img20.webp";
import img21 from "@/assets/gallery/img21.webp";
import img22 from "@/assets/gallery/img22.webp";
import img23 from "@/assets/gallery/img23.webp";
import { useLanguage } from "@/lib/language-context";

type Category = "All" | "Footwear" | "Orthotics" | "Prosthetics";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
  category: Category;
  span?: "tall" | "wide" | "normal";
}

const items: GalleryItem[] = [
  { src: img9, alt: "Prosthetic knee joint mechanism", title: "Prosthetic Joint", category: "Prosthetics", span: "tall" },
  { src: img4, alt: "Ankle-foot orthosis boot beige", title: "Ankle-Foot Orthosis Boot", category: "Orthotics", span: "tall" },
  { src: img3, alt: "Ankle-foot orthosis with blue splint worn by patient", title: "Custom Ankle Splint", category: "Orthotics" },
  { src: img2, alt: "Hand wrist orthosis colourful fabric support", title: "Wrist Orthosis", category: "Orthotics" },
  { src: img5, alt: "Green therapeutic sandals double strap", title: "Green Therapeutic Sandals", category: "Footwear", span: "wide" },
  { src: img6, alt: "Green diabetic sandals single strap", title: "Diabetic Sandals, Sage", category: "Footwear" },
  { src: img1, alt: "Black cross-strap orthotic sandals", title: "Cross-Strap Sandals", category: "Footwear" },
  { src: img8, alt: "Black platform orthotic sandals", title: "Platform Orthopaedic Sandals", category: "Footwear" },
  { src: img7, alt: "Heavy-duty black cross-strap sandals", title: "Heavy-Duty Sandals", category: "Footwear" },
  { src: img10, alt: "Black and white childrens orthotic sandals", title: "Paediatric Sandals", category: "Footwear" },
  { src: img11, alt: "Black two-strap therapeutic sandals", title: "Two-Strap Sandals", category: "Footwear" },
  { src: img12, alt: "Silicone prosthetic hand with zipper closure", title: "Silicone Prosthetic Hand", category: "Prosthetics", span: "tall" },
  { src: img13, alt: "Batch of custom ankle-foot orthoses", title: "Custom AFO Collection", category: "Orthotics", span: "wide" },
  { src: img14, alt: "Bilateral full-leg orthosis with hip support pink", title: "Full-Leg HKAFO, Pink", category: "Orthotics", span: "tall" },
  { src: img15, alt: "Dynamic finger extension hand orthosis worn on hand", title: "Dynamic Finger Orthosis", category: "Orthotics" },
  { src: img16, alt: "Lumbar back brace spinal support CAMP brand", title: "Lumbar Spinal Brace", category: "Orthotics" },
  { src: img17, alt: "Purple foot orthoses pair with black straps", title: "Foot Orthoses, Violet", category: "Orthotics" },
  { src: img18, alt: "Three knee braces ROM hinged different styles", title: "Knee Brace Range", category: "Orthotics", span: "wide" },
  { src: img19, alt: "Yellow bilateral leg orthosis with black straps", title: "Bilateral Leg Orthosis", category: "Orthotics" },
  { src: img20, alt: "Purple bilateral leg orthosis full length with hip support", title: "Full-Leg HKAFO, Violet", category: "Orthotics", span: "tall" },
  { src: img21, alt: "Walking boots and ankle braces collection", title: "Walking Boot Collection", category: "Orthotics", span: "wide" },
  { src: img22, alt: "Black wedge orthotic sandals in two sizes", title: "Wedge Sandals, Pair", category: "Footwear" },
  { src: img23, alt: "Paediatric leather orthotic boots tan and teal", title: "Paediatric Orthotic Boots", category: "Footwear", span: "wide" },
];

const categories: Category[] = ["All", "Footwear", "Orthotics", "Prosthetics"];

export default function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const facebookUrl = "https://www.facebook.com/profile.php?id=100054410172615";
  const { t } = useLanguage();

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);
  const itemLabel = (item: GalleryItem) => t.gallery.items[item.title] ?? item.title;

  return (
    <section id="gallery" className="py-16 sm:py-24 border-b border-border">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-10 reveal">
          <div className="block text-sm font-semibold text-primary mb-3">
            {t.gallery.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-serif mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            {t.gallery.description}
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-md text-sm font-semibold border transition-colors duration-200 ${
                active === cat
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-primary/30 text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {t.gallery.categories[cat]}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 reveal">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative overflow-hidden rounded-md cursor-zoom-in bg-card border border-border/40"
              onClick={() => setLightbox(item)}
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary/90 text-white mb-1.5">
                  {t.gallery.categories[item.category]}
                </span>
                <p className="text-white font-semibold text-sm leading-tight drop-shadow-md">
                  {itemLabel(item)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook CTA */}
        <div className="mt-12 reveal">
          <p className="text-muted-foreground text-sm mb-4">{t.gallery.ctaText}</p>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md h-12 px-8 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            {t.gallery.ctaButton}
          </a>
        </div>
      </div>

      {/* Lightbox — mobile-friendly */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[90vh] flex flex-col items-center cursor-default bg-black/0 sm:rounded-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center text-xl hover:bg-black/80 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label={t.gallery.close}
            >
              &times;
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full max-h-[78vh] sm:max-h-[80vh] object-contain"
            />
            <div className="w-full px-4 py-3 sm:py-4 text-center bg-black/60 backdrop-blur-sm">
              <span className="inline-block rounded-full px-3 py-0.5 text-xs font-semibold bg-primary text-white mr-2">
                {t.gallery.categories[lightbox.category]}
              </span>
              <span className="text-white font-semibold text-sm sm:text-base">{itemLabel(lightbox)}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
