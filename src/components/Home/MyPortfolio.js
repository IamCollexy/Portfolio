import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ApiIcon from '@mui/icons-material/Api';
import MovieIcon from '@mui/icons-material/Movie';

import { Link } from 'react-router-dom';
const data = [
  {
    id: 1,
    title: 'API-based application',
    text: 'API-based applications use external APIs to perform tasks and functions by leveraging pre-defined methods to access and interact with data or services. A weather app is an example of an API-based application that fetches real-time weather data from an external weather API and displays it in various formats. Click the button below to see my API-based application project.',
    icon: (
      <ApiIcon
        style={{
          alignSelf: 'center',
          color: '#724C9D',
        }}
        fontSize="large"
      />
    ),
    link: '/updates',
  },

  {
    id: 2,
    title: 'Movie Management System',
    text: 'A CRUD app is a software application that provides basic functionality to Create, Read, Update, and Delete data. These applications are designed to facilitate the management of data in a database, enabling users to add, view, edit, and remove records as needed.',
    icon: (
      <MovieIcon
        style={{
          alignSelf: 'center',
          color: '#724C9D',
        }}
        fontSize="large"
      />
    ),
    link: '/crudApp-signup',
  },
];

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton
      onClick={() => onClick()}
      sx={{
        position: 'absolute',
        right: { xs: '-5px', sm: '20px', md: '50px', lg: '100px' },
      }}
    >
      <ArrowForwardIosIcon
        sx={{
          color: '#761AEA',
          '&:hover': {
            fontSize: '50px',
          },
        }}
      />
    </IconButton>
  );
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <IconButton
      onClick={() => onClick()}
      sx={{
        position: 'absolute',
        left: { xs: '-5px', sm: '20px', md: '50px', lg: '100px' },
      }}
    >
      <ArrowBackIosIcon
        sx={{
          color: '#761AEA',
          '&:hover': {
            fontSize: '50px',
          },
        }}
      />
    </IconButton>
  );
};

const MyPortfolio = () => {
  return (
    <Box
      sx={{
        py: '30px',
      }}
    >
      <Divider />
      <Box
        sx={{
          my: '20px',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h6"
            fontSize={'56px'}
            fontWeight={'bold'}
            color={'#212851'}
          >
            My Portfolio
          </Typography>
          <Typography variant="caption" fontWeight={'bold'}>
            I specialize in UI design and web developement, I have
            created quite a number of web UIs.
          </Typography>
        </Box>
      </Box>

      <Carousel
        additionalTransfrom={0}
        arrows
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
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
            breakpoint: { max: 3000, min: 1200 },
            items: 2,
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
          },
          tablet: {
            breakpoint: { max: 1200, min: 600 },
            items: 1,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.map((item) => (
          <Card
            sx={{
              py: '50px',
              bgcolor: '',
              textAlign: 'center',
              maxWidth: { xs: 320, md: 400 },
              width: '100%',
              margin: '30px auto',
              boxShadow: '0 4px 8px 0 rgb(0 0 0 / 10%)',
              border: '.1px solid #f5f5f5',
              borderRadius: '10px',
              bgcolor: '#FFFFFF',
            }}
            key={item.id}
          >
            <CardContent
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  width: '100px',
                  alignSelf: 'center',
                  py: '10px',
                  backgroundColor: '#DCCAE9',
                  display: 'flex',
                  justifyContent: 'center',
                  borderRadius: '5px',
                }}
              >
                {item.icon}
              </Box>
              <h2>{item.title}</h2>
              <Typography fontWeight={'bold'} variant="caption">
                {item.text}
              </Typography>
            </CardContent>
            {/* <CardMedia
              component="img"
              height="194"
              image="/images/First Rectangle.svg"
            /> */}
            <CardActions
              sx={{
                display: 'block',
                alignItems: 'center',
              }}
            >
              <Link to={item.link}>
                <Button
                  variant="outlined"
                  sx={{
                    width: '200px',
                    textAlign: 'center',

                    color: '#761AEA',
                    borderRadius: '50px',
                  }}
                >
                  Browse
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default MyPortfolio;
