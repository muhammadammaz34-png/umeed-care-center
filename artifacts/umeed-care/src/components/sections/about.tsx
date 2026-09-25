import { Heart, Users, ShieldCheck } from "lucide-react";
import aboutImage from "@/assets/images/service-lower-limb-prosthetic.png";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-28 bg-background relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="lg:w-1/2 space-y-8 scroll-animate opacity-0 transition-all duration-1000 translate-y-8 data-[state=visible]:translate-y-0">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story of <span className="text-primary">Umeed</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                "Umeed" means hope. It is the foundation of everything we do. At Umeed Care Centre, we understand that finding the right orthotic or prosthetic solution is more than just a medical procedure—it is a journey toward regaining independence, confidence, and human dignity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From children taking their first supported steps to elderly patients rediscovering the joy of walking, our compassionate team provides a complete range of expert services under one roof. You are not just a patient to us; you are family.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">Compassionate Care</h3>
                  <p className="text-sm text-muted-foreground">Every consultation is rooted in empathy and understanding.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">Expert Precision</h3>
                  <p className="text-sm text-muted-foreground">Custom-fitted solutions designed for your unique body.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full scroll-animate opacity-0 transition-all duration-1000 delay-200 translate-y-8 data-[state=visible]:translate-y-0">
            <div className="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <img
                src={aboutImage}
                alt="Custom-fitted prosthetic care at Umeed Care Center, Karachi"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote card — stacked below on mobile, overlapping the image on larger screens */}
            <div className="relative sm:-mt-10 mt-4 mx-auto sm:ml-6 sm:mr-0 max-w-sm bg-card border border-border/60 rounded-xl px-5 py-4">
              <span className="font-serif text-3xl text-primary/40 leading-none">"</span>
              <p className="text-sm sm:text-base font-serif text-foreground/80 leading-snug">
                Every person deserves to move freely and live fully.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
