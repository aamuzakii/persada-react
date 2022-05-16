import React from 'react'
import { useNavigate } from "react-router-dom"
import Flow from '../components/cart/Flow'  
import ListProducts from '../components/cart/Products'  
import CustomerInfo from '../components/cart/CustomerInfo'  
import Address from '../components/cart/Address'  
import Delivery from '../components/cart/Delivery'  
import Total from '../components/cart/Total'
import Bumper from '../components/cart/Bumper'



function Cart() {
  let navigate = useNavigate();
  
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