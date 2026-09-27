// scripts/prerender.mjs
//
// Runs AFTER `vite build`. Boots the built site with a small static file
// server, visits every real route with headless Chromium (so React/wouter
// actually render and the useSEO hook sets the per-page <title> and meta
// tags), then writes the fully-rendered HTML to dist/public/<route>/index.html.
//
// Why: vercel.json rewrites every path to /index.html so the SPA can handle
// routing client-side. But Vercel serves a matching STATIC file before it
// falls back to that rewrite. So once these per-route index.html files
// exist, Googlebot's first (no-JS) crawl pass sees the real per-page title,
// meta description and content instead of the same generic homepage HTML
// on every route.
//
// Maintenance note: if you add a new service (src/data/services.ts) or a
// new blog post (src/data/blog-posts.ts), add its route to the lists below,
// otherwise the new page will not get prerendered.

import { chromium } from "playwright";
import { execSync } from "node:child_process";
import http from "node:http";
import fsSync from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "..", "dist", "public");
const PORT = 4173;

const SERVICE_IDS = [
    "lower-limb-prosthetics",
    "upper-limb-prosthetics",
    "pediatric-orthotics-prosthetics",
    "spinal-orthotics",
    "lower-limb-orthotics",
    "upper-limb-orthotics",
    "custom-foot-orthotics",
    "diabetic-footwear",
  ];

const BLOG_SLUGS = [
    "choosing-the-right-prosthetic-limb-karachi",
    "signs-you-need-custom-foot-orthotics",
    "caring-for-your-childs-orthotic-device",
    "diabetic-foot-care-why-footwear-matters",
  ];

const ROUTES = [
    "/",
    "/about",
    "/services",
    "/contact",
    "/blog",
    ...SERVICE_IDS.map((id) => `/services/${id}`),
    ...BLOG_SLUGS.map((slug) => `/blog/${slug}`),
  ];

const MIME = {
    ".js": "application/javascript",
    ".mjs": "application/javascript",
    ".css": "text/css",
    ".html": "text/html",
    ".json": "application/json",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webp": "image/webp",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
    ".txt": "text/plain",
    ".xml": "application/xml",
};

// Serve real files (JS, CSS, images, etc.) by extension; any extensionless
// path (a client-side route) falls back to the built index.html shell, the
// same way Vercel's own catch-all rewrite does, so wouter can take over and
// render it.
function serveStatic(request, response) {
    const urlPath = decodeURIComponent(request.url.split("?")[0]);
    const ext = path.extname(urlPath);

  if (ext) {
        const filePath = path.join(DIST_DIR, urlPath);
        if (filePath.startsWith(DIST_DIR) && fsSync.existsSync(filePath) && fsSync.statSync(filePath).isFile()) {
                response.writeHead(200, { "Content-Type": MIME[ext] ?? "application/octet-stream" });
                fsSync.createReadStream(filePath).pipe(response);
                return;
        }
        response.writeHead(404);
        response.end("Not found");
        return;
  }

  const indexPath = path.join(DIST_DIR, "index.html");
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    fsSync.createReadStream(indexPath).pipe(response);
}

function ensureChromium() {
    try {
          execSync("npx --yes playwright install chromium", { stdio: "inherit" });
    } catch (err) {
          console.warn("[prerender] Could not run 'playwright install chromium':", err.message);
    }
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  try {
    const url = `http://127.0.0.1:${PORT}${route}`;
    const response = await page.goto(url, { waitUntil: "networkidle" });
    if (!response || !response.ok()) {
      throw new Error(`Route ${route} returned ${response?.status() ?? "no response"}`);
    }

  await page.waitForTimeout(500);
    const html = await page.content();
    const outputPath =
      route === "/" ? path.join(DIST_DIR, "index.html") : path.join(DIST_DIR, route.slice(1), "index.html");
    await fs.mkdir(path.dirname(outputPath), { recursive: true });
    await fs.writeFile(outputPath, html);
    console.log(`[prerender] done ${route}`);
  } finally {
    await page.close();
  }
}

async function main() {
  if (!fsSync.existsSync(DIST_DIR)) {
    console.warn(`[prerender] ${DIST_DIR} does not exist, skipping (did the build run?)`);
    return;
  }

ensureChromium();

const server = http.createServer(serveStatic);
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(PORT, "127.0.0.1", resolve);
  });

let browser;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (err) {
    console.error("[prerender] Could not launch Chromium, skipping prerendering:", err.message);
    await new Promise((resolve) => server.close(resolve));
    return;
  }

try {
  let ok = 0;
  for (const route of ROUTES) {
    try {
      await prerenderRoute(browser, route);
      ok++;
    } catch (err) {
      console.error(`[prerender] FAILED ${route}:`, err.message);
    }
  }
  console.log(`[prerender] Successfully prerendered ${ok}/${ROUTES.length} routes`);
} finally {
  await browser.close();
  await new Promise((resolve) => server.close(resolve));
}
}

main().catch((err) => {
  console.error("[prerender] Fatal error:", err);
  process.exit(0);
});
