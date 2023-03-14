import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
  FormLabel,
  Button,
  Link,
} from '@mui/material';
import React from 'react';

const ContactUs = () => {
  return (
    <Box
      sx={{
        m: '20px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        Get in Touch
      </Typography>
      <Stack
        spacing={3}
        direction={'row'}
        sx={{
          my: '20px',

          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <FormControl>
          {/* <FormLabel>Email</FormLabel> */}

          <TextField
            label="Email"
            variant="outlined"
            placeholder="example@email.com"
            sx={{ minWidth: { md: 200 } }}
          />
        </FormControl>
        <FormControl
          sx={{
            minWidth: { xs: 100, md: 200 },
          }}
        >
          <InputLabel id="demo-simple-select-label">Plan</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={age}
            label="Plan"
            // onChange={handleChange}
          >
            <MenuItem value={'Frontend'}>Frontend</MenuItem>
            <MenuItem value={'Backend'}>Backend</MenuItem>
            <MenuItem value={'Mobile-Friendly'}>
              Mobile Friendly
            </MenuItem>
            <MenuItem value={'FullStack'}>FullStack</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <textarea
          style={{
            width: '250px',
            height: '100px',
            border: '1px solid gray',
            borderRadius: '5px',
          }}
        />
      </FormControl>
      <Button
        variant="contained"
        sx={{
          my: '20px',
          borderRadius: '50px',
          p: '10px 20px',
          width: '100px',
        }}
      >
        Send
      </Button>
      <Stack spacing={4} direction={'row'}>
        <Link href="https://www.linkedin.com/in/collins-ikpeme-40bb7b213/">
          LinkedIn
        </Link>
        <Link href="https://mail.google.com/mail/u/0/#inbox">
          Email
        </Link>
        <Link href="https://github.com/IamCollexy">Github</Link>
      </Stack>
    </Box>
  );
};

export default ContactUs;
