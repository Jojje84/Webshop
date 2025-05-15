import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  max-width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

const ViewButton = styled.button`
  padding: 10px 18px;
  background: #fff;
  color: #333;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  font-weight: 600;
  margin-top: 10px;
  transition: background 0.2s;
  &:hover {
    background: #eee;
  }
`;

const CategoryCard = ({ name, image }) => {

  return (
    <Container>
      <Img src={image} alt={name} />
      <Info>
        <Title>{name}</Title>
      </Info>
    </Container>
  );
};

export default CategoryCard;
