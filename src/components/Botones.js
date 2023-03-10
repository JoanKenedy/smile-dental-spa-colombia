import React from "react";

import "../styles/botones.css";
import Whatsapp from "../img/whats.png";
import Telefono from "../img/phone.png";

const Botones = () => {
  return (
    <div className="container-flotantes">
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=573114878409"
          target="_blank"
        >
          <img src={Whatsapp} alt="" />
        </a>
      </div>
      <div>
        <a href="tel:3114878409" target="_blank">
          <img src={Telefono} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Botones;
