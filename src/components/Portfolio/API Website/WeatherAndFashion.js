import { styled, Stack } from '@mui/material';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import dotenv from 'dotenv';
// dotenv.config();
const StyledStack = styled(Stack)({
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});
// Call the OpenWeatherMap API to get the current weather information
const apiKey = '55346314d85095238defdeee438085aa';
const fashionApiKey = '6Ctn4PsQfl6K6fpxRHi3h2cfG6LOPK521KIa_ACJXN0';
// console.log(apiKey);
// console.log(fashionApiKey);
function WeatherAndFashion() {
  const [weather, setWeather] = useState({});
  const [fashion, setFashion] = useState([]);

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

      const fashionUrl = `https://api.unsplash.com/photos/?client_id=${fashionApiKey}`;

      // Get the latest fashion trends
      axios
        .get(fashionUrl)
        .then((response) => {
          // console.log(response);
          const fashion = response.data;

          // Update state with fashion trends
          setFashion(fashion);
        })
        .catch((error) => console.log(error));
    }

    function error(error) {
      // console.log(error);
    }

    // Get the user's location
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    sm_desktop: {
      breakpoint: { max: 1200, min: 900 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 900, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      {weather && (
        <StyledStack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          my="20px"
        >
          <h4>Country:</h4>
          <p>{weather.locationCountry}</p>
          <h4>State:</h4>
          <p>{weather.locationState}</p>
          <h4>Humidity:</h4>
          <p>{weather.humidity}%</p>
          <h4>Temperature:</h4>
          <p>{weather.temperature}&#8451;</p>
          <h4>Wind Speed:</h4>
          <p>{weather.windSpeed} m/s</p>
        </StyledStack>
      )}
      {fashion.length > 0 ? (
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
        >
          {fashion.map((item) => (
            <div
              style={{
                textAlign: 'center',
              }}
              key={item.id}
            >
              <img
                style={{ borderRadius: '5px' }}
                src={item.urls.small_s3}
                alt="updates"
              />
              <div>
                <h3>{item.alt_description}</h3>
                <p>Updated at: {item.updated_at}</p>
                <p>Promoted at: {item.promoted_at}</p>
                {/* <p>Width: {item.width}</p> */}
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No fashion data available</p>
      )}
    </>
  );
}

export default WeatherAndFashion;
