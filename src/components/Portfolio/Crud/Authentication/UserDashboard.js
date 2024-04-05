import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { db, getDocs, collection } from '../../../../Config/Firebase';

import Carousel from 'react-multi-carousel';
import { deleteDoc, doc } from 'firebase/firestore';
import PaystackPayment from '../../API Website/PaystackPayment';
import { Link } from 'react-router-dom';

const UserDashboard = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  }, []);

  // states to manage events
  const [eventList, setEventList] = useState([]);
  const eventsCollectionRef = collection(db, 'events');

  // Fetches the list of events on Render
  useEffect(() => {
    const getEvents = async () => {
      // Read The Data
      // Set the events
      try {
        const data = await getDocs(eventsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setEventList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getEvents();
  }, [eventsCollectionRef]);
  console.log(eventList);

  const deleteEvent = async (id) => {
    const eventDoc = doc(db, 'events', id);
    await deleteDoc(eventDoc);
    setEventList(eventList.filter((event) => event.id !== id));
  };

  return (
    <div>
      {eventList.map((event) => (
        <Box
          key={event.id}
          sx={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            marginBottom: '10px',
            boxShadow: '0 0 5px rgba(0,0,0,.3)',
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            {event.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'gray', marginBottom: '5px' }}
          >
            {event.date}
          </Typography>
          <Typography>{`Ticket: ${event.ticket}`}</Typography>
          <Button
            onClick={() => deleteEvent(event.id)}
            sx={{ marginTop: '10px' }}
            variant="contained"
          >
            Delete Event
          </Button>
        </Box>
      ))}
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
                  <Link href="/user-dashboard/payment">
                    <Button>Pay to Watch</Button>
                  </Link>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </div>
  );
};

export default UserDashboard;
