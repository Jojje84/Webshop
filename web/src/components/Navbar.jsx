import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, colors } from '@mui/material';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
`
const Wrapper = styled.div`
  padding: 10px 20px; 
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Left = styled.div`
  flex: 1;
  background-color: rgb(170, 165, 165);
  padding: 8px;
  `;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    `;


const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:rgb(170, 165, 165);
  padding: 3px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  `;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 1px;
  border-radius: 20px;
  background-color: white;
  
  
  `;
const Input = styled.input`
  border: none;
  margin: 5px;
  border-radius: 20px;
  padding-left: 5px;

  `;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  background-color: rgb(170, 165, 165);
  padding: 8px;
  margin-left: 30px;
  justify-content: center;
  
  ;`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 12px;

  `;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
        </Left>
        <Center>
          center
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )

}

export default Navbar