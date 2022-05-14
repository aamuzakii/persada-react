import React from 'react'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { title } from './SharedStyle'
import { margin } from '@mui/system';


function CustomerInfo() {

  const input = {
    margin: 10,
    width: '90%',
    heigh: '20rem'
  }

  const title2 = { ...title, margin: 0, padding: 5 }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: 12, boxShadow: 'rgb(0 0 0 / 14%) 0px 1px 4px' }} >
      <p style={title2} >Info Pelanggan</p>
      <TextField id="outlined-basic" label="Nama" variant="outlined" style={input} size="small" />
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">+62</InputAdornment>,
        }}
        id="outlined-basic"
        label="Nomor HP"
        variant="outlined"
        style={input}
        size="small"
      />
    </div>
  )
}

export default CustomerInfo