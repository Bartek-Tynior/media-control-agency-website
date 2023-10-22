import { buildInteractionObserverThreshold } from "@/lib/utils";
import websiteContent from "../../website-content";
import ServiceCard from "./ServiceCard";
import SectionLabel from "./ui/SectionLabel";
import { useInView, animated, useChain } from "@react-spring/web";

const Services = () => {
  const animationConfig = () => ({
    from: {
      opacity: 0,
      y: 80,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });

  const additionalAnimationConfig = {
    rootMargin: "-10% 0px -10% 0px",
    amount: buildInteractionObserverThreshold(),
  };

  const additionalCardsAnimationConfig = {
    rootMargin: "-5% 0px -5% 0px",
    amount: buildInteractionObserverThreshold(),
  };

  const [ref, springs] = useInView(animationConfig, additionalAnimationConfig);
  const [refCards, springsCards] = useInView(
    animationConfig,
    additionalCardsAnimationConfig // fixed variable name
  );

  return (
    <>
      <section className="md:h-fit pt-[3rem] sm:pt-[6rem] pb-[3rem]" id="services">
        {/* Label Section */}
        <animated.div ref={ref} style={springs} className="flex flex-col gap-5">
          <SectionLabel sectionName="Services" />
          <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
            This is what we do.
          </h2>
        </animated.div>

        {/* Cards Section */}
        <animated.div
          ref={refCards}
          style={springsCards}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 rounded"
        >
          {renderServiceCards()}
        </animated.div>
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
