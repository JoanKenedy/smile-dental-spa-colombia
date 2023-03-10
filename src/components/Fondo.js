import React from "react";
import "../styles/fondo.css";

const Fondo = () => {
  return (
    <div className="fondo">
      <div className="fondo-text">
        <h2>Nuestros Servicios</h2>
        <span>La mejor experiencia dental</span>
        <p>
          Deseamos que tengas la mejor experiencia dental,para nosotros es
          importante generar un ambiente cálido y profesional, con instalaciones
          cómodas y seguras, cuidandosiempre la privacidad de cada paciente con
          atención personalizada en consultorio individual.
        </p>
        <div className="btn-contacto">
          <a
            href="https://api.whatsapp.com/send?phone=573114878409"
            target="_blank"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Fondo;
