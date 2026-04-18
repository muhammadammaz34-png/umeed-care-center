import { MapPin, Phone, Mail, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=100054410172615";

  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto bg-card text-card-foreground rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row scroll-animate opacity-0 transition-all duration-1000 translate-y-8">
          
          <div className="p-10 md:p-12 md:w-3/5">
            <h2 className="text-3xl font-bold font-serif mb-2">Take the First Step</h2>
            <p className="text-muted-foreground mb-8">
              Contact us to schedule a consultation. We're here to answer your questions and guide you on your journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">Visit Us</h4>
                  <p className="font-medium">123 Healing Way, Health District<br />Cityville, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">Call Us</h4>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-1">Email Us</h4>
                  <p className="font-medium">care@umeedcentre.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-secondary p-10 md:p-12 md:w-2/5 flex flex-col justify-center items-center text-center border-l border-border/40">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Facebook className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Connect on Facebook</h3>
            <p className="text-muted-foreground mb-8 text-sm">
              Reach out to us directly through our Facebook page for the quickest response.
            </p>
            <Button asChild size="lg" className="w-full rounded-full shadow-sm">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Facebook className="w-4 h-4" />
                Message Us
              </a>
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
