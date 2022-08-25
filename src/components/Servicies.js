import React from "react";
import "../styles/acerca.css";
import Endodoncia from "../img/endodoncia.png";
import Maxilofacial from "../img/maxilofacial.png";
import Cosmetica from "../img/cosmetica.png";
import Ortodoncia from "../img/ortodoncia.png";
import Odontopediatria from "../img/odontopediatria.png";
import Implantologia from "../img/implant.png";

const Servicies = () => {
  return (
    <div>
      <div className="container_servicios">
        <h2>Servicios Especializados</h2>
        <div className="servicios">
          <div className="item_servicios">
            <h2>Endodoncia</h2>
            <img src={Endodoncia} alt="" />
            <p>
              Las endodoncias se realizan en piezas dentales con caries
              profundas, que propician la inflamación o la necrosis (muerte) de
              la pulpa dental.
            </p>
          </div>
          <div className="item_servicios">
            <h2>Odontopediatria</h2>
            <img src={Odontopediatria} alt="" />
            <p>
              La Odontopediatría es una rama de la Odontología que atiende y
              trata las distintas enfermedades bucodentales desde la infancia
              más temprana hasta finalizar el crecimiento.
            </p>
          </div>
          <div className="item_servicios">
            <h2>Ortodoncia</h2>
            <img src={Ortodoncia} alt="" />
            <p>
              La Ortodoncia es la especialidad odontológica encargada de
              corregir los dientes y huesos que se encuentran en posición
              incorrecta.
            </p>
          </div>
          <div className="item_servicios">
            <h2>Cirugia Maxilofacial</h2>
            <img src={Maxilofacial} alt="" />
            <p>
              La cirugía maxilofacial trata todas aquellas enfermedades que
              ocurren en la boca, la mandíbula, la cabeza y el cuello y
              requieren de una intervención quirúrgica. Pueden ser patologías
              adquiridas de origen tumoral, traumático, por degeneración o
              envejecimiento.
            </p>
          </div>
          <div className="item_servicios">
            <h2>Rehabilitación Oral</h2>
            <img src={Cosmetica} alt="" />
            <p>
              La Rehabilitación oral es la especialidad de odontología que busca
              restaurar la función y estética de tus piezas dentales. Es un
              tratamiento completo, que te ayudara a recuperar el aspecto y
              orden de tus dientes
            </p>
          </div>
          <div className="item_servicios">
            <h2>Implantología</h2>
            <img src={Implantologia} alt="" />
            <p>
              La implantología oral es la rama de la odontología que se ocupa de
              reemplazar los dientes perdidos por distintas causas, valiéndose
              de implantes dentales colocados en el hueso maxilar o mandibular.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicies;
