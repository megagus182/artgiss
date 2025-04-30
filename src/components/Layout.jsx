import React from 'react';
import NavBar from './NavBar';
import { Box } from '@mui/material';

const Layout = ({ children }) => {

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;