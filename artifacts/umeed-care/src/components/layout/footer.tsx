import { Facebook, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import logoImg from "@assets/Screenshot_2026-04-18_230504_1776538457084.png";

export default function Footer() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=100054410172615";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <img
                src={logoImg}
                alt="Umeed Care Center Logo"
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
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>Karachi, Sindh, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href="tel:+923136422564" className="hover:text-primary transition-colors">0313 6422564</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a href="mailto:shahsahab022@gmail.com" className="hover:text-primary transition-colors">shahsahab022@gmail.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-foreground mb-4">Follow Us</h4>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </span>
              <span className="text-sm font-medium">Umeed Care Center</span>
            </a>
          </div>
        </div>

        <div className="border-t border-border/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Umeed Care Center — Orthotic & Prosthetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
