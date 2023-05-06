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
} from '@mui/material';

import 'react-multi-carousel/lib/styles.css';
import WeatherFashion from './WeatherAndFashion';

// import dotenv from 'dotenv';
// dotenv.config();

function ApiBased() {
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
          Welcome to Collins Updates Center
        </Typography>
      </Box>
      <WeatherFashion />
    </Box>
  );
}

export default ApiBased;
