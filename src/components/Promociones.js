import React from "react";
import PromoUno from "../img/promo_cuatro.jpg";
import PromoDos from "../img/promo_uno.jpg";
import PromoTres from "../img/promo_tres.jpg";
import PromoCuatro from "../img/promo_dos.jpg";
import "../styles/promociones.css";
const Promociones = () => {
  return (
    <div className="promociones" id="promotions">
      <h2>Ultimas Novedades</h2>
      <div className="container_promociones">
        <div className="item_promos">
          <img src={PromoUno} alt="" />
          <button>
            <a
              href="https://api.whatsapp.com/send?phone=573114878409"
              target="_blank"
            >
              Contacto
            </a>
          </button>
        </div>
        <div className="item_promos">
          <img src={PromoDos} alt="" />
          <button>
            <a
              href="https://api.whatsapp.com/send?phone=573114878409"
              target="_blank"
            >
              Contacto
            </a>
          </button>
        </div>
        <div className="item_promos">
          <img src={PromoTres} alt="" />
          <button>
            <a
              href="https://api.whatsapp.com/send?phone=573114878409"
              target="_blank"
            >
              Contacto
            </a>
          </button>
        </div>
        <div className="item_promos">
          <img src={PromoCuatro} alt="" />
          <button>
            <a
              href="https://api.whatsapp.com/send?phone=573114878409"
              target="_blank"
            >
              Contacto
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Promociones;
