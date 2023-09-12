import { MetadataRoute } from "next";

type Sitemap = Array<{
  url: string;
  lastModified?: string | Date;
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://media-control-agency.com",
      lastModified: new Date(),
    },
    {
      url: "https://media-control-agency.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://media-control-agency.com/privacy-policy",
      lastModified: new Date(),
    },
  ];
}
