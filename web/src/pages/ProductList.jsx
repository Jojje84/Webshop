import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsSection from '../components/ProductsSection';
import styled from 'styled-components';

const Container = styled.div``;

const ProductList = () => {
  const { category } = useParams();

  return (
    <Container>
      <ProductsSection category={category} />
    </Container>
  );
};

export default ProductList;
