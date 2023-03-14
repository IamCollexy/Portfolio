import React, { useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/firestore';

const Admin = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // const eventsRef = firebase.firestore().collection('events');
    // await eventsRef.add({ name, description, date });
    // setName('');
    // setDescription('');
    // setDate('');
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Event Name"
          value={name}
          // onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Description"
          value={description}
          // onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event Date"
          value={date}
          // onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default Admin;
