import React, { useState } from 'react';
import "../../assets/css/ListProducts.css";

const ListProducts = () => {

    const [cantidad, setCantidad] = useState(0);
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
