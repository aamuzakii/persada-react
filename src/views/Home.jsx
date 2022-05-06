import React from 'react'
// import Card from '../components/Card'
import Navbar from '../components/AdvNavbar'
import SwipeableEdgeDrawer from '../components/SwipeableEdgeDrawer'
import Card from '../components/Card'
import TemporaryDrawer from '../components/TemporaryDrawer'
import Container from '../components/Container'
import {Button, Box } from '@mui/material';

function Home() {

  return (
    <div>
      <Navbar/>
      {/* <TemporaryDrawer></TemporaryDrawer> */}
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
      <SwipeableEdgeDrawer></SwipeableEdgeDrawer>
      <Container>
        
      </Container>
    </div>
  )
}

export default Home