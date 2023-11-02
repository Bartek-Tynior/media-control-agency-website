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
    <section className="h-screen flex items-end justify-center">
      <animated.div
        ref={ref}
        style={springs}
        className="z-40 pb-[5em] h-full sm:h-auto justify-center sm:justify-between flex flex-col sm:flex-row "
      >
        <div className="w-full sm:w-[70%] mb-10 flex flex-col gap-2">
          <span className="text-zinc-200 text-center sm:text-start justify-center font-semibold text-xl tracking-widest">
            {content.subtitle}
          </span>
          <h1 className="text-5xl text-center sm:text-start sm:text-8xl font-semibold tracking-wide">
            {content.title}
          </h1>
        </div>

        <div className="w-full sm:w-[25%] flex items-end justify-end">
          <p className="text-xl font-semibold h-1/2 text-end">
            {content.description.paragaraph}
            <br />
            <TypeAnimation
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
        width={1920}
        height={1080}
        quality={100}
        src={content.imageLocation}
        alt={content.altImage}
        className="absolute select-none object-cover pointer-events-none top-0 w-screen h-full z-0"
      />
    </section>
  );
};

export default Hero;
