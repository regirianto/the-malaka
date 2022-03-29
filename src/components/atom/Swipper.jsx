import React from "react";
import "swiper/css";
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Swipper = ({ children }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      className="lg:w-[1024px] md:w-[768px] w-[320px] drop-shadow-xl rounded-3xl flex-1"
      slidesPerView={1.1}
      freeMode={true}
      grabCursor
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 1.4,
        },
        1024: {
          slidesPerView: 2.3,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default Swipper;
