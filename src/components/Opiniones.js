import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Opinion1 from "../img/opinion-1.png";
import Opinion2 from "../img/opinion-2.png";
import Opinion6 from "../img/opinion-6.png";
import Opinion4 from "../img/opinion-4.png";

import "../styles/opiniones.css";

const Opiniones = () => {
  return (
    <div className="opiniones">
      <h2>Opiniones</h2>
      <div className="container pb-3 px-4 justify-content-center ">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
          navigation
          pagination={{ clickable: true }}
          autoplay={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <div className="card">
              <img src={Opinion1} alt="" />
              <h6>Juan Mendez</h6>
              <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
              <p>
                Excelente laboratorio dental, lo bueno le hacen todo el trabajo
                q necesita en un mismo lugar ...los profesionales son muy
                experimentados...
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={Opinion2} alt="" />
              <h6>Matias Abril</h6>
              <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
              <p>
                Excelentes profesionales y calidad humana. Me encanto su trato ,
                estan 100% recomendados.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={Opinion6} alt="" />
              <h6>Luisa Garcia Herrera</h6>
              <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
              <p>
                El servicio es excelente. Estoy muy satisfecho y agradecido con
                el trabajo que me están haciendo. La limpieza es primordial para
                mi, y su consultorio es muy limpio a comparación de muchos a los
                que he ido aquí en Colombia. Son súper atentos muy amables y
                siempre están disponibles. Recomiendo ampliamente.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <img src={Opinion4} alt="" />
              <h6>Paula Zapata Reyes</h6>
              <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </span>
              <p>
                El servicio que ofrecen es excelente, tienen todas las
                especialidades que uno necesita en el mismo lugar, la clínica es
                muy bonita y cumplen con todas las medidas sanitarias contra el
                covid. La calidez humana que tienen los doctores y su equipo de
                trabajo es magnífica! Me encantó!! Súper recomendado!!!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Opiniones;
