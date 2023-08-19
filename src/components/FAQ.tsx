import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

const FAQ = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>How do you build products?</AccordionTrigger>
          <AccordionContent>
            Our process is simple yet effective. It divides into these steps:
            <ul>
              <li>- Discovery (getting to know the client and his needs)</li>
              <li>
                - Designing (translating our joint vision into wireframes in
                Figma)
              </li>
              <li>
                - Development (implementing the designs in Figma in Webflow or
                other tools)
              </li>
              <li>- QA (review & testing) </li>
              <li>- Improvements (implementing fixes)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Do you provide ongoing support?</AccordionTrigger>
          <AccordionContent>
            Absolutely! We value long-term relationships, and we love seeing our
            clients grow. With us, you will never feel left alone.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What are the costs?</AccordionTrigger>
          <AccordionContent>
            We charge a fixed price for each project. The price depends on the
            complexity of the project. We also offer a monthly subscription for
            ongoing support and maintenance.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQ;
