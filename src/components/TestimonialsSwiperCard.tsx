import Image from "next/image";

const TestimonialsSwiperCard = () => {
  return (
    <div className="blured-bg text-start flex flex-col border border-solid border-[rgba(255,255,255,0.1)] mx-auto px-4 py-8 rounded-lg text-white">
      <p className="my-[1.5rem] text-base font-medium">
        &quot;We were delighted with the pace of work, good communication, and
        planning for project implementation. We liked the creative and modern
        approach to each project.&quot;
      </p>
      <div className="flex gap-x-4">
        <Image
          width="80"
          height="80"
          className="rounded-full w-12 h-12"
          src="/img/person-1.jpg"
          alt=""
        />

        <div className="self-center">
          <h3 className="font-bold">Jeroen Jansen</h3>
          <h4 className="font-medium">CEO</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSwiperCard;
