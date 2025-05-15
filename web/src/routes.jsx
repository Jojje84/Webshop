import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import Categories from './pages/Categories/Categories';
import ProductList from './pages/Categories/components/ProductList';
import ProductPage from './pages/Products/ProductPage';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Question from './pages/components/Footer/components/Question';
import GDPR from './pages/components/Footer/components/Gdpr';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/products/:category" element={<ProductList />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    <Route path="/question" element={<Question />} />
    <Route path="/gdpr" element={<GDPR />} />
  </Routes>
);

export default AppRoutes;
