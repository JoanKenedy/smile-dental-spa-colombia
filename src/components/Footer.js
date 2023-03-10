import React from "react";
import "../styles/footer.css";
import logoFooter from "../img/logo_logo.png";

import phone from "../img/telephone.png";
import whats from "../img/whatsapp.png";
import mail from "../img/email.png";
import insta from "../img/instagram.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="ubicaciones">
          <h2>Cra. 18 #80 32 Consultorio 207, Bogotá, Colombia</h2>
          <iframe
            width="1043"
            height="500"
            id="gmap_canvas"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.5856882508956!2d-74.0583115!3d4.6677146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f854b32937a39%3A0x1c3e402525ec5fe7!2sSmile%20Dental%20Spa!5e0!3m2!1ses-419!2smx!4v1671741913809!5m2!1ses-419!2smx"
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
              © Smile Dental SPA 2022. Todos los derechos reservados. <br />{" "}
              <br />
              Desing By Agencia de Marketing Digital Dentarios
            </p>
          </div>
          <div className="item_footer">
            <img src={logoFooter} alt="" className="logo-footer" />
          </div>
          <div className="item_footer">
            <a href="tel:3114878409" target="_blank">
              <img src={phone} alt="" className="facebook" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=573114878409"
              target="_blank"
            >
              <img src={whats} alt="" className="facebook" />
            </a>

            <a
              href="https://www.instagram.com/smile.dentalspa/?igshid=Yzg5MTU1MDY="
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
