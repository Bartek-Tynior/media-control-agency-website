import websiteContent from "../../website-content";
import BenefitsSection from "./BenefitsSection";

const AboutSection = () => {
  const content = websiteContent.about;

  return (
    <div className="h-[700px] animate sm:h-[500px] md:h[600px] lg:h-[500px] flex flex-col justify-center items-center">
      <p className="text-lg md:text-2xl h-fit">
        {content.header}
        {content.description}
      </p>
      <BenefitsSection />
    </div>
  );
};

export default AboutSection;
