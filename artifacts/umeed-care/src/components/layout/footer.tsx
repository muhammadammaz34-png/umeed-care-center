import { Facebook, Mail, MapPin, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import logoImg from "@/assets/images/logo.webp";
import { services } from "@/data/services";
import { useLanguage } from "@/lib/language-context";

const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100054410172615";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, t } = useLanguage();

  return (
    <footer className="bg-dark text-dark-foreground pt-16 sm:pt-20 pb-8 border-t border-white/5">
      <div className="container px-4 sm:px-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12 sm:mb-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#hero" className="inline-flex items-center gap-3 mb-4">
              <img
                src={logoImg}
                alt="Umeed Care Center Logo: Orthotic & Prosthetics Karachi"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg sm:text-xl text-primary tracking-tight leading-none">Umeed</span>
                <span className="font-sans text-xs font-medium tracking-widest uppercase text-accent">Care Center</span>
              </div>
            </a>
            <p className="text-dark-foreground/70 font-serif text-sm sm:text-base max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>
            <p className="text-dark-foreground/50 text-xs mt-3 max-w-xs">
              {t.footer.description}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/90 mb-5">{t.nav.company}</h4>
            <ul className="space-y-3 text-sm text-dark-foreground/70">
              <li><Link href="/about" className="hover:text-white transition-colors">{t.nav.aboutUs}</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">{t.nav.services}</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">{t.nav.blogs}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t.nav.contactUs}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/90 mb-5">{t.footer.contactInfo}</h4>
            <ul className="space-y-3 sm:space-y-4 text-dark-foreground/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <span className="text-sm">{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm font-medium">0313 6422564 {t.footer.whatsapp}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <a href="mailto:shahsahab022@gmail.com" className="text-sm hover:text-accent transition-colors break-all">shahsahab022@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-[0.2em] text-white/90 mb-5">{t.footer.ourServices}</h4>
            <ul className="space-y-2 text-sm text-dark-foreground/70">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="hover:text-white transition-colors"
                  >
                    {language === "ur" ? service.titleUr : service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 sm:mt-5">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-dark-foreground/70 hover:text-accent transition-colors text-sm"
                aria-label="Umeed Care Center on Facebook"
              >
                <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors">
                  <Facebook className="w-4 h-4" />
                </span>
                <span>{t.footer.followFacebook}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-xs text-dark-foreground/50 text-center sm:text-left">
          <p>{t.footer.copyright(currentYear)}</p>
          <p className="hidden sm:block">{t.footer.bestClinic}</p>
        </div>
      </div>
    </footer>
  );
}
