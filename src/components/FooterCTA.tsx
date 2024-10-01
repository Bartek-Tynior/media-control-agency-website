import { Button } from "./ui/Button";
import websiteContent from "../../website-content";

const FooterCard: React.FC = () => {
  const content = websiteContent.footer_card;

  return (
    <div
      className="relative flex flex-col items-center justify-center py-20 text-white"
      id="contact"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[200px] h-[500px] bg-custom-gradient rounded-full filter blur-3xl opacity-70"></div>
      </div>

      <div className="relative p-8 blured-bg text-white border border-white/10 shadow-lg rounded-lg max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
        <p className="text-gray-300 mb-6">{content.subtitle}</p>
        <a href="/contact">
          <Button variant="primary">{content.button.text}</Button>
        </a>
      </div>
    </div>
  );
};

export default FooterCard;
