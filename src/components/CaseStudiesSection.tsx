import React from "react";
import websiteContent from "../../website-content";
import CaseStudiesCard from "./CaseStudiesCard";
import SectionLabel from "./ui/SectionLabel";

const CaseStudiesSection = () => {
  const cards = websiteContent.case_studies;

  return (
    <section
      className="text-white h-full pt-14 sm:pt-28 pb-14"
      id="case-studies"
    >
      <div className="flex flex-col gap-5">
        <SectionLabel sectionName="Case Studies" />
        <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
          Our recent cases
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {cards.map(({ client, imageLocation, service, id }) => (
          <CaseStudiesCard
            key={id}
            client={client}
            imageLocation={imageLocation}
            service={service}
            big={id == 2 || id == 3 ? true : false}
          />
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesSection;
