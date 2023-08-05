import React from "react";
import websiteContent from "../../website-content";
import CaseStudiesCard from "./CaseStudiesCard";

const CaseStudiesSection = () => {
  const cards = websiteContent.case_studies;

  return (
    <section className="text-white h-full md:h-screen pt-[6rem]" id="case-studies">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl blured-bg py-2 px-4 bg-gray-700 w-fit rounded-lg font-bold">
          Case Studies
        </h2>
        <h3 className="text-4xl mb-6 lg:w-1/2 font-bold leading-tight">
          Our recent cases
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
