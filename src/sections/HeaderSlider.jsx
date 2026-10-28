
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../../public/images/packaging.png";
import img2 from "../../public/images/quality.png";
import img3 from "../../public/images/farm_list.png";

import "swiper/css";
import "swiper/css/pagination";

import "../styles/sections.css";

export default function HeaderSlider() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView="auto"
      centeredSlides={true}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src={img1}
          alt="Packaging"
          onClick={scrollToAbout}
          className="swiper-clickable-image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src={img2}
          alt="Quality"
          onClick={scrollToAbout}
          className="swiper-clickable-image"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src={img3}
          alt="Farm products"
          onClick={scrollToAbout}
          className="swiper-clickable-image"
        />
      </SwiperSlide>
    </Swiper>
  );
}
