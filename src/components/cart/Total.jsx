import React from 'react';
import { elevatedContainerLeft, title, miniGreyFont } from './SharedStyle';
import {Button} from '@mui/material';


function CustomerInfo() {

  const title2 = { ...title, margin: 0, padding: 5 }
  const elevatedContainerLeft2 = { ...elevatedContainerLeft, position: "fixed", bottom: 0, height: 90, width: '100vw', backgroundColor: 'white', zIndex: 99, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', boxSizing: 'border-box' }

  return (
    <footer style={elevatedContainerLeft2} >
      <div>
        <p style={miniGreyFont} >Total Pembayaran</p>
        <div>Rp. 100.000</div>
      </div>
      <div><Button variant="contained" disableElevation sx={{ width: '100%', height: 30 }} >Lanjut</Button></div>
    </footer>
  )
}

export default CustomerInfo

// <footer style={{color: "gray", position: "fixed", bottom: 0}}>