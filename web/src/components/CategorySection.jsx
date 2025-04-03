import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import styled from 'styled-components';
import CategoryCard from './CategoryCard';
import { categories } from '../data/categories';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 200;
  text-align: center;
  margin: 20px 0;
  font-size: 24px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  padding: 20px;
`;

const ProductsInfo = styled.div``;

const ProductsCard = styled.div``;

const CategorySection = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    navigate(`/products/${category}`);
  };

  return (
    <Container>
      <Title>Categories</Title>
      <CategoryWrapper>
        {categories.map((category) => (
          <CategoryCard
            key={category.name}
            name={category.name}
            image={category.image}
            onClick={() => handleCategoryClick(category.name)}
          />
        ))}
      </CategoryWrapper>

      {selectedCategory && (
        <ProductsInfo>
          <Title>{selectedCategory} Products</Title>
          <ProductsCard>
            {products
              .filter((product) => product.category === selectedCategory)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </ProductsCard>
        </ProductsInfo>
      )}
    </Container>
  );
};

export default CategorySection;
