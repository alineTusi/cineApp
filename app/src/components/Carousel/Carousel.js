import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3004/movies/banner",
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
        className="mySwiper"
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
            <SwiperSlide key={i}>
              <img src={item.banner_url} />
              
            </SwiperSlide>
          ))}
        </div>
        
      </Swiper>
    </>
  );
};
export default Carousel;
