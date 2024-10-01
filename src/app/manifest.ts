import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Media Control Agency Landing Page",
    short_name: "MCA Website",
    description:
      "Media Control Agency is a design driven digital agency that creates engaging experiences for brands worldwide.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F0F0F",
    theme_color: "#0F0F0F",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
