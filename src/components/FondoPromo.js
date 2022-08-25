import React from "react";
import Image from "../img/portada-promociones.jpg";
import "../styles/fondopromo.css";

const FondoPromo = () => {
  return (
    <div className="container-img">
      <img src={Image} alt="" />
    </div>
  );
};

export default FondoPromo;
