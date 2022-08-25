import React from "react";
import PromoUno from "../img/promo_uno.jpg";
import PromoDos from "../img/promo_dos.jpg";
import PromoTres from "../img/promo_tres.jpg";
import PromoCuatro from "../img/invisaling.jpg";
import "../styles/promociones.css";
const Promociones = () => {
  return (
    <div className="promociones">
      <h2>Ultimas Promociones</h2>
      <div className="container_promociones">
        <div className="item_promos">
          <img src={PromoUno} alt="" />
          <button>
            <a
              href="https://api.whatsapp.com/send?phone=528135698372"
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
              href="https://api.whatsapp.com/send?phone=528135698372"
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
              href="https://api.whatsapp.com/send?phone=528135698372"
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
              href="https://api.whatsapp.com/send?phone=528135698372"
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
