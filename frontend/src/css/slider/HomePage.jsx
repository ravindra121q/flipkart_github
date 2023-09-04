import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

export default function FirstSlider() {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/844/140/image/d1a252d2c103b7c5.jpg?q=50"
            alt="first_slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/5f478a106d047aba.jpg?q=50"
            alt="first_slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/4f4572bcb0801326.jpg?q=50"
            alt="first_slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/4f4572bcb0801326.jpg?q=50"
            alt="first_slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/4f4572bcb0801326.jpg?q=50"
            alt="first_slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/4f4572bcb0801326.jpg?q=50"
            alt="first_slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/4f4572bcb0801326.jpg?q=50"
            alt="first_slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/4f4572bcb0801326.jpg?q=50"
            alt="first_slider"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://rukminim2.flixcart.com/fk-p-flap/50/50/image/4f4572bcb0801326.jpg?q=50"
            alt="first_slider"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
