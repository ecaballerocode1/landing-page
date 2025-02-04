import React from "react";
import Header from "./Header";
import brain from "../assets/brain.png";
import { motion } from "motion/react";
import { Link } from "react-scroll";

//Componente que renderiza la seccion Hero de la landing page

function Hero() {
  return (
    <div className="bg-azul h-screen pb-14 lg:pb-0">
      <Header />
      <div className="flex lg:px-10 mt-10 lg:mt-0 lg:px-3 lg:flex-row flex-col items-center justify-between font-text">
        <div className="lg:w-2/6 w-2/3 lg:ml-12">
          <motion.h1
            initial={{ transform: "translateY(200px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 0.5 }}
            className="lg:text-4xl text-2xl font-black font-stretch-condensed"
          >
            Transformamos datos en <br />
          </motion.h1>
          <motion.h1
            initial={{ transform: "translateY(-200px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 1 }}
            className="lg:text-4xl text-2xl font-black text-amarillo1"
          >
            Decisiones
          </motion.h1>
          <motion.p
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={{
              duration: 1.3,
              ease: "linear",
              delay: 1.5,
            }}
            className="lg:mt-4 lg:text-lg text-justify lg:font-medium"
          >
            En NeuralEdge AI desarrollamos soluciónes de inteligencia artificial
            que impulsan la innovación en tu empresa. <br />
            Desde modelos predictivos hasta automatización avanzada, te ayudamos
            a tomar decisiones más rápidas y precisas
          </motion.p>
          <motion.div
            initial={{ transform: "translateY(-200px)", opacity: 0 }}
            animate={{ transform: "translateY(0px)", opacity: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 2.9 }}
            className="mt-4 flex justify-center"
          >
            <Link
              to="contacto"
              smooth={true}
              duration={500}
              className="mx-2 lg:text-lg text-center text-md bg-amarillo1 text-azul px-2 py-1 lg:w-1/3 w-2/3 rounded-xl"
            >
              <motion.button
                whileHover={{ backgroundColor: "#3F5259" }}
                whileTap={{ backgroundColor: "#3F5259", scale: 1.1 }}
              >
                Cotizar
              </motion.button>
            </Link>
            <Link
              to="caracteristicas"
              smooth={true}
              duration={500}
              className="mx-2 lg:text-lg text-center text-md bg-black text-azul px-2 py-1 lg:w-1/3 w-2/3 rounded-xl"
            >
              <motion.button
                whileHover={{ backgroundColor: "#3F5259" }}
                whileTap={{ backgroundColor: "#3F5259", scale: 1.1 }}
              >
                Saber más
              </motion.button>
            </Link>
          </motion.div>
        </div>
        <div className="lg:w-1/2 w-1/3 w-2/3">
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src={brain}
            alt="Imagen que representa a una intligencia artificial"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
