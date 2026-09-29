// Central dictionary for the site's English / Urdu language toggle.
// Every UI string the toggle covers lives here, organized by section or
// page, so a component just does `const { t } = useLanguage()` and reads
// `t.hero.title` etc. Content that comes from Contentful (blog posts) is
// authored in English only and is not covered by this toggle.

export interface StatItem {
  value: string;
  label: string;
  sub: string;
}

export interface StepItem {
  title: string;
  description: string;
}

export interface TestimonialItem {
  service: string;
  text: string;
}

export interface ReasonItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface Translations {
  common: {
    bookConsultation: string;
    readyTitle: string;
    readyDescription: string;
    exploreServices: string;
    backHome: string;
  };
  nav: {
    home: string;
    gallery: string;
    whyUs: string;
    services: string;
    viewAllServices: string;
    company: string;
    aboutUs: string;
    contactUs: string;
    blogs: string;
    bookNow: string;
    toggleMenu: string;
  };
  footer: {
    tagline: string;
    description: string;
    contactInfo: string;
    address: string;
    whatsapp: string;
    ourServices: string;
    followFacebook: string;
    copyright: (year: number) => string;
    bestClinic: string;
  };
  hero: {
    badge: string;
    headlineSmall: string;
    headlinePrefix: string;
    headlineHighlight: string;
    description: string;
    ctaBook: string;
    ctaExplore: string;
    stats: StatItem[];
  };
  trustStrip: string[];
  about: {
    storyTitlePrefix: string;
    storyTitleHighlight: string;
    paragraph1: string;
    paragraph2: string;
    card1Title: string;
    card1Text: string;
    card2Title: string;
    card2Text: string;
    quote: string;
  };
  process: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    steps: StepItem[];
    cta: string;
  };
  servicesSection: {
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    ctaText: string;
    ctaButton: string;
  };
  gallery: {
    badge: string;
    title: string;
    description: string;
    categories: Record<"All" | "Footwear" | "Orthotics" | "Prosthetics", string>;
    items: Record<string, string>;
    ctaText: string;
    ctaButton: string;
    close: string;
  };
  testimonials: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    items: TestimonialItem[];
  };
  whyChooseUs: {
    titleLine1: string;
    titleHighlight: string;
    description: string;
    reasons: ReasonItem[];
  };
  faq: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    items: FaqItem[];
    cta: string;
  };
  contactSection: {
    badge: string;
    title: string;
    description: string;
    successTitle: string;
    successText: string;
    submitAnother: string;
    formTitle: string;
    formSubtitle: string;
    labelName: string;
    placeholderName: string;
    labelPhone: string;
    placeholderPhone: string;
    labelService: string;
    placeholderService: string;
    labelMessage: string;
    placeholderMessage: string;
    errorName: string;
    errorPhone: string;
    errorService: string;
    submitButton: string;
    disclaimer: string;
    services: string[];
  };
  aboutPage: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    paragraph1: string;
    paragraph2: string;
    quote: string;
    valuesTitlePrefix: string;
    valuesTitleHighlight: string;
    valuesDescription: string;
    values: ValueItem[];
  };
  servicesPage: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    learnMore: string;
  };
  serviceDetail: {
    backAll: string;
    inKarachi: string;
    aboutTitle: string;
    keyBenefits: string;
    whoHelps: string;
    enquire: string;
    exploreOthers: string;
    viewAll: string;
  };
  contactPage: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
  };
  blogPage: {
    badge: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    errorText: string;
    comingSoonTitle: string;
    comingSoonText: string;
    readMore: string;
  };
  blogDetail: {
    backToBlog: string;
  };
}

