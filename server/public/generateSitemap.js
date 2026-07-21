const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");

const outputPath = path.resolve(__dirname, "public", "sitemap.xml");

// ✅ Ensure folder exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

const sitemap = new SitemapStream({
  hostname: "http://localhost:3000",
});

(async () => {
  try {
    const xml = await streamToPromise(
      sitemap.end([
        { url: "/", changefreq: "daily", priority: 1.0 },
        { url: "/placement" },
        { url: "/lab-facilities" },
      ])
    );

    fs.writeFileSync(outputPath, xml.toString());

    console.log("✅ Sitemap generated at:", outputPath);
  } catch (err) {
    console.error("❌ Error generating sitemap:", err);
  }
})();