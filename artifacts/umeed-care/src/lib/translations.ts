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
    faqTitle: string;
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
    description: "Home-visit orthotic and prosthetic service in Karachi, Pakistan, for patients of all ages.",
    contactInfo: "Contact Info",
    address: "Karachi, Sindh, Pakistan",
    whatsapp: "(WhatsApp)",
    ourServices: "Our Services",
    followFacebook: "Follow on Facebook",
    copyright: (year) => `© ${year} Umeed Care Center, Orthotics & Prosthetics, Karachi.`,
    bestClinic: "Home-visit orthotic and prosthetic service in Karachi, Pakistan",
  },
  hero: {
    badge: "Karachi, Pakistan",
    headlineSmall: "Orthotic & Prosthetic Home Service in Karachi",
    headlinePrefix: "Orthotic and prosthetic care in Karachi, ",
    headlineHighlight: "made to fit you",
    description:
      "Artificial limbs, braces, custom insoles and diabetic footwear, measured and fitted at your home in Karachi. Message us on WhatsApp to book a time.",
    ctaBook: "Book a Consultation",
    ctaExplore: "Explore Services",
    stats: [
      { value: "8", label: "services", sub: "" },
      { value: "All ages", label: "children to adults", sub: "" },
      { value: "In house", label: "made and fitted here", sub: "" },
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
      "\"Umeed\" means hope. Choosing an orthotic or prosthetic device is not only a medical decision. It affects how you walk, work and get through the day, and we treat it that way.",
    paragraph2:
      "Children come to us for their first supported steps, and older patients come to get back to walking. Our team comes to your home, and the same people handle everything from the first measurement to the last follow-up.",
    card1Title: "We listen first",
    card1Text: "Every consultation starts with your story and your goals.",
    card2Title: "Made to measure",
    card2Text: "Each device is built around your own body, not a standard size.",
    quote: "Every person deserves to move freely and live fully.",
  },
  process: {
    badge: "How it works",
    titlePrefix: "From first message to ",
    titleHighlight: "final fitting",
    description:
      "Four steps from your first message to a device that fits.",
    steps: [
      {
        title: "Book a Consultation",
        description:
          "Message us on WhatsApp, call, or use the form below. We confirm a time that suits you.",
      },
      {
        title: "Assessment & Measurement",
        description:
          "Our specialist examines you, takes measurements, and talks through what you need the device to do.",
      },
      {
        title: "Making & Trial Fitting",
        description:
          "Your device is made to your measurements. We bring it to your home, you try it on and we adjust it before it is finalised.",
      },
      {
        title: "Delivery & Follow-Up",
        description:
          "We fit the final device, show you how to use and care for it, and keep seeing you for adjustments until it feels right.",
      },
    ],
    cta: "Book a consultation",
  },
  servicesSection: {
    titlePrefix: "What we make ",
    titleHighlight: "and fit",
    description:
      "Eight services, from artificial limbs to diabetic footwear. Each device is made for one person.",
    ctaText: "Need a consultation for a specific service?",
    ctaButton: "Contact us",
  },
  gallery: {
    badge: "Our Products",
    title: "Crafted for Comfort & Mobility",
    description:
      "From custom orthotic footwear to prosthetic components, every product is designed with care and precision to restore independence and improve quality of life.",
    categories: { All: "All", Footwear: "Footwear", Orthotics: "Orthotics", Prosthetics: "Prosthetics" },
    items: {
      "Prosthetic Joint": "Prosthetic Joint",
      "Ankle-Foot Orthosis Boot": "Ankle-Foot Orthosis Boot",
      "Custom Ankle Splint": "Custom Ankle Splint",
      "Wrist Orthosis": "Wrist Orthosis",
      "Green Therapeutic Sandals": "Green Therapeutic Sandals",
      "Diabetic Sandals, Sage": "Diabetic Sandals, Sage",
      "Cross-Strap Sandals": "Cross-Strap Sandals",
      "Platform Orthopaedic Sandals": "Platform Orthopaedic Sandals",
      "Heavy-Duty Sandals": "Heavy-Duty Sandals",
      "Paediatric Sandals": "Paediatric Sandals",
      "Two-Strap Sandals": "Two-Strap Sandals",
      "Silicone Prosthetic Hand": "Silicone Prosthetic Hand",
      "Custom AFO Collection": "Custom AFO Collection",
      "Full-Leg HKAFO, Pink": "Full-Leg HKAFO, Pink",
      "Dynamic Finger Orthosis": "Dynamic Finger Orthosis",
      "Lumbar Spinal Brace": "Lumbar Spinal Brace",
      "Foot Orthoses, Violet": "Foot Orthoses, Violet",
      "Knee Brace Range": "Knee Brace Range",
      "Bilateral Leg Orthosis": "Bilateral Leg Orthosis",
      "Full-Leg HKAFO, Violet": "Full-Leg HKAFO, Violet",
      "Walking Boot Collection": "Walking Boot Collection",
      "Wedge Sandals, Pair": "Wedge Sandals, Pair",
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
    titleLine1: "Why patients",
    titleHighlight: "choose Umeed",
    description:
      "What to expect when we visit you.",
    reasons: [
      { title: "Expert Team", description: "Specialists who handle the assessment, casting and fitting themselves." },
      { title: "Personalized Care", description: "Each device is made for one body and one set of goals." },
      { title: "All Under One Roof", description: "Measurement, fitting and follow-ups happen in the same place." },
      { title: "Clear explanations", description: "Plain answers, no pressure, and time for your questions." },
    ],
  },
  faq: {
    badge: "Frequently Asked Questions",
    titlePrefix: "Common Questions About ",
    titleHighlight: "Our Home Service",
    description: "Answers to what patients usually ask before their first visit. Still have a question? Message us on WhatsApp.",
    items: [
      {
        question: "Where is Umeed Care Center located in Karachi?",
        answer: "We do not have a walk-in outlet. Umeed Care Center is a home-visit service in Karachi, Sindh, Pakistan: our team comes to your home for assessment, measurement and fitting. Message us on WhatsApp with your area and we will arrange a time.",
      },
      {
        question: "Do you treat patients from outside Karachi?",
        answer: "Our home service is based in Karachi. If you are outside Karachi, WhatsApp us your city and details and we will tell you what is possible for your case.",
      },
      {
        question: "How long does it take to get a custom prosthetic or orthotic device?",
        answer: "Timelines depend on the type of device and complexity of the case, simple orthotics can be ready in a few days, while custom prosthetic limbs typically involve an assessment, casting, fabrication, and fitting over multiple visits. We'll give you a clear timeline after your initial consultation.",
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
        answer: "The fastest way is WhatsApp, tap \"Book a Consultation\" anywhere on this site and send us your details. We'll confirm a convenient time for a home visit and answer any initial questions beforehand.",
      },
      {
        question: "What should I bring to my first appointment?",
        answer: "Bring any earlier medical reports, X-rays or prescriptions, and the device you use now if you have one. If you do not have these, that is fine. We will assess you in person at your home.",
      },
      {
        question: "How much does a prosthetic or orthotic device cost?",
        answer: "The cost depends on the type of device, the materials and how much custom work it needs, so we give a figure after the assessment. Our prosthetic leg price guide on the blog explains what affects the cost.",
      },
      {
        question: "Do you adjust or repair devices after delivery?",
        answer: "Follow-up visits and adjustments are part of our care. If something feels wrong or a device is damaged, send a photo on WhatsApp with a short description and we will tell you what can be done.",
      },
      {
        question: "How long will I need to wear an orthotic brace?",
        answer: "It depends on the condition. Some braces are worn during recovery, others long term. We explain the expected duration at your assessment and review it at follow-up visits.",
      },
      {
        question: "Does a child's device need replacing as they grow?",
        answer: "Often it can be adjusted for a while. Growing children are reviewed regularly, and a new device is made when adjustment is no longer enough.",
      },
    ],
    cta: "Ask Us a Question",
  },
  contactSection: {
    badge: "Free Consultation",
    title: "Book a Consultation",
    description: "Fill in the form and we'll open WhatsApp with your details pre-filled, just hit send.",
    successTitle: "WhatsApp Opened!",
    successText: "Your consultation details are pre-filled in WhatsApp. Just hit send and we'll get back to you shortly.",
    submitAnother: "Submit another request",
    formTitle: "Consultation Request",
    formSubtitle: "We'll pre-fill your WhatsApp message, no typing needed on your end.",
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
    subtitle: "\"Umeed\" means hope, the foundation of everything we do in Karachi's orthotic and prosthetic care.",
    paragraph1:
      "Choosing an orthotic or prosthetic device changes how you walk, work and get through the day. We treat that decision with the weight it deserves, and we explain every option before anything is made.",
    paragraph2:
      "Measurement, making, fitting and follow-up are handled by the same team, and we come to your home in Karachi. Children, working adults and older patients all use our service, and each device is built around one person, not a standard size.",
    quote: "Every person deserves to move freely and live fully.",
    valuesTitlePrefix: "What Guides ",
    valuesTitleHighlight: "Us",
    valuesDescription: "The principles behind every consultation, fitting, and follow-up we provide.",
    values: [
      { title: "We Listen First", description: "Every visit starts with your story, your daily routine and what you want to get back to doing." },
      { title: "Made to Measure", description: "Each device is built around your own body. We measure, trial and adjust until it fits." },
      { title: "At Your Home, One Team", description: "Measurement, fitting and follow-ups happen at your home, with the same people." },
      { title: "Children to Adults", description: "Children's devices are reviewed as they grow. Adults and older patients get the same follow-up." },
    ],
  },
  servicesPage: {
    badge: "Orthotic & Prosthetic Services, Karachi, Pakistan",
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
    faqTitle: "Frequently Asked Questions",
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
    description: "کراچی، پاکستان میں گھر پر آ کر آرتھوٹک اور پروستھیٹک سروس، ہر عمر کے مریضوں کے لیے۔",
    contactInfo: "رابطہ کی معلومات",
    address: "کراچی، سندھ، پاکستان",
    whatsapp: "(واٹس ایپ)",
    ourServices: "ہماری خدمات",
    followFacebook: "فیس بک پر فالو کریں",
    copyright: (year) => `© ${year} امید کیئر سینٹر, آرتھوٹکس اینڈ پروستھیٹکس، کراچی۔`,
    bestClinic: "کراچی، پاکستان میں گھر پر آرتھوٹک اور پروستھیٹک سروس",
  },
  hero: {
    badge: "کراچی، پاکستان",
    headlineSmall: "کراچی میں آرتھوٹک اینڈ پروستھیٹک ہوم سروس",
    headlinePrefix: "کراچی میں آرتھوٹک اور پروستھیٹک نگہداشت، ",
    headlineHighlight: "آپ کے جسم کے مطابق",
    description:
      "مصنوعی اعضاء، بریسز، کسٹم انسولز اور ذیابیطس کے جوتے، آپ کے گھر پر پیمائش اور فٹنگ کی جاتی ہے۔ وقت لینے کے لیے واٹس ایپ پر پیغام بھیجیں۔",
    ctaBook: "مشاورت بک کریں",
    ctaExplore: "خدمات دیکھیں",
    stats: [
      { value: "8", label: "خدمات", sub: "" },
      { value: "ہر عمر", label: "بچوں سے بڑوں تک", sub: "" },
      { value: "اپنے ادارے میں", label: "یہیں بنایا اور فٹ کیا جاتا ہے", sub: "" },
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
      "\"امید\" کا مطلب ہے آسرا۔ آرتھوٹک یا پروستھیٹک آلہ چننا صرف طبی فیصلہ نہیں ہوتا۔ یہ آپ کے چلنے، کام کرنے اور روزمرہ زندگی پر اثر ڈالتا ہے، اور ہم اسے اسی نظر سے دیکھتے ہیں۔",
    paragraph2:
      "ہماری سروس پہلا سہارا لے کر چلنے والے بچے بھی لیتے ہیں اور دوبارہ چلنے کے قابل ہونے والے بزرگ بھی۔ ہماری ٹیم آپ کے گھر آتی ہے، اور پہلی پیمائش سے آخری فالو اپ تک سب کچھ ایک ہی ٹیم کرتی ہے۔",
    card1Title: "ہم پہلے سنتے ہیں",
    card1Text: "ہر مشاورت آپ کی بات اور آپ کے اہداف سے شروع ہوتی ہے۔",
    card2Title: "ناپ کے مطابق",
    card2Text: "ہر آلہ آپ کے اپنے جسم کے مطابق بنتا ہے، کسی معیاری سائز کے مطابق نہیں۔",
    quote: "ہر انسان آزادی سے چلنے اور بھرپور زندگی گزارنے کا حق رکھتا ہے۔",
  },
  process: {
    badge: "طریقہ کار",
    titlePrefix: "پہلے پیغام سے ",
    titleHighlight: "آخری فٹنگ تک",
    description:
      "پہلے پیغام سے لے کر آپ کے جسم پر ٹھیک بیٹھنے والے آلے تک چار مراحل۔",
    steps: [
      {
        title: "مشاورت بک کریں",
        description: "واٹس ایپ پر پیغام بھیجیں، فون کریں یا نیچے دیا گیا فارم بھریں۔ ہم آپ کے لیے مناسب وقت طے کر دیتے ہیں۔",
      },
      {
        title: "معائنہ اور پیمائش",
        description: "ہمارے ماہر آپ کا معائنہ کرتے ہیں، پیمائش لیتے ہیں اور آپ سے بات کرتے ہیں کہ آلے سے آپ کو کیا کام لینا ہے۔",
      },
      {
        title: "تیاری اور ٹرائل فٹنگ",
        description: "آپ کا آلہ آپ کی پیمائش کے مطابق بنتا ہے۔ ہم اسے آپ کے گھر لاتے ہیں، آپ پہن کر دیکھتے ہیں اور حتمی کرنے سے پہلے ہم ایڈجسٹ کرتے ہیں۔",
      },
      {
        title: "حوالگی اور فالو اپ",
        description: "ہم حتمی آلہ فٹ کرتے ہیں، اس کے استعمال اور دیکھ بھال کا طریقہ سمجھاتے ہیں، اور ٹھیک بیٹھنے تک ایڈجسٹمنٹ کے لیے آپ کو دیکھتے رہتے ہیں۔",
      },
    ],
    cta: "مشاورت بک کریں",
  },
  servicesSection: {
    titlePrefix: "ہم کیا بناتے ہیں ",
    titleHighlight: "اور فٹ کرتے ہیں",
    description: "مصنوعی اعضاء سے لے کر ذیابیطس کے جوتوں تک آٹھ خدمات۔ ہر آلہ ایک ہی فرد کے لیے بنایا جاتا ہے۔",
    ctaText: "کسی مخصوص خدمت کے لیے مشاورت درکار ہے؟",
    ctaButton: "رابطہ کریں",
  },
  gallery: {
    badge: "ہماری مصنوعات",
    title: "آرام اور نقل و حرکت کے لیے تیار کردہ",
    description:
      "کسٹم آرتھوٹک فٹ ویئر سے لے کر پروستھیٹک اجزاء تک, ہر پروڈکٹ خودمختاری بحال کرنے اور معیارِ زندگی بہتر بنانے کے لیے احتیاط اور درستگی سے تیار کیا جاتا ہے۔",
    categories: { All: "تمام", Footwear: "فٹ ویئر", Orthotics: "آرتھوٹکس", Prosthetics: "پروستھیٹکس" },
    items: {
      "Prosthetic Joint": "پروستھیٹک جوڑ",
      "Ankle-Foot Orthosis Boot": "اینکل فٹ آرتھوسس بوٹ",
      "Custom Ankle Splint": "کسٹم اینکل اسپلنٹ",
      "Wrist Orthosis": "رسٹ آرتھوسس",
      "Green Therapeutic Sandals": "سبز علاجی سینڈل",
      "Diabetic Sandals, Sage": "ذیابیطس سینڈل, سیج",
      "Cross-Strap Sandals": "کراس اسٹریپ سینڈل",
      "Platform Orthopaedic Sandals": "پلیٹ فارم آرتھوپیڈک سینڈل",
      "Heavy-Duty Sandals": "ہیوی ڈیوٹی سینڈل",
      "Paediatric Sandals": "بچوں کے سینڈل",
      "Two-Strap Sandals": "ڈبل اسٹریپ سینڈل",
      "Silicone Prosthetic Hand": "سلیکون پروستھیٹک ہاتھ",
      "Custom AFO Collection": "کسٹم اے ایف او مجموعہ",
      "Full-Leg HKAFO, Pink": "مکمل ٹانگ ایچ کے اے ایف او, گلابی",
      "Dynamic Finger Orthosis": "ڈائنامک فنگر آرتھوسس",
      "Lumbar Spinal Brace": "کمر کا اسپائنل بریس",
      "Foot Orthoses, Violet": "فٹ آرتھوسس, جامنی",
      "Knee Brace Range": "گھٹنے کے بریس کی رینج",
      "Bilateral Leg Orthosis": "دونوں ٹانگوں کا آرتھوسس",
      "Full-Leg HKAFO, Violet": "مکمل ٹانگ ایچ کے اے ایف او, جامنی",
      "Walking Boot Collection": "واکنگ بوٹ مجموعہ",
      "Wedge Sandals, Pair": "ویج سینڈل, جوڑا",
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
    titleLine1: "مریض",
    titleHighlight: "امید کو کیوں چنتے ہیں",
    description: "ہمارے پاس آنے پر آپ کیا توقع رکھ سکتے ہیں۔",
    reasons: [
      { title: "ماہر ٹیم", description: "ایسے ماہرین جو معائنہ، کاسٹنگ اور فٹنگ خود کرتے ہیں۔" },
      { title: "ذاتی نگہداشت", description: "ہر آلہ ایک جسم اور ایک مقصد کے مطابق بنتا ہے۔" },
      { title: "سب کچھ ایک ہی چھت تلے", description: "پیمائش، فٹنگ اور فالو اپ ایک ہی جگہ ہوتے ہیں۔" },
      { title: "واضح وضاحت", description: "سیدھے جواب، کوئی دباؤ نہیں، اور آپ کے سوالات کے لیے پورا وقت۔" },
    ],
  },
  faq: {
    badge: "اکثر پوچھے گئے سوالات",
    titlePrefix: "ہماری ہوم سروس کے بارے میں ",
    titleHighlight: "عام سوالات",
    description: "پہلی وزٹ سے پہلے مریضوں کے عام سوالات کے جوابات۔ مزید سوال ہے؟ ہمیں واٹس ایپ پر پیغام بھیجیں۔",
    items: [
      {
        question: "امید کیئر سینٹر کراچی میں کہاں واقع ہے؟",
        answer: "ہمارا کوئی واک اِن آؤٹ لیٹ نہیں ہے۔ امید کیئر سینٹر کراچی، سندھ میں ہوم وزٹ سروس ہے: ہماری ٹیم معائنے، پیمائش اور فٹنگ کے لیے آپ کے گھر آتی ہے۔ واٹس ایپ پر اپنا علاقہ بتائیں اور ہم وقت طے کر لیں گے۔",
      },
      {
        question: "کیا آپ کراچی سے باہر کے مریضوں کا علاج کرتے ہیں؟",
        answer: "ہماری ہوم سروس کراچی میں ہے۔ اگر آپ کراچی سے باہر ہیں تو واٹس ایپ پر اپنا شہر اور تفصیلات بھیجیں، ہم بتا دیں گے آپ کے کیس میں کیا ممکن ہے۔",
      },
      {
        question: "کسٹم پروستھیٹک یا آرتھوٹک آلہ بننے میں کتنا وقت لگتا ہے؟",
        answer: "وقت آلے کی قسم اور کیس کی پیچیدگی پر منحصر ہے, سادہ آرتھوٹکس چند دنوں میں تیار ہو سکتے ہیں، جبکہ کسٹم پروستھیٹک اعضاء میں عام طور پر معائنہ، کاسٹنگ، تیاری اور کئی وزٹس پر فٹنگ شامل ہوتی ہے۔ ابتدائی مشاورت کے بعد ہم آپ کو واضح وقت بتائیں گے۔",
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
        answer: "سب سے تیز طریقہ واٹس ایپ ہے, اس سائٹ پر کہیں بھی \"مشاورت بک کریں\" پر ٹیپ کریں اور اپنی تفصیلات بھیجیں۔ ہم آسان وقت پر ہوم وزٹ طے کریں گے اور پہلے ہی ابتدائی سوالات کے جواب دیں گے۔",
      },
      {
        question: "پہلی اپائنٹمنٹ پر کیا ساتھ لانا چاہیے؟",
        answer: "پرانی میڈیکل رپورٹس، ایکس رے یا نسخے، اور اگر کوئی آلہ استعمال کر رہے ہیں تو وہ ساتھ لائیں۔ یہ نہ ہوں تب بھی کوئی بات نہیں، ہم آپ کے گھر پر خود معائنہ کر لیں گے۔",
      },
      {
        question: "پروستھیٹک یا آرتھوٹک آلے کی قیمت کتنی ہوتی ہے؟",
        answer: "قیمت آلے کی قسم، مواد اور کسٹم کام کی مقدار پر منحصر ہے، اس لیے معائنے کے بعد رقم بتائی جاتی ہے۔ بلاگ پر مصنوعی ٹانگ کی قیمت کی گائیڈ بتاتی ہے کہ قیمت پر کیا اثر ڈالتا ہے۔",
      },
      {
        question: "کیا آلہ ملنے کے بعد ایڈجسٹمنٹ یا مرمت ہوتی ہے؟",
        answer: "فالو اپ وزٹس اور ایڈجسٹمنٹ ہماری دیکھ بھال کا حصہ ہیں۔ کچھ ٹھیک نہ لگے یا آلہ ٹوٹ جائے تو واٹس ایپ پر تصویر اور مختصر تفصیل بھیجیں، ہم بتا دیں گے کیا ہو سکتا ہے۔",
      },
      {
        question: "آرتھوٹک بریس کتنے عرصے تک پہننا پڑتا ہے؟",
        answer: "یہ مسئلے پر منحصر ہے۔ کچھ بریسز صحت یابی کے دوران پہنے جاتے ہیں اور کچھ طویل عرصے کے لیے۔ ہم معائنے میں متوقع مدت بتاتے ہیں اور فالو اپ میں اسے دیکھتے رہتے ہیں۔",
      },
      {
        question: "کیا بچے کے بڑھنے پر آلہ بدلنا پڑتا ہے؟",
        answer: "اکثر کچھ عرصہ ایڈجسٹ ہو سکتا ہے۔ بڑھتے بچوں کو باقاعدگی سے دیکھا جاتا ہے، اور ایڈجسٹمنٹ کافی نہ رہے تو نیا آلہ بنایا جاتا ہے۔",
      },
    ],
    cta: "ہم سے سوال پوچھیں",
  },
  contactSection: {
    badge: "مفت مشاورت",
    title: "مشاورت بک کریں",
    description: "فارم بھریں اور ہم آپ کی تفصیلات کے ساتھ واٹس ایپ کھول دیں گے, بس سینڈ کریں۔",
    successTitle: "واٹس ایپ کھل گیا!",
    successText: "آپ کی مشاورت کی تفصیلات واٹس ایپ میں پہلے سے بھری جا چکی ہیں۔ بس سینڈ کریں اور ہم جلد آپ سے رابطہ کریں گے۔",
    submitAnother: "ایک اور درخواست جمع کروائیں",
    formTitle: "مشاورت کی درخواست",
    formSubtitle: "ہم آپ کا واٹس ایپ پیغام خود بھر دیں گے, آپ کو کچھ ٹائپ کرنے کی ضرورت نہیں۔",
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
    subtitle: "\"امید\" کا مطلب ہے آسرا, کراچی میں ہماری آرتھوٹک اور پروستھیٹک دیکھ بھال کی بنیاد۔",
    paragraph1:
      "آرتھوٹک یا پروستھیٹک آلہ چننا آپ کے چلنے، کام کرنے اور روزمرہ زندگی کو بدل دیتا ہے۔ ہم اس فیصلے کو پوری سنجیدگی سے لیتے ہیں اور کچھ بنانے سے پہلے ہر آپشن سمجھا دیتے ہیں۔",
    paragraph2:
      "پیمائش، تیاری، فٹنگ اور فالو اپ، ایک ہی ٹیم کرتی ہے، اور ہم کراچی میں آپ کے گھر آتے ہیں۔ بچے، کام کرنے والے بالغ اور بزرگ مریض ہماری سروس لیتے ہیں، اور ہر آلہ ایک ہی فرد کے لیے بنتا ہے، کسی معیاری سائز کے مطابق نہیں۔",
    quote: "ہر انسان آزادی سے چلنے اور بھرپور زندگی گزارنے کا حق رکھتا ہے۔",
    valuesTitlePrefix: "ہماری رہنمائی کرنے والے ",
    valuesTitleHighlight: "اصول",
    valuesDescription: "ہر مشاورت، فٹنگ اور فالو اپ کے پیچھے یہی اصول کارفرما ہیں۔",
    values: [
      { title: "ہم پہلے سنتے ہیں", description: "ہر وزٹ آپ کی بات، آپ کے روزمرہ معمول اور آپ کے مقصد سے شروع ہوتی ہے۔" },
      { title: "ناپ کے مطابق", description: "ہر آلہ آپ کے اپنے جسم کے مطابق بنتا ہے۔ ہم ناپتے ہیں، ٹرائل کرتے ہیں اور ٹھیک بیٹھنے تک ایڈجسٹ کرتے ہیں۔" },
      { title: "آپ کے گھر پر، ایک ٹیم", description: "پیمائش، فٹنگ اور فالو اپ آپ کے گھر پر، ایک ہی لوگوں کے ساتھ ہوتے ہیں۔" },
      { title: "بچوں سے بڑوں تک", description: "بچوں کے آلات نشوونما کے ساتھ دیکھے جاتے ہیں۔ بالغوں اور بزرگوں کو بھی یہی فالو اپ ملتا ہے۔" },
    ],
  },
  servicesPage: {
    badge: "آرتھوٹک اینڈ پروستھیٹک خدمات, کراچی، پاکستان",
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
    faqTitle: "اکثر پوچھے گئے سوالات",
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
