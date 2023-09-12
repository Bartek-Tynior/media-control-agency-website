import websiteContent from "../../website-content";

const AboutSection = () => {
  const content = websiteContent.about;

  return (
    <div className="h-[600px] md:h-[400px] flex justify-center items-center">
      <p className="text-xl md:text-2xl h-fit">
        {content.header}
        {content.description}
      </p>
    </div>
  );
};

export default AboutSection;
