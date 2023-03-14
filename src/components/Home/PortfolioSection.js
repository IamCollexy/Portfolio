import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceSection = () => {
  return (
    <Stack
      spacing={2}
      sx={{
        textAlign: 'center',
        p: '30px 20px',
        bgcolor: '#F3F2F1',
      }}
    >
      <Link
        to={'/portfolio'}
        style={{
          color: 'GrayText',
          fontWeight: 'bold',
          textDecoration: 'none',
        }}
      >
        Portfolio
      </Link>
      <Divider />
      <Card
        variant="outlined"
        sx={{
          p: '50px 20px',
          width: '80%',
          alignSelf: 'center',
          margin: 'auto',
        }}
      >
        <CardContent>
          <CardHeader
            title="Frontend Development"
            component="Paper"
            subheader="welcoming you to the frontend."
          />

          <Typography variant="body2">
            At CDG web development brand, we pride ourselves on
            delivering high-quality services that exceeds our client'
            expectations. Whether you're a small business owner or a
            large enterprise, we're here to help you achieve your
            online goals.
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{
              textDecoration: 'none',
            }}
            to={'/portfolio'}
          >
            <Button
              sx={{ borderRadius: '50px', textDecoration: 'none' }}
              variant="outlined"
              color="primary"
            >
              More
            </Button>
          </Link>
        </CardActions>
      </Card>
      <Divider />
    </Stack>
  );
};

export default ServiceSection;
