import React from 'react'
import { miniGreyFont, miniBoldFont, title, subTitle } from '../SharedStyle';

function OrderNumber() {
  const miniGreyFont2 = { ...miniGreyFont, textAlign: 'center' }
  const miniBoldFont2 = { ...miniBoldFont, color: '#1976d2', cursor: 'pointer' }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 8 }} >
      <div>
        <p style={miniBoldFont} >Persada Store</p>
        <p style={miniGreyFont} >No. Pesanan UHUHU</p>
        <p style={miniGreyFont} >5 Juni 2020</p>
      </div>
      <div>
        <p style={miniGreyFont}  >Belum Lunas</p>
      </div>
    </div>
  )
}

export default OrderNumber