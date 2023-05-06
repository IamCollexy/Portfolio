import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

import {
  auth,
  createUserWithEmailAndPassword,
} from '../../../../Config/Firebase';

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/crudApp-login');
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div
      style={{
        backgroundColor: '#2C1B47',
        minHeight: '100vh',
        display: 'flex',

        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <form
        style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '8px',
          minWidth: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onSubmit={onSubmit}
      >
        <h1>SignUp</h1>

        <TextField
          fullWidth
          style={{ marginBottom: '16px' }}
          label="Name"
          variant="outlined"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          style={{ marginBottom: '16px' }}
          label="Email address"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          style={{ marginBottom: '16px' }}
          label="Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: '16px' }}
        >
          Sign up
        </Button>
        <p>
          Already have an account?{' '}
          <NavLink to="/crudApp-login">Sign in</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Signup;
