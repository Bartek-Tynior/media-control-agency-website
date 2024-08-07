"use client";

import websiteContent from "../../website-content";
import ServiceCard from "./ServiceCard";
import SectionLabel from "./ui/SectionLabel";
import BenefitsSection from "./BenefitsSection";

const Services = () => {

  return (
    <>
      <section className="md:h-fit pt-28 sm:pb-14" id="services">
        {/* Label Section */}
        <div className="flex flex-col gap-5">
          <SectionLabel sectionName="Services" />
          <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
            This is what we do.
          </h2>
        </div>

        {/* Cards Section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 rounded"
        >
          {renderServiceCards()}
        </div>
        <BenefitsSection />
      </section>
    </>
  );
};

const renderServiceCards = () => {
  const content = websiteContent.services;

  return content.map((service, index) => (
    <ServiceCard key={index} service={service} />
  ));
};

export default Services;
