import { useState } from "react";
import { ChevronDown } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/923136422564?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.";

const faqs = [
  {
    question: "Where is Umeed Care Center located in Karachi?",
    answer: "Umeed Care Center is based in Karachi, Sindh, Pakistan. Message us on WhatsApp and we'll share the exact clinic address and directions for your appointment.",
  },
  {
    question: "Do you treat patients from outside Karachi?",
    answer: "Yes. We regularly see patients travelling from other cities across Sindh and Pakistan. WhatsApp us your details in advance so we can plan your visit, measurements, and fitting around your travel schedule.",
  },
  {
    question: "How long does it take to get a custom prosthetic or orthotic device?",
    answer: "Timelines depend on the type of device and complexity of the case — simple orthotics can be ready in a few days, while custom prosthetic limbs typically involve an assessment, casting, fabrication, and fitting over multiple visits. We'll give you a clear timeline after your initial consultation.",
  },
  {
    question: "Do you provide orthotic and prosthetic care for children?",
    answer: "Yes. Our pediatric orthotics and prosthetics program is designed specifically for infants, children, and teenagers, with regular sizing reviews as they grow.",
  },
  {
    question: "What conditions do your orthotic braces and supports treat?",
    answer: "Our orthotic devices support conditions including drop foot, scoliosis and spinal issues, post-stroke and cerebral palsy-related mobility challenges, joint instability, flat feet, plantar fasciitis, and diabetic foot complications, among others.",
  },
  {
    question: "How do I book a consultation at Umeed Care Center?",
    answer: "The fastest way is WhatsApp — tap \"Book a Consultation\" anywhere on this site and send us your details. We'll confirm a convenient appointment time and answer any initial questions before your visit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-14 sm:py-20 md:py-28 bg-background">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 scroll-animate opacity-0 transition-all duration-700 translate-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs sm:text-sm font-medium text-primary mb-4">
            Frequently Asked Questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Common Questions About{" "}
            <span className="text-primary">Our Karachi Clinic</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Answers to what patients usually ask before their first visit. Still have a question? Message us on WhatsApp.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border border-border/60 rounded-xl bg-card overflow-hidden"
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 text-sm sm:text-base font-semibold text-foreground"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  <ChevronDown className={`w-4 h-4 shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-64" : "max-h-0"}`}>
                  <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-lg h-11 sm:h-12 px-6 text-sm font-semibold border border-green-600 bg-green-600 text-white hover:bg-white hover:text-green-600 transition-all duration-200"
          >
            Ask Us a Question
          </a>
        </div>
      </div>
    </section>
  );
}

export { faqs };
