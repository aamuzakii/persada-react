import React, { useEffect } from 'react'
import ChipsRow from '../components/orders/ChipsRow'
import EmptyOrder from '../components/orders/EmptyOrder'
import NavbarOrder from '../components/orders/Appbar'
import Card from '../components/orders/Card'

function Orders() {
  function fetchOrderByStatus() {
    console.log(2)
    let url = 'http://localhost:3000/orders/index_by_status?status=testing bro'
  
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        // dispatch(setProductByCategory(result))
      })
      .catch(error => console.error('error', error));
  }

  useEffect(() => {
    console.log(11)
    fetchOrderByStatus()
  }, [])
  
  

  return (
    <>
      <NavbarOrder></NavbarOrder>
      <div style={{ margin: 15}} >
        <div style={{fontSize: '12px'}} >Semua pesananmu di Persada shop dapat dilihat di siniXXX. {process.env.REACT_APP_BASE_URI}</div>
        <div style={{ fontWeight: 'bold', color: 'rgb(102, 102, 102)' }} >Pesanan Saya</div>
      </div>
        <ChipsRow></ChipsRow>
        {/* <EmptyOrder></EmptyOrder> */}
        <Card></Card>
    </>
    
  )
}

export default Orders