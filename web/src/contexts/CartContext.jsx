
import React, { createContext, useContext, useState } from 'react';
import { products } from '../data/products'; // Importera produkterna för lagerkontroll

const Container = createContext();

export const useCart = () => {
  return useContext(Container);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantityToAdd) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      if (existingProduct.quantity + quantityToAdd <= product.stock) {
        setCart(prevCart => prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
        ));
      } else {
        alert('Not enough stock available for this product');
      }
    } else {
      if (quantityToAdd <= product.stock) {
        setCart(prevCart => [...prevCart, { ...product, quantity: quantityToAdd }]);
      } else {
        alert('Product is out of stock');
      }
    }
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
  };

  const increaseQuantity = (productId) => {
    setCart(prevCart => prevCart.map(product => {
      if (product.id === productId) {
        if (product.quantity < product.stock) {
          return { ...product, quantity: product.quantity + 1 };
        }
      }
      return product;
    }));
  };

  const decreaseQuantity = (productId) => {
    setCart(prevCart => prevCart.map(product => {
      if (product.id === productId && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <Container.Provider value={{ cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, totalPrice }}>
      {children}
    </Container.Provider>
  );
};
