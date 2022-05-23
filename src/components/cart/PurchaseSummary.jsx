import React from 'react'
import { subTitle, elevatedContainerLeft, miniGreyFont } from '../SharedStyle'



function PurchaseSummary() {
  return (
    <div style={ elevatedContainerLeft } >
      <p style={ subTitle } >Detail Pembayaran</p>
      <p style={ miniGreyFont } >Subtotal</p>
    </div>
  )
}

export default PurchaseSummary