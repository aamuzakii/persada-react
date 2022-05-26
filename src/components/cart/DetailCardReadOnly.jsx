import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { miniBoldFont, miniGreyFont } from '../SharedStyle';

function DetailCardReadOnly({id, name, price, image_url, qty, int_price}) {
  const blueMiniFont = { margin: 10, color: 'rgb(8, 148, 235)', fontSize: 12, fontWeight: 'bold' }

  let insideCart = useSelector( state => state.company.insideCart)
  const dispatch = useDispatch()

  return (
    <div style={{ width: '100%' }} >
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center'}} >
      <div style={{ width: '5rem', height: '5rem', display: 'flex' }} ><img src={image_url} alt="" style={{ maxWidth: '100%', objectFit: 'contain', borderRadius: '20%' }}  /></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 15, alignItems: 'center'}} >
        <div>
          <p style={ miniGreyFont } >{ name }</p>
          <p style={miniGreyFont} >{qty} x { price }</p>
        </div>
        <p style={miniBoldFont} >Rp.{int_price*qty}</p>
      </div>
    </div>
    </div>
  )
}

export default DetailCardReadOnly