import React, {useState} from 'react';
import Navbar from '../components/navbar/Navbar';
import PaginaProducto from '../components/PaginaProducto/PaginaProducto';
import Carta from '../components/PaginaProducto/Carta';

const Productos = () => {

  return (

    <>
        <Navbar cate1="Ruta" cate2="Montaña" cate3="Hibridas" cate4="BMX" addMensaje={addMensaje}/>
        <PaginaProducto/>
        <Carta/>
    </>

  )
}

export default Productos
