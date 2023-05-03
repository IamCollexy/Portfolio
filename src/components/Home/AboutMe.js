import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <Box
      sx={{
        bgcolor: '#DCCAE9',
        padding: '20px 10px',
      }}
    >
      <Box
        sx={{
          paddingBottom: '70px',
        }}
      >
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '56px',
            fontWeight: 'bold',
            color: '#2C1B47',
          }}
        >
          <span
            style={{
              color: 'white',
              padding: '3px 3px',
              borderBottom: '10px solid #724C9D',
            }}
          >
            About
          </span>
          Me
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: { xs: 'none', lg: 'flex' },
            justifyContent: 'center',
            alignSelf: 'center',
          }}
        >
          <Card
            sx={{
              borderRadius: '50px',
              width: 480,
              height: 630,
            }}
          >
            <CardMedia
              component="img"
              alt="CollinsArmedCrossed"
              image="/images/cdgArmedCrossed.jpg"
            />
          </Card>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Card
            variant="outlined"
            sx={{
              p: '50px 20px',

              alignSelf: 'center',
              margin: 'auto',
              height: { md: 'auto', lg: '100%' },

              borderRadius: '10px',
            }}
          >
            <CardContent>
              <CardHeader
                sx={{
                  fontWeight: 'bold',
                  fontSize: '50px',
                }}
                title="Collins Ikpeme "
                component="Paper"
                subheader="Read to know more about me."
              />

              <Typography
                variant="body2"
                sx={{
                  textAlign: 'center',
                  lineHeight: '40px ',
                  fontSize: '16px',
                  fontWeight: '500',
                  color: '#2C1B47',
                }}
              >
                Collins Ikpeme is a frontend developer from Cross
                River State, Nigeria. He graduated from Bells
                University of Technology with a degree in Electrical
                and Electronics Engineering, but his interest in
                coding led him to pursue frontend development as a
                career. Collins has one year of experience building
                web UIs and implementing logics with JavaScript. His
                favorite frontend technologies and tools include
                React.js, Next.js, Material UI, HTML, CSS, and
                Firebase. When he's not coding, Collins enjoys music,
                making beats, hanging out with friends, working out,
                and going to concerts. He aspires to land a
                high-paying job, work remotely, travel for conferences
                on frontend development, do some freelancing, and
                provide solutions to big companies.
              </Typography>
            </CardContent>

            <CardActions>
              <Link
                style={{
                  textDecoration: 'none',
                }}
                to={
                  'https://www.linkedin.com/in/collins-ikpeme-react-developer/'
                }
              >
                <Button
                  sx={{
                    borderRadius: '50px',
                    textDecoration: 'none',
                  }}
                  variant="contained"
                  color="primary"
                >
                  LinkedIn
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMe;
