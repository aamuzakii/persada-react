import { ADD_FAVOURITE, SET_INSIDE_CART, SET_INSIDE_CART_ARRAY, SET_IS_CART_FILLED, SET_IS_LOADING, SET_PRODUCT_BY_CATEGORY, SET_PRODUCT_TO_SHOW, SET_SEARCH_RESULT, SET_TOTAL_PRICE_IN_CART, SET_CUSTOMER_INFO, SET_ORDER_BY_TYPE, SET_COOKIE } from '../actionTypes'
import Cookies from 'universal-cookie';

const BASE_URI = process.env.REACT_APP_BASE_URI

export function addToFavourite(input) {
  return {
    type: ADD_FAVOURITE,
    payload: input
  }
}

export function setProductByCategory(input) {
  return {
    type: SET_PRODUCT_BY_CATEGORY,
    payload: input
  }
}

export function setInsideCart(input) {
  return {
    type: SET_INSIDE_CART,
    payload: input
  }
}

export function setTotalPriceInCart(input) {
  return {
    type: SET_TOTAL_PRICE_IN_CART,
    payload: input
  }
}

export function setInsideCartArray(input) {
  return {
    type: SET_INSIDE_CART_ARRAY,
    payload: input
  }
}

export function setSearchResult(input) {
  return {
    type: SET_SEARCH_RESULT,
    payload: input
  }
}

export function setIsLoading(input) {
  return {
    type: SET_IS_LOADING,
    payload: input
  }
}

export function setIsCartFilled(input) {
  return {
    type: SET_IS_CART_FILLED,
    payload: input
  }
}

export function setCustomerInfo(input) {
  return {
    type: SET_CUSTOMER_INFO,
    payload: input
  }
}

export function setProductToShow(input) {
  return {
    type: SET_PRODUCT_TO_SHOW,
    payload: input
  }
}

export function setOrderByType(input) {
  return {
    type: SET_ORDER_BY_TYPE,
    payload: input
  }
}

export function setCookie(input) {
  return {
    type: SET_COOKIE,
    payload: input
  }
}

export function fetchAllProducts() {
  return ((dispatch) => {
    let url = `${BASE_URI}/products`

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      credentials: 'include'
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setProductToShow(result))
      })
      .catch(error => console.error('error', error));
  })
}

export function fetchProductsAndCategory() {
  return ((dispatch) => {
    let url = `${BASE_URI}/products_and_category`

    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setProductByCategory(result))
      })
      .catch(error => console.error('error', error));
  })
}

export function fetchOrderByStatus(status) {
  return ((dispatch) => {
    let url = `${BASE_URI}/orders/index_by_status?status=${status}`
  
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setOrderByType(result))
      })
      .catch(error => console.error('error', error));
  })
} 

export function postOrder(payload) {
  return ((dispatch) => {
    let url = `${BASE_URI}/orders`

    let header = new Headers();
    header.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload),
      credentials: 'include'
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        // dispatch(setProductByCategory(result))
      })
      .catch(error => console.error('error', error));
  })
}

export function postOTP(payload) {
  return ((dispatch) => {
    let url = `${BASE_URI}/authentications/post_otp`

    let header = new Headers();
    header.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload)
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        const cookies = new Cookies();
        cookies.set('token', result.token, { path: '/' });
        // dispatch(setCookie(result))

      })
      .catch(error => console.error('error', error));
  })
}

export function requestOTP(payload) {
  return ((dispatch) => {
    let url = `${BASE_URI}/authentications/request_otp`

    let header = new Headers();
    header.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload)
    };
    
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          const cookies = new Cookies();
          cookies.set('token', result.token, { path: '/' });
          dispatch(setCookie(result.token))
        }
      })
      .catch(error => console.error('error', error));
  })
}