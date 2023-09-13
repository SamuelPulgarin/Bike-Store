import React, { useState, useEffect } from "react";
import "../../assets/css/CartaProducto.css";
import Example from "../../../uploads/1694393355971-BicicletaGiantPropelAdvancedPro0AXS23.jpg";
import { useDispatch, useSelector } from "react-redux";
import { ProductNotFoundInCart } from "./ProductNotFoundInCart";
import { ButtomContinueBuy } from "./ButtomContinueBuy";
import { removeItemFromCart, clearCart, updateStock } from "../../redux/carritoSlice";

const CartaProducto = () => {

  const [quantityArticle, setQuantityArticle] = useState(1);

  const cartItems = useSelector((state) => state.carrito.items);
  const dispatch = useDispatch();
  //console.log(cartItems);

  const deleteProduct = (id) => {

    console.log(id);

    const numericId = parseInt(id, 10);
    dispatch(removeItemFromCart(numericId));
  }

  const handleStockChange = (id, newCantidad) => {

    console.log("ID:", id); // Verifica que id sea el ID correcto
    console.log("Nuevo Stock:", newCantidad); // Verifica que stock sea el valor correcto
    dispatch(updateStock({ id, cantidad: newCantidad }));

  };

  if (!cartItems || cartItems.length === 0) {

    return (
      <>
        <ProductNotFoundInCart />
        <ButtomContinueBuy />
      </>
    );
  }

  console.log(cartItems)


  return (
    <>
      {cartItems.map((item) => {

        

        return (
          <>

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
                      onClick={() => handleStockChange(item.data.id, Math.max(1, parseInt(item.data.cantidad) - 1))}
                    >
                      <b>-</b>
                    </button>
                    <input type="text" value={item.data.cantidad} readOnly />
                    <button
                      id="button-accountant-right"
                      onClick={() => handleStockChange(item.data.id, Math.min(item.data.stock, parseInt(item.data.cantidad) + 1))}
                    >
                      <b>+</b>
                    </button>
                  </div>
                </div>
              </div>

              <button id="button-cart-delete" onClick={() => deleteProduct(parseInt(item.data.id, 10))}>Eliminar</button>
            </div>

          </>
        )
      })}

      <ButtomContinueBuy />
    </>
  );
};

export default CartaProducto;
