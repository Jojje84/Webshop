import React, { createContext, useContext, useState } from 'react';
import { products } from '../data/products'; // Importera produktdata

const StockContext = createContext();

export const useStock = () => {
  return useContext(StockContext);
};

export const StockProvider = ({ children }) => {
  // Initialisera lagersaldot baserat på produkterna
  const [stock, setStock] = useState(
    products.map((product) => ({
      id: product.id,
      stock: product.stock, // Hämta lagersaldot från products.js
    }))
  );

  // Funktion för att uppdatera lagersaldot
  const updateStock = (productId, quantityChange) => {
    if (quantityChange === 0) return; // Ingen förändring i lagersaldot om kvantiteten är 0

    setStock((prevStock) =>
      prevStock.map((item) =>
        item.id === productId
          ? {
              ...item,
              stock: Math.max(0, item.stock + quantityChange), // Säkerställ att lagret inte går under 0
            }
          : item
      )
    );
  };

  // Funktion för att hämta lagersaldo för en specifik produkt
  const getStockById = (productId) => {
    const product = stock.find((item) => item.id === productId);
    if (!product) {
      console.error(`Product with id ${productId} not found in stock.`);
      return 0; // Om produkten inte finns, returnera 0
    }
    return product.stock;
  };

  return (
    <StockContext.Provider value={{ stock, updateStock, getStockById }}>
      {children}
    </StockContext.Provider>
  );
};
