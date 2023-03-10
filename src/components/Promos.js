import React from "react";
import PromoOne from "../img/promocion_cuatro.png";
import PromoTwo from "../img/promocion_dos.png";
import PromoThree from "../img/promocion_tres.png";
import PromoFour from "../img/promocion_uno.png";

const Promos = () => {
  return (
    <div className="promociones promo-dos">
      <h2>Ultimas Promociones</h2>
      <div className="container_promociones">
        <div className="item_promos">
          <img src={PromoOne} alt="" />
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
          <img src={PromoTwo} alt="" />
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
          <img src={PromoThree} alt="" />
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
          <img src={PromoFour} alt="" />
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

export default Promos;
