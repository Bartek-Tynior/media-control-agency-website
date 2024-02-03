"use client";

import websiteContent from "../../website-content";
import { TypeAnimation } from "react-type-animation";
import { animated, useInView } from "@react-spring/web";
import { buildInteractionObserverThreshold } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const content = websiteContent.hero;
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop;
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // This will calculate the final total of the percentage of how much the user has scrolled.
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);

    //
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <section className="h-screen flex">
      {/* Content */}
      <animated.div
        ref={ref}
        style={springs}
        className="z-40 pb-20 h-full flex flex-col justify-center items-center w-full"
      >
        <div className="flex flex-col justify-center gap-8">
          <h1 className="text-5xl text-center md:text-7xl lg:text-8xl font-semibold tracking-wide">
            {content.title}
          </h1>
          <span className="text-zinc-200 text-center font-semibold text-3xl tracking-widest">
            {content.subtitle.paragaraph}
            <br />
            <TypeAnimation
              className="font-semibold"
              sequence={content.subtitle.typed}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </span>
        </div>
      </animated.div>

      {/* Background */}
      <animated.div
        ref={ref}
        style={springs}
        className="absolute bottom-0 flex left-0 w-full h-full z-50 justify-around"
      >
        {websiteContent.hero.services.map((service, index) => (
          <div
            key={service.name}
            className={`w-24 h-24 blured-bg p-[15px] shadow-lg rounded-md border border-solid border-[rgba(255,255,255,0.1)] opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out bottom-0 absolute`}
            style={{
              left: `calc(${index !== 4 ? 20 * index : 80}% + 6rem)`,
              bottom: `calc(${
                (index % 2 === 0 ? 0 : 15) - scrollTop
              }% + ${index}rem)`,
            }}
          >
            <Image
              className="w-full h-full object-fit pointer-events-none"
              src={service.imageLocation}
              width={40}
              height={40}
              alt={service.imageAlt}
            />
          </div>
        ))}
      </animated.div>
    </section>
  );
};

export default Hero;
