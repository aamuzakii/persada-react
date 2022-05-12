import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Switch, Route, Link } from 'react-router-dom'


import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function NavbarOrder() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link style={{textDecoration: 'none', color: 'white'}} to="/"><ArrowBackSharpIcon></ArrowBackSharpIcon></Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <SearchOutlinedIcon sx={{ margin: 1 }} ></SearchOutlinedIcon>
          <ShoppingCartIcon></ShoppingCartIcon>
        </Toolbar>
      </AppBar>
    </Box>
  );
}