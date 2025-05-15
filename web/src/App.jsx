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
