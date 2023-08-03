"use client";

import { Pagination } from "swiper/modules";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialsSwiperCard from "./TestimonialsSwiperCard";

const TestimonialsSwiper = () => {
  return (
    <Swiper
      grabCursor={true}
      spaceBetween={50}
      modules={[Pagination]}
      breakpoints={{
        576: {
          width: 576,
          slidesPerView: 1,
        },
        768: {
          width: 768,
          slidesPerView: 2,
        },
        1200: {
          width: 1200,
          slidesPerView: 3,
        },
      }}
    >
      <SwiperSlide>
        <TestimonialsSwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsSwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsSwiperCard />
      </SwiperSlide>
      <SwiperSlide>
        <TestimonialsSwiperCard />
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialsSwiper;
