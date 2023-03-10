import React, { useState } from "react";

// Assuming logo.png is in the same folder as JS file
import logo from "../img/logo_logo.png";
import menu from "../img/menu.png";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="header-tel">
        <p>
          <a href="tel:3114878409">Tel: 3114878409</a>
        </p>
        <p>
          <a href="https://instagram.com/smile.dentalspa?igshid=Yzg5MTU1MDY=">
            <i class="fa-brands fa-square-instagram"></i>
          </a>
        </p>
      </div>
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
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="promotions" onClick={handleIsOpen}>
              Promociones
            </Link>
          </li>

          <li>
            <a
              href="https://api.whatsapp.com/send?phone=573114878409"
              target="_blank"
              className="btn_urgencias"
            >
              Urgencias
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-bar" onClick={() => setIsOpen(!isOpen)}>
        <img src={menu} alt="" id="menu-bar" />
      </div>
    </header>
  );
};

export default Navbar;
