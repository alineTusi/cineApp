import "../../assets/styles/swiper.css";
import { Pagination, Navigation } from "swiper";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PlayIcon from "../../assets/icons/play.svg"

const  SwiperContainer = () => {

  const [items, setItems] = useState([]);
  useEffect(() => {
    console.log(items);
  }, [items]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3004/movies",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(function (response) {
      setItems(response.data);
    });
  }, []);

  const openInfo = (item) => {
    const url = `http://localhost:3000/movieInfo/${item.id}`;
    window.open(url)
  }

  return (
  
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        class="swiper-container"
        breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
      >
        {items.map((item, i) => {
            return (
              <div className="swiperCont">
                <SwiperSlide>
                <img src={item.img_url} alt=""/>
                <p className="bottom">{item.title}</p>
             
                <div className="play-icon" onClick={()=> openInfo(item)}>
                  
                    <div className="icon-container">
                        <img src={PlayIcon} alt="play"/>
                    </div>
                </div>
            </SwiperSlide>
            </div>
            )
        })}
      </Swiper>
    </>
  );
}

export default SwiperContainer