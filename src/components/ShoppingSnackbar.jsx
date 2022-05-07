import React from 'react'
import './ShoppingSnackbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


function ShoppingSnackbar() {
  return (
    <div className='container' >
      <div className='grouped' >
        <ShoppingCartIcon></ShoppingCartIcon>
        <div>Rp. 10.000</div>
      </div>
      <div className='grouped'>
        <div>Checkout</div>
        <ArrowForwardIcon
          sx={{
            fontSize: 18,
          }}
        ></ArrowForwardIcon>
      </div>
    </div>
  )
}

export default ShoppingSnackbar