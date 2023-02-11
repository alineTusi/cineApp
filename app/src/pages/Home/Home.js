import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/Search/Search";
import SwiperContainer from "../../components/SwiperSlide/SwiperSlide";
import axios from "axios";
import ResponsiveAppBar from "../../components/NavBar/NavBar";
import SwiperSlider from "../../components/SwiperSlider/SwiperSlider"

const Home = () => {
  const [results, SetResults] = React.useState(null)
  const [items, setItems] = React.useState([])



  React.useEffect(() => {
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



//  const searchByGenre = items.filter((movie) => movie.genre === "Action")

  const searchChange = (e) => {
    e.preventDefault()
 
  
    const searchResult = items.filter((movie) => movie.title.toLowerCase().includes(e.target.value.toLowerCase()))
    SetResults(searchResult);
    // console.log(e.target.value)
    // console.log(results)
  }

  return (
    <>
      <ResponsiveAppBar searchByGenre={"Heelo"}/>
      <Carousel />
      <SearchBar searchChange={searchChange} />
      <SwiperContainer data={results !== null ? results : items} />
      {/* <SwiperSlider /> */}
      <Footer />
    </>
  );
};

export default Home;
