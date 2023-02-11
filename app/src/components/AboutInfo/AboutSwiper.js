import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Pagination, Navigation } from "swiper";
import SwiperPic from "../../assets/icons/6.jpg";

const AboutSwiper = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "black",
          color: "white",
        }}
        className="TheTeam"
      >
        <h2>
          <span
            style={{
              color: "red",
            }}
          >
            Meet
          </span>{" "}
          the Team{" "}
        </h2>
      </div>

      <Swiper
        style={{
          width: "85%",
        }}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={"fade"}
        modules={[Pagination, Navigation]}
        className="mySlide"
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
        <SwiperSlide
          style={{
            backgroundImage: `url(${SwiperPic})`,
            backgroundSize: "cover",
          }}
        >
          <div>
            <h3>Gjorge Popov</h3>
            <h4>General Menager</h4>

            <p>
              nonrnonepnn<br></br>
              nbwpnpinnbpbnp <br></br>
              snbwnnwwnhwphnnnh
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${SwiperPic})`,
            backgroundSize: "cover",
          }}
        >
          <div className="">
            <h3>Gjorge Popov</h3>
            <h4>General Menager</h4>

            <p>
              nonrnonepnn<br></br>
              nbwpnpinnbpbnp <br></br>
              snbwnnwwnhwphnnnh
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${SwiperPic})`,
            backgroundSize: "cover",
          }}
        >
          <div className="">
            <h3>Gjorge Popov</h3>
            <h4>General Menager</h4>

            <p>
              nonrnonepnn<br></br>
              nbwpnpinnbpbnp <br></br>
              snbwnnwwnhwphnnnh
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            backgroundImage: `url(${SwiperPic})`,
            backgroundSize: "cover",
          }}
        >
          <div className="">
            <h3>Gjorge Popov</h3>
            <h4>General Menager</h4>

            <p>
              nonrnonepnn<br></br>
              nbwpnpinnbpbnp <br></br>
              snbwnnwwnhwphnnnh
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default AboutSwiper;
