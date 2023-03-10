import React from "react";
import "../styles/cinta.css";

const Cinta = () => {
  return (
    <div className="cinta">
      <div className="item_cinta">
        <h6>Agenda tu cita rapidamente</h6>
        <p>Llenando un pequeño formulario</p>
      </div>
      <div className="item_cinta">
        <a
          href="https://api.whatsapp.com/send?phone=573114878409"
          target="_blank"
        >
          <i class="fa-solid fa-calendar-check"></i> Agenda Cita
        </a>
      </div>
    </div>
  );
};

export default Cinta;
