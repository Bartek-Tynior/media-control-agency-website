import dynamic from "next/dynamic";
import { getDictionary } from "../dictionaries";

const PrivacyPage = dynamic(() => import("./PrivacyClient"), { ssr: false });

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "nl" };
}) {
  const dict = await getDictionary(params.lang);
  const isDutch = params.lang === "nl";

  return {
    title: isDutch
      ? "Privacybeleid | Media Control Agency"
      : "Privacy Policy | Media Control Agency",
    description: isDutch
      ? "Lees ons privacybeleid en ontdek hoe wij jouw gegevens verzamelen, gebruiken en beveiligen."
      : "Learn about our Privacy Policy, how we collect, use, and protect your personal information at Media Control Agency.",
    alternates: {
      canonical: `https://media-control-agency.com/${params.lang}/privacy-policy`,
      languages: {
        en: "https://media-control-agency.com/en/privacy-policy",
        nl: "https://media-control-agency.com/nl/privacy-policy",
      },
    },
    openGraph: {
      title: isDutch
        ? "Privacybeleid | Media Control Agency"
        : "Privacy Policy | Media Control Agency",
      description: isDutch
        ? "Ontdek hoe Media Control Agency jouw gegevens verwerkt en beveiligt."
        : "Learn about our Privacy Policy and how we handle your data at Media Control Agency.",
      url: `https://media-control-agency.com/${params.lang}/privacy-policy`,
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
        ? "Privacybeleid | Media Control Agency"
        : "Privacy Policy | Media Control Agency",
      description: isDutch
        ? "Lees hoe wij omgaan met jouw persoonlijke informatie."
        : "Learn about how we collect, use, and protect your personal information at Media Control Agency.",
      images: [
        {
          url: "https://media-control-agency.com/img/og_image.png",
          alt: "Media Control Agency Banner",
        },
      ],
    },
  };
}

export default function PrivacyPageWrapper() {
  return <PrivacyPage />;
}
