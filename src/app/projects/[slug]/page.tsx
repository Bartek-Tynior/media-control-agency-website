"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useParams } from "next/navigation";
import websiteContent from "../../../../website-content";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";
import Toolstack from "@/components/Toolstack";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { useEffect } from "react";
import Lenis from "lenis";

const page = () => {
  const params = useParams();

  const content = websiteContent.case_studies.find(
    (item) =>
      item.client.replace(/\s+/g, "-").toLowerCase() ===
      params.slug.toString().toLowerCase()
  );

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
    <MaxWidthWrapper>
      {content && (
        <div className="pt-36 pb-14 flex flex-col gap-5">
          <SectionLabel sectionName="Case Study" />
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
                <h2 className="font-bold text-base">Industry</h2>
                <p className="text-sm text-gray-300">
                  {content.project.industry}
                </p>
              </div>

              <div>
                <h2 className="font-bold text-base">Scope of Work</h2>
                <div className="flex gap-2 pt-3">
                  {content.project.scopeOfWork.map((item) => {
                    return <SectionLabel sectionName={item} />;
                  })}
                </div>
              </div>

              <div>
                <h2 className="font-bold text-base pb-3">Tech Stack</h2>
                <Toolstack toolstack={content.project.techStack} />
              </div>

              <div>
                <h2 className="font-bold text-base mb-2">Website</h2>
                <a href={content.website}>
                  <Button
                    className="gap-2 group h-[40px] text-sm"
                    variant="third"
                    size="lg"
                  >
                    Visit Website
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
                Challenge
              </h2>
              <p className="pt-4 text-sm text-gray-300">
                {content.project.challenges.title}
              </p>
              <ul className="pt-4 text-sm text-gray-300">
                {content.project.challenges.description.map((item) => {
                  return (
                    <li>
                      <ArrowRight className="inline-block w-4 mr-2" />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-full h-[1px] bg-white/40"></div>

            <div className="py-12">
              <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
                Solution
              </h2>
              <p className="pt-4 text-sm text-gray-300">
                {content.project.solution}
              </p>
            </div>

            <div className="w-full h-[1px] bg-white/40"></div>

            <div className="py-12">
              <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
                Result
              </h2>
              <p className="pt-4 text-sm text-gray-300">
                {content.project.result}
              </p>
            </div>

            {/* @ts-ignore */}
            {content.project.testimonial && (
              <>
                <div className="w-full h-[1px] bg-white/40"></div>

                <div className="py-12">
                  <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
                    Testimonial
                  </h2>
                  <TestimonialCard className="mt-4" />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default page;
