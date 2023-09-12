import React, { useState } from "react";
import "../../assets/css/CartaProducto.css";
import Example from "../../../uploads/1694211030597-BicicletaGiantPropelAdvancedPro0AXS23.jpg";
import { useDispatch, useSelector } from "react-redux";
import { ProductNotFoundInCart } from "./ProductNotFoundInCart";
import { ButtomContinueBuy } from "./ButtomContinueBuy";
import { removeItemFromCart, clearCart } from "../../redux/carritoSlice";

const CartaProducto = () => {
  const [cantidad, setCantidad] = useState(1);

  const cartItems = useSelector((state) => state.carrito.items);
  const dispatch = useDispatch();
  //console.log(cartItems);

  const deleteProduct = (id)=>{

    console.log(id);

    const numericId = parseInt(id, 10);
    dispatch(removeItemFromCart(numericId));
  }

  if(!cartItems || cartItems.length === 0){

    return(
      <>
        <ProductNotFoundInCart/>
        <ButtomContinueBuy/>
      </>
    );
  }


  return (
    <>
      {cartItems.map((item) => (

        <div className="product-cart-container" key={item.data.id}>
          <div className="image-product-cart-container">
            <img src={Example} alt="Imagen de una biclicleta" />
          </div>
          <div className="details-product-cart-container">
            <h3>{item.data.nombre}</h3>
            <p>Precio: {item.data.precio}</p>
            <div className="quantity-product-cart-container">
              <p>Cantidad:</p>
              <div className="accountant-product-cart-container">
                <button
                  id="button-accountant-left"
                  onClick={() => setCantidad(cantidad - 1)}
                >
                  <b>-</b>
                </button>
                <input type="text" value={cantidad} />
                <button
                  id="button-accountant-right"
                  onClick={() => setCantidad(cantidad + 1)}
                >
                  <b>+</b>
                </button>
              </div>
            </div>
          </div>

          <button id="button-cart-delete" onClick={() => deleteProduct(parseInt(item.data.id, 10))}>Eliminar</button>
          {console.log(item.data.id)}
        </div>
      ))}

    <ButtomContinueBuy/>
    </>
  );
};

export default CartaProducto;
