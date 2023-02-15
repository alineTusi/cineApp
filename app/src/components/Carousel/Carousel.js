import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  const [items, setItems] = useState([]);

  

  useEffect(() => {
    axios({
      method: "get",
      url: "https://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/movies/banner",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(function (response) {
      setItems(response.data);
    });
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        id="swiperCarousel"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
      >
        <div>
          {items.map((item, i) => (
            <SwiperSlide key={`SwiperSlide${i}`} id="swiperSlideCarousel">
              <img src={item.banner_url} alt="banner" />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
export default Carousel;
