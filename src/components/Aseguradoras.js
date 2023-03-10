import React from "react";
import Seguro1 from "../img/seguro-1.png";
import Seguro2 from "../img/seguro-2.png";
import Seguro3 from "../img/seguro-3.png";
import Seguro4 from "../img/seguro-4.png";
import Seguro5 from "../img/seguro-5.png";
import Seguro7 from "../img/seguro-7.png";
import Seguro8 from "../img/seguro-8.png";
import Seguro9 from "../img/seguro-9.png";
import "../styles/aseguradora.css";

const Aseguradoras = () => {
  return (
    <div className="aseguradoras">
      <h2>Las mejores aseguradoras estan con nosotros</h2>

      <div className="container-aseguradoras">
        <div className="seguros">
          <div className="item-seguros">
            <img src={Seguro1} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro2} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro3} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro4} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro5} alt="" />
          </div>

          <div className="item-seguros">
            <img src={Seguro7} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro8} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro9} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro1} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro2} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro3} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro4} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro5} alt="" />
          </div>

          <div className="item-seguros">
            <img src={Seguro7} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro8} alt="" />
          </div>
          <div className="item-seguros">
            <img src={Seguro9} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aseguradoras;
