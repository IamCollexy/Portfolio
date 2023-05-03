// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import your custom MUI theme
import App from './App';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
