import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/Search/Search";
import SwiperContainer from "../../components/SwiperSlide/SwiperSlide";
import axios from "axios";

const Home = () => {
  const [results, SetResults] = React.useState(null);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios({
      method: "get",
      url: "https://app-15d2875f-7563-4baf-864b-3beec4034cb4.cleverapps.io/movies",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then(function (response) {
      setItems(response.data);
    });
  }, []);

  //  const searchByGenre = items.filter((movie) => movie.genre === "Action")

  const searchChange = (e) => {
    e.preventDefault();

    const searchResult = items.filter((movie) =>
      movie.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    SetResults(searchResult);
  };

  return (
    <>
      <Carousel />
      <SearchBar searchChange={searchChange} />
      <SwiperContainer data={results !== null ? results : items} />
      <Footer />
    </>
  );
};

export default Home;
