import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar/Navbar';
import PaginaProducto from '../components/PaginaProducto/PaginaProducto';
import Carta from '../components/PaginaProducto/Carta';
import { Loader } from '../components/Loader/Loader';

const Productos = () => {

    const [isLoader, setIsLoader] = useState(true);
    useEffect(() => {

        setTimeout(() => {
            setIsLoader(false);
        }, 1000);

    }, []);


    return (

        <>
            {isLoader ? <Loader /> : (
                <>
                    <Navbar />
                    <PaginaProducto />
                    <Carta />
                </>
            )}
        </>

    )
}

export default Productos
