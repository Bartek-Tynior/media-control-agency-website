"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { useLang } from "@/lib/lang-context";
import Lenis from "lenis";
import React from "react";
import { useEffect } from "react";

const PrivacyPage = () => {
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
            <SectionLabel sectionName={dict.other_pages.privacy.title} />
            <h1 className="text-2xl mb-8 font-bold antialiased">
              {dict.other_pages.privacy.headline}
            </h1>
          </div>

          {/* Initial Paragraphs */}
          {dict.other_pages.privacy.paragraphs.map((text, index) => (
            <p key={index} className="text-white">
              {text}
            </p>
          ))}

          {/* Definitions Section */}
          <section>
            <h3 className="text-2xl font-semibold mt-8 mb-4">
              {dict.other_pages.privacy.definitions.title}
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {dict.other_pages.privacy.definitions.items.map((item, index) => (
                <li
                  key={index}
                  className="text-white"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ul>
          </section>

          {/* Remaining Sections */}
          {dict.other_pages.privacy.sections.map((section, index) => (
            <section key={index} className="pt-8">
              <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>

              {/* Paragraph-based section */}
              {section.paragraphs &&
                section.paragraphs.map((text, idx) => (
                  <p key={idx} className="text-white mb-3">
                    {text}
                  </p>
                ))}

              {/* List-based section */}
              {section.list && (
                <ul className="list-disc list-inside space-y-2">
                  {section.list.map((item, idx) => (
                    <li key={idx} className="text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default PrivacyPage;
