import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Planets
          </Typography>
          <Box>
            {[
              'Mercury',
              'Venus',
              'Earth',
              'Mars',
              'Jupiter',
              'Saturn',
              'Uranus',
              'Neptune',
            ].map((planet) => (
              <Button
                component={Link}
                to={`/${planet.toLowerCase()}`}
                color="inherit"
                key={planet}
                sx={{
                  fontSize: '11px',
                  fontFamily: '"Antonio", sans-serif',
                }}
              >
                {planet}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Divider sx={{ backgroundColor: 'white', opacity: 0.2 }} />
    </>
  );
};

export default Navbar;
