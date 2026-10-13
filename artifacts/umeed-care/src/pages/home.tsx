import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Gallery from "@/components/sections/gallery";
import WhyChooseUs from "@/components/sections/why-choose-us";
import FAQ, { faqs } from "@/components/sections/faq";
import Contact from "@/components/sections/contact";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { useSEO } from "@/hooks/use-seo";

export default function Home() {
  useSEO({
    path: "/",
    title: "Umeed Care Center | Orthotics & Prosthetics Karachi",
    description: "Orthotic & prosthetic home service in Karachi. Custom prosthetic limbs, orthotics, spinal braces & diabetic footwear. Book a consultation: +92 313 6422564.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  });


  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Process />
        <Gallery />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
