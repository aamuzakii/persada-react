import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { elevatedContainerLeft, miniGreyFont, title } from './SharedStyle';
import { useSelector } from 'react-redux'
import { useCountTotalPriceInsideCartArray } from '../../helpers/Function'


function CustomerInfo() {

  const title2 = { ...title, margin: 0, padding: 5 }
  const elevatedContainerLeft2 = { ...elevatedContainerLeft, position: "fixed", bottom: 0, height: 90, width: '100vw', backgroundColor: 'white', zIndex: 99, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', boxSizing: 'border-box' }

  let insideCartArray = useSelector( state => state.company.insideCartArray)

  let totalPriceInCart = useCountTotalPriceInsideCartArray(insideCartArray)

  return (
    <footer style={elevatedContainerLeft2} >
      <div>
        <p style={miniGreyFont} >Total Pembayaran</p>
        <div><Typography variant="overline" display="block">
        {totalPriceInCart}
      </Typography></div>
      </div>
      <div><Button variant="contained" disableElevation sx={{ width: '100%', height: 30 }} >Lanjut</Button></div>
    </footer>
  )
}

export default CustomerInfo

// <footer style={{color: "gray", position: "fixed", bottom: 0}}>