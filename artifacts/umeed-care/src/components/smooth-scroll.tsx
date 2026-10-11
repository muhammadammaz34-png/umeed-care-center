import { useEffect } from "react";
import { useLocation } from "wouter";
import Lenis from "@/vendor/lenis.mjs";

let lenis: Lenis | null = null;

/** Scroll to the top, smoothly when Lenis is active. */
export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.1 });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

/** Pause or resume smooth scrolling (used while modals are open). */
export function setScrollLocked(locked: boolean) {
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}

export default function SmoothScroll() {
  const [location] = useLocation();

  // Smooth scrolling (skipped for reduced-motion users and touch devices,
  // where native scrolling is already smooth).
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      anchors: { offset: -80 },
      prevent: (node: HTMLElement) => !!node.closest("[data-lenis-prevent], [role='dialog']"),
    });
    let raf = 0;
    const loop = (time: number) => {
      lenis?.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  // Start every page at the top.
  useEffect(() => {
    if (window.location.hash) return;
    if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  // Reveal-on-scroll for anything marked .reveal, including nodes added later.
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" },
    );
    const seen = new WeakSet<Element>();
    const scan = (root: ParentNode) => {
      root.querySelectorAll(".reveal:not(.is-in)").forEach((el) => {
        if (!seen.has(el)) {
          seen.add(el);
          io.observe(el);
        }
      });
    };
    scan(document);
    const mo = new MutationObserver(() => scan(document));
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
