import React, { createContext, useContext, useState } from 'react';
import { useStock } from './StockContext'; // Importera StockContext

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const { stock, updateStock } = useStock(); // Hämta stock och updateStock från StockContext

  // Lägg till en produkt i kundvagnen
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
          item.id === product.id ? { ...item, quantity: item.quantity + quantityToAdd } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: quantityToAdd }]);
    }

    // Minska lagersaldot
    updateStock(product.id, -quantityToAdd);
  };

  // Ta bort en produkt från kundvagnen
  const removeFromCart = (productId) => {
    const productToRemove = cart.find((product) => product.id === productId);

    if (productToRemove) {
      // Återställ lagersaldot
      updateStock(productId, productToRemove.quantity);

      // Ta bort produkten från kundvagnen
      setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    }
  };

  // Töm hela kundvagnen
  const clearCart = () => {
    cart.forEach((product) => {
      // Återställ lagersaldot för varje produkt i kundvagnen
      updateStock(product.id, product.quantity);
    });

    // Töm kundvagnen
    setCart([]);
  };

  // Beräkna totalpriset för kundvagnen
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
