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

import React from 'react';
import {
  // Grid,
  // Card,
  // CardMedia,
  // CardContent,
  Typography,
  Box,
  // Button,
} from '@mui/material';

import 'react-multi-carousel/lib/styles.css';
import WeatherFashion from './WeatherAndFashion';

function ApiBased() {
  return (
    <Box
      sx={{
        bgcolor: '#DCCAE9',
      }}
    >
      <Box
        sx={{
          py: '20px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#2C1B47',
            fontFamily: 'sans',
            border: ' 1px solid #6F8486',
            borderRadius: '50px',
            width: { xs: '80%', md: '70%' },
            margin: '0 auto',
            padding: '10px',
          }}
          variant="h6"
        >
          Weather and Fashion API Integration Page!
        </Typography>
      </Box>
      <WeatherFashion />
    </Box>
  );
}

export default ApiBased;
