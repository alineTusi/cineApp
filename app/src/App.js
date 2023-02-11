// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Home from "./pages/Home/Home";
import LoginForm from "./pages/LogIn/Login";
import Register from "./pages/Register/Register.js";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ResponsiveAppBar from "./components/NavBar/NavBar";
import LearnMore from "./components/AboutInfo/LearnMore";
import PaymentForm from "./pages/Payment/Payment";

// import About from "./pages/About/About";

function App() {
  // const [movieId, setMovieId] = useState(1);
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="movieInfo/:movieId" element={<MovieInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/learnMore" element={<LearnMore />} />
        <Route path="/checkout" element={<PaymentForm />} />
      </Routes>
    </>
  );
}

export default App;
