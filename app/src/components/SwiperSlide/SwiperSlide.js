import "../../assets/styles/swiper.css";
import { Pagination, Navigation } from "swiper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PlayIcon from "../../assets/icons/play.svg";

const SwiperContainer = (props) => {
  

console.log(props.data)
  const openInfo = (item) => {
    const url = `http://localhost:3000/movieInfo/${item.id}`;
    window.open(url);
  };

  return (
    <div id="swiper_slide_main">
     {/* {props.data.filter(movie => movie.id === 6)
      .map((item, idx) => <h1 key={idx}>{item.genre}</h1>)
      }
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
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
             {props.data.map((item, i) => {
              return (
                <div className="swiperCont" key={`swiperCon${i}`}>
                   <SwiperSlide key={`SwiperSlide${i}`}>
                  <img src={item.img_url} alt="" />
                  <p className="bottom">{item.title}</p>

                  <div className="play-icon" onClick={() => openInfo(item)}>
                    <div className="icon-container">
                      <img src={PlayIcon} alt="play" />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
                )})
              }
      </Swiper> */}
      {props.data.filter(movie => movie.id === 8)
      .map((item, idx) => <h1 key={idx}>{item.genre}</h1>)
      }
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
        className="mySwiper"
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
             {props.data.filter(movie => movie.title === "Morbius")
              .map((item, i) => 
              // <div key={`swiperCont${i}`} className="swiperCont">
              //   <SwiperSlide>
              //     <img src={item.img_url} alt="" />
              //     <p className="bottom">{item.title}</p>

              //     <div className="play-icon" onClick={() => openInfo(item)}>
              //       <div className="icon-container">
              //         <img src={PlayIcon} alt="play" />
              //       </div>
              //     </div>
              //   </SwiperSlide>
              // </div>

              console.log(item)
              ) }
          
      </Swiper>
      {/* {props.data.filter(movie => movie.id === 1)
      .map((item, idx) => <h1 key={idx}>{item.genre}</h1>)
      }
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
        className="mySwiper"
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
        {props.data.filter(movie => movie.genre === "Science Fiction")
              .map((item, idx) => 
              <div key={idx} className="swiperCont">
                <SwiperSlide>
                  <img src={item.img_url} alt="" />
                  <p className="bottom">{item.title}</p>

                  <div className="play-icon" onClick={() => openInfo(item)}>
                    <div className="icon-container">
                      <img src={PlayIcon} alt="play" />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              )}
      </Swiper>
              {props.data.filter(movie => movie.id === 12)
              .map((item, idx) => <h1 key={idx}>{item.genre}</h1>)
              }
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
                className="mySwiper"
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
          {props.data.filter(movie => movie.genre === "Mystery")
              .map((item, idx) => 
              <div key={idx} className="swiperCont">
                <SwiperSlide>
                  <img src={item.img_url} alt="" />
                  <p className="bottom">{item.title}</p>

                  <div className="play-icon" onClick={() => openInfo(item)}>
                    <div className="icon-container">
                      <img src={PlayIcon} alt="play" />
                    </div>
                  </div>
                </SwiperSlide>
              </div>
              )}
              </Swiper>
              {props.data.filter(movie => movie.genre === "Adventure")
              .map((item, idx) => <h1 key={idx}>{item.genre}</h1>)
              }
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
                className="mySwiper"
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
                {props.data.filter(movie => movie.genre === "Adventure")
                    .map((item, idx) => 
                    <div key={idx} className="swiperCont">
                      <SwiperSlide>
                        <img src={item.img_url} alt="" />
                        <p className="bottom">{item.title}</p>

                        <div className="play-icon" onClick={() => openInfo(item)}>
                          <div className="icon-container">
                            <img src={PlayIcon} alt="play" />
                          </div>
                        </div>
                      </SwiperSlide>
                    </div>
                    )}
              </Swiper> */}
      </div>

      
  );
};

export default SwiperContainer;
