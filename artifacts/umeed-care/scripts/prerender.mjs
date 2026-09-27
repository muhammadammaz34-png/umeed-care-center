// scripts/prerender.mjs
//
// Runs AFTER `vite build`. For every real route, writes a copy of the
// built index.html to dist/public/<route>/index.html with that page's
// own <title>, meta description, canonical link and Open Graph/Twitter
// tags substituted in.
//
// Why: vercel.json rewrites every path to /index.html so the SPA can
// handle routing client-side. But Vercel serves a matching STATIC file
// before it falls back to that rewrite. So once these per-route
// index.html files exist, Googlebot's first (no-JS) crawl pass sees the
// real per-page title and meta description instead of the same generic
// homepage HTML on every route. The actual page content still renders
// client-side exactly as before; this only fixes the <head> tags in the
// raw HTML, which is what was making every route look identical to
// crawlers.
//
// No headless browser is used here on purpose: Vercel's build container
// is missing system shared libraries (libnspr4, libnss3, etc.) that both
// Playwright's and @sparticuz/chromium's Chromium builds need, so a
// build-time browser is not reliable in this environment. Since every
// static page's title/description is static (or derived from static data
// in src/data/services.ts), a plain string substitution gets the same SEO
// result without needing a browser at all.
//
// Blog posts (/blog/:slug) come from Contentful at runtime, so this
// script also fetches them directly from Contentful's Content Delivery
// API at build time (plain fetch, no SDK) using the same env vars Vite
// exposes to the app (VITE_CONTENTFUL_SPACE_ID / VITE_CONTENTFUL_ACCESS_TOKEN),
// and writes a prerendered index.html for each post's slug.
//
// Maintenance note: if you add a new service, add it to SERVICES below
// (must match src/data/services.ts).

import fsSync from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "..", "dist", "public");
const SITE_URL = "https://umeedcarecenter.vercel.app";

const STATIC_PAGES = {
          "/": {
                      title: "Umeed Care Center | Orthotics & Prosthetics Karachi",
                      description:
                                    "Expert orthotic & prosthetic clinic in Karachi. Custom prosthetic limbs, orthotics, spinal braces & diabetic footwear. Book a consultation: +92 313 6422564.",
          },
          "/about": {
                      title: "About Us | Umeed Care Center — Karachi",
                      description:
                                    "Umeed means hope. Learn about Umeed Care Center's mission, values, and compassionate team providing orthotic & prosthetic care in Karachi, Pakistan.",
          },
          "/services": {
                      title: "Orthotic & Prosthetic Services in Karachi | Umeed Care Center",
                      description:
                                    "Browse all orthotic & prosthetic services at Umeed Care Center, Karachi — prosthetic limbs, orthotics, spinal braces, diabetic footwear & pediatric care.",
          },
          "/contact": {
                      title: "Contact Us | Umeed Care Center — Karachi",
                      description:
                                    "Get in touch with Umeed Care Center in Karachi. Book a free consultation via WhatsApp, phone, or email for orthotic and prosthetic care.",
          },
          "/blog": {
                      title: "Blog | Orthotic & Prosthetic Care Guides — Umeed Care Center",
                      description:
                                    "Practical guides on prosthetics, orthotics, pediatric care, and diabetic foot health from Umeed Care Center's specialists in Karachi.",
          },
};

