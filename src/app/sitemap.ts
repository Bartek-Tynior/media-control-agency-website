import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.media-control-agency.com",
      priority: 1,
      changeFrequency: "daily",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com",
      priority: 1,
      changeFrequency: "daily",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com",
      priority: 1,
      changeFrequency: "daily",
      lastModified: new Date(),
    },
  ];
}
