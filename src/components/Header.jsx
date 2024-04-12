/* eslint-disable no-unused-vars */
import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';

// Use styled function to create a custom styled AppBar
const CustomAppBar = styled(AppBar)({
  background: '#060606',
  height: '10%',
});

const Header = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <marquee direction="forward">Mono-Editor</marquee> 
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
