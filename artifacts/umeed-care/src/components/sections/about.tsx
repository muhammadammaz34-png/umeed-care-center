import aboutImage from "@/assets/images/service-lower-limb-prosthetic.webp";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-24 border-b border-border">
      <div className="container px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {t.about.storyTitlePrefix}
            {t.about.storyTitleHighlight}
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
          </div>

          <dl className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-5 max-w-xl">
            <div className="border-t border-border pt-4">
              <dt className="font-semibold text-foreground">{t.about.card1Title}</dt>
              <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{t.about.card1Text}</dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="font-semibold text-foreground">{t.about.card2Title}</dt>
              <dd className="mt-1 text-sm text-muted-foreground leading-relaxed">{t.about.card2Text}</dd>
            </div>
          </dl>
        </div>

        <figure className="reveal">
          <img
            src={aboutImage}
            width={1100}
            height={770}
            alt="Custom-fitted prosthetic leg at Umeed Care Center, Karachi"
            className="w-full h-auto aspect-[4/3] object-cover rounded-md"
            loading="lazy"
            decoding="async"
          />
          <figcaption className="mt-3 text-sm text-muted-foreground">{t.about.quote}</figcaption>
        </figure>
      </div>
    </section>
  );
}
