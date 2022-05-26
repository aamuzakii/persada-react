import React from 'react'
import DetailCardReadOnly from './DetailCardReadOnly';
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { objToArr } from '../../helpers/Function'

function ListProductReadOnly() {
  const blueMiniFont = { margin: 10, color: 'rgb(8, 148, 235)', fontSize: 12, fontWeight: 'bold' }
  
  let insideCart = useSelector( state => state.company.insideCart)
  let insideCartArray = objToArr(insideCart)

  let navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  }

  const typeQty = insideCartArray.length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 12, boxShadow: 'rgb(0 0 0 / 14%) 0px 1px 4px', boxSizing: 'border-box' }} >
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%'}} >
        <div style={{ display: 'flex', alignItems: 'center'}} >
          <div style={{ margin: 10, fontWeight: 'bold', color: 'rgb(71, 75, 107)' }} >Produk Pesanan</div>
        </div>
      </div>

      {/* BELOW ARE PRODUCTS */}
      
      {
        insideCartArray.map(({id, name, price, image_url, qty, int_price})=> (
          <DetailCardReadOnly id={id} name={name} price={price} image_url={image_url} key={id} qty={qty} int_price={int_price} ></DetailCardReadOnly>
        ))
      }

    </div>

  )
}

export default ListProductReadOnly