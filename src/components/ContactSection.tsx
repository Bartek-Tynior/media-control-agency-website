import { ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      className="text-white relative h-screen pt-[6rem] grid grid-rows-[200px_1fr_100px]"
      id="contact"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl py-2 px-4 blured-bg bg-gray-700 w-fit rounded-lg font-bold">
          Contact
        </h2>
        <h2 className="text-4xl lg:w-1/2 font-bold leading-tight">
          Ready to collaborate or any questions?
        </h2>
      </div>
      <div className="flex items-center md:justify-start justify-center w-full">
        <a
          className="text-3xl sm:text-4xl md:text-5xl flex flex-row gap-3 font-extrabold"
          id="contactLink"
          href="mailto:email@example.com?subject=Collaboration"
        >
          hello@mediacontrol.com
          <ExternalLink className="h-10 w-10" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-x-2 w-full lg:w-1/2">
        <div className="flex flex-col text-sm md:text-base">
          <p>ul. Krochmalna 56/37, </p>
          <p>00-864, Warsaw, Poland </p>
          <p> VAT ID: PL 5272987537</p>
        </div>
        <div className="flex flex-col text-sm md:text-base">
          <p>ul. Krochmalna 56/37, </p>
          <p>00-864, Warsaw, Poland </p>
          <p> VAT ID: PL 5272987537</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
