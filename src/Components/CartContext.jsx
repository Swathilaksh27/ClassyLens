// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const addToOrderHistory = () => {
    setOrderHistory((prevHistory) => [...prevHistory, { items: cartItems, date: new Date() }]);
    clearCart();
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, setCartItems, orderHistory, addToOrderHistory }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
