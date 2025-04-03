import React, { createContext, useContext, useState } from 'react';
import { products } from '../data/products';

const StockContext = createContext();

export const useStock = () => {
  return useContext(StockContext);
};

export const StockProvider = ({ children }) => {
  const [stock, setStock] = useState(products);

  const updateStock = (productId, quantity) => {
    setStock(prevStock => prevStock.map(item =>
      item.id === productId && item.stock >= quantity  // Lägg till en kontroll här
      ? { ...item, stock: item.stock - quantity }
      : item 
    ));
  };

  return (
    <StockContext.Provider value={{ stock, updateStock }}>
      {children}
    </StockContext.Provider>
  );
};
