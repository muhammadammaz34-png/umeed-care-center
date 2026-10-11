import { Link } from "wouter";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function CtaBand() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden bg-dark text-dark-foreground py-16 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 -left-32 h-[26rem] w-[26rem] rounded-full bg-primary/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-24 h-[24rem] w-[24rem] rounded-full bg-accent/25 blur-3xl" />
      <div className="container px-4 sm:px-6 mx-auto relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-balance">{t.common.readyTitle}</h2>
          <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed">{t.common.readyDescription}</p>
          <div className="mt-9 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              {t.common.bookConsultation}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
