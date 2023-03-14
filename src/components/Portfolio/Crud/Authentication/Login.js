import { Card, Stack } from '@mui/material';
import React from 'react';

const Login = () => {
  return (
    <>
      <Card>
        <form>
          <Stack spacing={2}>
            <label htmlFor="usernaame">Username </label>
            <input type="email" id="username" />
            <button>submit</button>
          </Stack>
        </form>
      </Card>
    </>
  );
};

export default Login;
