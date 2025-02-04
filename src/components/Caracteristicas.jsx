import React from "react";
import server from "../assets/server.svg";
import analisis from "../assets/analisis.svg";
import working from "../assets/working.svg";
import { motion } from "motion/react";
import { Element } from "react-scroll";

function Caracteristicas() {
  return (
    <Element name="caracteristicas">
      <div className="bg-marino lg:h-screen px-10">
        <h1 className="font-text text-4xl font-black text-azul text-center pt-5">
          Características
        </h1>
        <div id="div-tarjetas" className="grid lg:grid-cols-3 gap-10 mt-10 pb-10 lg:pb-0 lg:mt-36">
          <motion.div
            id="tarjeta1"
            className="font-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            whileHover={{ backgroundColor: "#3F5259", scale: 1.1 }}
            whileTap={{ backgroundColor: "#3F5259", scale: 1.1 }}
          >
            <h1 className="text-xl text-azul font-bold text-center">
              Inteligencia artificial a tu medida
            </h1>
            <div className="flex justify-center">
              <img src={server} alt="imagen de servidores" className="w-1/2" />
            </div>
            <p className="text-justify text-azul">
              Desarrollamos mdelos de IA adaptados a las necesidades de tu
              negocio, optimizando procesos y mejorando la toma de decisiónes
              con datos en tiempo real.
            </p>
          </motion.div>
          <motion.div
            id="tarjeta1"
            className="font-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            whileHover={{ backgroundColor: "#3F5259", scale: 1.1 }}
            whileTap={{ backgroundColor: "#3F5259", scale: 1.1 }}
          >
            <h1 className="text-xl text-azul font-bold text-center">
              Automatización inteligente
            </h1>
            <div className="flex justify-center">
              <img src={working} alt="imagen de servidores" className="w-1/2" />
            </div>
            <p className="text-justify text-azul">
              Reduce el trabajo manual y agiliza tus operaciones con nuestras
              soluciones de automatización basadas en IA, permitiendo que tu
              equipo se enfoque en lo que realmente importa.
            </p>
          </motion.div>
          <motion.div
            id="tarjeta1"
            className="font-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 1 }}
            whileHover={{ backgroundColor: "#3F5259", scale: 1.1 }}
            whileTap={{ backgroundColor: "#3F5259", scale: 1.1 }}
          >
            <h1 className="text-xl text-azul font-bold text-center">
              Análisis predictivo avanzado
            </h1>
            <div className="flex justify-center">
              <img
                src={analisis}
                alt="imagen de servidores"
                className="w-1/2"
              />
            </div>
            <p className="text-justify text-azul">
              Convierte datos en estrategias efectivas con algoritmos que
              identifican patrones y tendencias, ayudandote a anticipar cambios
              y tomar decisiónes informadas.
            </p>
          </motion.div>
        </div>
      </div>
    </Element>
  );
}

export default Caracteristicas;
