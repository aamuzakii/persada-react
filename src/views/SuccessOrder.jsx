import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookie = new Cookies

function SuccessOrder() {
  const navigate = useNavigate();

  let isEligible = false
  if (cookie.get('prev_url') === 'post_order') isEligible = true
  useEffect(() => {
    if (!isEligible) navigate(-1)
  }, [])

  return (
    <div>
      {
        isEligible
        ? <p>SUCCESS</p>
        : <></>
      }
    </div>
  )
}

export default SuccessOrder