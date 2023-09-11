import React, { useState, useEffect } from 'react';
import "../../assets/css/ListProducts.css";
import { useSelector } from 'react-redux';

const ListProducts = () => {
  const [cantidad, setCantidad] = useState(0);

  //redux
  const cartItems = useSelector((state) => state.carrito.items);
  console.log(cartItems);

  useEffect(() => {
    setCantidad(cartItems.length);
  }, [cartItems]);


  return (
    <>
        <div className="quantity-container">
            <h1>Carrito de Compras</h1>
            <h3>Productos en el carrito ({cantidad})</h3>

        </div>

    </>
  )
}

export default ListProducts
