"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import websiteContent from "../../website-content";
import { Autoplay } from "swiper/modules";
import BenefitsSectionCard from "./BenefitsSectionCard";

const BenefitsSection = () => {
  const serviceBenefits = websiteContent.service_benefits;

  return (
    <div className="flex flex-col sm:grid grid-cols-4 my-6 overflow-hidden">
      <span className="mb-4 sm:mb-0 text-base font-semibold">Why choosing for us:</span>
      <Swiper
        className="col-span-3 swiper-benefits w-full"
        speed={11000}
        freeMode={true}
        grabCursor={true}
        spaceBetween={70}
        slidesPerView='auto'
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
        {serviceBenefits.map(({ description, id }) => (
          <SwiperSlide key={id}>
            <BenefitsSectionCard description={description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BenefitsSection;
