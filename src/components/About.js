import React from "react";
import Nosotros from "../img/nosotros.jpg";
import "../styles/about.css";

const About = () => {
  return (
    <div className="container-about">
      <div className="container-item">
        <div className="item-about">
          <img src={Nosotros} alt="" />
        </div>
        <div className="item-about">
          <h2>Bienvenidos a Armonisa</h2>
          <p>
            Somos un grupo de especialistas odontológicos, que tenemos como
            objetivo mantener la salud buco-dental de nuestros pacientes,
            devolviendo la función y estética mediante la armonía de los
            componentes dentales y faciales. Brindamos una atención
            especializada, integral y personalizada, ofreciendo una experiencia
            confortable al paciente, utilizando herramientas y equipos de alta
            tecnología
          </p>
          <a href="#">+ Conocer más</a>
        </div>
      </div>
    </div>
  );
};

export default About;
