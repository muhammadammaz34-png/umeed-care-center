import { useState } from "react";
import img1 from "@assets/612021541_1373178954505764_2175927691950045351_n_1776608965304.jpg";
import img2 from "@assets/616725073_1381247403698919_9159917382080445366_n_1776608965305.jpg";
import img3 from "@assets/646132814_1419189679904691_9186130865574833926_n_1776608965305.jpg";
import img4 from "@assets/647209695_1419188866571439_341363738261717634_n_1776608965306.jpg";
import img5 from "@assets/653261800_1428209065669419_3834283093288447930_n_1776608965306.jpg";
import img6 from "@assets/654042195_1428208942336098_5926183995195247155_n_1776608965307.jpg";
import img7 from "@assets/662354061_1443628920794100_7635063448950079355_n_1776608965307.jpg";
import img8 from "@assets/662643985_1443629034127422_9152001050772943340_n_1776608965308.jpg";
import img9 from "@assets/662718373_1443628234127502_476574193512134838_n_1776608965308.jpg";
import img10 from "@assets/666677563_1443629707460688_2763765736026044889_n_1776608965308.jpg";
import img11 from "@assets/669795209_1449074206916238_5506623007269071269_n_1776608965308.jpg";
import img12 from "@assets/47153120_1233174810166406_5230395019696799744_n_1776609811097.jpg";
import img13 from "@assets/48192535_1242383062578914_4472969715911753728_n_1776609811097.jpg";
import img14 from "@assets/479670652_1120055653151430_7010248175547220166_n_1776609811098.jpg";
import img15 from "@assets/480087096_1120037679819894_6633528697134854108_n_1776609811098.jpg";
import img16 from "@assets/480277288_1121874436302885_8918119650455429917_n_1776609811098.jpg";
import img17 from "@assets/480279584_1122580832898912_5657396072157540807_n_1776609811098.jpg";
import img18 from "@assets/480346591_1121874206302908_7237530190157909665_n_1776609811099.jpg";
import img19 from "@assets/480513640_1122584949565167_6470524271491016156_n_1776609811099.jpg";
import img20 from "@assets/480552562_1122580806232248_1128370728482231093_n_1776609811100.jpg";
import img21 from "@assets/480749826_1121874242969571_2627881248593712257_n_1776609811100.jpg";
import img22 from "@assets/506793321_3249070958576771_9142112043904167513_n_1776609811100.jpg";
import img23 from "@assets/mmm_1776610475278.jpeg";

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
  { src: img6, alt: "Green diabetic sandals single strap", title: "Diabetic Sandals — Sage", category: "Footwear" },
  { src: img1, alt: "Black cross-strap orthotic sandals", title: "Cross-Strap Sandals", category: "Footwear" },
  { src: img8, alt: "Black platform orthotic sandals", title: "Platform Orthopaedic Sandals", category: "Footwear" },
  { src: img7, alt: "Heavy-duty black cross-strap sandals", title: "Heavy-Duty Sandals", category: "Footwear" },
  { src: img10, alt: "Black and white childrens orthotic sandals", title: "Paediatric Sandals", category: "Footwear" },
  { src: img11, alt: "Black two-strap therapeutic sandals", title: "Two-Strap Sandals", category: "Footwear" },
  { src: img12, alt: "Silicone prosthetic hand with zipper closure", title: "Silicone Prosthetic Hand", category: "Prosthetics", span: "tall" },
  { src: img13, alt: "Batch of custom ankle-foot orthoses", title: "Custom AFO Collection", category: "Orthotics", span: "wide" },
  { src: img14, alt: "Bilateral full-leg orthosis with hip support pink", title: "Full-Leg HKAFO — Pink", category: "Orthotics", span: "tall" },
  { src: img15, alt: "Dynamic finger extension hand orthosis worn on hand", title: "Dynamic Finger Orthosis", category: "Orthotics" },
  { src: img16, alt: "Lumbar back brace spinal support CAMP brand", title: "Lumbar Spinal Brace", category: "Orthotics" },
  { src: img17, alt: "Purple foot orthoses pair with black straps", title: "Foot Orthoses — Violet", category: "Orthotics" },
  { src: img18, alt: "Three knee braces ROM hinged different styles", title: "Knee Brace Range", category: "Orthotics", span: "wide" },
  { src: img19, alt: "Yellow bilateral leg orthosis with black straps", title: "Bilateral Leg Orthosis", category: "Orthotics" },
  { src: img20, alt: "Purple bilateral leg orthosis full length with hip support", title: "Full-Leg HKAFO — Violet", category: "Orthotics", span: "tall" },
  { src: img21, alt: "Walking boots and ankle braces collection", title: "Walking Boot Collection", category: "Orthotics", span: "wide" },
  { src: img22, alt: "Black wedge orthotic sandals in two sizes", title: "Wedge Sandals — Pair", category: "Footwear" },
  { src: img23, alt: "Paediatric leather orthotic boots tan and teal", title: "Paediatric Orthotic Boots", category: "Footwear", span: "wide" },
];

const categories: Category[] = ["All", "Footwear", "Orthotics", "Prosthetics"];

export default function Gallery() {
  const [active, setActive] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const facebookUrl = "https://www.facebook.com/profile.php?id=100054410172615";

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, hsl(120 58% 40%) 1px, transparent 0)", backgroundSize: "28px 28px" }}
      />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 scroll-animate opacity-0 transition-all duration-700 translate-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-serif mb-4">
            Crafted for Comfort &amp; Mobility
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            From custom orthotic footwear to prosthetic components — every product is designed with care and precision to restore independence and improve quality of life.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 scroll-animate opacity-0 transition-all duration-700 translate-y-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border-2 transition-all duration-200 ${
                active === cat
                  ? "bg-primary border-primary text-white shadow-md"
                  : "bg-white border-primary/30 text-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 scroll-animate opacity-0 transition-all duration-1000 translate-y-8">
          {filtered.map((item, i) => (
            <div
              key={i}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-md cursor-zoom-in bg-card border border-border/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => setLightbox(item)}
            >
              <div className="overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="inline-block self-start rounded-full px-2.5 py-0.5 text-xs font-semibold bg-primary/90 text-white mb-1.5">
                  {item.category}
                </span>
                <p className="text-white font-semibold text-sm leading-tight drop-shadow-md">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook CTA */}
        <div className="text-center mt-12 scroll-animate opacity-0 transition-all duration-700 translate-y-8">
          <p className="text-muted-foreground text-sm mb-4">Want to see more of our work?</p>
          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 text-sm font-semibold shadow-md border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary transition-all duration-200"
          >
            See all photos on Facebook &rarr;
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
            className="relative w-full sm:max-w-3xl max-h-[92vh] sm:max-h-[90vh] flex flex-col items-center cursor-default bg-black/0 rounded-t-2xl sm:rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center text-xl hover:bg-black/80 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close"
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
                {lightbox.category}
              </span>
              <span className="text-white font-semibold text-sm sm:text-base">{lightbox.title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
