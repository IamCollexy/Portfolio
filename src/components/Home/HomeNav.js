import * as React from 'react';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  styled,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { NavItemsContext } from '../../utils/NavContext';
import { v4 as uuidv4 } from 'uuid';
const drawerWidth = 240;

function Navbar(props) {
  const navItems = useContext(NavItemsContext);
  const { window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);
  // Toggle Open and closing of the drawer
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // For the Drawer Menu
  const drawer = (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Website Developer
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link key={uuidv4()} href={`#${item.id}`}>
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  // For nav links

  const ColoredLinks = styled(Link)({
    color: '#CDA9FF',
    textDecoration: 'none',
    fontSize: { xs: '14px', md: '24px' },
  });

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        position="static"
        sx={{
          bgcolor: 'transparent',
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: 'auto',
              width: '95%',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: '#FFFFFF',
                fontSize: { xs: '16px', md: '24px' },
              }}
            >
              Website Developer
            </Typography>
            <Stack spacing={2} direction={'row'}>
              {navItems.map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: { xs: 'none', sm: 'flex' },
                  }}
                >
                  <ColoredLinks to={'#'}>{item}</ColoredLinks>
                </Box>
              ))}
            </Stack>
          </Box>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: 'none' },
              marginLeft: 'auto',
              // add this to move the MenuIcon to the right
            }}
          >
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          anchor="right" // add this to move the drawer to the right
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              right: 0, // add this to move the drawer to the right
              left: 'auto', // add this to move the drawer to the right
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

export default Navbar;
