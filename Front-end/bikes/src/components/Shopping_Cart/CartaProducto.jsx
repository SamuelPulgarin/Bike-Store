import React, { useState } from 'react';
import "../../assets/css/CartaProducto.css";
// import Example from "../../../uploads/1692994852641-BicicletaMTBSparkRCWorldCup2023.jpg"

const CartaProducto = () => {
  
  const [cantidad, setCantidad] = useState(1);

  return (
    <>
      <div className="product-cart-container">
        <div className="image-product-cart-container">
          <img src={Example} alt="Imagen de una biclicleta" />
        </div>
        <div className="details-product-cart-container">
          <h3>Bicicleta GM Prime Lancer TXT jrheuih eohfoe</h3>
          <p>Precio: $399.000</p>
          <div className="quantity-product-cart-container">
            <p>Cantidad:</p>
            <div className="accountant-product-cart-container">
              <button id='button-accountant-left' onClick={()=> setCantidad(cantidad - 1)}><b>-</b></button>
              <input type="text" value={cantidad} />
              <button id='button-accountant-right' onClick={()=> setCantidad(cantidad + 1)}><b>+</b></button>
            </div>

          </div>
        </div>

        <button id='button-cart-delete'>Eliminar</button>
      </div>

      

    </>
  )
}

export default CartaProducto
