import { Button } from "./ui/Button";

const Footer = () => {
  return (
    <footer className="text-white mb-40 container">
      <div className="w-full h-[1px] bg-[hsla(0,_0%,_94.9%,_0.2)]  mb-20"></div>
      <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
        <h2 className="text-[#f2f2f2] antialiased inline-flex items-center justify-center font-medium text-sm sm:text-md align-middle">
          © 2023 Media Control Agency. All right reserved.
        </h2>
        <div className="flex text-[#f2f2f2] gap-x-6 antialiased">
          <Button className="px-0 sm:px-4" variant="link">
            <a href="/privacy-policy">Privacy Policy</a>
          </Button>
          <Button className="px-0 sm:px-4" variant="link">
            <a href="/terms-of-services">Terms of Service</a>
          </Button>
          <Button className="px-0 sm:px-4" variant="link">
            <a className="text-sm" href="/cookies-settings">
              Cookies Settings
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
