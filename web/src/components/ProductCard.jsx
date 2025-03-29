// src/components/ProductCard.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  width: 200px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1); // Användare kan välja kvantitet
  const [error, setError] = useState('');

  const handleAddToCart = () => {
    if (quantity > 0 && quantity <= product.stock) {
      addToCart(product, quantity); // Skicka den valda kvantiteten till addToCart
      setError('');
    } else {
      setError('Invalid quantity. Please select a valid quantity.');
    }
  };

  const handleQuantityChange = (e) => {
    const value = Math.max(1, Math.min(e.target.value, product.stock)); // Begränsa värdet mellan 1 och lagerantalet
    setQuantity(value);
  };

  return (
    <Card>
      <Image src={product.image} alt={product.name} />
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
    </Card>
  );
};

export default ProductCard;
