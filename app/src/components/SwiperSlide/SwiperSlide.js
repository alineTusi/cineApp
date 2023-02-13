import "../../assets/styles/swiper.css";
import { Pagination, Navigation } from "swiper";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PlayIcon from "../../assets/icons/play.svg";

const SwiperContainer = (props) => {
 
const SwiperContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {}, [items]);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/movies",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(function (response) {
      setItems(response.data);
    });
  }, []);

  const openInfo = (item) => {
    const url = `http://localhost:3000/movieInfo/${item.id}`;
    window.open(url);
  };

  return (
    <div id="swiper_slide_main">
          {props.data.filter(movie => movie.id === 6)
              .map((item, idx) => <h1 key={`uqyruwqyuw${item.id}`}>{item.genre}</h1>)
              }
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={false}
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
                {props.data.filter(movie => movie.genre === "Action")
                    .map((item, i) => 
                    <div key={`SwiperConts${item.id}`} className="swiperCont">
                      <SwiperSlide key={`fajhfafasf${item.id}`}>
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

        {props.data.filter(movie => movie.id === 8)
              .map((item, idx) => <h1 key={`dsahjs${item.id}`}>{item.genre}</h1>)
              }
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={false}
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
                {props.data.filter(movie => movie.genre === "Fantasy")
                    .map((item, i) => 
                    <div key={`wqerwqweqr${item.id}`} className="swiperCont">
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
      {props.data.filter(movie => movie.id === 1)
      .map((item, idx) => <h1 key={`dsdadsaasww${item.id}`}>{item.genre}</h1>)
      }
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={false}
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
              .map((item, i) => 
              <div key={`SwiperdsaCont${item.id}`} className="swiperCont">
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
        {items.map((item, i) => {
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
          );
        })}
      </Swiper>
              {props.data.filter(movie => movie.id === 12)
              .map((item, idx) => <h1 key={`sadsadsafwqooop${item.id}`}>{item.genre}</h1>)
              }
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={false}
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
              .map((item, i) => 
              <div key={`SwiperCdassont${item.id}`} className="swiperCont">
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
              {props.data.filter(movie => movie.id === 13)
              .map((item, idx) => <h1 key={`gewwqawaasfr${item.id}`}>{item.genre}</h1>)
              }
              <Swiper
                slidesPerView={5}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={false}
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
                    .map((item) => 
                    <div key={`dsafwa${item.id}`} className="swiperCont">
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
      </div>

      
  );
};

export default SwiperContainer;
