import Image from "next/image";

const TestimonialsSwiperCard = () => {
  return (
    <div className="blured-card-big w-[275px] h-auto text-white">
      <p className="my-[1.5rem] text-base">
        "We were delighted with the pace of work, good communication, and
        planning for project implementation. We liked the creative and modern
        approach to each project."
      </p>
      <div className="flex gap-x-4">
        <Image
          width='80'
          height='80'
          className="rounded-full w-12 h-12"
          src="/img/person-1.jpg"
          alt=""
        />

        <div className="self-center">
          <h3>Jeroen Jansen</h3>
          <h4>CEO</h4>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSwiperCard;
