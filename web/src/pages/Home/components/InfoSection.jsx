import React from 'react';
import styled from 'styled-components';
import {
  CheckBoxOutlined,
  ContentPasteOutlined,
  LocalShippingOutlined,
  ThumbUpOutlined,
} from '@mui/icons-material';

const Container = styled.div`
  width: 80%;
  max-width: 1200px;
  height: 100%;
  text-align: center;
  margin: 50px auto;
`;

const Title = styled.h1`
  justify-content: center;
  display: flex;
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: bold;
`;

const Steps = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin: 50px;
`;

const Ways = styled.div`
  width: 45%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 10px;
  margin-bottom: 50px;
`;

const Info = styled.div`
  width: 55%;
`;

const StepTitle = styled.h2`
  font-size: 18px;
  text-align: left;
  margin: 0;
  padding: 0;
`;

const StepDesc = styled.p`
  font-size: 14px;
  text-align: left;
  margin: 0;
  padding: 0;
`;

const InfoSection = () => {
  return (
    <Container>
      <Title>How to Shop in Our Webshop</Title>
      <Steps>
        <Ways>
          <ContentPasteOutlined style={{ fontSize: '50px', margin: '20px' }} />
          <Info>
            <StepTitle>1. Select Products</StepTitle>
            <StepDesc>
              Browse our wide selection and add your favorite products to the
              shopping cart with just one click.
            </StepDesc>
          </Info>
        </Ways>
        <Ways>
          <CheckBoxOutlined style={{ fontSize: '50px', margin: '20px' }} />
          <Info>
            <StepTitle>2. Proceed to Checkout</StepTitle>
            <StepDesc>
              When you're happy with your selections, proceed to checkout.
              Easily fill in your details and delivery information.
            </StepDesc>
          </Info>
        </Ways>
        <Ways>
          <ThumbUpOutlined style={{ fontSize: '50px', margin: '20px' }} />
          <Info>
            <StepTitle>3. Confirm your order</StepTitle>
            <StepDesc>
              Review your selections and verify that all your details are
              correct before securely confirming your order.
            </StepDesc>
          </Info>
        </Ways>
        <Ways>
          <LocalShippingOutlined style={{ fontSize: '50px', margin: '20px' }} />
          <Info>
            <StepTitle>4. Fast Delivery</StepTitle>
            <StepDesc>
              Your order is packed and quickly shipped to your home. Easily
              track your delivery with the tracking link sent to your email.
            </StepDesc>
          </Info>
        </Ways>
      </Steps>
    </Container>
  );
};

export default InfoSection;
