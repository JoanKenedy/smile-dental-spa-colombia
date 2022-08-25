import React from "react";
import Nosotros from "../img/nosotros.jpg";
import "../styles/acerca.css";

const Acerca = () => {
  return (
    <>
      <div className="container_dentric">
        <div className="container_nosotros">
          <div className="item_nosotros">
            <img src={Nosotros} alt="" />
          </div>
          <div className="item_nosotros">
            <h2>Bienvenidos a Armonisa</h2>
            <p>
              Somos un grupo de especialistas odontológicos, que tenemos como
              objetivo mantener la salud buco-dental de nuestros pacientes,
              devolviendo la función y estética mediante la armonía de los
              componentes dentales y faciales. Brindamos una atención
              especializada, integral y personalizada, ofreciendo una
              experiencia confortable al paciente, utilizando herramientas y
              equipos de alta tecnología
            </p>
            <a href="nosotros">+ Conocer más</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acerca;
