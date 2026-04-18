import { Facebook, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import logoImg from "@assets/Screenshot_2026-04-18_230504_1776538457084.png";

const WHATSAPP_URL = "https://wa.me/923136422564?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20at%20Umeed%20Care%20Center.";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100054410172615";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-14 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <img
                src={logoImg}
                alt="Umeed Care Center Logo — Orthotic & Prosthetics Karachi"
                className="h-14 w-14 rounded-full object-cover border-2 border-primary/20 shadow-sm"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xl text-primary tracking-tight leading-none">Umeed</span>
                <span className="font-sans text-xs font-medium tracking-widest uppercase text-muted-foreground">Care Center</span>
              </div>
            </Link>
            <p className="text-muted-foreground font-serif italic text-base max-w-xs leading-relaxed">
              Restoring Mobility. Inspiring Hope.
            </p>
            <p className="text-muted-foreground text-xs mt-3 max-w-xs">
              Leading orthotic and prosthetic solutions provider in Karachi, Pakistan — serving patients of all ages.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-foreground mb-5">Contact Info</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm">Karachi, Sindh, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-600 shrink-0" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors font-medium"
                  aria-label="Chat on WhatsApp"
                >
                  0313 6422564 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:shahsahab022@gmail.com" className="text-sm hover:text-primary transition-colors break-all">shahsahab022@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-foreground mb-5">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lower & Upper Limb Prosthetics</li>
              <li>Pediatric Orthotics & Prosthetics</li>
              <li>Spinal Orthotics</li>
              <li>Custom Foot Orthotics</li>
              <li>Diabetic & Pressure-Relief Footwear</li>
            </ul>
            <div className="mt-5">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
                aria-label="Umeed Care Center on Facebook"
              >
                <span className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </span>
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/60 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Umeed Care Center — Orthotic & Prosthetics, Karachi. All rights reserved.</p>
          <p>Best orthotic and prosthetic clinic in Karachi, Pakistan</p>
        </div>
      </div>
    </footer>
  );
}
