import { Box } from '@mui/material';
import React from 'react';
import ContactUs from './ContactUs';
import Hero from './Hero';

import AboutMe from './AboutMe';

import Skills from './Skills';
import Experience from './Experience';
import MyPortfolio from './MyPortfolio';
const Home = () => {
  return (
    <Box>
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <MyPortfolio />
      <ContactUs />
    </Box>
  );
};

export default Home;
