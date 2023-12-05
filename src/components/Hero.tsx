"use client";

import websiteContent from "../../website-content";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { animated, useInView } from "@react-spring/web";
import { buildInteractionObserverThreshold } from "@/lib/utils";

const Hero = () => {
  const content = websiteContent.hero;

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
        className="z-40 pb-20 h-full flex flex-col justify-end"
      >
        <div className="h-[calc(100%/2)] w-full flex flex-col justify-between">
          <div className="text-center md:text-start">
            <span className="text-zinc-200 text-center md:text-start font-semibold text-xl tracking-widest">
              {content.subtitle}
            </span>
            <h1 className="text-5xl text-center md:text-start md:text-7xl lg:text-8xl font-semibold tracking-wide">
              {content.title}
            </h1>
          </div>

          <p className="text-lg md:w-96">
            {content.description.paragaraph}
            <br />
            <TypeAnimation
              className="font-semibold"
              sequence={content.description.typed}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </p>
        </div>
      </animated.div>

      {/* Bakcground Image */}
      <Image
        fill={true}
        quality={100}
        priority={true}
        placeholder="empty"
        src={content.imageLocation}
        alt={content.altImage}
        className="absolute select-none object-cover pointer-events-none top-0 w-screen h-full z-0"
      />
    </section>
  );
};

export default Hero;
