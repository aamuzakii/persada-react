import { ADD_FAVOURITE, SET_INSIDE_CART, SET_IS_CART_FILLED, SET_IS_LOADING, SET_PRODUCT_BY_CATEGORY, SET_PRODUCT_TO_SHOW, SET_SEARCH_RESULT, SET_TOTAL_PRICE_IN_CART, SET_CUSTOMER_INFO, SET_ORDER_BY_TYPE, SET_COOKIE, SET_LIST_CATEGORY, SET_COMPLETE_PRODUCT, SET_CART_STEP, ORDER_DETAIL } from '../actionTypes'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const BASE_URI = process.env.REACT_APP_BASE_URI
const LAMBDA_GET_ALL_PRODUCTS = process.env.REACT_APP_LAMBDA_GET_ALL_PRODUCTS || 'https://lizcqnyw2afbkpolqgydg5aaci0kecgq.lambda-url.ap-southeast-3.on.aws/'

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

export function setListCategory(input) {
  return {
    type: SET_LIST_CATEGORY,
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

export function setCompleteProduct(input) {
  return {
    type: SET_COMPLETE_PRODUCT,
    payload: input
  }
}

export function setOrderByType(input) {
  return {
    type: SET_ORDER_BY_TYPE,
    payload: input
  }
}

export function setOrderDetail(input) {
  return {
    type: ORDER_DETAIL,
    payload: input
  }
}

export function setCookie(input) {
  return {
    type: SET_COOKIE,
    payload: input
  }
}

export function setCartStep(input) {
  return {
    type: SET_CART_STEP,
    payload: input
  }
}

export function fetchAllProducts() {
  return ((dispatch) => {
    let url = LAMBDA_GET_ALL_PRODUCTS

    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    dispatch(setIsLoading(true))
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setProductToShow(result))
        dispatch(setCompleteProduct(result))
      })
      .finally(()=> {
        dispatch(setIsLoading(false))
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

export function fetchListCategories() {
  return ((dispatch) => {
    let url = `${BASE_URI}/categories`

    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setListCategory(result))
      })
      .catch(error => console.error('error', error));
  })
}

export function fetchOrderByStatus(status) {
  return ((dispatch) => {
    let url = `${BASE_URI}/orders/index_by_status?status=${status}`
    
    let header = new Headers();
    header.append("Authorization", cookies.get("token"));
  
    let requestOptions = {
      method: 'GET',
      headers: header,
      redirect: 'follow'
    };

    dispatch(setIsLoading(true))
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (Array.isArray(result)) dispatch(setOrderByType(result))
      })
      .finally(()=> {
        dispatch(setIsLoading(false))
      })
      .catch(error => console.error('error', error));
  })
} 

export function fetchOrderDetail(id) {
  return ((dispatch) => {
    let url = `${BASE_URI}/orders/${id}`
    
    let header = new Headers();
    header.append("Authorization", cookies.get("token"));
  
    let requestOptions = {
      method: 'GET',
      headers: header,
      redirect: 'follow'
    };

    dispatch(setIsLoading(true))
    
    fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch(setOrderDetail(result))
      })
      .finally(()=> {
        dispatch(setIsLoading(false))
      })
      .catch(error => console.error('error', error));
  })
} 

export function postOrder(payload) {
  return ((dispatch) => {
    let url = `${BASE_URI}/orders`

    let header = new Headers();
    header.append("Content-Type", "application/json");
    header.append("Authorization", cookies.get("token"));

    let requestOptions = {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload),
    };
    
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.code === 201) {
          cookies.set('recent_posted_order', result.data.order_number, {path: '/', expires: new Date(Date.now()+5000)});
        }
        return result
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
    
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          const cookies = new Cookies();
          cookies.set('token', result.token, { path: '/' });
          return { result: 'ok' }
        } else {
          return { result: result.message }
        }
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

export function verifyFirebaseOTP(payload) {
  return ((dispatch) => {
    let url = `${BASE_URI}/authentications/firebase_otp_verification`

    let header = new Headers();
    header.append("Content-Type", "application/json");

    let requestOptions = {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload)
    };

    console.log("payload:", payload)
    
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          const cookies = new Cookies();
          cookies.set('token', result.token, { path: '/' });
          return { result: 'ok' }
        } else {
          return { result: result.message }
        }
      })
      .catch(error => console.error('error', error));
  })
}

export function googleLogin(payload) {
  return ((dispatch) => {
    let url = `${BASE_URI}/authentications/google_login`

    let header = new Headers();
    header.append("Content-Type", "application/json");
    header.append("Authorization", cookies.get("gtoken"));

    let requestOptions = {
      method: 'POST',
      headers: header,
      body: JSON.stringify(payload)
    };
    
    const profileData = payload.profileObj
    
    return fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.token) {
          const cookies = new Cookies();
          cookies.set('token', result.token, { path: '/' });
          cookies.set('profile_data', profileData, { path: '/' });
          dispatch(setCookie(result.token))
        }
      })
      .catch(error => console.error('error', error));
  })
}