const en: Translations = {
  common: {
    bookConsultation: "Book a Consultation",
    readyTitle: "Ready to Get Started?",
    readyDescription:
      "Contact our team in Karachi to book your consultation. We'll assess your needs and recommend the right solution for you.",
    exploreServices: "Explore Services",
    backHome: "Back to Home",
  },
  nav: {
    home: "Home",
    gallery: "Gallery",
    whyUs: "Why Choose Us",
    services: "Services",
    viewAllServices: "View All Services",
    company: "Company",
    aboutUs: "About Us",
    contactUs: "Contact Us",
    blogs: "Blogs",
    bookNow: "Book Now",
    toggleMenu: "Toggle menu",
  },
  footer: {
    tagline: "Restoring Mobility. Inspiring Hope.",
    description: "Leading orthotic and prosthetic solutions provider in Karachi, Pakistan — serving patients of all ages.",
    contactInfo: "Contact Info",
    address: "Karachi, Sindh, Pakistan",
    whatsapp: "(WhatsApp)",
    ourServices: "Our Services",
    followFacebook: "Follow on Facebook",
    copyright: (year) => `© ${year} Umeed Care Center — Orthotics & Prosthetics, Karachi.`,
    bestClinic: "Best orthotic and prosthetic clinic in Karachi, Pakistan",
  },
  hero: {
    badge: "Orthotic & Prosthetic Clinic — Karachi, Pakistan",
    headlineSmall: "Orthotic & Prosthetic Clinic in Karachi",
    headlinePrefix: "Restoring Mobility, ",
    headlineHighlight: "Inspiring Hope",
    description:
      "Umeed Care Center provides expert orthotic and prosthetic solutions in Karachi — including prosthetic limbs, custom orthotics, spinal braces, and diabetic footwear. Compassionate care under one roof.",
    ctaBook: "Book a Consultation",
    ctaExplore: "Explore Services",
    stats: [
      { value: "8+", label: "Specialist Services", sub: "Orthotics • Prosthetics • Footwear" },
      { value: "All Ages", label: "Patients Served", sub: "From infants to elderly" },
      { value: "100%", label: "Custom-Fitted", sub: "Every solution individually made" },
    ],
  },
  trustStrip: [
    "Lower Limb Prosthetics",
    "Upper Limb Prosthetics",
    "Pediatric Orthotics & Prosthetics",
    "Spinal Orthotics",
    "Lower Limb Orthotics",
    "Upper Limb Orthotics",
    "Custom Foot Orthotics",
    "Diabetic Footwear",
  ],
  about: {
    storyTitlePrefix: "Our Story of ",
    storyTitleHighlight: "Umeed",
    paragraph1:
      "\"Umeed\" means hope. It is the foundation of everything we do. At Umeed Care Centre, we understand that finding the right orthotic or prosthetic solution is more than just a medical procedure—it is a journey toward regaining independence, confidence, and human dignity.",
    paragraph2:
      "From children taking their first supported steps to elderly patients rediscovering the joy of walking, our compassionate team provides a complete range of expert services under one roof. You are not just a patient to us; you are family.",
    card1Title: "Compassionate Care",
    card1Text: "Every consultation is rooted in empathy and understanding.",
    card2Title: "Expert Precision",
    card2Text: "Custom-fitted solutions designed for your unique body.",
    quote: "Every person deserves to move freely and live fully.",
  },
  process: {
    badge: "Simple Process",
    titlePrefix: "From First Contact to ",
    titleHighlight: "Full Mobility",
    description:
      "We make the journey to better mobility as simple and stress-free as possible — three clear steps from consultation to custom fit.",
    steps: [
      {
        title: "Book a Consultation",
        description:
          "Reach us via WhatsApp, phone, or the form below. We'll confirm a convenient appointment time — no long waiting lists.",
      },
      {
        title: "Assessment & Measurement",
        description:
          "Our specialist evaluates your condition, takes precise measurements, and discusses your mobility goals to design the ideal solution.",
      },
      {
        title: "Custom Fitting & Follow-Up",
        description:
          "Your device is crafted, fitted, and fine-tuned in-house. We stay with you through follow-up visits until you're fully comfortable.",
      },
    ],
    cta: "Start Your Journey Today",
  },
  servicesSection: {
    titlePrefix: "Comprehensive Care ",
    titleHighlight: "Under One Roof",
    description:
      "We provide a full spectrum of orthotic and prosthetic solutions, carefully tailored to each individual's unique needs and goals.",
    ctaText: "Need a consultation for a specific service?",
    ctaButton: "Contact Us Today",
  },
  gallery: {
    badge: "Our Products",
    title: "Crafted for Comfort & Mobility",
    description:
      "From custom orthotic footwear to prosthetic components — every product is designed with care and precision to restore independence and improve quality of life.",
    categories: { All: "All", Footwear: "Footwear", Orthotics: "Orthotics", Prosthetics: "Prosthetics" },
    items: {
      "Prosthetic Joint": "Prosthetic Joint",
      "Ankle-Foot Orthosis Boot": "Ankle-Foot Orthosis Boot",
      "Custom Ankle Splint": "Custom Ankle Splint",
      "Wrist Orthosis": "Wrist Orthosis",
      "Green Therapeutic Sandals": "Green Therapeutic Sandals",
      "Diabetic Sandals — Sage": "Diabetic Sandals — Sage",
      "Cross-Strap Sandals": "Cross-Strap Sandals",
      "Platform Orthopaedic Sandals": "Platform Orthopaedic Sandals",
      "Heavy-Duty Sandals": "Heavy-Duty Sandals",
      "Paediatric Sandals": "Paediatric Sandals",
      "Two-Strap Sandals": "Two-Strap Sandals",
      "Silicone Prosthetic Hand": "Silicone Prosthetic Hand",
      "Custom AFO Collection": "Custom AFO Collection",
      "Full-Leg HKAFO — Pink": "Full-Leg HKAFO — Pink",
      "Dynamic Finger Orthosis": "Dynamic Finger Orthosis",
      "Lumbar Spinal Brace": "Lumbar Spinal Brace",
      "Foot Orthoses — Violet": "Foot Orthoses — Violet",
      "Knee Brace Range": "Knee Brace Range",
      "Bilateral Leg Orthosis": "Bilateral Leg Orthosis",
      "Full-Leg HKAFO — Violet": "Full-Leg HKAFO — Violet",
      "Walking Boot Collection": "Walking Boot Collection",
      "Wedge Sandals — Pair": "Wedge Sandals — Pair",
      "Paediatric Orthotic Boots": "Paediatric Orthotic Boots",
    },
    ctaText: "Want to see more of our work?",
    ctaButton: "See all photos on Facebook →",
    close: "Close",
  },
  testimonials: {
    badge: "Patient Stories",
    titlePrefix: "Lives Changed at ",
    titleHighlight: "Umeed",
    description: "Hear from patients across Karachi whose mobility and confidence have been restored.",
    items: [
      {
        service: "Lower Limb Prosthetics",
        text: "After my amputation I was devastated. The team at Umeed Care Center not only provided a perfect-fitting prosthetic leg but guided me through every step with so much patience and care. I'm walking again and I couldn't be more grateful.",
      },
      {
        service: "Custom Foot Orthotics",
        text: "I had been suffering from severe foot pain for years. After getting custom orthotics made here, the difference was night and day. Highly professional team, very precise measurements. 100% recommend to anyone in Karachi.",
      },
      {
        service: "Pediatric Orthotics",
        text: "My son has cerebral palsy and needed special ankle supports. The specialist was incredibly gentle with him and explained everything clearly to us. The orthotics fit perfectly and his walking has improved so much.",
      },
      {
        service: "Spinal Orthotics",
        text: "Got a lumbar brace for my back condition. The fitting was done with great care and the brace is very comfortable. Staff is knowledgeable and the WhatsApp contact makes it very easy to ask follow-up questions.",
      },
    ],
  },
  whyChooseUs: {
    titleLine1: "Why Choose",
    titleHighlight: "Umeed?",
    description:
      "We stand apart through our unwavering commitment to patient dignity and our rigorous attention to clinical detail.",
    reasons: [
      { title: "Expert Team", description: "Highly qualified and experienced specialists dedicated to precision and optimal outcomes." },
      { title: "Personalized Care", description: "We listen to your story, understand your goals, and craft solutions specifically for your body." },
      { title: "All Under One Roof", description: "From consultation and measurement to fitting and follow-ups, everything is handled in-house." },
      { title: "Compassionate Approach", description: "We treat every patient with the dignity, warmth, and respect they truly deserve." },
    ],
  },
  faq: {
    badge: "Frequently Asked Questions",
    titlePrefix: "Common Questions About ",
    titleHighlight: "Our Karachi Clinic",
    description: "Answers to what patients usually ask before their first visit. Still have a question? Message us on WhatsApp.",
    items: [
      {
        question: "Where is Umeed Care Center located in Karachi?",
        answer: "Umeed Care Center is based in Karachi, Sindh, Pakistan. Message us on WhatsApp and we'll share the exact clinic address and directions for your appointment.",
      },
      {
        question: "Do you treat patients from outside Karachi?",
        answer: "Yes. We regularly see patients travelling from other cities across Sindh and Pakistan. WhatsApp us your details in advance so we can plan your visit, measurements, and fitting around your travel schedule.",
      },
      {
        question: "How long does it take to get a custom prosthetic or orthotic device?",
        answer: "Timelines depend on the type of device and complexity of the case — simple orthotics can be ready in a few days, while custom prosthetic limbs typically involve an assessment, casting, fabrication, and fitting over multiple visits. We'll give you a clear timeline after your initial consultation.",
      },
      {
        question: "Do you provide orthotic and prosthetic care for children?",
        answer: "Yes. Our pediatric orthotics and prosthetics program is designed specifically for infants, children, and teenagers, with regular sizing reviews as they grow.",
      },
      {
        question: "What conditions do your orthotic braces and supports treat?",
        answer: "Our orthotic devices support conditions including drop foot, scoliosis and spinal issues, post-stroke and cerebral palsy-related mobility challenges, joint instability, flat feet, plantar fasciitis, and diabetic foot complications, among others.",
      },
      {
        question: "How do I book a consultation at Umeed Care Center?",
        answer: "The fastest way is WhatsApp — tap \"Book a Consultation\" anywhere on this site and send us your details. We'll confirm a convenient appointment time and answer any initial questions before your visit.",
      },
    ],
    cta: "Ask Us a Question",
  },
  contactSection: {
    badge: "Free Consultation",
    title: "Book a Consultation",
    description: "Fill in the form and we'll open WhatsApp with your details pre-filled — just hit send.",
    successTitle: "WhatsApp Opened!",
    successText: "Your consultation details are pre-filled in WhatsApp. Just hit send and we'll get back to you shortly.",
    submitAnother: "Submit another request",
    formTitle: "Consultation Request",
    formSubtitle: "We'll pre-fill your WhatsApp message — no typing needed on your end.",
    labelName: "Full Name *",
    placeholderName: "e.g. Ahmed Khan",
    labelPhone: "Phone Number *",
    placeholderPhone: "e.g. 0313 6422564",
    labelService: "Service Needed *",
    placeholderService: "Select a service…",
    labelMessage: "Additional Details (optional)",
    placeholderMessage: "Briefly describe your condition, symptoms, or any questions you have…",
    errorName: "Please enter your name",
    errorPhone: "Please enter your phone number",
    errorService: "Please select a service",
    submitButton: "Send via WhatsApp",
    disclaimer: "Clicking opens WhatsApp with your details pre-filled. No data is stored on this site.",
    services: [
      "Lower Limb Prosthetics",
      "Upper Limb Prosthetics",
      "Pediatric Orthotics & Prosthetics",
      "Spinal Orthotics",
      "Lower Limb Orthotics",
      "Upper Limb Orthotics",
      "Custom Foot Orthotics",
      "Diabetic & Pressure-Relief Footwear",
      "General Inquiry",
    ],
  },
  aboutPage: {
    badge: "About Umeed Care Center",
    titlePrefix: "Our Story of ",
    titleHighlight: "Umeed",
    subtitle: "\"Umeed\" means hope — the foundation of everything we do in Karachi's orthotic and prosthetic care.",
    paragraph1:
      "At Umeed Care Center, we understand that finding the right orthotic or prosthetic solution is more than just a medical procedure — it is a journey toward regaining independence, confidence, and human dignity.",
    paragraph2:
      "From children taking their first supported steps to elderly patients rediscovering the joy of walking, our compassionate team provides a complete range of expert services under one roof. You are not just a patient to us; you are family.",
    quote: "Every person deserves to move freely and live fully.",
    valuesTitlePrefix: "What Guides ",
    valuesTitleHighlight: "Us",
    valuesDescription: "The principles behind every consultation, fitting, and follow-up we provide.",
    values: [
      { title: "Compassionate Care", description: "Every consultation is rooted in empathy and understanding. We listen first, treat second." },
      { title: "Expert Precision", description: "Custom-fitted solutions designed for your unique body, backed by certified clinical expertise." },
      { title: "All Under One Roof", description: "From consultation and measurement to fitting and follow-ups, everything is handled in-house." },
      { title: "Care for All Ages", description: "From children taking their first supported steps to elderly patients rediscovering mobility." },
    ],
  },
  servicesPage: {
    badge: "Orthotic & Prosthetic Services — Karachi, Pakistan",
    titlePrefix: "Orthotic & Prosthetic Services in Karachi ",
    titleHighlight: "Under One Roof",
    description:
      "Umeed Care Center offers a full spectrum of orthotic and prosthetic services in Karachi. Every solution is custom-fitted, clinically assessed, and designed around your individual needs and goals.",
    learnMore: "Learn More",
  },
  serviceDetail: {
    backAll: "Back to All Services",
    inKarachi: "in Karachi, Pakistan",
    aboutTitle: "About This Service",
    keyBenefits: "Key Benefits",
    whoHelps: "Who This Helps",
    enquire: "Enquire about this service",
    exploreOthers: "Explore Other Services",
    viewAll: "View All Services",
  },
  contactPage: {
    badge: "Get in Touch",
    title: "Contact Umeed Care Center",
    subtitle: "Karachi, Pakistan",
    description: "Have a question or ready to book a consultation? Fill in the form below and we'll open WhatsApp with your details pre-filled.",
  },
  blogPage: {
    badge: "Umeed Care Center Blog",
    titlePrefix: "Insights on ",
    titleHighlight: "Mobility & Care",
    description: "Practical guides on prosthetics, orthotics, pediatric care, and diabetic foot health from our specialists in Karachi.",
    errorText: "Couldn't load articles right now. Please refresh, or check back shortly.",
    comingSoonTitle: "Coming Soon",
    comingSoonText: "We're preparing helpful articles on orthotic and prosthetic care. Check back soon.",
    readMore: "Read",
  },
  blogDetail: {
    backToBlog: "Back to Blog",
  },
};

