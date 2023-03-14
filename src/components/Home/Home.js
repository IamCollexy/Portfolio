import { Box } from '@mui/material';
import React from 'react';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Hero from './Hero';
import HomeNav from './HomeNav';
import ServiceSection from './PortfolioSection';
import Pricing from './Pricing';
const Home = () => {
  return (
    <Box>
      <HomeNav />
      <Hero />
      <AboutUs />
      <ServiceSection />
      <Pricing />
      <ContactUs />
    </Box>
  );
};

export default Home;
