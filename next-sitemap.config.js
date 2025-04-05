/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://nexis-software.vercel.app", // Ganti dengan domain kamu
  generateRobotsTxt: true, // Ini akan otomatis generate robots.txt
  sitemapSize: 5000,
  generateIndexSitemap: true,
  changefreq: "weekly",
  priority: 0.7,
};
