"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import websiteContent from "../../website-content";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const services = websiteContent.services;
  const servicesRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: servicesRef.current,
          toggleActions: "restart complete reverse resume",
          start: "top top",
          scrub: true,
          pinSpacing: false,
          pin: true,
        },
      });

      tl.to([".service-1", ".service-image-1"], { autoAlpha: 0 });

      tl.from([".service-2", ".service-image-2"], { autoAlpha: 0, y: 20 });

      tl.to([".service-2", ".service-image-2"], { autoAlpha: 0 });

      tl.from([".service-3", ".service-image-3"], { autoAlpha: 0, y: 20 });

      tl.to([".service-3", ".service-image-3"], { autoAlpha: 0 });

      tl.from([".service-4", ".service-image-4"], { autoAlpha: 0, y: 20 });
    });

    return () => ctx.revert();
  });

  return (
    <section className="h-[calc(100vh_*_2)]" id="services">
      <div
        className="flex items-center h-screen w-full justify-between overflow-hidden"
        ref={servicesRef}
      >
        <div className="content-section relative h-[400px] w-full flex-[0_1_100%] md:flex-[0_1_45%]">
          {services.map(({ title, description, i }) => {
            return (
              <div
                className={`coneten-panels absolute top-[50%] translate-y-[-50%] service-${i}`}
                key={i}
              >
                <h2 className="text-4xl font-bold pb-5">{title}</h2>
                <p className="text-xl font-light">{description}</p>
              </div>
            );
          })}
        </div>

        <div className="images-section hidden md:flex relative h-[400px] w-full items-center justify-center md:flex-[0_1_45%]">
          {services.map(({ imageLocation, i }) => {
            return (
              <Image
                className={`absolute top-[50%] translate-y-[-50%] service-image-${i}`}
                src={imageLocation}
                alt="service"
                width={300}
                height={300}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
