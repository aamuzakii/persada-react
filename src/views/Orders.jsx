import React from 'react'
import ChipsRow from '../components/orders/ChipsRow'
import EmptyOrder from '../components/orders/EmptyOrder'
import NavbarOrder from '../components/orders/NavbarOrder'

function Orders() {
  return (
    <>
      <NavbarOrder></NavbarOrder>
      <div style={{ margin: 15}} >
        <div style={{fontSize: '12px'}} >Semua pesananmu di Persada shop dapat dilihat di siniXXX. {process.env.REACT_APP_BASE_URI}</div>
        <div style={{ fontWeight: 'bold', color: 'rgb(102, 102, 102)' }} >Pesanan Saya</div>
      </div>
        <ChipsRow></ChipsRow>
        <EmptyOrder></EmptyOrder>
    </>
    
  )
}

export default Orders