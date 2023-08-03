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
      <span className="mb-4 sm:mb-0 text-base">Why choosing for us:</span>
      <Swiper
        className="col-span-3 swiper-benefits w-full"
        speed={5000}
        slidesPerView={2}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 0,
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
