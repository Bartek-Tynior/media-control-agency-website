"use client";

import React from "react";
import websiteContent from "../../website-content";
import SectionLabel from "./ui/SectionLabel";
import { motion, useScroll, useTransform } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CaseStudiesSection = () => {
  const cards = websiteContent.case_studies;

  // Parallax effect settings
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Adjust Grid Item Specifications for Mobile
  const gridStyles = [
    { span: "col-span-2 md:col-span-1", yTransform: y1 },
    { span: "col-span-2 md:col-span-1", yTransform: y2 },
    { span: "col-span-2 md:col-span-1", yTransform: y3 },
    { span: "col-span-2 md:col-span-1", yTransform: y4 },
  ];

  return (
    <section className="text-white h-fit py-14" id="case-studies">
      <motion.div
        className="flex flex-col gap-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <SectionLabel sectionName="Case Studies" />
        <motion.h2
          className="text-2xl lg:w-1/2 font-bold leading-tight"
        >
          Our recent cases
        </motion.h2>
      </motion.div>

      <div className="h-full pt-10 case-studies-section flex flex-col justify-start md:justify-center">
        <motion.div
          className="grid grid-cols-1 gap-12 md:grid-cols-[1fr,.65fr] auto-rows-[1fr] grid-flow-dense"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
        >
          {cards.map(({ client, coverImageLocation, service, id }, index) => {
            const { span, yTransform } = gridStyles[index % gridStyles.length];

            const projectName = client.toLowerCase().replace(/\s/g, "-");

            return (
              <motion.a
                href={`/projects/${projectName}`}
                key={id}
                style={{ y: yTransform }}
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
                      poster={coverImageLocation.src.replace(".mp4", ".jpg")}
                    >
                      <source src={coverImageLocation.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div
                      style={{
                        backgroundImage: `url(${coverImageLocation.src})`,
                      }}
                      className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
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
                  <h6 className="text-lg font-bold">{client}</h6>
                  <p className="text-sm">{service}</p>
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
