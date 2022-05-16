import TextField from '@mui/material/TextField';
import React from 'react';
import { elevatedContainerLeft, title } from './SharedStyle';


function CustomerInfo() {

  const input = {
    margin: 10,
    width: '90%',
    heigh: '20rem'
  }

  const title2 = { ...title, margin: 0, padding: 5 }
  const elevatedContainerLeft2 = { ...elevatedContainerLeft, position: "fixed", bottom: 0, height: 70, width: '100vw', backgroundColor: 'white', zIndex: 99 }

  return (
    <footer style={elevatedContainerLeft2} >
      <p style={title2} >Info Pelanggan</p>
      <TextField id="outlined-basic" label="Nama" variant="outlined" style={input} size="small" />
    </footer>
  )
}

export default CustomerInfo

// <footer style={{color: "gray", position: "fixed", bottom: 0}}>