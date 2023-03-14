import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
} from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import CodeIcon from '@mui/icons-material/Code';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
const data = [
  {
    id: 1,
    title: 'Web Design',
    text: 'At CDG web design brand, we create modern and attractive websites that help businesses stand out online. Our team of designers will work closely with you to ensure that your website reflects your brand and meets your business goals.',
    icon: (
      <CodeIcon
        sx={{
          alignSelf: 'center',
        }}
        fontSize="large"
      />
    ),
  },
  {
    id: 2,
    title: 'E-commerce',
    text: "We specialize in building custom e-commerce websites that are optimized for online sales. Whether you're starting a new online store or looking to improve an existing one, our team of developers and designers can help you achieve your sales targets.",
    icon: (
      <HomeRepairServiceIcon
        sx={{
          alignSelf: 'center',
        }}
        fontSize="large"
      />
    ),
  },
  {
    id: 3,
    title: 'Digital Marketing',
    text: 'Our digital marketing services are designed to help businesses grow their online presence and reach new customers. From SEO and PPC to social media and email marketing, we offer a range of services to help you achieve your digital marketing goals.',
    icon: (
      <HomeRepairServiceIcon
        sx={{
          alignSelf: 'center',
        }}
        fontSize="large"
      />
    ),
  },
  {
    id: 4,
    title: 'Search Engine Optimization',
    text: 'We can help your website rank higher on search engines like Google through our proven SEO strategies. Our team of experts will conduct a thorough analysis of your website and create a custom SEO plan to improve your rankings and drive more traffic to your site.',
    icon: (
      <HomeRepairServiceIcon
        sx={{
          alignSelf: 'center',
        }}
        fontSize="large"
      />
    ),
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
        right: { xs: '-5px', sm: '20px', md: '50px', lg: '300px' },
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
        left: { xs: '-5px', sm: '20px', md: '50px', lg: '300px' },
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

const AboutUs = () => {
  return (
    <Box
      sx={{
        py: '30px',
      }}
    >
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
        {data.map((item) => (
          <Card
            sx={{
              py: '50px',
              bgcolor: '',
              textAlign: 'center',
              maxWidth: { xs: 350, md: 600 },
              width: '100%',
              margin: '30px auto',
              boxShadow: '0 4px 8px 0 rgb(0 0 0 / 10%)',
              border: '.1px solid #f5f5f5',
              borderRadius: '10px',
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
                  backgroundColor: 'orange',
                  display: 'flex',
                  justifyContent: 'center',
                  borderRadius: '5px',
                }}
              >
                {item.icon}
              </Box>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </CardContent>
            <CardActions
              sx={{
                display: 'block',
                alignItems: 'center',
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  width: '200px',
                  textAlign: 'center',

                  color: '#761AEA',
                  borderRadius: '50px',
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Carousel>
    </Box>
  );
};

export default AboutUs;
