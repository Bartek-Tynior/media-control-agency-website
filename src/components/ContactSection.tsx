"use client";

import { ExternalLink, Mail, Phone } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";
import websiteContent from "../../website-content";
import { animated, useChain, useInView } from "@react-spring/web";

const ContactSection = () => {
  const content = websiteContent.contact;

  const animationConfig = () => ({
    threshold: 0.5,
    rootMargin: "-100px 0px",
    from: {
      opacity: 0,
      y: 100,
    },
    to: {
      opacity: 1,
      y: 0,
    },
  });

  const [ref, springs] = useInView(animationConfig);
  const [refMail, springsMail] = useInView(animationConfig);
  const [refContacts, springsContacts] = useInView(animationConfig);

  // @ts-ignore
  useChain([ref, refMail, refContacts], [0, 0.5, 1], 5000);

  return (
    <section
      className="text-white relative h-full pt-28 pb-14 grid grid-rows-[100px_150px_150px] sm:grid-rows-[200px_300px_150px]"
      id="contact"
    >
      {/* Label Section */}
      <animated.div
        ref={ref}
        style={springs}
        className="flex flex-col title gap-5"
      >
        <SectionLabel sectionName="Contact" />
        <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
          {content.subtitle}
        </h2>
      </animated.div>

      {/* Mail Section */}
      <animated.div
        ref={refMail}
        style={springsMail}
        className="flex items-center justify-start w-full"
      >
        <span
          className="text-2xl sm:text-4xl inline-flex gap-3 font-medium sm:font-extrabold"
          id="contactLink"
        >
          {content.email}
          <ExternalLink className="h-8 w-8 sm:h-10 md:w-10" />
        </span>
      </animated.div>

      {/* Contact Information Section */}
      <animated.div
        ref={refContacts}
        style={springsContacts}
        className="w-full"
      >
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <h3 className="font-bold text-lg sm:text-md">Contact Information</h3>
          <div className="flex flex-col sm:flex-row gap-5 md:gap-4 text-sm sm:text-md">
            <div className="flex flex-col gap-2 w-full sm:w-1/3">
              <p className="inline-flex gap-3 font-semibold">
                <Phone className="w-5 h-5" />
                {content.phone}
              </p>
              <p className="inline-flex gap-3 font-semibold">
                <Mail className="w-5 h-5" />
                {content.email}
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-1/3">
              <p className="font-normal antialiased">
                KVK: <span className="font-semibold">{content.kvk}</span>
              </p>
              <p className="font-normal antialiased">
                TAX. NO.: <span className="font-semibold">{content.tax}</span>
              </p>
            </div>
            <div className="flex flex-row w-full sm:w-1/3 justify-start sm:justify-end gap-3 items-end">
              {content.instagram}
              {content.linkedin}
            </div>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default ContactSection;
