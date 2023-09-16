import websiteContent from "../../website-content";
import ServiceCard from "./ServiceCard";
import SectionLabel from "./ui/SectionLabel";

const Services = () => {
  const content = websiteContent.services;

  return (
    <section className="h-full animate lg:h-screen pt-0 sm:pt-[6rem]" id="services">
      <div className="flex flex-col title gap-2">
        <SectionLabel sectionName="Services" />
        <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
          This is what we do.
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 rounded">
        {content.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
