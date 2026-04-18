import photosImg from "@assets/Screenshot_2026-04-18_230450_1776538457083.png";

export default function Gallery() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=100054410172615";

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-14 scroll-animate opacity-0 transition-all duration-700 translate-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-4">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight font-serif mb-4">
            Crafted for Comfort & Mobility
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base md:text-lg">
            From custom orthotic footwear to specialized pressure-relief sandals — every product is designed with care and precision to improve quality of life.
          </p>
        </div>

        <div className="scroll-animate opacity-0 transition-all duration-1000 translate-y-8">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-border/40 bg-card max-w-3xl mx-auto">
            <img
              src={photosImg}
              alt="Umeed Care Center orthotic and prosthetic product samples"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="text-center mt-8">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-base transition-colors"
            >
              See all photos on our Facebook page &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
