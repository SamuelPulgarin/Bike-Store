import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import PaginaProducto from '../components/PaginaProducto/PaginaProducto';
import Carta from '../components/PaginaProducto/Carta';
import { Loader } from '../components/Loader/Loader';

const Productos = () => {

    return (

        <>
            <Navbar />
            <PaginaProducto />
            <Carta></Carta>
        </>

    )
}

export default Productos
