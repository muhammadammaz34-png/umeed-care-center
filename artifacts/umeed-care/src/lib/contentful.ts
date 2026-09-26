// Minimal Contentful Content Delivery API client.
// Uses plain fetch — no SDK dependency needed.

const SPACE_ID = import.meta.env.VITE_CONTENTFUL_SPACE_ID as string | undefined;
const ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN as string | undefined;
const ENVIRONMENT = "master";

const BASE_URL = SPACE_ID
  ? `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT}`
  : null;

export interface RichTextNode {
  nodeType: string;
  content?: RichTextNode[];
  value?: string;
  marks?: { type: string }[];
  data?: Record<string, unknown>;
}

export interface ContentfulBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  coverImageUrl: string;
  coverImageAlt: string;
  body: RichTextNode | null;
}

interface ContentfulEntry {
  sys: { id: string };
  fields: {
    title?: string;
    slug?: string;
    excerpt?: string;
    category?: string;
    publishedDate?: string;
    coverImage?: { sys: { id: string; type: string; linkType?: string } };
    body?: RichTextNode;
  };
}

interface ContentfulAsset {
  sys: { id: string };
  fields: {
    title?: string;
    file?: { url: string };
  };
}

interface ContentfulResponse {
  items: ContentfulEntry[];
  includes?: { Asset?: ContentfulAsset[] };
}

function isConfigured(): boolean {
  return Boolean(SPACE_ID && ACCESS_TOKEN);
}

function mapEntry(entry: ContentfulEntry, assets: ContentfulAsset[]): ContentfulBlogPost {
  const assetId = entry.fields.coverImage?.sys?.id;
  const asset = assets.find((a) => a.sys.id === assetId);
  const rawUrl = asset?.fields.file?.url ?? "";
  const coverImageUrl = rawUrl ? (rawUrl.startsWith("//") ? `https:${rawUrl}` : rawUrl) : "";

  return {
    id: entry.sys.id,
    title: entry.fields.title ?? "",
    slug: entry.fields.slug ?? "",
    excerpt: entry.fields.excerpt ?? "",
    category: entry.fields.category ?? "",
    publishedDate: entry.fields.publishedDate ?? "",
    coverImageUrl,
    coverImageAlt: asset?.fields.title ?? entry.fields.title ?? "",
    body: entry.fields.body ?? null,
  };
}

export async function fetchBlogPosts(): Promise<ContentfulBlogPost[]> {
  if (!isConfigured() || !BASE_URL) return [];

  const url = `${BASE_URL}/entries?access_token=${ACCESS_TOKEN}&content_type=blogPost&include=2&order=-fields.publishedDate`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Contentful request failed: ${res.status}`);
  }
  const data: ContentfulResponse = await res.json();
  const assets = data.includes?.Asset ?? [];
  return data.items.map((entry) => mapEntry(entry, assets));
}

export async function fetchBlogPostBySlug(slug: string): Promise<ContentfulBlogPost | null> {
  if (!isConfigured() || !BASE_URL) return null;

  const url = `${BASE_URL}/entries?access_token=${ACCESS_TOKEN}&content_type=blogPost&include=2&fields.slug=${encodeURIComponent(slug)}&limit=1`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Contentful request failed: ${res.status}`);
  }
  const data: ContentfulResponse = await res.json();
  const assets = data.includes?.Asset ?? [];
  const entry = data.items[0];
  return entry ? mapEntry(entry, assets) : null;
}

export const contentfulConfigured = isConfigured();
