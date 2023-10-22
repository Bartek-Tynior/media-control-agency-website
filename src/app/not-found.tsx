import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import websiteContent from "../../website-content";

export default function NotFound() {
  const content = websiteContent.not_found;

  return (
    <div className="min-h-screen pt-[10rem] mb-5">
      <div className="flex flex-col text-center justify-center items-center">
        <h1 className="text-4xl mb-8 font-bold">{content.title}</h1>
        <h2 className="text-xl font-semibold">{content.description}</h2>
        <Image
          src={content.imageLocation}
          className="w-[300px] mt-10 pointer-events-none"
          alt=""
          width={600}
          height={600}
        />
        <Link className="mt-10" href="/">
          <Button className="text-2xl" variant="link">
            {content.return_home}
          </Button>
        </Link>
      </div>
    </div>
  );
}
