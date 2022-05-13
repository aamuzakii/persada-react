import React from 'react'
import { useNavigate } from "react-router-dom"



function Cart() {
  let navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/cart');
  }
    
  return (
    <div>Cart</div>
  )
}

export default Cart