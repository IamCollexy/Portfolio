import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

const Skills = () => {
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
  return (
    <Box
      sx={{
        bgcolor: '#2C1B47',
        py: '50px',
      }}
    >
      <Typography
        textAlign={'center'}
        color={'white'}
        variant="h3"
        marginBottom={5}
        fontWeight={600}
        fontSize={'56px'}
      >
        Skills
      </Typography>
      <Stack
        spacing={{ xs: 3, md: 8 }}
        direction={'row'}
        sx={{
          width: { xs: '100%', md: '50%' },
          margin: 'auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack spacing={2} alignItems={'center'}>
          <img
            src="/Images/nextjs.png"
            alt="NEXT"
            width={isSmallScreen ? 70 : 120}
            height={isSmallScreen ? 70 : 120}
          />
          <Typography
            fontWeight={600}
            variant="captions"
            color="silver"
          >
            NEXT.JS
          </Typography>
        </Stack>

        <Stack spacing={2} alignItems={'center'}>
          <img
            src="/Images/nodejs.png"
            alt="JS"
            width={isSmallScreen ? 70 : 120}
            height={isSmallScreen ? 70 : 120}
          />
          <Typography
            fontWeight={600}
            variant="captions"
            color="silver"
          >
            NODE JS
          </Typography>
        </Stack>
        <Stack spacing={2} alignItems={'center'}>
          <img
            src="/Images/MUIlOGO2.jpg"
            alt="MUI"
            width={isSmallScreen ? 70 : 120}
            height={isSmallScreen ? 70 : 120}
            style={{
              borderRadius: '30px',
            }}
          />
          <Typography
            fontWeight={600}
            variant="captions"
            color="silver"
          >
            MUI
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Skills;
