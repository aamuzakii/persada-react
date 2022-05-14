import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';



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
