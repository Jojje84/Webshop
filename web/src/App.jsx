import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { StockProvider } from "./contexts/StockContext";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import ProductList from "./pages/Categories/ProductList";
import ProductPage from "./pages/Products/ProductPage";
import CategorySection from "./pages/Categories/components/CategorySection";

const App = () => {
  return (
    <Router>
      <StockProvider>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<CategorySection />} />
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
