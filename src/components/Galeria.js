import React from "react";
import FotoUno from "../img/10.jpg";
import FotoDos from "../img/9.jpg";
import FotoTres from "../img/2.jpg";
import FotoCuatro from "../img/3.jpg";
import FotoCinco from "../img/4.jpg";
import FotoSeis from "../img/5.jpg";
import FotoSiete from "../img/6.jpg";
import FotoOcho from "../img/7.jpg";
import FotoNueve from "../img/8.jpg";
import "../styles/galeria.css";

const Galeria = () => {
  return (
    <div className="galery">
      <h2>Conoce nuestros casos</h2>
      <div className="container-galery">
        <div className="item-galery">
          <img src={FotoUno} alt="" />
          <p>Implante Dental</p>
        </div>
        <div className="item-galery">
          <img src={FotoDos} alt="" />
          <p>Expertos en Invisaling</p>
        </div>
        <div className="item-galery">
          <img src={FotoTres} alt="" />
          <p>Cirugía de Muelas del juicio</p>
        </div>
        <div className="item-galery">
          <img src={FotoCuatro} alt="" />
          <p>Limpieza Profilactica</p>
        </div>
        <div className="item-galery">
          <img src={FotoCinco} alt="" />
          <p>Cirugía Maxilofacial</p>
        </div>
        <div className="item-galery">
          <img src={FotoSeis} alt="" />
          <p>Valoración Dental Completa</p>
        </div>
        <div className="item-galery">
          <img src={FotoSiete} alt="" />
          <p>La mejor Tecnología Dental</p>
        </div>
        <div className="item-galery">
          <img src={FotoOcho} alt="" />
          <p>Bichectomía</p>
        </div>
        <div className="item-galery">
          <img src={FotoNueve} alt="" />
          <p>Lipopapada</p>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
