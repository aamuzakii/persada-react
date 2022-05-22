import React from 'react'
import { title } from '../SharedStyle'

function Flow() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 12, boxShadow: 'rgb(0 0 0 / 14%) 0px 1px 4px' }} >
      <div style={title} >Checkout</div>
      <div style={{ display: 'flex', alignItems: 'center' }} >
        <img src="https://lummoshop.com/img/StepperCompleted.svg" alt="" />
        <div style={{ fontSize: 10 }} >Keranjang</div>
        <div>---</div>
        <img src="https://lummoshop.com/img/StepperCompleted.svg" alt="" />
        <div>Pengiriman</div>
        <div>---</div>
        <img src="https://lummoshop.com/img/StepperCircle.svg" alt="" />
        <div>Pembayaran</div>
      </div>
    </div>
  )
}

export default Flow