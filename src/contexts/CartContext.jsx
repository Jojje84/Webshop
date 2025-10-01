/*
 * Webshop - Advanced React E-commerce Application
 * Copyright (c) 2025 Jorge Avila
 * Author: Jorge Avila (jorgeavilas@icloud.com)
 * Repository: https://github.com/Jojje84/Webshop
 * License: MIT License - see LICENSE file for details
 * 
 * React-based e-commerce platform with shopping cart and product management.
 * Original code by Jorge Avila - please maintain attribution.
 */

import React, { createContext, useContext, useState } from 'react';
import { useStock } from './StockContext';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { stock, updateStock } = useStock();

  const addToCart = (product, quantityToAdd) => {
    console.log(`addToCart called for product ${product.id} with quantity ${quantityToAdd}`);
    const currentStock = stock.find((item) => item.id === product.id)?.stock || 0;

    if (quantityToAdd > currentStock) {
      alert(`Endast ${currentStock} produkter finns i lager!`);
      return;
    }

    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item,
        ),
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: quantityToAdd }]);
    }

    updateStock(product.id, -quantityToAdd);
  };

  const removeFromCart = (productId) => {
    const productToRemove = cart.find((product) => product.id === productId);

    if (productToRemove) {
      updateStock(productId, productToRemove.quantity);

      setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    }
  };

  const clearCart = () => {
    cart.forEach((product) => {
      updateStock(product.id, product.quantity);
    });

    setCart([]);
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0),
    );
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
        decreaseQuantity,
        increaseQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};
