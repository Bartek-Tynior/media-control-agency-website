import { Button } from "./ui/Button";
import websiteContent from "../../website-content";

const Footer = () => {

  const content = websiteContent.footer;

  return (
    <footer className="text-white mb-40 container">
      <div className="w-full h-[1px] bg-[hsla(0,_0%,_94.9%,_0.2)]  mb-20"></div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <h2 className="text-[#f2f2f2] antialiased inline-flex items-center justify-center font-medium text-sm sm:text-md align-middle">
          {content.footer_credit}
        </h2>
        <div className="flex text-[#f2f2f2] gap-x-6 antialiased">
          {content.links.map(({name, link, index}) => {
            return (
              <Button key={index} className="px-0 sm:px-4" variant="link">
                <a href={link}>{name}</a>
              </Button>
            )
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
