import { Button } from "./ui/Button";
import websiteContent from "../../website-content";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";

const Footer = ({ lang, dict }) => {
  const content = dict;

  return (
    <footer className="text-white mb-20">
      <MaxWidthWrapper>
        <div className="flex flex-col sm:flex-row justify-between gap-10 md:gap-0">
          <div className="flex flex-col gap-10">
            <div className="flex z-20 w-[175px]">
              <Link href={"/"}>
                <Image
                  src={content.essential_elements.navbar.logo.imageLocation}
                  width="100"
                  height="60"
                  quality={100}
                  className="w-[60px] pointer-events-none"
                  alt={content.essential_elements.navbar.logo.altImage}
                />
              </Link>
            </div>

            <div className="sm:max-w-sm w-full  justify-center items-center sm:items-start flex flex-col gap-4">
              <h2 className="text-base font-semibold">
                {content.essential_elements.footer.newsletter.title}
              </h2>
              <p className="text-base font-normal sm:text-start text-center text-gray-300">
                {content.essential_elements.footer.newsletter.description}
              </p>

              <form className="flex flex-row gap-2">
                <input
                  type="email"
                  placeholder={
                    content.essential_elements.footer.newsletter.input
                      .placeholder
                  }
                  className="px-4 py-2 text-xs rounded-lg bg-white/10 text-white border-none focus:outline-none"
                />
                <Button
                  disabled
                  type="submit"
                  className="text-xs text-white rounded-lg focus:outline-none"
                >
                  {content.essential_elements.footer.newsletter.button.text}
                </Button>
              </form>
            </div>
          </div>

          <div className="flex flex-row justify-around md:justify-start gap-10 md:gap-20">
            <div className="flex flex-col justify-start md:items-start items-center gap-10">
              <h2 className="text-base font-semibold px-4">Links</h2>

              <div className="flex flex-col items-center md:items-start">
                {content.essential_elements.navbar.links.map(
                  ({ index, name, link }) => {
                    return (
                      <Button
                        key={index}
                        className="text-gray-300 text-base py-0 h-6"
                        variant="link"
                      >
                        <a href={link}>{name}</a>
                      </Button>
                    );
                  }
                )}
              </div>
            </div>

            <div className="flex flex-col justify-start md:items-start items-center gap-10">
              <h2 className="text-base font-semibold px-4">Information</h2>

              <div className="flex flex-col items-center md:items-start">
                {content.essential_elements.footer.links.map(
                  ({ index, name, link }) => {
                    return (
                      <Button
                        key={index}
                        className="text-gray-300 text-base py-0 h-6"
                        variant="link"
                      >
                        <a href={link}>{name}</a>
                      </Button>
                    );
                  }
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-10">
          <div className="flex flex-col sm:flex-row gap-5 md:gap-4">
            <div className="flex flex-col gap-[5px] sm:text-start text-center text-sm text-gray-300 w-full">
              <p>{content.essential_elements.contact.phone}</p>
              <p>{content.essential_elements.contact.email}</p>
              <p>
                KVK: <span>{content.essential_elements.contact.kvk}</span>
              </p>
              <p>
                TAX. NO.: <span>{content.essential_elements.contact.tax}</span>
              </p>
            </div>
            <div className="flex flex-row w-full sm:w-1/2 justify-center sm:justify-end gap-3 items-end">
              {["instagram", "linkedin", "facebook"].map((platform) => {
                const social = content.essential_elements.contact[platform];
                return (
                  <a
                    key={platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src={social.icon}
                      alt={social.iconAlt}
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    <span className="text-sm text-gray-300">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="pt-20 text-center md:text-left">
          <span className="text-sm">
            {content.essential_elements.footer.footer_credit}
          </span>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
