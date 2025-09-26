import React from "react";
import { useCart } from "../../contexts/CartContext";
import styled from "styled-components";
import { imageMap } from "../../utils/imageMap";
import { useNavigate } from "react-router-dom";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer/Footer";

const Container = styled.div``;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  margin-top: 55px;
  margin-bottom: 0;
  font-size: 34px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Arial", sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const CartSummary = styled.div`
  text-align: center;
  margin-bottom: 16px;
  color: #666;
  font-size: 16px;
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
  align-items: center;
  border: none;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  gap: 24px;
  margin-bottom: 24px;
  padding: 24px;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px) scale(1.01);
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ItemDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const ProductImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 12px;
  border: 2px solid #eee;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

const ProductPrice = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #007bff;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

const AmountButton = styled.button`
  background: #f1f1f1;
  padding: 6px 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin: 0 6px;
  font-size: 18px;
  font-weight: bold;
  transition: background 0.2s;
  &:hover {
    background: #e0e0e0;
  }
`;

const RemoveButton = styled.button`
  padding: 10px 18px;
  background: #ff3b3b;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  margin-left: 20px;
  font-size: 15px;
  transition: background 0.2s;
  &:hover {
    background: #c40000;
  }

  @media (max-width: 700px) {
    align-self: center;
    width: fit-content;
    max-width: 90%;
    text-align: center;
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const TotalContainer = styled.div`
  margin-top: 24px;
  font-weight: 700;
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;

const TotalPrice = styled.span`
  font-weight: 900;
  font-size: 2.2rem;
  color: #1db954;
  letter-spacing: 1px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px;
`;

const RemoveAllButton = styled.button`
  padding: 14px 32px;
  background: #1db954;
  color: #fff;
  cursor: pointer;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  transition: background 0.2s;
  &:hover {
    background: #158a3a;
  }
`;

const ContinueShoppingButton = styled.button`
  padding: 12px 28px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin-right: 16px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0056b3;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  margin: 40px 0 32px 0;
  font-size: 18px;
  color: #222;
`;

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const handleRemoveAll = () => {
    clearCart();
  };
  return (
    <Container>
      <Title>Your Cart</Title>
      <CartSummary>You have {cart.reduce((sum, item) => sum + item.quantity, 0)} items in your cart.</CartSummary>
      {cart.length === 0 ? (
        <EmptyCart>Your cart is empty</EmptyCart>
      ) : (
        <Cartinfo>
          {cart.map((product) => {
            // Hämta rätt bild-url från imageMap
            const categoryKey = product.category?.toLowerCase();
            const imageKey = product.image?.endsWith(".png") ? product.image : `${product.image}.png`;
            const imageUrl = imageMap[categoryKey]?.[imageKey] || "";

            return (
              <CartItem key={product.id}>
                <ItemDetails>
                  {/* Visa bilden */}
                  <ProductImage src={imageUrl} alt={product.name} />
                  <ItemInfo>
                    <span>{product.name}</span>
                    <ProductPrice>
                      Price: {product.price} x {product.quantity} = ${(product.price * product.quantity).toFixed(2)}
                    </ProductPrice>
                    <AmountContainer>
                      <AmountButton onClick={() => decreaseQuantity(product.id)}>-</AmountButton>
                      <span>{product.quantity}</span>
                      <AmountButton onClick={() => increaseQuantity(product.id)}>+</AmountButton>
                    </AmountContainer>
                  </ItemInfo>
                </ItemDetails>
                <RemoveButton onClick={() => removeFromCart(product.id)}>Remove</RemoveButton>
              </CartItem>
            );
          })}
        </Cartinfo>
      )}
      {cart.length > 0 && (
        <TotalContainer>
          <TotalPrice>Total Price: ${totalPrice.toFixed(2)}</TotalPrice>
        </TotalContainer>
      )}
      <ButtonContainer>
        <ContinueShoppingButton onClick={() => navigate("/categories")}>Continue shopping</ContinueShoppingButton>
        <RemoveAllButton onClick={handleRemoveAll}>Check out</RemoveAllButton>
      </ButtonContainer>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
