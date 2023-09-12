import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer/Footer';
import "../assets/css/ShoppingCart.css";
import ListProducts from '../components/Shopping_Cart/ListProducts';
import AmountPrice from '../components/Shopping_Cart/AmountPrice';
import CartaProducto from '../components/Shopping_Cart/CartaProducto';

/*ja */
const Carrito = () => {

    return (
        <>
            <Navbar />
            <ListProducts></ListProducts>
            <div className="shopping-card-container">
                <div className="shopping-carts-container"> 
                    <CartaProducto></CartaProducto>
                </div>
                <AmountPrice></AmountPrice>
            </div>


            

        </>
    )
}

export default Carrito
