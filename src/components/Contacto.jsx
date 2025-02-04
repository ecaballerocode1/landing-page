import React from "react";
import { CiMail, CiPhone } from "react-icons/ci";
import { FaRegBuilding, FaRegClock } from "react-icons/fa";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import Swal from "sweetalert2";
import { Element } from "react-scroll";

function Contacto() {
  //Estado que almacena los datos del formulario de contacto
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  //Funcion que cambia los valores del estado por los valores en los inputs del formulario
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //Funcion que envia a firrstore los datos de la persona que se pone en contacto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), formData);
      console.log("Document written with ID: ", docRef.id);
      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
      });
      Swal.fire({
        title: "Mensaje enviado!",
        text: "Tus datos han sido enviados, pronto nos pondremos en contacto contigo!",
        icon: "success",
      });
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  };

  return (
    <Element name="contacto">
      <div className="lg:h-screen font-text lg:pl-32 lg:pb-0 flex flex-col lg:flex-row justify-between items-center relative">
        <div className="bg-amarillo1 lg:w-10 h-20 absolute left-0"></div>
        <div className="bg-amarillo1 lg:w-1/5 w-1/9 h-full absolute right-0 z-10"></div>
        <div className="w-2/3 h-3/5 z-20 lg:pr-10">
          <h1 className="font-text mt-5 lg:mt-0 text-marino w-1/2 lg:text-4xl text-2xl font-black">
            Contáctanos
          </h1>
          <p className="text-marino text-justify">
            Siéntete con la libertad de enviarnos un mensaje en cualquier
            momento. Nos pondremos en contacto contigo lo mas pronto posible
          </p>
          <form onSubmit={handleSubmit} className="lg:h-full">
            <div className="flex flex-col lg:pr-12 pt-7">
              <label htmlFor="nombre" className="text-marino">
                Nombre
              </label>
              <input
                onChange={handleChange}
                value={formData.nombre}
                required
                id="nombre"
                name="nombre"
                type="text"
                className="border-b-2 border-marino focus:outline-none text-marino"
              />
            </div>
            <div className="flex flex-col lg:pr-12 pt-7">
              <label htmlFor="email" className="text-marino">
                E-mail
              </label>
              <input
                onChange={handleChange}
                value={formData.email}
                required
                id="email"
                name="email"
                type="email"
                className="border-b-2 border-marino focus:outline-none text-marino"
              />
            </div>
            <div className="flex flex-col lg:pr-12 pt-7">
              <label htmlFor="nombre" className="text-marino">
                Mensaje
              </label>
              <input
                onChange={handleChange}
                value={formData.mensaje}
                required
                id="mensaje"
                name="mensaje"
                type="text"
                className="border-b-2 border-marino focus:outline-none text-marino"
              />
            </div>
            <div className="mt-7 flex justify-center lg:pr-12">
              <button
                type="submit"
                className="bg-marino font-bold text-azul w-2/3 h-10"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="lg:h-3/5 bg-marino text-xs lg:text-sm lg:w-1/2 w-full mt-5 lg:mt-0 text-azul lg:py-7 lg:pl-14 pl-10 z-20 relative flex flex-col justify-around">
          <div className="bg-amarillo1 h-8 w-8 absolute -top-3 -left-3"></div>
          <h1 className="font-bold lg:text-lg">Info</h1>
          <div className="flex flex-row">
            <div className="lg:text-2xl mr-3">
              <CiMail />
            </div>
            <p>info@neuraledge.com</p>
          </div>
          <div className="flex flex-row">
            <div className="lg:text-2xl mr-3">
              <CiPhone />
            </div>
            <p>+52 56 74 29 37 13</p>
          </div>
          <div className="flex flex-row">
            <div className="lg:text-2xl mr-3">
              <FaRegBuilding />
            </div>
            <p>25 Lomas de los Volcanes, CDMX </p>
          </div>
          <div className="flex flex-row">
            <div className="lg:text-2xl mr-3">
              <FaRegClock />
            </div>
            <p>9:00 - 18:00</p>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default Contacto;
