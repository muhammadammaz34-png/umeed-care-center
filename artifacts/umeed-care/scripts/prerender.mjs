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
// page's title/description is static (or derived from static data in
// src/data/services.ts), a plain string substitution gets the same SEO
// result without needing a browser at all.
//
// Maintenance note: if you add a new service, add it to SERVICES below
// (must match src/data/services.ts). Blog post detail pages are not
// prerendered here because blog content is fetched from Contentful at
// runtime; the /blog listing page itself is covered below.

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

const ROUTES = {
        ...STATIC_PAGES,
        ...Object.fromEntries(SERVICES.map((s) => [`/services/${s.id}`, serviceMeta(s)])),
};

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

  let html = template;
        html = replaceTag(html, /<title>.*?<\/title>/s, `<title>${title}</title>`);
        html = replaceTag(html, /(<meta name="description" content=")[^"]*(")/, `$1${description}$2`);
        html = replaceTag(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
        html = replaceTag(html, /(<link rel="alternate" hreflang="en-PK" href=")[^"]*(")/, `$1${url}$2`);
        html = replaceTag(html, /(<link rel="alternate" hreflang="x-default" href=")[^"]*(")/, `$1${url}$2`);
        html = replaceTag(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
        html = replaceTag(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`);
        html = replaceTag(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${description}$2`);
        html = replaceTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`);
        html = replaceTag(html, /(<meta name="twitter:description" content=")[^"]*(")/, `$1${description}$2`);
        return html;
}

async function main() {
        if (!fsSync.existsSync(DIST_DIR)) {
                  console.warn(`[prerender] ${DIST_DIR} does not exist, skipping (did the build run?)`);
                  return;
        }

  const templatePath = path.join(DIST_DIR, "index.html");
        const template = await fs.readFile(templatePath, "utf-8");

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
