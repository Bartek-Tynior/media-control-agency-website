import dynamic from "next/dynamic";
import { getDictionary } from "../dictionaries";

const ContactClient = dynamic(() => import("./ContactClient"), { ssr: false });

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "nl" };
}) {
  const dict = await getDictionary(params.lang);
  const isDutch = params.lang === "nl";

  return {
    title: isDutch
      ? "Contact | Media Control Agency - Software Studio"
      : "Contact | Media Control Agency - Software Studio",
    description: isDutch
      ? "Vertel ons over je website, app, backend, MVP of digitaal product. We denken graag met je mee."
      : "Tell us about your website, app, backend, MVP, or digital product. We will help shape the next step.",
    alternates: {
      canonical: `https://media-control-agency.com/${params.lang}/contact`,
      languages: {
        en: "https://media-control-agency.com/en/contact",
        nl: "https://media-control-agency.com/nl/contact",
      },
    },
    openGraph: {
      title: isDutch
        ? "Contact | Media Control Agency"
        : "Contact | Media Control Agency",
      description: isDutch
        ? "Neem contact op met Media Control Agency voor design en development projecten."
        : "Reach out to Media Control Agency for design and development projects.",
      url: `https://media-control-agency.com/${params.lang}/contact`,
      images: [
        {
          url: "https://media-control-agency.com/img/og_image.png",
          alt: "Media Control Agency Banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isDutch
        ? "Contact | Media Control Agency"
        : "Contact | Media Control Agency",
      description: isDutch
        ? "Vertel ons wat je wilt bouwen."
        : "Tell us what you want to build.",
      images: [
        {
          url: "https://media-control-agency.com/img/og_image.png",
          alt: "Media Control Agency Banner",
        },
      ],
    },
  };
}

export default function ContactPage() {
  return <ContactClient />;
}
