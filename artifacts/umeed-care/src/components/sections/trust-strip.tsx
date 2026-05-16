import { Footprints, Activity, Baby, AlignCenter, Hand, Dumbbell, Scissors, Shield } from "lucide-react";

const items = [
  { icon: <Activity className="w-4 h-4" />, label: "Lower Limb Prosthetics" },
  { icon: <Hand className="w-4 h-4" />, label: "Upper Limb Prosthetics" },
  { icon: <Baby className="w-4 h-4" />, label: "Pediatric Orthotics & Prosthetics" },
  { icon: <AlignCenter className="w-4 h-4" />, label: "Spinal Orthotics" },
  { icon: <Dumbbell className="w-4 h-4" />, label: "Lower Limb Orthotics" },
  { icon: <Scissors className="w-4 h-4" />, label: "Upper Limb Orthotics" },
  { icon: <Footprints className="w-4 h-4" />, label: "Custom Foot Orthotics" },
  { icon: <Shield className="w-4 h-4" />, label: "Diabetic Footwear" },
];

// Duplicate for seamless loop
const marqueeItems = [...items, ...items];

export default function TrustStrip() {
  return (
    <div className="bg-primary py-4 overflow-hidden border-y border-primary/20 relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeItems.map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2 mx-6 sm:mx-8 text-primary-foreground/90"
          >
            <span className="text-primary-foreground/70">{item.icon}</span>
            <span className="text-sm font-medium tracking-wide">{item.label}</span>
            <span className="ml-6 sm:ml-8 text-primary-foreground/30 text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
