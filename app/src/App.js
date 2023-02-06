// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Home from "./pages/Home/Home";
import Login from "./pages/LogIn/LogIn";
import FormEx from "./pages/Register/Register";
// import About from "./pages/About/About";

function App() {
  // const [movieId, setMovieId] = useState(1);
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="movieInfo/:movieId" element={<MovieInfo />} />
        <Route path="/register" element={< FormEx />} />
        {/* <Route path="About" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
