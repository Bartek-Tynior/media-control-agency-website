"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";
import websiteContent from "../../website-content";

const FAQ = () => {
  const content = websiteContent.FAQ;

  return (
    <section className="my-10 sm:my-0">
      <div className="mb-5">
        <h2 className="text-2xl sm:text-4xl lg:w-1/2 font-bold leading-tight pb-2">
          {content.title}
        </h2>
        <p className="text-lg">{content.subtitle}</p>
      </div>

      <div>
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
      </div>
    </section>
  );
};

export default FAQ;
