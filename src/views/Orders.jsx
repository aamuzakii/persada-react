import React, { useEffect } from 'react'
import ChipsRow from '../components/orders/ChipsRow'
import EmptyOrder from '../components/orders/EmptyOrder'
import NavbarOrder from '../components/orders/Appbar'
import Card from '../components/orders/Card'
import {fetchOrderByStatus} from '../store/actions/company'
import { useDispatch, useSelector } from 'react-redux'

function Orders() {

  const dispatch = useDispatch()
  let orders = useSelector( state => state.company.orderByType)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('type') || 'all'
    dispatch(fetchOrderByStatus(status))
  }, [])
  

  return (
    <>
      <NavbarOrder></NavbarOrder>
      <div style={{ margin: 15}} >
        <div style={{fontSize: '12px'}} >Semua pesananmu di Persada shop dapat dilihat di sini.</div>
        <div style={{ fontWeight: 'bold', color: 'rgb(102, 102, 102)' }} >Pesanan Saya</div>
      </div>
        <ChipsRow></ChipsRow>
        <BottomPart orders={orders} ></BottomPart>
    </>
  )
}

function BottomPart({orders}) {
  if (orders == null) {
    return null
  } else if (orders.length === 0) {
    return <EmptyOrder></EmptyOrder>
  } else {
    return (
      <>
        {
          orders.map((order, i) => (
            <Card key={i} order={order} ></Card>
          )) 
        }
      </>
    )
  }
}

export default Orders 