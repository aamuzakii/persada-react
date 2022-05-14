import React from 'react'

function Products() {
  const blueMiniFont = { margin: 10, color: 'rgb(8, 148, 235)', fontSize: 12, fontWeight: 'bold' }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 12, boxShadow: 'rgb(0 0 0 / 14%) 0px 1px 4px', boxSizing: 'border-box' }} >
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%'}} >
        <div style={{ display: 'flex', alignItems: 'center'}} >
          <div style={{ margin: 10, fontWeight: 'bold', color: 'rgb(71, 75, 107)' }} >Keranjang</div>
          <div style={{ padding: 10, backgroundColor: 'rgb(225, 228, 237)', borderRadius: 4, fontSize: 10 }} >2 Barang</div>
        </div>
        <div style={blueMiniFont} >+ Tambah Produk</div>
      </div>


      <div style={{ width: '100%' }} >
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center'}} >
        <div style={{ width: '5rem', height: '5rem', display: 'flex' }} ><img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2" alt="" style={{ maxWidth: '100%', objectFit: 'contain' }}  /></div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: 15, alignItems: 'center'}} >
          <div>
            <p style={{  fontSize: '0.9rem' }} >Motor</p>
            <p style={{ fontWeight: 'bold', fontSize: '0.8rem' }} >100.000</p>
          </div>
          <div>- 2 +</div>
          <div><svg data-testid="close-item" id="0-remove-item" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7.467h1.333m0 0H18m-10.667 0V16.8a1.333 1.333 0 0 0 1.334 1.333h6.666a1.333 1.333 0 0 0 1.334-1.333V7.467H7.333zm2 0V6.133A1.333 1.333 0 0 1 10.667 4.8h2.666a1.333 1.333 0 0 1 1.334 1.333v1.334m-4 3.333v4m2.666-4v4" stroke="#7B8793" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
        </div>
      </div>
      <div style={blueMiniFont} >+ Tambah Catatan</div>
      </div>


    </div>



    // {/* EACH PRODUCT HERE */}







  )
}

export default Products