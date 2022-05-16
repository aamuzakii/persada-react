import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from './Card'
import { useSelector } from 'react-redux'


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  let productToShow = useSelector( state => state.company.productToShow)
  let insideCart = useSelector( state => state.company.insideCart)

  productToShow.map(getArrayValues);

  function getArrayValues(item) {
    let a = insideCart[item.id]
    if (a) {
      item.qty = insideCart[item.id].qty
    }
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} p={2}>
      {productToShow.map((obj, index) => (
        <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center'}} key={index} >
          <Card name={obj.name} price={obj.price} image_url={obj.image_url} id={obj.id} qty={obj.qty} int_price={obj.int_price} ></Card>
          {/* <p>{obj.id}</p> */}
        </Grid>
      ))}
      </Grid>
    </Box>
  );
}
