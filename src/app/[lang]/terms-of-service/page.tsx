import dynamic from "next/dynamic";
import { getDictionary } from "../dictionaries";

const TermsPage = dynamic(() => import("./TermsClient"), { ssr: false });

export async function generateMetadata({
  params,
}: {
  params: { lang: "en" | "nl" };
}) {
  const dict = await getDictionary(params.lang);
  const isDutch = params.lang === "nl";

  return {
    title: isDutch
      ? "Algemene Voorwaarden | Media Control Agency"
      : "Terms of Service | Media Control Agency",
    description: isDutch
      ? "Lees onze algemene voorwaarden om te begrijpen wat de regels zijn voor het gebruik van Media Control Agency's diensten."
      : "Read our Terms of Service to understand the rules and regulations for using Media Control Agency's services.",
    alternates: {
      canonical: `https://media-control-agency.com/${params.lang}/terms-of-service`,
      languages: {
        en: "https://media-control-agency.com/en/terms-of-service",
        nl: "https://media-control-agency.com/nl/terms-of-service",
      },
    },
    openGraph: {
      title: isDutch
        ? "Algemene Voorwaarden | Media Control Agency"
        : "Terms of Service | Media Control Agency",
      description: isDutch
        ? "Bekijk de voorwaarden voor het gebruik van onze diensten bij Media Control Agency."
        : "Find out about the rules, regulations, and terms for using our services at Media Control Agency.",
      url: `https://media-control-agency.com/${params.lang}/terms-of-service`,
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
        ? "Algemene Voorwaarden | Media Control Agency"
        : "Terms of Service | Media Control Agency",
      description: isDutch
        ? "Lees hier de regels voor het gebruik van onze diensten."
        : "Understand the rules and regulations for using Media Control Agency's services.",
      images: [
        {
          url: "https://media-control-agency.com/img/og_image.png",
          alt: "Media Control Agency Banner",
        },
      ],
    },
  };
}

export default function TermsPageWrapper() {
  return <TermsPage />;
}
