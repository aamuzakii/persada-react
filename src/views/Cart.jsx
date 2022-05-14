import React from 'react'
import { useNavigate } from "react-router-dom"
import Flow from '../components/cart/Flow'  
import ListProducts from '../components/cart/Products'  
import CustomerInfo from '../components/cart/CustomerInfo'  



function Cart() {
  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/cart');
  }
    
  return (
    <div style={{ width: '100%' }}>
      <Flow></Flow>
      <ListProducts></ListProducts>
      <CustomerInfo></CustomerInfo>
    </div >
  )
}

export default Cart