import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Promotions from "./pages/Promotions";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Botones from "./components/Botones";
import Nosotros from "./pages/Nosotros";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="servicios" element={<Servicios />} />
          <Route path="promotions" element={<Promotions />} />
          <Route path="nosotros" element={<Nosotros />} />
        </Routes>
        <Botones />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
