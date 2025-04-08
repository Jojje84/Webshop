import React from "react";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
`;

const Desc = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: #666;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: green;
  }
`;
const NewsletterContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Contact = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Desc>Do you have any questions? Fill out the form below, and we will get back to you as soon as possible.</Desc>
      <Form>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input type="text" id="name" name="name" placeholder="Your name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" placeholder="Your email address" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea id="message" name="message" placeholder="Write your message here" required />
        </FormGroup>
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
      <NewsletterContainer>
        <Newsletter />
      </NewsletterContainer>
    </Container>
  );
};

export default Contact;
