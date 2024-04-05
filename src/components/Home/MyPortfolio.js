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
import { Link } from 'react-router-dom';
const data = [
  {
    id: 1,
    title: "HETTIE's SHOP",
    text: 'This is a fullstack Ecommerce application,  built using NEXT js on the client-side and node js on the server',
    image: '/Images/ecommerceMockup.png',
    link: 'https://hettie-ecommerce-frontend.vercel.app/',
  },

  {
    id: 2,
    title: 'DELIVERY SERVICES',
    text: 'This is a frontend delivery service app, it involves assigning sales delivery, pickup and delivery',
    image: '/Images/deliveryAppMockup.png',
    link: 'https://do-for-me.vercel.app/',
  },
];

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    // onMove,
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
    // onMove,
    carouselState: {
      // currentSlide, deviceType
    },
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
      id="myWorks"
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
        <Typography
          variant="h3"
          color={'black'}
          fontWeight={'bold'}
          textAlign={'center'}
          fontSize={'56px'}
        >
          My Portfolio
        </Typography>
        <Box
          sx={{
            textAlign: 'center',
            width: '80%',
            m: 'auto',
          }}
        >
          <Typography variant="caption" fontWeight={'bold'}>
            I specialize in building responsive UI, functional and
            scalable website applications.
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
              <CardMedia
                component="img"
                alt="Collins"
                image={item.image}
              />
              <h2>{item.title}</h2>
              <Typography
                fontWeight={'bold'}
                color="gray"
                variant="caption"
              >
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
              <Link target="_blank" to={item.link}>
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
