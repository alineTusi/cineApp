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
