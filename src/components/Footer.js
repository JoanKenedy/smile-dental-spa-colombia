import React from "react";
import "../styles/footer.css";
import logoFooter from "../img/logo_footer.png";
import face from "../img/facebook.png";
import phone from "../img/telephone.png";
import whats from "../img/whatsapp.png";
import mail from "../img/email.png";
import insta from "../img/instagram.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="ubicaciones">
          <h2>
            Dirección: Profesor Joel Rocha 305, Chepevera, Monterrey, N.L.
          </h2>
          <iframe
            width="1043"
            height="500"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Joel%20Rocha%20305%20Colonia%20Chepevera.%20Monterrey%20N.L.&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
          ></iframe>
        </div>

        <h2>Contáctanos</h2>
        <h3>Para una mejor atención contacta a un especialista</h3>
        <div className="container_footer">
          <div className="item_footer">
            <p>
              © Armonisa 2022. Todos los derechos reservados. <br /> <br />
              Desing By Agencia de Marketing Digital Dentarios
            </p>
          </div>
          <div className="item_footer">
            <img src={logoFooter} alt="" className="logo-footer" />
          </div>
          <div className="item_footer">
            <a href="https://www.facebook.com/armonisamx" target="_blank">
              <img src={face} alt="" className="facebook" />
            </a>
            <a href="tel:8134239974" target="_blank">
              <img src={phone} alt="" className="facebook" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=528135698372"
              target="_blank"
            >
              <img src={whats} alt="" className="facebook" />
            </a>
            <a href="mailto:armonisa@outlook.com" target="_blank">
              <img src={mail} alt="" className="facebook" />
            </a>
            <a
              href="https://instagram.com/armonisamx?igshid=YmMyMTA2M2Y="
              target="_blank"
            >
              <img src={insta} alt="" className="facebook"></img>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
