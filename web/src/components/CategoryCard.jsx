import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  flex: 1;
  margin: 5px;
  max-width: 300px;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
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

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  border-radius: 5px;
`;

const CategoryCard = ({ name, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${name}`);
  };

  return (
    <Container onClick={handleClick}>
      <Img src={image} alt={name} />
      <Info>
        <Title>{name} </Title>
        <Button>Click to view</Button>
      </Info>
    </Container>
  );
};

export default CategoryCard;
