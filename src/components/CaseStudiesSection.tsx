"use client";
import React from "react";
import websiteContent from "../../website-content";
import CaseStudiesCard from "./CaseStudiesCard";
import SectionLabel from "./ui/SectionLabel";

const CaseStudiesSection = () => {
  const cards = websiteContent.case_studies;

  return (
    <section className="text-white h-fit md:h-[42rem] pt-28 sm:pb-14" id="case-studies">
      <div className="flex flex-col gap-5">
        <SectionLabel sectionName="Case Studies" />
        <h2 className="text-xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
          Our recent cases
        </h2>
      </div>

      <div className="h-full pt-20 md:pt-0 case-studies-section flex flex-col justify-start md:justify-center">
        <div className="grid grid-cols-1 auto-cols-auto gap-24 gap-x-24 gap-y-24 md:grid-cols-[1fr,.5fr,1fr,.5fr] auto-rows-[1fr] grid-flow-dense">
          {cards.map(({ client, coverImageLocation, service, id }) => (
            <CaseStudiesCard
              key={id}
              client={client}
              image={coverImageLocation}
              service={service}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
