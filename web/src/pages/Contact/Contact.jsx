import React from 'react';
import styled from 'styled-components';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer/Footer';

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-weight: 400;
  text-align: center;
  margin-top: 55px;
  margin-bottom: 0;
  font-size: 34px;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
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
  margin-bottom: 20px;
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


const Contact = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Desc>
        Do you have any questions? Fill out the form below, and we will get back to you as soon as
        possible.
      </Desc>
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
        <Newsletter />
      <Footer /> {/* Ändra här */}
    </Container>
  );
};

export default Contact;
