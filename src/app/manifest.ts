import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Media Control Agency Landing Page",
    short_name: "Next.js App",
    description: "Media Control Agency is a digital agency specialized in software development and paid advertisment.",
    start_url: "/",
    display: "standalone",
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
