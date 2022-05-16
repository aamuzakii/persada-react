import React from 'react'
import './ShoppingSnackbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
import { countTotalPriceInsideCartArray } from '../helpers/Function'

function ShoppingSnackbar() {
  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/cart');
  }
  let insideCartArray = useSelector( state => state.company.insideCartArray)

  return (
    <div className='container' onClick={handleClick} >
      <div className='grouped' >
        <ShoppingCartIcon></ShoppingCartIcon>
        <div>{countTotalPriceInsideCartArray(insideCartArray)}</div>
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