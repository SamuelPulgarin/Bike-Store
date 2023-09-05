import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';
import "../assets/css/ShoppingCart.css";
import ListProducts from '../components/Shopping_Cart/ListProducts';
import AmountPrice from '../components/Shopping_Cart/AmountPrice';

/*ja */
const Carrito = () => {

    return (
        <>
            <Navbar />
            <ListProducts></ListProducts>
            <AmountPrice></AmountPrice>

            

        </>
    )
}

export default Carrito
