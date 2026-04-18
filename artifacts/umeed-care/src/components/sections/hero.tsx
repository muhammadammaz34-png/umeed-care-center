import heroImage from "@/assets/images/hero.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const facebookUrl = "https://www.facebook.com/profile.php?id=100054410172615";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Confident person walking in a sunlit park" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80 md:bg-background/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 py-20 mx-auto">
        <div className="max-w-2xl fade-in-up">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
            Orthotic & Prosthetic Care
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Restoring Mobility.<br />
            <span className="text-primary italic font-serif font-normal">Inspiring Hope.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
            Umeed Care Centre provides compassionate, expert orthotic and prosthetic solutions. We believe every person deserves to move freely and live fully with dignity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-in-up delay-200">
            <Button asChild size="lg" className="rounded-full text-base h-14 px-8 shadow-md">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                Contact Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full text-base h-14 px-8 bg-background/50 backdrop-blur-sm border-border">
              <a href="#services">
                Explore Services
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
