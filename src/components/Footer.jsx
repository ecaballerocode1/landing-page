import React from "react";
import { FaInstagram, FaWhatsapp, FaRegBuilding } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { CiMail, CiPhone } from "react-icons/ci";

function Footer() {
  return (
    <div className="bg-amarillo1 pt-10 pb-32 h-40 relative font-text text-marino grid lg:grid-cols-3 grid-cols-2">
      <div id="rrss">
        <h1 className="text-center font-bold lg:text-md text-sm">RRSS</h1>
        <div className="flex justify-center mt-3">
          <div className="text-center lg:text-2xl mx-2">
            <FaInstagram />
          </div>
          <div className="text-center lg:text-2xl mx-2">
            <FaSquareFacebook />
          </div>
          <div className="text-center lg:text-2xl mx-2">
            <FaWhatsapp />
          </div>
        </div>
      </div>
      <h1 className="text-center font-bold lg:text-md text-sm">Términos y condiciones</h1>
      <div id="contacto" className="col-span-2 lg:col-span-1">
        <h1 className="text-center font-bold lg:text-md text-sm">Contácto</h1>
        <div className="flex flex-row justify-center">
          <div className="lg:text-2xl text-xs mr-2 lg:mr-3">
            <FaRegBuilding />
          </div>
          <p className="lg:text-sm text-xs">25 Lomas de los Volcanes, CDMX </p>
        </div>
        <div className="flex flex-row justify-center">
          <div className="lg:text-2xl text-xs mr-2 lg:mr-3">
            <CiMail />
          </div>
          <p className="lg:text-sm text-xs">info@neuraledge.com</p>
        </div>
        <div className="flex flex-row justify-center">
          <div className="lg:text-2xl text-xs mr-2 lg:mr-3">
            <CiPhone />
          </div>
          <p className="lg:text-sm text-xs">+52 56 74 29 37 13</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
