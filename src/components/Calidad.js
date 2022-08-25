import React from "react";
import Tecnology from "../img/tecnology.png";
import Calid from "../img/best-seller.png";
import Oferta from "../img/oferta.png";
import Seguro from "../img/money.png";
import "../styles/calidad.css";

function Calidad() {
  return (
    <div className="container-calidad">
      <div className="item-calidad">
        <img src={Tecnology} alt="" />
        <h3>Tecnología</h3>
        <p>
          Contamos con innovadora tecnología en odontología para el diagnóstico
          y tratamiento dental, con la finalidad de ofrecerte un diagnóstico
          acertado .
        </p>
      </div>
      <div className="item-calidad">
        <img src={Calid} alt="" />
        <h3>Contamos con la mejor atención</h3>
        <p>
          Realizamos distintos tratamientos de disciplinas dentales de acuerdo a
          tu diagnóstico.
        </p>
      </div>
      <div className="item-calidad">
        <img src={Oferta} alt="" />
        <h3>Las mejores ofertas</h3>
        <p>
          Siempre contamos con promociones que no podrás desaprovechar. ¡ No te
          las pierdas !
        </p>
      </div>
      <div className="item-calidad">
        <img src={Seguro} alt="" />
        <h3>Pagos seguros</h3>
        <p>
          No te preocupes por tu pagos, siéntete tranquilo, están seguros con
          nosotros.
        </p>
      </div>
    </div>
  );
}

export default Calidad;
