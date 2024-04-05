import React, { useState } from 'react';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PdfIcon from '@mui/icons-material/PictureAsPdf';
import VideoIcon from '@mui/icons-material/Movie';
import ImageIcon from '@mui/icons-material/Image';
import DocumentIcon from '@mui/icons-material/Description';
import { useDropzone } from 'react-dropzone';
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Box,
  Stack,
} from '@mui/material';
import {
  db,
  signOut,
  auth,
  storage,
  deleteUser,
  collection,
} from '../../../../Config/Firebase';
import { useNavigate } from 'react-router-dom';
import { addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';

// Main Component function
const Admin = () => {
  const [eventTitle, setEventTitle] = useState([]);
  const [eventFeatures, setEventFeatures] = useState('');
  const [eventVenue, setEventVenue] = useState('');
  const [eventTicket, setEventTicket] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [eventFile, setEventFile] = useState(null);
  const [fileType, setFileType] = useState(null);

  // updateTitle State
  // const [updatedTitle, setUpdatedTitle] = useState("");

  // To get a collection created in firebase
  const eventsCollectionRef = collection(db, 'events');

  // To handle form Submission, eventsData posting to firebase, clear fields,
  // handle file changes and draganddrop file icon changes and navigate to signup page
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(eventsCollectionRef, {
        title: eventTitle,
        features: eventFeatures,
        venue: eventVenue,
        ticket: `${eventTicket}$`,
        date: eventDate,
        time: eventTime,
        file: fileType,
        type: fileType,
        userId: auth?.currentUser?.uid,
      });
    } catch (err) {
      console.error(err);
    }
    UploadFile();
    setEventTitle('');
    setEventFeatures('');
    setEventVenue('');
    setEventTicket('');
    setEventFile(null);
    setFileType(null);
  };

  // To upload a file to firebase storage
  const UploadFile = async () => {
    if (!eventFile) return;
    const filesFolderRef = ref(
      storage,
      `eventFiles/${eventFile.name}`
    );
    try {
      await uploadBytes(filesFolderRef, eventFile);
    } catch (err) {
      console.error(err);
    }
  };
  // updateEventTitle
  // const updateEventTitle = () => {
  //   const eventDoc = doc(db, "movies", id)
  //   await updateDoc(eventDoc, { title: updatedTitle,});
  //     };

  // Handle file change
  const handleFileChange = (acceptedFiles) => {
    if (acceptedFiles.length) {
      setEventFile(acceptedFiles[0]);
      const fileType = acceptedFiles[0].type.split('/')[0];
      setFileType(fileType);
    }
  };

  const {
    getRootProps,
    getInputProps,
    // , isDragActive
  } = useDropzone({
    onDrop: handleFileChange,
  });

  // Changing Icons that is rendered to represent the file
  let fileIcon;
  switch (fileType) {
    case 'application':
      fileIcon = <DocumentIcon />;
      break;
    case 'image':
      fileIcon = <ImageIcon />;
      break;
    case 'video':
      fileIcon = <VideoIcon />;
      break;
    case 'pdf':
      fileIcon = <PdfIcon />;
      break;
    default:
      fileIcon = <UploadFileIcon />;
  }
  const navigate = useNavigate();

  // To logout and Delete User
  const Logout = async () => {
    signOut(auth)
      .then(() => {
        navigate('/crudApp-signup');
      })
      .catch((error) => {
        console.error(error);
      });
    const user = auth.currentUser;
    if (user) {
      await deleteUser(user);
      // User account has been deleted.
    } else {
      // No user is signed in.
    }
  };

  // const Logout = async () => {
  //   try {
  //     await signOut(auth);
  //   } catch (err) {
  //     console.error(err);
  //   }

  //   navigate('/crudApp-signup');
  // };
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Admin Page
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Event Title"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Event Features"
              value={eventFeatures}
              onChange={(e) => setEventFeatures(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Event Venue"
              value={eventVenue}
              onChange={(e) => setEventVenue(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Event Ticket"
              value={eventTicket}
              onChange={(e) => setEventTicket(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="date"
              // label="Event Date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="time"
              // label="Event Time"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Box
              {...getRootProps()}
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                borderRadius: 1,
                bgcolor: 'background.paper',
                border: '1px dashed grey',
                cursor: 'pointer',
              }}
            >
              <input
                {...getInputProps()}
                onChange={(e) => setEventFile(e.target.files)}
              />
              {fileIcon}
              <Typography variant="body1" sx={{ ml: 2 }}>
                {eventFile ? eventFile.name : 'Upload event file'}
              </Typography>
              {eventFile && (
                <Button
                  variant="contained"
                  color="error"
                  sx={{ ml: 2 }}
                  onClick={() => setEventFile(null)}
                >
                  Delete
                </Button>
              )}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={2} direction={'row'}>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Button variant="contained" onClick={Logout}>
                Logout
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
    </Container>
    // To update eventTitle
    // <input type="text" placeholder="updateEvent" onChange={(e) => setUpdatedTitle(e.target.value)} />
    // <Button onClick={()=> updateEventTitle(event.id)}> Update Title </Button>
  );
};

export default Admin;
