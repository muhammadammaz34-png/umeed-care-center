import { useEffect } from "react";
import Hero from "@/components/sections/hero";
import TrustStrip from "@/components/sections/trust-strip";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Gallery from "@/components/sections/gallery";
import Testimonials from "@/components/sections/testimonials";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Contact from "@/components/sections/contact";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { useSEO } from "@/hooks/use-seo";

export default function Home() {
  useSEO({
    path: "/",
    title: "Umeed Care Center | Orthotics & Prosthetics Karachi",
    description: "Expert orthotic & prosthetic clinic in Karachi. Custom prosthetic limbs, orthotics, spinal braces & diabetic footwear. Book a consultation: +92 313 6422564.",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustStrip />
        <About />
        <Process />
        <Services />
        <Gallery />
        <Testimonials />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
