import { getServiceById } from "@/data/services";
import type { Language } from "@/lib/language-context";

/**
 * Rule-based guide for the on-site chat. No server or API key is needed:
 * it reads what the visitor types (English, Urdu script or Roman Urdu),
 * scores it against keyword lists, and answers with links to the right
 * service page, blog article, contact form or gallery.
 */

export type Dest =
  | { kind: "service"; id: string }
  | { kind: "services" }
  | { kind: "blog"; slug?: string }
  | { kind: "contact" }
  | { kind: "gallery" };

export interface ChatLink {
  dest: Dest;
  label: string;
  hint?: string;
}

export interface BotReply {
  text: string;
  links?: ChatLink[];
  chips?: Chip[];
}

export interface Chip {
  id: string;
  label: string;
}

type L = Record<Language, string>;

interface Topic {
  id: string;
  serviceId: string;
  chip: L;
  blogSlug?: string;
  lead: L;
  keywords: string[];
}

const TOPICS: Topic[] = [
  {
    id: "leg",
    serviceId: "lower-limb-prosthetics",
    chip: { en: "Missing or amputated leg", ur: "ٹانگ کٹ گئی ہے" },
    blogSlug: "prosthetic-leg-price-pakistan",
    lead: {
      en: "For an amputated leg (below or above the knee), a lower limb prosthesis is the right fit.",
      ur: "ٹانگ کٹنے کی صورت میں (گھٹنے کے نیچے یا اوپر) لوئر لمب پروستھیسس مناسب ہے۔",
    },
    keywords: [
      "artificial leg", "prosthetic leg", "leg prosthe", "amputat", "above knee", "below knee", "knee disarticulation",
      "lost leg", "missing leg", "leg cut", "tang kat", "tang kati", "paon kat", "pair kat", "nakli tang", "nakli paon",
      "مصنوعی ٹانگ", "ٹانگ کٹ", "پاؤں کٹ", "پیر کٹ", "نقلی ٹانگ", "نقلی پاؤں",
    ],
  },
  {
    id: "arm",
    serviceId: "upper-limb-prosthetics",
    chip: { en: "Missing arm or hand", ur: "بازو یا ہاتھ نہیں ہے" },
    lead: {
      en: "For a missing hand, wrist or arm, an upper limb prosthesis can restore daily function.",
      ur: "ہاتھ، کلائی یا بازو نہ ہونے کی صورت میں اپر لمب پروستھیسس روزمرہ کام آسان بناتا ہے۔",
    },
    keywords: [
      "artificial arm", "artificial hand", "prosthetic arm", "prosthetic hand", "arm prosthe", "hand prosthe", "missing hand",
      "missing arm", "lost hand", "lost arm", "bazu kat", "hath kat", "haath kat", "nakli hath", "nakli haath", "nakli bazu",
      "مصنوعی ہاتھ", "مصنوعی بازو", "ہاتھ کٹ", "بازو کٹ", "نقلی ہاتھ", "نقلی بازو",
    ],
  },
  {
    id: "child",
    serviceId: "pediatric-orthotics-prosthetics",
    chip: { en: "My child needs support", ur: "بچے کے لیے" },
    blogSlug: "does-my-child-need-orthotics",
    lead: {
      en: "Children need devices that are adjusted as they grow, which is what our pediatric service covers.",
      ur: "بچوں کے آلات بڑھتی عمر کے ساتھ ایڈجسٹ ہوتے ہیں، اور ہماری پیڈیاٹرک سروس یہی کرتی ہے۔",
    },
    keywords: [
      "child", "kid", "baby", "infant", "toddler", "son", "daughter", "pediatric", "paediatric", "clubfoot", "club foot",
      "cerebral palsy", "toe walking", "bacha", "bachay", "bachi", "bachon", "beta", "beti", "bache",
      "بچہ", "بچے", "بچی", "بچوں", "بیٹا", "بیٹی", "پیڈیاٹرک",
    ],
  },
  {
    id: "spine",
    serviceId: "spinal-orthotics",
    chip: { en: "Back, spine or neck problem", ur: "کمر، ریڑھ یا گردن" },
    lead: {
      en: "For back, spine or neck conditions, a custom spinal brace gives support and helps posture.",
      ur: "کمر، ریڑھ یا گردن کے مسائل کے لیے کسٹم اسپائنل بریس سہارا اور بہتر پوسچر دیتا ہے۔",
    },
    keywords: [
      "back pain", "spine", "spinal", "scoliosis", "kyphosis", "posture", "neck", "cervical", "lumbar", "back brace",
      "slip disc", "disc", "kamar", "kamr", "reerh", "reedh", "gardan",
      "کمر", "ریڑھ", "گردن", "اسکولیوسس", "ڈسک",
    ],
  },
  {
    id: "legbrace",
    serviceId: "lower-limb-orthotics",
    chip: { en: "Weak leg, foot drop, knee or ankle", ur: "کمزور ٹانگ، فٹ ڈراپ، گھٹنا" },
    blogSlug: "afo-brace-foot-drop-karachi",
    lead: {
      en: "For foot drop, a weak or unstable leg, knee or ankle, a lower limb brace such as an AFO or KAFO is what we fit.",
      ur: "فٹ ڈراپ، کمزور یا غیر مستحکم ٹانگ، گھٹنے یا ٹخنے کے لیے AFO یا KAFO جیسا لوئر لمب بریس لگایا جاتا ہے۔",
    },
    keywords: [
      "afo", "kafo", "foot drop", "footdrop", "drop foot", "knee brace", "ankle brace", "calf brace", "leg brace", "polio",
      "stroke", "paralysis", "weak leg", "knee", "ankle", "calliper", "caliper", "tang kamzor", "pair kamzor", "ghutna", "ghutne", "takhna",
      "فٹ ڈراپ", "گھٹنا", "گھٹنے", "ٹخنہ", "ٹخنے", "پولیو", "فالج", "کمزور ٹانگ", "کیلیپر",
    ],
  },
  {
    id: "armbrace",
    serviceId: "upper-limb-orthotics",
    chip: { en: "Wrist, elbow or shoulder support", ur: "کلائی، کہنی یا کندھا" },
    lead: {
      en: "For wrist, elbow, hand or shoulder problems, an upper limb orthosis or splint gives support and protection.",
      ur: "کلائی، کہنی، ہاتھ یا کندھے کے مسائل کے لیے اپر لمب آرتھوسس یا اسپلنٹ سہارا اور حفاظت دیتا ہے۔",
    },
    keywords: [
      "wrist", "elbow", "shoulder", "splint", "hand brace", "arm brace", "carpal", "tennis elbow", "fracture", "nerve injury",
      "kalai", "kohni", "kandha", "kandhe",
      "کلائی", "کہنی", "کندھا", "کندھے", "اسپلنٹ", "فریکچر",
    ],
  },
  {
    id: "foot",
    serviceId: "custom-foot-orthotics",
    chip: { en: "Flat feet, heel or foot pain", ur: "چپٹے پاؤں، ایڑی کا درد" },
    blogSlug: undefined,
    lead: {
      en: "For flat feet, heel pain or uneven walking, custom foot orthotics are made from a scan of your own foot.",
      ur: "چپٹے پاؤں، ایڑی کے درد یا غیر ہموار چال کے لیے آپ کے اپنے پاؤں کے مطابق کسٹم فٹ آرتھوٹکس بنتے ہیں۔",
    },
    keywords: [
      "flat feet", "flat foot", "heel pain", "plantar", "fasciitis", "arch", "insole", "insoles", "orthotics", "foot pain",
      "bunion", "gait", "chapta", "chapte", "aidi", "edi", "talwa", "paon dard", "pair dard",
      "چپٹے", "ایڑی", "تلوا", "انسول", "پاؤں میں درد", "پیر میں درد",
    ],
  },
  {
    id: "diabetic",
    serviceId: "diabetic-footwear",
    chip: { en: "Diabetes or foot ulcer", ur: "ذیابیطس یا پاؤں کا زخم" },
    lead: {
      en: "For diabetes, numb feet or a foot ulcer, protective pressure-relief footwear is the safest choice.",
      ur: "ذیابیطس، سن پاؤں یا پاؤں کے زخم میں حفاظتی پریشر ریلیف جوتے سب سے محفوظ انتخاب ہیں۔",
    },
    keywords: [
      "diabet", "sugar", "ulcer", "neuropathy", "numb", "foot sore", "wound", "gangrene", "diabetic shoes", "diabetic footwear",
      "sugar ka", "zakhm", "zakham", "shugar",
      "ذیابیطس", "شوگر", "زخم", "سن", "نیوروپیتھی",
    ],
  },
];

