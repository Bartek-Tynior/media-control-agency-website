"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLang } from "@/lib/lang-context";
import Lenis from "lenis";
import Head from "next/head";
import React from "react";
import { useEffect } from "react";

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

const Page = () => {
  const { lang, dict } = useLang();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <MaxWidthWrapper>
        <div className="pt-28 mb-14">
          <div className="flex flex-col gap-5">
            <SectionLabel sectionName={dict.other_pages.terms.title} />
            <h1 className="text-2xl mb-8 font-bold antialiased">
              {dict.other_pages.terms.headline}
            </h1>
          </div>

          <div className="text-sm space-y-6">
            {dict.other_pages.terms.paragraphs.map((p: string, idx: number) => (
              <p key={`para-${idx}`}>{p}</p>
            ))}

            <ul className="list-disc pl-4">
              {dict.other_pages.terms.confidentialList.map(
                (item: string, idx: number) => (
                  <li
                    key={`conf-${idx}`}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                )
              )}
            </ul>

            {dict.other_pages.terms.moreParagraphs.map(
              (p: string, idx: number) => (
                <p key={`more-${idx}`}>{p}</p>
              )
            )}

            <ul className="list-disc pl-4">
              {dict.other_pages.terms.exceptionsList.map(
                (item: string, idx: number) => (
                  <li
                    key={`except-${idx}`}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                )
              )}
            </ul>

            {dict.other_pages.terms.finalParagraphs.map(
              (p: string, idx: number) => (
                <p key={`final-${idx}`}>{p}</p>
              )
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
