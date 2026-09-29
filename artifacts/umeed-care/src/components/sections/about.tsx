import { Heart, ShieldCheck } from "lucide-react";
import aboutImage from "@/assets/images/service-lower-limb-prosthetic.png";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 bg-background relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2 space-y-8 scroll-animate opacity-0 transition-all duration-1000 translate-y-8 data-[state=visible]:translate-y-0">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t.about.storyTitlePrefix}<span className="text-primary">{t.about.storyTitleHighlight}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {t.about.paragraph1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.about.paragraph2}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">{t.about.card1Title}</h3>
                  <p className="text-sm text-muted-foreground">{t.about.card1Text}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">{t.about.card2Title}</h3>
                  <p className="text-sm text-muted-foreground">{t.about.card2Text}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full scroll-animate opacity-0 transition-all duration-1000 delay-200 translate-y-8 data-[state=visible]:translate-y-0">
            <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src={aboutImage}
                alt="Custom-fitted prosthetic care at Umeed Care Center, Karachi"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote card — stacked below on mobile, overlapping the image on larger screens */}
            <div className="relative sm:-mt-10 mt-4 mx-auto sm:ml-6 sm:mr-0 max-w-sm bg-card border border-border/60 rounded-xl px-5 py-4">
              <span className="font-serif text-3xl text-primary/40 leading-none">"</span>
              <p className="text-sm sm:text-base font-serif text-foreground/80 leading-snug">
                {t.about.quote}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
