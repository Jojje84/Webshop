import React from "react";
import styled from "styled-components";
import { Room, MailOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  flex: 1;
  margin-left: 20px;
`;

const Left = styled.div`
  flex-direction: column;
  flex: 1;
  display: flex;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonLink = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  color: white;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  flex-direction: column;
  display: flex;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Bottom = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

const Payment = styled.img`
  width: 40%;
`;

const Footer = () => {
  return (
    <Container>
      <Section>
        <Left>
          <Title>LINKS</Title>
          <List>
            <ButtonLink to="/">Home</ButtonLink>
            <ButtonLink to="/cart">Cart</ButtonLink>
            <ButtonLink to="/categories">Categories</ButtonLink>
            <ButtonLink to="/Question">Question</ButtonLink>
            <ButtonLink to="/GDPR">GDPR</ButtonLink>
          </List>
        </Left>
        <Right>
          <Title>CONTACT</Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> Street, Box , City
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />{" "}
            <a href="mailto:mail@mail.com" style={{ color: "white", textDecoration: "none" }}>
              mail@mail.com
            </a>
          </ContactItem>
        </Right>
      </Section>
      <Bottom>
        <Payment src="public/images/paylogo.png" />
      </Bottom>
    </Container>
  );
};

export default Footer;
