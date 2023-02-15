import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";

import SwiperContainer from "../../components/SwiperSlide/SwiperSlide";

const Home = () => {
  return (
    <>
      {/*<Navbar />*/}

      <Carousel />
      <SwiperContainer />
      <Footer />
    </>
  );
};

export default Home;
