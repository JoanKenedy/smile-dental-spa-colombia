import React from "react";
import FotoUno from "../img/galery-uno.jpg";
import FotoDos from "../img/galery-tres.jpg";
import FotoTres from "../img/galery-cuatro.jpg";
import FotoCuatro from "../img/galery-cinco.png";
import FotoCinco from "../img/galery-seis.jpg";
import "../styles/galeria.css";

const Galeria = () => {
  return (
    <div className="galery">
      <h2>Conoce nuestros casos</h2>
      <div className="container-galery">
        <div className="item-galery">
          <img src={FotoCuatro} alt="" />
        </div>
        <div className="item-galery">
          <img src={FotoUno} alt="" />
        </div>
        <div className="item-galery">
          <img src={FotoDos} alt="" />
        </div>
        <div className="item-galery">
          <img src={FotoTres} alt="" />
        </div>
        <div className="item-galery">
          <img src={FotoCuatro} alt="" />
        </div>
        <div className="item-galery">
          <img src={FotoCinco} alt="" />
        </div>
        <div className="item-galery">
          <img src={FotoUno} alt="" />
        </div>
        <div className="item-galery">
          <img src={FotoDos} alt="" />
        </div>
        <div className="item-galery">
          <img src={FotoCinco} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Galeria;
