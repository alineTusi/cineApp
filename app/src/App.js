import { Routes, Route } from "react-router-dom";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Room from "./components/Room/Room";
import Home from "./pages/Home/Home";
import LoginForm from "./pages/LogIn/Login";
import Register from "./pages/Register/Register.js";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/SignIn" element={<LoginForm />} />
        <Route path="movieInfo/:movieId" element={<MovieInfo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="movieInfo/:movieId" element={<MovieInfo />} />
        <Route path="room/:scheduleId" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