const GALLERY_WORDS = [
  "gallery", "photo", "photos", "picture", "pictures", "image", "images", "product", "products", "sample", "samples", "see your work",
  "show me", "dekhna", "dikhao", "dikha", "tasveer", "tasveerein", "work you do", "catalog", "catalogue",
  "گیلری", "تصویر", "تصاویر", "پروڈکٹ", "پروڈکٹس", "دیکھنا", "دکھائیں", "نمونے",
];

const CONTACT_WORDS = [
  "book", "appointment", "consult", "consultation", "contact", "call", "phone", "whatsapp", "visit", "address", "location",
  "where are you", "timing", "timings", "hours", "assessment", "meet", "doctor", "talk to", "rabta", "raabta", "milna", "appointment lena",
  "مشاورت", "ملاقات", "اپائنٹمنٹ", "رابطہ", "فون", "واٹس", "پتہ", "ایڈریس", "وقت", "ڈاکٹر",
];

const INFO_WORDS = [
  "info", "information", "learn", "how does", "how do", "what is", "guide", "article", "blog", "read", "explain", "tell me about",
  "price", "cost", "kitna", "kitni", "qeemat", "rate", "fees", "charges", "how long", "maloomat", "janna", "batao",
  "معلومات", "جاننا", "بلاگ", "آرٹیکل", "قیمت", "کتنا", "کتنی", "خرچ", "فیس", "بتائیں",
];