// Mirrors src/data/services.ts. Keep in sync if that file changes.
const SERVICES = [
        {
                    id: "lower-limb-prosthetics",
                    title: "Lower Limb Prosthetics",
                    shortDescription: "Advanced artificial legs and feet designed for natural movement, stability, and comfort.",
                    whoItHelps: "Patients with lower limb amputations due to injury, diabetes, vascular disease, or congenital conditions.",
        },
        {
                    id: "upper-limb-prosthetics",
                    title: "Upper Limb Prosthetics",
                    shortDescription: "Custom-fitted artificial arms and hands that restore functionality and independence.",
                    whoItHelps: "Patients with upper limb amputations or limb differences at any level from finger to shoulder.",
        },
        {
                    id: "pediatric-orthotics-prosthetics",
                    title: "Pediatric Orthotics & Prosthetics",
                    shortDescription: "Gentle, compassionate fitting of supportive devices for children as they grow and develop.",
                    whoItHelps:
                                  "Infants, children, and adolescents with congenital conditions, cerebral palsy, limb differences, or developmental issues requiring orthotic or prosthetic support.",
        },
        {
                    id: "spinal-orthotics",
                    title: "Spinal Orthotics",
                    shortDescription: "Supportive braces to stabilize the spine, relieve pain, and aid in recovery.",
                    whoItHelps:
                                  "Patients with scoliosis, spinal fractures, disc conditions, post-surgical needs, or chronic back pain requiring external support.",
        },
        {
                    id: "lower-limb-orthotics",
                    title: "Lower Limb Orthotics",
                    shortDescription: "Custom leg braces to support weakened joints, improve alignment, and enhance mobility.",
                    whoItHelps:
                                  "Patients with drop foot, stroke, cerebral palsy, muscular dystrophy, ligament instability, or post-surgical rehabilitation needs.",
        },
        {
                    id: "upper-limb-orthotics",
                    title: "Upper Limb Orthotics",
                    shortDescription: "Precision splints and braces for the arm, wrist, and hand to support healing and function.",
                    whoItHelps:
                                  "Patients with carpal tunnel syndrome, wrist fractures, tendon or nerve injuries, rheumatoid arthritis, or post-surgical arm conditions.",
        },
        {
                    id: "custom-foot-orthotics",
                    title: "Custom Foot Orthotics",
                    shortDescription: "Personalized insoles crafted to correct foot mechanics, reduce pain, and improve posture.",
                    whoItHelps:
                                  "Anyone experiencing foot, ankle, knee, hip, or lower back pain related to abnormal foot mechanics or gait irregularities.",
        },
        {
                    id: "diabetic-footwear",
                    title: "Diabetic & Pressure-Relief Footwear",
                    shortDescription: "Specialized shoes and inserts to protect sensitive feet and prevent complications.",
                    whoItHelps:
                                  "Patients with diabetes, peripheral neuropathy, foot ulcers, Charcot foot, or any condition requiring pressure relief and protective footwear.",
        },
        ];

function serviceMeta(service) {
          const who = service.whoItHelps.charAt(0).toLowerCase() + service.whoItHelps.slice(1);
          return {
                      title: `${service.title} in Karachi | Umeed Care Center`,
                      description: `${service.shortDescription} Serving ${who} Book a consultation at Umeed Care Center, Karachi.`,
          };
}

