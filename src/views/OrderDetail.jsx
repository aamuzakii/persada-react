import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import Address from '../components/cart/Address'
import Bumper from '../components/cart/Bumper'
import CustomerInfo from '../components/cart/CustomerInfo'
import Delivery from '../components/cart/Delivery'
import Flow from '../components/order_detail/Flow'
import ListProducts from '../components/cart/Products'
import ListProductReadOnly from '../components/cart/ListProductReadOnly'
import PurchaseSummary from '../components/cart/PurchaseSummary'
import Total from '../components/cart/Total'
import SimpleHeader from '../components/SimpleHeader'
import { fetchOrderDetail } from '../store/actions/company'
import { useDispatch } from 'react-redux'


function OrderDetail() {

  const dispatch = useDispatch()

  let { id } = useParams()

  useEffect(()=> {
    dispatch(fetchOrderDetail(id))
  },[])


  return (
    <div>
    <SimpleHeader title="Detail Pesanan" ></SimpleHeader>
    <Flow></Flow>
    <ListProductReadOnly consumer='order_detail_page' ></ListProductReadOnly>
    <Delivery></Delivery>
    <PurchaseSummary></PurchaseSummary>
    <Bumper></Bumper>

    </div>
  )
}

export default OrderDetail