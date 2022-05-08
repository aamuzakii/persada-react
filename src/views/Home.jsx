import React from 'react'
import Navbar from '../components/AdvNavbar'
import SwipeableBottomDrawer from '../components/SwipeableBottomDrawer'
import Container from '../components/Container'
import ShoppingSnackbar from '../components/ShoppingSnackbar'  
import {Button, Box } from '@mui/material';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux' 
import  {setIsCartFilled}  from '../store/actions/company'

function Home() {
  const dispatch = useDispatch()
  const isCartFilled = useSelector( state => state.company.isCartFilled)
  let insideCart = useSelector( state => state.company.insideCart)

  const totalItemInCart = Object.keys(insideCart).reduce(function (previous, key) {
    return previous + insideCart[key].qty;
  }, 0);

  dispatch(setIsCartFilled(totalItemInCart))


  return (
    <div>
      <Navbar/>
      <Box
        display="flex" 
        alignItems="center"
        justifyContent="center"
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
          position: 'relative',
          transform: 'translateX(-50%)',
          display: 'inline-block',
          left: '50%',
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <SwipeableBottomDrawer></SwipeableBottomDrawer>
      {/* {JSON. stringify(insideCart)} */}
      <Container>
        
      </Container>
      {isCartFilled ? <footer style={{color: "gray", position: "fixed", bottom: 0}}>
        <ShoppingSnackbar></ShoppingSnackbar>
      </footer> : <></>}
      
    </div>
  )
}

export default Home