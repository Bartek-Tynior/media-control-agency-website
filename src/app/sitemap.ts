import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.media-control-agency.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com/privacy-policy",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com/terms-of-service",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com/projects/plus-44",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com/projects/media-control-agency",
      lastModified: new Date(),
    },
    {
      url: "https://www.media-control-agency.com/projects/allersnelste-nanie",
      lastModified: new Date(),
    },
  ];
}
