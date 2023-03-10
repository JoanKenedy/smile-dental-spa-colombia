import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Promociones from "./components/Promociones";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Botones from "./components/Botones";
import Nosotros from "./components/Acerca";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="promotions" element={<Promociones />} />
          <Route path="nosotros" element={<Nosotros />} />
        </Routes>
        <Botones />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
