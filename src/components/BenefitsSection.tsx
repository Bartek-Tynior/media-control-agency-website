"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { FC } from "react";

const BenefitsSection = ({ dict }) => {
  const content = dict.service_benefits;

  return (
    <div className="w-full flex flex-col sm:grid grid-cols-4 my-6 overflow-hidden">
      <span className="mb-4 sm:mb-0 text-base font-bold">{content.title}</span>
      <Swiper
        className="col-span-3 swiper-benefits w-full"
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
    <div className="text-white flex w-fit justify-center">
      <Image
        className="check-icon mx-2 w-6 h-6 pointer-events-none "
        src="/img/icons/check-icon.svg"
        width={20}
        height={20}
        alt="Check Icon"
      />
      <span className="text-base font-medium antialiased">{description}</span>
    </div>
  );
};

export default BenefitsSection;
