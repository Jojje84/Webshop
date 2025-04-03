import React from 'react';
import styled from 'styled-components';
import { Send } from '@mui/icons-material';

const Container = styled.div`
    height: 30vh;
    display: flex;
    background-color: #f5f5f5;);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-image:  url('/images/newsletter.png');
    background-size: cover;
    background-position: center;

`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: white;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  color: white;
`;

const InputContainer = styled.div`
  width: 500px;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 0px solid lightgray;
  border-radius: 20px;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
  border-radius: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-size: 16px;
  border-radius: 0 20px 20px 0;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Keep you update!!!</Desc>
      <InputContainer>
        <Input placeholder="Type your Email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
