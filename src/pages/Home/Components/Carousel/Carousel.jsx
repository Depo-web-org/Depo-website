import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const carouselImages = [
  {
    id: 1,
    image: "public/images/carousel/campaign-creators-gMsnXqILjp4-unsplash.png",
  },
  {
    id: 2,
    image: "public/images/carousel/carlos-muza-hpjSkU2UYSU-unsplash.png",
  },
  {
    id: 3,
    image: "public/images/carousel/tim-van-der-kuip-CPs2X8JYmS8-unsplash.png",
  },
  { id: 4, image: "public/images/carousel/Untitled-1.png" },
  {
    id: 5,
    image: "public/images/carousel/william-hook-9e9PD9blAto-unsplash 1.png",
  },
];

function CustomNavigation() {
  const swiper = useSwiper();

  return (
    <div className="slider-controler">
      <div
        className="swiper-button-prev text-secondary  slider-arrow"
        onClick={() => swiper.slidePrev()}
      >
        <FaArrowAltCircleLeft size={40} />
      </div>
      <div
        className="swiper-button-next text-secondary slider-arrow"
        onClick={() => swiper.slideNext()}
      >
        <FaArrowAltCircleRight size={40} />
      </div>
    </div>
  );
}

export default function Carousel() {
  return (
    <div className="container py-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        breakpoints={{
          1024: { slidesPerView: 3 },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper_container"
      >
        {carouselImages.map((carousel) => (
          <SwiperSlide key={carousel.id}>
            <img src={carousel.image} alt="slide_image" />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Component */}
        <CustomNavigation />

        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
}