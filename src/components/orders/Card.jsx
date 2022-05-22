import React from 'react'
import { title, miniBoldFont, miniGreyFont } from '../SharedStyle'

function Card() {
  return (
    <div style={{ boxSizing: 'border-box', cursor: 'pointer', padding: 11, boxShadow: 'rgb(0 0 0 / 25%) 3px 6px 12px -4px', display: 'flex', margin: 20, borderRadius: 10, flexDirection: 'column', justifyContent: 'space-evenly', border: '1px solid rgb(238, 238, 238)' }} >
      <div style={{ display: 'flex', justifyContent: 'space-between' }} >
        <div>
          <p style={{ fontSize: 16, letterSpacing: '0.5', textOverflow: 'ellipsis', margin: 0 }} >Camel Cow</p>
          <p style={{ ...miniGreyFont, marginTop: 3}} >18 May  2022, 05:42  </p>
        </div>
        <div style={{ backgroundColor: 'rgb(242, 244, 247)', padding: 3, color: '#1976d2', borderRadius: 4, maxHeight: 20, textAlign: 'center', display: 'flex', alignItems: 'center' }} >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 1.6C4.351 1.6 1.6 4.343 1.6 7.72c0 3.378 2.751 6.121 6.15 6.121 3.399 0 6.15-2.743 6.15-6.12 0-3.378-2.751-6.121-6.15-6.121zM.4 7.72C.4 3.675 3.693.4 7.75.4c4.057 0 7.35 3.275 7.35 7.32 0 4.046-3.293 7.321-7.35 7.321-4.057 0-7.35-3.275-7.35-7.32zm7.35-4.632a.6.6 0 0 1 .6.6v3.66l2.367 1.18a.6.6 0 0 1-.534 1.074l-2.7-1.344a.6.6 0 0 1-.333-.538V3.688a.6.6 0 0 1 .6-.6z" fill="#374DBA"></path></svg>
          <p style={{ marginLeft: 4 }} >Diproses</p>
        </div>
      </div>

      <div style={{ color: 'rgb(225, 228, 237)', borderWidth: 4, borderColor: 'black', border: '1px solid' }} ></div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }} >
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <img src="https://asset.kompas.com/crops/_WvzK60_BXHkdYP_7DEBuprlcuU=/211x0:1261x700/750x500/data/photo/2020/12/08/5fcfa34e6d44d.png" alt="" style={{ height: 40, width: 40, marginRight: 10, objectFit: 'cover', borderRadius: 5 }} />
          <div  >
            <p style={miniGreyFont} >Total 1 produk</p>
            <p style={miniBoldFont} >Motor x 1</p>
          </div>
        </div>
        <img src="https://lummoshop.com/img/right-arrow.svg" alt="" />
      </div>
      <div>
        <div style={miniGreyFont} >Jumlah pesanan</div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }} >
          <div style={miniBoldFont} >10.000</div>
          <div style={{ color:'rgb(255, 71, 71)', borderRadius: 3, fontSize: 12, padding: '2px 4px', border: '1px solid', marginLeft: 15 }} >Belum Lunas</div>
        </div>
      </div>
    </div>
  )
}

export default Card