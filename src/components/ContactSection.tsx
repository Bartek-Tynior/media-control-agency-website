import { ExternalLink, Home, Mail, Phone } from "lucide-react";
import SectionLabel from "./ui/SectionLabel";
import websiteContent from "../../website-content";
import Image from "next/image";

const ContactSection = () => {

  const content = websiteContent.contact_homepage;

  return (
    <section
      className="text-white relative h-full sm:h-screen pt-[6rem] grid grid-rows-[100px_150px_150px] sm:grid-rows-[200px_1fr_150px]"
      id="contact"
    >
      <div className="flex flex-col gap-2">
        <SectionLabel sectionName="Contact" />
        <h2 className="text-xl sm:text-4xl lg:w-1/2 font-bold leading-tight">
          Ready to collaborate or any questions?
        </h2>
      </div>
      <div className="flex items-center justify-start w-full">
        <a
          className="text-2xl sm:text-4xl inline-flex gap-3 font-extrabold"
          id="contactLink"
          href="mailto:email@example.com?subject=Collaboration"
        >
          {content.email}
          <ExternalLink className="h-8 w-8 sm:h-10 md:w-10" />
        </a>
      </div>

      <div className="w-full">
        <div className="flex flex-col gap-2 text-sm md:text-base">
          <h3 className="font-bold text-lg sm:text-md">Contact Information</h3>
          <div className="flex flex-col sm:flex-row gap-2 md:gap-4 text-sm sm:text-md">
            <div className="flex flex-col gap-2">
              <p className="inline-flex gap-3 font-semibold">
                <Phone className="w-5 h-5" />
                {content.phone}
              </p>
              <p className="inline-flex gap-3 font-semibold">
                <Mail className="w-5 h-5" />
                {content.email}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-normal antialiased">
                KVK: <span className="font-semibold">{content.kvk}</span>
              </p>
              <p className="font-normal antialiased">
                TAX. NO.: <span className="font-semibold">{content.tax}</span>
              </p>
            </div>
            <div className="flex flex-row w-1/3 justify-end sm:justify-end gap-3 items-end">
              <a href="">
                <Image
                  src="/img/icons/instagram-icon.png"
                  alt="Instagram Icon"
                  width={30}
                  height={30}
                />
              </a>
              <a href="">
                <Image
                  src="/img/icons/linkedin-icon.png"
                  alt="LinkedIn Icon"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
