import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { guides } from "@/data/guides";
import { useLanguage } from "@/lib/language-context";

export default function GuidesTeaser() {
  const { language } = useLanguage();
  const ur = language === "ur";
  return (
    <section className="py-16 sm:py-20 border-b border-border" aria-labelledby="guides-heading">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-2xl mb-8">
          <span className="block text-sm font-semibold text-primary mb-3">{ur ? "گائیڈز" : "Guides"}</span>
          <h2 id="guides-heading" className="text-3xl md:text-4xl font-bold tracking-tight font-serif mb-3">
            {ur ? "پہلے سمجھیں، پھر فیصلہ کریں" : "Understand first, then decide"}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            {ur
              ? "مصنوعی ٹانگ، بریسز اور ذیابیطس کے جوتوں کے سادہ جوابات (انگریزی میں)۔"
              : "Plain answers on artificial legs, braces and diabetic footwear, and how our home visits work."}
          </p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" dir="ltr">
          {guides.slice(0, 6).map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="flex h-full items-start justify-between gap-3 rounded-xl border border-border/60 bg-card p-4 font-semibold text-foreground hover:border-primary/40 hover:text-primary transition-colors"
              >
                <span>{g.title}</span>
                <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/guides" className="mt-6 inline-flex text-sm font-semibold text-primary hover:underline">
          {ur ? "تمام گائیڈز دیکھیں" : "See all guides"}
        </Link>
      </div>
    </section>
  );
}
