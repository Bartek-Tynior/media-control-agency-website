"use client";

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

  const additionalAnimationConfig = {
    rootMargin: "0% 0px 0% 0px",
    amount: buildInteractionObserverThreshold(),
  };

  const [ref, springs] = useInView(animationConfig, additionalAnimationConfig);

  return (
    <div className="pt-14">
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
