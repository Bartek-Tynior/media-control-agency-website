"use client";

import React from "react";
import websiteContent from "../../website-content";
import CaseStudiesCard from "./CaseStudiesCard";
import SectionLabel from "./ui/SectionLabel";
import { buildInteractionObserverThreshold } from "@/lib/utils";
import { animated, useInView } from "@react-spring/web";

const CaseStudiesSection = () => {
  const cards = websiteContent.case_studies;

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
    <section
      className="text-white h-fit pt-28 sm:pb-14"
      id="case-studies"
    >
      <animated.div ref={ref} style={springs} className="flex flex-col gap-5">
        <SectionLabel sectionName="Case Studies" />
        <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
          Our recent cases
        </h2>
      </animated.div>

      <animated.div
        ref={refCards}
        style={springsCards}
        className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-10"
      >
        {cards.map(({ client, coverImageLocation, service, id }) => (
          <CaseStudiesCard
            key={id}
            client={client}
            image={coverImageLocation}
            service={service}
            big={id == 2 || id == 3 ? true : false}
          />
        ))}
      </animated.div>
    </section>
  );
};

export default CaseStudiesSection;
