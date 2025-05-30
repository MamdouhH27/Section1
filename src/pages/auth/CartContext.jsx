import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'RAYAM BEIGE FUR CLOGS', color: 'Beige', size: '38', price: 705, quantity: 1, src: '/assets/Rectangle (1).png', alt: 'pic1' },
    { id: 2, name: 'AELIN AMBER DRESS', color: 'Red', size: 'M', price: 1600, quantity: 1, src: '/assets/Rectangle (5).png', alt: 'pic5' },
  ]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + item.quantity } : cartItem
        );
      }
      return [...prevItems, item];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};