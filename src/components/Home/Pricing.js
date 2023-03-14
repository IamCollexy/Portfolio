import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';

const data = [
  {
    title: 'Basic',
    // img: (
    //   <CardMedia
    //     image={'./Images/FE1.jpg'}
    //     sx={{ height: 100, width: 100, borderRadius: 2 }}
    //   />
    // ),
    packages: (
      <Stack sx={{ color: '#800080' }}>
        <Typography variant="h6">Web Audit</Typography>
        <Typography variant="h6">Design</Typography>
        <Typography Typography variant="h6">
          Frontend Development
        </Typography>
      </Stack>
    ),
    price: '$50 - $150',
  },
  {
    title: 'Standard',
    packages: (
      <Stack sx={{ color: '#800080' }}>
        <Typography variant="h6">Web Audit</Typography>
        <Typography variant="h6">Design</Typography>
        <Typography Typography variant="h6">
          Frontend Development
        </Typography>
        <Typography Typography variant="h6">
          Hosting
        </Typography>
        <Typography Typography variant="h6">
          Live Chat
        </Typography>
        <Typography Typography variant="h6">
          Email Setup
        </Typography>
      </Stack>
    ),
    price: '$75 - $200',
  },
  {
    title: 'Premium',
    packages: (
      <Stack sx={{ color: '#800080' }}>
        <Typography variant="h6">Web Audit</Typography>
        <Typography variant="h6">Design</Typography>
        <Typography Typography variant="h6">
          Frontend Development
        </Typography>
        <Typography Typography variant="h6">
          Backend Development
        </Typography>
        <Typography Typography variant="h6">
          FullStack Development
        </Typography>
        <Typography Typography variant="h6">
          Hosting
        </Typography>
        <Typography Typography variant="h6">
          Live Chat
        </Typography>
        <Typography Typography variant="h6">
          Analytics
        </Typography>
        <Typography Typography variant="h6">
          Maintenance Agreement
        </Typography>
        <Typography Typography variant="h6">
          Email Setup
        </Typography>
      </Stack>
    ),
    price: '$75 - $200',
  },
];

const Pricing = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        textAlign: 'center',
        p: '20px 20px',
        bgcolor: '#761AEA',
      }}
    >
      <Typography color={'white'} fontWeight={'bold'} variant="h6">
        Pricing
      </Typography>
      {/* <Divider sx={{ bgcolor: 'white' }} /> */}
      <div
        style={{
          width: '90%',
          margin: '40px auto',
        }}
      >
        <Grid container spacing={2}>
          {data.map((card, index) => (
            <Grid
              key={index}
              item
              xs={12}
              sm={4}
              sx={{
                justifyContent: 'center',
                alignSelf: 'center',
                display: 'flex',
              }}
            >
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',

                  background: '#fff',
                  maxWidth: 250,
                }}
              >
                <CardHeader avatar={card.img} title={card.title} />
                <CardContent>
                  <Stack spacing={2}>
                    {card.packages}
                    <Typography variant="h5">{card.price}</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Stack>
  );
};

export default Pricing;
