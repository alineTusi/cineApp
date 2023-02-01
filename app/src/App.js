import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Home from "./pages/Home/Home";
import Login from "./pages/LogIn/log";
import RegisterUser from "./pages/Register/Register";


function App() {
  const [movieId, setMovieId] = useState(1);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterUser />} />
      <Route path="movieInfo/:movieId" element={<MovieInfo />} />
    </Routes>
    </>
  );
}

export default App;

