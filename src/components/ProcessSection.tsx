import Image from "next/image";
import websiteContent from "../../website-content";
import SectionLabel from "./ui/SectionLabel";

const ProcessSection = () => {
  const content = websiteContent.process;

  return (
    <section className="h-fit py-14 flex overflow-hidden" id="process">
      <div className="flex flex-col gap-5">
        <SectionLabel sectionName="Process" />
        <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
          {content.title}
        </h2>
        <p className="text-gray-300">{content.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 rounded">
          {renderProcessCards()}
        </div>
      </div>
    </section>
  );
};

const renderProcessCards = () => {
  const content = websiteContent.process;

  return content.steps.map(({ index, title, description }) => {
    return (
      <FeatureCard index={index} title={title} description={description} />
    );
  });
};

const FeatureCard = ({ index, title, description }) => (
  <div
    key={index}
    className="relative p-6 border border-white/20 rounded-xl overflow-hidden shadow-lg"
  >
    <div className="relative z-10">
      <div className="flex justify-between">
        <h3 className="text-base font-bold text-white mb-2">{title}</h3>
        <Image
          src="/img/icons/drawn-arrow.svg"
          alt="Arrow Right"
          width={30}
          height={30}
        />
      </div>
      <p className="text-gray-300 font-medium text-sm">{description}</p>
    </div>
  </div>
);

export default ProcessSection;
