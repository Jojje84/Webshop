import React, { useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';

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
  const [error, setError] = useState('');

  const handleAddToCart = () => {
    if (quantity > 0 && quantity <= product.stock) {
      addToCart(product, quantity);
      setError('');
    } else {
      setError('Invalid quantity. Please select a valid quantity.');
    }
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(e.target.value, product.stock));
    setQuantity(value);
  };

  return (
    <Container>
      <Cirkel />
      <Image src={product.image} alt={product.name} />
      <Info>
        <Icon>
          <ShoppingCartOutlined onClick={handleAddToCart} />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        max={product.stock}
        onChange={handleQuantityChange}
        style={{ margin: '10px', padding: '5px' }}
      />
      <button onClick={handleAddToCart}>
        {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </Container>
  );
};

export default ProductCard;
