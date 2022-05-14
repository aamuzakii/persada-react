import React from 'react'
import { subTitle, elevatedContainerLeft } from './SharedStyle'


function Delivery() {
  return (
    <div style={elevatedContainerLeft} >
      <p style={subTitle} >Metode Pengiriman</p>
      <p>Saat ini pengiriman hanya tersedia oleh kurir kami</p>
    </div>
  )
}

export default Delivery