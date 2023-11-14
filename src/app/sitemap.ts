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
      url: "https://www.media-control-agency.com/privacy-policy",
      priority: 1,
      changeFrequency: "daily",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com/terms-of-service",
      priority: 1,
      changeFrequency: "daily",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com/contact",
      priority: 1,
      changeFrequency: "daily",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com/projects/plus-44",
      priority: 1,
      changeFrequency: "daily",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com/projects/media-control-agency",
      priority: 1,
      changeFrequency: "daily",
      lastModified: new Date(),
    },
  ];
}
