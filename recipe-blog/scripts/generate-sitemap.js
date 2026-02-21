const fs = require("fs");
const path = require("path");

const baseUrl = "https://your-domain.com"; // change later to real domain

const locales = ["en", "es", "fr"];

const slugs = [
  "classic-spanish-paella",
  "french-croissant"
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

// Add homepage
locales.forEach((locale) => {
  sitemap += `
  <url>
    <loc>${baseUrl}/${locale}</loc>
  </url>`;
});

// Add recipe pages
slugs.forEach((slug) => {
  locales.forEach((locale) => {
    sitemap += `
  <url>
    <loc>${baseUrl}/${locale}/recipes/${slug}</loc>
  </url>`;
  });
});

sitemap += `\n</urlset>`;

const filePath = path.join(__dirname, "../public/sitemap.xml");

fs.writeFileSync(filePath, sitemap);

console.log("✅ Sitemap generated successfully!");
