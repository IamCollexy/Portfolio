import { Button, Link, Stack, Typography } from '@mui/material';
import React from 'react';

const Hero = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        bgcolor: '#761AEA',
        color: '#FFFFFF',
        textAlign: 'center',
        p: { xs: '35% 20px', sm: '10% 20px', md: '5% 210px' },
        height: '70%',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
        }}
      >
        CDG Web App Development
      </Typography>
      <Typography variant="body1">
        Specializing in Web Development. If you're a business seeking
        a web presence or are looking to hire, contact me{' '}
        <Link
          href="#"
          sx={{
            color: 'whitesmoke',
          }}
        >
          here
        </Link>
        .
      </Typography>
      <Button
        variant="contained"
        sx={{
          bgcolor: '#F2BF00',
          borderRadius: '50px',
          width: '150px',
          padding: '15px',
          alignSelf: 'center',
          color: 'black',
        }}
      >
        Get Started
      </Button>
    </Stack>
  );
};

export default Hero;
