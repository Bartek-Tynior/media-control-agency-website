"use client";

import websiteContent from "../../website-content";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "./ui/Particles";

const Hero = ({ dict }: { dict: any }) => {
  const content = dict;

  // Animation variants for staggering the text elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger delay between children animations
        delayChildren: 0.5, // Delay before children animations start
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="h-screen flex overflow-hidden relative">
      <Particles />
      <MaxWidthWrapper className="h-full">
        <div className="z-40 h-full w-full flex flex-col justify-center relative">
          <GradientBall />
          <div className="h-full w-full flex flex-col justify-center items-center">
            {/* Wrap the text elements with a motion.div to stagger their animations */}
            <motion.div
              className="text-center flex flex-col gap-6 px-4 sm:px-8 justify-center items-center" // Added padding for better mobile view
              initial="hidden"
              animate="visible"
              variants={containerVariants} // Container variant to stagger children
            >
              {/* Subtitle with stagger animation */}
              <motion.span
                className="text-gray-300 text-center text-base sm:text-lg tracking-widest mb-3 sm:mb-5"
                variants={itemVariants}
              >
                {content.subtitle}
              </motion.span>

              {/* Title with stagger animation */}
              <motion.h1
                className="text-center text-5xl sm:text-7xl max-w-xs sm:max-w-3xl font-semibold tracking-wide mb-3 sm:mb-5"
                variants={itemVariants}
              >
                {content.title}
              </motion.h1>

              {/* Short description with stagger animation */}
              <motion.h2
                className="text-base max-w-sm sm:max-w-md text-center tracking-wide mb-3 sm:mb-5"
                variants={itemVariants}
              >
                {content.shortDescription}
              </motion.h2>

              {/* Buttons with stagger animation */}
              <motion.div
                className="w-full flex flex-col sm:flex-row gap-4 justify-center items-center"
                variants={itemVariants} // Apply animation to the buttons
              >
                {content.buttons.map((button: any, index: number) => (
                  <a key={index} href={button.link} className="z-30">
                    <Button
                      className="text-base"
                      variant={button.variant}
                      size="lg"
                    >
                      {button.text}
                    </Button>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const GradientBall = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["50%", "-100%"]);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{
        y,
      }}
    >
      <div className="w-64 h-64 sm:w-96 sm:h-96 bg-custom-gradient rounded-full opacity-70 blur-2xl" />
    </motion.div>
  );
};

export default Hero;
