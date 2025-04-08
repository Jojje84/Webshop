import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart";
import CategorySection from "./pages/Categories/components/CategorySection";
import ProductList from "./pages/Categories/ProductList";
import ProductPage from "./pages/Products/ProductPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<CategorySection />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:category" element={<ProductList />} />
    <Route path="/product/:id" element={<ProductPage />} />
  </Routes>
);

export default AppRoutes;
