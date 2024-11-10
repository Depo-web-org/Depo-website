import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// import slide_image_1 from "images/Untitled-1.png";
// import slide_image_2 from "images/Untitled-1.png";
// import slide_image_3 from "images/Untitled-1.png";
// import slide_image_4 from "images/Untitled-1.png";
// import slide_image_5 from "images/Untitled-1.png";
// import slide_image_6 from "images/Untitled-1.png";
// import slide_image_7 from "images/Untitled-1.png";
export default function Carousel() {
  return (
    <div className="container">
      <h1 className="heading">Flower Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={3}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src="public/images/Untitled-1.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/images/Untitled-1.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/images/Untitled-1.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/images/Untitled-1.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/images/Untitled-1.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/images/Untitled-1.png" alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="public/images/Untitled-1.png" alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev text-secondary slider-arrow">
            <FaArrowAltCircleLeft />
          </div>
          <div className="swiper-button-next slider-arrow">
            <FaArrowAltCircleRight />{" "}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}
