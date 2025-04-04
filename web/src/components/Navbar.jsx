import React, { useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import Badge from '@mui/material/Badge';

const NavbarContainer = styled.nav`
  height: 60px;
  margin-bottom: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
`;

const Left = styled.div`
  flex-basis: 35%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding-left: 30px;
  background-color: #b0b3b8;
`;

const Center = styled.div`
  flex-basis: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #b0b3b8;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  padding-right: 10px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 15px;
  background-color: white;
`;

const Input = styled.input`
  border: none;
  margin: 10px;
  border-radius: 20px;
  width: 200px;
`;

const CenterSpace = styled.div`
  flex-basis: 15%;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const Right = styled.div`
  flex-basis: 25%;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #b0b3b8;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding-right: 10px;
  justify-content: center;
`;

const Cart = styled.div`
  margin-left: 20px;
  position: relative;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 200px;
  z-index: 100;
  background-color: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.div`
  padding: 5px;
  cursor: pointer;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0 0 5px 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <NavbarContainer>
      <Wrapper>
        <Left>
          <Link to="/" style={{ color: 'white', marginRight: '20px' }}>
            HOME
          </Link>
          <Link
            to="/categories"
            style={{ color: 'white', marginRight: '20px' }}>
            CATEGORIES
          </Link>
          <Link to="/contact" style={{ color: 'white' }}>
            CONTACT
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 20 }} />
          </SearchContainer>
        </Center>
        <CenterSpace />
        <Right>
          <Link to="/login" style={{ color: 'white', marginRight: '20px' }}>
            LOG IN
          </Link>
          <Cart
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
            >
            <div>
          <Badge badgeContent={totalItems} color="primary">
            <ShoppingCartOutlined />
              </Badge>
              </div>
         
          <Dropdown isOpen={isDropdownOpen}>
              {cart.length === 0 ? (
                <DropdownItem>Your cart is empty.</DropdownItem>
              ) : (
                cart.map((product) => (
                  <DropdownItem key={product.id}>
                    <Title>Your Products</Title>
                    {product.name} x {product.quantity}
                  </DropdownItem>
                   ))
                  )}
               <Link to="/cart">
                <DropdownItem>
                  Go to cart →
                </DropdownItem>
              </Link>
            </Dropdown>
          </Cart>
        </Right>
      </Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;
