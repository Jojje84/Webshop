import React from 'react';
import { useParams } from 'react-router-dom';
import ProductsSection from '../../Products/components/ProductsSection';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div``;


const BackButton = styled.button`
  margin: 10px;
  padding: 6px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;

const ProductList = () => {
  const { category } = useParams();
   const navigate = useNavigate();

  return (
    <Container>
      <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
      <ProductsSection category={category} />
    </Container>
  );
};

export default ProductList;
