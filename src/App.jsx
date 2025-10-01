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

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { StockProvider } from './contexts/StockContext';
import Navbar from './pages/components/Navbar';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <StockProvider>
        <CartProvider>
          <Navbar />
          <AppRoutes />
        </CartProvider>
      </StockProvider>
    </Router>
  );
};

export default App;
