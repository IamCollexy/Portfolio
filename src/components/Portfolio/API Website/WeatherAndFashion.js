import {
  // styled,
  Stack,
  Box,
  Grid,
  Typography,
  CardMedia,
  Card,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-multi-carousel/lib/styles.css';

// Call the OpenWeatherMap API to get the current weather information
const apiKey = '55346314d85095238defdeee438085aa';
// const fashionApiKey = '6Ctn4PsQfl6K6fpxRHi3h2cfG6LOPK521KIa_ACJXN0';
// console.log(apiKey);
// console.log(fashionApiKey);
function WeatherAndFashion() {
  const [weather, setWeather] = useState({});
  // const [fashion, setFashion] = useState([]);

  useEffect(() => {
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
      // console.log(weatherUrl);
      // Get the current weather information

      axios
        .get(weatherUrl)
        .then((res) => {
          console.log(res);
          const locationCountry = res.data.sys.country;
          const locationState = res.data.name;
          const temperature = res.data.main.temp;
          const humidity = res.data.main.humidity;
          const windSpeed = res.data.wind.speed;

          // Update state with weather information
          setWeather({
            locationCountry,
            locationState,
            temperature,
            humidity,
            windSpeed,
          });
        })
        .catch((error) => console.log(error));

      // 2
      // const fashionUrl = `https://api.unsplash.com/photos/?client_id=${fashionApiKey}`;

      // Get the latest fashion trends
      //   axios
      //     .get(fashionUrl)
      //     .then((response) => {
      //       // console.log(response);
      //       const fashion = response.data;

      //       // Update state with fashion trends
      //       // setFashion(fashion);
      //     })
      //     .catch((error) => console.log(error));
    }

    function error(error) {
      console.log(error);
    }

    // Get the user's location
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  // Carorusel Responsiveness
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3,
  //     slidesToSlide: 3, // optional, default to 1.
  //   },
  //   sm_desktop: {
  //     breakpoint: { max: 1200, min: 900 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 900, min: 464 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };

  return (
    <Box
      sx={{
        bgcolor: '#DCCAE9',
      }}
    >
      <Grid
        container
        sx={{
          padding: '20px',
          alignItems: 'center',
        }}
      >
        <Grid item xs={6}>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(147, 86, 160, 1)',
              fontWeight: 'bold',
              fontSize: {
                xs: '12px',
                sm: '16px',
                md: '20px',
                lg: '30px',
              },
            }}
          >
            Discover the perfect outfit for every weather condition!
            This page showcases my ability to connect with APIs,
            retrieve real-time weather data, and integrate dynamic
            fashion recommendations based on your location. Explore
            and stay fashion-forward while staying weather-ready!
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              borderRadius: { xs: 2, md: 5, lg: 10 },
            }}
          >
            <CardMedia
              component={'img'}
              image={'/images/HeroWeather&Fashion.svg'}
            />
          </Card>
        </Grid>
        <Box>
          <Typography variant="h6">Weather:</Typography>
          <Stack direction={'row'} spacing={2}>
            {weather &&
              weather.map((data) => (
                <Box key={data.id}>
                  <Typography variant="subtitle1">
                    {data.name}
                  </Typography>
                  <Typography variant="body1">
                    Temperature: {data.temperature} &#8451;
                  </Typography>
                  <Typography variant="body1">
                    Humidity: {data.humidity} %
                  </Typography>
                </Box>
              ))}
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
}

export default WeatherAndFashion;
