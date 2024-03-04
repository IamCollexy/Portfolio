import { Box, Card, CardHeader, Typography } from '@mui/material';
import React from 'react';
// import theme from '../../theme';
const Experience = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: 'white',
          padding: '30px',
          py: '70px',
        }}
      >
        <Typography
          variant="h3"
          color={'black'}
          fontWeight={'bold'}
          textAlign={'center'}
          fontSize={'56px'}
        >
          Experience
        </Typography>
        <hr
          style={{
            width: '190px',
            height: '5px',
            background: '#724C9D',
          }}
        />

        <Card
          sx={{
            textAlign: 'center',
            padding: '50px',
          }}
        >
          <CardHeader
            title={'IHIFIX'}
            subheader={'Nov(2022) - Oct(2023)'}
            sx={{
              color: '#212851',
            }}
          />
          <Typography
            variant="h6"
            sx={{
              width: { xs: '80%', md: '50%' },
              margin: 'auto',
              color: '#2C1B47',
              fontWeight: 'bold',
            }}
          >
            Frontend Developer @ IHIFIX, Kaduna State, Nigeria ·
            On-site
          </Typography>
          <Typography variant="body2">
            Worked as a frontend developer at Ihifix, My work includes
            building user interfaces using Next Js, and Material UI
            for the company, I contributed to many projects including
            a learning management system called Ubefu. Additionally, I
            serve as a mentor and trainer for upcoming developers
            within the company.
          </Typography>
        </Card>
      </Box>
      <Box
        sx={{
          bgcolor: 'white',
          padding: '30px',
          py: '20px',
        }}
      >
        <Card
          sx={{
            textAlign: 'center',
            padding: '50px',
          }}
        >
          <CardHeader
            title={'UPTITEK'}
            subheader={'Nov(2023) - Present'}
            sx={{
              color: '#212851',
            }}
          />
          <Typography
            variant="h6"
            sx={{
              width: { xs: '80%', md: '50%' },
              margin: 'auto',
              color: '#2C1B47',
              fontWeight: 'bold',
            }}
          >
            Junior Developer @ Uptitek ltd· Remote
          </Typography>
          <Typography variant="body2">
            Worked on ..................
          </Typography>
        </Card>
      </Box>
    </>
  );
};

export default Experience;
