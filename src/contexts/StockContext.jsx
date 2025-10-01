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
