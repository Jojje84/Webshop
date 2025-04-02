import React from 'react'
import { useCart } from '../contexts/CartContext'
import styled from 'styled-components'

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

const Cartinfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px;
  
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  gap: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 10px; 

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
    
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AmountButton = styled.button`
  background-color: #f1f1f1;
  padding: 5px 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  margin: 0 5px 0 5px;
`;

const ItemDetails = styled.div`
  display: flex;
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: red;
  color: white;
  cursor: pointer;
  font-weight: 500;
  border: none;
  margin-left: 20px;

  &:hover {
    background-color: darkred;
  }
`;

const TotalContainer = styled.div`
  margin-top: 20px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  justify-content: flex-end;
  padding: 20px; 
`;

const TotalPrice = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: #333;
  
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const RemoveAllButton = styled.button`
  padding: 10px 20px;
  background-color: green;
  color: white;
  cursor: pointer;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;


  &:hover {
    background-color: darkred;
  }
`;

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice, clearCart } = useCart();

  const handleRemoveAll = () => {
    clearCart();
  }
  return (
    <Container>
      <Title>Your Cart</Title>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <Cartinfo>
          {cart.map((product) => (
            <CartItem key={product.id}>
              <ItemDetails>
              <ItemInfo>
              <span>{product.name}</span>
              <span>Price: {product.price} x {product.quantity} = ${(product.price * product.quantity).toFixed(2)}</span>
              <AmountContainer>
                <AmountButton onClick={() => decreaseQuantity(product.id)}>-</AmountButton>
                <span>{product.quantity}</span>
                <AmountButton onClick={() => increaseQuantity(product.id)}>+</AmountButton>
              </AmountContainer>
              </ItemInfo>
              </ItemDetails>
              <RemoveButton onClick={() => removeFromCart(product.id)}>Remove</RemoveButton>
            </CartItem>
          ))}
        </Cartinfo>
 )}
          <TotalContainer>
          <TotalPrice>Total Price: ${totalPrice.toFixed(2)}</TotalPrice>
          </TotalContainer>
          <ButtonContainer>
        <RemoveAllButton onClick={handleRemoveAll}>Check out</RemoveAllButton>
      </ButtonContainer>
    </Container>
  );
};

export default Cart;
