import { MapPin, Phone, Mail, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://wa.me/923136422564?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100054410172615";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
            Book a Consultation
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto text-base md:text-lg">
            Looking for the best orthotic and prosthetic solutions in Karachi? Reach out to our expert team today.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card text-card-foreground rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row scroll-animate opacity-0 transition-all duration-1000 translate-y-8">

          <div className="p-8 md:p-12 md:w-3/5">
            <h3 className="text-2xl font-bold font-serif mb-2">Get in Touch</h3>
            <p className="text-muted-foreground mb-8 text-sm md:text-base">
              Contact us to schedule a consultation. Our certified prosthetists and orthotists in Karachi are ready to help.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">Location</h4>
                  <p className="font-medium text-sm md:text-base">Karachi, Sindh, Pakistan</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Serving patients across Karachi</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">Call / WhatsApp</h4>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-sm md:text-base text-primary hover:underline flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-green-600" />
                    0313 6422564
                  </a>
                  <p className="text-xs text-muted-foreground mt-0.5">Tap to open WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">Email</h4>
                  <a href="mailto:shahsahab022@gmail.com" className="font-medium text-sm md:text-base hover:text-primary transition-colors break-all">shahsahab022@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full shadow-sm bg-green-600 hover:bg-green-700 text-white border-0">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us Now
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-secondary p-8 md:p-12 md:w-2/5 flex flex-col justify-center items-center text-center border-t md:border-t-0 md:border-l border-border/40">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Facebook className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Connect on Facebook</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Follow us for patient stories, new services, and updates from Umeed Care Center in Karachi.
            </p>
            <Button asChild size="lg" className="w-full rounded-full shadow-sm">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Facebook className="w-4 h-4" />
                Message on Facebook
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
