import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import React from 'react';
import { elevatedContainerLeft, miniGreyFont, title } from './SharedStyle';
import { useCountTotalPriceInsideCartArray } from '../../helpers/Function'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../../store/actions/company';

function CustomerInfo({setIsConfirmation}) {

  const dispatch = useDispatch()

  const elevatedContainerLeft2 = { ...elevatedContainerLeft, position: "fixed", bottom: 0, height: 90, width: '100vw', backgroundColor: 'white', zIndex: 99, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', boxSizing: 'border-box' }

  let insideCartArray = useSelector( state => state.company.insideCartArray)
  let customerInfo = useSelector( state => state.company.customerInfo)

  let totalPriceInCart = useCountTotalPriceInsideCartArray(insideCartArray)

  const navigate = useNavigate();

  let orderInfo = {
    additional_info: 'testing bro',
    order_note: 'testing bro',
    delivery_note: 'testing bro',
    delivery_date: 'testing bro',
    order_number: 'testing bro',
    status: 'unpaid',
    delivery_cost: 'self_define',
    subtotal: 'testing bro',
    total: 'testing bro',
  }

  let order_aggregate = {
    information: orderInfo,
    items: insideCartArray,
    customer: customerInfo
  }


  const handleClick = () => {
    // setIsConfirmation(true)
    dispatch(postOrder(order_aggregate))
  }
  return (
    <footer style={elevatedContainerLeft2} >
      <div>
        <p style={miniGreyFont} >Total Pembayaran</p>
        <div><Typography variant="overline" display="block">{totalPriceInCart}</Typography></div>
      </div>
      <div><Button onClick={handleClick}  variant="contained" disableElevation sx={{ width: '100%', height: 30 }} >Lanjut</Button></div>
    </footer>
  )
}

export default CustomerInfo