import Title from './Title'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from './Slide';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function RoadMap() {
    const slides = [1, 2, 3, 4, 5]
  return (
    <section className="py-[60px]">
      <div className="maxW mx-auto">
        <Title title="Roadmap" description="Check out our history" />
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },

          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
        className="maxW flex "
      >
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              <SwiperSlide key={index} className="w-full py-[60px]">
                <Slide/>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
      </div>
    </section>
  );
}

export default RoadMap
