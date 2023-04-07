import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { db, getDocs, collection } from '../../../../Config/Firebase';

import { deleteDoc, doc } from 'firebase/firestore';

const UserDashboard = () => {
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
  }, []);
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
    </div>
  );
};

export default UserDashboard;
