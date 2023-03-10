import React, { Fragment } from "react";
import "../styles/slider.css";
import PortadaInicial from "../img/slider-nosotros-1.png";
import PortadaUno from "../img/slider-nosotros-2.png";
import PortadaDos from "../img/slider-nosotros-3.png";
import PortadaTres from "../img/slider-nosotros-4.png";
import PortadaCuatro from "../img/slider-nosotros-5.png";
import PortadaCinco from "../img/slider-nosotros-6.png";
import PortadaSeis from "../img/slider-nosotros-7.png";

export const Card = () => {
  const images = [
    PortadaInicial,
    PortadaUno,
    PortadaDos,
    PortadaTres,
    PortadaCuatro,
    PortadaCinco,
    PortadaSeis,
  ];
  const [imagenActual, setImagenActual] = React.useState(0);

  const cantidad = images?.length;

  if (!Array.isArray(images) || cantidad === 0) {
    return;
  }

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
  };

  return (
    <>
      <div className="container_hero">
        <div className="container_slider">
          <button onClick={anteriorImagen} className="left_button">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          {images.map((image, index) => {
            return (
              <div>
                {imagenActual === index && (
                  <img
                    key={index}
                    src={image}
                    alt="imagen"
                    className="img_slider"
                  />
                )}
              </div>
            );
          })}

          <button onClick={siguienteImagen} className="right_button">
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
