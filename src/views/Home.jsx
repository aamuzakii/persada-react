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

  return (
    <div>
      <Navbar isShowSideDrawer={isShowSideDrawer} />
      <div style={{ width: '100%', height: 233, display: 'flex', justifyContent: 'center', overflow: 'hidden', marginBottom: 15 }} >
        <img style={{ height: 300 }}  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" alt=""  />
      </div>
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