import { Button } from "./ui/Button";
import websiteContent from "../../website-content";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";

const Hero = () => {
  const content = websiteContent.hero;

  return (
    <section className="h-screen flex items-center justify-center pt-[6rem]">
      <div className="place-self-center animate z-40 lg:w-3/4">
        <span className="flex gap-4 justify-center mb-4 text-xl tracking-widest">
          {content.subtitle}
        </span>
        <h1 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          {content.title}
        </h1>
        <p className="mb-6 font-medium text-center text-white lg:mb-8 md:text-lg lg:text-xl">
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
        <div className="flex gap-4 justify-center">
          <Link href="#contact">
            <Button size="xl" className="group" variant="default">
              Get Started
              <ArrowRightIcon className="ml-2 group-hover:translate-x-2 transition-all" />
            </Button>
          </Link>
        </div>
      </div>
      <Image
        width={1920}
        height={1080}
        quality={100}
        src={content.imageLocation}
        alt={content.altImage}
        className="absolute select-none object-cover top-0 w-screen h-full z-0"
      />
    </section>
  );
};

export default Hero;
