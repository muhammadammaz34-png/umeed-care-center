import { Facebook } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=100054410172615";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-3xl font-bold text-primary tracking-tight">Umeed</span>
              <span className="font-sans text-sm font-medium tracking-widest uppercase text-muted-foreground ml-2">Care Centre</span>
            </Link>
            <p className="text-muted-foreground font-serif italic text-lg max-w-sm">
              Restoring Mobility. Inspiring Hope.
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Umeed Care Centre. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
