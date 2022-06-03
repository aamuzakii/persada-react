import React, { useState } from 'react'
import { subTitle, elevatedContainerLeft, miniGreyFont } from '../SharedStyle'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { postOTP, requestOTP } from '../../store/actions/company';
import { useNavigate } from "react-router-dom"
import Cookies from 'universal-cookie';
import { GoogleLogin } from 'react-google-login';
import './Input.css'

const responseGoogle = (response) => {
  console.log(response);
}

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
      <p style={ subTitle } >Verifikasi nomor WhatsApp kamu untuk melanjutkan</p>
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
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', marginTop: 50 }} >
        <p style={ miniGreyFont } >atau login menggunakan</p>
        <div>
          <GoogleLogin
            clientId="1093196801427-f8f7lms0aqo2m8tq030bdp6815pf34fi.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        
      </div>
    </div>
  )
}

export default Delivery