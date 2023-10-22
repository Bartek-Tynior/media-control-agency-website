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
    <div className="my-10 sm:my-0">
      <Accordion type="single" collapsible>
        {content.map(({ title, description, index }) => {
          return (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger
                className="font-bold text-base text-start"
              >
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
  );
};

export default FAQ;