const PRICE_WORDS = ["price", "cost", "kitna", "kitni", "qeemat", "rate", "fees", "charges", "قیمت", "کتنا", "کتنی", "خرچ", "فیس"];
const GREET_WORDS = ["hi", "hello", "hey", "salam", "assalam", "aoa", "السلام", "سلام", "ہیلو"];

const norm = (s: string) => s.toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim();

function score(text: string, words: string[]): number {
  let n = 0;
  for (const w of words) {
    const word = w.toLowerCase();
    if (word.length <= 3 && /^[a-z]+$/.test(word)) {
      if (new RegExp(`(^| )${word}( |$)`).test(text)) n += 1;
    } else if (text.includes(word)) {
      n += word.length > 6 ? 2 : 1;
    }
  }
  return n;
}

function pick(l: L, lang: Language) {
  return l[lang];
}

function serviceTitle(id: string, lang: Language) {
  const s = getServiceById(id);
  if (!s) return id;
  return lang === "ur" ? s.titleUr : s.title;
}

function serviceLine(id: string, lang: Language) {
  const s = getServiceById(id);
  if (!s) return "";
  return lang === "ur" ? s.shortDescriptionUr : s.shortDescription;
}

/* ---------------- chips ---------------- */

export const startChips = (lang: Language): Chip[] =>
  lang === "ur"
    ? [
        { id: "find", label: "صحیح سروس معلوم کریں" },
        { id: "info", label: "معلومات چاہیے" },
        { id: "consult", label: "مشاورت بک کریں" },
        { id: "products", label: "پروڈکٹس دیکھیں" },
      ]
    : [
        { id: "find", label: "Find the right service" },
        { id: "info", label: "I want information" },
        { id: "consult", label: "Book a consultation" },
        { id: "products", label: "See your products" },
      ];

const topicChips = (lang: Language): Chip[] => TOPICS.map((t) => ({ id: `topic:${t.id}`, label: pick(t.chip, lang) }));

const afterTopicChips = (lang: Language, topic?: Topic): Chip[] => {
  const chips: Chip[] = [];
  if (topic) {
    chips.push({ id: `read:${topic.id}`, label: lang === "ur" ? "مزید پڑھیں" : "Read more about this" });
  }
  chips.push({ id: "consult", label: lang === "ur" ? "مشاورت بک کریں" : "Book a consultation" });
  chips.push({ id: "products", label: lang === "ur" ? "پروڈکٹس دیکھیں" : "See products" });
  chips.push({ id: "find", label: lang === "ur" ? "کوئی اور مسئلہ" : "Something else" });
  return chips;
};

/* ---------------- replies ---------------- */

