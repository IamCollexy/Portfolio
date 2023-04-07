import React, { useState } from 'react';

import {
  signInWithPopup,
  auth,
  googleProvider,
  signInWithEmailAndPassword,
} from '../../../../Config/Firebase';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  console.log(auth?.currentUser?.photoURL);
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/user-dashboard');
        }
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
    navigate('/user-dashboard');
  };

  return (
    <>
      <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#EFE7DA',
        }}
      >
        <Paper
          sx={{
            width: '400px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              marginBottom: '30px',
              color: '#FF9300',
              fontWeight: 'bold',
              fontSize: '32px',
            }}
          >
            FocusApp
          </Typography>
          <form
            onSubmit={onLogin}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <TextField
              sx={{ marginBottom: '20px', width: '100%' }}
              id="email-address"
              name="email"
              type="email"
              required
              label="Email address"
              placeholder="example@example.com"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              sx={{ marginBottom: '20px', width: '100%' }}
              id="password"
              name="password"
              type="password"
              required
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControl sx={{ width: '100%', marginBottom: '20px' }}>
              <Select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>
            <Button
              sx={{
                width: '100%',
                backgroundColor: '#FF9300',
                color: 'white',
                '&:hover': { backgroundColor: '#FF7D00' },
              }}
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </form>
          <Box>
            <Button onClick={signInWithGoogle}>
              Sign In with Google
            </Button>
          </Box>
          <Typography
            variant="body"
            sx={{
              marginTop: '20px',
              color: 'gray',
              textAlign: 'center',
              fontSize: '14px',
            }}
          >
            Don't have an account yet?
            <NavLink
              to="/crudApp-signup"
              sx={{
                color: '#FF9300',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginLeft: '5px',
              }}
            >
              Sign up
            </NavLink>
          </Typography>
        </Paper>
      </Paper>
    </>
  );
};

export default Login;

// import React, { useState } from 'react';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../../../index';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { Button, Paper, TextField, Typography } from '@mui/material';

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onLogin = (e) => {
//     e.preventDefault();
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         navigate('/user-dashboard');
//         console.log(user);
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode, errorMessage);
//       });
//   };

//   return (
//     <>

{
  /* <Paper
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#EFE7DA',
        }}
      >
        <Paper
          sx={{
            width: '400px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              marginBottom: '30px',
              color: '#FF9300',
              fontWeight: 'bold',
              fontSize: '32px',
            }}
          >
            FocusApp
          </Typography>
          <form
            onSubmit={onLogin}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <TextField
              sx={{ marginBottom: '20px', width: '100%' }}
              id="email-address"
              name="email"
              type="email"
              required
              label="Email address"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              sx={{ marginBottom: '20px', width: '100%' }}
              id="password"
              name="password"
              type="password"
              required
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              sx={{
                width: '100%',
                backgroundColor: '#FF9300',
                color: 'white',
                '&:hover': { backgroundColor: '#FF7D00' },
              }}
              variant="contained"
              type="submit"
              onClick={onLogin}
            >
              Login
            </Button>
          </form>
          <Typography
            variant="body2"
            color="textSecondary"
            align="center"
            sx={{ marginTop: '20px' }}
          >
            No account yet?{' '}
            <NavLink
              to="/signup"
              sx={{
                color: '#FF9300',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Sign up
            </NavLink>
          </Typography>
        </Paper>
      </Paper> */
}
