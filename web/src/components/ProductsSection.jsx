import React from 'react';
import { products } from '../data/products'; // Hämta produkterna
import ProductCard from './ProductCard';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const ProductsSection = ({ category }) => {
  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  return (
    <Container>
      <h3>{category ? `${category} Products` : 'All Products'}</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products available in this category</p>
        )}
      </div>
    </Container>
  );
};

export default ProductsSection;
