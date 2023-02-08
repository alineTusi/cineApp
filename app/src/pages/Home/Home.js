import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
//import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/Search/Search";
import LogoPic from "../../assets/icons/Logo.Pic.svg";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        background: "black",
        height: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "80%",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        <SearchBar />
      </div>
    </div>
  );
}
=======
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/NavBar/NavBar";
import SwiperContainer from "../../components/SwiperSlide/SwiperSlide";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <SwiperContainer />
      <Footer />
    </>
  );
};

export default Home;
>>>>>>> 7da6b1d1e620517316ed67fc657b1216df295658
