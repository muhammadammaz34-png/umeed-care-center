import raw from "./guides.json";

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list: string[];
}

export interface Guide {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  serviceId: string;
  updated: string;
  answer: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  blogSlug: string | null;
}

// The same JSON file is read by scripts/prerender.mjs, so crawlers that do not
// run JavaScript still get the full text and structured data of every guide.
export const guides = raw as Guide[];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);
export const guidesForService = (serviceId: string) => guides.filter((g) => g.serviceId === serviceId);
