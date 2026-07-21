const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.mitsoft.edu.in";

const urls = [
  "/",
  "/aboutus/about-mit",
  "/aboutus/leadership-message",
  "/aboutus/about-soft",
  "/aboutus/principal-message",
  "/aboutus/board-of-management",
  "/aboutus/governing-body",
  "/programs",
  "/academics/programme-outcomes",
  "/academics/mou",
  "/academics/nep-2020",
  "/academics/vap-2022",
  "/academics/curriculum-feedback",
  "/academics/student-grievance",
  "/academics/faculty-information",
  "/academics/lab-facilities",
  "/admissions/annoucement",
  "/admissions/schedule",
  "/admissions/eligibility",
  "/admissions/procedure",
  "/admissions/vacancy",
  "/admissions/scholarship",
  "/admissions/fee-structure",
  "/admissions/faq",
  "/examinations/examinations-schedule",
  "/examinations/exam-notice",
  "/examinations/admission-notice",
  "/research/board-of-research",
  "/research/research-paper-publication",
  "/research/pentant-publications",
  "/research/funded-projects",
  "/research/phd-admissions",
  "/research/mou",
  "/research/consultancy-training",
  "/alumni/alumni-report",
  "/alumni/alumni-stories",
  "/alumni/alumni-startup",
  "/placement/placement-cell",
  "/placement/recruiters",
  "/placement/placed-students",
  "/placement/placement-statistics",
  "/placement/skill-development",
  "/placement/mou",
  "/placement/internship-policy",
  "/campus-life/activities",
  "/campus-life/events",
  "/campus-life/achievements",
  "/campus-life/facilities",
  "/contact/connect",
  "/contact/contact-form",
];

const generateSitemap = async () => {
  try {
    const today = new Date().toISOString().slice(0, 10);

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === "/" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    const outputPath = path.join(__dirname, "public", "sitemap.xml");
    fs.writeFileSync(outputPath, xml, "utf8");
    console.log(`✅ Sitemap generated: ${outputPath}`);
  } catch (err) {
    console.error("❌ Error generating sitemap:", err);
  }
};

generateSitemap();