export function greeting(lang: Language): BotReply {
  return {
    text:
      lang === "ur"
        ? "السلام علیکم، میں امید کیئر سینٹر کا گائیڈ ہوں۔ بتائیں آپ کو کس چیز میں مدد چاہیے، میں صحیح سروس تک پہنچا دوں گا۔"
        : "Hello, I am the Umeed Care Center guide. Tell me what you need help with and I will point you to the right service, article or form.",
    chips: startChips(lang),
  };
}

function findReply(lang: Language): BotReply {
  return {
    text:
      lang === "ur"
        ? "مریض کو کیا مسئلہ ہے؟ نیچے سے چنیں، یا اپنے الفاظ میں لکھ دیں (اردو، انگریزی یا رومن اردو)۔"
        : "What is the patient dealing with? Pick one below, or type it in your own words (English, Urdu or Roman Urdu).",
    chips: topicChips(lang),
  };
}

function topicReply(topic: Topic, lang: Language): BotReply {
  const title = serviceTitle(topic.serviceId, lang);
  return {
    text: `${pick(topic.lead, lang)} ${
      lang === "ur"
        ? "حتمی فیصلہ کلینک میں معائنے کے بعد ہوتا ہے۔"
        : "The final choice is made after an in-clinic assessment."
    }`,
    links: [
      {
        dest: { kind: "service", id: topic.serviceId },
        label: title,
        hint: serviceLine(topic.serviceId, lang),
      },
    ],
    chips: afterTopicChips(lang, topic),
  };
}

function readReply(topic: Topic | undefined, lang: Language): BotReply {
  const links: ChatLink[] = [];
  if (topic?.blogSlug) {
    links.push({
      dest: { kind: "blog", slug: topic.blogSlug },
      label: lang === "ur" ? "متعلقہ مضمون پڑھیں" : "Read the related article",
    });
  }
  links.push({ dest: { kind: "blog" }, label: lang === "ur" ? "تمام بلاگ مضامین" : "All blog articles" });
  return {
    text:
      lang === "ur"
        ? "تفصیلی معلومات ہمارے بلاگ پر ہیں۔ یہاں سے پڑھ سکتے ہیں۔"
        : "Detailed information is on our blog. You can read it here.",
    links,
    chips: [
      { id: "consult", label: lang === "ur" ? "مشاورت بک کریں" : "Book a consultation" },
      { id: "find", label: lang === "ur" ? "سروس تلاش کریں" : "Find a service" },
    ],
  };
}

function infoReply(lang: Language, price = false): BotReply {
  const links: ChatLink[] = [];
  if (price) {
    links.push({
      dest: { kind: "blog", slug: "prosthetic-leg-price-pakistan" },
      label: lang === "ur" ? "مصنوعی ٹانگ کی قیمت کی گائیڈ" : "Prosthetic leg price guide",
    });
  }
  links.push({ dest: { kind: "blog" }, label: lang === "ur" ? "بلاگ پر تمام مضامین" : "Browse all blog articles" });
  return {
    text: price
      ? lang === "ur"
        ? "قیمت ڈیوائس کی قسم، کٹاؤ کی سطح اور کمپوننٹس پر منحصر ہے، اس لیے درست رقم معائنے کے بعد بتائی جاتی ہے۔ عمومی رہنمائی اس مضمون میں ہے۔"
        : "Cost depends on the device type, amputation level and components, so an exact figure comes after an assessment. General guidance is in this article."
      : lang === "ur"
        ? "ہمارا بلاگ پروستھیٹکس، آرتھوٹکس اور ذیابیطس کے جوتوں کی معلومات دیتا ہے۔ یہاں سے شروع کریں۔"
        : "Our blog covers prosthetics, orthotics and diabetic footwear in plain language. Start here.",
    links,
    chips: [
      { id: "find", label: lang === "ur" ? "سروس تلاش کریں" : "Find a service" },
      { id: "consult", label: lang === "ur" ? "مشاورت بک کریں" : "Book a consultation" },
    ],
  };
}

