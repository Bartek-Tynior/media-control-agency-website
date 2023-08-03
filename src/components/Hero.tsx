import Image from "next/image";
import { Button } from "./ui/Button";
import websiteContent from "../../website-content";

const Hero = () => {
  const heroContent = websiteContent.hero;

  return (
    <section className="h-screen flex items-center justify-center pt-[6rem]">
      <div className="grid mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            {heroContent.title}
          </h1>
          <p className="max-w-2xl mb-6 font-medium text-white lg:mb-8 md:text-lg lg:text-xl">
            {heroContent.description}
          </p>
          <div className="flex gap-4">
            <Button variant="default">
              <a href="#">Get started</a>
            </Button>
            <Button variant="default">
              <a href="#">Speak to Sales</a>
            </Button>
          </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image height={500} width={500} src="/img/hand.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
