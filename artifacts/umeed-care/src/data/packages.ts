/**
 * Care packages shown under each service. The same three packages apply to every service.
 *
 * PRICES: only artificial legs have a publicly published market range in
 * Karachi (below-knee PKR 80,000 to 350,000, above-knee PKR 150,000 to 600,000,
 * as published by other Karachi clinics in 2026). Nothing else is published by
 * anyone, so every tier below says "quoted after assessment" until the clinic
 * fills in `fromPkr`. Set `fromPkr` on a tier and the page shows
 * "From PKR x" automatically. Edit only this file to change packages or prices.
 */

export interface PackageTier {
  name: string;
  nameUr: string;
  forWho: string;
  forWhoUr: string;
  includes: string[];
  includesUr: string[];
  /** Optional starting price in PKR. Leave undefined to show "quoted after assessment". */
  fromPkr?: number;
  featured?: boolean;
}

export interface ServicePackages {
  /** Optional market guide line shown above the tiers. */
  marketNote?: string;
  marketNoteUr?: string;
  tiers: PackageTier[];
}

const TIERS: PackageTier[] = [
  {
    name: "Basic Care", nameUr: "بیسک کیئر",
    forWho: "A standard, well-fitted solution for everyday needs.", forWhoUr: "روزمرہ ضرورت کے لیے معیاری اور اچھی فٹنگ والا حل۔",
    includes: ["Free first consultation", "Measurement and fitting in our clinic", "Standard materials and components", "One trial fitting"],
    includesUr: ["پہلی مشاورت مفت", "ہمارے کلینک میں پیمائش اور فٹنگ", "معیاری میٹریل اور پرزے", "ایک ٹرائل فٹنگ"],
  },
  {
    name: "Standard Care", nameUr: "اسٹینڈرڈ کیئر",
    forWho: "Better comfort and durability, with follow-up after delivery.", forWhoUr: "بہتر آرام اور پائیداری، ڈیلیوری کے بعد فالو اپ کے ساتھ۔",
    includes: ["Free first consultation", "Measurement and fitting in our clinic", "Upgraded materials and components", "Trial fitting and adjustments", "Follow-up visit after delivery"],
    includesUr: ["پہلی مشاورت مفت", "ہمارے کلینک میں پیمائش اور فٹنگ", "بہتر میٹریل اور پرزے", "ٹرائل فٹنگ اور ایڈجسٹمنٹ", "ڈیلیوری کے بعد فالو اپ وزٹ"],
    featured: true,
  },
  {
    name: "Premium Care", nameUr: "پریمیم کیئر",
    forWho: "Top-grade components and closest attention for demanding use.", forWhoUr: "زیادہ استعمال کے لیے اعلیٰ درجے کے پرزے اور خصوصی توجہ۔",
    includes: ["Free first consultation", "Measurement and fitting in our clinic", "Top-grade materials and components", "Multiple trial fittings and adjustments", "Priority follow-up and review visits"],
    includesUr: ["پہلی مشاورت مفت", "ہمارے کلینک میں پیمائش اور فٹنگ", "اعلیٰ درجے کا میٹریل اور پرزے", "متعدد ٹرائل فٹنگ اور ایڈجسٹمنٹ", "ترجیحی فالو اپ اور ریویو وزٹ"],
  },
];

const IDS = [
  "lower-limb-prosthetics",
  "upper-limb-prosthetics",
  "pediatric-orthotics-prosthetics",
  "spinal-orthotics",
  "lower-limb-orthotics",
  "upper-limb-orthotics",
  "custom-foot-orthotics",
  "diabetic-footwear",
];

export const packages: Record<string, ServicePackages> = Object.fromEntries(
  IDS.map((id) => [id, { tiers: TIERS } as ServicePackages]),
);

packages["lower-limb-prosthetics"] = {
  marketNote: "Typical range in Karachi: below-knee PKR 80,000 to 350,000, above-knee PKR 150,000 to 600,000. Your exact figure depends on components and is given after assessment.",
  marketNoteUr: "کراچی میں عمومی رینج: گھٹنے کے نیچے 80,000 سے 350,000 روپے، گھٹنے کے اوپر 150,000 سے 600,000 روپے۔ درست رقم کمپوننٹس پر منحصر ہے اور معائنے کے بعد بتائی جاتی ہے۔",
  tiers: TIERS,
};
