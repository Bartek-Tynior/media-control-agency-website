import websiteContent from "../../website-content";

const AboutSection = () => {

  const content = websiteContent.about.description;



  return (
    <div className="h-[600px] md:h-[400px] flex justify-center items-center">
      <p className="text-xl md:text-2xl h-fit">
        <span className="font-bold">We are Media Control Agency</span>{content}
      </p>
    </div>
  );
};

export default AboutSection;
