import React from 'react';
import CategorySection from '../components/CategorySection';
import HeroSection from '../components/HeroSection';
import Newsletter from '../components/Newsletter';
import { Info } from '@mui/icons-material';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <InfoSection />
      <Newsletter />
      <Footer />

    </div>
  );
};

export default Home;
