import React from "react";
import Slider from "react-slick";



export default function SwiperSlider(props) {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


    {props.data.map((movie) => {
    return (
      <Slider key={movie.id} {...settings}>
        <div>
          <img src={movie.img_url} width="300px" height="200px" alt="slide"/>
          <h4>{movie.title}</h4>
        </div>
      </Slider>
 
    
    )
})}

}