// Fetches blog posts directly from Contentful's Content Delivery API
// (mirrors the logic in src/lib/contentful.ts) so each /blog/:slug route
// can be prerendered with its real title, excerpt, and cover image.
async function fetchBlogRoutes() {
          const SPACE_ID = process.env.VITE_CONTENTFUL_SPACE_ID;
          const ACCESS_TOKEN = process.env.VITE_CONTENTFUL_ACCESS_TOKEN;

  if (!SPACE_ID || !ACCESS_TOKEN) {
              console.warn("[prerender] Contentful env vars not set, skipping blog post prerendering");
              return {};
  }

  const url = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries?access_token=${ACCESS_TOKEN}&content_type=blogPost&include=2&order=-fields.publishedDate`;

  try {
              const res = await fetch(url);
              if (!res.ok) {
                            console.warn(`[prerender] Contentful request failed: ${res.status} ${res.statusText}`);
                            return {};
              }
              const data = await res.json();
              const assets = data.includes?.Asset ?? [];
              const items = data.items ?? [];

            const routes = {};
              for (const entry of items) {
                            const slug = entry.fields?.slug;
                            if (!slug) continue;

                const assetId = entry.fields?.coverImage?.sys?.id;
                            const asset = assets.find((a) => a.sys.id === assetId);
                            const rawImageUrl = asset?.fields?.file?.url ?? "";
                            const imageUrl = rawImageUrl ? (rawImageUrl.startsWith("//") ? `https:${rawImageUrl}` : rawImageUrl) : undefined;

                const title = entry.fields?.title ?? "Article";
                            const excerpt = entry.fields?.excerpt ?? "Umeed Care Center blog article.";

                routes[`/blog/${slug}`] = {
                                title: `${title} | Umeed Care Center`,
                                description: excerpt,
                                image: imageUrl,
                                type: "article",
                };
              }

            console.log(`[prerender] Fetched ${Object.keys(routes).length} blog post(s) from Contentful`);
              return routes;
  } catch (err) {
              console.warn("[prerender] Contentful fetch error, skipping blog post prerendering:", err.message);
              return {};
  }
}

function escapeHtml(str) {
          return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
}

function replaceTag(html, regex, replacement) {
          if (!regex.test(html)) {
                      console.warn(`[prerender] pattern not found: ${regex}`);
                      return html;
          }
          return html.replace(regex, replacement);
}

function buildHtml(template, route, meta) {
          const url = `${SITE_URL}${route}`;
          const title = escapeHtml(meta.title);
          const description = escapeHtml(meta.description);
          const ogType = meta.type || "website";

  let html = template;
          html = replaceTag(html, /<title>.*?<\/title>/s, `<title>${title}</title>`);
          html = replaceTag(html, /(<meta name="description" content=")[^"]*(")/, `$1${description}$2`);
          html = replaceTag(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
          html = replaceTag(html, /(<link rel="alternate" hreflang="en-PK" href=")[^"]*(")/, `$1${url}$2`);
          html = replaceTag(html, /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/, `$1${url}$2`);
          html = replaceTag(html, /(<meta property="og:type" content=")[^"]*(")/, `$1${ogType}$2`);
          html = replaceTag(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
          html = replaceTag(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`);
          html = replaceTag(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`);
          html = replaceTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`);
          html = replaceTag(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`);

  if (meta.image) {
              const image = escapeHtml(meta.image);
              html = replaceTag(html, /(<meta property="og:image" content=")[^"]*(")/, `$1${image}$2`);
              html = replaceTag(html, /(<meta name="twitter:image" content=")[^"]*(")/, `$1${image}$2`);
  }

  return html;
}

async function main() {
          if (!fsSync.existsSync(DIST_DIR)) {
                      console.warn(`[prerender] ${DIST_DIR} does not exist, skipping (did the build run?)`);
                      return;
          }

  const templatePath = path.join(DIST_DIR, "index.html");
          const template = await fs.readFile(templatePath, "utf-8");

  const blogRoutes = await fetchBlogRoutes();

  const ROUTES = {
              ...STATIC_PAGES,
              ...Object.fromEntries(SERVICES.map((s) => [`/services/${s.id}`, serviceMeta(s)])),
              ...blogRoutes,
  };

  let ok = 0;
          const routes = Object.keys(ROUTES);
          for (const route of routes) {
                      try {
                                    const html = buildHtml(template, route, ROUTES[route]);
                                    const outputPath = route === "/" ? templatePath : path.join(DIST_DIR, route.slice(1), "index.html");
                                    await fs.mkdir(path.dirname(outputPath), { recursive: true });
                                    await fs.writeFile(outputPath, html);
                                    console.log(`[prerender] done ${route}`);
                                    ok++;
                      } catch (err) {
                                    console.error(`[prerender] FAILED ${route}:`, err.message);
                      }
          }
          console.log(`[prerender] Successfully prerendered ${ok}/${routes.length} routes`);
}

main().catch((err) => {
          console.error("[prerender] Fatal error:", err);
          // Do not fail the whole Vercel build over a prerender problem; the site
               // still works, it just falls back to the old behaviour for crawlers.
               process.exit(0);
});
