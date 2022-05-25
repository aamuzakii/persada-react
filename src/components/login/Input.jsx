import React, { useState } from 'react'
import { subTitle, elevatedContainerLeft, miniGreyFont } from '../SharedStyle'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { postOTP, requestOTP } from '../../store/actions/company';
import { useNavigate } from "react-router-dom"
import Cookies from 'universal-cookie';

function Delivery() {

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [phone, setPhone] = useState('')

  const handleSubmit = async () => {
    await dispatch(requestOTP({ phone }))
    const cookies = new Cookies();
    let token = cookies.get('token')
    if (token) navigate("/")
  }

  return (
    <div style={ elevatedContainerLeft } >
      <p style={ subTitle } >Metode Pengiriman</p>
      <p style={ miniGreyFont } >Saat ini pengiriman hanya tersedia oleh kurir kamixx</p>
      <div style={{ display: 'flex' }} >
      <TextField
        InputProps={{
          startAdornment: <InputAdornment position="start">+62</InputAdornment>,
        }}
        id="outlined-basic"
        label="Nomor HP"
        variant="outlined"
        style={{ marginRight: 10 }}
        size="small"
        value={phone}
        onInput={e => setPhone(e.target.value)}
      />
      <Button variant="contained" onClick={handleSubmit} >Verifikasi</Button>
      </div>
    </div>
  )
}

export default Delivery