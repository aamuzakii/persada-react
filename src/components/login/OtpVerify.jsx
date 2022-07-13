import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import { verifyFirebaseOTP } from '../../store/actions/company';
import { miniGreyFont } from '../SharedStyle';


function OtpVerify({ phone }) {

  const [code, setCode] = useState(new Array(4).fill(""));

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleChange = (e) => {

    let element = e.target
    let nativeEvent = e.nativeEvent
    if (isNaN(element.value)) return false;

    // handle special weird event
    if (element.id === 'digit-1' && nativeEvent.inputType === 'deleteContentBackward') return false

    // sudah dihandle dibawah, biar ga dobel
    if (nativeEvent.code === 'Backspace' && element.value === '') return false;

    if (nativeEvent.inputType === 'deleteContentBackward' && element.previousSibling) {
      return element.previousSibling.focus();
    }


    if (element.nextSibling) {
      return element.nextSibling.focus();
    }
  };

  const handleKeyDown = (e) => {
    let element = e.target
    let nativeEvent = e.nativeEvent

    // hanya utk handle case backspace padahal blm ada isi, pengen mundur
    if (nativeEvent.code === 'Backspace' && element.value === '') {
      return element.previousSibling.focus();
    }

    // utk case me replace
    // if (nativeEvent.code !== 'Backspace' && element.value) {
    //   element.value = nativeEvent.key
    //   return element.nextSibling.focus();
    // }
  }

  const verifyOTPFirebase = async (event) => {
    event.preventDefault();
    let a = document.getElementById("digit-1").value;
    let b = document.getElementById("digit-2").value;
    let c = document.getElementById("digit-3").value;
    let d = document.getElementById("digit-4").value;
    let e = document.getElementById("digit-5").value;
    let f = document.getElementById("digit-6").value;
    let otpCode = a + b + c + d + e + f

    let result = await window.confirmationResult.confirm(otpCode)
    console.log("开始与后端服务器验证")
    let backEndResponse = await dispatch(verifyFirebaseOTP(result))
    if (backEndResponse.result == 'ok') {
      let token = cookies.get('token')
      if (token) navigate("/")
    } else {
      alert(backEndResponse.result)
    }
  }

  return (
    <div style={{ height: '30vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', marginTop: 50 }} >
      <div style={miniGreyFont} >Verifikasi nomer kamu</div>
      <div style={{ fontWeight: 'bold' }} >+62 {phone}</div>
      <div style={miniGreyFont} >Kami sudah mengirimkan kode OTP via Whatsapp</div>
      <form method="get" className="digit-group input-container" data-group-name="digits" data-autosubmit="false" autoComplete="off">
        {
          [1,2,3,4,5,6].map((item, index) => (
            <input key={index} onKeyDown={(e) => handleKeyDown(e)} onChange={(e) => handleChange(e)} style={{ width: 40, height: 40, margin: '20px 10px', fontSize: 25, textAlign: 'center' }} type="tel" maxLength="1" size="1"  id={"digit-" + item} name="digit-1" data-next="digit-2" autoFocus={index === 0}  />
          ))
        }
      </form>
      <Button variant='contained' style={{ width: 400, height: 50 }} onClick={verifyOTPFirebase} >Verifikasi</Button>
      <Button style={{ fontSize: 12 }} >Kirim ulang kode OTP</Button>
    </div>
  )
}

export default OtpVerify