import lowerLimbProsthetic from "@/assets/images/service-lower-limb-prosthetic.png";
import upperLimbProsthetic from "@/assets/images/service-upper-limb-prosthetic.png";
import pediatricOrthotics from "@/assets/images/service-pediatric-orthotics.png";
import spinalOrthotics from "@/assets/images/service-spinal-orthotics.png";
import lowerLimbOrthotics from "@/assets/images/service-lower-limb-orthotics.png";
import upperLimbOrthotics from "@/assets/images/service-upper-limb-orthotics.png";
import customFootOrthotics from "@/assets/images/service-custom-foot-orthotics.png";
import diabeticFootwear from "@/assets/images/service-diabetic-footwear.png";

export interface Service {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  whoItHelps: string;
  image: string;
  // Urdu translations — read via getServiceField() so callers don't have
  // to branch on language everywhere a service field is displayed.
  titleUr: string;
  taglineUr: string;
  shortDescriptionUr: string;
  descriptionUr: string;
  benefitsUr: string[];
  whoItHelpsUr: string;
}

export const services: Service[] = [
  {
    id: "lower-limb-prosthetics",
    title: "Lower Limb Prosthetics",
    tagline: "Walk again with confidence",
    shortDescription: "Advanced artificial legs and feet designed for natural movement, stability, and comfort.",
    description: "Our lower limb prosthetics program provides custom-fabricated artificial legs, feet, and knee systems designed to match each patient's lifestyle, activity level, and body mechanics. Whether you are recovering from an amputation or seeking a replacement device, our certified prosthetists use the latest materials and techniques to ensure the best possible fit, comfort, and mobility.",
    benefits: [
      "Custom-fitted to your exact measurements",
      "Lightweight, durable materials",
      "Solutions for below-knee, above-knee, and hip disarticulation",
      "Dynamic and energy-return foot options",
      "Gait training support and follow-up care",
    ],
    whoItHelps: "Patients with lower limb amputations due to injury, diabetes, vascular disease, or congenital conditions.",
    image: lowerLimbProsthetic,
    titleUr: "لوئر لمب پروستھیٹکس",
    taglineUr: "دوبارہ اعتماد کے ساتھ چلیں",
    shortDescriptionUr: "قدرتی حرکت، استحکام اور آرام کے لیے تیار کردہ جدید مصنوعی ٹانگیں اور پاؤں۔",
    descriptionUr: "ہمارا لوئر لمب پروستھیٹکس پروگرام ہر مریض کے طرزِ زندگی، سرگرمی کی سطح اور جسمانی ساخت کے مطابق کسٹم بنائی گئی مصنوعی ٹانگیں، پاؤں اور گھٹنے کے نظام فراہم کرتا ہے۔ چاہے آپ ایمپیوٹیشن سے صحت یاب ہو رہے ہوں یا نیا آلہ درکار ہو، ہمارے سرٹیفائیڈ پروستھیٹسٹس بہترین فٹ، آرام اور نقل و حرکت یقینی بنانے کے لیے جدید ترین مواد اور تکنیک استعمال کرتے ہیں۔",
    benefitsUr: [
      "آپ کی درست پیمائش کے مطابق کسٹم فٹنگ",
      "ہلکا اور پائیدار مواد",
      "نیچے گھٹنے، اوپر گھٹنے اور ہپ ڈس آرٹیکولیشن کے لیے حل",
      "ڈائنامک اور انرجی ریٹرن فٹ کے آپشنز",
      "چلنے کی تربیت اور فالو اپ نگہداشت",
    ],
    whoItHelpsUr: "چوٹ، ذیابیطس، خون کی نالیوں کی بیماری یا پیدائشی حالات کی وجہ سے ٹانگ کٹوانے والے مریض۔",
  },
  {
    id: "upper-limb-prosthetics",
    title: "Upper Limb Prosthetics",
    tagline: "Restore function and independence",
    shortDescription: "Custom-fitted artificial arms and hands that restore functionality and independence.",
    description: "Regaining the use of your hands and arms changes everything. Our upper limb prosthetics range from passive cosmetic devices to body-powered and myoelectric systems, all precisely fabricated to restore your independence for daily tasks, work, and personal care. Each device is designed with both function and appearance in mind.",
    benefits: [
      "Cosmetic, body-powered, and functional options",
      "Solutions for partial hand, wrist, below-elbow, and above-elbow",
      "Lightweight and ergonomic designs",
      "Training provided for comfortable daily use",
      "Durable silicone and carbon components",
    ],
    whoItHelps: "Patients with upper limb amputations or limb differences at any level from finger to shoulder.",
    image: upperLimbProsthetic,
    titleUr: "اپر لمب پروستھیٹکس",
    taglineUr: "کام کاج اور خودمختاری بحال کریں",
    shortDescriptionUr: "کسٹم فٹ مصنوعی بازو اور ہاتھ جو کام کرنے کی صلاحیت اور خودمختاری بحال کرتے ہیں۔",
    descriptionUr: "اپنے ہاتھوں اور بازوؤں کا استعمال دوبارہ حاصل کرنا سب کچھ بدل دیتا ہے۔ ہماری اپر لمب پروستھیٹکس میں کاسمیٹک آلات سے لے کر باڈی پاورڈ اور مائیوالیکٹرک نظام تک شامل ہیں، سب کچھ روزمرہ کے کاموں، کام اور ذاتی نگہداشت کے لیے آپ کی خودمختاری بحال کرنے کے لیے درستگی سے تیار کیا جاتا ہے۔ ہر آلہ کام اور شکل دونوں کو مدنظر رکھ کر ڈیزائن کیا جاتا ہے۔",
    benefitsUr: [
      "کاسمیٹک، باڈی پاورڈ اور فنکشنل آپشنز",
      "جزوی ہاتھ، کلائی، کہنی سے نیچے اور کہنی سے اوپر کے لیے حل",
      "ہلکا اور ایرگونومک ڈیزائن",
      "روزمرہ آرام دہ استعمال کے لیے تربیت فراہم کی جاتی ہے",
      "پائیدار سلیکون اور کاربن اجزاء",
    ],
    whoItHelpsUr: "انگلی سے لے کر کندھے تک کسی بھی سطح پر بازو کٹوانے یا فرق رکھنے والے مریض۔",
  },
  {
    id: "pediatric-orthotics-prosthetics",
    title: "Pediatric Orthotics & Prosthetics",
    tagline: "Growing with your child, step by step",
    shortDescription: "Gentle, compassionate fitting of supportive devices for children as they grow and develop.",
    description: "Children's bodies grow and change rapidly, and their orthotic and prosthetic needs are unique. Our specialists have dedicated experience working with infants, toddlers, and teenagers, providing gentle assessments and devices that support healthy development. We work closely with families and referring physicians to ensure the best outcomes.",
    benefits: [
      "Experienced pediatric specialists",
      "Regular sizing reviews as your child grows",
      "Comfortable, child-friendly materials and colours",
      "Full range from AFOs to prosthetic limbs",
      "Family-centred approach and education",
    ],
    whoItHelps: "Infants, children, and adolescents with congenital conditions, cerebral palsy, limb differences, or developmental issues requiring orthotic or prosthetic support.",
    image: pediatricOrthotics,
    titleUr: "پیڈیاٹرک آرتھوٹکس اینڈ پروستھیٹکس",
    taglineUr: "آپ کے بچے کے ساتھ قدم بہ قدم نشوونما",
    shortDescriptionUr: "بچوں کی نشوونما کے دوران معاون آلات کی نرم اور ہمدردانہ فٹنگ۔",
    descriptionUr: "بچوں کے جسم تیزی سے بڑھتے اور بدلتے ہیں، اور ان کی آرتھوٹک اور پروستھیٹک ضروریات منفرد ہوتی ہیں۔ ہمارے ماہرین کو شیرخوار بچوں، چھوٹے بچوں اور نوعمروں کے ساتھ کام کرنے کا خصوصی تجربہ ہے، جو نرم معائنہ اور صحت مند نشوونما میں معاون آلات فراہم کرتے ہیں۔ ہم بہترین نتائج یقینی بنانے کے لیے خاندانوں اور ریفر کرنے والے ڈاکٹروں کے ساتھ قریبی تعاون کرتے ہیں۔",
    benefitsUr: [
      "تجربہ کار پیڈیاٹرک ماہرین",
      "بچے کی نشوونما کے ساتھ باقاعدہ سائز کا جائزہ",
      "آرام دہ، بچوں کے لیے موزوں مواد اور رنگ",
      "اے ایف او سے لے کر مصنوعی اعضاء تک مکمل رینج",
      "خاندان پر مرکوز طریقہ کار اور آگاہی",
    ],
    whoItHelpsUr: "پیدائشی حالات، سیریبرل پالسی، اعضاء میں فرق یا نشوونما کے مسائل رکھنے والے شیرخوار، بچے اور نوعمر جنہیں آرتھوٹک یا پروستھیٹک سپورٹ درکار ہے۔",
  },
  {
    id: "spinal-orthotics",
    title: "Spinal Orthotics",
    tagline: "Supporting your spine, protecting your future",
    shortDescription: "Supportive braces to stabilize the spine, relieve pain, and aid in recovery.",
    description: "Spinal orthotics — including lumbar supports, thoracolumbosacral orthoses (TLSO), and scoliosis braces — are precisely fitted to immobilise, correct, or support the spine. Our clinicians conduct thorough assessments and work with your medical team to prescribe and fabricate the appropriate spinal device for your condition and recovery goals.",
    benefits: [
      "Conditions treated: scoliosis, kyphosis, fractures, post-surgical support",
      "Custom-moulded for maximum contact and effectiveness",
      "Breathable, low-profile designs for daily wear",
      "Coordination with your physiotherapist and surgeon",
      "Regular follow-up and adjustments",
    ],
    whoItHelps: "Patients with scoliosis, spinal fractures, disc conditions, post-surgical needs, or chronic back pain requiring external support.",
    image: spinalOrthotics,
    titleUr: "اسپائنل آرتھوٹکس",
    taglineUr: "آپ کی ریڑھ کی ہڈی کو سہارا، آپ کے مستقبل کی حفاظت",
    shortDescriptionUr: "ریڑھ کی ہڈی کو مستحکم کرنے، درد کم کرنے اور صحت یابی میں مدد دینے والے معاون بریسز۔",
    descriptionUr: "اسپائنل آرتھوٹکس — بشمول لمبر سپورٹ، تھوراکولمبوسیکرل آرتھوسس (ٹی ایل ایس او) اور اسکولیوسس بریسز — ریڑھ کی ہڈی کو ساکن، درست یا سہارا دینے کے لیے درستگی سے فٹ کیے جاتے ہیں۔ ہمارے معالجین مکمل معائنہ کرتے ہیں اور آپ کی حالت اور صحت یابی کے اہداف کے مطابق موزوں اسپائنل آلہ تجویز اور تیار کرنے کے لیے آپ کی طبی ٹیم کے ساتھ کام کرتے ہیں۔",
    benefitsUr: [
      "علاج کی جانے والی حالتیں: اسکولیوسس، کائفوسس، فریکچر، سرجری کے بعد سہارا",
      "زیادہ سے زیادہ رابطے اور اثر کے لیے کسٹم مولڈڈ",
      "روزمرہ استعمال کے لیے ہلکا اور سانس لینے والا ڈیزائن",
      "آپ کے فزیوتھراپسٹ اور سرجن کے ساتھ تعاون",
      "باقاعدہ فالو اپ اور ایڈجسٹمنٹ",
    ],
    whoItHelpsUr: "اسکولیوسس، ریڑھ کی ہڈی کے فریکچر، ڈسک کے مسائل، سرجری کے بعد کی ضروریات یا دائمی کمر درد رکھنے والے مریض جنہیں بیرونی سہارے کی ضرورت ہے۔",
  },
  {
    id: "lower-limb-orthotics",
    title: "Lower Limb Orthotics",
    tagline: "Walk better, live better",
    shortDescription: "Custom leg braces to support weakened joints, improve alignment, and enhance mobility.",
    description: "Lower limb orthotics improve alignment, stability, and movement for patients with neurological or musculoskeletal conditions affecting the legs, knees, or ankles. From ankle-foot orthoses (AFOs) and hinged knee braces to full hip-knee-ankle-foot orthoses (HKAFOs), we fabricate and fit devices that enable our patients to stand, walk, and move with greater ease.",
    benefits: [
      "AFOs, KAFOs, HKAFOs, and knee braces",
      "Custom-fabricated and off-the-shelf options",
      "Conditions: drop foot, cerebral palsy, post-stroke, knee instability",
      "Dynamic and articulated designs for improved gait",
      "Lightweight thermoplastic and carbon fibre options",
    ],
    whoItHelps: "Patients with drop foot, stroke, cerebral palsy, muscular dystrophy, ligament instability, or post-surgical rehabilitation needs.",
    image: lowerLimbOrthotics,
    titleUr: "لوئر لمب آرتھوٹکس",
    taglineUr: "بہتر چلیں، بہتر زندگی گزاریں",
    shortDescriptionUr: "کمزور جوڑوں کو سہارا دینے، سیدھ بہتر بنانے اور نقل و حرکت بڑھانے کے لیے کسٹم لیگ بریسز۔",
    descriptionUr: "لوئر لمب آرتھوٹکس ٹانگوں، گھٹنوں یا ٹخنوں کو متاثر کرنے والی اعصابی یا عضلاتی حالتوں کے مریضوں کے لیے سیدھ، استحکام اور حرکت بہتر بناتے ہیں۔ اینکل فٹ آرتھوسس (اے ایف او) اور قابلِ حرکت گھٹنے کے بریسز سے لے کر مکمل ہپ نی اینکل فٹ آرتھوسس (ایچ کے اے ایف او) تک، ہم ایسے آلات تیار اور فٹ کرتے ہیں جو ہمارے مریضوں کو زیادہ آسانی سے کھڑا ہونے، چلنے اور حرکت کرنے کے قابل بناتے ہیں۔",
    benefitsUr: [
      "اے ایف او، کے اے ایف او، ایچ کے اے ایف او اور گھٹنے کے بریسز",
      "کسٹم تیار اور تیار شدہ دونوں آپشنز",
      "حالتیں: ڈراپ فٹ، سیریبرل پالسی، فالج کے بعد، گھٹنے کی کمزوری",
      "بہتر چال کے لیے ڈائنامک اور جوڑ دار ڈیزائن",
      "ہلکا تھرموپلاسٹک اور کاربن فائبر آپشنز",
    ],
    whoItHelpsUr: "ڈراپ فٹ، فالج، سیریبرل پالسی، مسکیولر ڈسٹروفی، لیگامنٹ کی کمزوری یا سرجری کے بعد بحالی کی ضرورت رکھنے والے مریض۔",
  },
  {
    id: "upper-limb-orthotics",
    title: "Upper Limb Orthotics",
    tagline: "Precision support for hands, wrists, and arms",
    shortDescription: "Precision splints and braces for the arm, wrist, and hand to support healing and function.",
    description: "Our upper limb orthotic services cover a comprehensive range of splints and braces for the hand, wrist, elbow, and shoulder. Whether you need a resting hand splint for nerve injury, a dynamic extension splint for tendon repair, or an elbow brace for post-fracture recovery, our team fabricates devices that protect healing tissues while maintaining as much function as possible.",
    benefits: [
      "Static and dynamic splints",
      "Conditions: carpal tunnel, tendon injuries, fractures, nerve palsy",
      "Wrist, elbow, shoulder, and full-arm solutions",
      "Thermoplastic and fabric-based options",
      "Occupational therapy coordination available",
    ],
    whoItHelps: "Patients with carpal tunnel syndrome, wrist fractures, tendon or nerve injuries, rheumatoid arthritis, or post-surgical arm conditions.",
    image: upperLimbOrthotics,
    titleUr: "اپر لمب آرتھوٹکس",
    taglineUr: "ہاتھوں، کلائیوں اور بازوؤں کے لیے درست سہارا",
    shortDescriptionUr: "ہاتھ، کلائی اور بازو کے لیے درست اسپلنٹ اور بریسز جو شفا یابی اور کام میں مدد دیتے ہیں۔",
    descriptionUr: "ہماری اپر لمب آرتھوٹک خدمات ہاتھ، کلائی، کہنی اور کندھے کے لیے اسپلنٹ اور بریسز کی مکمل رینج پر مشتمل ہیں۔ چاہے آپ کو اعصابی چوٹ کے لیے آرام دہ ہینڈ اسپلنٹ، ٹینڈن کی مرمت کے لیے ڈائنامک ایکسٹینشن اسپلنٹ، یا فریکچر کے بعد صحت یابی کے لیے ایلبو بریس درکار ہو، ہماری ٹیم ایسے آلات تیار کرتی ہے جو شفا یاب ہونے والے ٹشوز کی حفاظت کرتے ہوئے زیادہ سے زیادہ فعالیت برقرار رکھتے ہیں۔",
    benefitsUr: [
      "جامد اور متحرک اسپلنٹ",
      "حالتیں: کارپل ٹنل، ٹینڈن کی چوٹیں، فریکچر، اعصابی فالج",
      "کلائی، کہنی، کندھے اور مکمل بازو کے حل",
      "تھرموپلاسٹک اور فیبرک بیسڈ آپشنز",
      "اوکیوپیشنل تھراپی کوآرڈینیشن دستیاب",
    ],
    whoItHelpsUr: "کارپل ٹنل سنڈروم، کلائی کے فریکچر، ٹینڈن یا اعصابی چوٹوں، ریومیٹائیڈ آرتھرائٹس یا سرجری کے بعد بازو کی حالتوں والے مریض۔",
  },
  {
    id: "custom-foot-orthotics",
    title: "Custom Foot Orthotics",
    tagline: "Every step, perfectly supported",
    shortDescription: "Personalized insoles crafted to correct foot mechanics, reduce pain, and improve posture.",
    description: "Foot pain, flat feet, heel spurs, and poor arch support affect the entire body. Our custom foot orthotics are individually cast and fabricated from detailed measurements of your foot structure and gait. They fit inside your regular footwear and correct biomechanical imbalances to reduce pain and prevent long-term complications.",
    benefits: [
      "Full gait analysis and foot assessment",
      "Conditions: plantar fasciitis, flat feet, heel spurs, overpronation",
      "Slim-profile designs that fit standard shoes",
      "Rigid, semi-rigid, and soft shell options",
      "Durable and long-lasting materials",
    ],
    whoItHelps: "Anyone experiencing foot, ankle, knee, hip, or lower back pain related to abnormal foot mechanics or gait irregularities.",
    image: customFootOrthotics,
    titleUr: "کسٹم فٹ آرتھوٹکس",
    taglineUr: "ہر قدم، مکمل سہارے کے ساتھ",
    shortDescriptionUr: "پاؤں کی ساخت درست کرنے، درد کم کرنے اور کرنسی بہتر بنانے کے لیے ذاتی نوعیت کے انسولز۔",
    descriptionUr: "پاؤں کا درد، فلیٹ فٹ، ہیل اسپرز اور کمزور آرچ سپورٹ پورے جسم کو متاثر کرتے ہیں۔ ہمارے کسٹم فٹ آرتھوٹکس آپ کے پاؤں کی ساخت اور چال کی تفصیلی پیمائش سے انفرادی طور پر تیار کیے جاتے ہیں۔ یہ آپ کے عام جوتوں کے اندر فٹ ہوتے ہیں اور درد کم کرنے اور طویل مدتی پیچیدگیوں سے بچنے کے لیے حیاتیاتی میکانی عدم توازن درست کرتے ہیں۔",
    benefitsUr: [
      "مکمل چال کا تجزیہ اور پاؤں کا معائنہ",
      "حالتیں: پلانٹر فیشیائٹس، فلیٹ فٹ، ہیل اسپرز، اوور پروناشن",
      "عام جوتوں میں فٹ ہونے والا پتلا ڈیزائن",
      "سخت، نیم سخت اور نرم شیل آپشنز",
      "پائیدار اور دیرپا مواد",
    ],
    whoItHelpsUr: "پاؤں کی غیر معمولی ساخت یا چال کی خرابی سے متعلق پاؤں، ٹخنے، گھٹنے، ہپ یا کمر کے درد میں مبتلا کوئی بھی فرد۔",
  },
  {
    id: "diabetic-footwear",
    title: "Diabetic & Pressure-Relief Footwear",
    tagline: "Protecting sensitive feet every day",
    shortDescription: "Specialized shoes and inserts to protect sensitive feet and prevent complications.",
    description: "Diabetic neuropathy and poor circulation put feet at serious risk of ulcers, infections, and even amputation. Our specialist diabetic footwear — including custom therapeutic sandals, extra-depth shoes, and pressure-relief insoles — redistributes pressure away from high-risk areas, reduces friction, and keeps feet protected during daily life.",
    benefits: [
      "Pressure-mapping for ulcer-risk assessment",
      "Custom sandals, shoes, and insoles",
      "Seamless interiors to prevent irritation",
      "Extra-depth designs for swollen or deformed feet",
      "Prevention of diabetic foot complications",
    ],
    whoItHelps: "Patients with diabetes, peripheral neuropathy, foot ulcers, Charcot foot, or any condition requiring pressure relief and protective footwear.",
    image: diabeticFootwear,
    titleUr: "ذیابیطس اینڈ پریشر ریلیف فٹ ویئر",
    taglineUr: "ہر روز حساس پاؤں کی حفاظت",
    shortDescriptionUr: "حساس پاؤں کی حفاظت اور پیچیدگیوں سے بچاؤ کے لیے خصوصی جوتے اور انسرٹس۔",
    descriptionUr: "ذیابیطس نیوروپیتھی اور کمزور خون کی گردش پاؤں کو السر، انفیکشن اور یہاں تک کہ کٹوانے کے سنگین خطرے میں ڈال دیتی ہے۔ ہمارے خصوصی ذیابیطس فٹ ویئر — بشمول کسٹم علاجی سینڈل، اضافی گہرائی والے جوتے اور پریشر ریلیف انسولز — زیادہ خطرے والے حصوں سے دباؤ ہٹاتے ہیں، رگڑ کم کرتے ہیں اور روزمرہ زندگی میں پاؤں کو محفوظ رکھتے ہیں۔",
    benefitsUr: [
      "السر کے خطرے کا جائزہ لینے کے لیے پریشر میپنگ",
      "کسٹم سینڈل، جوتے اور انسولز",
      "جلن سے بچنے کے لیے ہموار اندرونی حصہ",
      "سوجے یا بگڑے ہوئے پاؤں کے لیے اضافی گہرائی کا ڈیزائن",
      "ذیابیطس کے پاؤں کی پیچیدگیوں سے بچاؤ",
    ],
    whoItHelpsUr: "ذیابیطس، پیریفرل نیوروپیتھی، پاؤں کے السر، شارکوٹ فٹ یا پریشر ریلیف اور حفاظتی فٹ ویئر کی ضرورت والے کسی بھی حالت کے مریض۔",
  },
];

export function getServiceById(id: string | undefined): Service | undefined {
  return services.find((s) => s.id === id);
}
