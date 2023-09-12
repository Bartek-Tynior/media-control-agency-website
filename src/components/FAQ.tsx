import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/Accordion";

const FAQ = () => {
  return (
    <div className="my-10 sm:my-0">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-bold">
            What services do you offer?
          </AccordionTrigger>
          <AccordionContent>
            Currently our agency offers the following services:
            <ul>
              <li>- Product Design</li>
              <li>
                - Web/Software Development (using Webflow, Framer or Custom
                Code)
              </li>
              <li>- Pay Per Click Advertising</li>
              <li>- Implementation of AI Solutions</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="font-bold">
            How do you build websites?
          </AccordionTrigger>
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
        <AccordionItem value="item-3">
          <AccordionTrigger className="font-bold">
            How do you create effective campaigns?
          </AccordionTrigger>
          <AccordionContent>
            Lorem ipsum
            <ul>
              <li>- Discovery (getting to know the client and his needs)</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="font-bold">
            Do you provide ongoing support?
          </AccordionTrigger>
          <AccordionContent>
            Absolutely! We value long-term relationships, and we love seeing our
            clients grow. With us, you will never feel left alone.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="font-bold">
            What are the costs?
          </AccordionTrigger>
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
