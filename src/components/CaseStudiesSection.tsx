"use client";

import React, { useEffect, useState, useRef } from "react";
import websiteContent from "../../website-content";
import SectionLabel from "./ui/SectionLabel";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CaseStudiesSection = () => {
  const cards = websiteContent.case_studies;

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 }); // Animation triggered when in view

  // State to check if we are on a desktop view
  const [isDesktop, setIsDesktop] = useState(false);

  // Parallax effect settings for desktop only
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const gridStyles = [
    { span: "col-span-2 md:col-span-1", yTransform: y1 },
    { span: "col-span-2 md:col-span-1", yTransform: y2 },
    {
      span: "col-span-2 md:col-span-1 w-full md:w-[calc(100%-3rem)] md:col-start-2",
      yTransform: y3,
    },
    { span: "col-span-2 md:col-span-1", yTransform: y4 },
  ];

  // Check for desktop size
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // Check if it's a desktop view
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
  }, []);

  return (
    <section
      className="text-white h-fit py-14"
      id="case-studies"
      ref={sectionRef}
    >
      <motion.div
        className="flex flex-col gap-5"
        initial="hidden"
        animate={isInView ? "show" : "hidden"} // Trigger animation when in view
        variants={containerVariants}
      >
        <SectionLabel sectionName="Case Studies" />
        <motion.h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
          Our recent cases
        </motion.h2>
      </motion.div>

      <div className="h-full pt-10 case-studies-section flex flex-col justify-start md:justify-center">
        {/* Reduce spacing in the grid on larger screens */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-[1fr,.65fr] md:grid-rows-[auto,1.5fr] auto-rows-[1fr] grid-flow-dense"
          initial="hidden"
          animate={isInView ? "show" : "hidden"} // Animate when section is in view
          variants={containerVariants}
        >
          {cards.map(({ client, coverImageLocation, service, id }, index) => {
            const { span, yTransform } = gridStyles[index % gridStyles.length];

            const projectName = client.toLowerCase().replace(/\s/g, "-");

            return (
              <motion.a
                href={`/projects/${projectName}`}
                key={id}
                style={{
                  y: isDesktop ? yTransform : 0, // Parallax only for desktop
                }}
                className={`casestudy-item overflow-hidden ${span}`}
                variants={itemVariants}
              >
                <div className="media-container relative w-full pb-[56.25%]">
                  {coverImageLocation.type === "video" ? (
                    <video
                      className="absolute border border-white/30 shadow-lg antialiased top-0 left-0 w-full h-full rounded-lg object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={coverImageLocation.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div
                      style={{
                        backgroundImage: `url(${coverImageLocation.src})`,
                      }}
                      className="absolute border border-white/30 shadow-lg antialiased top-0 left-0 w-full h-full rounded-lg bg-cover bg-center"
                    >
                      <div className="hidden">
                        <div className="text-size-small">
                          Case study coming soon
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="text-container py-4">
                  <span className="text-lg font-bold">{client}</span>
                  <span className="text-sm">{service}</span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
