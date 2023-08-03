const Footer = () => {
  return (
    <footer className="text-white mb-40">
      <div className="separator mb-20"></div>
      <div className="flex flex-row justify-between">
        <h2 className="text-[#f2f2f2]">
          © 2023 Media Control Agency. All right reserved.
        </h2>
        <div className="flex text-[#f2f2f2] gap-x-6">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-services">Terms of Service</a>
          <a href="/cookies-settings">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
