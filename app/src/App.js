import { Routes, Route } from "react-router-dom";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Room from "./components/Room/Room";
import Home from "./pages/Home/Home";
import LoginForm from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register.js";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LearnMore from "./components/AboutInfo/LearnMore";
import PaymentForm from "./pages/Payment/Payment";

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
        <Route path="/learnMore" element={<LearnMore />} />
        <Route path="/checkout" element={<PaymentForm />} />
        <Route path="room/:scheduleId" element={<Room />} />
      </Routes>
    </>
  );
}

export default App;
