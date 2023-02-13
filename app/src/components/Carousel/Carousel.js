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
<<<<<<< HEAD
  
=======
  useEffect(() => {}, [items]);
>>>>>>> d76c1dd22b85349d5b498cb1bb500bee3350a286

  useEffect(() => {
    axios({
      method: "get",
      url: "http://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/movies/banner",
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
<<<<<<< HEAD
          {items.map((item) => (
            <SwiperSlide key={item.id} id="swiperSlideCarousel">
              <img src={item.banner_url} alt="banner"/>
              
=======
          {items.map((item, i) => (
            <SwiperSlide key={i} id="swiperSlideCarousel">
              <img src={item.banner_url} alt="banner" />
>>>>>>> d76c1dd22b85349d5b498cb1bb500bee3350a286
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};
export default Carousel;
