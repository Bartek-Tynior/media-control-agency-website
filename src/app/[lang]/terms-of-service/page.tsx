"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLang } from "@/lib/lang-context";
import Lenis from "lenis";
import Head from "next/head";
import React from "react";
import { useEffect } from "react";

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
      {/* SEO Optimization */}
      <Head>
        <title>Terms of Service | Media Control Agency</title>
        <meta
          name="description"
          content="Read our Terms of Service to understand the rules and regulations for using Media Control Agency's services."
        />
        <meta
          property="og:title"
          content="Terms of Service | Media Control Agency"
        />
        <meta
          property="og:description"
          content="Find out about the rules, regulations, and terms for using our services at Media Control Agency."
        />
        <meta
          property="og:url"
          content="https://media-control-agency.com/terms-of-service"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Terms of Service | Media Control Agency"
        />
        <meta
          name="twitter:description"
          content="Understand the rules and regulations for using Media Control Agency's services."
        />
      </Head>
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
              {dict.other_pages.terms.confidentialList.map((item: string, idx: number) => (
                <li
                  key={`conf-${idx}`}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>

            {dict.other_pages.terms.moreParagraphs.map((p: string, idx: number) => (
              <p key={`more-${idx}`}>{p}</p>
            ))}

            <ul className="list-disc pl-4">
              {dict.other_pages.terms.exceptionsList.map((item: string, idx: number) => (
                <li
                  key={`except-${idx}`}
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>

            {dict.other_pages.terms.finalParagraphs.map((p: string, idx: number) => (
              <p key={`final-${idx}`}>{p}</p>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
