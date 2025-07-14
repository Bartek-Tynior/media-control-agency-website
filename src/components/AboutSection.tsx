import { useRef } from "react";
import websiteContent from "../../website-content";
import { useScroll, useTransform, motion } from "framer-motion";

export default function About({ dict }: { dict: any }) {
  const element = useRef(null);
  const content = dict;

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.25"],
  });

  const opacity = scrollYProgress;
  const blur = useTransform(scrollYProgress, [0, 1], ["20px", "0px"]);

  return (
    <section className="h-fit py-20" id="vision">
      <div className="h-full flex flex-col items-center justify-center">
        <motion.p
          className="text-3xl h-fit font-semibold text-center"
          ref={element}
          style={{ opacity: opacity, filter: `blur(${blur})` }}
        >
          {content.description}
        </motion.p>
      </div>
    </section>
  );
}