function consultReply(lang: Language): BotReply {
  return {
    text:
      lang === "ur"
        ? "مشاورت کے لیے رابطہ فارم بھر دیں۔ آپ کی تفصیل واٹس ایپ پر ہماری ٹیم تک پہنچ جاتی ہے۔"
        : "For a consultation, fill in the contact form. Your details reach our team on WhatsApp.",
    links: [{ dest: { kind: "contact" }, label: lang === "ur" ? "رابطہ فارم کھولیں" : "Open the contact form" }],
    chips: [
      { id: "find", label: lang === "ur" ? "پہلے سروس دیکھیں" : "See which service fits" },
      { id: "products", label: lang === "ur" ? "پروڈکٹس دیکھیں" : "See products" },
    ],
  };
}

function productsReply(lang: Language): BotReply {
  return {
    text:
      lang === "ur"
        ? "ہمارا کام اور بنائی گئی ڈیوائسز گیلری میں دیکھ سکتے ہیں۔"
        : "You can see our work and the devices we make in the gallery.",
    links: [{ dest: { kind: "gallery" }, label: lang === "ur" ? "گیلری دیکھیں" : "Open the gallery" }],
    chips: [
      { id: "find", label: lang === "ur" ? "سروس تلاش کریں" : "Find a service" },
      { id: "consult", label: lang === "ur" ? "مشاورت بک کریں" : "Book a consultation" },
    ],
  };
}

function fallbackReply(lang: Language): BotReply {
  return {
    text:
      lang === "ur"
        ? "میں پوری طرح سمجھ نہیں سکا۔ نیچے سے کوئی ایک چنیں، یا مسئلہ آسان لفظوں میں لکھیں (مثلاً: ٹانگ کٹ گئی، کمر درد، بچے کے پاؤں)۔"
        : "I did not quite catch that. Pick one below, or describe the problem in simple words (for example: lost a leg, back pain, child's feet).",
    chips: startChips(lang),
  };
}

/* ---------------- main entry ---------------- */

export function respond(input: string, lang: Language, lastTopicId?: string): { reply: BotReply; topicId?: string } {
  // Chip ids
  if (input.startsWith("topic:")) {
    const topic = TOPICS.find((t) => t.id === input.slice(6));
    if (topic) return { reply: topicReply(topic, lang), topicId: topic.id };
  }
  if (input.startsWith("read:")) {
    const topic = TOPICS.find((t) => t.id === input.slice(5));
    return { reply: readReply(topic, lang), topicId: topic?.id };
  }
  if (input === "find") return { reply: findReply(lang), topicId: lastTopicId };
  if (input === "info") return { reply: infoReply(lang) };
  if (input === "consult") return { reply: consultReply(lang) };
  if (input === "products") return { reply: productsReply(lang) };

  // Free text
  const text = norm(input);
  if (!text) return { reply: fallbackReply(lang) };

  const topicScores = TOPICS.map((t) => ({ t, s: score(text, t.keywords) })).sort((a, b) => b.s - a.s);
  const best = topicScores[0];
  const gallery = score(text, GALLERY_WORDS);
  const contact = score(text, CONTACT_WORDS);
  const info = score(text, INFO_WORDS);
  const price = score(text, PRICE_WORDS) > 0;

  // A medical topic mentioned along with "price" goes to the matching article.
  if (best.s > 0 && price) {
    if (best.t.blogSlug === "prosthetic-leg-price-pakistan") return { reply: infoReply(lang, true), topicId: best.t.id };
    return { reply: topicReply(best.t, lang), topicId: best.t.id };
  }
  if (best.s > 0 && best.s >= Math.max(gallery, contact, info)) {
    return { reply: topicReply(best.t, lang), topicId: best.t.id };
  }
  if (gallery > 0 && gallery >= Math.max(contact, info)) return { reply: productsReply(lang) };
  if (contact > 0 && contact >= info) return { reply: consultReply(lang) };
  if (info > 0) return { reply: infoReply(lang, price) };
  if (best.s > 0) return { reply: topicReply(best.t, lang), topicId: best.t.id };
  if (score(text, GREET_WORDS) > 0) return { reply: greeting(lang) };

  return { reply: fallbackReply(lang) };
}

export function destPath(d: Dest): string {
  switch (d.kind) {
    case "service":
      return `/services/${d.id}`;
    case "services":
      return "/services";
    case "blog":
      return d.slug ? `/blog/${d.slug}` : "/blog";
    case "contact":
      return "/contact";
    case "gallery":
      return "/#gallery";
  }
}
