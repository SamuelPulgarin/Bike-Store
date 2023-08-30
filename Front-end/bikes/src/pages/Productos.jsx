import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer"
import PaginaProducto from "../components/PaginaProducto/PaginaProducto";
import Carta from "../components/PaginaProducto/Carta";
import { Loader } from "../components/Loader/Loader";
import "../assets/css/Productos.css";
/*ja */
const Productos = () => {
  return (
    <>

      <Navbar />
      <div className="contenedor-filtros-productos">
        <PaginaProducto />
        <Carta />
      </div>
      <Footer/>
    </>
  );
};

export default Productos;
