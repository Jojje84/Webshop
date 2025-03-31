import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsSection from '../components/ProductsSection';  // Importera ProductsSection

const ProductList = () => {
  const { category } = useParams();  // Hämta kategorin från URL:en

  return (
    <div>
      <ProductsSection category={category} /> {/* Skicka kategorin till ProductsSection */}
    </div>
  );
};

export default ProductList;
