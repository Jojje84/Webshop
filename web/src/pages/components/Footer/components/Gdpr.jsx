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

const Section = styled.div`
  margin-bottom: 20px;
`;

const Subtitle = styled.h2`
  margin-bottom: 10px;
  color: #007bff;
`;

const Text = styled.p`
  color: #666;
  line-height: 1.6;
`;

const GDPR = () => {
  return (
    <Container>
      <Title>GDPR Policy</Title>
      <Section>
        <Subtitle>What is GDPR?</Subtitle>
        <Text>
          The General Data Protection Regulation (GDPR) is a regulation in EU law on data protection and privacy in the European Union and the European Economic Area.
        </Text>
      </Section>
      <Section>
        <Subtitle>How We Use Your Data</Subtitle>
        <Text>
          We collect and use your personal data to provide and improve our services. Your data will never be shared with third parties without your consent.
        </Text>
      </Section>
      <Section>
        <Subtitle>Your Rights</Subtitle>
        <Text>
          Under GDPR, you have the right to access, correct, or delete your personal data. If you have any questions or requests, please contact us.
        </Text>
      </Section>
    </Container>
  );
};

export default GDPR;