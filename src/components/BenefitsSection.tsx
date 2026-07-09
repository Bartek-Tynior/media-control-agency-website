"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { FC } from "react";

const BenefitsSection = ({ dict }) => {
  const content = dict.service_benefits;

  return (
    <div className="my-8 flex w-full flex-col overflow-hidden sm:grid sm:grid-cols-4">
      <span className="mb-4 text-sm font-bold text-white/80 sm:mb-0 sm:text-base">
        {content.title}
      </span>
      <Swiper
        className="swiper-benefits col-span-3 w-full"
        speed={6000}
        freeMode={true}
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={2}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 0.5,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            spaceBetween: 30,
          },
          480: {
            spaceBetween: 50,
          },
          767: {
            spaceBetween: 50,
          },
          1024: {
            spaceBetween: 50,
          },
        }}
      >
        <div className="swiper-benefits-background"></div>
        {content.list.map(({ description, id }) => (
          <SwiperSlide className="!flex !justify-center" key={id}>
            <BenefitsSectionCard description={description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

interface BenefitsSectionCardProps {
  description: string;
}

const BenefitsSectionCard: FC<BenefitsSectionCardProps> = ({ description }) => {
  return (
    <div className="flex w-full max-w-[14rem] items-start justify-center text-white">
      <Image
        className="check-icon mr-2 mt-0.5 h-5 w-5 shrink-0 pointer-events-none"
        src="/img/icons/check-icon.svg"
        width={20}
        height={20}
        alt="Check Icon"
      />
      <span className="text-sm font-medium leading-snug antialiased sm:text-base">
        {description}
      </span>
    </div>
  );
};

export default BenefitsSection;
