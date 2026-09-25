import { useEffect } from "react";

const SITE_URL = "https://umeed-care-center-umeed-care.vercel.app";
const DEFAULT_IMAGE = `${SITE_URL}/opengraph.jpg`;

interface SEOOptions {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Sets per-page title, meta description, canonical URL, Open Graph / Twitter
 * tags, and (optionally) a JSON-LD structured data block. Runs on mount and
 * whenever the page's SEO inputs change, so each route gets its own tags
 * instead of the whole site sharing index.html's homepage meta.
 */
export function useSEO({ title, description, path, image, noindex, jsonLd }: SEOOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const ogImage = image ?? DEFAULT_IMAGE;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    setLink("canonical", url);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", ogImage);

    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", ogImage);

    let ldScript: HTMLScriptElement | null = null;
    if (jsonLd) {
      ldScript = document.createElement("script");
      ldScript.type = "application/ld+json";
      ldScript.text = JSON.stringify(jsonLd);
      ldScript.setAttribute("data-page-seo", "true");
      document.head.appendChild(ldScript);
    }

    return () => {
      if (ldScript) document.head.removeChild(ldScript);
    };
  }, [title, description, path, image, noindex, jsonLd]);
}

export { SITE_URL };
