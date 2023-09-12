import React from 'react';
import Warning from "../../assets/img/Warning Shopping Cart.png";
import "../../assets/css/ProductNotFoundInCart.css";


export const ProductNotFoundInCart = () => {

  return (

    <>
        <div className="alert-cart-container">
            <img src={Warning} alt="Warnning" />
            <h2 id='text-warning'>¡Aun no tienes productos agregados en tu carrito!</h2>
        </div>
    </>
  )
}
