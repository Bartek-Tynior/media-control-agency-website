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
      ? "Contact | Media Control Agency - Digitale Studio"
      : "Contact | Media Control Agency - Digital Studio",
    description: isDutch
      ? "Neem contact met ons op voor samenwerking of vragen. We helpen je graag verder."
      : "Get in touch with us for collaboration, inquiries, or any questions. We are here to assist you.",
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
        ? "Neem contact op met Media Control Agency voor samenwerkingen en vragen."
        : "Reach out to Media Control Agency for any queries or business inquiries.",
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
        ? "Neem contact met ons op voor samenwerking of vragen."
        : "Get in touch with us for any inquiries or collaborations.",
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
