import React from 'react'
import ChipsRow from '../components/ChipsRow'
import EmptyOrder from '../components/EmptyOrder'
import NavbarOrder from '../components/NavbarOrder'

function Orders() {
  return (
    <>
      <NavbarOrder></NavbarOrder>
      <div style={{ margin: 15}} >
        <div style={{fontSize: '12px'}} >Semua pesananmu di online shop Persada dapat dilihat di sini.</div>
        <div style={{ fontWeight: 'bold', color: 'rgb(102, 102, 102)' }} >Pesanan Saya</div>
      </div>
        <ChipsRow></ChipsRow>
        <EmptyOrder></EmptyOrder>
    </>
    
  )
}

export default Orders