"use client";

import React from "react";
import websiteContent from "../../website-content";
import SectionLabel from "./ui/SectionLabel";
import { motion, useScroll, useTransform } from "framer-motion";

const CaseStudiesSection = () => {
  const cards = websiteContent.case_studies;

  // Parallax effect instellingen
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  // Grid Item Specificaties
  const gridStyles = [
    { span: "col-span-2 md:col-span-1", yTransform: y1 },
    { span: "col-span-1", yTransform: y2 },
    { span: "col-span-1", yTransform: y3 },
    { span: "col-span-2 md:col-span-1", yTransform: y4 },
  ];

  return (
    <section
      className="text-white h-fit py-14"
      id="case-studies"
    >
      <motion.div className="flex flex-col gap-5">
        <SectionLabel sectionName="Case Studies" />
        <h2 className="text-2xl lg:w-1/2 font-bold leading-tight">
          Our recent cases
        </h2>
      </motion.div>

      <div className="h-full pt-20 md:pt-0 case-studies-section flex flex-col justify-start md:justify-center">
        <div className="grid grid-cols-1 auto-cols-auto gap-24 gap-x-24 gap-y-24 md:grid-cols-[1fr,.65fr] auto-rows-[1fr] grid-flow-dense">
          {cards.map(({ client, coverImageLocation, service, id }, index) => {
            const { span, yTransform } = gridStyles[index % gridStyles.length];

            return (
              <motion.div
                key={id}
                style={{ y: yTransform }}
                className={`casestudy-item overflow-hidden ${span}`}
              >
                <div className="media-container relative w-full pb-[56.25%]">
                  {" "}
                  {coverImageLocation.type === "video" ? (
                    <video
                      className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
