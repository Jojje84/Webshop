import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { StockProvider } from './contexts/StockContext';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import ProductList from './pages/ProductList';
import ProductPage from './pages/ProductPage';

const App = () => {
  return (
    <Router>
      <StockProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </CartProvider>
      </StockProvider>
    </Router>
  );
};

export default App;
