import React, { createContext, useContext, useState } from "react";

//1. Creamos un contexto
const CartCategoryContext = createContext();

export const useCartCategoryContext = () => useContext(CartCategoryContext);

//2. Crear un proveedor del contexto
export function CartCategoryProvider({ children }) {
  const [message, setMessage] = useState("");

  const sendMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <CartCategoryContext.Provider value={{ message, sendMessage }}>
      {children}
    </CartCategoryContext.Provider>
  );
}
