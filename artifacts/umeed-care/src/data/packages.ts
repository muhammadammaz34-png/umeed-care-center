/**
 * Care packages shown under each service.
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

const COMMON_EN = ["Free first consultation", "Measurement and fitting at your home"];
const COMMON_UR = ["پہلی مشاورت مفت", "آپ کے گھر پر پیمائش اور فٹنگ"];

export const packages: Record<string, ServicePackages> = {
  "lower-limb-prosthetics": {
    marketNote: "Typical range in Karachi: below-knee PKR 80,000 to 350,000, above-knee PKR 150,000 to 600,000. Your exact figure depends on components and is given after assessment.",
    marketNoteUr: "کراچی میں عمومی رینج: گھٹنے کے نیچے 80,000 سے 350,000 روپے، گھٹنے کے اوپر 150,000 سے 600,000 روپے۔ درست رقم کمپوننٹس پر منحصر ہے اور معائنے کے بعد بتائی جاتی ہے۔",
    tiers: [
      {
        name: "Essential Leg", nameUr: "ایسنشل ٹانگ",
        forWho: "Daily walking at home and nearby", forWhoUr: "گھر اور آس پاس روزمرہ چلنے کے لیے",
        includes: [...COMMON_EN, "Custom socket with standard components", "Solid ankle foot", "One follow-up adjustment visit"],
        includesUr: [...COMMON_UR, "کسٹم ساکٹ، معیاری کمپوننٹس کے ساتھ", "سالڈ اینکل فٹ", "ایک فالو اپ ایڈجسٹمنٹ وزٹ"],
      },
      {
        name: "Comfort Leg", nameUr: "کمفرٹ ٹانگ", featured: true,
        forWho: "Working adults on their feet most of the day", forWhoUr: "دن کا بڑا حصہ کھڑے رہنے والے کام کرنے والے بالغ",
        includes: [...COMMON_EN, "Silicone liner for a softer fit", "Energy-return foot", "Trial socket before the final one", "Follow-up visits until it fits well"],
        includesUr: [...COMMON_UR, "نرم فٹ کے لیے سلیکون لائنر", "انرجی ریٹرن فٹ", "حتمی ساکٹ سے پہلے ٹرائل ساکٹ", "ٹھیک بیٹھنے تک فالو اپ وزٹس"],
      },
      {
        name: "Active Leg", nameUr: "ایکٹو ٹانگ",
        forWho: "Active people who ride, walk long distances or climb stairs", forWhoUr: "بائیک چلانے، لمبا چلنے یا سیڑھیاں چڑھنے والے فعال افراد",
        includes: [...COMMON_EN, "Carbon fiber foot or an upgraded knee for above-knee levels", "Silicone liner and trial socket", "Gait training sessions", "Extended follow-up schedule"],
        includesUr: [...COMMON_UR, "کاربن فائبر فٹ یا گھٹنے کے اوپر کی سطح کے لیے اپ گریڈ شدہ گھٹنا", "سلیکون لائنر اور ٹرائل ساکٹ", "گیٹ ٹریننگ سیشنز", "طویل فالو اپ شیڈول"],
      },
    ],
  },
  "upper-limb-prosthetics": {
    tiers: [
      {
        name: "Cosmetic Hand or Arm", nameUr: "کاسمیٹک ہاتھ یا بازو",
        forWho: "A natural appearance with light daily use", forWhoUr: "قدرتی ظاہری شکل اور ہلکے روزمرہ استعمال کے لیے",
        includes: [...COMMON_EN, "Passive device matched to your skin tone and size", "One follow-up adjustment visit"],
        includesUr: [...COMMON_UR, "آپ کی جلد کے رنگ اور سائز کے مطابق پیسیو آلہ", "ایک فالو اپ ایڈجسٹمنٹ وزٹ"],
      },
      {
        name: "Body-Powered Arm", nameUr: "باڈی پاورڈ بازو", featured: true,
        forWho: "Grip and hold for work and daily tasks", forWhoUr: "کام اور روزمرہ کاموں کے لیے پکڑنے اور تھامنے کی صلاحیت",
        includes: [...COMMON_EN, "Cable-operated hook or hand", "Training on using the device", "Follow-up visits until it feels natural"],
        includesUr: [...COMMON_UR, "کیبل سے چلنے والا ہک یا ہاتھ", "آلہ استعمال کرنے کی تربیت", "قدرتی لگنے تک فالو اپ وزٹس"],
      },
      {
        name: "Myoelectric Assessment", nameUr: "مائیو الیکٹرک اسیسمنٹ",
        forWho: "Those who want a powered hand", forWhoUr: "جو پاورڈ ہاتھ چاہتے ہیں",
        includes: [...COMMON_EN, "Assessment of muscle signals and suitability", "Options and a written estimate", "Trial and training plan"],
        includesUr: [...COMMON_UR, "پٹھوں کے سگنلز اور موزونیت کا معائنہ", "آپشنز اور تحریری تخمینہ", "ٹرائل اور تربیتی منصوبہ"],
      },
    ],
  },
  "pediatric-orthotics-prosthetics": {
    tiers: [
      {
        name: "First Device", nameUr: "پہلا آلہ",
        forWho: "Children getting a brace or limb for the first time", forWhoUr: "پہلی بار بریس یا مصنوعی عضو لینے والے بچے",
        includes: [...COMMON_EN, "Child-friendly assessment", "Device made to current size", "Parent guidance on wear and care"],
        includesUr: [...COMMON_UR, "بچوں کے لیے آسان معائنہ", "موجودہ سائز کے مطابق آلہ", "پہننے اور دیکھ بھال پر والدین کی رہنمائی"],
      },
      {
        name: "Growth Plan", nameUr: "گروتھ پلان", featured: true,
        forWho: "Growing children who need regular size checks", forWhoUr: "بڑھتے بچے جنہیں باقاعدہ سائز چیک چاہیے",
        includes: [...COMMON_EN, "Device adjusted as your child grows", "Scheduled sizing reviews", "A new device made when adjustment is no longer enough"],
        includesUr: [...COMMON_UR, "بچے کے بڑھنے کے ساتھ آلے کی ایڈجسٹمنٹ", "طے شدہ سائز ریویوز", "ایڈجسٹمنٹ کافی نہ رہے تو نیا آلہ"],
      },
      {
        name: "Active Child", nameUr: "ایکٹو بچہ",
        forWho: "Children who run, play and go to school", forWhoUr: "دوڑنے، کھیلنے اور اسکول جانے والے بچے",
        includes: [...COMMON_EN, "Lightweight device for school and play", "Fit checks after growth spurts", "Family training on daily use"],
        includesUr: [...COMMON_UR, "اسکول اور کھیل کے لیے ہلکا آلہ", "قد بڑھنے کے بعد فٹ چیک", "روزمرہ استعمال پر خاندان کی تربیت"],
      },
    ],
  },
  "spinal-orthotics": {
    tiers: [
      {
        name: "Support Brace", nameUr: "سپورٹ بریس",
        forWho: "Short-term back or neck support", forWhoUr: "کمر یا گردن کے لیے مختصر مدت کا سہارا",
        includes: [...COMMON_EN, "Ready-made brace adjusted to your size", "Wear and care instructions"],
        includesUr: [...COMMON_UR, "آپ کے سائز کے مطابق ایڈجسٹ شدہ ریڈی میڈ بریس", "پہننے اور دیکھ بھال کی ہدایات"],
      },
      {
        name: "Custom Brace", nameUr: "کسٹم بریس", featured: true,
        forWho: "Long-term support for spine conditions", forWhoUr: "ریڑھ کے مسائل میں طویل مدتی سہارا",
        includes: [...COMMON_EN, "Brace made from your own measurements", "Fit check after first wear", "Follow-up visits to review progress"],
        includesUr: [...COMMON_UR, "آپ کی اپنی پیمائش سے بنا بریس", "پہلی بار پہننے کے بعد فٹ چیک", "پیش رفت دیکھنے کے لیے فالو اپ وزٹس"],
      },
      {
        name: "Scoliosis Care", nameUr: "اسکولیوسس کیئر",
        forWho: "Young patients with scoliosis", forWhoUr: "اسکولیوسس والے نوجوان مریض",
        includes: [...COMMON_EN, "Custom-molded brace", "Regular fit reviews as the child grows", "Guidance on wear schedule"],
        includesUr: [...COMMON_UR, "کسٹم مولڈڈ بریس", "بچے کے بڑھنے کے ساتھ باقاعدہ فٹ ریویوز", "پہننے کے شیڈول پر رہنمائی"],
      },
    ],
  },
  "lower-limb-orthotics": {
    tiers: [
      {
        name: "Ready-Fit Brace", nameUr: "ریڈی فٹ بریس",
        forWho: "Knee, ankle or calf support", forWhoUr: "گھٹنے، ٹخنے یا پنڈلی کے سہارے کے لیے",
        includes: [...COMMON_EN, "Ready-made brace fitted and adjusted", "Wear and care instructions"],
        includesUr: [...COMMON_UR, "ریڈی میڈ بریس کی فٹنگ اور ایڈجسٹمنٹ", "پہننے اور دیکھ بھال کی ہدایات"],
      },
      {
        name: "Custom AFO", nameUr: "کسٹم AFO", featured: true,
        forWho: "Foot drop and ankle weakness", forWhoUr: "فٹ ڈراپ اور ٹخنے کی کمزوری",
        includes: [...COMMON_EN, "Ankle-foot orthosis made to your leg", "Trial fit and shoe advice", "Follow-up visits for comfort"],
        includesUr: [...COMMON_UR, "آپ کی ٹانگ کے مطابق بنا اینکل فٹ آرتھوسس", "ٹرائل فٹ اور جوتوں کا مشورہ", "آرام کے لیے فالو اپ وزٹس"],
      },
      {
        name: "KAFO and Full-Leg", nameUr: "KAFO اور فل لیگ",
        forWho: "Knee and hip instability, post-polio and neurological conditions", forWhoUr: "گھٹنے اور کولہے کی کمزوری، پولیو کے بعد اور اعصابی مسائل",
        includes: [...COMMON_EN, "Custom knee-ankle-foot or full-leg brace", "Gait review and adjustments", "Extended follow-up schedule"],
        includesUr: [...COMMON_UR, "کسٹم گھٹنے، ٹخنے، پاؤں یا فل لیگ بریس", "گیٹ ریویو اور ایڈجسٹمنٹس", "طویل فالو اپ شیڈول"],
      },
    ],
  },
  "upper-limb-orthotics": {
    tiers: [
      {
        name: "Ready-Fit Splint", nameUr: "ریڈی فٹ اسپلنٹ",
        forWho: "Wrist, elbow or hand support", forWhoUr: "کلائی، کہنی یا ہاتھ کے سہارے کے لیے",
        includes: [...COMMON_EN, "Ready-made splint fitted and adjusted", "Wear and care instructions"],
        includesUr: [...COMMON_UR, "ریڈی میڈ اسپلنٹ کی فٹنگ اور ایڈجسٹمنٹ", "پہننے اور دیکھ بھال کی ہدایات"],
      },
      {
        name: "Custom Splint", nameUr: "کسٹم اسپلنٹ", featured: true,
        forWho: "After fractures, nerve injury or surgery", forWhoUr: "فریکچر، اعصابی چوٹ یا سرجری کے بعد",
        includes: [...COMMON_EN, "Splint molded to your arm or hand", "Fit check after first use", "Follow-up visits as you recover"],
        includesUr: [...COMMON_UR, "آپ کے بازو یا ہاتھ کے مطابق مولڈ اسپلنٹ", "پہلے استعمال کے بعد فٹ چیک", "صحت یابی کے دوران فالو اپ وزٹس"],
      },
      {
        name: "Dynamic Orthosis", nameUr: "ڈائنامک آرتھوسس",
        forWho: "Finger, hand or shoulder function support", forWhoUr: "انگلی، ہاتھ یا کندھے کی حرکت میں مدد",
        includes: [...COMMON_EN, "Custom dynamic or functional orthosis", "Adjustments as movement improves", "Extended follow-up schedule"],
        includesUr: [...COMMON_UR, "کسٹم ڈائنامک یا فنکشنل آرتھوسس", "حرکت بہتر ہونے پر ایڈجسٹمنٹس", "طویل فالو اپ شیڈول"],
      },
    ],
  },
  "custom-foot-orthotics": {
    tiers: [
      {
        name: "Ready Insoles", nameUr: "ریڈی انسولز",
        forWho: "Mild arch or heel discomfort", forWhoUr: "ہلکی آرچ یا ایڑی کی تکلیف",
        includes: [...COMMON_EN, "Best-matched ready-made insoles", "Fit check inside your shoes"],
        includesUr: [...COMMON_UR, "سب سے موزوں ریڈی میڈ انسولز", "آپ کے جوتوں میں فٹ چیک"],
      },
      {
        name: "Custom Insoles", nameUr: "کسٹم انسولز", featured: true,
        forWho: "Flat feet, heel pain and uneven walking", forWhoUr: "چپٹے پاؤں، ایڑی کا درد اور غیر ہموار چال",
        includes: [...COMMON_EN, "Insoles made from a scan or cast of your foot", "Trial wear and adjustment", "One follow-up visit"],
        includesUr: [...COMMON_UR, "آپ کے پاؤں کے اسکین یا کاسٹ سے بنے انسولز", "ٹرائل اور ایڈجسٹمنٹ", "ایک فالو اپ وزٹ"],
      },
      {
        name: "Custom Plus Review", nameUr: "کسٹم پلس ریویو",
        forWho: "Long-term foot problems and active use", forWhoUr: "طویل مدتی پاؤں کے مسائل اور فعال استعمال",
        includes: [...COMMON_EN, "Custom insoles and a footwear check", "Gait observation", "Follow-up reviews and re-adjustment"],
        includesUr: [...COMMON_UR, "کسٹم انسولز اور جوتوں کا معائنہ", "چال کا مشاہدہ", "فالو اپ ریویوز اور دوبارہ ایڈجسٹمنٹ"],
      },
    ],
  },
  "diabetic-footwear": {
    tiers: [
      {
        name: "Protective Footwear", nameUr: "حفاظتی جوتے",
        forWho: "Diabetes with reduced feeling in the feet", forWhoUr: "ذیابیطس جس میں پاؤں کی حس کم ہو",
        includes: [...COMMON_EN, "Ready-made diabetic shoes or sandals, fitted", "Foot-care advice"],
        includesUr: [...COMMON_UR, "ریڈی میڈ ذیابیطس کے جوتے یا سینڈل، فٹنگ کے ساتھ", "پاؤں کی دیکھ بھال کا مشورہ"],
      },
      {
        name: "Custom Insert Plan", nameUr: "کسٹم انسرٹ پلان", featured: true,
        forWho: "Pressure points, calluses and deformity", forWhoUr: "دباؤ والے مقامات، گھٹے اور بگاڑ",
        includes: [...COMMON_EN, "Custom pressure-relief inserts", "Suitable shoes selected with you", "Follow-up check of pressure areas"],
        includesUr: [...COMMON_UR, "کسٹم پریشر ریلیف انسرٹس", "آپ کے ساتھ موزوں جوتوں کا انتخاب", "دباؤ والے حصوں کا فالو اپ چیک"],
      },
      {
        name: "Ulcer Prevention Care", nameUr: "السر سے بچاؤ کی نگہداشت",
        forWho: "Past foot ulcers or high-risk feet", forWhoUr: "پہلے پاؤں کا زخم ہو چکا ہو یا زیادہ خطرے والے پاؤں",
        includes: [...COMMON_EN, "Custom-made protective footwear", "Regular foot check reviews", "Re-adjustment as feet change"],
        includesUr: [...COMMON_UR, "کسٹم میڈ حفاظتی جوتے", "پاؤں کے باقاعدہ چیک ریویوز", "پاؤں بدلنے پر دوبارہ ایڈجسٹمنٹ"],
      },
    ],
  },
};
