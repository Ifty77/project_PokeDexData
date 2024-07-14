import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const url = 'http://localhost:3000'; // Replace with your actual API URL

  return (
    <CartContext.Provider value={{ token, setToken, url }}>
      {children}
    </CartContext.Provider>
  );
};