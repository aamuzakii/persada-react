import React, { useState } from 'react'
import {Button} from '@mui/material';
import { height } from '@mui/system';

function DynamicButton() {

  const [qty, setQty] = useState(0)

  const increment = () => {
    setQty(qty + 1)
  }

  const decrement = () => {
    setQty(qty - 1)
  }

  if (qty < 1) {
    return (
      <>
        <Button variant="contained" disableElevation sx={{ width: '100%', height: 30 }} onClick={increment}>
          + Beli
        </Button>
      </>
    )
  } else {
    return (
      <>
        <div style={{ display: 'flex', border: '1px solid rgb(217, 217, 217)', justifyContent: 'space-around', fontSize: 18, borderRadius: 4}}>
          <div onClick={decrement} >—</div>
          <div>{ qty}</div>
          <div onClick={increment} >+</div>
        </div>
      </>
    )
  }
  
}

export default DynamicButton