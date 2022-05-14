import React from 'react'
import { title, elevatedContainerLeft } from './SharedStyle'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Address() {
  const title2 = { ...title, margin: 0, padding: 5 }

  return (
    <div style={elevatedContainerLeft} >
      <p style={title2} >Alamat</p>
      <Button variant="outlined"  style={{ margin: '10vw', boxSizing: 'border-box' }} startIcon={<AddCircleOutlineIcon />}>
        Tambah Alamat Pengiriman
      </Button>
    </div>
  )
}

export default Address