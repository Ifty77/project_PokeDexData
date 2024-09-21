import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const url = 'https://project-poke-dex-data-frontend.vercel.app/login'; // Replace with your actual API URL

  return (
    <CartContext.Provider value={{ token, setToken, url }}>
      {children}
    </CartContext.Provider>
  );
};