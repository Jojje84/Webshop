import React from "react";
import { products } from "../../../data/products";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h3``;

const ProductCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductsSection = ({ category }) => {
  const filteredProducts = category ? products.filter((product) => product.category === category) : products;

  return (
    <Container>
      <Title>{category ? `${category} Products` : "All Products"}</Title>
      <ProductCardWrapper>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
        ) : (
          <p>No products available in this category</p>
        )}
      </ProductCardWrapper>
    </Container>
  );
};

export default ProductsSection;
