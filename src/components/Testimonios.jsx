import React from "react";
import carlos from "../assets/carlos.jpg";
import ana from "../assets/ana.jpg";
import javier from "../assets/javier.jpg";
import sofia from "../assets/sofia.jpg";
import { Element } from "react-scroll";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";

function Testimonios() {
  //Arreglo con datos de testimonios
  const testimonios = [
    {
      nombre: "Carlos Méndez",
      foto: carlos,
      puesto: "COO",
      empresa: "Logistica futura S.A",
      testimonio:
        "Gracias a NeuralEdge AI, hemos optimizado nuestros procesos logísticos como nunca antes. Sus modelos predictivos nos permiten anticipar demandas y reducir costos operativos en un 20%. ¡Una herramienta indispensable para cualquier empresa que busque innovar!",
    },
    {
      nombre: "Ana López",
      foto: ana,
      puesto: "VP",
      empresa: "Trendy AnaLytics",
      testimonio:
        "NeuralEdge AI ha revolucionado nuestra estrategia de marketing. Con su plataforma de análisis predictivo, ahora podemos personalizar campañas con una precisión increíble. ¡Nuestro ROI ha aumentado un 35% en solo tres meses!",
    },
    {
      nombre: "Javier Ruiz",
      foto: javier,
      puesto: "CEO",
      empresa: "Fintech Innovadora",
      testimonio:
        "La automatización avanzada de NeuralEdge AI ha transformado nuestra empresa. Ahora procesamos transacciones en tiempo récord y con una precisión del 99.9%. ¡Es como tener un equipo de expertos trabajando las 24 horas!",
    },
    {
      nombre: "Sofía García",
      foto: sofia,
      puesto: "CINO",
      empresa: "SaludTech Global",
      testimonio:
        "NeuralEdge AI nos ha ayudado a implementar soluciones de IA que mejoran la atención al paciente. Sus algoritmos predictivos nos permiten anticipar necesidades médicas y optimizar recursos. ¡Un socio estratégico para cualquier empresa en el sector salud!",
    },
  ];

  return (
    <Element name="testimonios">
      <div className="h-auto bg-marino lg:px-10 pb-5">
        <h1 className="font-text text-4xl font-black text-azul text-center pt-5">
          Testimonios
        </h1>
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          slidesPerView={2}
          loop={true}
          freeMode={true}
          centeredSlides={true}
          spaceBetween={50}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
            pauseOnMouseEnter: false,
          }}
          speed={8000}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: false,
          }}
          direction="horizontal"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {testimonios.map((test) => (
            <SwiperSlide
              id="tarjeta-testimonio"
              className="lg:pb-10 pb-2 lg:pt-10 bg-azul text-marino mt-10 font-text lg:px-5 px-2 rounded-xl shadow-lg"
            >
              <div className="flex justify-center">
                <img
                  src={test.foto}
                  alt="foto de la persona que da el testimonio"
                  className="lg:h-32 lg:w-32 h-12 w-12 rounded-full mt-5"
                />
              </div>
              <p className="lg:text-lg font-bold text-center mt-2">
                {test.nombre}
              </p>
              <p className="text-xs text-center opacity-70">
                {test.puesto} de {test.empresa}
              </p>
              <p className="lg:mt-5 mt-1 text-xs lg:text-lg">
                {test.testimonio}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Element>
  );
}

export default Testimonios;