const ur: Translations = {
  common: {
    bookConsultation: "مشاورت بک کریں",
    readyTitle: "شروع کرنے کے لیے تیار ہیں؟",
    readyDescription:
      "کراچی میں ہماری ٹیم سے رابطہ کریں اور اپنی مشاورت بک کریں۔ ہم آپ کی ضروریات کا جائزہ لیں گے اور آپ کے لیے صحیح حل تجویز کریں گے۔",
    exploreServices: "خدمات دیکھیں",
    backHome: "ہوم پیج پر واپس جائیں",
  },
  nav: {
    home: "ہوم",
    gallery: "گیلری",
    whyUs: "ہمیں کیوں منتخب کریں",
    services: "خدمات",
    viewAllServices: "تمام خدمات دیکھیں",
    company: "کمپنی",
    aboutUs: "ہمارے بارے میں",
    contactUs: "رابطہ کریں",
    blogs: "بلاگز",
    bookNow: "ابھی بک کریں",
    toggleMenu: "مینیو کھولیں یا بند کریں",
  },
  footer: {
    tagline: "نقل و حرکت کی بحالی، امید کی روشنی",
    description: "کراچی، پاکستان میں آرتھوٹک اور پروستھیٹک حل فراہم کرنے والا معروف ادارہ — ہر عمر کے مریضوں کی خدمت میں۔",
    contactInfo: "رابطہ کی معلومات",
    address: "کراچی، سندھ، پاکستان",
    whatsapp: "(واٹس ایپ)",
    ourServices: "ہماری خدمات",
    followFacebook: "فیس بک پر فالو کریں",
    copyright: (year) => `© ${year} امید کیئر سینٹر — آرتھوٹکس اینڈ پروستھیٹکس، کراچی۔`,
    bestClinic: "کراچی، پاکستان کا بہترین آرتھوٹک اور پروستھیٹک کلینک",
  },
  hero: {
    badge: "آرتھوٹک اینڈ پروستھیٹک کلینک — کراچی، پاکستان",
    headlineSmall: "کراچی میں آرتھوٹک اینڈ پروستھیٹک کلینک",
    headlinePrefix: "نقل و حرکت کی بحالی، ",
    headlineHighlight: "امید کی روشنی",
    description:
      "امید کیئر سینٹر کراچی میں پروستھیٹک اعضاء، کسٹم آرتھوٹکس، اسپائنل بریسز اور ذیابیطس کے مریضوں کے لیے خصوصی جوتوں سمیت ماہرانہ آرتھوٹک اور پروستھیٹک حل فراہم کرتا ہے۔ ایک ہی چھت تلے ہمدردانہ دیکھ بھال۔",
    ctaBook: "مشاورت بک کریں",
    ctaExplore: "خدمات دیکھیں",
    stats: [
      { value: "8+", label: "مخصوص خدمات", sub: "آرتھوٹکس • پروستھیٹکس • فٹ ویئر" },
      { value: "تمام عمریں", label: "مریضوں کی خدمت", sub: "بچوں سے لے کر بزرگوں تک" },
      { value: "100%", label: "کسٹم فٹڈ", sub: "ہر حل انفرادی طور پر تیار کیا جاتا ہے" },
    ],
  },
  trustStrip: [
    "لوئر لمب پروستھیٹکس",
    "اپر لمب پروستھیٹکس",
    "پیڈیاٹرک آرتھوٹکس اینڈ پروستھیٹکس",
    "اسپائنل آرتھوٹکس",
    "لوئر لمب آرتھوٹکس",
    "اپر لمب آرتھوٹکس",
    "کسٹم فٹ آرتھوٹکس",
    "ذیابیطس فٹ ویئر",
  ],
  about: {
    storyTitlePrefix: "امید کی ",
    storyTitleHighlight: "کہانی",
    paragraph1:
      "\"امید\" کا مطلب ہے آسرا۔ یہی ہر اس کام کی بنیاد ہے جو ہم کرتے ہیں۔ امید کیئر سینٹر میں ہم سمجھتے ہیں کہ صحیح آرتھوٹک یا پروستھیٹک حل تلاش کرنا محض ایک طبی عمل نہیں بلکہ خودمختاری، اعتماد اور انسانی وقار کی طرف ایک سفر ہے۔",
    paragraph2:
      "پہلا سہارا لے کر چلنے والے بچوں سے لے کر دوبارہ چلنے کی خوشی محسوس کرنے والے بزرگ مریضوں تک، ہماری ہمدرد ٹیم ایک ہی چھت تلے ماہرانہ خدمات کا مکمل سلسلہ فراہم کرتی ہے۔ آپ ہمارے لیے صرف ایک مریض نہیں بلکہ خاندان کا حصہ ہیں۔",
    card1Title: "ہمدردانہ نگہداشت",
    card1Text: "ہر مشاورت ہمدردی اور سمجھ بوجھ پر مبنی ہوتی ہے۔",
    card2Title: "ماہرانہ درستگی",
    card2Text: "آپ کے جسم کے مطابق کسٹم فٹ حل تیار کیے جاتے ہیں۔",
    quote: "ہر انسان آزادی سے چلنے اور بھرپور زندگی گزارنے کا حق رکھتا ہے۔",
  },
  process: {
    badge: "آسان طریقہ کار",
    titlePrefix: "پہلے رابطے سے ",
    titleHighlight: "مکمل نقل و حرکت تک",
    description:
      "ہم مشاورت سے لے کر کسٹم فٹنگ تک، بہتر نقل و حرکت کے سفر کو آسان اور بے فکر بنانے کی کوشش کرتے ہیں — صرف تین واضح مراحل میں۔",
    steps: [
      {
        title: "مشاورت بک کریں",
        description: "واٹس ایپ، فون یا نیچے دیے گئے فارم کے ذریعے ہم سے رابطہ کریں۔ ہم آسان وقت پر ملاقات طے کریں گے — کوئی لمبی انتظار کی فہرست نہیں۔",
      },
      {
        title: "معائنہ اور پیمائش",
        description: "ہمارے ماہر آپ کی حالت کا جائزہ لیتے ہیں، درست پیمائش کرتے ہیں اور بہترین حل تیار کرنے کے لیے آپ کے نقل و حرکت کے اہداف پر بات کرتے ہیں۔",
      },
      {
        title: "کسٹم فٹنگ اور فالو اپ",
        description: "آپ کا آلہ ہمارے ادارے میں تیار، فٹ اور بہتر کیا جاتا ہے۔ جب تک آپ مکمل طور پر آرام دہ محسوس نہ کریں، ہم فالو اپ وزٹس میں آپ کے ساتھ رہتے ہیں۔",
      },
    ],
    cta: "آج ہی اپنا سفر شروع کریں",
  },
  servicesSection: {
    titlePrefix: "مکمل دیکھ بھال ",
    titleHighlight: "ایک ہی چھت تلے",
    description: "ہم آرتھوٹک اور پروستھیٹک حل کا مکمل سلسلہ فراہم کرتے ہیں، جو ہر فرد کی ضروریات اور اہداف کے مطابق احتیاط سے تیار کیا جاتا ہے۔",
    ctaText: "کسی مخصوص خدمت کے لیے مشاورت درکار ہے؟",
    ctaButton: "آج ہی رابطہ کریں",
  },
  gallery: {
    badge: "ہماری مصنوعات",
    title: "آرام اور نقل و حرکت کے لیے تیار کردہ",
    description:
      "کسٹم آرتھوٹک فٹ ویئر سے لے کر پروستھیٹک اجزاء تک — ہر پروڈکٹ خودمختاری بحال کرنے اور معیارِ زندگی بہتر بنانے کے لیے احتیاط اور درستگی سے تیار کیا جاتا ہے۔",
    categories: { All: "تمام", Footwear: "فٹ ویئر", Orthotics: "آرتھوٹکس", Prosthetics: "پروستھیٹکس" },
    items: {
      "Prosthetic Joint": "پروستھیٹک جوڑ",
      "Ankle-Foot Orthosis Boot": "اینکل فٹ آرتھوسس بوٹ",
      "Custom Ankle Splint": "کسٹم اینکل اسپلنٹ",
      "Wrist Orthosis": "رسٹ آرتھوسس",
      "Green Therapeutic Sandals": "سبز علاجی سینڈل",
      "Diabetic Sandals — Sage": "ذیابیطس سینڈل — سیج",
      "Cross-Strap Sandals": "کراس اسٹریپ سینڈل",
      "Platform Orthopaedic Sandals": "پلیٹ فارم آرتھوپیڈک سینڈل",
      "Heavy-Duty Sandals": "ہیوی ڈیوٹی سینڈل",
      "Paediatric Sandals": "بچوں کے سینڈل",
      "Two-Strap Sandals": "ڈبل اسٹریپ سینڈل",
      "Silicone Prosthetic Hand": "سلیکون پروستھیٹک ہاتھ",
      "Custom AFO Collection": "کسٹم اے ایف او مجموعہ",
      "Full-Leg HKAFO — Pink": "مکمل ٹانگ ایچ کے اے ایف او — گلابی",
      "Dynamic Finger Orthosis": "ڈائنامک فنگر آرتھوسس",
      "Lumbar Spinal Brace": "کمر کا اسپائنل بریس",
      "Foot Orthoses — Violet": "فٹ آرتھوسس — جامنی",
      "Knee Brace Range": "گھٹنے کے بریس کی رینج",
      "Bilateral Leg Orthosis": "دونوں ٹانگوں کا آرتھوسس",
      "Full-Leg HKAFO — Violet": "مکمل ٹانگ ایچ کے اے ایف او — جامنی",
      "Walking Boot Collection": "واکنگ بوٹ مجموعہ",
      "Wedge Sandals — Pair": "ویج سینڈل — جوڑا",
      "Paediatric Orthotic Boots": "بچوں کے آرتھوٹک بوٹ",
    },
    ctaText: "ہمارا مزید کام دیکھنا چاہتے ہیں؟",
    ctaButton: "فیس بک پر تمام تصاویر دیکھیں ←",
    close: "بند کریں",
  },
  testimonials: {
    badge: "مریضوں کی کہانیاں",
    titlePrefix: "زندگیاں جو بدل گئیں ",
    titleHighlight: "امید سے",
    description: "کراچی بھر کے ان مریضوں سے سنیں جن کی نقل و حرکت اور اعتماد بحال ہوا۔",
    items: [
      {
        service: "لوئر لمب پروستھیٹکس",
        text: "میرے ایمپیوٹیشن کے بعد میں بہت مایوس تھی۔ امید کیئر سینٹر کی ٹیم نے نہ صرف بالکل فٹ ٹانگ فراہم کی بلکہ ہر مرحلے پر صبر اور خیال رکھتے ہوئے میری رہنمائی کی۔ اب میں دوبارہ چل رہی ہوں اور میں بہت شکر گزار ہوں۔",
      },
      {
        service: "کسٹم فٹ آرتھوٹکس",
        text: "میں برسوں سے پاؤں کے شدید درد میں مبتلا تھا۔ یہاں سے کسٹم آرتھوٹکس بنوانے کے بعد فرق واضح تھا۔ بہت پیشہ ور ٹیم، بہت درست پیمائش۔ کراچی میں کسی کو بھی سو فیصد تجویز کروں گا۔",
      },
      {
        service: "پیڈیاٹرک آرتھوٹکس",
        text: "میرے بیٹے کو سیریبرل پالسی ہے اور اسے خصوصی اینکل سپورٹ کی ضرورت تھی۔ ماہر نے اس کے ساتھ بہت نرمی سے پیش آ کر ہمیں ہر چیز واضح طور پر سمجھائی۔ آرتھوٹکس بالکل فٹ آئے اور اس کے چلنے میں بہت بہتری آئی۔",
      },
      {
        service: "اسپائنل آرتھوٹکس",
        text: "اپنی کمر کی تکلیف کے لیے لمبر بریس بنوایا۔ فٹنگ بہت احتیاط سے کی گئی اور بریس بہت آرام دہ ہے۔ عملہ باخبر ہے اور واٹس ایپ پر رابطہ کرنا سوال پوچھنا بہت آسان بنا دیتا ہے۔",
      },
    ],
  },
  whyChooseUs: {
    titleLine1: "کیوں منتخب کریں",
    titleHighlight: "امید؟",
    description: "ہم مریض کے وقار کے لیے غیر متزلزل عزم اور طبی تفصیلات پر سخت توجہ کے ذریعے ممتاز ہیں۔",
    reasons: [
      { title: "ماہر ٹیم", description: "درستگی اور بہترین نتائج کے لیے وقف اعلیٰ تربیت یافتہ اور تجربہ کار ماہرین۔" },
      { title: "ذاتی نگہداشت", description: "ہم آپ کی بات سنتے ہیں، آپ کے اہداف سمجھتے ہیں اور خاص طور پر آپ کے جسم کے مطابق حل تیار کرتے ہیں۔" },
      { title: "سب کچھ ایک ہی چھت تلے", description: "مشاورت اور پیمائش سے لے کر فٹنگ اور فالو اپ تک، سب کچھ ہمارے ادارے میں ہی ہوتا ہے۔" },
      { title: "ہمدردانہ رویہ", description: "ہم ہر مریض کے ساتھ وہ عزت، گرمجوشی اور احترام کرتے ہیں جس کے وہ حقیقی معنوں میں مستحق ہیں۔" },
    ],
  },
  faq: {
    badge: "اکثر پوچھے گئے سوالات",
    titlePrefix: "ہمارے کراچی کلینک کے بارے میں ",
    titleHighlight: "عام سوالات",
    description: "پہلی وزٹ سے پہلے مریضوں کے عام سوالات کے جوابات۔ مزید سوال ہے؟ ہمیں واٹس ایپ پر پیغام بھیجیں۔",
    items: [
      {
        question: "امید کیئر سینٹر کراچی میں کہاں واقع ہے؟",
        answer: "امید کیئر سینٹر کراچی، سندھ، پاکستان میں واقع ہے۔ ہمیں واٹس ایپ پر پیغام بھیجیں اور ہم آپ کی ملاقات کے لیے کلینک کا مکمل پتہ اور راستہ بتائیں گے۔",
      },
      {
        question: "کیا آپ کراچی سے باہر کے مریضوں کا علاج کرتے ہیں؟",
        answer: "جی ہاں۔ ہمارے پاس سندھ اور پاکستان بھر سے سفر کر کے آنے والے مریض باقاعدگی سے آتے ہیں۔ اپنی تفصیلات پہلے سے واٹس ایپ کریں تاکہ ہم آپ کے سفر کے مطابق ملاقات، پیمائش اور فٹنگ کی منصوبہ بندی کر سکیں۔",
      },
      {
        question: "کسٹم پروستھیٹک یا آرتھوٹک آلہ بننے میں کتنا وقت لگتا ہے؟",
        answer: "وقت آلے کی قسم اور کیس کی پیچیدگی پر منحصر ہے — سادہ آرتھوٹکس چند دنوں میں تیار ہو سکتے ہیں، جبکہ کسٹم پروستھیٹک اعضاء میں عام طور پر معائنہ، کاسٹنگ، تیاری اور کئی وزٹس پر فٹنگ شامل ہوتی ہے۔ ابتدائی مشاورت کے بعد ہم آپ کو واضح وقت بتائیں گے۔",
      },
      {
        question: "کیا آپ بچوں کے لیے آرتھوٹک اور پروستھیٹک دیکھ بھال فراہم کرتے ہیں؟",
        answer: "جی ہاں۔ ہمارا پیڈیاٹرک آرتھوٹکس اینڈ پروستھیٹکس پروگرام خاص طور پر شیرخوار بچوں، بچوں اور نوعمروں کے لیے تیار کیا گیا ہے، جس میں ان کی نشوونما کے ساتھ باقاعدہ سائز کا جائزہ شامل ہے۔",
      },
      {
        question: "آپ کے آرتھوٹک بریسز اور سپورٹ کن حالات کا علاج کرتے ہیں؟",
        answer: "ہمارے آرتھوٹک آلات ڈراپ فٹ، اسکولیوسس اور اسپائنل مسائل، فالج اور سیریبرل پالسی سے متعلق نقل و حرکت کی مشکلات، جوڑوں کی کمزوری، فلیٹ فٹ، پلانٹر فیشیائٹس اور ذیابیطس کے پاؤں کی پیچیدگیوں سمیت دیگر حالات کو سپورٹ کرتے ہیں۔",
      },
      {
        question: "امید کیئر سینٹر میں مشاورت کیسے بک کروں؟",
        answer: "سب سے تیز طریقہ واٹس ایپ ہے — اس سائٹ پر کہیں بھی \"مشاورت بک کریں\" پر ٹیپ کریں اور اپنی تفصیلات بھیجیں۔ ہم آسان وقت پر ملاقات طے کریں گے اور آپ کی وزٹ سے پہلے ابتدائی سوالات کے جواب دیں گے۔",
      },
    ],
    cta: "ہم سے سوال پوچھیں",
  },
  contactSection: {
    badge: "مفت مشاورت",
    title: "مشاورت بک کریں",
    description: "فارم بھریں اور ہم آپ کی تفصیلات کے ساتھ واٹس ایپ کھول دیں گے — بس سینڈ کریں۔",
    successTitle: "واٹس ایپ کھل گیا!",
    successText: "آپ کی مشاورت کی تفصیلات واٹس ایپ میں پہلے سے بھری جا چکی ہیں۔ بس سینڈ کریں اور ہم جلد آپ سے رابطہ کریں گے۔",
    submitAnother: "ایک اور درخواست جمع کروائیں",
    formTitle: "مشاورت کی درخواست",
    formSubtitle: "ہم آپ کا واٹس ایپ پیغام خود بھر دیں گے — آپ کو کچھ ٹائپ کرنے کی ضرورت نہیں۔",
    labelName: "پورا نام *",
    placeholderName: "مثلاً احمد خان",
    labelPhone: "فون نمبر *",
    placeholderPhone: "مثلاً 0313 6422564",
    labelService: "درکار خدمت *",
    placeholderService: "ایک خدمت منتخب کریں…",
    labelMessage: "اضافی تفصیلات (اختیاری)",
    placeholderMessage: "اپنی حالت، علامات یا کسی بھی سوال کا مختصر بیان دیں…",
    errorName: "براہ کرم اپنا نام درج کریں",
    errorPhone: "براہ کرم اپنا فون نمبر درج کریں",
    errorService: "براہ کرم ایک خدمت منتخب کریں",
    submitButton: "واٹس ایپ کے ذریعے بھیجیں",
    disclaimer: "کلک کرنے سے واٹس ایپ آپ کی تفصیلات کے ساتھ کھلے گا۔ اس سائٹ پر کوئی ڈیٹا محفوظ نہیں کیا جاتا۔",
    services: [
      "لوئر لمب پروستھیٹکس",
      "اپر لمب پروستھیٹکس",
      "پیڈیاٹرک آرتھوٹکس اینڈ پروستھیٹکس",
      "اسپائنل آرتھوٹکس",
      "لوئر لمب آرتھوٹکس",
      "اپر لمب آرتھوٹکس",
      "کسٹم فٹ آرتھوٹکس",
      "ذیابیطس اینڈ پریشر ریلیف فٹ ویئر",
      "عمومی سوال",
    ],
  },
  aboutPage: {
    badge: "امید کیئر سینٹر کے بارے میں",
    titlePrefix: "امید کی ",
    titleHighlight: "کہانی",
    subtitle: "\"امید\" کا مطلب ہے آسرا — کراچی میں ہماری آرتھوٹک اور پروستھیٹک دیکھ بھال کی بنیاد۔",
    paragraph1:
      "امید کیئر سینٹر میں ہم سمجھتے ہیں کہ صحیح آرتھوٹک یا پروستھیٹک حل تلاش کرنا محض ایک طبی عمل نہیں بلکہ خودمختاری، اعتماد اور انسانی وقار کی طرف ایک سفر ہے۔",
    paragraph2:
      "پہلا سہارا لے کر چلنے والے بچوں سے لے کر دوبارہ چلنے کی خوشی محسوس کرنے والے بزرگ مریضوں تک، ہماری ہمدرد ٹیم ایک ہی چھت تلے ماہرانہ خدمات کا مکمل سلسلہ فراہم کرتی ہے۔ آپ ہمارے لیے صرف ایک مریض نہیں بلکہ خاندان کا حصہ ہیں۔",
    quote: "ہر انسان آزادی سے چلنے اور بھرپور زندگی گزارنے کا حق رکھتا ہے۔",
    valuesTitlePrefix: "ہماری رہنمائی کرنے والے ",
    valuesTitleHighlight: "اصول",
    valuesDescription: "ہر مشاورت، فٹنگ اور فالو اپ کے پیچھے یہی اصول کارفرما ہیں۔",
    values: [
      { title: "ہمدردانہ نگہداشت", description: "ہر مشاورت ہمدردی اور سمجھ بوجھ پر مبنی ہے۔ ہم پہلے سنتے ہیں، پھر علاج کرتے ہیں۔" },
      { title: "ماہرانہ درستگی", description: "آپ کے منفرد جسم کے مطابق کسٹم فٹ حل، تصدیق شدہ طبی مہارت کے ساتھ۔" },
      { title: "سب کچھ ایک ہی چھت تلے", description: "مشاورت اور پیمائش سے لے کر فٹنگ اور فالو اپ تک، سب کچھ ہمارے ادارے میں ہی ہوتا ہے۔" },
      { title: "ہر عمر کے لیے نگہداشت", description: "پہلا سہارا لے کر چلنے والے بچوں سے لے کر نقل و حرکت دوبارہ حاصل کرنے والے بزرگوں تک۔" },
    ],
  },
  servicesPage: {
    badge: "آرتھوٹک اینڈ پروستھیٹک خدمات — کراچی، پاکستان",
    titlePrefix: "کراچی میں آرتھوٹک اینڈ پروستھیٹک خدمات ",
    titleHighlight: "ایک ہی چھت تلے",
    description:
      "امید کیئر سینٹر کراچی میں آرتھوٹک اور پروستھیٹک خدمات کا مکمل سلسلہ فراہم کرتا ہے۔ ہر حل کسٹم فٹڈ، طبی طور پر جانچا گیا اور آپ کی انفرادی ضروریات کے مطابق تیار کیا جاتا ہے۔",
    learnMore: "مزید جانیں",
  },
  serviceDetail: {
    backAll: "تمام خدمات کی طرف واپس جائیں",
    inKarachi: "کراچی، پاکستان میں",
    aboutTitle: "اس خدمت کے بارے میں",
    keyBenefits: "اہم فوائد",
    whoHelps: "یہ کن کے لیے مفید ہے",
    enquire: "اس خدمت کے بارے میں پوچھیں",
    exploreOthers: "دیگر خدمات دیکھیں",
    viewAll: "تمام خدمات دیکھیں",
  },
  contactPage: {
    badge: "رابطہ کریں",
    title: "امید کیئر سینٹر سے رابطہ کریں",
    subtitle: "کراچی، پاکستان",
    description: "کوئی سوال ہے یا مشاورت بک کروانا چاہتے ہیں؟ نیچے دیا گیا فارم بھریں اور ہم آپ کی تفصیلات کے ساتھ واٹس ایپ کھول دیں گے۔",
  },
  blogPage: {
    badge: "امید کیئر سینٹر بلاگ",
    titlePrefix: "نقل و حرکت اور دیکھ بھال کے بارے میں ",
    titleHighlight: "معلومات",
    description: "ہمارے کراچی کے ماہرین کی جانب سے پروستھیٹکس، آرتھوٹکس، بچوں کی دیکھ بھال اور ذیابیطس کے پاؤں کی صحت سے متعلق عملی رہنمائی۔",
    errorText: "ابھی مضامین لوڈ نہیں ہو سکے۔ براہ کرم صفحہ دوبارہ کھولیں یا کچھ دیر بعد دیکھیں۔",
    comingSoonTitle: "جلد آ رہا ہے",
    comingSoonText: "ہم آرتھوٹک اور پروستھیٹک دیکھ بھال سے متعلق مفید مضامین تیار کر رہے ہیں۔ جلد دوبارہ دیکھیں۔",
    readMore: "پڑھیں",
  },
  blogDetail: {
    backToBlog: "بلاگ کی طرف واپس جائیں",
  },
};

export const translations: Record<"en" | "ur", Translations> = { en, ur };
