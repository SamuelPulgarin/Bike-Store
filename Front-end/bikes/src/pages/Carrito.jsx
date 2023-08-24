import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Loader } from '../components/Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

const Carrito = () => {
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
                    <h1>Hola solo soy un humilde carrito que no tiene ni un pinche producto para ser agregado :C</h1>
                </>
            )}
        </>
    )
}

export default Carrito
