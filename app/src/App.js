import { Routes, Route } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import Home from "./pages/Home/Home";
import Login from "./pages/LogIn/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
