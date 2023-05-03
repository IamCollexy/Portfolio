import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import React from 'react';

const Skills = () => {
  const isSmallScreen = useMediaQuery('(max-width: 900px)');
  return (
    <Box
      sx={{
        bgcolor: '#2C1B47',
        py: '50px',
      }}
    >
      <Typography
        textAlign={'center'}
        color={'white'}
        variant="h3"
        marginBottom={5}
        fontWeight={600}
        fontSize={'56px'}
      >
        Skills
      </Typography>
      <Stack
        spacing={{ xs: 3, md: 8 }}
        direction={'row'}
        sx={{
          width: { xs: '100%', md: '50%' },
          margin: 'auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack spacing={2} alignItems={'center'}>
          <img
            src="/images/R.jpg"
            alt="DeImage"
            width={isSmallScreen ? 60 : 120}
            height={isSmallScreen ? 60 : 120}
            style={{
              borderRadius: '20px',
            }}
          />
          <Typography
            fontWeight={600}
            variant="captions"
            color="silver"
          >
            REACT.JS
          </Typography>
        </Stack>
        <Stack spacing={2} alignItems={'center'}>
          <img
            src="/Images/MUIlOGO2.jpg"
            alt="MUI"
            width={isSmallScreen ? 60 : 120}
            height={isSmallScreen ? 60 : 120}
            style={{
              borderRadius: '30px',
            }}
          />
          <Typography
            fontWeight={600}
            variant="captions"
            color="silver"
          >
            MUI
          </Typography>
        </Stack>
        <Stack spacing={2} alignItems={'center'}>
          <img
            src="/Images/nextjs.png"
            alt="NEXT"
            width={isSmallScreen ? 60 : 120}
            height={isSmallScreen ? 60 : 120}
          />
          <Typography
            fontWeight={600}
            variant="captions"
            color="silver"
          >
            NEXT.JS
          </Typography>
        </Stack>
        <Stack spacing={2} alignItems={'center'}>
          <img
            src="/Images/1492.png"
            alt="JS"
            width={isSmallScreen ? 60 : 120}
            height={isSmallScreen ? 60 : 120}
          />
          <Typography
            fontWeight={600}
            variant="captions"
            color="silver"
          >
            JAVASCRIPT
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Skills;

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   Divider,
//   Grid,
//   Stack,
//   Typography,
// } from '@mui/material';
// import React from 'react';

// const data = [
//   {
//     title: 'Basic',
//     // img: (
//     //   <CardMedia
//     //     image={'./Images/FE1.jpg'}
//     //     sx={{ height: 100, width: 100, borderRadius: 2 }}
//     //   />
//     // ),
//     packages: (
//       <Stack sx={{ color: '#800080' }}>
//         <Typography variant="h6">Web Audit</Typography>
//         <Typography variant="h6">Design</Typography>
//         <Typography Typography variant="h6">
//           Frontend Development
//         </Typography>
//       </Stack>
//     ),
//     price: '$50 - $150',
//   },
//   {
//     title: 'Standard',
//     packages: (
//       <Stack sx={{ color: '#800080' }}>
//         <Typography variant="h6">Web Audit</Typography>
//         <Typography variant="h6">Design</Typography>
//         <Typography Typography variant="h6">
//           Frontend Development
//         </Typography>
//         <Typography Typography variant="h6">
//           Hosting
//         </Typography>
//         <Typography Typography variant="h6">
//           Live Chat
//         </Typography>
//         <Typography Typography variant="h6">
//           Email Setup
//         </Typography>
//       </Stack>
//     ),
//     price: '$75 - $200',
//   },
//   {
//     title: 'Premium',
//     packages: (
//       <Stack sx={{ color: '#800080' }}>
//         <Typography variant="h6">Web Audit</Typography>
//         <Typography variant="h6">Design</Typography>
//         <Typography Typography variant="h6">
//           Frontend Development
//         </Typography>
//         <Typography Typography variant="h6">
//           Backend Development
//         </Typography>
//         <Typography Typography variant="h6">
//           FullStack Development
//         </Typography>
//         <Typography Typography variant="h6">
//           Hosting
//         </Typography>
//         <Typography Typography variant="h6">
//           Live Chat
//         </Typography>
//         <Typography Typography variant="h6">
//           Analytics
//         </Typography>
//         <Typography Typography variant="h6">
//           Maintenance Agreement
//         </Typography>
//         <Typography Typography variant="h6">
//           Email Setup
//         </Typography>
//       </Stack>
//     ),
//     price: '$75 - $200',
//   },
// ];

// const Pricing = () => {
//   return (
//     <Stack
//       spacing={2}
//       sx={{
//         textAlign: 'center',
//         p: '20px 20px',
//         bgcolor: '#761AEA',
//       }}
//     >
//       <Typography color={'white'} fontWeight={'bold'} variant="h6">
//         Pricing
//       </Typography>
//       {/* <Divider sx={{ bgcolor: 'white' }} /> */}
//       <div
//         style={{
//           width: '90%',
//           margin: '40px auto',
//         }}
//       >
//         <Grid container spacing={2}>
//           {data.map((card, index) => (
//             <Grid
//               key={index}
//               item
//               xs={12}
//               sm={4}
//               sx={{
//                 justifyContent: 'center',
//                 alignSelf: 'center',
//                 display: 'flex',
//               }}
//             >
//               <Card
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',

//                   background: '#fff',
//                   maxWidth: 250,
//                 }}
//               >
//                 <CardHeader avatar={card.img} title={card.title} />
//                 <CardContent>
//                   <Stack spacing={2}>
//                     {card.packages}
//                     <Typography variant="h5">{card.price}</Typography>
//                   </Stack>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     </Stack>
//   );
// };

// export default Pricing;
