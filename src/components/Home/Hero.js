import {
  Box,
  Button,
  Link,
  Stack,
  Typography,
  Grid,
  CardMedia,
  Card,
} from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import HomeNav from './HomeNav';
const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(/images/PortfolioHeroBg.svg)`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '130vh',
      }}
    >
      <HomeNav />

      <Grid
        container
        spacing={2}
        sx={{
          marginTop: { xs: '30px', md: '100px ' },
        }}
      >
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              marginLeft: { xs: 2, md: '200px' },
              marginTop: '70px',
              color: '#FFFFFF',
            }}
          >
            <Typography variant="h4" fontSize={32}>
              Hey there! , I am
            </Typography>
            <Typography
              variant="h1"
              fontWeight={'bold'}
              sx={{
                fontSize: { xs: 100, sm: 140, md: 200 },
              }}
            >
              Collins
            </Typography>
            <Box
              sx={{
                marginTop: { xs: '-20px', md: '-50px' },
                display: { xs: 'block', md: 'flex' },

                justifyContent: {
                  xs: 'flex-start',
                  md: 'space-between',
                },
                width: { xs: 'auto', md: '580px' },
              }}
            >
              <Typography
                variant="h5"
                color={'#CDA9FF'}
                fontSize={{ xs: 32, sm: 40, md: 64 }}
              >
                Ikpeme
              </Typography>
              <Stack
                direction={'row'}
                spacing={3}
                alignItems={'center'}
              >
                <Link href="#">
                  <LinkedInIcon
                    fontSize="large"
                    style={{
                      color: '#CDA9FF',
                    }}
                  />
                </Link>
                <Link href="#">
                  <TwitterIcon
                    fontSize="large"
                    style={{
                      color: '#CDA9FF',
                    }}
                  />
                </Link>
                <Link href="#">
                  <FacebookIcon
                    fontSize="large"
                    style={{
                      color: '#CDA9FF',
                    }}
                  />
                </Link>
                <Link href="#">
                  <GitHubIcon
                    fontSize="large"
                    style={{
                      color: '#CDA9FF',
                    }}
                  />
                </Link>
              </Stack>
            </Box>
            <Link href="#myWorks">
              <Button
                variant="contained"
                sx={{
                  borderRadius: '50px',
                  padding: '10px 25px ',
                  lineHeight: '24px',
                  textTransform: 'none',
                  fontSize: '20px',
                  bgcolor: '#6A2CBE',
                  marginTop: '30px',
                }}
                endIcon={<WorkIcon />}
              >
                My Work
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            paddingRight: '100px',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Card
            sx={{
              borderRadius: '50px',
              width: 320,
              height: { lg: 500, xl: 550 },
              display: { xs: 'none', lg: 'block' },
            }}
          >
            <CardMedia
              component="img"
              alt="Collins"
              image={'/Images/HeroPhoto.jpg'}
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Hero;
