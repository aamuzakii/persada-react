import React from 'react'
import { useState } from 'react'
import OtpVerify from '../components/login/OtpVerify'
import Input from '../components/login/Input'
import Navbar from '../components/home/AdvNavbar'

function Login() {

  const [state, setState] = useState('entrance')
  const [phone, setPhone] = useState('')

  if (state == 'entrance') {
    return (
      <>
        <Navbar isShowNotifIcon={false} isShowBackButton={true}  ></Navbar>
        <Input setLoginState={setState} setPhone={setPhone} phone={phone} />
      </>
    )
  } else {
    return (
      <>
        <Navbar isShowBackButton={true} ></Navbar>
        <OtpVerify phone={phone} />
      </>
    )
  }
}

export default Login