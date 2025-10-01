/*
 * Webshop - Advanced React E-commerce Application
 * Copyright (c) 2025 Jorge Avila
 * Author: Jorge Avila (jorgeavilas@icloud.com)
 * Repository: https://github.com/Jojje84/Webshop
 * License: MIT License - see LICENSE file for details
 * 
 * React-based e-commerce platform with shopping cart and product management.
 * Original code by Jorge Avila - please maintain attribution.
 */

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
