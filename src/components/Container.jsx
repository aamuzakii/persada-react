import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '../components/Card'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} p={2}>
      {[1,2,3,4,5].map((text, index) => (
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center'}}>
        <Card></Card>
      </Grid>
        ))}
      </Grid>
    </Box>
  );
}
