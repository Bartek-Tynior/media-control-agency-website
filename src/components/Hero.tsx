"use client";

import websiteContent from "../../website-content";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const content = websiteContent.hero;

  return (
    <section className="h-screen flex overflow-hidden relative">
      <MaxWidthWrapper className="h-full">
        <div className="z-40 h-full w-full flex flex-col justify-center relative">
          <GradientBall />
          <div className="h-full w-full flex flex-col justify-center items-center">
            <motion.div
              className="text-center flex flex-col gap-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div>
                <span className="text-zinc-200 text-center font-semibold text-lg tracking-widest mb-5">
                  {content.subtitle}
                </span>
                <h1 className="text-center text-6xl font-semibold tracking-wide mb-5">
                  {content.title}
                </h1>
                <h2 className="text-lg text-center tracking-wide mb-5">
                  {content.shortDescription}
                </h2>
              </div>
              <div className="w-full flex flex-row gap-4 justify-center items-center">
                <Button className="text-xs" variant="default" size="lg">
                  Contact us
                </Button>
                <Button className="text-xs" variant="default" size="lg">
                  Learn more
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const GradientBall = () => {
  const { scrollYProgress } = useScroll(); // Track vertical scroll progress
  const y = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]); // Adjust the range here as needed

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{
        y,
      }}
    >
      <div className="w-96 h-96 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-full opacity-70 blur-2xl" />
    </motion.div>
  );
};

export default Hero;
