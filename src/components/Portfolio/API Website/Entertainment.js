// import React, { useState, useEffect } from 'react';
// import {
//   Grid,
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   Button,
// } from '@mui/material';

// function LandingPage() {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     fetch('https://swapi.dev/api/films/')
//       .then((response) => response.json())
//       .then((data) => setMovies(data.results))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <Grid container spacing={2}>
//       {movies.map((movie) => (
//         <Grid item xs={12} sm={6} md={4} key={movie.episode_id}>
//           <Card>
//             <CardMedia
//               component="img"
//               height="140"
//               image={`https://starwars-visualguide.com/assets/img/films/${movie.episode_id}.jpg`}
//               alt={movie.title}
//             />
//             <CardContent>
//               <Typography variant="h5" component="div">
//                 {movie.title}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {movie.opening_crawl.substring(0, 150)}...
//               </Typography>
//               <Button
//                 variant="contained"
//                 href={`/movies/${movie.episode_id}`}
//               >
//                 Stream now
//               </Button>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }

// export default LandingPage;

import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  Link as Linker,
} from '@mui/material';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WeatherFashion from './WeatherAndFashion';
import { Link } from 'react-router-dom';
import PaystackPayment from './PaystackPayment';
// import dotenv from 'dotenv';
// dotenv.config();

function LandingPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Box
      sx={{
        bgcolor: '#D1BBB7',
        padding: '50px 10px',
      }}
    >
      <Box
      // sx={{
      //   display: 'flex',
      //   justifyContent: 'center',
      // }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#763528',
            fontFamily: 'sans',
            border: ' 1px solid #BF8486',
            borderRadius: '50px',
          }}
          variant="h3"
        >
          Welcome to Collexy Updates Center
        </Typography>
      </Box>
      <WeatherFashion />
      <Box
        sx={{
          // display: 'flex',
          // alignItems: 'center',
          width: '50%',
          margin: 'auto',
        }}
      >
        <Carousel
          additionalTransfrom={0}
          arrows
          // customRightArrow={<CustomRightArrow />}
          // customLeftArrow={<CustomLeftArrow />}
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={true}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
            },
          }}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          {movies.map((movie) => (
            <Box key={movie.episode_id}>
              <Box display={'none'}>
                <PaystackPayment onDemand={movie} />
              </Box>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://starwars-visualguide.com/assets/img/films/${movie.episode_id}.jpg`}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {movie.opening_crawl.substring(0, 150)}...
                  </Typography>
                  <Linker href="/portfolio/payment">
                    <Button>Pay to Watch</Button>
                  </Linker>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}

export default LandingPage;
