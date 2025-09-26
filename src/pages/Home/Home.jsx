import React from 'react';
import CategorySection from '../Categories/components/CategorySection';
import HeroSection from './components/HeroSection';
import Newsletter from '../components/Newsletter';
import InfoSection from './components/InfoSection';
import Footer from '../components/Footer/Footer';
import styled from 'styled-components';

const Container = styled.div``;

const Home = () => {
  return (
    <Container>
      <HeroSection />
      <CategorySection />
      <InfoSection />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
