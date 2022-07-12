import React, { useState } from 'react'
import { subTitle, elevatedContainerLeft, miniGreyFont } from '../SharedStyle'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {Button} from '@mui/material';
import { useDispatch } from 'react-redux';
import { postOTP, requestOTP, googleLogin } from '../../store/actions/company';
import { useNavigate } from "react-router-dom"
import Cookies from 'universal-cookie';
import { GoogleLogin } from 'react-google-login';
import './Input.css'
import { authentication } from './firebase'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


function Input({setLoginState, setPhone, phone}) {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const cookies = new Cookies();

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // onSignInSubmit();
      }
    }, authentication);
  }

  const requestOTP = (e) => {
    let phoneNumber = '+62' + phone
    e.preventDefault(); 
    generateRecaptcha(); 
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication,phoneNumber,appVerifier)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult; 
      setLoginState("verification")
    }).catch(
      (error) =>  console.log(error)
    )
  }


  const handleSubmit = async () => {
    
    await dispatch(requestOTP({ phone }))
  }

  const responseGoogle = async (response) => {
    await dispatch(googleLogin(response))
    let token = cookies.get('token')
    if (token) {
      switch (cookies.get('login_referrer')) {
        case 'post_order':
          navigate("/cart")
          break;
        default:
          navigate("/")
          break;
      }
    }
  }

  let elevatedContainerLeft2 = { ...elevatedContainerLeft, color: 'blue', height: '80%', boxShadow: 'none' }

  return (
    <div style={ elevatedContainerLeft2 } >
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
      <Button variant="contained" onClick={requestOTP} id='sign-in-button'>Verifikasi</Button>
      </div>

      {/* GOOGLE LOGIN */}

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

export default Input