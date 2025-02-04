import React from "react";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="flex justify-between py-3 lg:px-10 px-3 bg-azul font-text font-medium">
      <div>
        <p className="font-bold lg:text-2xl text-md lg:text-md">
          NeuralEdge AI
        </p>
      </div>
      <div className="flex text-xs lg:text-lg mt-1 lg:mt-0">
        <Link to="caracteristicas" smooth={true} duration={500}>
          <p className="lg:mx-2 mx-1">Caracteristicas</p>
        </Link>
        <Link to="contacto" smooth={true} duration={500}>
          <p className="lg:mx-2 mx-1">Contacto</p>
        </Link>
        <Link to="testimonios" smooth={true} duration={500}>
          <p className="lg:mx-2 mx-1">Testimonio</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
