import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import { sliderItems } from '../data/sliderItems'
import { useState } from 'react'
import { useEffect } from 'react'

const Container = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    position: relative;
    overflow: hidden;
    align-items: center;


;`
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
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5; 
    z-index: 2;

`;
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.$slideIndex * -100}vw);
    align-items: center;

`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #${props => props.$bg};

`;

const ImgContainer = styled.div`
    flex: 1;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
   
`;

const Img = styled.img`
    max-height: 100%;
    width: auto;
    object-fit: contain;
    display: block;
    vertical-align: middle;

`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
  
`;

const Title = styled.h1`
    font-size: 70px;

`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;

`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;

`;

const HeroSection = ({ onOpenCategories }) => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(prev => (prev > 0 ? prev - 1 : sliderItems.length - 1));
        } else {
            setSlideIndex(prev => (prev < sliderItems.length - 1 ? prev + 1 : 0));
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setSlideIndex(prev => (prev < sliderItems.length - 1 ? prev + 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper $slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide key={item.id} $bg={item.bg}>
                        <ImgContainer>
                            <Img src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title} </Title>
                            <Desc>{item.desc}</Desc>
                            <Button onClick={onOpenCategories}>Look</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default HeroSection 