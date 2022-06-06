import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/home/AdvNavbar'
import Container from '../components/home/Container'
import ShoppingSnackbar from '../components/home/ShoppingSnackbar'
import SwipeableBottomDrawer from '../components/home/SwipeableBottomDrawer'
import { setIsCartFilled } from '../store/actions/company'

function Home() {
  const dispatch = useDispatch()
  const isCartFilled = useSelector( state => state.company.isCartFilled)
  let insideCart = useSelector( state => state.company.insideCart)

  const totalItemInCart = Object.keys(insideCart).reduce(function (previous, key) {
    return previous + insideCart[key].qty;
  }, 0);

  useEffect(() => {
    dispatch(setIsCartFilled(totalItemInCart))
  }, [insideCart])
  
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 600px)").matches
  )

  useEffect(() => {
    window
    .matchMedia("(min-width: 600px)")
    .addEventListener('change', e => setMatches( e.matches ));
  }, []);

  let isShowSideDrawer = !matches

  const imageStyle = { 
    // height: 300,
    height: 'fit-content',
    width: '100%',
   }

   const imageUrl = 'https://media.istockphoto.com/photos/supermarket-aisle-blurred-background-with-laptop-computer-and-cart-on-picture-id963747918?k=20&m=963747918&s=612x612&w=0&h=uQA155YzW--kdQT5Qg-darvrSy4cuOPC6lOFoFkvrxg='

  return (
    <div>
      <Navbar isShowSideDrawer={isShowSideDrawer} />
      <div style={{ width: '100%', height: 233, display: 'flex', justifyContent: 'center', overflow: 'hidden', marginBottom: 15 }} >
        <img style={imageStyle}  src={imageUrl} alt=""  />
      </div>
      <SwipeableBottomDrawer></SwipeableBottomDrawer>
      {/* {JSON. stringify(insideCart)} */}
      <Container>
        
      </Container>
      { 
        isCartFilled ? <footer style={{color: "gray", position: "fixed", bottom: 0}}><ShoppingSnackbar/></footer> : <></>
      }
      
    </div>
  )
}

export default Home