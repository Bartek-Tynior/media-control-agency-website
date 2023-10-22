"use client";

import { Button } from "./ui/Button";
import websiteContent from "../../website-content";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import {
  useSpring,
  animated,
  useIsomorphicLayoutEffect,
  useInView,
} from "@react-spring/web";
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
    rootMargin: "-45% 0px -45% 0px",
    amount: buildInteractionObserverThreshold(),
  };

  const [ref, springs] = useInView(animationConfig, additionalAnimationConfig);

  return (
    <section className="h-screen flex items-center justify-center">
      <animated.div
        ref={ref}
        style={springs}
        className="place-self-center z-40 h-[400px] lg:w-3/4"
      >
        {/* Hero Text */}
        <span className="flex gap-4 text-zinc-200 justify-center mb-4 text-xl tracking-widest">
          {content.subtitle}
        </span>
        <h1 className="mb-4 text-4xl sm:text-6xl md:text-[5rem] xl:text-7xl text-center font-extrabold tracking-tight leading-none">
          {content.title}
        </h1>
        <p className="mb-6 font-medium md:text-xl lg:text-2xl text-center text-white lg:mb-8">
          {content.description.paragaraph}
          <br />
          <TypeAnimation
            className="font-bold"
            sequence={content.description.typed}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </p>

        {/* Call-to-action Button */}
        <div className="flex gap-4 justify-center">
          <Link href="#contact">
            <Button size="xl" className="group" variant="default">
              Get Started
              <ArrowRightIcon className="ml-2 group-hover:translate-x-2 transition-all" />
            </Button>
          </Link>
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
