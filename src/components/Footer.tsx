import { Button } from "./ui/Button";
import websiteContent from "../../website-content";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const content = websiteContent;

  return (
    <footer className="text-white mb-20">
      <MaxWidthWrapper>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-10">
            <div className="flex z-20 w-[175px]">
              <Link href={"/"}>
                <Image
                  src={content.navbar.logo.imageLocation}
                  width="100"
                  height="60"
                  quality={100}
                  className="w-[60px] pointer-events-none"
                  alt={content.navbar.logo.altImage}
                />
              </Link>
            </div>

            <div className="max-w-sm flex flex-col gap-4">
              <h2 className="text-sm font-semibold">Join our newsletter</h2>
              <p className="text-sm font-normal text-gray-300">
                Sign up to our mailing list below and be the first to know about
                new updates. Don't worry, we hate spam too.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="flex flex-col justify-start items-center gap-10">
              <h2 className="text-sm font-semibold">Links</h2>

              <div className="flex flex-col">
                {content.navbar.links.map(({ name, link, index }) => {
                  return (
                    <Button
                      key={index}
                      className="text-gray-300 text-xs py-0 h-6"
                      variant="link"
                    >
                      <a href={link}>{name}</a>
                    </Button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col justify-start items-center gap-10">
              <h2 className="text-sm font-semibold">Information</h2>

              <div className="flex flex-col">
                {content.footer.links.map(({ name, link, index }) => {
                  return (
                    <Button
                      key={index}
                      className="text-gray-300 text-xs py-0 h-6"
                      variant="link"
                    >
                      <a href={link}>{name}</a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20">
          <span className="text-sm">
            © 2024 All rights reserved Made with 💜 by Media Control Agency
          </span>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
