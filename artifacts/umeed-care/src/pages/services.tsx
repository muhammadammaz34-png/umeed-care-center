import { useEffect } from "react";
import { Link } from "wouter";
import { MessageCircle, CheckCircle, ArrowRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import lowerLimbProsthetic from "@/assets/images/service-lower-limb-prosthetic.png";
import upperLimbProsthetic from "@/assets/images/service-upper-limb-prosthetic.png";
import pediatricOrthotics from "@/assets/images/service-pediatric-orthotics.png";
import spinalOrthotics from "@/assets/images/service-spinal-orthotics.png";
import lowerLimbOrthotics from "@/assets/images/service-lower-limb-orthotics.png";
import upperLimbOrthotics from "@/assets/images/service-upper-limb-orthotics.png";
import customFootOrthotics from "@/assets/images/service-custom-foot-orthotics.png";
import diabeticFootwear from "@/assets/images/service-diabetic-footwear.png";

const WHATSAPP_URL = "https://wa.me/923136422564?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.";

interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  whoItHelps: string;
  image: string;
}

const services: Service[] = [
  {
    id: "lower-limb-prosthetics",
    title: "Lower Limb Prosthetics",
    tagline: "Walk again with confidence",
    description: "Our lower limb prosthetics program provides custom-fabricated artificial legs, feet, and knee systems designed to match each patient's lifestyle, activity level, and body mechanics. Whether you are recovering from an amputation or seeking a replacement device, our certified prosthetists use the latest materials and techniques to ensure the best possible fit, comfort, and mobility.",
    benefits: [
      "Custom-fitted to your exact measurements",
      "Lightweight, durable materials",
      "Solutions for below-knee, above-knee, and hip disarticulation",
      "Dynamic and energy-return foot options",
      "Gait training support and follow-up care",
    ],
    whoItHelps: "Patients with lower limb amputations due to injury, diabetes, vascular disease, or congenital conditions.",
    image: lowerLimbProsthetic,
  },
  {
    id: "upper-limb-prosthetics",
    title: "Upper Limb Prosthetics",
    tagline: "Restore function and independence",
    description: "Regaining the use of your hands and arms changes everything. Our upper limb prosthetics range from passive cosmetic devices to body-powered and myoelectric systems, all precisely fabricated to restore your independence for daily tasks, work, and personal care. Each device is designed with both function and appearance in mind.",
    benefits: [
      "Cosmetic, body-powered, and functional options",
      "Solutions for partial hand, wrist, below-elbow, and above-elbow",
      "Lightweight and ergonomic designs",
      "Training provided for comfortable daily use",
      "Durable silicone and carbon components",
    ],
    whoItHelps: "Patients with upper limb amputations or limb differences at any level from finger to shoulder.",
    image: upperLimbProsthetic,
  },
  {
    id: "pediatric-orthotics-prosthetics",
    title: "Pediatric Orthotics & Prosthetics",
    tagline: "Growing with your child, step by step",
    description: "Children's bodies grow and change rapidly, and their orthotic and prosthetic needs are unique. Our specialists have dedicated experience working with infants, toddlers, and teenagers, providing gentle assessments and devices that support healthy development. We work closely with families and referring physicians to ensure the best outcomes.",
    benefits: [
      "Experienced pediatric specialists",
      "Regular sizing reviews as your child grows",
      "Comfortable, child-friendly materials and colours",
      "Full range from AFOs to prosthetic limbs",
      "Family-centred approach and education",
    ],
    whoItHelps: "Infants, children, and adolescents with congenital conditions, cerebral palsy, limb differences, or developmental issues requiring orthotic or prosthetic support.",
    image: pediatricOrthotics,
  },
  {
    id: "spinal-orthotics",
    title: "Spinal Orthotics",
    tagline: "Supporting your spine, protecting your future",
    description: "Spinal orthotics — including lumbar supports, thoracolumbosacral orthoses (TLSO), and scoliosis braces — are precisely fitted to immobilise, correct, or support the spine. Our clinicians conduct thorough assessments and work with your medical team to prescribe and fabricate the appropriate spinal device for your condition and recovery goals.",
    benefits: [
      "Conditions treated: scoliosis, kyphosis, fractures, post-surgical support",
      "Custom-moulded for maximum contact and effectiveness",
      "Breathable, low-profile designs for daily wear",
      "Coordination with your physiotherapist and surgeon",
      "Regular follow-up and adjustments",
    ],
    whoItHelps: "Patients with scoliosis, spinal fractures, disc conditions, post-surgical needs, or chronic back pain requiring external support.",
    image: spinalOrthotics,
  },
  {
    id: "lower-limb-orthotics",
    title: "Lower Limb Orthotics",
    tagline: "Walk better, live better",
    description: "Lower limb orthotics improve alignment, stability, and movement for patients with neurological or musculoskeletal conditions affecting the legs, knees, or ankles. From ankle-foot orthoses (AFOs) and hinged knee braces to full hip-knee-ankle-foot orthoses (HKAFOs), we fabricate and fit devices that enable our patients to stand, walk, and move with greater ease.",
    benefits: [
      "AFOs, KAFOs, HKAFOs, and knee braces",
      "Custom-fabricated and off-the-shelf options",
      "Conditions: drop foot, cerebral palsy, post-stroke, knee instability",
      "Dynamic and articulated designs for improved gait",
      "Lightweight thermoplastic and carbon fibre options",
    ],
    whoItHelps: "Patients with drop foot, stroke, cerebral palsy, muscular dystrophy, ligament instability, or post-surgical rehabilitation needs.",
    image: lowerLimbOrthotics,
  },
  {
    id: "upper-limb-orthotics",
    title: "Upper Limb Orthotics",
    tagline: "Precision support for hands, wrists, and arms",
    description: "Our upper limb orthotic services cover a comprehensive range of splints and braces for the hand, wrist, elbow, and shoulder. Whether you need a resting hand splint for nerve injury, a dynamic extension splint for tendon repair, or an elbow brace for post-fracture recovery, our team fabricates devices that protect healing tissues while maintaining as much function as possible.",
    benefits: [
      "Static and dynamic splints",
      "Conditions: carpal tunnel, tendon injuries, fractures, nerve palsy",
      "Wrist, elbow, shoulder, and full-arm solutions",
      "Thermoplastic and fabric-based options",
      "Occupational therapy coordination available",
    ],
    whoItHelps: "Patients with carpal tunnel syndrome, wrist fractures, tendon or nerve injuries, rheumatoid arthritis, or post-surgical arm conditions.",
    image: upperLimbOrthotics,
  },
  {
    id: "custom-foot-orthotics",
    title: "Custom Foot Orthotics",
    tagline: "Every step, perfectly supported",
    description: "Foot pain, flat feet, heel spurs, and poor arch support affect the entire body. Our custom foot orthotics are individually cast and fabricated from detailed measurements of your foot structure and gait. They fit inside your regular footwear and correct biomechanical imbalances to reduce pain and prevent long-term complications.",
    benefits: [
      "Full gait analysis and foot assessment",
      "Conditions: plantar fasciitis, flat feet, heel spurs, overpronation",
      "Slim-profile designs that fit standard shoes",
      "Rigid, semi-rigid, and soft shell options",
      "Durable and long-lasting materials",
    ],
    whoItHelps: "Anyone experiencing foot, ankle, knee, hip, or lower back pain related to abnormal foot mechanics or gait irregularities.",
    image: customFootOrthotics,
  },
  {
    id: "diabetic-footwear",
    title: "Diabetic & Pressure-Relief Footwear",
    tagline: "Protecting sensitive feet every day",
    description: "Diabetic neuropathy and poor circulation put feet at serious risk of ulcers, infections, and even amputation. Our specialist diabetic footwear — including custom therapeutic sandals, extra-depth shoes, and pressure-relief insoles — redistributes pressure away from high-risk areas, reduces friction, and keeps feet protected during daily life.",
    benefits: [
      "Pressure-mapping for ulcer-risk assessment",
      "Custom sandals, shoes, and insoles",
      "Seamless interiors to prevent irritation",
      "Extra-depth designs for swollen or deformed feet",
      "Prevention of diabetic foot complications",
    ],
    whoItHelps: "Patients with diabetes, peripheral neuropathy, foot ulcers, Charcot foot, or any condition requiring pressure relief and protective footwear.",
    image: diabeticFootwear,
  },
];

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });

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
      { threshold: 0.08 }
    );
    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">

        {/* Page Hero */}
        <section className="bg-primary/5 border-b border-border/40 py-14 sm:py-20">
          <div className="container px-4 sm:px-6 mx-auto">
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ChevronLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="max-w-3xl">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-4">
                Orthotic &amp; Prosthetic Services — Karachi, Pakistan
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Comprehensive Care{" "}
                <span className="text-primary italic font-serif font-normal">Under One Roof</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Umeed Care Center offers a full spectrum of orthotic and prosthetic services in Karachi. Every solution is custom-fitted, clinically assessed, and designed around your individual needs and goals.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 mt-7">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full h-11 sm:h-12 px-6 text-sm font-semibold shadow-md border-2 border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book a Consultation
                </a>
                <a
                  href="tel:+923136422564"
                  className="inline-flex items-center justify-center gap-2 rounded-full h-11 sm:h-12 px-6 text-sm font-semibold border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Call +92 313 6422564
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick-jump nav */}
        <div className="sticky top-16 sm:top-20 z-30 bg-background/95 backdrop-blur border-b border-border/40 shadow-sm">
          <div className="container px-4 sm:px-6 mx-auto">
            <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="shrink-0 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-150 whitespace-nowrap"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Service sections */}
        <div className="divide-y divide-border/40">
          {services.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className="py-14 sm:py-20 scroll-mt-32"
            >
              <div className="container px-4 sm:px-6 mx-auto">
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center scroll-animate opacity-0 transition-all duration-700 translate-y-6`}>

                  {/* Image */}
                  <div className="w-full lg:w-2/5 shrink-0">
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-md bg-muted">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">{service.tagline}</p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">{service.description}</p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Key Benefits</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((b, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Who it helps */}
                    <div className="rounded-xl bg-primary/5 border border-primary/10 px-4 py-3 mb-6">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Who This Helps</p>
                      <p className="text-sm text-muted-foreground">{service.whoItHelps}</p>
                    </div>

                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      Enquire about this service <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="bg-primary py-14 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="container px-4 sm:px-6 mx-auto text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">Ready to Get Started?</h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto text-sm sm:text-base">
              Contact our team in Karachi to book your consultation. We'll assess your needs and recommend the right solution for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 text-sm font-semibold border-2 border-white bg-white text-primary hover:bg-transparent hover:text-white transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us Now
              </a>
              <a
                href="tel:+923136422564"
                className="inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 text-sm font-semibold border-2 border-white/60 text-white hover:bg-white/10 transition-all duration-200"
              >
                Call +92 313 6422564
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
