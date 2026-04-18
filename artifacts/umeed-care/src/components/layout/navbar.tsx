import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=100054410172615";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold text-primary tracking-tight">Umeed</span>
            <span className="font-sans text-sm font-medium tracking-widest uppercase text-muted-foreground hidden sm:inline-block mt-1">Care Centre</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">About Us</a>
          <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Services</a>
          <a href="#why-us" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Why Choose Us</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="rounded-full px-6 shadow-sm">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
