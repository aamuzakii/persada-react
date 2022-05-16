import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Address from '../components/cart/Address'
import Bumper from '../components/cart/Bumper'
import CustomerInfo from '../components/cart/CustomerInfo'
import Delivery from '../components/cart/Delivery'
import Flow from '../components/cart/Flow'
import ListProducts from '../components/cart/Products'
import Total from '../components/cart/Total'



function Cart() {
  let navigate = useNavigate();

  const [isConfirmation, setIsConfirmation] = useState(false)
  
  return (
    <div style={{ width: '100%' }}>
      <Flow></Flow>
      <ListProducts></ListProducts>
      <CustomerInfo></CustomerInfo>
      <Address></Address>
      <Delivery></Delivery>
      <Total></Total>
      <Bumper></Bumper>
    </div >
  )
}

export default Cart