import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const QuestionList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const QuestionItem = styled.div`
  margin-bottom: 20px;
`;

const Question = styled.h3`
  margin-bottom: 10px;
  color: #007bff;
`;

const Answer = styled.p`
  margin: 0;
  color: #666;
`;

const QuestionPage = () => {
  return (
    <Container>
      <Title>Frequently Asked Questions</Title>
      <QuestionList>
        <QuestionItem>
          <Question>What is your return policy?</Question>
          <Answer>
            You can return any item within 30 days of purchase as long as it is
            in its original condition.
          </Answer>
        </QuestionItem>
        <QuestionItem>
          <Question>Do you offer international shipping?</Question>
          <Answer>
            Yes, we ship to most countries worldwide. Shipping costs will be
            calculated at checkout.
          </Answer>
        </QuestionItem>
        <QuestionItem>
          <Question>How can I track my order?</Question>
          <Answer>
            Once your order is shipped, you will receive a tracking number via
            email.
          </Answer>
        </QuestionItem>
      </QuestionList>
    </Container>
  );
};

export default QuestionPage;