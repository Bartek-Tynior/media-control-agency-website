"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { useParams } from "next/navigation";
import websiteContent from "../../../../website-content";
import SectionLabel from "@/components/ui/SectionLabel";
import { ArrowRight } from "lucide-react";
import Toolstack from "@/components/Toolstack";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/Button";

const page = () => {
  const params = useParams();

  const content = websiteContent.case_studies.find(
    (item) =>
      item.client.replace(/\s+/g, "-").toLowerCase() ===
      params.slug.toString().toLowerCase()
  );

  return (
    <MaxWidthWrapper>
      {content && (
        <div className="pt-28">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-5 w-full md:w-1/2">
              <h1 className="text-5xl font-bold leading-tight">
                {content.client}
              </h1>
              <p className="text-xl">{content.project.description}</p>
            </div>

            <div className="flex flex-col w-full md:w-1/2 gap-5">
              <div>
                <h2 className="font-bold text-lg">Industry</h2>
                <p className="text-lg pt-2">{content.project.industry}</p>
              </div>

              <div>
                <h2 className="font-bold text-lg">Scope of Work</h2>
                <div className="flex gap-2 pt-3">
                  {content.project.scopeOfWork.map((item) => {
                    return (
                      <SectionLabel
                        className="text-sm md:text-lg font-semibold px-3"
                        sectionName={item}
                      />
                    );
                  })}
                </div>
              </div>

              <div>
                <h2 className="font-bold text-lg pb-3">Tech Stack</h2>
                <Toolstack toolstack={content.project.techStack} />
              </div>

              <div>
                <h2 className="font-bold text-lg">Website</h2>
                <Button
                  variant="link"
                  className="text-white p-0 text-lg font-normal"
                >
                  <a href={content.website}>
                    {content.website.replace(/(^\w+:|^)\/\//, "")}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <div className="w-full h-[1px] bg-white/40"></div>

            <div className="py-12">
              <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
                Challenge
              </h2>
              <p className="pt-4 text-xl">{content.project.challenges.title}</p>
              <ul className="pt-4 text-base">
                {content.project.challenges.description.map((item) => {
                  return (
                    <li>
                      <ArrowRight className="inline-block mr-2" />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="w-full h-[1px] bg-white/40"></div>

            <div className="py-12">
              <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
                Solution
              </h2>
              <p className="pt-4 text-xl">{content.project.solution}</p>
            </div>

            <div className="w-full h-[1px] bg-white/40"></div>

            <div className="py-12">
              <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
                Result
              </h2>
              <p className="pt-4 text-xl">{content.project.result}</p>
            </div>

            {content.project.testimonial && (
              <>
                <div className="w-full h-[1px] bg-white/40"></div>

                <div className="py-12">
                  <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
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
