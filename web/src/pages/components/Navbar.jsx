import React, { useState } from 'react';
import styled from 'styled-components';
import { useCart } from '../../contexts/CartContext';
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
  padding: 0px 30px 0 30px;
  background-color: #b0b3b8;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  flex-basis: 20%;
  display: flex;
  align-items: center;
  height: 100%;
  background-color: #b0b3b8;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding-right: 10px;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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
  padding: 10px;
  cursor: pointer;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0 0 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;
const Button = styled.button`
  background-color: rgb(70, 111, 183);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: rgb(63, 194, 102);
  }
`;

const ButtonLink = styled(Link)`
  background-color: rgb(11, 11, 11);
  color: white;
  padding: 12px 20px;
  margin-right: 20px;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: #45a049;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  }
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
          <ButtonLink to="/">HOME</ButtonLink>
          <ButtonLink to="/categories">CATEGORIES</ButtonLink>
          <ButtonLink to="/contact">CONTACT</ButtonLink>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: 'gray', fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <CenterSpace />
        <Right>
          <ButtonLink to="/login">LOG IN</ButtonLink>
          <Cart onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Badge badgeContent={totalItems} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </Link>

            <Dropdown isOpen={isDropdownOpen}>
              {cart.length === 0 ? (
                <DropdownItem>Your cart is empty.</DropdownItem>
              ) : (
                <>
                  <Title>Products</Title>
                  {cart.map((product) => (
                    <DropdownItem key={product.id}>
                      {product.name} x {product.quantity}
                    </DropdownItem>
                  ))}
                </>
              )}
              <Link to="/cart">
                <DropdownItem>
                  <Button>Go to cart</Button>
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
