import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ResponsiveAppBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact Us" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
