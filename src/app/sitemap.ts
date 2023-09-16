import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://media-control-agency.com",
      priority: 1,
      changeFrequency: "daily",
      lastModified: new Date(),
    },
    {
      url: "https://media-control-agency.com/contact",
      priority: 1,
      changeFrequency: "daily",
      lastModified: new Date(),
    },
    {
      url: "https://media-control-agency.com/privacy-policy",
      priority: 1,
      changeFrequency: "daily",
      lastModified: new Date(),
    },
  ];
}
