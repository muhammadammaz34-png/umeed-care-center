import { useEffect } from "react";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Gallery from "@/components/sections/gallery";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Contact from "@/components/sections/contact";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";

export default function Home() {
  // Simple intersection observer for animations
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
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
