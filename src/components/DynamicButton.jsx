import React, { useState } from 'react'
import {Button} from '@mui/material';

function DynamicButton({childToParent, qtyFromRedux}) {

  let initialQty = qtyFromRedux || 0

  const [qty, setQty] = useState(initialQty)


  const increment = () => {
    const newQty = qty + 1
    setQty(newQty);
    childToParent(newQty)
  }

  const decrement = () => {
    const newQty = qty - 1
    setQty(newQty);
    childToParent(newQty)
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