"use client";

import websiteContent from "../../website-content";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { Button } from "./ui/Button";

const Hero = () => {
  const content = websiteContent.hero;

  return (
    <section className="h-screen flex">
      {/* Content */}
      <div
        className="z-40 pb-20 h-full w-full flex flex-col justify-center"
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="text-center">
            <span className="text-zinc-200 text-center font-semibold text-lg tracking-widest mb-5">
              {content.subtitle}
            </span>
            <h1 className="text-center text-6xl font-semibold tracking-wide mb-5">
              {content.title}
            </h1>
            <h2 className="text-lg text-center tracking-wide mb-5">
              {content.shortDescription}
            </h2>
            <div className="w-full flex flex-row gap-2 justify-center items-center">
<Button
            className="text-xs"
            variant="default"
            size="lg"
          >
            Contact us
            </Button>
            <Button
            className="text-xs"
            variant="default"
            size="lg"
          >
            Learn more
          </Button>
            </div>
          </div>
        </div>
      </div>

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
