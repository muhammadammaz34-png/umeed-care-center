import lowerLimbProsthetic from "@/assets/images/service-lower-limb-prosthetic.png";
import upperLimbProsthetic from "@/assets/images/service-upper-limb-prosthetic.png";
import pediatricOrthotics from "@/assets/images/service-pediatric-orthotics.png";
import spinalOrthotics from "@/assets/images/service-spinal-orthotics.png";
import lowerLimbOrthotics from "@/assets/images/service-lower-limb-orthotics.png";
import upperLimbOrthotics from "@/assets/images/service-upper-limb-orthotics.png";
import customFootOrthotics from "@/assets/images/service-custom-foot-orthotics.png";
import diabeticFootwear from "@/assets/images/service-diabetic-footwear.png";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  whoItHelps: string;
  image: string;
  // Short, self-contained Q&A pairs used for the on-page FAQ section and
  // FAQPage structured data — written to be liftable as-is by Google's
  // AI Overviews and AI chat answers (AEO/GEO), so keep answers factual,
  // non-promotional, and safety-aware rather than sales copy.
  faqs: ServiceFaq[];
  // Urdu translations — read via getServiceField() so callers don't have
  // to branch on language everywhere a service field is displayed.
  titleUr: string;
  taglineUr: string;
  shortDescriptionUr: string;
  descriptionUr: string;
  benefitsUr: string[];
  whoItHelpsUr: string;
  faqsUr: ServiceFaq[];
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
    faqs: [
      {
        question: "How much does a prosthetic leg cost in Pakistan?",
        answer: "Cost depends on amputation level, socket design, suspension system, and whether foot/knee components are locally made or imported. We provide a written estimate only after an in-person assessment, since pricing a prosthesis without seeing the patient is not accurate.",
      },
      {
        question: "How soon after an amputation can I be fitted for an artificial leg?",
        answer: "Fitting usually begins once the wound has healed and swelling is under control. The exact timing is decided jointly with your surgeon and our prosthetic team, since healing speed varies by patient.",
      },
      {
        question: "How long does it take to learn to walk with a prosthetic leg?",
        answer: "This varies widely by amputation level, strength, balance, and how consistently gait training is followed. Most patients see steady progress over several weeks of guided practice and follow-up adjustments.",
      },
      {
        question: "Will a prosthetic leg hurt or cause skin problems?",
        answer: "A new socket can feel unfamiliar at first, but ongoing pain, redness, or skin breakdown usually means the fit needs adjusting. Don't ignore persistent discomfort — bring it to your next visit promptly.",
      },
      {
        question: "Can patients from outside Karachi get fitted here?",
        answer: "Yes. We regularly see patients from Hyderabad, Sukkur, and other parts of Sindh. Message us on WhatsApp beforehand so we can plan your measurement, fitting, and follow-up visits around your travel.",
      },
    ],
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
    faqsUr: [
      {
        question: "پاکستان میں مصنوعی ٹانگ کی قیمت کتنی ہے؟",
        answer: "قیمت ایمپیوٹیشن کی سطح، ساکٹ ڈیزائن اور یہ کہ پاؤں یا گھٹنے کے اجزاء مقامی ہیں یا درآمد شدہ، اس پر منحصر ہے۔ ہم صرف ذاتی معائنے کے بعد تحریری تخمینہ فراہم کرتے ہیں کیونکہ مریض کو دیکھے بغیر قیمت بتانا درست نہیں۔",
      },
      {
        question: "ایمپیوٹیشن کے کتنے عرصے بعد مصنوعی ٹانگ لگ سکتی ہے؟",
        answer: "فٹنگ عام طور پر زخم بھرنے اور سوجن کم ہونے کے بعد شروع ہوتی ہے۔ صحیح وقت آپ کے سرجن اور ہماری پروستھیٹک ٹیم مل کر طے کرتے ہیں کیونکہ شفا یابی کی رفتار ہر مریض میں مختلف ہوتی ہے۔",
      },
      {
        question: "مصنوعی ٹانگ کے ساتھ چلنا سیکھنے میں کتنا وقت لگتا ہے؟",
        answer: "یہ ایمپیوٹیشن کی سطح، طاقت، توازن اور چلنے کی تربیت کی باقاعدگی پر منحصر ہے۔ زیادہ تر مریض چند ہفتوں کی رہنمائی شدہ مشق اور فالو اپ ایڈجسٹمنٹ سے مسلسل بہتری محسوس کرتے ہیں۔",
      },
      {
        question: "کیا مصنوعی ٹانگ سے درد یا جلد کے مسائل ہو سکتے ہیں؟",
        answer: "نئے ساکٹ کا احساس ابتدا میں اجنبی لگ سکتا ہے، لیکن مسلسل درد، لالی یا جلد خراب ہونا عام طور پر فٹنگ میں تبدیلی کی ضرورت کا اشارہ ہے۔ مستقل تکلیف کو نظر انداز نہ کریں، اگلی وزٹ پر بتائیں۔",
      },
      {
        question: "کیا کراچی سے باہر کے مریض یہاں فٹنگ کروا سکتے ہیں؟",
        answer: "جی ہاں۔ ہمارے پاس حیدرآباد، سکھر اور سندھ کے دیگر علاقوں سے باقاعدگی سے مریض آتے ہیں۔ پیشگی واٹس ایپ کریں تاکہ ہم آپ کے سفر کے مطابق پیمائش، فٹنگ اور فالو اپ وزٹس کی منصوبہ بندی کر سکیں۔",
      },
    ],
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
    faqs: [
      {
        question: "What is the difference between a cosmetic and a functional prosthetic hand?",
        answer: "A cosmetic hand mainly restores appearance and light support, while a functional (body-powered or myoelectric) device is built for specific tasks like gripping. The right choice depends on your goals, budget, and willingness to train with the device.",
      },
      {
        question: "How much does a prosthetic arm or hand cost in Pakistan?",
        answer: "Cost depends heavily on whether you choose a cosmetic, body-powered, or myoelectric hand, plus the socket and components used. We assess your case first and give a clear, itemized estimate — not a generic number.",
      },
      {
        question: "Can a prosthetic hand help with daily tasks like eating, dressing, or work?",
        answer: "Many patients regain meaningful independence for daily tasks with the right device and training. Occupational therapy alongside the fitting makes a real difference in how functional the hand feels day to day.",
      },
      {
        question: "Will my child outgrow a prosthetic arm?",
        answer: "Yes, growing children typically need resizing or replacement over time. We schedule regular reviews so the device keeps fitting properly and doesn't fall behind your child's growth.",
      },
      {
        question: "Is training needed after getting an artificial hand?",
        answer: "Yes. Learning to use a prosthetic hand safely and efficiently for daily activities usually takes guided practice. We support this as part of the fitting process, not as a separate add-on.",
      },
    ],
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
    faqsUr: [
      {
        question: "کاسمیٹک اور فنکشنل مصنوعی ہاتھ میں کیا فرق ہے؟",
        answer: "کاسمیٹک ہاتھ زیادہ تر شکل اور ہلکی سپورٹ بحال کرتا ہے، جبکہ فنکشنل (باڈی پاورڈ یا مائیوالیکٹرک) آلہ گرفت جیسے مخصوص کاموں کے لیے بنایا جاتا ہے۔ صحیح انتخاب آپ کے اہداف، بجٹ اور تربیت کی خواہش پر منحصر ہے۔",
      },
      {
        question: "پاکستان میں مصنوعی بازو یا ہاتھ کی قیمت کتنی ہے؟",
        answer: "قیمت کا زیادہ تر انحصار اس بات پر ہے کہ آپ کاسمیٹک، باڈی پاورڈ یا مائیوالیکٹرک ہاتھ چنتے ہیں، ساتھ ہی ساکٹ اور اجزاء پر۔ ہم پہلے آپ کے کیس کا جائزہ لیتے ہیں پھر واضح تخمینہ دیتے ہیں۔",
      },
      {
        question: "کیا مصنوعی ہاتھ روزمرہ کاموں جیسے کھانا کھانے یا کپڑے پہننے میں مدد دیتا ہے؟",
        answer: "بہت سے مریض صحیح آلہ اور تربیت کے ساتھ روزمرہ کاموں میں حقیقی خودمختاری حاصل کرتے ہیں۔ فٹنگ کے ساتھ اوکیوپیشنل تھراپی ہاتھ کی افادیت میں واضح فرق ڈالتی ہے۔",
      },
      {
        question: "کیا میرا بچہ مصنوعی بازو سے بڑا ہو جائے گا؟",
        answer: "جی ہاں، بڑھتے بچوں کو عام طور پر وقت کے ساتھ سائز تبدیل کرنے یا نئے آلے کی ضرورت ہوتی ہے۔ ہم باقاعدہ جائزے کا شیڈول رکھتے ہیں تاکہ آلہ بچے کی نشوونما کے ساتھ فٹ رہے۔",
      },
      {
        question: "کیا مصنوعی ہاتھ لینے کے بعد تربیت درکار ہوتی ہے؟",
        answer: "جی ہاں۔ روزمرہ سرگرمیوں کے لیے مصنوعی ہاتھ کو محفوظ اور مؤثر طریقے سے استعمال کرنا سیکھنے میں عام طور پر رہنمائی شدہ مشق درکار ہوتی ہے، جو ہم فٹنگ کے عمل کا حصہ بنا کر فراہم کرتے ہیں۔",
      },
    ],
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
    faqs: [
      {
        question: "At what age can a child start wearing orthotics?",
        answer: "There's no single age that applies to every child. It depends on their diagnosis, walking pattern, joint alignment, and functional goals — an assessment is the only way to know if and when a brace is appropriate.",
      },
      {
        question: "Does every child with flat feet need orthotics?",
        answer: "No. Flexible flat feet are common in young children and often resolve on their own. Orthotics are usually considered only when there's pain, stiffness, asymmetry, frequent falls, or an underlying neurological condition.",
      },
      {
        question: "Why does my child walk on their toes?",
        answer: "Toe-walking can be a habit that many children outgrow, but it can sometimes relate to muscle tightness or a neurological condition. If it persists past early childhood, an assessment is worth getting rather than waiting it out.",
      },
      {
        question: "How often will my child's brace need to be replaced?",
        answer: "Growing children typically need sizing reviews and replacement more often than adults — how often depends on growth rate, device type, and how the child uses it day to day.",
      },
      {
        question: "What if the brace causes redness or my child refuses to wear it?",
        answer: "Redness that doesn't fade quickly, or a child who consistently resists wearing the device, both need a follow-up visit. It usually means the fit needs adjusting rather than something to push through.",
      },
    ],
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
    faqsUr: [
      {
        question: "بچہ کس عمر میں آرتھوٹکس پہننا شروع کر سکتا ہے؟",
        answer: "ہر بچے کے لیے کوئی ایک عمر لاگو نہیں ہوتی۔ یہ اس کی تشخیص، چلنے کے انداز، جوڑوں کی سیدھ اور مقاصد پر منحصر ہے — صرف معائنے سے معلوم ہو سکتا ہے کہ برٹھ کی ضرورت ہے یا نہیں۔",
      },
      {
        question: "کیا فلیٹ فٹ والے ہر بچے کو آرتھوٹکس کی ضرورت ہے؟",
        answer: "نہیں۔ چھوٹے بچوں میں لچکدار فلیٹ فٹ عام ہے اور اکثر خود بخود ٹھیک ہو جاتی ہے۔ آرتھوٹکس عام طور پر تب تجویز کیے جاتے ہیں جب درد، سختی، عدم توازن، بار بار گرنا یا کوئی اعصابی حالت ہو۔",
      },
      {
        question: "میرا بچہ پنجوں کے بل کیوں چلتا ہے؟",
        answer: "پنجوں کے بل چلنا اکثر ایک عادت ہوتی ہے جو بہت سے بچے خود بخود چھوڑ دیتے ہیں، لیکن کبھی کبھار یہ پٹھوں کی سختی یا اعصابی حالت سے متعلق ہو سکتا ہے۔ اگر یہ برقرار رہے تو معائنہ کروانا بہتر ہے۔",
      },
      {
        question: "میرے بچے کا برٹھ کتنی بار تبدیل کرنا پڑے گا؟",
        answer: "بڑھتے بچوں کو بالغوں کے مقابلے میں زیادہ کثرت سے سائز کے جائزے اور تبدیلی کی ضرورت ہوتی ہے — یہ نشوونما کی رفتار، آلے کی قسم اور بچے کے استعمال پر منحصر ہے۔",
      },
      {
        question: "اگر برٹھ سے لالی ہو یا بچہ پہننے سے انکار کرے تو کیا کریں؟",
        answer: "لالی جو جلد ختم نہ ہو، یا بچہ مسلسل آلہ پہننے سے انکار کرے، دونوں صورتوں میں فالو اپ وزٹ ضروری ہے۔ عام طور پر اس کا مطلب فٹنگ میں تبدیلی کی ضرورت ہے، مجبور کرنا نہیں۔",
      },
    ],
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
    faqs: [
      {
        question: "Can a scoliosis brace straighten the spine?",
        answer: "Bracing is generally intended to help manage curve progression during growth rather than fully straighten the spine. Whether it's appropriate, and what result to expect, depends on the curve and specialist assessment.",
      },
      {
        question: "How many hours a day does a scoliosis brace need to be worn?",
        answer: "Wear schedules are set individually by the prescribing team based on the case. Some protocols call for extended daily wear — always follow the specific plan rather than a general rule.",
      },
      {
        question: "Is a ready-made back belt the same as a custom spinal brace?",
        answer: "No. A pharmacy back belt offers general support, while a clinical spinal orthosis (like a TLSO) is individually measured and molded for a specific condition. They're not interchangeable.",
      },
      {
        question: "Can a child go to school or sleep while wearing a spinal brace?",
        answer: "Many prescribed spinal braces are designed to be worn under clothing during normal daily activities, including school. Sleep-wear schedules vary by case — your specialist will confirm what's right for your situation.",
      },
      {
        question: "Will a back brace weaken my muscles over time?",
        answer: "This is a common concern. Appropriately prescribed and monitored bracing, combined with any recommended physiotherapy, is generally managed to avoid this — regular follow-up is part of how we watch for it.",
      },
    ],
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
    faqsUr: [
      {
        question: "کیا اسکولیوسس بریس ریڑھ کی ہڈی کو سیدھا کر سکتا ہے؟",
        answer: "بریسنگ عام طور پر نشوونما کے دوران کریو کے بڑھنے کو روکنے کے لیے ہوتی ہے، مکمل طور پر سیدھا کرنے کے لیے نہیں۔ کیا نتیجہ متوقع ہے یہ کریو اور ماہر کے جائزے پر منحصر ہے۔",
      },
      {
        question: "اسکولیوسس بریس روزانہ کتنے گھنٹے پہننا چاہیے؟",
        answer: "پہننے کا شیڈول علاج کرنے والی ٹیم کیس کے مطابق طے کرتی ہے۔ کچھ صورتوں میں طویل روزانہ پہننا ضروری ہوتا ہے — عمومی اصول کی بجائے اپنے مخصوص منصوبے پر عمل کریں۔",
      },
      {
        question: "کیا تیار شدہ کمر بیلٹ اور کسٹم اسپائنل بریس ایک جیسے ہیں؟",
        answer: "نہیں۔ عام کمر بیلٹ محض عمومی سہارا دیتی ہے، جبکہ طبی اسپائنل آرتھوسس (جیسے ٹی ایل ایس او) مخصوص حالت کے لیے انفرادی طور پر ناپ کر بنایا جاتا ہے۔ دونوں قابلِ تبادلہ نہیں۔",
      },
      {
        question: "کیا بچہ اسپائنل بریس پہن کر اسکول جا سکتا ہے یا سو سکتا ہے؟",
        answer: "بہت سے تجویز کردہ اسپائنل بریسز کپڑوں کے نیچے روزمرہ سرگرمیوں بشمول اسکول کے دوران پہننے کے لیے ڈیزائن کیے جاتے ہیں۔ نیند کے دوران پہننے کا شیڈول کیس کے مطابق مختلف ہوتا ہے۔",
      },
      {
        question: "کیا کمر بریس وقت کے ساتھ پٹھے کمزور کر دیتا ہے؟",
        answer: "یہ ایک عام تشویش ہے۔ صحیح طریقے سے تجویز کردہ اور نگرانی شدہ بریسنگ، فزیوتھراپی کے ساتھ، عام طور پر اس سے بچنے کے لیے منظم کی جاتی ہے — باقاعدہ فالو اپ اسی نگرانی کا حصہ ہے۔",
      },
    ],
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
    faqs: [
      {
        question: "Can an AFO help foot drop after a stroke?",
        answer: "An AFO can improve foot clearance and walking stability for many stroke patients, but the right design depends on strength, muscle tone, knee control, and footwear — an assessment is needed to confirm it's the right fit for you.",
      },
      {
        question: "What is the difference between an AFO and a KAFO?",
        answer: "An AFO (ankle-foot orthosis) supports the ankle and foot. A KAFO extends further to support the knee as well, and is considered when a patient needs additional knee stability beyond what an AFO provides.",
      },
      {
        question: "Can I wear an AFO inside normal shoes?",
        answer: "Often, yes — but the shoe needs enough width and depth to accommodate the brace comfortably. Bringing your usual shoes to the fitting helps us confirm the right fit from the start.",
      },
      {
        question: "How much does an AFO or KAFO cost in Pakistan?",
        answer: "Cost varies by material (thermoplastic vs. carbon fibre), whether it's custom-fabricated or off-the-shelf, and the condition being treated. We give a specific estimate after assessing your gait and needs.",
      },
      {
        question: "Does wearing a leg brace mean my muscles will get weaker?",
        answer: "Not when it's properly prescribed. An AFO or KAFO is meant to support safe, functional walking — often alongside physiotherapy, not instead of it. Your device and therapy plan should work together.",
      },
    ],
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
    faqsUr: [
      {
        question: "کیا اے ایف او فالج کے بعد ڈراپ فٹ میں مدد دیتا ہے؟",
        answer: "اے ایف او بہت سے فالج کے مریضوں میں چلنے کے دوران پاؤں کی حرکت اور استحکام بہتر بنا سکتا ہے، لیکن صحیح ڈیزائن طاقت، پٹھوں کی حالت اور گھٹنے کے کنٹرول پر منحصر ہے۔",
      },
      {
        question: "اے ایف او اور کے اے ایف او میں کیا فرق ہے؟",
        answer: "اے ایف او (اینکل فٹ آرتھوسس) ٹخنے اور پاؤں کو سہارا دیتا ہے۔ کے اے ایف او مزید گھٹنے تک سہارا دیتا ہے، اور اس وقت تجویز کیا جاتا ہے جب اضافی گھٹنے کی استحکام درکار ہو۔",
      },
      {
        question: "کیا میں اے ایف او کے ساتھ عام جوتے پہن سکتا ہوں؟",
        answer: "اکثر ہاں — لیکن جوتے میں برٹھ کے لیے کافی چوڑائی اور گہرائی ہونی چاہیے۔ فٹنگ کے وقت اپنے عام جوتے ساتھ لانے سے شروع سے ہی صحیح فٹ یقینی بنتی ہے۔",
      },
      {
        question: "پاکستان میں اے ایف او یا کے اے ایف او کی قیمت کتنی ہے؟",
        answer: "قیمت مواد (تھرموپلاسٹک بمقابلہ کاربن فائبر)، کسٹم بنا ہوا ہے یا تیار شدہ، اور علاج کی جانے والی حالت پر منحصر ہے۔ ہم آپ کی چال اور ضروریات کا جائزہ لینے کے بعد مخصوص تخمینہ دیتے ہیں۔",
      },
      {
        question: "کیا لیگ برٹھ پہننے سے پٹھے کمزور ہو جاتے ہیں؟",
        answer: "صحیح طریقے سے تجویز کیے جانے پر ایسا نہیں ہوتا۔ اے ایف او یا کے اے ایف او کا مقصد محفوظ اور فعال چلنے میں مدد دینا ہے — اکثر فزیوتھراپی کے ساتھ، اس کی جگہ نہیں۔",
      },
    ],
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
    faqs: [
      {
        question: "Should I wear a wrist splint for carpal tunnel symptoms at night?",
        answer: "Night-time wrist splinting is a common approach for carpal tunnel symptoms, but the right type and fit depend on your specific case. An assessment helps confirm it's the appropriate option before you commit to one.",
      },
      {
        question: "Should my splint be custom-made or is a ready-made one enough?",
        answer: "A ready-made splint may suit mild, temporary needs, but complex injuries, post-fracture recovery, or tendon repairs usually need a custom-molded splint for a precise, effective fit.",
      },
      {
        question: "How tight should a wrist or hand splint be?",
        answer: "It should feel secure without causing numbness, tingling, discoloration, or increasing pain. Any of those signs mean the splint needs to be adjusted, not tightened further or pushed through.",
      },
      {
        question: "Can I still work, cook, or pray while wearing a splint?",
        answer: "Most splints are designed to allow essential daily activities, though some tasks may need to be modified temporarily. We'll talk through your specific routine when fitting the device.",
      },
      {
        question: "Does a hand splint help after a stroke?",
        answer: "A splint can help manage hand positioning and stiffness after a stroke as part of a broader rehabilitation plan. It works best alongside occupational therapy rather than as a stand-alone fix.",
      },
    ],
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
    faqsUr: [
      {
        question: "کیا رات کو کارپل ٹنل کی علامات کے لیے کلائی کا اسپلنٹ پہننا چاہیے؟",
        answer: "رات کو کلائی کا اسپلنٹ پہننا کارپل ٹنل کی علامات کے لیے عام طریقہ ہے، لیکن صحیح قسم اور فٹنگ آپ کے مخصوص کیس پر منحصر ہے۔ فیصلہ کرنے سے پہلے معائنہ کروائیں۔",
      },
      {
        question: "کیا میرا اسپلنٹ کسٹم بنا ہونا چاہیے یا تیار شدہ کافی ہے؟",
        answer: "تیار شدہ اسپلنٹ ہلکی، عارضی ضرورت کے لیے مناسب ہو سکتا ہے، لیکن پیچیدہ چوٹ، فریکچر کے بعد یا ٹینڈن کی مرمت کے لیے عام طور پر کسٹم مولڈڈ اسپلنٹ درست فٹنگ کے لیے ضروری ہوتا ہے۔",
      },
      {
        question: "کلائی یا ہاتھ کا اسپلنٹ کتنا تنگ ہونا چاہیے؟",
        answer: "یہ محفوظ محسوس ہونا چاہیے مگر سن ہونا، جھنجھناہٹ، رنگت کی تبدیلی یا بڑھتا ہوا درد نہیں ہونا چاہیے۔ ان میں سے کوئی بھی علامت ظاہر کرتی ہے کہ اسپلنٹ کو ایڈجسٹ کرنے کی ضرورت ہے۔",
      },
      {
        question: "کیا اسپلنٹ پہن کر کام، کھانا پکانا یا نماز ادا کر سکتے ہیں؟",
        answer: "زیادہ تر اسپلنٹ روزمرہ کی ضروری سرگرمیوں کی اجازت دینے کے لیے بنائے جاتے ہیں، اگرچہ کچھ کاموں کو عارضی طور پر تبدیل کرنا پڑ سکتا ہے۔ فٹنگ کے وقت ہم آپ کے معمول پر بات کریں گے۔",
      },
      {
        question: "کیا ہینڈ اسپلنٹ فالج کے بعد مدد دیتا ہے؟",
        answer: "اسپلنٹ فالج کے بعد ہاتھ کی پوزیشن اور سختی کو سنبھالنے میں مدد دے سکتا ہے، لیکن یہ بحالی کے وسیع منصوبے کا حصہ ہونا چاہیے۔ یہ اوکیوپیشنل تھراپی کے ساتھ بہترین کام کرتا ہے۔",
      },
    ],
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
    faqs: [
      {
        question: "Are custom orthotics better than ready-made insoles from a pharmacy?",
        answer: "Not always. Ready-made insoles can suit mild or temporary discomfort, but custom orthotics are usually more appropriate for complex foot shape, recurring pain, or specific conditions like severe flat feet or plantar fasciitis.",
      },
      {
        question: "Can custom insoles cure plantar fasciitis or flat feet?",
        answer: "Orthotics can help support the foot and reduce strain for many people, but they're not a universal cure. Persistent or severe pain should be properly assessed rather than treated indefinitely on your own.",
      },
      {
        question: "How are custom insoles made?",
        answer: "We take a detailed impression or scan of your foot along with a gait assessment, then fabricate the insole around your specific foot shape and walking pattern — not a generic mold.",
      },
      {
        question: "Will custom orthotics fit in my regular shoes?",
        answer: "Most custom orthotics are designed with a slim profile to fit inside standard footwear, including formal shoes and sneakers. Bring the shoes you wear most often to your fitting so we can confirm the fit.",
      },
      {
        question: "Why do new insoles feel uncomfortable at first?",
        answer: "A short adjustment period is normal as your foot gets used to a different support pattern. If discomfort continues past the first couple of weeks or gets worse, come back so we can review the fit.",
      },
    ],
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
    faqsUr: [
      {
        question: "کیا کسٹم آرتھوٹکس فارمیسی کے تیار شدہ انسولز سے بہتر ہیں؟",
        answer: "ہمیشہ نہیں۔ تیار شدہ انسولز ہلکی یا عارضی تکلیف کے لیے مناسب ہو سکتے ہیں، لیکن کسٹم آرتھوٹکس پیچیدہ پاؤں کی ساخت، بار بار درد یا شدید فلیٹ فٹ جیسی حالتوں کے لیے زیادہ موزوں ہوتے ہیں۔",
      },
      {
        question: "کیا کسٹم انسولز پلانٹر فیشیائٹس یا فلیٹ فٹ کا علاج کر سکتے ہیں؟",
        answer: "آرتھوٹکس بہت سے لوگوں میں پاؤں کو سہارا دینے اور دباؤ کم کرنے میں مدد دے سکتے ہیں، لیکن یہ مکمل علاج نہیں ہیں۔ مسلسل یا شدید درد کا باقاعدہ معائنہ کروائیں۔",
      },
      {
        question: "کسٹم انسولز کیسے بنائے جاتے ہیں؟",
        answer: "ہم آپ کے پاؤں کی تفصیلی امپریشن یا اسکین کے ساتھ چال کا جائزہ لیتے ہیں، پھر انسول کو آپ کی مخصوص پاؤں کی ساخت اور چلنے کے انداز کے مطابق تیار کرتے ہیں۔",
      },
      {
        question: "کیا کسٹم انسولز میرے عام جوتوں میں فٹ ہوں گے؟",
        answer: "زیادہ تر کسٹم آرتھوٹکس پتلے ڈیزائن کے ساتھ عام جوتوں بشمول فارمل جوتوں میں فٹ ہونے کے لیے بنائے جاتے ہیں۔ فٹنگ کے وقت اپنے زیادہ استعمال ہونے والے جوتے ساتھ لائیں۔",
      },
      {
        question: "نئے انسولز شروع میں غیر آرام دہ کیوں لگتے ہیں؟",
        answer: "پاؤں کو نئے سہارے کی عادت پڑنے میں تھوڑا وقت لگنا معمول ہے۔ اگر تکلیف دو ہفتوں بعد بھی برقرار رہے یا بڑھ جائے، تو فٹنگ کا جائزہ لینے کے لیے واپس آئیں۔",
      },
    ],
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
    faqs: [
      {
        question: "Does every diabetic patient need special footwear?",
        answer: "Not necessarily, but anyone with reduced foot sensation, deformity, calluses, poor circulation, or a prior ulcer should discuss footwear and foot-care needs with a clinician, since risk builds up quietly when feeling is reduced.",
      },
      {
        question: "Can diabetic footwear heal an existing foot ulcer?",
        answer: "No — footwear helps reduce pressure and prevent further injury, but an active ulcer needs proper medical assessment and treatment. Don't rely on footwear alone if a wound is already present.",
      },
      {
        question: "What should I check on my feet every day if I have diabetes?",
        answer: "Check the tops, soles, heels, and between the toes for cuts, blisters, redness, swelling, drainage, or new calluses. See a doctor promptly for any new wound or sign of infection, even if it doesn't hurt.",
      },
      {
        question: "Can I wear sandals if I have diabetic neuropathy?",
        answer: "It depends on your specific risk level — some patients need closed, protective shoes while others can safely use certain sandal designs. This is worth confirming individually rather than assuming either way.",
      },
      {
        question: "How much does diabetic footwear cost in Pakistan?",
        answer: "Cost depends on whether you need custom-molded shoes, extra-depth designs, or pressure-relief insoles, and on the complexity of your foot shape. We assess your feet first and then give a clear estimate.",
      },
    ],
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
    faqsUr: [
      {
        question: "کیا ذیابیطس کے ہر مریض کو خصوصی جوتوں کی ضرورت ہے؟",
        answer: "ضروری نہیں، لیکن جن کے پاؤں میں احساس کم ہو، بگاڑ ہو، کیلس ہوں، خون کی گردش کمزور ہو یا پہلے السر ہو چکا ہو، انہیں معالج سے فٹ ویئر اور پاؤں کی دیکھ بھال پر بات کرنی چاہیے۔",
      },
      {
        question: "کیا ذیابیطس فٹ ویئر موجودہ پاؤں کے السر کو ٹھیک کر سکتا ہے؟",
        answer: "نہیں — فٹ ویئر دباؤ کم کرنے اور مزید نقصان سے بچانے میں مدد دیتا ہے، لیکن فعال السر کو طبی معائنے اور علاج کی ضرورت ہوتی ہے۔ زخم موجود ہو تو صرف جوتوں پر انحصار نہ کریں۔",
      },
      {
        question: "اگر مجھے ذیابیطس ہے تو روزانہ اپنے پاؤں پر کیا چیک کرنا چاہیے؟",
        answer: "پاؤں کے اوپر، تلوے، ایڑی اور انگلیوں کے درمیان کٹ، چھالے، لالی، سوجن یا نیا کیلس دیکھیں۔ کوئی بھی نیا زخم یا انفیکشن کی علامت ہو تو فوراً ڈاکٹر سے ملیں، چاہے درد نہ ہو۔",
      },
      {
        question: "کیا ذیابیطس نیوروپیتھی میں سینڈل پہن سکتے ہیں؟",
        answer: "یہ آپ کے مخصوص خطرے کی سطح پر منحصر ہے — کچھ مریضوں کو بند، حفاظتی جوتوں کی ضرورت ہوتی ہے جبکہ کچھ محفوظ طریقے سے مخصوص سینڈل استعمال کر سکتے ہیں۔ انفرادی طور پر تصدیق کروانا بہتر ہے۔",
      },
      {
        question: "پاکستان میں ذیابیطس فٹ ویئر کی قیمت کتنی ہے؟",
        answer: "قیمت اس بات پر منحصر ہے کہ آپ کو کسٹم مولڈڈ جوتے، اضافی گہرائی کا ڈیزائن یا پریشر ریلیف انسولز چاہییں، اور آپ کے پاؤں کی ساخت کتنی پیچیدہ ہے۔ ہم پہلے معائنہ کرتے ہیں پھر واضح تخمینہ دیتے ہیں۔",
      },
    ],
  },
];

export function getServiceById(id: string | undefined): Service | undefined {
  return services.find((s) => s.id === id);
}
