import { MetadataRoute } from "next";

const staticPages = ["", "/privacy-policy", "/terms-of-service", "/contact"];

const projects = [
  "/projects/plus-44",
  "/projects/a1-maatwerk",
  "/projects/allersnelste-nanie",
  "/projects/pod-skrzydlami",
];

const locales = ["en", "nl"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.media-control-agency.com";

  const pages = [...staticPages, ...projects];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
      });
    }
  }

  return entries;
}
