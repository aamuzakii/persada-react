import React from 'react'
import { useNavigate } from "react-router-dom"
import Flow from '../components/cart/Flow'  
import ListProducts from '../components/cart/Products'  
import CustomerInfo from '../components/cart/CustomerInfo'  
import Address from '../components/cart/Address'  
import Delivery from '../components/cart/Delivery'  



function Cart() {
  let navigate = useNavigate();
  
  return (
    <div style={{ width: '100%' }}>
      <Flow></Flow>
      <ListProducts></ListProducts>
      <CustomerInfo></CustomerInfo>
      <Address></Address>
      <Delivery></Delivery>
    </div >
  )
}

export default Cart