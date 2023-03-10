import React, { Fragment } from "react";
import "../styles/slider.css";
import PortadaInicial from "../img/urgencias.png";
import PortadaUno from "../img/slider-uno.jpg";
import PortadaDos from "../img/slider-dos.jpg";
import PortadaTres from "../img/slider-tres.jpg";

export const Slider = () => {
  const images = [PortadaInicial, PortadaUno, PortadaDos, PortadaTres];
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
        <div className="citas">
          <div className="container_cita">
            <div className="item_cita">
              <h6>Agenda tu cita</h6>
              <p>En solo unos minutos</p>
              <a
                href="https://api.whatsapp.com/send?phone=573114878409&text=Quiero agendar una cita"
                target="_blank"
              >
                <i class="fa-solid fa-calendar-plus"></i> Agendar cita
              </a>
            </div>
            <div className="item_cita">
              <h6>Horario de atención</h6>
              <div className="container_horarios">
                <div className="item_horarios">
                  <p>Lunes a Domingo</p>
                </div>
                <div className="item_horarios">
                  <p>Las 24 horas del día , 7 días a la semana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
