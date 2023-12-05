"use client";

import React, { useLayoutEffect } from "react";
import websiteContent from "../../website-content";
import CaseStudiesCard from "./CaseStudiesCard";
import SectionLabel from "./ui/SectionLabel";
import { buildInteractionObserverThreshold } from "@/lib/utils";
import { animated, useInView } from "@react-spring/web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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

  const [ref, springs] = useInView(animationConfig, additionalAnimationConfig);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let cards = gsap.utils.toArray(".case-studies-card");

    let ctx = gsap.context(() => {
      const caseStudiesCard = document.querySelector(
        ".case-studies-card"
      ) as HTMLElement;
      const offsetWidth = caseStudiesCard ? caseStudiesCard.offsetWidth : 0;

      gsap.from(".card1", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".case-studies-section",
          start: "top 80%",
          scrub: 1,
          end: () => "+=" + offsetWidth,
          markers: false,
        },
      });

      gsap.to(".card2", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".case-studies-section",
          start: "top 80%",
          scrub: 1,
          end: () => "+=" + offsetWidth,
          markers: false,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="text-white h-fit md:h-[42rem] pt-28 sm:pb-14" id="case-studies">
      <animated.div ref={ref} style={springs} className="flex flex-col gap-5">
        <SectionLabel sectionName="Case Studies" />
        <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
          Our recent cases
        </h2>
      </animated.div>

      <div className="h-full pt-20 md:pt-0 case-studies-section flex flex-col justify-start md:justify-center">
        <div className="grid grid-cols-1 auto-cols-auto gap-24 gap-x-24 gap-y-24 md:grid-cols-[1fr,.5fr,1fr,.5fr] auto-rows-[1fr] grid-flow-dense">
          {cards.map(({ client, coverImageLocation, service, id }) => (
            <CaseStudiesCard
              key={id}
              client={client}
              image={coverImageLocation}
              service={service}
              id={id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
