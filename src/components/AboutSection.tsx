"use client";

import websiteContent from "../../website-content";
import { useLayoutEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutSection = () => {
  const content = websiteContent.about;

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitTypes = document.querySelectorAll(".reveal-type");

    let ctx = gsap.context(() => {
      splitTypes.forEach((char, i) => {
        // @ts-ignore
        const text = new SplitType(char, { types: "chars" });

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: "top 50%",
            end: "90% bottom",
            scrub: true,
            markers: false,
          },
          opacity: 0.2,
          stagger: 0.1,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="h-screen md:pt-28 sm:pb-14" id="vision">
      <div className="h-full flex flex-col items-center justify-center reveal-type">
        <p className="text-5xl md:text-7xl h-fit break-all">
          {content.header}
          {content.description}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
