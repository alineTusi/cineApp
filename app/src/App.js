// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Home from "./pages/Home/Home";
import LoginForm from "./pages/LogIn/Login";
import Register from "./pages/Register/Register.js";

// import About from "./pages/About/About";

function App() {
  // const [movieId, setMovieId] = useState(1);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="movieInfo/:movieId" element={<MovieInfo />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="About" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
