import React, { useState } from "react";

// Assuming logo.png is in the same folder as JS file
import logo from "../img/logo_logo.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="logo_header">
        <img src={logo} alt="" />
      </div>
      <nav className={`nav ${isOpen && "open"}`}>
        <ul className="menu">
          <li>
            <Link to="/" onClick={handleIsOpen}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="nosotros" onClick={handleIsOpen}>
              Acerca de Armonisa
            </Link>
          </li>
          <li>
            <Link to="promotions" onClick={handleIsOpen}>
              Promociones
            </Link>
          </li>
          <li>
            <Link to="servicios" onClick={handleIsOpen}>
              Servicios
            </Link>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=528135698372"
              target="_blank"
              className="btn_urgencias"
            >
              Urgencias
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-bar" onClick={() => setIsOpen(!isOpen)}>
        <i class="fa-solid fa-bars" id="menu-bar"></i>
      </div>
    </header>
  );
};

export default Navbar;
