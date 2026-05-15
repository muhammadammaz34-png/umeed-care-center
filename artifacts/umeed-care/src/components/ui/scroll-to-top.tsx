import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    const onScroll = () => {
      const pastHero = hero
        ? hero.getBoundingClientRect().bottom < 0
        : window.scrollY > 400;
      setVisible(pastHero);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-50 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-primary/90 hover:scale-110 active:scale-95
        w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12
        ${visible ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-75 pointer-events-none"}`}
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
    </button>
  );
}
