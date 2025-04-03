import React, { useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { getImageUrl } from '../utils/imageUtils';
import { useEffect } from 'react';
import { useStock } from '../contexts/StockContext';
import { Link } from 'react-router-dom';

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Cirkel = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`;

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [imageUrl, setImageUrl] = useState(null);
  const { updateStock } = useStock();

  useEffect(() => {
    const loadImage = async () => {
      const image = await getImageUrl(product.category, product.image); // Ladda bilden
      setImageUrl(image); // Uppdatera state med bildens URL
    };

    loadImage();
  }, [product]); 

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stock) {
      setQuantity(newQuantity);
    }
  };

  // Example usage of handleQuantityChange
  // You can replace this with actual UI elements like buttons
  useEffect(() => {
    handleQuantityChange(0); // Initialize quantity validation
  }, []);

  const handleAddToCart = () => {
    if (quantity <= product.stock) {
      addToCart(product, quantity);
      updateStock(product.id, quantity);
      product.stock -= quantity; // Directly update the product stock
    }
  };

 

  return (
    <Container>
      <Cirkel />
      <Image src={imageUrl} alt={product.name} />
      <Info>
        <Icon>
          <ShoppingCartOutlined onClick={handleAddToCart} />
        </Icon>
        <Icon>
          <Link to={`/product/${product.id}`}>
            <SearchOutlined />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>

    </Container>
  );
};

export default ProductCard;
