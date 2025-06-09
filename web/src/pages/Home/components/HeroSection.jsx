import React, { useState, useEffect } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { sliderItems } from "../../../data/sliderItems";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;

`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.$slideIndex * -100}vw);
  align-items: center;


`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.$bg};

  @media (max-width: 700px) {
  padding: 20px 0;
}
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;

   @media (max-width: 700px) {
    height: auto;
    width: 100%;
    margin-bottom: 20px;
  }
  
`;

const Img = styled.img`
  width: 500px;
  height: auto;
  object-fit: cover;
  display: block;
  justify-content: center;
  align-items: center;

   @media (max-width: 700px) {
  width: 70%;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  @media (max-width: 700px) {
  padding: 10px;
}
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  color: #333;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;

  @media (max-width: 700px) {
  font-size: 24px;
  margin-bottom: 10px;
}
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #333;
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  text-transform: capitalize;
  font-style: italic;
  
  @media (max-width: 700px) {
  font-size: 14px;
  width: 85%;
  margin: 10px auto;
}
`;
const ButtonLink = styled(Link)`
 width: 200px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  text-decoration: none;

  background-color: #fff;
  color: #333;
  border: 2px solid #333;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #333;
    color: #fff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ccc;
    color: #333;
    cursor: not-allowed;
    box-shadow: none;
    transform: none;
  }
     @media (max-width: 700px) {
    width: 140px;
    height: 40px;
    font-size: 14px;
    letter-spacing: 1px;
    margin-top: 10px;
  }
`;



const HeroSection = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex((prev) => (prev > 0 ? prev - 1 : sliderItems.length - 1));
    } else {
      setSlideIndex((prev) => (prev < sliderItems.length - 1 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev < sliderItems.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper $slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} $bg={item.bg}>
            <ImgContainer>
              <Img src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title} </Title>
              <Desc>{item.desc}</Desc>
              <ButtonLink to="/categories">Look</ButtonLink>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default HeroSection;
