import React, { createContext, useContext, useState } from 'react';
import { products } from '../data/products'; 

const StockContext = createContext();

export const useStock = () => {
  return useContext(StockContext);
};

export const StockProvider = ({ children }) => {
  
  const [stock, setStock] = useState(
    products.map((product) => ({
      id: product.id,
      stock: product.stock, 
    }))
  );

  
  const updateStock = (productId, quantityChange) => {
    if (quantityChange === 0) return; 

    setStock((prevStock) =>
      prevStock.map((item) =>
        item.id === productId
          ? {
              ...item,
              stock: Math.max(0, item.stock + quantityChange), 
            }
          : item
      )
    );
  };


  const getStockById = (productId) => {
    const product = stock.find((item) => item.id === productId);
    if (!product) {
      console.error(`Product with id ${productId} not found in stock.`);
      return 0; 
    }
    return product.stock;
  };

  return (
    <StockContext.Provider value={{ stock, updateStock, getStockById }}>
      {children}
    </StockContext.Provider>
  );
};
