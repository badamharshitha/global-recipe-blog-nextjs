const fs = require("fs");
const baseUrl = "http://localhost:3000";

const urls = `
<url><loc>${baseUrl}</loc></url>
<url><loc>${baseUrl}/recipes</loc></url>
<url><loc>${baseUrl}/recipes/classic-spanish-paella</loc></url>
<url><loc>${baseUrl}/recipes/french-croissant</loc></url>
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

fs.writeFileSync("./public/sitemap.xml", sitemap);
