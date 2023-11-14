"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import websiteContent from "../../website-content";
import { animated, useInView } from "@react-spring/web";

const FAQ = () => {
  const content = websiteContent.FAQ;

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

  const [refTitle, springsTitle] = useInView(animationConfig);
  const [refQestions, springsQuestions] = useInView(animationConfig);

  return (
    <section className="my-10 sm:my-0">
      <animated.div className="mb-5" ref={refTitle} style={springsTitle}>
        <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight pb-2">
          {content.title}
        </h2>
        <p className="text-lg">{content.subtitle}</p>
      </animated.div>

      <animated.div ref={refQestions} style={springsQuestions}>
        <Accordion type="single" collapsible>
          {content.faq_sections.map(({ title, description, index }) => {
            return (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="font-bold text-base text-start">
                  {title}
                </AccordionTrigger>
                <AccordionContent className="font-medium text-base">
                  {description}
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </animated.div>
    </section>
  );
};

export default FAQ;
