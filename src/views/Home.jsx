import React from 'react'
// import Card from '../components/Card'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import { Container, Button, Box } from '@mui/material';

function Home() {

  if (1) return (
    <div className="d-flex flex-wrap" >
      <Navbar/>
      <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
      <Container>
        <Card>
        </Card>
        
      </Container>
    </div>
  )
}

export default Home