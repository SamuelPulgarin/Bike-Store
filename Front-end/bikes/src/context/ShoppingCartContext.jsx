import React, { Children, createContext, useState } from "react";

export const CartContext = createContext(null);

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  return <CartContext.Provider value={[cart, setCart]}>{Children}</CartContext.Provider>;
};
