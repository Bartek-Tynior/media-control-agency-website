"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useParams } from "next/navigation";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useEffect } from "react";
import Lenis from "lenis";
import Head from "next/head";
import { useLang } from "@/lib/lang-context";
import Toolstack from "@/components/Toolstack";

const Page = () => {
  const { lang, dict } = useLang();
  const params = useParams();
  const slug = params.slug;
  const isDutch = lang === "nl";
  const labels = {
    caseStudy: isDutch ? "Case" : "Case Study",
    notFound: isDutch ? "Case niet gevonden" : "Case study not found",
    industry: isDutch ? "Branche" : "Industry",
    scope: isDutch ? "Scope" : "Scope of Work",
    techStack: isDutch ? "Tech Stack" : "Tech Stack",
    website: isDutch ? "Website" : "Website",
    visitWebsite: isDutch ? "Bekijk website" : "Visit Website",
    challenge: isDutch ? "Uitdaging" : "Challenge",
    solution: isDutch ? "Oplossing" : "Solution",
    result: isDutch ? "Resultaat" : "Result",
  };

  // Find the content based on the slug parameter
  const content = dict.case_studies.cases.find(
    (item) =>
      item.client.replace(/\s+/g, "-").toLowerCase() ===
      slug.toString().toLowerCase()
  );

  // Smooth scrolling with Lenis setup
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.stop();
      lenis.destroy();
    };
  }, []);

  // If no content is found, return null (you might want to add an error state here)
  if (!content) {
    return <p className="text-center pt-20">{labels.notFound}</p>;
  }

  return (
    <>
      {/* Dynamic metadata */}
      <Head>
        <title>{`${content.client} - ${labels.caseStudy} | Media Control Agency`}</title>
        <meta name="description" content={content.project.description} />
        <meta property="og:title" content={`${content.client} - ${labels.caseStudy}`} />
        <meta property="og:description" content={content.project.description} />
        <meta
          property="og:image"
          content={content.project.ogImageUrl || "/img/og_image.png"} // Fallback image
        />
        <meta
          property="og:url"
          content={`https://media-control-agency.com/case-studies/${params.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${content.client} - ${labels.caseStudy}`} />
        <meta
          name="twitter:description"
          content={content.project.description}
        />
        <meta
          name="twitter:image"
          content={content.project.ogImageUrl || "/img/og_image.png"}
        />

        {/* Schema Markup for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CaseStudy",
              name: content.client,
              description: content.project.description,
              industry: content.project.industry,
              url: `https://media-control-agency.com/case-studies/${params.slug}`,
              datePublished: content.project.publishDate,
              author: {
                "@type": "Organization",
                name: "Media Control Agency",
              },
            }),
          }}
        />
      </Head>

      <MaxWidthWrapper>
        <div className="pt-36 pb-14 flex flex-col gap-5">
          <SectionLabel sectionName={labels.caseStudy} />
          <div className="flex flex-col md:flex-row gap-14">
            <div className="flex flex-col gap-5 w-full md:w-1/2">
              <h1 className="text-2xl font-bold leading-tight">
                {content.client}
              </h1>
              <p className="text-sm text-gray-300">
                {content.project.description}
              </p>
            </div>

            <div className="flex flex-col w-full md:w-1/2 gap-5">
              <div>
                <h2 className="font-bold text-base">{labels.industry}</h2>
                <p className="text-sm text-gray-300">
                  {content.project.industry}
                </p>
              </div>

              <div>
                <h2 className="font-bold text-base">{labels.scope}</h2>
                <div className="flex gap-2 pt-3 flex-wrap">
                  {content.project.scopeOfWork.map((item, index) => (
                    <SectionLabel key={index} sectionName={item} />
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-bold text-base pb-3">{labels.techStack}</h2>
                <Toolstack toolstack={content.project.techStack} />
              </div>

              <div>
                <h2 className="font-bold text-base mb-2">{labels.website}</h2>
                <a
                  href={content.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    className="gap-2 group h-[40px] text-sm"
                    variant="third"
                    size="lg"
                  >
                    {labels.visitWebsite}
                    <ArrowRight className="group-hover:translate-x-2 transition-all" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <div className="w-full h-[1px] bg-white/40"></div>

            <div className="py-12">
              <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
                {labels.challenge}
              </h2>
              <p className="pt-4 text-sm text-gray-300">
                {content.project.challenges.title}
              </p>
              <ul className="pt-4 text-sm text-gray-300">
                {content.project.challenges.description.map((item, index) => (
                  <li key={index}>
                    <ArrowRight className="inline-block w-4 mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full h-[1px] bg-white/40"></div>

            <div className="py-12">
              <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
                {labels.solution}
              </h2>
              <p className="pt-4 text-sm text-gray-300">
                {content.project.solution}
              </p>
            </div>

            <div className="w-full h-[1px] bg-white/40"></div>

            <div className="py-12">
              <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
                {labels.result}
              </h2>
              <p className="pt-4 text-sm text-gray-300">
                {content.project.result}
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
