import "../../assets/styles/swiper.css";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PlayIcon from "../../assets/icons/play.svg"
import Data from "../../assets/data/data"

const  SwiperContainer = () => {
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
              spaceBetween: 0,
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
        {Data.map((data) => {
            return (
              <>
              <h1>{data.Genre}</h1>
                <SwiperSlide>
                <img src={data.url} alt=""/>
                <p className="bottom">{data.title}</p>
             
                <div className="play-icon">
                    <div className="icon-container">
                        <img src={PlayIcon} alt="play"/>
                    </div>
                </div>
            </SwiperSlide>
            </>
            )
        })}
      </Swiper>
    </>
  );
}

export default SwiperContainer