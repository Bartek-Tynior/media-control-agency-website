import { animated, useInView } from "@react-spring/web";
import websiteContent from "../../website-content";
import BenefitsSection from "./BenefitsSection";
import { buildInteractionObserverThreshold } from "@/lib/utils";

const AboutSection = () => {
  const content = websiteContent.about;

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

  const benefitsAnimationConfig = () => ({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 5000,
  });

  const additionalAnimationConfig = {
    rootMargin: "-20% 0px -20% 0px",
    amount: buildInteractionObserverThreshold(),
  };

  const [ref, springs] = useInView(animationConfig, additionalAnimationConfig);
  const [refBenefits, springsBenefits] = useInView(benefitsAnimationConfig);

  return (
    <div className="h-fit pt-[3rem] isolate flex flex-col justify-center items-center">
      <animated.div ref={ref} style={springs}>
        <p className="text-lg md:text-2xl h-fit">
          {content.header}
          {content.description}
        </p>
        <BenefitsSection />
      </animated.div>
    </div>
  );
};

export default AboutSection;
