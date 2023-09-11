"use client";

import Image from "next/image";
import { Button } from "./ui/Button";
import websiteContent from "../../website-content";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const heroContent = websiteContent.hero;

  

  return (
    <section className="h-screen flex items-center justify-center pt-[6rem]">
      <div className="place-self-center z-40 lg:w-3/4">
        <span className="flex gap-4 justify-center mb-4 text-xl tracking-widest">
          Result Focused Agency
        </span>
        <h1 className="mb-4 text-4xl text-center font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
          {heroContent.title}
        </h1>
        <p className="mb-6 font-medium text-center text-white lg:mb-8 md:text-lg lg:text-xl">
          {heroContent.description.paragaraph}
          <br />
          <TypeAnimation
            className="font-bold"
            sequence={heroContent.description.typed}
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
      <img
        src="/img/MESH_GRADIENT_BACKGROUND.png"
        alt=""
        className="absolute object-cover top-0 w-screen h-full z-0"
      />
    </section>
  );
};

export default Hero;
