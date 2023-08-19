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
      <div className="grid mx-auto gap-2 lg:gap-8 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            {heroContent.title}
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-white lg:mb-8 md:text-lg lg:text-xl">
            {heroContent.description.paragaraph}
            <TypeAnimation
              className="font-bold"
              sequence={heroContent.description.typed}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </p>
          <div className="flex gap-4">
            <Link href="#contact">
              <Button size="xl" className="group" variant="default">
                Get Started
                <ArrowRightIcon className="ml-2 group-hover:translate-x-2 transition-all" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 items-center justify-center flex">
          <Image
            className="w-1/2 md:w-1/2 lg:w-fit"
            height={500}
            width={500}
            src="/img/hand.png"
            alt="mockup"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
